import { Request, Response } from 'express';
import crypto from 'crypto';
import { PAYMENT_PLANS } from './plans';
import { PaymentStore } from '../../src/server/paymentStore';

export default async function verifyPaymentHandler(req: Request, res: Response) {
  try {
    const {
      razorpay_order_id,
      razorpay_subscription_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      userId,
      userEmail,
      userName
    } = req.body || {};

    const trackingId = razorpay_subscription_id || razorpay_order_id;

    if (!trackingId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID or Subscription ID is required.'
      });
    }

    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: 'User email is required.'
      });
    }

    const plan = PAYMENT_PLANS[planId];
    if (!plan) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan selected.'
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const isSandboxOrder = trackingId.startsWith('order_test_') || trackingId.startsWith('sub_test_');

    if (keySecret && !isSandboxOrder) {
      // Cryptographic verification using Razorpay Key Secret
      let expectedData: string;
      if (razorpay_subscription_id) {
        // Razorpay Subscription verification formula: payment_id|subscription_id
        expectedData = `${razorpay_payment_id}|${razorpay_subscription_id}`;
      } else {
        // Razorpay Order verification formula: order_id|payment_id
        expectedData = `${razorpay_order_id}|${razorpay_payment_id}`;
      }

      const generatedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(expectedData)
        .digest('hex');

      if (generatedSignature !== razorpay_signature) {
        console.warn('[PaymentVerify] Signature mismatch for trackingId:', trackingId);
        return res.status(400).json({
          success: false,
          message: 'Payment verification failed: Invalid cryptographic signature.'
        });
      }
    } else {
      // In sandbox mode, verify that the order or subscription was created in our server PaymentStore
      const recorded = PaymentStore.getPaymentByOrderId(trackingId) || PaymentStore.getPaymentBySubscriptionId(trackingId);
      if (!recorded) {
        return res.status(400).json({
          success: false,
          message: 'Unknown or forged order ID.'
        });
      }
    }

    // Payment is valid! Check if payment was already captured (idempotency check)
    const existingPayment = PaymentStore.getPaymentByPaymentId(razorpay_payment_id);
    if (existingPayment && existingPayment.status === 'captured') {
      const entitlement = PaymentStore.getEntitlement(userEmail);
      return res.json({
        success: true,
        message: 'Payment already verified and active.',
        entitlement,
        receipt: {
          orderId: razorpay_order_id || '',
          subscriptionId: razorpay_subscription_id || '',
          paymentId: razorpay_payment_id,
          planName: plan.name,
          amountInr: plan.priceInr,
          durationDays: plan.durationDays,
          billingType: plan.billingType,
          activatedAt: entitlement.activatedAt,
          expiresAt: entitlement.expiresAt
        }
      });
    }

    // Record verified payment
    PaymentStore.recordPayment({
      id: razorpay_payment_id,
      orderId: razorpay_order_id || '',
      subscriptionId: razorpay_subscription_id || '',
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      userId: userId || userEmail,
      userEmail: userEmail.trim().toLowerCase(),
      userName: userName || '',
      planId: plan.id,
      planName: plan.name,
      billingType: plan.billingType,
      amountInPaise: plan.amountInPaise,
      amountInInr: plan.priceInr,
      currency: 'INR',
      status: 'captured',
      durationDays: plan.durationDays,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      source: isSandboxOrder ? 'simulation' : 'checkout'
    });

    // Activate or extend user's entitlement
    const entitlement = PaymentStore.activateEntitlement({
      userId: userId || userEmail,
      userEmail: userEmail.trim().toLowerCase(),
      planId: plan.id,
      orderId: razorpay_order_id,
      subscriptionId: razorpay_subscription_id,
      paymentId: razorpay_payment_id,
      billingType: plan.billingType,
      source: isSandboxOrder ? 'simulation' : 'checkout'
    });

    return res.json({
      success: true,
      message: `Congratulations! ${plan.name} has been activated successfully.`,
      entitlement,
      receipt: {
        orderId: razorpay_order_id || '',
        subscriptionId: razorpay_subscription_id || '',
        paymentId: razorpay_payment_id,
        planName: plan.name,
        amountInr: plan.priceInr,
        durationDays: plan.durationDays,
        billingType: plan.billingType,
        activatedAt: entitlement.activatedAt,
        expiresAt: entitlement.expiresAt
      }
    });
  } catch (error: any) {
    console.error('[PaymentVerify Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to verify payment. Please contact support.'
    });
  }
}
