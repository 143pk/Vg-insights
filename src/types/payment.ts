export interface PaymentPlan {
  id: string;
  name: string;
  durationLabel: string;
  durationDays: number;
  durationMonths: number;
  priceInr: number;
  amountInPaise: number;
  originalPriceInr: number;
  savingsPercent: number;
  savingsInr: number;
  pricePerMonthInr: number;
  billingType: 'subscription' | 'one_time';
  recurringPeriod?: 'monthly';
  tag?: string;
  description: string;
  features: string[];
}

export type EntitlementStatus = 'active' | 'expired' | 'cancelled' | 'free';

export interface PremiumEntitlement {
  userId?: string;
  userEmail?: string;
  isPremium: boolean;
  status: EntitlementStatus;
  planId?: string;
  planName?: string;
  billingType?: 'subscription' | 'one_time';
  subscriptionId?: string;
  activatedAt?: number;
  expiresAt?: number;
  remainingDays?: number;
  lastOrderId?: string;
  lastPaymentId?: string;
  updatedAt?: number;
}

export interface PaymentReceipt {
  orderId: string;
  paymentId: string;
  subscriptionId?: string;
  planName: string;
  amountInr: number;
  durationDays: number;
  billingType?: 'subscription' | 'one_time';
  activatedAt?: number;
  expiresAt?: number;
}

export interface PaymentConfigResponse {
  success: boolean;
  keyId: string;
  isConfigured: boolean;
  currency: string;
  plans: PaymentPlan[];
  businessName: string;
  supportEmail: string;
}
