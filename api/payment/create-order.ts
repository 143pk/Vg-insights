import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import { PAYMENT_PLANS } from '../../src/data/paymentPlans';
import { authenticateFirebaseRequest, getAdminFirestore } from '../../src/server/firebaseAdmin';

let cachedMonthlyPlanId: string | null = null;

async function getOrCreateMonthlyPlanId(razorpay: Razorpay): Promise<string> {
  if (process.env.RAZORPAY_MONTHLY_PLAN_ID) {
    return process.env.RAZORPAY_MONTHLY_PLAN_ID.trim();
  }

  if (cachedMonthlyPlanId) {
    return cachedMonthlyPlanId;
  }

  // Attempt to fetch existing active plans or create a standard ₹199/month plan
  try {
    const plansList = await razorpay.plans.all({ count: 10 });
    const existing = plansList.items?.find((p: any) => 
      p.period === 'monthly' && 
      p.interval === 1 && 
      p.item?.amount === 19900 &&
      p.item?.currency === 'INR'
    );
    if (existing) {
      cachedMonthlyPlanId = existing.id;
      return existing.id;
    }
  } catch (err) {
    console.warn('[Razorpay] Could not list existing plans, creating new one:', err);
  }

  const created = await razorpay.plans.create({
    period: 'monthly',
    interval: 1,
    item: {
      name: 'VG Insights Monthly AutoPay',
      amount: 19900,
      currency: 'INR',
      description: 'Continuous monthly NEET UG preparation pass with AutoPay'
    }
  });

  if (created && created.id) {
    cachedMonthlyPlanId = created.id;
    return created.id;
  }

  throw new Error('Failed to resolve or create Razorpay Monthly Plan.');
}

export default async function createOrderHandler(req: Request, res: Response) {
  try {
    // 1. Authenticate the Firebase user on every request
    let authUser: { uid: string; email: string; name?: string };
    try {
      authUser = await authenticateFirebaseRequest(req.headers.authorization);
    } catch (authErr: any) {
      return res.status(401).json({
        success: false,
        error: true,
        message: authErr.message || 'Authentication required to initiate checkout.'
      });
    }

    const { planId } = req.body || {};
    const selectedPlan = PAYMENT_PLANS[planId || 'plan_1_month'];

    if (!selectedPlan) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Invalid plan selected. Please choose an active NEET UG preparation plan.'
      });
    }

    // 2. Validate live Razorpay credentials from environment / Secret Manager
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret || keyId.includes('placeholder')) {
      return res.status(503).json({
        success: false,
        error: true,
        message: 'Payment gateway configuration is incomplete on the server. Please contact administrator to set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.'
      });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret
    });

    const isSubscription = selectedPlan.billingType === 'subscription';
    let responseData: any;

    if (isSubscription) {
      // 3. Create real monthly subscription via Razorpay Subscriptions API
      const monthlyPlanId = await getOrCreateMonthlyPlanId(razorpay);
      const subscription = await razorpay.subscriptions.create({
        plan_id: monthlyPlanId,
        total_count: 60, // 5 years of monthly billing cycles
        quantity: 1,
        customer_notify: 1,
        notes: {
          userId: authUser.uid,
          userEmail: authUser.email,
          userName: authUser.name || '',
          planId: selectedPlan.id,
          planName: selectedPlan.name
        }
      });

      // 4. Record pending subscription in Firestore under the authenticated user's profile
      try {
        const firestore = getAdminFirestore();
        await firestore.collection('users').doc(authUser.uid).collection('subscriptions').doc(subscription.id).set({
          id: subscription.id,
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          billingType: 'subscription',
          status: 'created',
          amountInPaise: selectedPlan.amountInPaise,
          amountInInr: selectedPlan.priceInr,
          userId: authUser.uid,
          userEmail: authUser.email,
          createdAt: adminTimestamp(),
          updatedAt: adminTimestamp()
        }, { merge: true });
      } catch (dbErr) {
        console.warn('[Firestore] Could not record pending subscription:', dbErr);
      }

      responseData = {
        success: true,
        isSubscription: true,
        subscriptionId: subscription.id,
        keyId,
        plan: selectedPlan
      };
    } else {
      // 5. One-time fixed duration order for 3, 6, or 12 months
      const receipt = `rcpt_${Date.now()}_${authUser.uid.slice(0, 10)}`;
      const order = await razorpay.orders.create({
        amount: selectedPlan.amountInPaise,
        currency: 'INR',
        receipt,
        notes: {
          userId: authUser.uid,
          userEmail: authUser.email,
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          durationDays: String(selectedPlan.durationDays)
        }
      });

      try {
        const firestore = getAdminFirestore();
        await firestore.collection('users').doc(authUser.uid).collection('payments').doc(order.id).set({
          orderId: order.id,
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          billingType: 'one_time',
          status: 'created',
          amountInPaise: selectedPlan.amountInPaise,
          amountInInr: selectedPlan.priceInr,
          userId: authUser.uid,
          userEmail: authUser.email,
          createdAt: adminTimestamp(),
          updatedAt: adminTimestamp()
        }, { merge: true });
      } catch (dbErr) {
        console.warn('[Firestore] Could not record pending order:', dbErr);
      }

      responseData = {
        success: true,
        isSubscription: false,
        order,
        keyId,
        plan: selectedPlan
      };
    }

    return res.json(responseData);
  } catch (error: any) {
    console.error('[CreateOrderHandler] Error:', error);
    const rzpDesc = error?.error?.description || error?.description || error?.message;
    const isAuthFailed = rzpDesc === 'Authentication failed' || error?.statusCode === 401 || error?.error?.code === 'BAD_REQUEST_ERROR';
    const clientMessage = isAuthFailed
      ? 'Razorpay authentication failed: Invalid RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET in server environment. Please check your Razorpay API Keys in the dashboard.'
      : (rzpDesc || 'Failed to initialize payment checkout.');

    return res.status(500).json({
      success: false,
      error: true,
      message: clientMessage
    });
  }
}

function adminTimestamp() {
  return new Date().toISOString();
}
