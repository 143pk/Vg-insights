import { AuthService } from '../services/authService';
import { PWAInstallService } from '../services/pwaInstallService';
import { renderBrandLogo } from './brandLogoComponent';

export function renderAuthModal(): string {
  return `
    <div id="modal-auth" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-modal-enter">
        
        <!-- Header -->
        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <div class="flex items-center gap-3">
            ${renderBrandLogo({ size: 'md' })}
          </div>
          <button
            id="btn-close-auth"
            type="button"
            class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-5 sm:p-6 space-y-4">
          
          <div class="space-y-1 text-left">
            <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              Sign In to VG Insights
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Sync your NEET scores, bookmarks, and personalized AI diagnoses across all your devices.
            </p>
          </div>

          <!-- 1. Google 1-Tap / Firebase Auth Button -->
          <button
            type="button"
            id="btn-auth-google"
            class="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span id="btn-auth-google-text">Continue with Google</span>
          </button>

          <!-- Divider -->
          <div class="relative flex py-1 items-center">
            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            <span class="flex-shrink mx-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Or with Email</span>
            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          </div>

          <!-- 2. Email & Password Form -->
          <form id="form-auth-email" class="space-y-3">
            <div>
              <label for="auth-email-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="auth-email-input"
                placeholder="aspirant@gmail.com"
                autocomplete="email"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label for="auth-password-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <span class="text-[10px] text-slate-400">Min 6 characters</span>
              </div>
              <input
                type="password"
                id="auth-password-input"
                placeholder="••••••••"
                autocomplete="current-password"
                required
                minlength="6"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Optional Name for New Aspirants -->
            <div id="auth-name-container" class="space-y-1">
              <label for="auth-name-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Full Name <span class="text-slate-400 font-normal">(for test certificates)</span>
              </label>
              <input
                type="text"
                id="auth-name-input"
                placeholder="Dr. Aman Sharma"
                autocomplete="name"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div id="auth-error-msg" class="hidden p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs text-rose-600 dark:text-rose-400 font-medium text-left"></div>

            <button
              type="submit"
              id="btn-auth-submit-email"
              class="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span id="btn-auth-submit-label">Sign In / Register</span>
              <span>→</span>
            </button>
          </form>

          <!-- 3. Instant 1-Tap Guest Access Divider & Button -->
          <div class="relative flex py-1 items-center">
            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            <span class="flex-shrink mx-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Quick Start</span>
            <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          </div>

          <button
            type="button"
            id="btn-auth-quick-guest"
            class="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-slate-200/80 dark:border-slate-700"
          >
            <span>⚡</span>
            <span>Instant Guest Access (Start Studying Immediately)</span>
          </button>

          <div class="pt-1 text-center">
            <p class="text-[11px] text-slate-400 dark:text-slate-500">
              Secured by Google Firebase &bull; Free Forever for Students
            </p>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initAuthModal(onLoginSuccess: () => void): void {
  initAuthModalEvents(onLoginSuccess);
}

export function initAuthModalEvents(onLoginSuccess: () => void): void {
  const modal = document.getElementById('modal-auth');
  const btnClose = document.getElementById('btn-close-auth');
  const btnGoogle = document.getElementById('btn-auth-google');
  const btnGoogleText = document.getElementById('btn-auth-google-text');
  const formEmail = document.getElementById('form-auth-email') as HTMLFormElement | null;
  const inputEmail = document.getElementById('auth-email-input') as HTMLInputElement | null;
  const inputPassword = document.getElementById('auth-password-input') as HTMLInputElement | null;
  const inputName = document.getElementById('auth-name-input') as HTMLInputElement | null;
  const errorBox = document.getElementById('auth-error-msg');
  const btnSubmit = document.getElementById('btn-auth-submit-email') as HTMLButtonElement | null;
  const btnSubmitLabel = document.getElementById('btn-auth-submit-label');
  const btnQuickGuest = document.getElementById('btn-auth-quick-guest');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (errorBox) {
      errorBox.classList.add('hidden');
      errorBox.textContent = '';
    }
  };

  const openModal = () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
      inputEmail?.focus();
    }, 100);
  };

  const showError = (msg: string) => {
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.classList.remove('hidden');
    }
  };

  const hideError = () => {
    if (errorBox) {
      errorBox.classList.add('hidden');
      errorBox.textContent = '';
    }
  };

  // Bind close buttons
  btnClose?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Attach global trigger for open modal
  (window as any).openAuthModal = openModal;
  (window as any).closeAuthModal = closeModal;

  // 1. Google 1-Tap / Popup Sign-In
  btnGoogle?.addEventListener('click', async () => {
    hideError();
    if (btnGoogleText) btnGoogleText.textContent = 'Signing in with Google...';
    btnGoogle.setAttribute('disabled', 'true');

    try {
      const res = await AuthService.signInWithGoogle();
      if (res.success && res.user) {
        closeModal();
        onLoginSuccess();
        if (!PWAInstallService.isAppAlreadyInstalled()) {
          setTimeout(() => {
            PWAInstallService.openInstallModal();
          }, 600);
        }
      } else {
        showError(res.error || 'Google Sign-In was cancelled or failed.');
      }
    } catch (err: any) {
      showError(err.message || 'Failed to sign in with Google.');
    } finally {
      if (btnGoogleText) btnGoogleText.textContent = 'Continue with Google';
      btnGoogle.removeAttribute('disabled');
    }
  });

  // 2. Email & Password Sign-In / Register
  formEmail?.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideError();

    const email = inputEmail?.value.trim() || '';
    const password = inputPassword?.value || '';
    const name = inputName?.value.trim() || '';

    if (!email) {
      showError('Please enter your email address.');
      return;
    }
    if (!password || password.length < 6) {
      showError('Password must be at least 6 characters.');
      return;
    }

    if (btnSubmitLabel) btnSubmitLabel.textContent = 'Authenticating...';
    btnSubmit?.setAttribute('disabled', 'true');

    try {
      const res = await AuthService.signInWithEmail(email, password, name);
      if (res.success && res.user) {
        closeModal();
        onLoginSuccess();
        if (!PWAInstallService.isAppAlreadyInstalled()) {
          setTimeout(() => {
            PWAInstallService.openInstallModal();
          }, 600);
        }
      } else {
        showError(res.error || 'Authentication failed. Check your password or details.');
      }
    } catch (err: any) {
      showError(err.message || 'An unexpected error occurred.');
    } finally {
      if (btnSubmitLabel) btnSubmitLabel.textContent = 'Sign In / Register';
      btnSubmit?.removeAttribute('disabled');
    }
  });

  // 3. Instant Guest Access
  btnQuickGuest?.addEventListener('click', () => {
    hideError();
    const guestName = inputName?.value.trim() || (inputEmail?.value.includes('@') ? inputEmail.value.split('@')[0] : '') || 'NEET Aspirant';
    AuthService.quickStudentLogin(guestName, 2026);
    closeModal();
    onLoginSuccess();

    if (!PWAInstallService.isAppAlreadyInstalled()) {
      setTimeout(() => {
        PWAInstallService.openInstallModal();
      }, 600);
    }
  });
}
