"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorpayWebhook = exports.verifyPayment = exports.createSubscription = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const razorpay_1 = __importDefault(require("razorpay"));
const crypto = __importStar(require("crypto"));
if (admin.apps.length === 0) {
    admin.initializeApp();
}
const firestore = admin.firestore();
// ----------------------------------------------------
// 1. Create Monthly Subscription (Cloud Function)
// ----------------------------------------------------
exports.createSubscription = (0, https_1.onRequest)({
    cors: true,
    secrets: ['RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET', 'RAZORPAY_MONTHLY_PLAN_ID']
}, async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
        return;
    }
    try {
        // Authenticate Firebase User
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ success: false, message: 'Unauthorized: Missing or invalid token' });
            return;
        }
        const token = authHeader.split('Bearer ')[1];
        const decodedUser = await admin.auth().verifyIdToken(token);
        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        const planId = process.env.RAZORPAY_MONTHLY_PLAN_ID;
        if (!keyId || !keySecret) {
            res.status(503).json({ success: false, message: 'Razorpay secrets not configured in Secret Manager' });
            return;
        }
        const razorpay = new razorpay_1.default({ key_id: keyId, key_secret: keySecret });
        // Resolve Monthly Plan ID
        let activePlanId = planId;
        if (!activePlanId) {
            const plans = await razorpay.plans.all({ count: 10 });
            const existing = plans.items?.find((p) => p.period === 'monthly' && p.interval === 1 && p.item?.amount === 19900);
            if (existing) {
                activePlanId = existing.id;
            }
            else {
                const newPlan = await razorpay.plans.create({
                    period: 'monthly',
                    interval: 1,
                    item: {
                        name: 'VG Insights Monthly AutoPay',
                        amount: 19900,
                        currency: 'INR',
                        description: 'Continuous monthly NEET UG preparation pass'
                    }
                });
                activePlanId = newPlan.id;
            }
        }
        const subscription = await razorpay.subscriptions.create({
            plan_id: activePlanId,
            total_count: 60,
            quantity: 1,
            customer_notify: 1,
            notes: {
                userId: decodedUser.uid,
                userEmail: (decodedUser.email || '').toLowerCase()
            }
        });
        // Record pending subscription in Firestore
        await firestore.collection('users').doc(decodedUser.uid).collection('subscriptions').doc(subscription.id).set({
            id: subscription.id,
            planId: 'plan_1_month',
            planName: '1 Month AutoPay',
            status: 'created',
            amountInInr: 199,
            createdAt: new Date().toISOString()
        }, { merge: true });
        res.status(200).json({
            success: true,
            subscriptionId: subscription.id,
            keyId,
            isSubscription: true
        });
    }
    catch (err) {
        console.error('[createSubscription error]:', err);
        res.status(500).json({ success: false, message: err?.message || 'Failed to create subscription' });
    }
});
// ----------------------------------------------------
// 2. Verify Payment & Activate Entitlement (Cloud Function)
// ----------------------------------------------------
exports.verifyPayment = (0, https_1.onRequest)({
    cors: true,
    secrets: ['RAZORPAY_KEY_SECRET']
}, async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
        return;
    }
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }
        const token = authHeader.split('Bearer ')[1];
        const decodedUser = await admin.auth().verifyIdToken(token);
        const { razorpay_payment_id, razorpay_subscription_id, razorpay_order_id, razorpay_signature } = req.body || {};
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        if (!keySecret) {
            res.status(503).json({ success: false, message: 'Verification secret not configured' });
            return;
        }
        const expectedData = razorpay_subscription_id
            ? `${razorpay_payment_id}|${razorpay_subscription_id}`
            : `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto.createHmac('sha256', keySecret).update(expectedData).digest('hex');
        const bufA = Buffer.from(expectedSignature, 'utf-8');
        const bufB = Buffer.from(razorpay_signature || '', 'utf-8');
        const isValid = bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
        if (!isValid) {
            res.status(400).json({ success: false, message: 'Cryptographic signature mismatch' });
            return;
        }
        const now = Date.now();
        const expiresAt = now + (30 * 24 * 60 * 60 * 1000);
        const batch = firestore.batch();
        const userRef = firestore.collection('users').doc(decodedUser.uid);
        batch.set(userRef, {
            isPremium: true,
            premiumStatus: 'active',
            planId: 'plan_1_month',
            planName: '1 Month AutoPay',
            subscriptionId: razorpay_subscription_id || null,
            premiumExpiresAt: expiresAt,
            lastPaymentId: razorpay_payment_id,
            updatedAt: new Date().toISOString()
        }, { merge: true });
        if (razorpay_payment_id) {
            batch.set(userRef.collection('payments').doc(razorpay_payment_id), {
                paymentId: razorpay_payment_id,
                subscriptionId: razorpay_subscription_id || null,
                amountInInr: 199,
                status: 'captured',
                verifiedAt: new Date().toISOString()
            }, { merge: true });
        }
        await batch.commit();
        res.status(200).json({
            success: true,
            message: 'Payment verified and subscription activated',
            entitlement: {
                userId: decodedUser.uid,
                isPremium: true,
                status: 'active',
                expiresAt,
                remainingDays: 30
            }
        });
    }
    catch (err) {
        console.error('[verifyPayment error]:', err);
        res.status(500).json({ success: false, message: err?.message || 'Verification failed' });
    }
});
// ----------------------------------------------------
// 3. Signed Razorpay Webhook Handler (Cloud Function)
// ----------------------------------------------------
exports.razorpayWebhook = (0, https_1.onRequest)({
    secrets: ['RAZORPAY_WEBHOOK_SECRET']
}, async (req, res) => {
    try {
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
        const signature = req.headers['x-razorpay-signature'];
        if (!webhookSecret || !signature) {
            res.status(400).json({ status: 'error', message: 'Signature missing' });
            return;
        }
        const rawBody = req.rawBody || JSON.stringify(req.body);
        const expected = crypto.createHmac('sha256', webhookSecret).update(rawBody).digest('hex');
        const bufExpected = Buffer.from(expected, 'utf-8');
        const bufActual = Buffer.from(signature, 'utf-8');
        const isWebhookValid = bufExpected.length === bufActual.length && crypto.timingSafeEqual(bufExpected, bufActual);
        if (!isWebhookValid) {
            res.status(400).json({ status: 'error', message: 'Invalid signature' });
            return;
        }
        const event = req.body?.event;
        const payload = req.body?.payload;
        const eventId = req.headers['x-razorpay-event-id'] || `${event}_${Date.now()}`;
        // Idempotency Check
        const eventRef = firestore.collection('webhookEvents').doc(eventId);
        const eventSnap = await eventRef.get();
        if (eventSnap.exists) {
            res.status(200).json({ status: 'ok', message: 'Duplicate event' });
            return;
        }
        await eventRef.set({ eventId, event, processedAt: new Date().toISOString() });
        const subEntity = payload?.subscription?.entity;
        const paymentEntity = payload?.payment?.entity;
        const notes = subEntity?.notes || paymentEntity?.notes || {};
        const userId = notes.userId;
        if (userId) {
            const userRef = firestore.collection('users').doc(userId);
            if (event === 'subscription.charged' || event === 'subscription.activated') {
                const userSnap = await userRef.get();
                const currentExpiry = userSnap.data()?.premiumExpiresAt || Date.now();
                const newExpiry = Math.max(currentExpiry, Date.now()) + (30 * 24 * 60 * 60 * 1000);
                await userRef.set({
                    isPremium: true,
                    premiumStatus: 'active',
                    premiumExpiresAt: newExpiry,
                    updatedAt: new Date().toISOString()
                }, { merge: true });
            }
            else if (event === 'subscription.halted') {
                await userRef.set({
                    isPremium: false,
                    premiumStatus: 'halted',
                    updatedAt: new Date().toISOString()
                }, { merge: true });
            }
            else if (event === 'subscription.cancelled') {
                await userRef.set({
                    premiumStatus: 'cancelled',
                    updatedAt: new Date().toISOString()
                }, { merge: true });
            }
        }
        res.status(200).json({ status: 'ok' });
    }
    catch (err) {
        console.error('[razorpayWebhook error]:', err);
        res.status(500).json({ status: 'error', message: err?.message });
    }
});
//# sourceMappingURL=index.js.map