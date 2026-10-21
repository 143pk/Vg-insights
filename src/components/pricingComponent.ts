import { PaymentService } from '../services/paymentService';
import { AuthService } from '../services/authService';
import { PAYMENT_PLANS, PaymentPlan } from '../data/paymentPlans';

export class PricingComponent {
  public static render(): string {
    const entitlement = PaymentService.getEntitlement();
    const currentUser = AuthService.getCurrentUser();
    const plans = Object.values(PAYMENT_PLANS);

    return `
      <div id="pricing-page-root" class="max-w-6xl mx-auto space-y-10 pb-20">
        <!-- Hero Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-black uppercase tracking-wider">
            <span>⚡</span> NEET UG Premium Preparation
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Supercharge Your NEET Score with <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">VG Insights Pro</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Gain full access to 10+ years verified PYQs, all 38 chapterwise MCQ banks, weekly 720-mark simulated mocks, and AI-powered weakness diagnosis.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 pt-1">
            <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Flexible Monthly AutoPay
            </span>
            <span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Fixed One-Time Multi-Month Passes
            </span>
            <span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              Cancel Subscriptions Anytime
            </span>
            <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              100% Secure Razorpay Gateway
            </span>
          </div>
        </div>

        <!-- Active Entitlement Banner -->
        ${entitlement.isPremium ? `
          <div class="max-w-4xl mx-auto p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 border-2 border-emerald-500/30 dark:border-emerald-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
            <div class="flex items-center gap-4 text-left">
              <div class="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                ⭐
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500 text-white">
                    ${entitlement.status === 'cancelled' ? 'AutoPay Cancelled (Access Active)' : 'Active Pro Member'}
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400">${entitlement.planName || 'Premium Pass'}</span>
                  ${entitlement.billingType === 'subscription' && entitlement.status === 'active' ? `
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      🔄 Monthly AutoPay
                    </span>
                  ` : ''}
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  All NEET Pro features are fully unlocked!
                </h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  ${entitlement.status === 'cancelled' 
                    ? `AutoPay cancelled. Paid-through access remains valid until <strong class="text-slate-900 dark:text-white">${PaymentService.formatExpiry(entitlement.expiresAt)}</strong> (${entitlement.remainingDays} days left).`
                    : `Valid until <strong class="text-slate-900 dark:text-white">${PaymentService.formatExpiry(entitlement.expiresAt)}</strong> (${entitlement.remainingDays} days remaining).`}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2.5 shrink-0">
              <a href="#pyqs" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50">
                Practice PYQs →
              </a>
              <a href="#weekly-mock" class="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-sm">
                Take Mock Test →
              </a>
            </div>
          </div>
        ` : entitlement.status === 'expired' ? `
          <div class="max-w-4xl mx-auto p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-left flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl">⏳</span>
              <div>
                <p class="text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">Previous Subscription Expired</p>
                <p class="text-xs text-amber-700 dark:text-amber-300 mt-0.5">Your access expired on ${PaymentService.formatExpiry(entitlement.expiresAt)}. Select any plan below to immediately regain full access.</p>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 4 Plans Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          ${plans.map(plan => {
            const isSubscription = plan.billingType === 'subscription';
            const isPopular = plan.tag === 'MOST POPULAR';
            const isBestValue = plan.tag === 'BEST VALUE';

            return `
              <div class="relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-300 hover:shadow-xl ${
                isBestValue
                  ? 'border-2 border-indigo-600 dark:border-indigo-500 shadow-lg shadow-indigo-500/10 -translate-y-1'
                  : isPopular
                  ? 'border-2 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-500/10 -translate-y-1'
                  : isSubscription
                  ? 'border-2 border-sky-500 dark:border-sky-500 shadow-md'
                  : 'border-slate-200/90 dark:border-slate-800 shadow-sm'
              }">
                <!-- Top Badge -->
                ${plan.tag ? `
                  <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span class="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md ${
                      isBestValue ? 'bg-indigo-600' : isPopular ? 'bg-blue-600' : 'bg-sky-600'
                    }">
                      ${plan.tag}
                    </span>
                  </div>
                ` : ''}

                <div class="p-6 sm:p-7 space-y-6">
                  <!-- Duration & Title -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        ${plan.durationLabel}
                      </span>
                      <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isSubscription 
                          ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }">
                        ${isSubscription ? 'Monthly AutoPay' : 'One-Time Payment'}
                      </span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 dark:text-white">
                      ${plan.name}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                      ${plan.description}
                    </p>
                  </div>

                  <!-- Price & Savings Section -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
                    <div class="flex items-baseline gap-2">
                      <span class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                        ₹${plan.priceInr}
                      </span>
                      ${isSubscription ? `
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400">/ month</span>
                      ` : `
                        <span class="text-sm font-semibold line-through text-slate-400">
                          ₹${plan.originalPriceInr}
                        </span>
                      `}
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-700 dark:text-slate-300">
                        ${isSubscription ? 'Billed monthly' : `₹${plan.pricePerMonthInr}/month`}
                      </span>
                      <span class="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                        Save ${plan.savingsPercent}% (₹${plan.savingsInr})
                      </span>
                    </div>
                  </div>

                  <!-- Feature List -->
                  <div class="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                    <p class="font-bold uppercase tracking-wider text-[10px] text-slate-400">Included In This Plan:</p>
                    <ul class="space-y-2.5">
                      ${plan.features.map(f => `
                        <li class="flex items-start gap-2">
                          <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span class="leading-tight">${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <!-- CTA Button -->
                <div class="p-6 pt-0 mt-auto">
                  <button
                    type="button"
                    data-plan-id="${plan.id}"
                    class="btn-checkout-plan w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isBestValue
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:shadow-indigo-600/35'
                        : isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 hover:shadow-blue-600/35'
                        : isSubscription
                        ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/25'
                        : 'bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900'
                    }"
                  >
                    <span>${isSubscription ? `Subscribe ₹${plan.priceInr}/mo with AutoPay` : `Pay ₹${plan.priceInr} with Razorpay`}</span>
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                  <p class="text-[10px] text-center text-slate-400 mt-2">
                    ${isSubscription ? 'UPI AutoPay • Cards Mandate • Cancel Anytime' : 'One-Time Payment • Strictly No Auto-Renewal'}
                  </p>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Free vs Pro Comparison Table -->
        <div class="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div class="text-center space-y-1">
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Plan Comparison: Free vs. Pro
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Clear academic breakdown of access levels
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="border-b border-slate-100 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                  <th class="py-3 px-4 font-bold">Feature / Content</th>
                  <th class="py-3 px-4 font-bold text-center">Free Student Plan</th>
                  <th class="py-3 px-4 font-bold text-center text-blue-600 dark:text-blue-400">VG Insights Pro</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    NCERT Concepts, Formulas & Revision Notes
                  </td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400">✓ 100% Free Always</td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400">✓ 100% Free Always</td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    NEET PYQ Archive (Years 2014–2026)
                  </td>
                  <td class="py-3.5 px-4 text-center text-slate-500">
                    <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Only 2026 (1 Year)</span>
                  </td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ All 10+ Years (2014–2026)
                  </td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    Chapterwise 10,000+ MCQ Banks
                  </td>
                  <td class="py-3.5 px-4 text-center text-slate-500">
                    <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">1st Chapter of Phy/Chem/Bio</span>
                  </td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ All 38 Chapters Unlocked
                  </td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    Weekly 720-Mark Simulation Mock Series
                  </td>
                  <td class="py-3.5 px-4 text-center text-rose-500 font-bold">
                    ✗ Locked
                  </td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ All Weekly Mocks + AIR Predictor
                  </td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    AI Weakness Doctor & Diagnostic Engine
                  </td>
                  <td class="py-3.5 px-4 text-center text-slate-500">Basic Scan</td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ Unlimited AI Diagnostic Drills
                  </td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                    Mistake Book Auto-Tracking & Explanations
                  </td>
                  <td class="py-3.5 px-4 text-center text-slate-500">Standard</td>
                  <td class="py-3.5 px-4 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ Step-by-Step KaTeX Solutions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Trust & Security Banner -->
        <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            <div class="text-2xl">🔒</div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">Bank-Grade Security</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Processed securely via Razorpay PCI-DSS Level 1 compliant gateway.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            <div class="text-2xl">⚡</div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">Instant Activation</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Your Pro entitlement is verified on the backend and activated immediately.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
            <div class="text-2xl">🎯</div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">Full Billing Control</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">AutoPay can be cancelled anytime with 1 click; multi-month passes never renew automatically.</p>
          </div>
        </div>
      </div>
    `;
  }

  public static attachEvents(): void {
    const root = document.getElementById('pricing-page-root');
    if (!root) return;

    root.querySelectorAll('.btn-checkout-plan').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const target = e.currentTarget as HTMLElement;
        const planId = target.getAttribute('data-plan-id');
        if (!planId) return;

        const originalText = target.innerHTML;
        target.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Connecting to Razorpay...</span>
        `;
        target.setAttribute('disabled', 'true');

        try {
          await PaymentService.checkout(planId, {
            onSuccess: (entitlement) => {
              target.innerHTML = originalText;
              target.removeAttribute('disabled');
              PricingComponent.showSuccessModal(entitlement);
            },
            onError: (errMsg) => {
              target.innerHTML = originalText;
              target.removeAttribute('disabled');
              PricingComponent.showFailureModal(errMsg);
            },
            onCancel: () => {
              target.innerHTML = originalText;
              target.removeAttribute('disabled');
            }
          });
        } finally {
          target.innerHTML = originalText;
          target.removeAttribute('disabled');
        }
      });
    });
  }

  public static renderLockPrompt(options: {
    title: string;
    description: string;
    badgeText?: string;
    recommendedPlanId?: string;
  }): string {
    return `
      <div class="my-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 shadow-xl relative overflow-hidden text-center space-y-4">
        <div class="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <span>🔒</span> ${options.badgeText || 'Pro Content'}
          </div>

          <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
            ${options.title}
          </h3>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            ${options.description}
          </p>

          <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
            >
              <span>Unlock with VG Insights Pro</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <span class="text-xs text-slate-400 font-medium">Starting at only ₹199/month</span>
          </div>

          <div class="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
            <span>✓ Monthly AutoPay or One-Time</span>
            <span>•</span>
            <span>✓ Cancel Anytime</span>
            <span>•</span>
            <span>✓ Instant Unlock</span>
          </div>
        </div>
      </div>
    `;
  }

  public static showSuccessModal(entitlement: any): void {
    const modalId = 'modal-payment-success';
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = modalId;
    div.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in';
    div.innerHTML = `
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl text-center space-y-5 animate-scale-up">
        <div class="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-3xl shadow-inner">
          🎉
        </div>

        <div class="space-y-1.5">
          <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500 text-white">
            Payment Verified & Active
          </span>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white pt-2">
            Welcome to VG Insights Pro!
          </h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Your <strong>${entitlement.planName || 'Pro Plan'}</strong> is now active. All 10+ years PYQs, 38 chapterwise MCQs, and weekly 720-mark mock tests are unlocked!
          </p>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1 text-left">
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Billing Model:</span>
            <strong class="text-slate-800 dark:text-slate-200 capitalize">${entitlement.billingType === 'subscription' ? 'Monthly AutoPay' : 'One-Time Pass'}</strong>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Access Period:</span>
            <strong class="text-slate-800 dark:text-slate-200">${entitlement.remainingDays} Days Remaining</strong>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Valid Until:</span>
            <strong class="text-slate-800 dark:text-slate-200">${PaymentService.formatExpiry(entitlement.expiresAt)}</strong>
          </div>
        </div>

        <button
          type="button"
          id="btn-close-payment-success"
          class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          Start Practicing Now →
        </button>
      </div>
    `;

    document.body.appendChild(div);

    document.getElementById('btn-close-payment-success')?.addEventListener('click', () => {
      div.remove();
      window.location.reload();
    });
  }

  public static showFailureModal(errorMessage: string): void {
    const modalId = 'modal-payment-failure';
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = modalId;
    div.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in';
    div.innerHTML = `
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-rose-500/30 p-6 sm:p-8 shadow-2xl text-center space-y-5 animate-scale-up">
        <div class="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto text-3xl shadow-inner">
          ⚠️
        </div>

        <div class="space-y-1.5">
          <h2 class="text-xl font-black text-slate-900 dark:text-white">
            Payment Not Completed
          </h2>
          <p class="text-xs text-rose-600 dark:text-rose-400 font-medium">
            ${errorMessage || 'The payment was cancelled or could not be completed.'}
          </p>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
            If your account was debited, Razorpay automatically initiates a refund within 5–7 banking days. You can safely try again.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button
            type="button"
            id="btn-close-payment-failure"
            class="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            Dismiss
          </button>
          <a
            href="#pricing"
            id="btn-retry-payment-failure"
            class="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-all shadow-md"
          >
            Try Again →
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(div);

    document.getElementById('btn-close-payment-failure')?.addEventListener('click', () => {
      div.remove();
    });
    document.getElementById('btn-retry-payment-failure')?.addEventListener('click', () => {
      div.remove();
    });
  }
}
