import { Request, Response } from 'express';
import crypto from 'crypto';
import { PAYMENT_PLANS } from '../../src/data/paymentPlans';
import { authenticateFirebaseRequest, getAdminFirestore } from '../../src/server/firebaseAdmin';

export default async function verifyPaymentHandler(req: Request, res: Response) {
  try {
    // 1. Authenticate caller with Firebase Auth ID Token
    let authUser: { uid: string; email: string; name?: string };
    try {
      authUser = await authenticateFirebaseRequest(req.headers.authorization);
    } catch (authErr: any) {
      return res.status(401).json({
        success: false,
        error: true,
        message: authErr.message || 'Authentication required to verify payment.'
      });
    }

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_subscription_id,
      razorpay_signature,
      planId
    } = req.body || {};

    if (!razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Missing payment ID or signature for verification.'
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(503).json({
        success: false,
        error: true,
        message: 'Payment verification secret is not configured on the server.'
      });
    }

    const selectedPlan = PAYMENT_PLANS[planId || 'plan_1_month'];
    if (!selectedPlan) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Invalid plan associated with payment.'
      });
    }

    // 2. Cryptographic signature calculation as documented by Razorpay
    let expectedData: string;
    if (razorpay_subscription_id) {
      // Subscriptions formula: payment_id|subscription_id
      expectedData = `${razorpay_payment_id}|${razorpay_subscription_id}`;
    } else if (razorpay_order_id) {
      // Orders formula: order_id|payment_id
      expectedData = `${razorpay_order_id}|${razorpay_payment_id}`;
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Either razorpay_subscription_id or razorpay_order_id must be provided.'
      });
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(expectedData)
      .digest('hex');

    const bufA = Buffer.from(expectedSignature, 'utf-8');
    const bufB = Buffer.from(razorpay_signature || '', 'utf-8');
    const isValidSignature = bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);

    if (!isValidSignature) {
      console.warn('[PaymentVerify] Cryptographic signature mismatch for user:', authUser.uid);
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Cryptographic signature verification failed. Premium access not granted.'
      });
    }

    // 3. Calculate verified paid-through date
    const now = Date.now();
    const durationDays = selectedPlan.durationDays || 30;
    const expiresAt = now + (durationDays * 24 * 60 * 60 * 1000);

    const entitlement = {
      userId: authUser.uid,
      userEmail: authUser.email,
      isPremium: true,
      status: 'active' as const,
      planId: selectedPlan.id,
      planName: selectedPlan.name,
      billingType: selectedPlan.billingType,
      subscriptionId: razorpay_subscription_id || undefined,
      lastPaymentId: razorpay_payment_id,
      lastOrderId: razorpay_order_id || undefined,
      activatedAt: now,
      expiresAt,
      remainingDays: durationDays,
      updatedAt: now
    };

    // 4. Update local PaymentStore with cryptographically verified entitlement
    try {
      const { PaymentStore } = await import('../../src/server/paymentStore');
      PaymentStore.activateEntitlement({
        userId: authUser.uid,
        userEmail: authUser.email,
        planId: selectedPlan.id,
        orderId: razorpay_order_id,
        subscriptionId: razorpay_subscription_id,
        paymentId: razorpay_payment_id,
        billingType: selectedPlan.billingType,
        source: 'checkout'
      });
    } catch (storeErr) {
      console.warn('[PaymentVerify] Local PaymentStore update note:', storeErr);
    }

    // 5. Update Firestore directly via Firebase Admin SDK
    try {
      const firestore = getAdminFirestore();
      const batch = firestore.batch();

      const userDocRef = firestore.collection('users').doc(authUser.uid);
      batch.set(userDocRef, {
        email: authUser.email,
        isPremium: true,
        premiumStatus: 'active',
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        subscriptionId: razorpay_subscription_id || null,
        premiumExpiresAt: expiresAt,
        lastPaymentId: razorpay_payment_id,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      const paymentDocRef = userDocRef.collection('payments').doc(razorpay_payment_id);
      batch.set(paymentDocRef, {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id || null,
        subscriptionId: razorpay_subscription_id || null,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        amountInPaise: selectedPlan.amountInPaise,
        amountInInr: selectedPlan.priceInr,
        currency: 'INR',
        status: 'captured',
        verifiedAt: new Date().toISOString()
      }, { merge: true });

      if (razorpay_subscription_id) {
        const subDocRef = userDocRef.collection('subscriptions').doc(razorpay_subscription_id);
        batch.set(subDocRef, {
          id: razorpay_subscription_id,
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          status: 'active',
          billingType: 'subscription',
          activatedAt: new Date().toISOString(),
          expiresAt: new Date(expiresAt).toISOString(),
          lastPaymentId: razorpay_payment_id,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      await batch.commit();
      console.log(`[PaymentVerify] Successfully synced entitlement to Firestore for UID: ${authUser.uid}`);
    } catch (firestoreErr: any) {
      console.warn('[PaymentVerify] Firestore sync skipped (API disabled or pending in GCP):', firestoreErr?.message || firestoreErr);
    }

    return res.json({
      success: true,
      message: 'Payment signature verified successfully. Premium features unlocked.',
      entitlement
    });
  } catch (error: any) {
    console.error('[VerifyPaymentHandler] Exception:', error);
    return res.status(500).json({
      success: false,
      error: true,
      message: error?.message || 'Internal error during payment verification.'
    });
  }
}
