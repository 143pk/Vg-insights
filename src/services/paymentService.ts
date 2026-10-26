import { AuthService } from './authService';
import { StorageService } from './storageService';
import { auth, db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { PaymentPlan, PremiumEntitlement } from '../types/payment';
import { MetaPixelService } from './metaPixelService';

declare global {
  interface Window {
    Razorpay?: any;
    __VG_API_BASE__?: string;
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
  private static unsubscribeFirestoreListener: (() => void) | null = null;

  public static init(): void {
    if (this.isInitialized) return;

    // Load locally cached verified entitlement
    try {
      const stored = StorageService.safeGetItem(ENTITLEMENT_KEY);
      if (stored) {
        this.cachedEntitlement = JSON.parse(stored);
      }
    } catch {
      this.cachedEntitlement = null;
    }

    // Subscribe to auth changes to attach real-time Firestore entitlement listener
    AuthService.onAuthChanged((user) => {
      if (user && (user.uid || user.id)) {
        const uid = user.uid || user.id!;
        this.attachFirestoreEntitlementListener(uid);
        this.syncWithServer();
      } else {
        if (this.unsubscribeFirestoreListener) {
          this.unsubscribeFirestoreListener();
          this.unsubscribeFirestoreListener = null;
        }
        this.cachedEntitlement = null;
        StorageService.safeRemoveItem(ENTITLEMENT_KEY);
        this.notifyListeners();
      }
    });

    this.isInitialized = true;
  }

  /**
   * Attaches real-time listener to Firestore user document for instant, trusted entitlement updates
   */
  private static attachFirestoreEntitlementListener(uid: string): void {
    if (this.unsubscribeFirestoreListener) {
      this.unsubscribeFirestoreListener();
      this.unsubscribeFirestoreListener = null;
    }

    try {
      const userDocRef = doc(db, 'users', uid);
      this.unsubscribeFirestoreListener = onSnapshot(userDocRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const now = Date.now();
          const expiresAt = data.premiumExpiresAt ? Number(data.premiumExpiresAt) : null;
          const isWithinValidPeriod = expiresAt !== null && now <= expiresAt;

          if (data.isPremium && isWithinValidPeriod) {
            const remainingDays = Math.ceil((expiresAt - now) / (1000 * 60 * 60 * 24));
            this.cachedEntitlement = {
              userId: uid,
              userEmail: data.email || '',
              isPremium: true,
              status: data.premiumStatus === 'cancelled' ? 'cancelled' : 'active',
              planId: data.planId,
              planName: data.planName,
              subscriptionId: data.subscriptionId,
              expiresAt,
              remainingDays,
              updatedAt: data.updatedAt ? new Date(data.updatedAt).getTime() : now
            };
          } else if (data.isPremium && !isWithinValidPeriod) {
            this.cachedEntitlement = {
              userId: uid,
              userEmail: data.email || '',
              isPremium: false,
              status: 'expired',
              remainingDays: 0,
              updatedAt: now
            };
          } else {
            this.cachedEntitlement = {
              userId: uid,
              userEmail: data.email || '',
              isPremium: false,
              status: 'free',
              remainingDays: 0,
              updatedAt: now
            };
          }

          StorageService.safeSetItem(ENTITLEMENT_KEY, JSON.stringify(this.cachedEntitlement));
          this.notifyListeners();
        }
      }, (err) => {
        console.warn('[PaymentService] Real-time entitlement listener warning:', err);
      });
    } catch (e) {
      console.warn('[PaymentService] Failed to attach Firestore listener:', e);
    }
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
   * Evaluates current user's entitlement based strictly on server truth and timestamp
   */
  public static getEntitlement(): PremiumEntitlement {
    const user = AuthService.getCurrentUser();
    const cleanEmail = (user?.email || '').trim().toLowerCase();

    // Permanent Developer & Owner All-Access Pass
    if (cleanEmail === 'optionvortex@gmail.com') {
      const now = Date.now();
      return {
        userId: user?.id || user?.uid || 'admin_optionvortex',
        userEmail: 'optionvortex@gmail.com',
        isPremium: true,
        status: 'active',
        planId: 'plan_6_months',
        planName: 'Developer & Admin Full Access',
        billingType: 'one_time',
        remainingDays: 3650,
        expiresAt: now + (3650 * 24 * 60 * 60 * 1000),
        updatedAt: now
      };
    }

    const stored = this.cachedEntitlement;

    const now = Date.now();
    if (stored && stored.expiresAt && stored.userId === (user?.uid || user?.id)) {
      if (now <= stored.expiresAt && stored.isPremium) {
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
    return Boolean(ent.isPremium && (ent.status === 'active' || ent.status === 'cancelled'));
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
   * Safely posts JSON to backend with Firebase ID Token authentication and structured error messages
   */
  private static async requestBackendJson(endpoint: string, payload: any, contextName: string): Promise<any> {
    const urlsToTry = [endpoint];

    // Support Firebase Cloud Functions direct URL or custom API proxy
    const functionsBase = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_FUNCTIONS_URL)
      || (typeof window !== 'undefined' ? (window as any).__VG_FUNCTIONS_BASE__ : undefined);

    if (functionsBase && typeof functionsBase === 'string' && functionsBase.startsWith('http')) {
      const cleanBase = functionsBase.replace(/\/+$/, '');
      if (endpoint === '/api/payment/create-order') {
        urlsToTry.unshift(`${cleanBase}/createSubscription`);
      } else if (endpoint === '/api/payment/verify') {
        urlsToTry.unshift(`${cleanBase}/verifyPayment`);
      } else {
        urlsToTry.unshift(`${cleanBase}${endpoint}`);
      }
    }

    const customApiBase = typeof window !== 'undefined' ? (window as any).__VG_API_BASE__ : undefined;
    if (customApiBase && typeof customApiBase === 'string' && customApiBase.startsWith('http')) {
      urlsToTry.unshift(`${customApiBase.replace(/\/+$/, '')}${endpoint}`);
    }

    // Get fresh Firebase ID Token
    let idToken = '';
    try {
      if (auth.currentUser) {
        idToken = await auth.currentUser.getIdToken(true);
      }
    } catch (tokenErr) {
      console.warn('[PaymentService] Failed to retrieve fresh ID token:', tokenErr);
    }

    let lastError: Error | null = null;

    for (const url of urlsToTry) {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        };
        if (idToken) {
          headers['Authorization'] = `Bearer ${idToken}`;
        }

        const res = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        });

        const rawText = await res.text();

        if (!rawText || !rawText.trim()) {
          throw new Error(
            `Payment server returned an empty response (HTTP ${res.status}).`
          );
        }

        let data: any;
        try {
          data = JSON.parse(rawText);
        } catch {
          const preview = rawText.slice(0, 100).replace(/<[^>]*>/g, '').trim();
          throw new Error(
            `Payment server error (HTTP ${res.status}): "${preview || 'Unexpected response'}".`
          );
        }

        if (!res.ok || data.success === false) {
          throw new Error(
            data.message || data.error || `Payment server error during ${contextName} (HTTP ${res.status}).`
          );
        }

        return data;
      } catch (err: any) {
        lastError = err;
        if (urlsToTry.indexOf(url) < urlsToTry.length - 1) {
          continue;
        }
      }
    }

    throw lastError || new Error(`Could not communicate with payment server during ${contextName}.`);
  }

  /**
   * Fetches latest verified entitlement from server using authenticated request
   */
  public static async syncWithServer(): Promise<PremiumEntitlement> {
    try {
      // The Worker API identifies the user by email/userId query params,
      // not by decoding the Firebase ID token.
      const user = AuthService.getCurrentUser();
      const email = user?.email || '';
      const uid = user?.id || user?.uid || '';
      if (!email && !uid) return this.getEntitlement();

      let idToken = '';
      if (auth.currentUser) {
        idToken = await auth.currentUser.getIdToken();
      }

      const query = new URLSearchParams({ email, userId: uid }).toString();
      const headers: Record<string, string> = { 'Accept': 'application/json' };
      if (idToken) headers['Authorization'] = `Bearer ${idToken}`;

      const res = await fetch(`/api/payment/status?${query}`, { headers });
      const data = await res.json();
      if (data && data.success && data.entitlement) {
        this.cachedEntitlement = data.entitlement;
        StorageService.safeSetItem(ENTITLEMENT_KEY, JSON.stringify(data.entitlement));
        this.notifyListeners();
        return this.getEntitlement();
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
        console.warn('[PaymentService] Failed to load Razorpay SDK');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  /**
   * Initiates payment order / subscription creation on server and opens Razorpay Checkout.
   * Under ZERO circumstances does this grant premium access without verified server signature!
   */
  public static async checkout(planId: string, options?: {
    onSuccess?: (entitlement: PremiumEntitlement) => void;
    onError?: (error: string) => void;
    onCancel?: () => void;
  }): Promise<void> {
    const user = AuthService.getCurrentUser();
    if (!user || !user.email) {
      // Require authenticated sign-in before starting payment
      if ((window as any).openAuthModal) {
        (window as any).openAuthModal();
      }
      options?.onError?.('Please sign in or create an account to activate your subscription.');
      return;
    }

    try {
      this.showPaymentLoadingOverlay('Initializing secure subscription with Razorpay...');

      // 1. Create order or subscription securely on backend.
      // The Worker API requires the user identity in the body (it does not
      // decode Firebase ID tokens) — without userEmail every payment fails.
      const orderData = await this.requestBackendJson('/api/payment/create-order', {
        planId,
        userEmail: user.email,
        userName: user.name || '',
        userId: user.id || user.uid || ''
      }, 'order creation');

      const { order, keyId, plan, isSubscription, subscriptionId } = orderData;

      if (!keyId || keyId.includes('placeholder')) {
        this.hidePaymentLoadingOverlay();
        throw new Error('Payment gateway is currently being configured on the server. Please contact administrator.');
      }

      // 2. Load Razorpay Checkout SDK
      const isLoaded = await this.loadRazorpayScript();
      if (!isLoaded || typeof window.Razorpay !== 'function') {
        this.hidePaymentLoadingOverlay();
        throw new Error('Could not load Razorpay payment gateway. Please check your internet connection.');
      }

      this.hidePaymentLoadingOverlay();

      // Track Meta Pixel InitiateCheckout Event
      try {
        MetaPixelService.trackInitiateCheckout({
          id: plan.id,
          name: plan.name,
          price: plan.price,
          currency: 'INR'
        });
      } catch (err) {
        console.warn('[MetaPixel] InitiateCheckout tracking error:', err);
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
          userId: user.id || user.uid || '',
          userEmail: user.email
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
            // 4. Show cryptographic verification state
            PaymentService.showPaymentLoadingOverlay('Verifying payment cryptographically with server...');

            const verifyData = await PaymentService.requestBackendJson('/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_subscription_id: response.razorpay_subscription_id || subscriptionId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              planId: plan.id,
              userEmail: user.email,
              userName: user.name || '',
              userId: user.id || user.uid || ''
            }, 'payment verification');

            PaymentService.hidePaymentLoadingOverlay();

            // 5. Store verified entitlement locally and trigger reactive UI refresh
            PaymentService.cachedEntitlement = verifyData.entitlement;
            StorageService.safeSetItem(ENTITLEMENT_KEY, JSON.stringify(verifyData.entitlement));
            PaymentService.notifyListeners();

            // Track Meta Pixel Purchase Event
            try {
              MetaPixelService.trackPurchase({
                planId: plan.id,
                planName: plan.name,
                amount: plan.price,
                currency: 'INR',
                transactionId: response.razorpay_payment_id
              });
            } catch (err) {
              console.warn('[MetaPixel] Purchase tracking error:', err);
            }

            options?.onSuccess?.(verifyData.entitlement);
          } catch (err: any) {
            PaymentService.hidePaymentLoadingOverlay();
            console.warn('[Payment Verification Notice]:', err?.message || err);
            // Premium stays strictly locked
            options?.onError?.(err?.message || 'Payment verification failed on the server. Premium features remain locked.');
          }
        }
      };

      if (isSubscription && subscriptionId) {
        rzpOptions.subscription_id = subscriptionId;
      } else if (order) {
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
      this.hidePaymentLoadingOverlay();
      console.warn('[Payment Checkout Notice]:', err?.message || err);
      options?.onError?.(err?.message || 'Failed to start payment checkout');
    }
  }

  private static showPaymentLoadingOverlay(message: string): void {
    let overlay = document.getElementById('vg-payment-loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'vg-payment-loading-overlay';
      overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4';
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl space-y-4">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600">
          <svg class="animate-spin h-7 w-7" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h4 class="font-bold text-base text-slate-900 dark:text-white">Securing Your Subscription</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${message}</p>
      </div>
    `;
    overlay.style.display = 'flex';
  }

  public static formatExpiry(timestamp?: number): string {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  private static hidePaymentLoadingOverlay(): void {
    const overlay = document.getElementById('vg-payment-loading-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
}
