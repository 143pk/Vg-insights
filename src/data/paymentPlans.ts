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

export const PAYMENT_PLANS: Record<string, PaymentPlan> = {
  'plan_1_month': {
    id: 'plan_1_month',
    name: '1 Month AutoPay',
    durationLabel: 'Monthly',
    durationDays: 30,
    durationMonths: 1,
    priceInr: 199,
    amountInPaise: 19900,
    originalPriceInr: 299,
    savingsPercent: 33,
    savingsInr: 100,
    pricePerMonthInr: 199,
    billingType: 'subscription',
    recurringPeriod: 'monthly',
    tag: 'MONTHLY AUTOPAY',
    description: 'Continuous monthly preparation via UPI/Card AutoPay (cancel anytime)',
    features: [
      'Razorpay Subscription with Monthly AutoPay',
      'Cancel subscription anytime with 1 click',
      'All 10+ years NEET PYQs (2014–2026)',
      'All 38 Chapterwise MCQ Banks & Solutions',
      'All Weekly 720-Mark Simulation Mock Tests',
      'Step-by-Step KaTeX NCERT Explanations',
      'Automatic Mistake Book tracking'
    ]
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
    description: 'One-time payment for 90 days fixed access (no auto-renewal)',
    features: [
      'Fixed 90-Day Access (Strictly One-Time Payment)',
      'No auto-renewal or recurring charges',
      'All 10+ years NEET PYQs (2014–2026)',
      'All 38 Chapterwise MCQ Banks & Solutions',
      'All Weekly 720-Mark Simulation Mock Tests',
      'Step-by-Step KaTeX NCERT Explanations',
      'AI Weakness Doctor Diagnostic Profile'
    ]
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
    description: 'One-time payment for 180 days fixed access (no auto-renewal)',
    features: [
      'Fixed 180-Day Access (Strictly One-Time Payment)',
      'No auto-renewal or recurring charges',
      'All 10+ years NEET PYQs (2014–2026)',
      'All 38 Chapterwise MCQ Banks & Solutions',
      'All Weekly 720-Mark Simulation Mock Tests',
      'Deep AI Weakness Diagnostics & Custom Drills',
      'Step-by-Step KaTeX NCERT Explanations',
      'Offline NCERT Formula & High-Yield Sheets'
    ]
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
    description: 'One-time payment for 365 days full year access (no auto-renewal)',
    features: [
      'Full 1-Year Access (Strictly One-Time Payment)',
      'No auto-renewal or recurring charges',
      'All 10+ years NEET PYQs (2014–2026)',
      'All 38 Chapterwise MCQ Banks & Solutions',
      'All Weekly 720-Mark Simulation Mock Tests',
      'Unlimited AI Weakness Doctor Batches',
      'Step-by-Step KaTeX NCERT Explanations',
      'Priority Doubt Support'
    ]
  }
};
