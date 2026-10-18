import { Request, Response } from 'express';
import crypto from 'crypto';
import { PAYMENT_PLANS } from './plans';
import { PaymentStore } from '../../src/server/paymentStore';

// In-memory set to prevent duplicate webhook processing
const processedEvents = new Set<string>();

export default async function webhookHandler(req: Request, res: Response) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || 'RAZORPAY_WEBHOOK_SECRET';
    const signature = req.headers['x-razorpay-signature'] as string;

    // In Express with JSON parser, req.body is an object.
    const rawPayload = typeof (req as any).rawBody === 'string' 
      ? (req as any).rawBody 
      : JSON.stringify(req.body);

    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(rawPayload)
        .digest('hex');

      if (expectedSignature !== signature) {
        console.warn('[Webhook] Invalid Razorpay webhook signature');
        return res.status(400).json({ status: 'error', message: 'Invalid webhook signature' });
      }
    }

    const event = req.body?.event;
    const payload = req.body?.payload;
    const eventId = req.headers['x-razorpay-event-id'] as string || `${event}_${Date.now()}`;

    // Duplicate event prevention (Idempotency)
    if (eventId && processedEvents.has(eventId)) {
      console.log(`[Razorpay Webhook] Duplicate event ignored: ${eventId}`);
      return res.status(200).json({ status: 'ok', message: 'Duplicate event ignored' });
    }
    if (eventId) {
      processedEvents.add(eventId);
      // Keep cache size bounded
      if (processedEvents.size > 2000) {
        const first = processedEvents.values().next().value;
        if (first) processedEvents.delete(first);
      }
    }

    console.log(`[Razorpay Webhook] Processing event: ${event}`);

    switch (event) {
      // 1. One-Time Payment Captured or Order Paid
      case 'payment.captured':
      case 'order.paid': {
        const paymentEntity = payload?.payment?.entity;
        const orderEntity = payload?.order?.entity;

        const orderId = paymentEntity?.order_id || orderEntity?.id;
        const paymentId = paymentEntity?.id;
        const notes = paymentEntity?.notes || orderEntity?.notes || {};
        const planId = notes.planId || 'plan_3_months';
        const userEmail = notes.userEmail || paymentEntity?.email;
        const userId = notes.userId;

        if (paymentId && userEmail && PAYMENT_PLANS[planId]) {
          const existing = PaymentStore.getPaymentByPaymentId(paymentId);
          if (!existing || existing.status !== 'captured') {
            const plan = PAYMENT_PLANS[planId];
            PaymentStore.recordPayment({
              id: paymentId,
              orderId: orderId || '',
              paymentId: paymentId,
              userId: userId || userEmail,
              userEmail: userEmail.toLowerCase(),
              userName: notes.userName || '',
              planId: plan.id,
              planName: plan.name,
              billingType: plan.billingType,
              amountInPaise: Number(paymentEntity?.amount || plan.amountInPaise),
              amountInInr: plan.priceInr,
              currency: 'INR',
              status: 'captured',
              durationDays: plan.durationDays,
              createdAt: Date.now(),
              updatedAt: Date.now(),
              source: 'webhook'
            });

            PaymentStore.activateEntitlement({
              userId: userId || userEmail,
              userEmail: userEmail.toLowerCase(),
              planId: plan.id,
              orderId,
              paymentId,
              billingType: plan.billingType,
              source: 'webhook'
            });
            console.log(`[Razorpay Webhook] Activated ${plan.name} for ${userEmail}`);
          }
        }
        break;
      }

      // 2. Subscription Charged (Monthly AutoPay Renewal)
      case 'subscription.charged': {
        const subEntity = payload?.subscription?.entity;
        const paymentEntity = payload?.payment?.entity;
        const subId = subEntity?.id;
        const paymentId = paymentEntity?.id || `pay_sub_${Date.now()}`;
        const notes = subEntity?.notes || paymentEntity?.notes || {};
        const userEmail = notes.userEmail || paymentEntity?.email;
        const userId = notes.userId;
        const planId = 'plan_1_month';

        if (subId && userEmail) {
          const plan = PAYMENT_PLANS[planId];
          PaymentStore.recordPayment({
            id: paymentId,
            orderId: '',
            paymentId: paymentId,
            subscriptionId: subId,
            userId: userId || userEmail,
            userEmail: userEmail.toLowerCase(),
            userName: notes.userName || '',
            planId: plan.id,
            planName: plan.name,
            billingType: 'subscription',
            amountInPaise: Number(paymentEntity?.amount || 19900),
            amountInInr: 199,
            currency: 'INR',
            status: 'captured',
            durationDays: 30,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            source: 'webhook'
          });

          PaymentStore.activateEntitlement({
            userId: userId || userEmail,
            userEmail: userEmail.toLowerCase(),
            planId: plan.id,
            subscriptionId: subId,
            paymentId,
            billingType: 'subscription',
            source: 'webhook'
          });
          console.log(`[Razorpay Webhook] Monthly subscription charged & renewed for ${userEmail}`);
        }
        break;
      }

      // 3. Subscription Cancelled or Paused
      // Rule: Expired or cancelled subscriptions must follow their actual paid-through entitlement period.
      case 'subscription.cancelled':
      case 'subscription.paused': {
        const subEntity = payload?.subscription?.entity;
        const subId = subEntity?.id;
        if (subId) {
          const updated = PaymentStore.cancelSubscription(subId);
          console.log(`[Razorpay Webhook] Subscription ${subId} marked as cancelled. Paid-through expiry: ${updated?.expiresAt}`);
        }
        break;
      }

      // 4. Payment Failed
      case 'payment.failed': {
        const paymentEntity = payload?.payment?.entity;
        const orderId = paymentEntity?.order_id;
        const paymentId = paymentEntity?.id;
        const errorDesc = paymentEntity?.error_description || 'Payment failed';

        console.warn(`[Razorpay Webhook] Payment failed: ${paymentId} for order ${orderId} - ${errorDesc}`);

        if (paymentId) {
          const notes = paymentEntity?.notes || {};
          PaymentStore.recordPayment({
            id: paymentId,
            orderId: orderId || '',
            paymentId: paymentId,
            userId: notes.userId || notes.userEmail || '',
            userEmail: (notes.userEmail || paymentEntity?.email || '').toLowerCase(),
            userName: notes.userName || '',
            planId: notes.planId || '',
            planName: notes.planName || '',
            amountInPaise: Number(paymentEntity?.amount || 0),
            amountInInr: Math.round(Number(paymentEntity?.amount || 0) / 100),
            currency: 'INR',
            status: 'failed',
            durationDays: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            source: 'webhook',
            errorDetails: errorDesc
          });
        }
        break;
      }

      // 5. Refund Processed
      case 'refund.processed': {
        const refundEntity = payload?.refund?.entity;
        const paymentId = refundEntity?.payment_id;
        console.log(`[Razorpay Webhook] Refund processed for payment: ${paymentId}`);
        if (paymentId) {
          const payment = PaymentStore.getPaymentByPaymentId(paymentId);
          if (payment) {
            payment.status = 'refunded';
            payment.updatedAt = Date.now();
            PaymentStore.recordPayment(payment);
          }
        }
        break;
      }

      default:
        console.log(`[Razorpay Webhook] Unhandled event: ${event}`);
    }

    return res.status(200).json({ status: 'ok', received: true });
  } catch (err: any) {
    console.error('[Razorpay Webhook Error]:', err);
    return res.status(500).json({ status: 'error', message: err?.message || 'Webhook processing failed' });
  }
}
