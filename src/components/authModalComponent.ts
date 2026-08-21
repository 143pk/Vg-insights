import { AuthService, AuthUser } from '../services/authService';
import { PWAInstallService } from '../services/pwaInstallService';
import { renderBrandLogo } from './brandLogoComponent';

export function renderAuthModal(): string {
  return `
    <div id="modal-auth" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-modal-enter">
        
        <!-- Header -->
        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <div class="flex items-center gap-3">
            ${renderBrandLogo({ size: 'md' })}
          </div>
          <button
            id="btn-close-auth"
            type="button"
            class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6">
          
          <!-- STEP 1: Google Sign-In -->
          <div id="auth-step-login" class="space-y-5 text-center">
            <div class="space-y-1.5">
              <div class="w-12 h-12 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-inner">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-slate-100">
                Sign In to VG Insights
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                Sign in with Google to access NEET tests, save notes, and track your personalized rank.
              </p>
            </div>

            <div class="pt-2 space-y-3">
              <button
                type="button"
                id="btn-auth-google"
                class="w-full py-3.5 px-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-sm border-2 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span id="btn-auth-google-text">Continue with Google (1-Tap)</span>
              </button>

              <div class="relative flex py-1 items-center">
                <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                <span class="flex-shrink mx-3 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">or Enter with Name</span>
                <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>

              <!-- Quick Student Sign-In Form -->
              <form id="form-quick-student-login" class="space-y-3 text-left">
                <div>
                  <input
                    type="text"
                    id="quick-student-name"
                    placeholder="Enter your Full Name (e.g. Dr. Aman)"
                    required
                    minlength="2"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  id="btn-quick-student-submit"
                  class="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enter Student Workspace</span>
                  <span>→</span>
                </button>
              </form>

              <div id="auth-error-msg" class="hidden p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs text-rose-600 dark:text-rose-400 font-medium text-left"></div>
            </div>

            <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <p class="text-[11px] text-slate-400 dark:text-slate-500">
                Instant Google Sign-In &bull; You can confirm your real name next
              </p>
            </div>
          </div>

          <!-- STEP 2: Confirm / Update Full Name (Post-login or Profile Edit) -->
          <div id="auth-step-name" class="hidden space-y-4 text-left">
            <div class="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
              <div id="auth-user-avatar-badge" class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0 overflow-hidden">
                <span id="auth-user-avatar-initial">A</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5">
                  <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Signed In with Google</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <p id="auth-user-email-display" class="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">student@gmail.com</p>
              </div>
            </div>

            <div class="space-y-1">
              <h4 id="auth-step-name-title" class="text-lg font-bold text-slate-900 dark:text-slate-100">
                Confirm Your Full Real Name
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Google account names often differ from official names. Enter your real name for official mock test certificates and rank cards.
              </p>
            </div>

            <form id="form-auth-name-confirm" class="space-y-3.5 pt-1">
              <div>
                <label for="auth-real-name-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name on NEET Admit Card / Certificate <span class="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="auth-real-name-input"
                  placeholder="e.g. Aman Sharma / Dr. Priya Patel"
                  autocomplete="name"
                  required
                  minlength="2"
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label for="auth-real-target-year" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Target NEET UG Examination Year
                </label>
                <select
                  id="auth-real-target-year"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                >
                  <option value="2026">NEET UG 2026</option>
                  <option value="2027">NEET UG 2027</option>
                  <option value="2028">NEET UG 2028</option>
                </select>
              </div>

              <div id="auth-name-error-msg" class="hidden p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs text-rose-600 dark:text-rose-400 font-medium text-left"></div>

              <div class="pt-1 flex gap-2">
                <button
                  type="submit"
                  id="btn-auth-save-name"
                  class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span id="btn-auth-save-name-label">Save & Enter Workspace</span>
                  <span>→</span>
                </button>
              </div>
            </form>

            <div class="text-center pt-1">
              <button
                type="button"
                id="btn-auth-skip-name"
                class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors underline cursor-pointer"
              >
                Keep Current Name & Continue
              </button>
            </div>

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
  const stepLogin = document.getElementById('auth-step-login');
  const stepName = document.getElementById('auth-step-name');

  const btnGoogle = document.getElementById('btn-auth-google');
  const btnGoogleText = document.getElementById('btn-auth-google-text');
  const errorBox = document.getElementById('auth-error-msg');

  // Name step elements
  const formNameConfirm = document.getElementById('form-auth-name-confirm') as HTMLFormElement | null;
  const inputRealName = document.getElementById('auth-real-name-input') as HTMLInputElement | null;
  const selectTargetYear = document.getElementById('auth-real-target-year') as HTMLSelectElement | null;
  const nameErrorBox = document.getElementById('auth-name-error-msg');
  const emailDisplay = document.getElementById('auth-user-email-display');
  const avatarBadge = document.getElementById('auth-user-avatar-badge');
  const avatarInitial = document.getElementById('auth-user-avatar-initial');
  const btnSaveNameLabel = document.getElementById('btn-auth-save-name-label');
  const btnSkipName = document.getElementById('btn-auth-skip-name');
  const stepNameTitle = document.getElementById('auth-step-name-title');

  if (!modal) return;

  const showStep = (step: 'login' | 'name', isEditMode: boolean = false) => {
    if (step === 'login') {
      stepLogin?.classList.remove('hidden');
      stepName?.classList.add('hidden');
    } else {
      stepLogin?.classList.add('hidden');
      stepName?.classList.remove('hidden');

      const user = AuthService.getCurrentUser();
      if (user) {
        if (emailDisplay) emailDisplay.textContent = user.email || 'student@vginsights.in';
        if (inputRealName) inputRealName.value = user.name || '';
        if (selectTargetYear) selectTargetYear.value = String(user.targetYear || 2026);

        if (avatarBadge && avatarInitial) {
          if (user.photoURL) {
            avatarBadge.innerHTML = `<img src="${user.photoURL}" alt="${user.name}" class="w-full h-full object-cover" referrerpolicy="no-referrer" />`;
          } else {
            avatarBadge.innerHTML = `<span id="auth-user-avatar-initial">${(user.name || 'S').charAt(0).toUpperCase()}</span>`;
          }
        }
      }

      if (isEditMode) {
        if (stepNameTitle) stepNameTitle.textContent = 'Edit Your Profile Name';
        if (btnSaveNameLabel) btnSaveNameLabel.textContent = 'Save Changes';
        if (btnSkipName) btnSkipName.textContent = 'Cancel';
      } else {
        if (stepNameTitle) stepNameTitle.textContent = 'Confirm Your Full Real Name';
        if (btnSaveNameLabel) btnSaveNameLabel.textContent = 'Save & Enter Workspace';
        if (btnSkipName) btnSkipName.textContent = 'Keep Current Name & Continue';
      }

      setTimeout(() => {
        inputRealName?.focus();
        inputRealName?.select();
      }, 100);
    }
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (errorBox) {
      errorBox.classList.add('hidden');
      errorBox.textContent = '';
    }
    if (nameErrorBox) {
      nameErrorBox.classList.add('hidden');
      nameErrorBox.textContent = '';
    }
  };

  const openModal = () => {
    showStep('login');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  const openEditNameModal = () => {
    showStep('name', true);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  const showError = (msg: string) => {
    if (errorBox) {
      if (msg.includes('Domain not authorized') || msg.includes('unauthorized-domain')) {
        errorBox.innerHTML = `
          <div class="space-y-2">
            <p class="font-bold text-rose-700 dark:text-rose-300">${msg}</p>
            <p class="text-[11px] text-slate-600 dark:text-slate-300">Tip: You can enter instantly with your name below without waiting for domain whitelist.</p>
          </div>
        `;
        // Auto-focus quick student name input
        const quickInput = document.getElementById('quick-student-name') as HTMLInputElement | null;
        quickInput?.focus();
      } else {
        errorBox.textContent = msg;
      }
      errorBox.classList.remove('hidden');
    }
  };

  const hideError = () => {
    if (errorBox) {
      errorBox.classList.add('hidden');
      errorBox.textContent = '';
    }
  };

  const showNameError = (msg: string) => {
    if (nameErrorBox) {
      nameErrorBox.textContent = msg;
      nameErrorBox.classList.remove('hidden');
    }
  };

  // Bind close buttons
  btnClose?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Attach global triggers
  (window as any).openAuthModal = openModal;
  (window as any).openEditNameModal = openEditNameModal;
  (window as any).closeAuthModal = closeModal;

  // Quick Student Login Form (Instant & Works on any domain)
  const formQuickStudent = document.getElementById('form-quick-student-login') as HTMLFormElement | null;
  const inputQuickName = document.getElementById('quick-student-name') as HTMLInputElement | null;
  formQuickStudent?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = inputQuickName?.value.trim() || '';
    if (!name || name.length < 2) {
      showError('Please enter your full name (at least 2 characters).');
      inputQuickName?.focus();
      return;
    }
    AuthService.quickStudentLogin(name, 2026);
    closeModal();
    onLoginSuccess();
  });

  // 1. Google Sign-In Action -> Flows seamlessly to Name Confirmation
  btnGoogle?.addEventListener('click', async () => {
    hideError();
    if (btnGoogleText) btnGoogleText.textContent = 'Connecting to Google...';
    btnGoogle.setAttribute('disabled', 'true');

    try {
      const res = await AuthService.signInWithGoogle();
      if (res.success && res.user) {
        // Transition to Name Confirmation / Customization step!
        showStep('name', false);
      } else {
        if (res.error && !res.error.toLowerCase().includes('cancel') && !res.error.toLowerCase().includes('closed')) {
          showError(res.error);
        }
      }
    } catch (err: any) {
      if (!err.message?.includes('popup-closed-by-user')) {
        showError(err.message || 'Failed to sign in with Google.');
      }
    } finally {
      if (btnGoogleText) btnGoogleText.textContent = 'Continue with Google (1-Tap)';
      btnGoogle.removeAttribute('disabled');
    }
  });

  // 2. Name Confirmation & Save Form
  formNameConfirm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameErrorBox) nameErrorBox.classList.add('hidden');

    const newName = inputRealName?.value.trim() || '';
    const targetYear = parseInt(selectTargetYear?.value || '2026', 10);

    if (!newName || newName.length < 2) {
      showNameError('Please enter your full name (at least 2 characters).');
      inputRealName?.focus();
      return;
    }

    // Save updated name & year into auth profile
    AuthService.updateUserProfile({
      name: newName,
      targetYear,
    });

    closeModal();
    onLoginSuccess();

    if (!PWAInstallService.isAppAlreadyInstalled()) {
      setTimeout(() => {
        PWAInstallService.openInstallModal();
      }, 600);
    }
  });

  // 3. Skip / Keep Current Name
  btnSkipName?.addEventListener('click', () => {
    closeModal();
    onLoginSuccess();
  });
}
