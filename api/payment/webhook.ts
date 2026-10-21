import { Request, Response } from 'express';
import crypto from 'crypto';
import { PAYMENT_PLANS } from '../../src/data/paymentPlans';
import { getAdminFirestore } from '../../src/server/firebaseAdmin';

export default async function webhookHandler(req: Request, res: Response) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!webhookSecret || !signature) {
      console.warn('[Webhook] Missing webhook secret or x-razorpay-signature header');
      return res.status(400).json({ status: 'error', message: 'Webhook signature verification required' });
    }

    const rawPayload = typeof (req as any).rawBody === 'string'
      ? (req as any).rawBody
      : JSON.stringify(req.body);

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawPayload)
      .digest('hex');

    const bufExpected = Buffer.from(expectedSignature, 'utf-8');
    const bufActual = Buffer.from(signature, 'utf-8');
    const isValid = bufExpected.length === bufActual.length && crypto.timingSafeEqual(bufExpected, bufActual);

    if (!isValid) {
      console.warn('[Webhook] Invalid webhook HMAC signature received');
      return res.status(400).json({ status: 'error', message: 'Invalid signature' });
    }

    const event = req.body?.event;
    const payload = req.body?.payload;
    const eventId = (req.headers['x-razorpay-event-id'] as string) || `${event}_${Date.now()}`;

    // Memory-backed deduplication
    const globalState = globalThis as any;
    if (!globalState.__processedWebhookIds) {
      globalState.__processedWebhookIds = new Set<string>();
    }
    if (globalState.__processedWebhookIds.has(eventId)) {
      console.log(`[Webhook] Duplicate event already processed (memory): ${eventId}`);
      return res.status(200).json({ status: 'ok', message: 'Duplicate event ignored' });
    }
    globalState.__processedWebhookIds.add(eventId);
    if (globalState.__processedWebhookIds.size > 2000) {
      const first = globalState.__processedWebhookIds.values().next().value;
      if (first) globalState.__processedWebhookIds.delete(first);
    }

    // Attempt Firestore idempotency check if available
    try {
      const firestore = getAdminFirestore();
      const eventRef = firestore.collection('webhookEvents').doc(eventId);
      const eventSnap = await eventRef.get();
      if (eventSnap && eventSnap.exists) {
        console.log(`[Webhook] Duplicate event already processed (firestore): ${eventId}`);
        return res.status(200).json({ status: 'ok', message: 'Duplicate event ignored' });
      }

      await eventRef.set({
        eventId,
        event,
        processedAt: new Date().toISOString()
      });
    } catch (dbErr) {
      console.warn('[Webhook] Firestore idempotency log note:', dbErr);
    }

    console.log(`[Razorpay Webhook] Processing verified event: ${event}`);

    switch (event) {
      // 1. Subscription Activated or Authenticated
      case 'subscription.authenticated':
      case 'subscription.activated': {
        const subEntity = payload?.subscription?.entity;
        const subId = subEntity?.id;
        const notes = subEntity?.notes || {};
        const userId = notes.userId;
        const userEmail = (notes.userEmail || '').toLowerCase();
        const planId = notes.planId || 'plan_1_month';

        if (userId && subId) {
          const plan = PAYMENT_PLANS[planId] || PAYMENT_PLANS['plan_1_month'];
          const durationDays = plan.durationDays || 30;
          const expiresAt = Date.now() + (durationDays * 24 * 60 * 60 * 1000);

          try {
            const { PaymentStore } = await import('../../src/server/paymentStore');
            PaymentStore.activateEntitlement({
              userId,
              userEmail,
              planId: plan.id,
              subscriptionId: subId,
              paymentId: `pay_act_${Date.now()}`,
              billingType: 'subscription',
              source: 'webhook'
            });
          } catch {}

          try {
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            await userRef.set({
              isPremium: true,
              premiumStatus: 'active',
              planId: plan.id,
              planName: plan.name,
              subscriptionId: subId,
              premiumExpiresAt: expiresAt,
              updatedAt: new Date().toISOString()
            }, { merge: true });

            await userRef.collection('subscriptions').doc(subId).set({
              id: subId,
              planId: plan.id,
              planName: plan.name,
              status: 'active',
              billingType: 'subscription',
              chargeAt: subEntity.charge_at ? new Date(subEntity.charge_at * 1000).toISOString() : null,
              updatedAt: new Date().toISOString()
            }, { merge: true });
          } catch (dbErr) {
            console.warn('[Webhook] Firestore sync note for subscription.activated:', dbErr);
          }

          console.log(`[Webhook] Activated subscription ${subId} for user ${userId} (${userEmail})`);
        }
        break;
      }

      // 2. Subscription Successfully Charged (Recurring Monthly AutoPay Renewal)
      case 'subscription.charged': {
        const subEntity = payload?.subscription?.entity;
        const paymentEntity = payload?.payment?.entity;
        const subId = subEntity?.id;
        const notes = subEntity?.notes || paymentEntity?.notes || {};
        const userId = notes.userId;
        const paymentId = paymentEntity?.id;

        if (userId && subId) {
          const now = Date.now();
          let newExpiresAt = now + (30 * 24 * 60 * 60 * 1000);

          try {
            const { PaymentStore } = await import('../../src/server/paymentStore');
            const current = PaymentStore.getEntitlement(userId);
            const baseTime = current?.expiresAt && current.expiresAt > now ? current.expiresAt : now;
            newExpiresAt = baseTime + (30 * 24 * 60 * 60 * 1000);
            PaymentStore.activateEntitlement({
              userId,
              userEmail: notes.userEmail || '',
              planId: 'plan_1_month',
              subscriptionId: subId,
              paymentId: paymentId || `pay_sub_${Date.now()}`,
              billingType: 'subscription',
              source: 'webhook'
            });
          } catch {}

          try {
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            const userSnap = await userRef.get();
            const currentExpiresAt = userSnap && userSnap.exists ? (userSnap.data()?.premiumExpiresAt || now) : now;
            const baseTime = Math.max(currentExpiresAt, now);
            newExpiresAt = baseTime + (30 * 24 * 60 * 60 * 1000);

            await userRef.set({
              isPremium: true,
              premiumStatus: 'active',
              subscriptionId: subId,
              premiumExpiresAt: newExpiresAt,
              lastPaymentId: paymentId || null,
              updatedAt: new Date().toISOString()
            }, { merge: true });

            if (paymentId) {
              await userRef.collection('payments').doc(paymentId).set({
                paymentId,
                subscriptionId: subId,
                amountInPaise: paymentEntity.amount,
                amountInInr: Math.round(paymentEntity.amount / 100),
                status: 'captured',
                verifiedAt: new Date().toISOString()
              }, { merge: true });
            }
          } catch (dbErr) {
            console.warn('[Webhook] Firestore sync note for subscription.charged:', dbErr);
          }

          console.log(`[Webhook] Subscription charged for ${userId}. Extended to ${new Date(newExpiresAt).toISOString()}`);
        }
        break;
      }

      // 3. Subscription Halted (Repeated Payment Failures)
      case 'subscription.halted': {
        const subEntity = payload?.subscription?.entity;
        const subId = subEntity?.id;
        const notes = subEntity?.notes || {};
        const userId = notes.userId;

        if (userId && subId) {
          try {
            const { PaymentStore } = await import('../../src/server/paymentStore');
            PaymentStore.cancelSubscription(subId);
          } catch {}

          try {
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            await userRef.set({
              isPremium: false,
              premiumStatus: 'halted',
              updatedAt: new Date().toISOString()
            }, { merge: true });

            await userRef.collection('subscriptions').doc(subId).set({
              status: 'halted',
              updatedAt: new Date().toISOString()
            }, { merge: true });
          } catch (dbErr) {
            console.warn('[Webhook] Firestore sync note for subscription.halted:', dbErr);
          }

          console.log(`[Webhook] Subscription halted for user ${userId}`);
        }
        break;
      }

      // 4. Subscription Cancelled (User or Admin Cancelled)
      case 'subscription.cancelled': {
        const subEntity = payload?.subscription?.entity;
        const subId = subEntity?.id;
        const notes = subEntity?.notes || {};
        const userId = notes.userId;

        if (userId && subId) {
          try {
            const { PaymentStore } = await import('../../src/server/paymentStore');
            PaymentStore.cancelSubscription(subId);
          } catch {}

          try {
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            await userRef.set({
              premiumStatus: 'cancelled',
              updatedAt: new Date().toISOString()
            }, { merge: true });

            await userRef.collection('subscriptions').doc(subId).set({
              status: 'cancelled',
              cancelledAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            }, { merge: true });
          } catch (dbErr) {
            console.warn('[Webhook] Firestore sync note for subscription.cancelled:', dbErr);
          }

          console.log(`[Webhook] Subscription cancelled for user ${userId}`);
        }
        break;
      }

      // 5. One-Time Order Payment Captured
      case 'payment.captured':
      case 'order.paid': {
        const paymentEntity = payload?.payment?.entity;
        const orderEntity = payload?.order?.entity;
        const notes = paymentEntity?.notes || orderEntity?.notes || {};
        const userId = notes.userId;
        const planId = notes.planId;
        const paymentId = paymentEntity?.id;

        if (userId && paymentId && planId && PAYMENT_PLANS[planId]) {
          const plan = PAYMENT_PLANS[planId];
          const durationDays = plan.durationDays || 30;
          const expiresAt = Date.now() + (durationDays * 24 * 60 * 60 * 1000);

          try {
            const { PaymentStore } = await import('../../src/server/paymentStore');
            PaymentStore.activateEntitlement({
              userId,
              userEmail: notes.userEmail || '',
              planId: plan.id,
              orderId: orderEntity?.id,
              paymentId,
              billingType: plan.billingType,
              source: 'webhook'
            });
          } catch {}

          try {
            const firestore = getAdminFirestore();
            const userRef = firestore.collection('users').doc(userId);
            await userRef.set({
              isPremium: true,
              premiumStatus: 'active',
              planId: plan.id,
              planName: plan.name,
              premiumExpiresAt: expiresAt,
              lastPaymentId: paymentId,
              updatedAt: new Date().toISOString()
            }, { merge: true });

            await userRef.collection('payments').doc(paymentId).set({
              paymentId,
              orderId: orderEntity?.id || null,
              planId: plan.id,
              planName: plan.name,
              amountInPaise: paymentEntity.amount,
              amountInInr: Math.round(paymentEntity.amount / 100),
              status: 'captured',
              verifiedAt: new Date().toISOString()
            }, { merge: true });
          } catch (dbErr) {
            console.warn('[Webhook] Firestore sync note for payment.captured:', dbErr);
          }

          console.log(`[Webhook] Payment captured for user ${userId} (${plan.name})`);
        }
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event: ${event}`);
    }

    return res.status(200).json({ status: 'ok', eventReceived: event });
  } catch (error: any) {
    console.error('[Webhook] Exception:', error);
    return res.status(500).json({ status: 'error', message: error?.message || 'Webhook processing failed' });
  }
}
