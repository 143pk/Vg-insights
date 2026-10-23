import { Request, Response } from 'express';
import { authenticateFirebaseRequest, getAdminFirestore, isFirestoreAvailable, markFirestoreUnavailable } from '../../src/server/firebaseAdmin';

export default async function paymentStatusHandler(req: Request, res: Response) {
  try {
    let authUser: { uid: string; email: string; name?: string };
    try {
      authUser = await authenticateFirebaseRequest(req.headers.authorization);
    } catch (authErr: any) {
      return res.status(401).json({
        success: false,
        error: true,
        message: authErr.message || 'Authentication required to inspect entitlement status.'
      });
    }

    let userData: Record<string, any> = {};
    let firestoreConnected = false;

    if (isFirestoreAvailable()) {
      try {
        const firestore = getAdminFirestore();
        const userDoc = await firestore.collection('users').doc(authUser.uid).get();
        if (userDoc && userDoc.exists) {
          userData = userDoc.data() || {};
          firestoreConnected = true;
        }
      } catch {
        markFirestoreUnavailable();
        console.log('[PaymentStatusHandler] Remote Firestore offline, checking verified payment store.');
      }
    }

    const now = Date.now();
    let isPremium = false;
    let status = 'free';
    let remainingDays = 0;
    let expiresAt: number | null = null;
    let planId: string | undefined = undefined;
    let planName: string | undefined = undefined;
    let subscriptionId: string | undefined = undefined;
    let updatedAt = now;

    if (firestoreConnected && userData.isPremium) {
      expiresAt = userData.premiumExpiresAt ? Number(userData.premiumExpiresAt) : null;
      const isWithinValidPeriod = expiresAt !== null && now <= expiresAt;

      if (isWithinValidPeriod) {
        isPremium = true;
        status = userData.premiumStatus === 'cancelled' ? 'cancelled' : 'active';
        remainingDays = Math.ceil((expiresAt - now) / (1000 * 60 * 60 * 24));
      } else {
        isPremium = false;
        status = 'expired';
        remainingDays = 0;
      }
      planId = userData.planId || undefined;
      planName = userData.planName || undefined;
      subscriptionId = userData.subscriptionId || undefined;
      updatedAt = userData.updatedAt ? new Date(userData.updatedAt).getTime() : now;
    } else {
      // Check PaymentStore fallback
      try {
        const { PaymentStore } = await import('../../src/server/paymentStore');
        const localEnt = PaymentStore.getEntitlement(authUser.uid) || PaymentStore.getEntitlement(authUser.email);
        if (localEnt && localEnt.isPremium && localEnt.expiresAt && localEnt.expiresAt > now) {
          isPremium = true;
          status = localEnt.status || 'active';
          expiresAt = localEnt.expiresAt;
          remainingDays = Math.ceil((localEnt.expiresAt - now) / (1000 * 60 * 60 * 24));
          planId = localEnt.planId;
          planName = localEnt.planName;
          subscriptionId = localEnt.subscriptionId;
          updatedAt = localEnt.updatedAt || now;
        }
      } catch (storeErr) {
        console.warn('[PaymentStatusHandler] PaymentStore check note:', storeErr);
      }
    }

    const entitlement = {
      userId: authUser.uid,
      userEmail: authUser.email,
      isPremium,
      status,
      planId,
      planName,
      subscriptionId,
      expiresAt: expiresAt || undefined,
      remainingDays,
      updatedAt
    };

    return res.json({
      success: true,
      entitlement
    });
  } catch (error: any) {
    console.error('[PaymentStatusHandler] Error:', error);
    return res.status(500).json({
      success: false,
      error: true,
      message: error?.message || 'Failed to check authoritative entitlement status.'
    });
  }
}
