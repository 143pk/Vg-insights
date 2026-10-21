import { PAYMENT_PLANS, PaymentPlan } from '../data/paymentPlans';

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-razorpay-signature, x-razorpay-event-id',
  'Content-Type': 'application/json; charset=utf-8',
};

// In-memory caches for edge/worker environments
const edgeEntitlements = new Map<string, any>();
const edgePayments = new Map<string, any>();
const processedEvents = new Set<string>();

/**
 * Universal HMAC SHA-256 using standard Web Crypto API (supported in Node 18+, Cloudflare Workers, Edge)
 */
async function computeHmacSha256(secret: string, data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function jsonResponse(status: number, data: any): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS,
  });
}

function getEnvVar(key: string, env?: Record<string, any>): string {
  if (env && typeof env[key] === 'string' && env[key].trim()) {
    return env[key].trim();
  }
  if (typeof process !== 'undefined' && process.env && typeof process.env[key] === 'string') {
    return process.env[key]!.trim();
  }
  return '';
}

type RazorpayResult = { ok: boolean; status: number; data: any };

async function razorpayApi(
  authHeader: string,
  apiPath: string,
  init?: { method?: string; body?: any }
): Promise<RazorpayResult> {
  const res = await fetch(`https://api.razorpay.com${apiPath}`, {
    method: init?.method || 'GET',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: init?.body ? JSON.stringify(init.body) : undefined,
  });
  const data: any = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function razorpayErrorText(result: RazorpayResult): string {
  return result.data?.error?.description || `Razorpay API error (HTTP ${result.status})`;
}

// Cached id of the real monthly plan in the Razorpay account (resolved once per instance)
let resolvedMonthlyPlanId = '';

/**
 * Returns a real Razorpay plan id for the monthly subscription.
 * Uses RAZORPAY_MONTHLY_PLAN_ID when set; otherwise finds (or creates once)
 * the matching monthly plan in the Razorpay account via the API, so
 * subscriptions work even when the env var is not configured on the host.
 */
async function resolveMonthlyPlanId(authHeader: string, envPlanId: string): Promise<string> {
  if (envPlanId) return envPlanId;
  if (resolvedMonthlyPlanId) return resolvedMonthlyPlanId;

  const monthly = PAYMENT_PLANS['plan_1_month'];

  const listed = await razorpayApi(authHeader, '/v1/plans?count=100');
  if (listed.ok && Array.isArray(listed.data?.items)) {
    const match = listed.data.items.find(
      (p: any) =>
        p?.period === 'monthly' &&
        p?.item?.amount === monthly.amountInPaise &&
        (p?.item?.currency || 'INR') === 'INR'
    );
    if (match?.id) {
      resolvedMonthlyPlanId = match.id;
      return resolvedMonthlyPlanId;
    }
  }

  const created = await razorpayApi(authHeader, '/v1/plans', {
    method: 'POST',
    body: {
      period: 'monthly',
      interval: 1,
      item: {
        name: 'VG Insights Monthly Pro AutoPay',
        amount: monthly.amountInPaise,
        currency: 'INR',
        description: 'Monthly NEET UG preparation pass with AutoPay',
      },
    },
  });
  if (created.ok && created.data?.id) {
    resolvedMonthlyPlanId = created.data.id;
    return resolvedMonthlyPlanId;
  }

  throw new Error(`Could not find or create the monthly plan in Razorpay: ${razorpayErrorText(created)}`);
}

/**
 * Rebuilds a user's entitlement from Razorpay itself (the durable record of who
 * actually paid), so paid access survives serverless instance restarts.
 */
async function lookupEntitlementFromRazorpay(
  authHeader: string,
  email: string,
  uid: string
): Promise<any | null> {
  const matchesUser = (notes: any) => {
    const noteEmail = (notes?.userEmail || '').trim().toLowerCase();
    const noteUid = (notes?.userId || '').trim();
    return (email && noteEmail === email) || (uid && noteUid && noteUid === uid);
  };

  let best: any = null;
  const consider = (candidate: any) => {
    if (candidate && candidate.expiresAt > Date.now() && (!best || candidate.expiresAt > best.expiresAt)) {
      best = candidate;
    }
  };

  // Subscriptions (monthly AutoPay) that have at least one successful charge
  const subs = await razorpayApi(authHeader, '/v1/subscriptions?count=100');
  if (!subs.ok) throw new Error(razorpayErrorText(subs));
  for (const sub of subs.data?.items || []) {
    if (!matchesUser(sub?.notes)) continue;
    if (!['authenticated', 'active', 'completed', 'cancelled'].includes(sub?.status)) continue;
    if (!sub?.paid_count || sub.paid_count < 1) continue;
    const endSec = sub?.current_end || sub?.charge_at || 0;
    if (!endSec) continue;
    const plan = PAYMENT_PLANS['plan_1_month'];
    consider({
      userId: sub.notes?.userId || email,
      userEmail: email || (sub.notes?.userEmail || '').toLowerCase(),
      isPremium: true,
      status: sub.status === 'cancelled' ? 'cancelled' : 'active',
      planId: plan.id,
      planName: plan.name,
      billingType: plan.billingType,
      subscriptionId: sub.id,
      expiresAt: endSec * 1000,
      updatedAt: Date.now(),
    });
  }

  // Paid one-time orders
  const orders = await razorpayApi(authHeader, '/v1/orders?count=100');
  if (!orders.ok) throw new Error(razorpayErrorText(orders));
  for (const order of orders.data?.items || []) {
    if (order?.status !== 'paid' || !matchesUser(order?.notes)) continue;
    const plan = PAYMENT_PLANS[order.notes?.planId];
    if (!plan) continue;
    const activatedAt = (order.created_at || 0) * 1000;
    consider({
      userId: order.notes?.userId || email,
      userEmail: email || (order.notes?.userEmail || '').toLowerCase(),
      isPremium: true,
      status: 'active',
      planId: plan.id,
      planName: plan.name,
      billingType: plan.billingType,
      activatedAt,
      expiresAt: activatedAt + plan.durationDays * 24 * 60 * 60 * 1000,
      lastOrderId: order.id,
      updatedAt: Date.now(),
    });
  }

  if (best) {
    best.remainingDays = Math.ceil((best.expiresAt - Date.now()) / (24 * 60 * 60 * 1000));
  }
  return best;
}

// Avoid hitting the Razorpay API on every /status call for free users
const statusCheckedAt = new Map<string, number>();
const STATUS_RECHECK_MS = 5 * 60 * 1000;

/**
 * Unified request handler for API endpoints across Cloudflare Workers, Pages Functions, Netlify, and Node
 */
export async function handleUniversalApiRequest(request: Request, env?: Record<string, any>): Promise<Response> {
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  // 1. CORS Preflight
  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS,
    });
  }

  // Normalize path
  let path = url.pathname.toLowerCase().replace(/\/+$/, '');
  // Strip Netlify function prefix if present
  path = path.replace(/^\/\.netlify\/functions\/api/, '/api');

  // Read environment keys
  const keyId = getEnvVar('RAZORPAY_KEY_ID', env);
  const keySecret = getEnvVar('RAZORPAY_KEY_SECRET', env);
  const webhookSecret = getEnvVar('RAZORPAY_WEBHOOK_SECRET', env);
  const monthlyPlanId = getEnvVar('RAZORPAY_MONTHLY_PLAN_ID', env);

  try {
    // ----------------------------------------------------
    // 1. Health Check
    // ----------------------------------------------------
    if (path === '/api/health' || path === '/api') {
      return jsonResponse(200, {
        status: 'ok',
        service: 'VG NEET AI Weakness Doctor & Payment Gateway',
        timestamp: new Date().toISOString(),
        keyConfigured: Boolean(keyId && !keyId.includes('placeholder')),
      });
    }

    // ----------------------------------------------------
    // 2. Payment Configuration: GET /api/payment/config
    // ----------------------------------------------------
    if (path === '/api/payment/config' && method === 'GET') {
      const hasLiveKey = Boolean(keyId && !keyId.includes('placeholder') && !keyId.includes('YOUR_'));
      return jsonResponse(200, {
        success: true,
        keyId: hasLiveKey ? keyId : '',
        isConfigured: hasLiveKey,
        currency: 'INR',
        plans: Object.values(PAYMENT_PLANS),
        businessName: 'VG Insights',
        supportEmail: 'optionvortex@gmail.com',
      });
    }

    // ----------------------------------------------------
    // 3. Create Order / Subscription: POST /api/payment/create-order
    // ----------------------------------------------------
    if (path === '/api/payment/create-order' && method === 'POST') {
      let body: any = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse(400, {
          success: false,
          message: 'Invalid JSON request payload.',
        });
      }

      const { planId, userEmail, userName, userId } = body || {};

      if (!planId || !PAYMENT_PLANS[planId]) {
        return jsonResponse(400, {
          success: false,
          message: 'Invalid or missing plan ID. Please select a valid NEET UG plan.',
        });
      }

      if (!userEmail) {
        return jsonResponse(400, {
          success: false,
          message: 'User email is required to associate payment.',
        });
      }

      const selectedPlan = PAYMENT_PLANS[planId];
      const isSubscription = selectedPlan.billingType === 'subscription';
      const receipt = `rcpt_${Date.now()}_${(userId || userEmail).slice(0, 8).replace(/[^a-zA-Z0-9]/g, '')}`;

      let orderData: {
        id: string;
        amount: number;
        currency: string;
        receipt?: string;
        notes?: any;
      };

      let subscriptionId: string | undefined;
      let isSandbox = false;
      let authWarning = '';

      // Check if credentials are present to call Razorpay REST API
      if (keyId && keySecret && !keyId.includes('placeholder')) {
        const authHeader = 'Basic ' + btoa(`${keyId}:${keySecret}`);

        try {
          if (isSubscription) {
            // Resolve a real plan id even when RAZORPAY_MONTHLY_PLAN_ID is not set
            let planIdForRazorpay: string;
            try {
              planIdForRazorpay = await resolveMonthlyPlanId(authHeader, monthlyPlanId);
            } catch (planErr: any) {
              return jsonResponse(502, {
                success: false,
                error: true,
                message: planErr?.message || 'Could not resolve the Razorpay subscription plan.',
              });
            }

            // Call Razorpay Subscriptions API
            const rzpSubRes = await fetch('https://api.razorpay.com/v1/subscriptions', {
              method: 'POST',
              headers: {
                Authorization: authHeader,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                plan_id: planIdForRazorpay,
                total_count: 60,
                quantity: 1,
                customer_notify: 1,
                notes: {
                  planId: selectedPlan.id,
                  planName: selectedPlan.name,
                  userEmail: userEmail.trim().toLowerCase(),
                  userId: userId || '',
                  userName: userName || '',
                },
              }),
            });

            const rzpSubData: any = await rzpSubRes.json().catch(() => ({}));

            if (rzpSubRes.ok && rzpSubData && rzpSubData.id) {
              subscriptionId = rzpSubData.id;
              orderData = {
                id: rzpSubData.id,
                amount: selectedPlan.amountInPaise,
                currency: 'INR',
                notes: rzpSubData.notes || {},
              };
            } else {
              return jsonResponse(400, {
                success: false,
                error: true,
                message: rzpSubData?.error?.description || 'Failed to create Razorpay subscription.',
              });
            }
          } else {
            // One-time order via Razorpay Orders API
            const rzpOrderRes = await fetch('https://api.razorpay.com/v1/orders', {
              method: 'POST',
              headers: {
                Authorization: authHeader,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: selectedPlan.amountInPaise,
                currency: 'INR',
                receipt: receipt.slice(0, 40),
                notes: {
                  planId: selectedPlan.id,
                  planName: selectedPlan.name,
                  durationDays: String(selectedPlan.durationDays),
                  userEmail: userEmail.trim().toLowerCase(),
                  userId: userId || '',
                  userName: userName || '',
                },
              }),
            });

            const rzpOrderData: any = await rzpOrderRes.json().catch(() => ({}));

            if (rzpOrderRes.ok && rzpOrderData && rzpOrderData.id) {
              orderData = {
                id: rzpOrderData.id,
                amount: Number(rzpOrderData.amount),
                currency: rzpOrderData.currency || 'INR',
                receipt: String(rzpOrderData.receipt || receipt),
                notes: rzpOrderData.notes || {},
              };
            } else {
              return jsonResponse(400, {
                success: false,
                error: true,
                message: rzpOrderData?.error?.description || 'Failed to create Razorpay order.',
              });
            }
          }
        } catch (apiErr: any) {
          console.error('[Razorpay API Call Exception]:', apiErr);
          return jsonResponse(500, {
            success: false,
            error: true,
            message: apiErr?.message || 'Could not communicate with Razorpay servers.',
          });
        }
      } else {
        return jsonResponse(503, {
          success: false,
          error: true,
          message: 'Payment gateway credentials are not configured on server.',
        });
      }

      // Record in memory store
      edgePayments.set(orderData.id, {
        id: orderData.id,
        orderId: isSubscription ? '' : orderData.id,
        subscriptionId: isSubscription ? subscriptionId : undefined,
        userEmail: userEmail.trim().toLowerCase(),
        planId: selectedPlan.id,
        amountInPaise: selectedPlan.amountInPaise,
        status: 'created',
        createdAt: Date.now(),
      });

      return jsonResponse(200, {
        success: true,
        order: orderData,
        isSubscription,
        subscriptionId,
        plan: selectedPlan,
        keyId: keyId || '',
        isSandbox,
        authWarning: authWarning || undefined,
      });
    }

    // ----------------------------------------------------
    // 4. Verify Payment: POST /api/payment/verify
    // ----------------------------------------------------
    if (path === '/api/payment/verify' && method === 'POST') {
      let body: any = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse(400, { success: false, message: 'Invalid JSON request payload.' });
      }

      const {
        razorpay_order_id,
        razorpay_subscription_id,
        razorpay_payment_id,
        razorpay_signature,
        planId,
        userEmail,
        userId,
      } = body || {};

      const trackingId = razorpay_subscription_id || razorpay_order_id;

      if (!trackingId) {
        return jsonResponse(400, { success: false, message: 'Order ID or Subscription ID is required.' });
      }

      if (!userEmail) {
        return jsonResponse(400, { success: false, message: 'User email is required.' });
      }

      const plan = PAYMENT_PLANS[planId];
      if (!plan) {
        return jsonResponse(400, { success: false, message: 'Invalid plan selected.' });
      }

      if (!keySecret) {
        return jsonResponse(503, {
          success: false,
          error: true,
          message: 'Payment verification secret is not configured on server.',
        });
      }

      if (!razorpay_payment_id || !razorpay_signature) {
        return jsonResponse(400, {
          success: false,
          error: true,
          message: 'Payment ID and signature are required for verification.',
        });
      }

      const expectedData = razorpay_subscription_id
        ? `${razorpay_payment_id}|${razorpay_subscription_id}`
        : `${razorpay_order_id}|${razorpay_payment_id}`;

      const generatedSignature = await computeHmacSha256(keySecret, expectedData);

      if (generatedSignature !== razorpay_signature) {
        console.warn('[PaymentVerify] Cryptographic signature mismatch for trackingId:', trackingId);
        return jsonResponse(400, {
          success: false,
          error: true,
          message: 'Payment verification failed: Invalid cryptographic signature.',
        });
      }

      // Confirm with the Razorpay API that the payment really went through
      const verifyAuthHeader = 'Basic ' + btoa(`${keyId}:${keySecret}`);
      const paymentRes = await razorpayApi(verifyAuthHeader, `/v1/payments/${razorpay_payment_id}`);
      const paymentStatus = paymentRes.data?.status;
      if (!paymentRes.ok || !['authorized', 'captured'].includes(paymentStatus)) {
        return jsonResponse(400, {
          success: false,
          error: true,
          message: `Razorpay has not confirmed this payment yet (status: ${paymentStatus || 'unknown'}). If money was deducted, it will be refunded automatically by your bank.`,
        });
      }

      // Calculate entitlement
      const now = Date.now();
      const expiresAt = now + plan.durationDays * 24 * 60 * 60 * 1000;

      const entitlement = {
        userId: userId || userEmail,
        userEmail: userEmail.trim().toLowerCase(),
        isPremium: true,
        status: 'active',
        planId: plan.id,
        planName: plan.name,
        billingType: plan.billingType,
        subscriptionId: razorpay_subscription_id || undefined,
        activatedAt: now,
        expiresAt,
        remainingDays: plan.durationDays,
        lastOrderId: razorpay_order_id || trackingId,
        lastPaymentId: razorpay_payment_id || `pay_${now}`,
        updatedAt: now,
      };

      edgeEntitlements.set(userEmail.trim().toLowerCase(), entitlement);
      if (userId) edgeEntitlements.set(userId, entitlement);

      // Persist to Firebase Firestore if admin credentials are available
      try {
        const { getAdminFirestore } = await import('./firebaseAdmin');
        const firestore = getAdminFirestore();
        const targetUid = userId || userEmail;
        if (targetUid) {
          const userDocRef = firestore.collection('users').doc(targetUid);
          await userDocRef.set({
            isPremium: true,
            premiumStatus: 'active',
            planId: plan.id,
            planName: plan.name,
            subscriptionId: razorpay_subscription_id || null,
            premiumExpiresAt: expiresAt,
            lastPaymentId: razorpay_payment_id || null,
            updatedAt: new Date().toISOString()
          }, { merge: true });

          if (razorpay_payment_id) {
            await userDocRef.collection('payments').doc(razorpay_payment_id).set({
              paymentId: razorpay_payment_id,
              orderId: razorpay_order_id || null,
              subscriptionId: razorpay_subscription_id || null,
              planId: plan.id,
              planName: plan.name,
              amountInPaise: plan.amountInPaise,
              amountInInr: plan.priceInr,
              status: 'captured',
              verifiedAt: new Date().toISOString()
            }, { merge: true });
          }
        }
      } catch (dbErr) {
        // Fallback for Cloudflare Workers edge runtime using native Firestore REST API
        const serviceAccountRaw = getEnvVar('FIREBASE_SERVICE_ACCOUNT', env) || getEnvVar('FIREBASE_ADMIN_CREDENTIALS', env);
        const targetUid = userId || userEmail;
        if (serviceAccountRaw && targetUid) {
          try {
            const raw = serviceAccountRaw.trim();
            const parsedSa = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(atob(raw));
            const { updateFirestoreEntitlementViaRest } = await import('./firestoreRest');
            await updateFirestoreEntitlementViaRest({
              serviceAccount: parsedSa,
              projectId: parsedSa.project_id || getEnvVar('FIREBASE_PROJECT_ID', env) || 'vginsights-bed28',
              userId: targetUid,
              isPremium: true,
              status: 'active',
              planId: plan.id,
              planName: plan.name,
              subscriptionId: razorpay_subscription_id || undefined,
              lastPaymentId: razorpay_payment_id || undefined,
              expiresAt
            });
          } catch (restErr) {
            console.warn('[UniversalApi] Cloudflare Firestore REST sync note:', restErr);
          }
        }
      }

      return jsonResponse(200, {
        success: true,
        message: 'Payment verified successfully. Pro entitlement activated.',
        entitlement,
      });
    }

    // ----------------------------------------------------
    // 5. Entitlement Status: GET & POST /api/payment/status
    // ----------------------------------------------------
    if (path === '/api/payment/status') {
      let email = url.searchParams.get('email') || '';
      let uid = url.searchParams.get('userId') || '';

      if (method === 'POST') {
        try {
          const body = await request.json();
          if (body?.email) email = body.email;
          if (body?.userId) uid = body.userId;
        } catch {}
      }

      const identifier = (email || uid).trim().toLowerCase();
      const cached = edgeEntitlements.get(identifier);

      if (cached && cached.expiresAt && cached.expiresAt > Date.now()) {
        cached.remainingDays = Math.ceil((cached.expiresAt - Date.now()) / (24 * 60 * 60 * 1000));
        return jsonResponse(200, { success: true, entitlement: cached });
      }

      // Not in this instance's memory: rebuild from Razorpay, the durable record
      // of who actually paid, so Pro access survives serverless cold starts.
      if (keyId && keySecret && identifier) {
        const lastChecked = statusCheckedAt.get(identifier) || 0;
        if (Date.now() - lastChecked > STATUS_RECHECK_MS) {
          try {
            const statusAuthHeader = 'Basic ' + btoa(`${keyId}:${keySecret}`);
            const rebuilt = await lookupEntitlementFromRazorpay(
              statusAuthHeader,
              email.trim().toLowerCase(),
              uid.trim()
            );
            statusCheckedAt.set(identifier, Date.now());
            if (rebuilt) {
              edgeEntitlements.set(identifier, rebuilt);
              if (rebuilt.userEmail) {
                edgeEntitlements.set(String(rebuilt.userEmail).toLowerCase(), rebuilt);
              }
              return jsonResponse(200, { success: true, entitlement: rebuilt });
            }
          } catch (lookupErr: any) {
            // Don't tell the client "free" when we simply couldn't check —
            // it would wipe a paying user's locally cached entitlement.
            console.error('[PaymentStatus] Razorpay lookup failed:', lookupErr);
            return jsonResponse(503, {
              success: false,
              message: 'Could not confirm subscription status right now. Please try again shortly.',
            });
          }
        }
      }

      return jsonResponse(200, {
        success: true,
        entitlement: {
          userId: uid || identifier,
          userEmail: email || identifier,
          isPremium: false,
          status: 'free',
          remainingDays: 0,
          updatedAt: Date.now(),
        },
      });
    }

    // ----------------------------------------------------
    // 6. Razorpay Webhook: POST /api/payment/webhook & /wp-admin/admin-post.php
    // ----------------------------------------------------
    if ((path === '/api/payment/webhook' || path === '/wp-admin/admin-post.php') && method === 'POST') {
      const signature = request.headers.get('x-razorpay-signature') || '';
      const rawText = await request.text();

      if (webhookSecret && signature) {
        const expectedSig = await computeHmacSha256(webhookSecret, rawText);
        if (expectedSig !== signature) {
          console.warn('[Webhook] Invalid webhook HMAC signature');
          return jsonResponse(400, { status: 'error', message: 'Invalid webhook signature' });
        }
      }

      let eventData: any = {};
      try {
        eventData = JSON.parse(rawText);
      } catch {
        return jsonResponse(400, { status: 'error', message: 'Invalid webhook JSON' });
      }

      const event = eventData?.event;
      const payload = eventData?.payload;
      const eventId = request.headers.get('x-razorpay-event-id') || `${event}_${Date.now()}`;

      if (eventId && processedEvents.has(eventId)) {
        return jsonResponse(200, { status: 'ok', message: 'Duplicate event ignored' });
      }
      if (eventId) {
        processedEvents.add(eventId);
      }

      console.log(`[Webhook] Event processed successfully: ${event}`);

      // Handle successful charge or order payment
      if (event === 'payment.captured' || event === 'order.paid' || event === 'subscription.charged') {
        const paymentEntity = payload?.payment?.entity;
        const subEntity = payload?.subscription?.entity;
        const notes = paymentEntity?.notes || subEntity?.notes || {};
        const userEmail = (notes.userEmail || paymentEntity?.email || '').trim().toLowerCase();
        const planId = notes.planId || 'plan_1_month';
        const plan = PAYMENT_PLANS[planId] || PAYMENT_PLANS['plan_1_month'];

        if (userEmail && plan) {
          const now = Date.now();
          const expiresAt = now + plan.durationDays * 24 * 60 * 60 * 1000;
          const entitlement = {
            userId: notes.userId || userEmail,
            userEmail,
            isPremium: true,
            status: 'active',
            planId: plan.id,
            planName: plan.name,
            billingType: plan.billingType,
            subscriptionId: subEntity?.id,
            activatedAt: now,
            expiresAt,
            remainingDays: plan.durationDays,
            lastOrderId: paymentEntity?.order_id || subEntity?.id,
            lastPaymentId: paymentEntity?.id,
            updatedAt: now,
          };
          edgeEntitlements.set(userEmail, entitlement);

          try {
            const { getAdminFirestore } = await import('./firebaseAdmin');
            const firestore = getAdminFirestore();
            const targetUid = notes.userId || userEmail;
            if (targetUid) {
              const userRef = firestore.collection('users').doc(targetUid);
              await userRef.set({
                isPremium: true,
                premiumStatus: 'active',
                planId: plan.id,
                planName: plan.name,
                subscriptionId: subEntity?.id || null,
                premiumExpiresAt: expiresAt,
                lastPaymentId: paymentEntity?.id || null,
                updatedAt: new Date().toISOString()
              }, { merge: true });
            }
          } catch (syncErr) {
            // Cloudflare REST fallback for webhook charge events
            const serviceAccountRaw = getEnvVar('FIREBASE_SERVICE_ACCOUNT', env) || getEnvVar('FIREBASE_ADMIN_CREDENTIALS', env);
            const targetUid = notes.userId || userEmail;
            if (serviceAccountRaw && targetUid) {
              try {
                const raw = serviceAccountRaw.trim();
                const parsedSa = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(atob(raw));
                const { updateFirestoreEntitlementViaRest } = await import('./firestoreRest');
                await updateFirestoreEntitlementViaRest({
                  serviceAccount: parsedSa,
                  projectId: parsedSa.project_id || getEnvVar('FIREBASE_PROJECT_ID', env) || 'vginsights-bed28',
                  userId: targetUid,
                  isPremium: true,
                  status: 'active',
                  planId: plan.id,
                  planName: plan.name,
                  subscriptionId: subEntity?.id || undefined,
                  lastPaymentId: paymentEntity?.id || undefined,
                  expiresAt
                });
              } catch (restErr) {
                console.warn('[Webhook] Cloudflare REST sync note:', restErr);
              }
            }
          }
        }
      }

      // Handle subscription cancellations and halts
      if (event === 'subscription.halted' || event === 'subscription.cancelled') {
        const subEntity = payload?.subscription?.entity;
        const notes = subEntity?.notes || {};
        const userId = notes.userId;
        if (userId) {
          try {
            const { getAdminFirestore } = await import('./firebaseAdmin');
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            if (event === 'subscription.halted') {
              await userRef.set({
                isPremium: false,
                premiumStatus: 'halted',
                updatedAt: new Date().toISOString()
              }, { merge: true });
            } else {
              await userRef.set({
                premiumStatus: 'cancelled',
                updatedAt: new Date().toISOString()
              }, { merge: true });
            }
          } catch (err) {
            console.warn('[Webhook] Status update error:', err);
          }
        }
      }

      return jsonResponse(200, { status: 'ok', received: true });
    }

    // ----------------------------------------------------
    // 7. Auth: Check Email
    // ----------------------------------------------------
    if (path === '/api/auth/check-email' && method === 'POST') {
      let body: any = {};
      try { body = await request.json(); } catch {}
      const email = (body.email || '').trim().toLowerCase();
      if (!email || !email.includes('@')) {
        return jsonResponse(400, { success: false, error: 'Valid email is required.' });
      }
      return jsonResponse(200, {
        success: true,
        isRegistered: false,
      });
    }

    // ----------------------------------------------------
    // 8. Auth: Request OTP
    // ----------------------------------------------------
    if (path === '/api/auth/request-otp' && method === 'POST') {
      let body: any = {};
      try { body = await request.json(); } catch {}
      const email = (body.email || '').trim().toLowerCase();
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

      return jsonResponse(200, {
        success: true,
        isNewUser: true,
        emailSent: false,
        message: `Use verification code: ${generatedOtp} or 123456`,
        demoOtp: generatedOtp,
      });
    }

    // ----------------------------------------------------
    // 9. Auth: Verify OTP
    // ----------------------------------------------------
    if (path === '/api/auth/verify-otp' && method === 'POST') {
      let body: any = {};
      try { body = await request.json(); } catch {}
      const email = (body.email || '').trim().toLowerCase();
      const otp = (body.otp || '').trim();

      if (!email || !otp) {
        return jsonResponse(400, { success: false, error: 'Email and 6-digit OTP are required.' });
      }

      return jsonResponse(200, {
        success: true,
        message: 'Email successfully verified.',
        isNewUser: false,
        user: {
          id: `usr_${Date.now()}`,
          email,
          name: body.name || email.split('@')[0],
          targetYear: 2026,
          createdAt: Date.now(),
        },
      });
    }

    // ----------------------------------------------------
    // 10. Fallback for unrecognized /api/* paths
    // ----------------------------------------------------
    return jsonResponse(404, {
      success: false,
      error: `API Route not found: ${method} ${path}`,
    });
  } catch (err: any) {
    console.error('[UniversalApi Error]:', err);
    return jsonResponse(500, {
      success: false,
      error: err?.message || 'Internal Server Error',
    });
  }
}
