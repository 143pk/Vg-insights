import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { PAYMENT_PLANS } from '../data/paymentPlans';
import { FirebaseSync } from './firebaseSync';

export interface PaymentRecord {
  id: string;
  orderId: string;
  paymentId: string;
  subscriptionId?: string;
  signature?: string;
  userId: string;
  userEmail: string;
  userName?: string;
  planId: string;
  planName: string;
  billingType?: 'subscription' | 'one_time';
  amountInPaise: number;
  amountInInr: number;
  currency: string;
  status: 'created' | 'authorized' | 'captured' | 'failed' | 'refunded' | 'cancelled';
  durationDays: number;
  createdAt: number;
  updatedAt: number;
  source: 'checkout' | 'webhook';
  errorDetails?: string;
}

export interface UserEntitlement {
  userId: string;
  userEmail: string;
  isPremium: boolean;
  status: 'active' | 'expired' | 'cancelled' | 'free';
  planId?: string;
  planName?: string;
  billingType?: 'subscription' | 'one_time';
  subscriptionId?: string;
  activatedAt?: number;
  expiresAt?: number;
  remainingDays?: number;
  lastOrderId?: string;
  lastPaymentId?: string;
  updatedAt: number;
}

// In-memory caches synced with disk
let paymentsCache: Map<string, PaymentRecord> = new Map(); // key: paymentId or orderId or subscriptionId
let entitlementsCache: Map<string, UserEntitlement> = new Map(); // key: userEmail (lowercase) or userId or subscriptionId
let isInitialized = false;

function ensureDataDir(): string {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {
      // safe fallback
    }
  }
  return dataDir;
}

function getPaymentsFilePath(): string {
  return path.join(ensureDataDir(), 'payments.json');
}

function getEntitlementsFilePath(): string {
  return path.join(ensureDataDir(), 'entitlements.json');
}

function loadFromDisk(): void {
  if (isInitialized) return;
  try {
    const pPath = getPaymentsFilePath();
    if (fs.existsSync(pPath)) {
      const pRaw = fs.readFileSync(pPath, 'utf-8');
      const pList: PaymentRecord[] = JSON.parse(pRaw);
      pList.forEach(p => {
        if (p.paymentId) paymentsCache.set(p.paymentId, p);
        if (p.orderId) paymentsCache.set(p.orderId, p);
        if (p.subscriptionId) paymentsCache.set(p.subscriptionId, p);
      });
    }
  } catch (err) {
    console.warn('[PaymentStore] Could not load payments from disk:', err);
  }

  try {
    const ePath = getEntitlementsFilePath();
    if (fs.existsSync(ePath)) {
      const eRaw = fs.readFileSync(ePath, 'utf-8');
      const eList: UserEntitlement[] = JSON.parse(eRaw);
      eList.forEach(e => {
        if (e.userEmail) entitlementsCache.set(e.userEmail.toLowerCase(), e);
        if (e.userId) entitlementsCache.set(e.userId, e);
        if (e.subscriptionId) entitlementsCache.set(e.subscriptionId, e);
      });
    }
  } catch (err) {
    console.warn('[PaymentStore] Could not load entitlements from disk:', err);
  }

  isInitialized = true;
}

function saveToDisk(): void {
  try {
    const uniquePayments = Array.from(new Set(paymentsCache.values()));
    fs.writeFileSync(getPaymentsFilePath(), JSON.stringify(uniquePayments, null, 2), 'utf-8');
  } catch (err) {
    // Non-blocking disk failure
  }

  try {
    const uniqueEntitlements = Array.from(new Set(entitlementsCache.values()));
    fs.writeFileSync(getEntitlementsFilePath(), JSON.stringify(uniqueEntitlements, null, 2), 'utf-8');
  } catch (err) {
    // Non-blocking
  }
}

export class PaymentStore {
  public static init(): void {
    loadFromDisk();
  }

  public static getEntitlement(identifier: string): UserEntitlement {
    this.init();
    const clean = identifier.trim().toLowerCase();

    // Owner & Platform Administrator permanent all-access
    const ADMIN_EMAILS = new Set(['optionvortex@gmail.com']);
    const now = Date.now();
    if (ADMIN_EMAILS.has(clean)) {
      return {
        userId: identifier,
        userEmail: clean,
        isPremium: true,
        status: 'active',
        planId: 'plan_12_months',
        planName: 'Owner & Admin All-Access Pass',
        billingType: 'one_time',
        remainingDays: 3650,
        expiresAt: now + (3650 * 24 * 60 * 60 * 1000),
        updatedAt: now
      };
    }

    const existing = entitlementsCache.get(clean);
    if (existing && existing.expiresAt) {
      if (now <= existing.expiresAt) {
        const remainingMs = existing.expiresAt - now;
        const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
        return {
          ...existing,
          isPremium: true,
          status: existing.status === 'cancelled' ? 'cancelled' : 'active',
          remainingDays
        };
      } else {
        // Expired! Paid-through date passed
        return {
          ...existing,
          isPremium: false,
          status: 'expired',
          remainingDays: 0
        };
      }
    }

    return {
      userId: identifier,
      userEmail: identifier.includes('@') ? identifier : '',
      isPremium: false,
      status: 'free',
      remainingDays: 0,
      updatedAt: now
    };
  }

  public static recordPayment(payment: PaymentRecord): void {
    this.init();
    if (payment.paymentId) paymentsCache.set(payment.paymentId, payment);
    if (payment.orderId) paymentsCache.set(payment.orderId, payment);
    if (payment.subscriptionId) paymentsCache.set(payment.subscriptionId, payment);
    saveToDisk();

    // Asynchronously sync to Firebase Firestore
    if (payment.userId && payment.paymentId) {
      FirebaseSync.syncPaymentRecord({
        userId: payment.userId,
        paymentId: payment.paymentId,
        orderId: payment.orderId,
        subscriptionId: payment.subscriptionId,
        planId: payment.planId,
        amountInInr: payment.amountInInr,
        status: payment.status,
        createdAt: payment.createdAt
      }).catch(() => {});
    }
  }

  public static getPaymentByOrderId(orderId: string): PaymentRecord | null {
    this.init();
    return paymentsCache.get(orderId) || null;
  }

  public static getPaymentByPaymentId(paymentId: string): PaymentRecord | null {
    this.init();
    return paymentsCache.get(paymentId) || null;
  }

  public static getPaymentBySubscriptionId(subId: string): PaymentRecord | null {
    this.init();
    return paymentsCache.get(subId) || null;
  }

  public static getEntitlementBySubscriptionId(subId: string): UserEntitlement | null {
    this.init();
    return entitlementsCache.get(subId) || null;
  }

  public static activateEntitlement(params: {
    userId: string;
    userEmail: string;
    planId: string;
    orderId?: string;
    paymentId: string;
    subscriptionId?: string;
    billingType?: 'subscription' | 'one_time';
    source?: 'checkout' | 'webhook';
  }): UserEntitlement {
    this.init();
    const plan = PAYMENT_PLANS[params.planId];
    if (!plan) {
      throw new Error(`Unknown plan ID: ${params.planId}`);
    }

    const cleanEmail = params.userEmail.trim().toLowerCase();
    const current = this.getEntitlement(cleanEmail) || this.getEntitlement(params.userId);

    const now = Date.now();
    let newExpiresAt: number;

    // For subscriptions or one-time, extend from current expiry if already active, otherwise from now
    if (current && current.status === 'active' && current.expiresAt && current.expiresAt > now) {
      newExpiresAt = current.expiresAt + (plan.durationDays * 24 * 60 * 60 * 1000);
    } else {
      newExpiresAt = now + (plan.durationDays * 24 * 60 * 60 * 1000);
    }

    const remainingDays = Math.ceil((newExpiresAt - now) / (1000 * 60 * 60 * 24));

    const updated: UserEntitlement = {
      userId: params.userId || current?.userId || cleanEmail,
      userEmail: cleanEmail,
      isPremium: true,
      status: 'active',
      planId: plan.id,
      planName: plan.name,
      billingType: params.billingType || plan.billingType,
      subscriptionId: params.subscriptionId || current?.subscriptionId,
      activatedAt: now,
      expiresAt: newExpiresAt,
      remainingDays,
      lastOrderId: params.orderId || current?.lastOrderId,
      lastPaymentId: params.paymentId,
      updatedAt: now
    };

    if (cleanEmail) entitlementsCache.set(cleanEmail, updated);
    if (params.userId) entitlementsCache.set(params.userId, updated);
    if (params.subscriptionId) entitlementsCache.set(params.subscriptionId, updated);
    saveToDisk();

    // Asynchronously sync to Firebase Firestore
    FirebaseSync.syncEntitlement(updated).catch(() => {});

    return updated;
  }

  public static cancelSubscription(subscriptionId: string): UserEntitlement | null {
    this.init();
    const ent = this.getEntitlementBySubscriptionId(subscriptionId);
    if (!ent) return null;

    const now = Date.now();
    const isStillWithinPaidPeriod = ent.expiresAt ? now <= ent.expiresAt : false;
    const remainingDays = ent.expiresAt && isStillWithinPaidPeriod 
      ? Math.ceil((ent.expiresAt - now) / (1000 * 60 * 60 * 24))
      : 0;

    const updated: UserEntitlement = {
      ...ent,
      status: 'cancelled',
      isPremium: isStillWithinPaidPeriod,
      remainingDays,
      updatedAt: now
    };

    if (updated.userEmail) entitlementsCache.set(updated.userEmail.toLowerCase(), updated);
    if (updated.userId) entitlementsCache.set(updated.userId, updated);
    entitlementsCache.set(subscriptionId, updated);
    saveToDisk();

    FirebaseSync.syncEntitlement(updated).catch(() => {});
    return updated;
  }
}
