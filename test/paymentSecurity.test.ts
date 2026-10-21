import crypto from 'crypto';

/**
 * Automated Security Verification Test Suite for VG Insights Razorpay Payments
 * Tests cryptographic verification, webhook signatures, replay prevention, and lifecycle state machines.
 */

function safeConstantTimeCompare(a: string, b: string): boolean {
  if (!a || !b) return false;
  const bufA = Buffer.from(a, 'utf-8');
  const bufB = Buffer.from(b, 'utf-8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function verifySubscriptionSignature(paymentId: string, subscriptionId: string, signature: string, secret: string): boolean {
  if (!paymentId || !subscriptionId || !signature || !secret) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${paymentId}|${subscriptionId}`)
    .digest('hex');

  return safeConstantTimeCompare(expected, signature);
}

function verifyOrderSignature(orderId: string, paymentId: string, signature: string, secret: string): boolean {
  if (!orderId || !paymentId || !signature || !secret) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return safeConstantTimeCompare(expected, signature);
}

function verifyWebhookSignature(rawBody: string, signature: string, secret: string): boolean {
  if (!rawBody || !signature || !secret) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  return safeConstantTimeCompare(expected, signature);
}

// ----------------------------------------------------
// RUN TESTS
// ----------------------------------------------------
let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passedCount++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    failedCount++;
  }
}

console.log('\n======================================================');
console.log('VG INSIGHTS PAYMENT SECURITY & INTEGRITY TEST RUNNER');
console.log('======================================================\n');

// 1. Subscription Signature Verification
console.log('[Test Suite 1] Razorpay Subscription HMAC Verification:');
const SECRET = 'rzp_live_secret_mock_99218274';
const PAYMENT_ID = 'pay_P1928374829';
const SUB_ID = 'sub_S883726194';

const validSubSignature = crypto
  .createHmac('sha256', SECRET)
  .update(`${PAYMENT_ID}|${SUB_ID}`)
  .digest('hex');

assert(
  verifySubscriptionSignature(PAYMENT_ID, SUB_ID, validSubSignature, SECRET) === true,
  'Valid subscription signature is cryptographically accepted'
);

assert(
  verifySubscriptionSignature(PAYMENT_ID, SUB_ID, 'forged_fake_signature_123', SECRET) === false,
  'Forged signature is strictly rejected'
);

assert(
  verifySubscriptionSignature(PAYMENT_ID, 'sub_ATTACKER_ID', validSubSignature, SECRET) === false,
  'Mismatched subscription ID is rejected'
);

assert(
  verifySubscriptionSignature(PAYMENT_ID, SUB_ID, validSubSignature, 'wrong_secret') === false,
  'Wrong secret fails validation'
);

// 2. Order Signature Verification
console.log('\n[Test Suite 2] Razorpay One-Time Order HMAC Verification:');
const ORDER_ID = 'order_O9988776655';
const validOrderSignature = crypto
  .createHmac('sha256', SECRET)
  .update(`${ORDER_ID}|${PAYMENT_ID}`)
  .digest('hex');

assert(
  verifyOrderSignature(ORDER_ID, PAYMENT_ID, validOrderSignature, SECRET) === true,
  'Valid order signature is cryptographically accepted'
);

assert(
  verifyOrderSignature(ORDER_ID, PAYMENT_ID, 'test_signature_verified', SECRET) === false,
  'Legacy sandbox "test_signature_verified" is strictly rejected'
);

// 3. Webhook Signature & Tamper Detection
console.log('\n[Test Suite 3] Webhook HMAC-SHA256 & Replay Prevention:');
const WEBHOOK_SECRET = 'whsec_772211aa88bb';
const webhookPayload = JSON.stringify({
  event: 'subscription.charged',
  payload: {
    subscription: { entity: { id: SUB_ID, notes: { userId: 'uid_test_123' } } },
    payment: { entity: { id: PAYMENT_ID, amount: 19900 } }
  }
});

const validWebhookSig = crypto
  .createHmac('sha256', WEBHOOK_SECRET)
  .update(webhookPayload)
  .digest('hex');

assert(
  verifyWebhookSignature(webhookPayload, validWebhookSig, WEBHOOK_SECRET) === true,
  'Signed webhook payload validates successfully'
);

const tamperedPayload = webhookPayload.replace('19900', '0');
assert(
  verifyWebhookSignature(tamperedPayload, validWebhookSig, WEBHOOK_SECRET) === false,
  'Tampered webhook body is strictly rejected'
);

// 4. Webhook Idempotency Simulation
console.log('\n[Test Suite 4] Webhook Idempotency & Replay Attack Defense:');
const processedIds = new Set<string>();

function processWebhookEvent(eventId: string): { status: string; applied: boolean } {
  if (processedIds.has(eventId)) {
    return { status: 'duplicate', applied: false };
  }
  processedIds.add(eventId);
  return { status: 'ok', applied: true };
}

const EVENT_ID = 'evt_razorpay_99221100';
const firstAttempt = processWebhookEvent(EVENT_ID);
assert(firstAttempt.status === 'ok' && firstAttempt.applied === true, 'First event is processed');

const replayAttempt = processWebhookEvent(EVENT_ID);
assert(replayAttempt.status === 'duplicate' && replayAttempt.applied === false, 'Replayed event is safely ignored without re-crediting');

// 5. Subscription Lifecycle State Machine Transitions
console.log('\n[Test Suite 5] Subscription Lifecycle State Machine:');
interface UserState {
  isPremium: boolean;
  status: string;
  expiresAt: number;
}

function handleSubscriptionEvent(currentState: UserState, event: string, now: number): UserState {
  switch (event) {
    case 'subscription.authenticated':
    case 'subscription.activated':
      return {
        isPremium: true,
        status: 'active',
        expiresAt: now + (30 * 24 * 60 * 60 * 1000)
      };
    case 'subscription.charged':
      const base = Math.max(currentState.expiresAt, now);
      return {
        isPremium: true,
        status: 'active',
        expiresAt: base + (30 * 24 * 60 * 60 * 1000)
      };
    case 'subscription.halted':
      return {
        isPremium: false,
        status: 'halted',
        expiresAt: currentState.expiresAt
      };
    case 'subscription.cancelled':
      return {
        isPremium: currentState.expiresAt > now,
        status: 'cancelled',
        expiresAt: currentState.expiresAt
      };
    default:
      return currentState;
  }
}

const t0 = 1700000000000;
let user: UserState = { isPremium: false, status: 'free', expiresAt: 0 };

// Event 1: Activation
user = handleSubscriptionEvent(user, 'subscription.activated', t0);
assert(user.isPremium === true && user.status === 'active', 'subscription.activated unlocks premium for 30 days');

// Event 2: Recurring Renewal Charge after 25 days
const t1 = t0 + (25 * 24 * 60 * 60 * 1000);
user = handleSubscriptionEvent(user, 'subscription.charged', t1);
const expectedExpiry = t0 + (60 * 24 * 60 * 60 * 1000);
assert(user.expiresAt === expectedExpiry, 'subscription.charged extends expiration by 30 days cumulatively');

// Event 3: Payment failure / Halted
user = handleSubscriptionEvent(user, 'subscription.halted', t1 + (36 * 24 * 60 * 60 * 1000));
assert(user.isPremium === false && user.status === 'halted', 'subscription.halted immediately revokes premium access');

// 6. Unauthorized Client-Side Self-Privilege Escalation Defense
console.log('\n[Test Suite 6] Firestore Security Rules Simulation (Anti-Self-Entitlement):');

const RESTRICTED_FIELDS = [
  'isPremium',
  'premiumExpiresAt',
  'premiumStatus',
  'planId',
  'planName',
  'entitlement',
  'subscriptionId',
  'lastPaymentId'
];

function simulateClientCreateRule(data: Record<string, any>): { allowed: boolean; reason?: string } {
  const hasRestricted = RESTRICTED_FIELDS.some(f => f in data && data[f] !== null && data[f] !== false);
  if (hasRestricted) {
    return { allowed: false, reason: 'Client cannot grant entitlement or subscription on create' };
  }
  return { allowed: true };
}

function simulateClientUpdateRule(updatedFields: string[]): { allowed: boolean; reason?: string } {
  const attemptedViolation = updatedFields.some(f => RESTRICTED_FIELDS.includes(f));
  if (attemptedViolation) {
    return { allowed: false, reason: 'Client SDK cannot mutate entitlement fields' };
  }
  return { allowed: true };
}

assert(
  simulateClientCreateRule({ name: 'Aspirant', email: 'test@example.com' }).allowed === true,
  'Standard student profile creation without entitlement fields is allowed'
);

assert(
  simulateClientCreateRule({ name: 'Hacker', isPremium: true }).allowed === false,
  'Client attempting to set isPremium: true on create is strictly rejected'
);

assert(
  simulateClientCreateRule({ name: 'Hacker', premiumStatus: 'active' }).allowed === false,
  'Client attempting to set premiumStatus: "active" on create is strictly rejected'
);

assert(
  simulateClientUpdateRule(['targetYear', 'name']).allowed === true,
  'Student updating academic preferences is allowed'
);

assert(
  simulateClientUpdateRule(['isPremium']).allowed === false,
  'Student attempting to update isPremium via client SDK is denied'
);

assert(
  simulateClientUpdateRule(['subscriptionId', 'premiumExpiresAt']).allowed === false,
  'Student attempting to forge subscriptionId or expiry is denied'
);

// 7. Invariant: Pay Button Click & Checkout Open Never Grants Premium Without Cryptographic Verification
console.log('\n[Test Suite 7] Frontend Payment Lifecycle Invariants:');

interface FrontendState {
  isPremium: boolean;
  status: string;
}

class SafePaymentController {
  private state: FrontendState = { isPremium: false, status: 'free' };

  public onPayClicked(): void {
    // Under NO circumstances mutate state here!
  }

  public onCheckoutOpened(): void {
    // Under NO circumstances mutate state here!
  }

  public onCheckoutDismissed(): void {
    // Under NO circumstances mutate state here!
  }

  public onVerificationSuccess(serverEntitlement: { isPremium: boolean; status: string }): void {
    if (serverEntitlement && serverEntitlement.isPremium) {
      this.state = { isPremium: true, status: serverEntitlement.status };
    }
  }

  public onVerificationFailure(): void {
    this.state = { isPremium: false, status: 'free' };
  }

  public getState(): FrontendState {
    return this.state;
  }
}

const controller = new SafePaymentController();
controller.onPayClicked();
assert(controller.getState().isPremium === false, 'Clicking Pay ₹199 does not grant premium access');

controller.onCheckoutOpened();
assert(controller.getState().isPremium === false, 'Opening Razorpay Checkout modal does not grant premium access');

controller.onCheckoutDismissed();
assert(controller.getState().isPremium === false, 'Dismissing checkout modal keeps premium locked');

controller.onVerificationFailure();
assert(controller.getState().isPremium === false, 'Failed or missing verification keeps premium locked');

controller.onVerificationSuccess({ isPremium: true, status: 'active' });
assert(controller.getState().isPremium === true && controller.getState().status === 'active', 'Only verified server response unlocks premium');

console.log('\n======================================================');
console.log(`TEST SUMMARY: ${passedCount} PASSED, ${failedCount} FAILED`);
console.log('======================================================\n');

if (failedCount > 0) {
  process.exit(1);
}
