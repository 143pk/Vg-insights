import fs from 'fs';
import path from 'path';

// FirebaseSync provides optional remote Firestore synchronization.
// When Cloud Firestore is disabled in the GCP project, this module safely no-ops
// without initiating failing gRPC streams or emitting PERMISSION_DENIED errors.
export class FirebaseSync {
  private static isAvailable: boolean | null = null;

  public static async syncEntitlement(entitlement: {
    userId: string;
    userEmail: string;
    isPremium: boolean;
    planId?: string;
    planName?: string;
    subscriptionId?: string;
    expiresAt?: number;
    status: string;
  }): Promise<void> {
    // Only attempt Firestore sync if explicitly enabled in environment
    if (process.env.ENABLE_FIRESTORE_SYNC !== 'true') {
      return;
    }

    try {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const { getFirestore, doc, setDoc } = await import('firebase/firestore');

      const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
      if (!fs.existsSync(configPath)) return;

      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      const app = getApps().length === 0 ? initializeApp(config, 'server-firestore') : getApp('server-firestore');
      const db = getFirestore(app);

      const userRef = doc(db, 'users', entitlement.userId);
      await setDoc(userRef, {
        email: entitlement.userEmail,
        isPremium: entitlement.isPremium,
        planId: entitlement.planId || null,
        planName: entitlement.planName || null,
        subscriptionId: entitlement.subscriptionId || null,
        premiumExpiresAt: entitlement.expiresAt || null,
        premiumStatus: entitlement.status,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch {
      // Silently fall back to server PaymentStore (data/payments.json)
    }
  }

  public static async syncPaymentRecord(payment: {
    userId: string;
    paymentId: string;
    orderId: string;
    subscriptionId?: string;
    planId: string;
    amountInInr: number;
    status: string;
    createdAt: number;
  }): Promise<void> {
    if (process.env.ENABLE_FIRESTORE_SYNC !== 'true') {
      return;
    }

    try {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const { getFirestore, doc, setDoc } = await import('firebase/firestore');

      const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
      if (!fs.existsSync(configPath)) return;

      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      const app = getApps().length === 0 ? initializeApp(config, 'server-firestore') : getApp('server-firestore');
      const db = getFirestore(app);

      const paymentRef = doc(db, 'users', payment.userId, 'payments', payment.paymentId);
      await setDoc(paymentRef, {
        orderId: payment.orderId,
        paymentId: payment.paymentId,
        subscriptionId: payment.subscriptionId || null,
        planId: payment.planId,
        amountInInr: payment.amountInInr,
        status: payment.status,
        createdAt: new Date(payment.createdAt).toISOString(),
        syncedAt: new Date().toISOString()
      }, { merge: true });
    } catch {
      // Silently fall back
    }
  }
}
