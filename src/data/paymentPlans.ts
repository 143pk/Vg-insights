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

export const SHARED_PRO_FEATURES: string[] = [
  'Available NEET UG Previous Year Questions (PYQs)',
  'All Available Chapterwise MCQ Banks Across Physics, Chemistry, Botany & Zoology',
  'Detailed, Step-by-Step NCERT Explanations with Properly Formatted Equations and Formulas',
  'Weekly NEET-Pattern Mock Tests',
  'AI Weakness Doctor Diagnostic Engine',
  'Mistake Book with Error Tracking & Analytics',
  'NCERT Formulas, High-Yield Revision Notes & Study Resources'
];

export const PAYMENT_PLANS: Record<string, PaymentPlan> = {
  'plan_1_month': {
    id: 'plan_1_month',
    name: '1 Month AutoPay',
    durationLabel: 'Monthly',
    durationDays: 30,
    durationMonths: 1,
    priceInr: 199,
    amountInPaise: 19900,
    originalPriceInr: 199,
    savingsPercent: 0,
    savingsInr: 0,
    pricePerMonthInr: 199,
    billingType: 'subscription',
    recurringPeriod: 'monthly',
    tag: 'MONTHLY AUTOPAY',
    description: 'Recurring Razorpay AutoPay with 30 days continuous access (cancel anytime)',
    features: [...SHARED_PRO_FEATURES]
  },
  'plan_3_months': {
    id: 'plan_3_months',
    name: '3 Months Access',
    durationLabel: '3 Months',
    durationDays: 90,
    durationMonths: 3,
    priceInr: 499,
    amountInPaise: 49900,
    originalPriceInr: 597,
    savingsPercent: 16,
    savingsInr: 98,
    pricePerMonthInr: 166,
    billingType: 'one_time',
    description: 'One-time payment for 90 days premium access (no automatic renewal)',
    features: [...SHARED_PRO_FEATURES]
  },
  'plan_6_months': {
    id: 'plan_6_months',
    name: '6 Months Access',
    durationLabel: '6 Months',
    durationDays: 180,
    durationMonths: 6,
    priceInr: 899,
    amountInPaise: 89900,
    originalPriceInr: 1194,
    savingsPercent: 25,
    savingsInr: 295,
    pricePerMonthInr: 150,
    billingType: 'one_time',
    tag: 'MOST POPULAR',
    description: 'One-time payment for 180 days premium access (no automatic renewal)',
    features: [...SHARED_PRO_FEATURES]
  },
  'plan_12_months': {
    id: 'plan_12_months',
    name: '12 Months Access',
    durationLabel: '12 Months',
    durationDays: 365,
    durationMonths: 12,
    priceInr: 1499,
    amountInPaise: 149900,
    originalPriceInr: 2388,
    savingsPercent: 37,
    savingsInr: 889,
    pricePerMonthInr: 125,
    billingType: 'one_time',
    tag: 'BEST VALUE',
    description: 'One-time payment for 365 days full-year premium access (no automatic renewal)',
    features: [...SHARED_PRO_FEATURES]
  }
};
