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
    name: 'Monthly Plan',
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
    tag: 'FLEXIBLE AUTOPAY',
    description: 'Recurring monthly AutoPay with 30 days continuous access (cancel anytime)',
    features: [...SHARED_PRO_FEATURES]
  },
  'plan_6_months': {
    id: 'plan_6_months',
    name: '6 Months Plan',
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
    description: 'One-time payment for 180 days premium access (strictly no automatic renewal)',
    features: [...SHARED_PRO_FEATURES]
  }
};
