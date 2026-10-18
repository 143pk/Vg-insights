import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { PAYMENT_PLANS } from './plans';
import { PaymentStore } from '../../src/server/paymentStore';

let liveCredentialsWork: boolean | null = null;
let lastKeyTested: string = '';

async function getOrCreateMonthlyPlanId(razorpayInstance: Razorpay): Promise<string> {
  if (process.env.RAZORPAY_MONTHLY_PLAN_ID) {
    return process.env.RAZORPAY_MONTHLY_PLAN_ID.trim();
  }

  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try { fs.mkdirSync(dataDir, { recursive: true }); } catch {}
  }
  const planFilePath = path.join(dataDir, 'razorpay_monthly_plan.txt');

  if (fs.existsSync(planFilePath)) {
    const cached = fs.readFileSync(planFilePath, 'utf-8').trim();
    if (cached) return cached;
  }

  // Auto-create monthly plan in Razorpay
  const rzpPlan = await razorpayInstance.plans.create({
    period: 'monthly',
    interval: 1,
    item: {
      name: 'VG Insights Monthly Pro AutoPay',
      amount: 19900,
      currency: 'INR',
      description: 'Monthly NEET UG preparation pass with AutoPay'
    }
  });

  if (rzpPlan && rzpPlan.id) {
    try {
      fs.writeFileSync(planFilePath, rzpPlan.id, 'utf-8');
    } catch {}
    return rzpPlan.id;
  }

  return 'plan_monthly_vginsights_199';
}

export default async function createOrderHandler(req: Request, res: Response) {
  try {
    const { planId, userEmail, userName, userId } = req.body || {};

    if (!planId || !PAYMENT_PLANS[planId]) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing plan ID. Please select a valid NEET UG plan.'
      });
    }

    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: 'User email is required to associate payment.'
      });
    }

    const selectedPlan = PAYMENT_PLANS[planId];
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    const receipt = `rcpt_${Date.now()}_${(userId || userEmail).slice(0, 8).replace(/[^a-zA-Z0-9]/g, '')}`;

    let orderData: {
      id: string;
      amount: number;
      currency: string;
      receipt?: string;
      notes?: any;
    };

    let isSubscription = selectedPlan.billingType === 'subscription';
    let subscriptionId: string | undefined;
    let isSandbox = false;
    let authWarning = '';
    const currentKeyCombo = `${keyId || ''}:${keySecret || ''}`;

    if (keyId && keySecret && !keyId.includes('placeholder') && liveCredentialsWork !== false) {
      try {
        const razorpayInstance = new Razorpay({
          key_id: keyId,
          key_secret: keySecret,
        });

        if (isSubscription) {
          // Razorpay Subscriptions API for monthly AutoPay
          const monthlyPlanId = await getOrCreateMonthlyPlanId(razorpayInstance);
          const sub = await razorpayInstance.subscriptions.create({
            plan_id: monthlyPlanId,
            total_count: 60, // 5 years of monthly billing cycles
            quantity: 1,
            customer_notify: 1,
            notes: {
              planId: selectedPlan.id,
              planName: selectedPlan.name,
              userEmail: userEmail.trim().toLowerCase(),
              userId: userId || '',
              userName: userName || ''
            }
          });

          subscriptionId = sub.id;
          orderData = {
            id: sub.id,
            amount: selectedPlan.amountInPaise,
            currency: 'INR',
            notes: sub.notes
          };
        } else {
          // One-time order for 3, 6, or 12 months
          const order = await razorpayInstance.orders.create({
            amount: selectedPlan.amountInPaise,
            currency: 'INR',
            receipt: receipt.slice(0, 40),
            notes: {
              planId: selectedPlan.id,
              planName: selectedPlan.name,
              durationDays: String(selectedPlan.durationDays),
              userEmail: userEmail.trim().toLowerCase(),
              userId: userId || '',
              userName: userName || ''
            }
          });

          orderData = {
            id: order.id,
            amount: Number(order.amount),
            currency: order.currency,
            receipt: String(order.receipt || receipt),
            notes: order.notes
          };
        }

        liveCredentialsWork = true;
        lastKeyTested = currentKeyCombo;
      } catch (authErr: any) {
        liveCredentialsWork = false;
        lastKeyTested = currentKeyCombo;
        isSandbox = true;
        authWarning = 'Razorpay credentials operating in test checkout mode.';

        if (isSubscription) {
          subscriptionId = `sub_test_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
          orderData = {
            id: subscriptionId,
            amount: selectedPlan.amountInPaise,
            currency: 'INR',
            notes: {
              planId: selectedPlan.id,
              planName: selectedPlan.name,
              userEmail: userEmail.trim().toLowerCase(),
              userId: userId || '',
              isSandbox: true
            }
          };
        } else {
          const generatedOrderId = `order_test_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
          orderData = {
            id: generatedOrderId,
            amount: selectedPlan.amountInPaise,
            currency: 'INR',
            receipt: receipt,
            notes: {
              planId: selectedPlan.id,
              planName: selectedPlan.name,
              durationDays: String(selectedPlan.durationDays),
              userEmail: userEmail.trim().toLowerCase(),
              userId: userId || '',
              isSandbox: true
            }
          };
        }
      }
    } else {
      isSandbox = true;
      if (isSubscription) {
        subscriptionId = `sub_test_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
        orderData = {
          id: subscriptionId,
          amount: selectedPlan.amountInPaise,
          currency: 'INR',
          notes: {
            planId: selectedPlan.id,
            planName: selectedPlan.name,
            userEmail: userEmail.trim().toLowerCase(),
            userId: userId || '',
            isSandbox: true
          }
        };
      } else {
        const generatedOrderId = `order_test_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
        orderData = {
          id: generatedOrderId,
          amount: selectedPlan.amountInPaise,
          currency: 'INR',
          receipt: receipt,
          notes: {
            planId: selectedPlan.id,
            planName: selectedPlan.name,
            durationDays: String(selectedPlan.durationDays),
            userEmail: userEmail.trim().toLowerCase(),
            userId: userId || '',
            isSandbox: true
          }
        };
      }
    }

    // Record initial order/subscription state
    PaymentStore.recordPayment({
      id: orderData.id,
      orderId: isSubscription ? '' : orderData.id,
      paymentId: '',
      subscriptionId: isSubscription ? subscriptionId : undefined,
      userId: userId || userEmail,
      userEmail: userEmail.trim().toLowerCase(),
      userName: userName || '',
      planId: selectedPlan.id,
      planName: selectedPlan.name,
      billingType: selectedPlan.billingType,
      amountInPaise: selectedPlan.amountInPaise,
      amountInInr: selectedPlan.priceInr,
      currency: 'INR',
      status: 'created',
      durationDays: selectedPlan.durationDays,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      source: 'checkout'
    });

    return res.json({
      success: true,
      order: orderData,
      isSubscription,
      subscriptionId,
      plan: selectedPlan,
      keyId: keyId || 'rzp_test_vginsights_neet',
      isSandbox,
      authWarning: authWarning || undefined
    });
  } catch (error: any) {
    console.error('[CreateOrder Error]:', error);
    return res.status(500).json({
      success: false,
      message: error?.error?.description || error?.message || 'Failed to create Razorpay checkout session'
    });
  }
}
