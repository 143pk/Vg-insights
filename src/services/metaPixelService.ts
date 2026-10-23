/**
 * Meta Pixel (Facebook Pixel) Service for VG Insights
 * 
 * Provides official Meta Pixel tracking, Advanced Matching for high Event Match Quality (EMQ),
 * standard e-commerce & educational conversion events, and an in-app live event inspector.
 */

import { StorageService } from './storageService';

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export type MetaStandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Search'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'AddPaymentInfo'
  | 'Purchase'
  | 'Lead'
  | 'CompleteRegistration'
  | 'Contact'
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'Schedule'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe';

export interface MetaPixelEventLog {
  id: string;
  timestamp: number;
  type: 'standard' | 'custom';
  eventName: string;
  params?: Record<string, any>;
  status: 'sent' | 'queued' | 'adblock_prevented';
}

const STORAGE_PIXEL_ID_KEY = 'vg_meta_pixel_id';
const DEFAULT_FALLBACK_PIXEL_ID = '915584438158901'; // Official Meta Pixel ID from Meta Events Manager

export class MetaPixelService {
  private static pixelId: string = '';
  private static isInitialized = false;
  private static eventLogs: MetaPixelEventLog[] = [];
  private static listeners: Array<(logs: MetaPixelEventLog[]) => void> = [];
  private static currentUserData: Record<string, any> = {};

  /**
   * Initializes Meta Pixel script and begins tracking
   */
  public static init(): void {
    if (this.isInitialized) return;

    // 1. Resolve Pixel ID: LocalStorage override > VITE_META_PIXEL_ID > Default fallback
    this.pixelId = this.resolvePixelId();

    // 2. Inject or connect the official Meta Pixel snippet
    this.injectPixelScript(this.pixelId);

    this.isInitialized = true;
    console.log(`[MetaPixel] Initialized with Pixel ID: ${this.pixelId || 'None (pending user input)'}`);
  }

  /**
   * Resolves the current active Meta Pixel ID
   */
  public static resolvePixelId(): string {
    try {
      const stored = StorageService.safeGetItem(STORAGE_PIXEL_ID_KEY);
      if (stored && stored.trim()) {
        return stored.trim();
      }
    } catch {}

    const envId = (import.meta as any).env?.VITE_META_PIXEL_ID;
    if (envId && typeof envId === 'string' && envId.trim() && !envId.includes('YOUR_')) {
      return envId.trim();
    }

    return DEFAULT_FALLBACK_PIXEL_ID;
  }

  /**
   * Updates and saves a new Pixel ID in localStorage, re-initializing the pixel
   */
  public static setPixelId(newId: string): void {
    const cleaned = newId.trim().replace(/[^0-9]/g, '');
    this.pixelId = cleaned;
    StorageService.safeSetItem(STORAGE_PIXEL_ID_KEY, cleaned);

    if (typeof window !== 'undefined' && window.fbq && cleaned) {
      try {
        window.fbq('init', cleaned, this.currentUserData);
        this.trackPageView();
      } catch (e) {
        console.warn('[MetaPixel] Error re-initializing with new ID:', e);
      }
    }

    this.logEvent({
      id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      type: 'custom',
      eventName: 'PixelIdUpdated',
      params: { pixelId: cleaned },
      status: 'sent'
    });
  }

  /**
   * Returns current active Pixel ID
   */
  public static getPixelId(): string {
    return this.pixelId || this.resolvePixelId();
  }

  /**
   * Injects the standard Meta Pixel JavaScript snippet into document <head>
   */
  private static injectPixelScript(pixelId: string): void {
    if (typeof window === 'undefined') return;

    if (!window.fbq) {
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
    }

    if (pixelId && window.fbq) {
      try {
        window.fbq('init', pixelId, this.currentUserData);
      } catch (err) {
        console.warn('[MetaPixel] init error:', err);
      }
    }
  }

  /**
   * Identifies the current user for Meta Advanced Matching (higher conversion accuracy)
   */
  public static identifyUser(user: { email?: string; name?: string; id?: string }): void {
    this.currentUserData = {
      ...(user.email ? { em: user.email.toLowerCase().trim() } : {}),
      ...(user.name ? { fn: user.name.split(' ')[0], ln: user.name.split(' ').slice(1).join(' ') } : {}),
      ...(user.id ? { external_id: user.id } : {})
    };

    if (typeof window !== 'undefined' && window.fbq && this.pixelId) {
      try {
        window.fbq('init', this.pixelId, this.currentUserData);
      } catch (e) {
        console.warn('[MetaPixel] identifyUser error:', e);
      }
    }
  }

  /**
   * Tracks a PageView event with URL and Title parameters
   */
  public static trackPageView(pagePath?: string, pageTitle?: string): void {
    const path = pagePath || (typeof window !== 'undefined' ? window.location.hash || window.location.pathname : '/');
    const title = pageTitle || (typeof document !== 'undefined' ? document.title : 'VG Insights');

    this.trackEvent('PageView', {
      page_path: path,
      page_title: title
    });
  }

  /**
   * Tracks standard Meta Pixel events
   */
  public static trackEvent(eventName: MetaStandardEvent, params?: Record<string, any>): void {
    const enrichedParams = {
      ...params,
      content_source: 'vg_insights',
      timestamp: new Date().toISOString()
    };

    let status: 'sent' | 'queued' | 'adblock_prevented' = 'sent';

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      try {
        window.fbq('track', eventName, enrichedParams);
      } catch (err) {
        console.warn(`[MetaPixel] Failed to track ${eventName}:`, err);
        status = 'adblock_prevented';
      }
    } else {
      status = 'queued';
    }

    this.logEvent({
      id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      type: 'standard',
      eventName,
      params: enrichedParams,
      status
    });

    console.log(`[MetaPixel] Fired 'track': ${eventName}`, enrichedParams);
  }

  /**
   * Tracks custom Meta Pixel events (e.g. NEET specific actions)
   */
  public static trackCustom(eventName: string, params?: Record<string, any>): void {
    const enrichedParams = {
      ...params,
      content_source: 'vg_insights',
      timestamp: new Date().toISOString()
    };

    let status: 'sent' | 'queued' | 'adblock_prevented' = 'sent';

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      try {
        window.fbq('trackCustom', eventName, enrichedParams);
      } catch (err) {
        console.warn(`[MetaPixel] Failed to trackCustom ${eventName}:`, err);
        status = 'adblock_prevented';
      }
    } else {
      status = 'queued';
    }

    this.logEvent({
      id: `cust_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      type: 'custom',
      eventName,
      params: enrichedParams,
      status
    });

    console.log(`[MetaPixel] Fired 'trackCustom': ${eventName}`, enrichedParams);
  }

  /**
   * Specific High-Value Conversion Trackers
   */

  /**
   * Fired when user selects a pricing plan or begins Razorpay checkout
   */
  public static trackInitiateCheckout(plan: { id: string; name: string; price: number; currency?: string }): void {
    this.trackEvent('InitiateCheckout', {
      content_name: `NEET UG — ${plan.name}`,
      content_category: 'Subscription',
      content_ids: [plan.id],
      value: plan.price,
      currency: plan.currency || 'INR',
      num_items: 1
    });
  }

  /**
   * Fired when Razorpay payment is verified and confirmed
   */
  public static trackPurchase(order: {
    planId: string;
    planName: string;
    amount: number;
    transactionId: string;
    currency?: string;
  }): void {
    this.trackEvent('Purchase', {
      content_name: `NEET UG — ${order.planName}`,
      content_type: 'product',
      content_ids: [order.planId],
      value: order.amount,
      currency: order.currency || 'INR',
      num_items: 1,
      order_id: order.transactionId
    });
  }

  /**
   * Fired when user signs up or signs in successfully
   */
  public static trackRegistration(method: string = 'google'): void {
    this.trackEvent('CompleteRegistration', {
      content_name: 'NEET UG Student Registration',
      status: 'completed',
      registration_method: method
    });
  }

  /**
   * Fired when a student takes a free test, diagnostic quiz, or joins Telegram study group
   */
  public static trackLead(leadType: string, details?: Record<string, any>): void {
    this.trackEvent('Lead', {
      content_name: leadType,
      content_category: 'NEET Aspirant Lead',
      ...details
    });
  }

  /**
   * Fired when user searches for questions, topics, or formulas
   */
  public static trackSearch(query: string, resultCount?: number): void {
    this.trackEvent('Search', {
      search_string: query,
      content_category: 'NEET Question Search',
      result_count: resultCount || 0
    });
  }

  /**
   * Check if Meta Pixel script has successfully loaded in the browser
   */
  public static isLoaded(): boolean {
    return typeof window !== 'undefined' && !!(window.fbq && window.fbq.loaded);
  }

  /**
   * Returns recent event logs for in-app debugging & verification
   */
  public static getEventLogs(): MetaPixelEventLog[] {
    return [...this.eventLogs];
  }

  /**
   * Clears event logs
   */
  public static clearLogs(): void {
    this.eventLogs = [];
    this.notifyListeners();
  }

  /**
   * Subscribes to live event logs
   */
  public static onEventsChange(callback: (logs: MetaPixelEventLog[]) => void): () => void {
    this.listeners.push(callback);
    callback(this.getEventLogs());
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  private static logEvent(log: MetaPixelEventLog): void {
    this.eventLogs.unshift(log);
    if (this.eventLogs.length > 50) {
      this.eventLogs.pop();
    }
    this.notifyListeners();
  }

  private static notifyListeners(): void {
    this.listeners.forEach(cb => {
      try {
        cb(this.getEventLogs());
      } catch (e) {
        console.warn('[MetaPixel] Listener error:', e);
      }
    });
  }
}
