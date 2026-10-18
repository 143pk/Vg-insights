import { AuthService } from './authService';
import { PaymentPlan, PremiumEntitlement } from '../types/payment';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const ENTITLEMENT_KEY = 'vg_insights_premium_entitlement';
const FIRST_FREE_CHAPTERS: Record<string, string> = {
  physics: 'units-measurements',
  chemistry: 'mole-concept',
  biology: 'living-world'
};

export class PaymentService {
  private static cachedEntitlement: PremiumEntitlement | null = null;
  private static listeners: Array<(entitlement: PremiumEntitlement) => void> = [];
  private static isInitialized = false;

  public static init(): void {
    if (this.isInitialized) return;

    // Load locally cached entitlement
    try {
      const stored = localStorage.getItem(ENTITLEMENT_KEY);
      if (stored) {
        this.cachedEntitlement = JSON.parse(stored);
      }
    } catch {
      this.cachedEntitlement = null;
    }

    // Subscribe to auth changes to sync entitlement with server
    AuthService.onAuthChanged((user) => {
      if (user && user.email) {
        this.syncWithServer(user.email, user.id || user.uid);
      } else {
        this.notifyListeners();
      }
    });

    this.isInitialized = true;
  }

  public static onEntitlementChange(callback: (entitlement: PremiumEntitlement) => void): () => void {
    this.listeners.push(callback);
    callback(this.getEntitlement());
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  private static notifyListeners(): void {
    const ent = this.getEntitlement();
    this.listeners.forEach(cb => {
      try {
        cb(ent);
      } catch (err) {
        console.warn('[PaymentService] Error in entitlement listener:', err);
      }
    });
  }

  /**
   * Evaluates current user's entitlement and handles expiration / paid-through dates automatically
   */
  public static getEntitlement(): PremiumEntitlement {
    const user = AuthService.getCurrentUser();
    const stored = this.cachedEntitlement;

    const now = Date.now();
    if (stored && stored.expiresAt) {
      if (now <= stored.expiresAt) {
        const remainingMs = stored.expiresAt - now;
        const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
        return {
          ...stored,
          userId: user?.id || user?.uid || stored.userId,
          userEmail: user?.email || stored.userEmail,
          isPremium: true,
          status: stored.status === 'cancelled' ? 'cancelled' : 'active',
          remainingDays
        };
      } else {
        // Expired! Paid-through date passed
        return {
          ...stored,
          userId: user?.id || user?.uid || stored.userId,
          userEmail: user?.email || stored.userEmail,
          isPremium: false,
          status: 'expired',
          remainingDays: 0
        };
      }
    }

    return {
      userId: user?.id || user?.uid,
      userEmail: user?.email,
      isPremium: false,
      status: 'free',
      remainingDays: 0
    };
  }

  public static isPremiumActive(): boolean {
    const ent = this.getEntitlement();
    return ent.isPremium && (ent.status === 'active' || ent.status === 'cancelled');
  }

  /**
   * Rule: PYQs: only the latest available year (2026) is free; all other years require premium.
   */
  public static isPyqYearAllowed(year: number | string): boolean {
    if (this.isPremiumActive()) return true;
    const numYear = typeof year === 'string' ? parseInt(year, 10) : year;
    return numYear === 2026;
  }

  /**
   * Rule: Chapterwise MCQs: the first chapter of Physics, Chemistry and Biology is free separately;
   * all other chapters require premium.
   */
  public static isChapterAllowed(subjectId: string, chapterId: string): boolean {
    if (this.isPremiumActive()) return true;

    const sub = (subjectId || '').toLowerCase();
    const ch = (chapterId || '').toLowerCase();

    // Specific free first chapters
    if (sub === 'physics' && (ch === 'units-measurements' || ch === 'physical-world')) {
      return true;
    }
    if (sub === 'chemistry' && (ch === 'mole-concept' || ch === 'some-basic-concepts-of-chemistry')) {
      return true;
    }
    if (sub === 'biology' && ch === 'living-world') {
      return true;
    }

    const freeChapter = FIRST_FREE_CHAPTERS[sub];
    if (freeChapter && ch === freeChapter) {
      return true;
    }

    return false;
  }

  /**
   * Rule: Weekly mock tests: completely locked for free users.
   */
  public static isWeeklyMockAllowed(): boolean {
    return this.isPremiumActive();
  }

  /**
   * Fetches latest verified entitlement from server
   */
  public static async syncWithServer(email: string, userId?: string): Promise<PremiumEntitlement> {
    try {
      const query = new URLSearchParams({ email, userId: userId || '' }).toString();
      const res = await fetch(`/api/payment/status?${query}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.entitlement) {
          this.cachedEntitlement = data.entitlement;
          localStorage.setItem(ENTITLEMENT_KEY, JSON.stringify(data.entitlement));
          this.notifyListeners();
          return this.getEntitlement();
        }
      }
    } catch (err) {
      console.warn('[PaymentService] Failed to sync entitlement with server:', err);
    }
    return this.getEntitlement();
  }

  /**
   * Loads Razorpay Checkout SDK script dynamically
   */
  public static async loadRazorpayScript(): Promise<boolean> {
    if (typeof window.Razorpay === 'function') {
      return true;
    }

    return new Promise((resolve) => {
      const existing = document.querySelector('script[src*="checkout.razorpay.com"]');
      if (existing) {
        existing.addEventListener('load', () => resolve(true));
        existing.addEventListener('error', () => resolve(false));
        setTimeout(() => {
          if (typeof window.Razorpay === 'function') resolve(true);
        }, 500);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => {
        console.error('[PaymentService] Failed to load Razorpay SDK');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  /**
   * Initiates payment order / subscription creation on server and opens Razorpay Checkout
   */
  public static async checkout(planId: string, options?: {
    onSuccess?: (entitlement: PremiumEntitlement) => void;
    onError?: (error: string) => void;
    onCancel?: () => void;
  }): Promise<void> {
    const user = AuthService.getCurrentUser();
    if (!user || !user.email) {
      this.promptEmailForCheckout(planId, options);
      return;
    }

    try {
      // 1. Create order or subscription securely on backend
      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          userEmail: user.email,
          userName: user.name || '',
          userId: user.id || user.uid || ''
        })
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || 'Failed to initialize payment order');
      }

      const { order, keyId, plan, isSubscription, subscriptionId, isSandbox } = orderData;

      // Sandbox or fallback test checkout
      if (isSandbox || !keyId || keyId.includes('placeholder')) {
        this.openSandboxCheckoutModal({
          order,
          plan,
          user,
          isSubscription: !!isSubscription,
          subscriptionId,
          onSuccess: options?.onSuccess,
          onError: options?.onError,
          onCancel: options?.onCancel
        });
        return;
      }

      // 2. Load Razorpay SDK for live payments
      const isLoaded = await this.loadRazorpayScript();
      if (!isLoaded || typeof window.Razorpay !== 'function') {
        throw new Error('Could not load Razorpay payment gateway. Please check your internet connection.');
      }

      // 3. Configure Razorpay Checkout options
      const rzpOptions: any = {
        key: keyId,
        name: 'VG Insights',
        description: isSubscription
          ? `NEET UG — ${plan.name} (Monthly AutoPay)`
          : `NEET UG — ${plan.name} (${plan.durationLabel})`,
        image: 'https://vginsights.in/favicon.svg',
        prefill: {
          name: user.name || '',
          email: user.email,
          contact: ''
        },
        notes: {
          planId: plan.id,
          userEmail: user.email,
          userId: user.id || user.uid || ''
        },
        theme: {
          color: '#2563eb'
        },
        modal: {
          ondismiss: () => {
            console.log('[Razorpay Checkout] Dismissed by user');
            options?.onCancel?.();
          }
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id?: string;
          razorpay_subscription_id?: string;
          razorpay_signature: string;
        }) => {
          try {
            // 4. Server-side signature and payment verification
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                planId: plan.id,
                userEmail: user.email,
                userName: user.name,
                userId: user.id || user.uid
              })
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.message || 'Payment signature verification failed.');
            }

            // 5. Store verified entitlement locally and trigger reactive UI refresh
            this.cachedEntitlement = verifyData.entitlement;
            localStorage.setItem(ENTITLEMENT_KEY, JSON.stringify(verifyData.entitlement));
            this.notifyListeners();

            options?.onSuccess?.(verifyData.entitlement);
          } catch (err: any) {
            console.error('[Payment Verification Failed]:', err);
            options?.onError?.(err?.message || 'Payment verification failed on the server.');
          }
        }
      };

      if (isSubscription && subscriptionId) {
        // Razorpay Subscription mode
        rzpOptions.subscription_id = subscriptionId;
      } else {
        // One-time order mode
        rzpOptions.amount = order.amount;
        rzpOptions.currency = order.currency || 'INR';
        rzpOptions.order_id = order.id;
      }

      const rzp = new window.Razorpay(rzpOptions);
      rzp.on('payment.failed', (failResponse: any) => {
        const desc = failResponse?.error?.description || failResponse?.error?.reason || 'Payment could not be completed';
        console.warn('[Razorpay Payment Failed]:', failResponse);
        options?.onError?.(`Payment failed: ${desc}`);
      });

      rzp.open();
    } catch (err: any) {
      console.error('[Payment Checkout Error]:', err);
      options?.onError?.(err?.message || 'Failed to start payment checkout');
    }
  }

  private static openSandboxCheckoutModal(params: {
    order: any;
    plan: any;
    user: any;
    isSubscription?: boolean;
    subscriptionId?: string;
    onSuccess?: (entitlement: PremiumEntitlement) => void;
    onError?: (error: string) => void;
    onCancel?: () => void;
  }): void {
    const existing = document.getElementById('modal-sandbox-checkout');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'modal-sandbox-checkout';
    div.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in';
    div.innerHTML = `
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-scale-up">
        <!-- Razorpay Header -->
        <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-5 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center font-black text-sm">
              VG
            </div>
            <div>
              <h3 class="font-bold text-sm">VG Insights • Razorpay</h3>
              <p class="text-[11px] text-blue-200">${params.plan.name} (${params.plan.durationLabel})</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs uppercase font-bold text-blue-200 block">${params.isSubscription ? 'Monthly AutoPay' : 'Amount'}</span>
            <span class="text-lg font-black">₹${params.plan.priceInr}${params.isSubscription ? '/mo' : ''}</span>
          </div>
        </div>

        <!-- Body & Payment Methods -->
        <div class="p-6 space-y-5">
          <div class="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
            <span class="text-base shrink-0">${params.isSubscription ? '🔄' : '💳'}</span>
            <div class="leading-relaxed">
              <span class="font-bold">${params.isSubscription ? 'Razorpay Subscription Mode' : 'Razorpay One-Time Payment'}</span>
              <p class="text-[11px] text-blue-700 dark:text-blue-400 mt-0.5">
                ${params.isSubscription 
                  ? 'Simulating UPI AutoPay / e-Mandate authorization for <strong>' + params.user.email + '</strong> (cancel anytime).'
                  : 'Verifying one-time payment for <strong>' + params.user.email + '</strong>.'}
              </p>
            </div>
          </div>

          <!-- Method Selector -->
          <div class="space-y-2">
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Payment Option</label>
            <div class="grid grid-cols-3 gap-2 text-center text-xs">
              <div class="p-3 rounded-xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 font-bold text-blue-600 dark:text-blue-400">
                <span>📱 UPI / AutoPay</span>
                <span class="block text-[10px] text-slate-500 font-normal">GPay / PhonePe</span>
              </div>
              <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <span>💳 Card Mandate</span>
                <span class="block text-[10px] text-slate-400 font-normal">Visa / Master</span>
              </div>
              <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <span>🏦 NetBanking</span>
                <span class="block text-[10px] text-slate-400 font-normal">All Banks</span>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
            <div class="flex justify-between text-slate-500 dark:text-slate-400">
              <span>Reference ID:</span>
              <span class="font-mono text-[11px] text-slate-700 dark:text-slate-300">${params.subscriptionId || params.order.id}</span>
            </div>
            <div class="flex justify-between text-slate-500 dark:text-slate-400">
              <span>Billing Model:</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${params.isSubscription ? 'Monthly Recurring AutoPay' : 'Fixed Duration (One-Time)'}</span>
            </div>
            <div class="flex justify-between text-slate-500 dark:text-slate-400">
              <span>Access Period:</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${params.plan.durationDays} Days</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-2 pt-2">
            <button
              type="button"
              id="btn-confirm-sandbox-payment"
              class="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>${params.isSubscription ? `Authorize AutoPay & Pay ₹${params.plan.priceInr}` : `Confirm & Complete Payment (₹${params.plan.priceInr})`}</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </button>
            <button
              type="button"
              id="btn-cancel-sandbox-payment"
              class="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              Cancel Payment
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(div);

    document.getElementById('btn-cancel-sandbox-payment')?.addEventListener('click', () => {
      div.remove();
      params.onCancel?.();
    });

    document.getElementById('btn-confirm-sandbox-payment')?.addEventListener('click', async () => {
      const confirmBtn = document.getElementById('btn-confirm-sandbox-payment') as HTMLButtonElement;
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Verifying with Server...</span>
        `;
      }

      try {
        const payload: any = {
          razorpay_payment_id: `pay_test_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
          razorpay_signature: 'test_signature_verified',
          planId: params.plan.id,
          userEmail: params.user.email,
          userName: params.user.name,
          userId: params.user.id || params.user.uid
        };

        if (params.isSubscription && params.subscriptionId) {
          payload.razorpay_subscription_id = params.subscriptionId;
        } else {
          payload.razorpay_order_id = params.order.id;
        }

        const verifyRes = await fetch('/api/payment/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const verifyData = await verifyRes.json();
        if (!verifyRes.ok || !verifyData.success) {
          throw new Error(verifyData.message || 'Payment verification failed.');
        }

        div.remove();
        PaymentService.cachedEntitlement = verifyData.entitlement;
        localStorage.setItem(ENTITLEMENT_KEY, JSON.stringify(verifyData.entitlement));
        PaymentService.notifyListeners();
        params.onSuccess?.(verifyData.entitlement);
      } catch (err: any) {
        div.remove();
        params.onError?.(err?.message || 'Payment verification failed on the server.');
      }
    });
  }

  private static promptEmailForCheckout(planId: string, options?: {
    onSuccess?: (entitlement: PremiumEntitlement) => void;
    onError?: (error: string) => void;
    onCancel?: () => void;
  }): void {
    const existing = document.getElementById('modal-email-checkout');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'modal-email-checkout';
    div.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in';
    div.innerHTML = `
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5 animate-scale-up text-left">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚡</span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">Student Account & Payment</h3>
          </div>
          <button id="btn-close-email-checkout" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center font-bold cursor-pointer">✕</button>
        </div>

        <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 text-xs text-blue-900 dark:text-blue-300">
          <p class="font-bold">Enter your email address to continue</p>
          <p class="text-[11px] text-blue-700 dark:text-blue-400 mt-0.5">
            Your Pro access and payment receipt will be securely linked to this email.
          </p>
        </div>

        <form id="form-email-checkout" class="space-y-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Student Email <span class="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="input-checkout-email"
              required
              placeholder="e.g. aspirant@gmail.com"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="input-checkout-name"
              placeholder="e.g. Amit Kumar"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Proceed to Razorpay Checkout →</span>
          </button>
        </form>

        <div class="text-center pt-1 border-t border-slate-100 dark:border-slate-800">
          <button id="btn-trigger-full-auth" type="button" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
            Or sign in with Google / Mobile OTP →
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(div);

    document.getElementById('btn-close-email-checkout')?.addEventListener('click', () => {
      div.remove();
      options?.onCancel?.();
    });

    document.getElementById('btn-trigger-full-auth')?.addEventListener('click', () => {
      div.remove();
      (window as any).openAuthModal?.();
    });

    document.getElementById('form-email-checkout')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('input-checkout-email') as HTMLInputElement;
      const nameInput = document.getElementById('input-checkout-name') as HTMLInputElement;
      const email = emailInput?.value?.trim();
      const name = nameInput?.value?.trim();
      if (!email) return;

      AuthService.loginWithDirectEmail(email, name);
      div.remove();

      // Proceed immediately with checkout!
      PaymentService.checkout(planId, options);
    });
  }

  /**
   * Helper to format an expiry date nicely
   */
  public static formatExpiry(timestamp?: number): string {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}
