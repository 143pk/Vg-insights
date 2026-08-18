/**
 * Service to manage Progressive Web App (PWA) / WebAPK installation on Android, iOS, and Desktop devices.
 */

let deferredPrompt: any = null;
let isInstalled = false;

export class PWAInstallService {
  private static listeners: Array<(canInstall: boolean) => void> = [];

  public static init() {
    if (typeof window === 'undefined') return;

    // Check if already running in standalone mode (already installed as APK/PWA)
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true
    ) {
      isInstalled = true;
    }

    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // Prevent automatic browser mini-infobar on mobile
      e.preventDefault();
      deferredPrompt = e;
      this.notifyListeners(true);
    });

    window.addEventListener('appinstalled', () => {
      isInstalled = true;
      deferredPrompt = null;
      this.notifyListeners(false);
      this.trackInstallSuccess();
    });
  }

  public static onCanInstallChange(callback: (canInstall: boolean) => void) {
    this.listeners.push(callback);
    callback(this.canPromptInstall());
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private static notifyListeners(canInstall: boolean) {
    this.listeners.forEach((cb) => {
      try {
        cb(canInstall);
      } catch (err) {
        console.error('[PWAInstallService] Listener error:', err);
      }
    });
  }

  public static canPromptInstall(): boolean {
    return Boolean(deferredPrompt) && !isInstalled;
  }

  public static isAppAlreadyInstalled(): boolean {
    return (
      isInstalled ||
      (typeof window !== 'undefined' &&
        (window.matchMedia('(display-mode: standalone)').matches ||
          (window.navigator as any).standalone === true))
    );
  }

  /**
   * Prompts the native Android / Chrome WebAPK installation dialogue.
   */
  public static async promptInstall(): Promise<boolean> {
    if (!deferredPrompt) {
      this.openInstallModal();
      return false;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      this.notifyListeners(false);
      return outcome === 'accepted';
    } catch (err) {
      console.warn('[PWAInstallService] Prompt error:', err);
      this.openInstallModal();
      return false;
    }
  }

  public static openInstallModal() {
    const modal = document.getElementById('pwa-install-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  public static closeInstallModal() {
    const modal = document.getElementById('pwa-install-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  private static trackInstallSuccess() {
    try {
      localStorage.setItem('vg_insights_app_installed', 'true');
    } catch {
      // ignore storage error
    }
  }
}
