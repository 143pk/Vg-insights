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
        <div class="p-5 sm:p-6">
          
          <!-- Step 1: Email & Identity Form -->
          <div id="auth-step-email" class="space-y-4">
            
            <div class="space-y-1 text-left">
              <div class="flex items-center gap-2">
                <h4 id="auth-header-title" class="text-base font-bold text-slate-900 dark:text-slate-100">
                  Enter your email
                </h4>
                <span id="auth-user-badge" class="hidden text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  New Account
                </span>
              </div>
              <p id="auth-header-desc" class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We'll verify your email with a secure 6-digit one-time passcode (OTP).
              </p>
            </div>

            <form id="form-auth-email" class="space-y-3.5">
              
              <!-- Email Field -->
              <div>
                <label for="auth-email-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div class="relative">
                  <input
                    type="email"
                    id="auth-email-input"
                    placeholder="aspirant@gmail.com"
                    autocomplete="email"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <!-- Required Full Name Field (Revealed for First-Time Registration) -->
              <div id="auth-name-group" class="hidden space-y-1.5 transition-all duration-300">
                <div class="flex items-center justify-between">
                  <label for="auth-name-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Full Name <span class="text-rose-500">*</span>
                  </label>
                  <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Required for new account</span>
                </div>
                <div class="relative">
                  <input
                    type="text"
                    id="auth-name-input"
                    placeholder="Enter your full name"
                    autocomplete="name"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <!-- Returning User Recognized Greeting Box -->
              <div id="auth-returning-greeting" class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300">
                <div class="flex items-center gap-2 font-semibold">
                  <span>👋</span>
                  <span>Welcome back, <strong id="auth-returning-name" class="font-bold">Aspirant</strong>!</span>
                </div>
              </div>

              <div id="auth-email-error" class="hidden text-xs text-rose-500 font-medium text-left"></div>

              <button
                type="submit"
                id="btn-auth-send-otp"
                class="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span id="btn-auth-send-otp-label">Continue</span>
                <span id="btn-auth-send-otp-arrow">→</span>
              </button>
            </form>

            <div class="pt-1 text-center">
              <p class="text-[11px] text-slate-400 dark:text-slate-500">
                By continuing, you agree to VG Insights Terms & Privacy Policy.
              </p>
            </div>
          </div>

          <!-- Step 2: OTP Verification Form -->
          <div id="auth-step-otp" class="hidden space-y-4">
            
            <div class="space-y-1 text-left">
              <div class="flex items-center justify-between">
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">Enter 6-Digit Code</h4>
                <button type="button" id="btn-auth-change-email" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  Change Email
                </button>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Enter the 6-digit code sent to <span id="auth-display-email" class="font-bold text-slate-700 dark:text-slate-300"></span>
              </p>
            </div>

            <!-- Demo Helper Callout -->
            <div id="auth-demo-callout" class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-center justify-between text-xs">
              <div class="flex items-center gap-2 text-blue-700 dark:text-blue-300 min-w-0 truncate">
                <span>🔑</span>
                <span class="truncate">Passcode: <strong class="font-mono text-sm tracking-wider" id="auth-demo-otp-hint">123456</strong></span>
              </div>
              <button type="button" id="btn-autofill-otp" class="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0 ml-2">
                Use code
              </button>
            </div>

            <form id="form-auth-otp" class="space-y-4">
              <div>
                <label for="auth-otp-input" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  6-Digit OTP
                </label>
                <input
                  type="text"
                  id="auth-otp-input"
                  maxlength="6"
                  placeholder="123456"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="one-time-code"
                  required
                  class="w-full px-4 py-3 text-center tracking-[0.5em] font-mono text-xl font-bold rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div id="auth-otp-error" class="hidden text-xs text-rose-500 font-medium text-center"></div>

              <button
                type="submit"
                id="btn-auth-verify-otp"
                class="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Verify & Enter VG Insights</span>
                <span>→</span>
              </button>
            </form>

            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span>Didn't receive code?</span>
              <button type="button" id="btn-auth-resend" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Resend OTP
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initAuthModalEvents(onLoginSuccess: () => void): void {
  const modal = document.getElementById('modal-auth');
  const btnClose = document.getElementById('btn-close-auth');
  const stepEmail = document.getElementById('auth-step-email');
  const stepOtp = document.getElementById('auth-step-otp');
  const formEmail = document.getElementById('form-auth-email') as HTMLFormElement | null;
  const formOtp = document.getElementById('form-auth-otp') as HTMLFormElement | null;
  const inputEmail = document.getElementById('auth-email-input') as HTMLInputElement | null;
  const inputName = document.getElementById('auth-name-input') as HTMLInputElement | null;
  const nameGroup = document.getElementById('auth-name-group');
  const userBadge = document.getElementById('auth-user-badge');
  const returningGreeting = document.getElementById('auth-returning-greeting');
  const returningName = document.getElementById('auth-returning-name');
  const headerTitle = document.getElementById('auth-header-title');
  const headerDesc = document.getElementById('auth-header-desc');
  const btnSendOtpLabel = document.getElementById('btn-auth-send-otp-label');
  const inputOtp = document.getElementById('auth-otp-input') as HTMLInputElement | null;
  const emailError = document.getElementById('auth-email-error');
  const otpError = document.getElementById('auth-otp-error');
  const displayEmail = document.getElementById('auth-display-email');
  const btnChangeEmail = document.getElementById('btn-auth-change-email');
  const btnAutofill = document.getElementById('btn-autofill-otp');
  const btnResend = document.getElementById('btn-auth-resend');
  const demoOtpHint = document.getElementById('auth-demo-otp-hint');

  let currentEmail = '';
  let isCurrentNewUser = false;
  let hasCheckedEmail = false;

  const resetFormState = () => {
    hasCheckedEmail = false;
    isCurrentNewUser = false;
    if (nameGroup) nameGroup.classList.add('hidden');
    if (inputName) {
      inputName.value = '';
      inputName.removeAttribute('required');
    }
    if (userBadge) userBadge.classList.add('hidden');
    if (returningGreeting) returningGreeting.classList.add('hidden');
    if (headerTitle) headerTitle.textContent = 'Enter your email';
    if (headerDesc) headerDesc.textContent = "We'll verify your email with a secure 6-digit one-time passcode (OTP).";
    if (btnSendOtpLabel) btnSendOtpLabel.textContent = 'Continue';
    if (emailError) emailError.classList.add('hidden');
    if (otpError) otpError.classList.add('hidden');
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  const openModal = (prefillEmail?: string) => {
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (stepEmail && stepOtp) {
        stepEmail.classList.remove('hidden');
        stepOtp.classList.add('hidden');
      }
      resetFormState();
      if (inputEmail) {
        if (prefillEmail) {
          inputEmail.value = prefillEmail;
          checkEmailState(prefillEmail);
        }
        setTimeout(() => inputEmail.focus(), 50);
      }
    }
  };

  // Check email registration state
  const checkEmailState = async (email: string) => {
    const clean = email.trim().toLowerCase();
    if (!clean || !clean.includes('@') || !clean.includes('.')) {
      resetFormState();
      return;
    }

    const checkRes = await AuthService.checkEmail(clean);
    hasCheckedEmail = true;

    if (checkRes.isRegistered) {
      // Existing Registered User
      isCurrentNewUser = false;
      if (nameGroup) nameGroup.classList.add('hidden');
      if (inputName) {
        inputName.value = '';
        inputName.removeAttribute('required');
      }
      if (userBadge) userBadge.classList.add('hidden');
      if (returningGreeting && returningName) {
        returningName.textContent = checkRes.name || 'Aspirant';
        returningGreeting.classList.remove('hidden');
      }
      if (headerTitle) headerTitle.textContent = 'Welcome back!';
      if (headerDesc) headerDesc.textContent = 'Send a 6-digit login verification code to your email.';
      if (btnSendOtpLabel) btnSendOtpLabel.textContent = 'Send Login Code';
    } else {
      // First-time Signup (New User) -> Ask for Full Name
      isCurrentNewUser = true;
      if (returningGreeting) returningGreeting.classList.add('hidden');
      if (userBadge) {
        userBadge.textContent = 'New Account';
        userBadge.classList.remove('hidden');
      }
      if (nameGroup) nameGroup.classList.remove('hidden');
      if (inputName) {
        inputName.setAttribute('required', 'true');
        setTimeout(() => inputName.focus(), 50);
      }
      if (headerTitle) headerTitle.textContent = 'Create your account';
      if (headerDesc) headerDesc.textContent = 'Enter your Full Name to set up your VG Insights profile.';
      if (btnSendOtpLabel) btnSendOtpLabel.textContent = 'Create Account & Send OTP';
    }
  };

  // Expose globally for triggers
  (window as any).openAuthModal = openModal;
  (window as any).closeAuthModal = closeModal;

  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Live email typing detection
  let debounceTimer: any = null;
  if (inputEmail) {
    inputEmail.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      const val = inputEmail.value.trim();
      if (val.includes('@') && val.includes('.')) {
        debounceTimer = setTimeout(() => {
          checkEmailState(val);
        }, 350);
      } else {
        resetFormState();
      }
    });

    inputEmail.addEventListener('blur', () => {
      const val = inputEmail.value.trim();
      if (val.includes('@') && val.includes('.')) {
        checkEmailState(val);
      }
    });
  }

  // Submit Step 1 (Email & Full Name for First-time Signup)
  if (formEmail && inputEmail) {
    formEmail.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = inputEmail.value.trim();
      if (!email) return;

      if (emailError) emailError.classList.add('hidden');

      // If email has not yet been evaluated, check registration status first
      if (!hasCheckedEmail) {
        await checkEmailState(email);
        if (isCurrentNewUser && inputName && !inputName.value.trim()) {
          inputName.focus();
          return;
        }
      }

      // First-time signup validation: Full Name is strictly required
      let fullName = '';
      if (isCurrentNewUser) {
        fullName = inputName?.value.trim().replace(/\s+/g, ' ') || '';
        if (!fullName) {
          if (emailError) {
            emailError.textContent = 'Full Name is required for first-time account registration.';
            emailError.classList.remove('hidden');
          }
          if (inputName) inputName.focus();
          return;
        }
      }

      const btnSubmit = document.getElementById('btn-auth-send-otp') as HTMLButtonElement | null;
      if (btnSubmit) {
        btnSubmit.disabled = true;
        if (btnSendOtpLabel) btnSendOtpLabel.textContent = 'Sending code...';
      }

      const res = await AuthService.requestOtp(email, fullName);

      if (btnSubmit) {
        btnSubmit.disabled = false;
        if (btnSendOtpLabel) {
          btnSendOtpLabel.textContent = isCurrentNewUser ? 'Create Account & Send OTP' : 'Send Login Code';
        }
      }

      if (res.success) {
        currentEmail = email;
        if (displayEmail) displayEmail.textContent = email;
        if (demoOtpHint) demoOtpHint.textContent = res.demoOtp || '123456';
        if (stepEmail && stepOtp) {
          stepEmail.classList.add('hidden');
          stepOtp.classList.remove('hidden');
        }
        if (inputOtp) {
          inputOtp.value = '';
          setTimeout(() => inputOtp.focus(), 50);
        }
      } else {
        if (emailError) {
          emailError.textContent = res.message || 'Failed to send OTP code. Please try again.';
          emailError.classList.remove('hidden');
        }
      }
    });
  }

  // Change Email
  if (btnChangeEmail && stepEmail && stepOtp) {
    btnChangeEmail.addEventListener('click', () => {
      stepOtp.classList.add('hidden');
      stepEmail.classList.remove('hidden');
      if (inputEmail) inputEmail.focus();
    });
  }

  // Auto fill demo OTP and submit
  if (btnAutofill && inputOtp && demoOtpHint && formOtp) {
    btnAutofill.addEventListener('click', () => {
      const code = demoOtpHint.textContent || '123456';
      inputOtp.value = code;
      formOtp.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    });
  }

  // Auto-submit when 6 digits are typed
  if (inputOtp && formOtp) {
    inputOtp.addEventListener('input', () => {
      const val = inputOtp.value.trim();
      if (val.length === 6 && /^\d{6}$/.test(val)) {
        formOtp.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    });
  }

  // Resend OTP
  if (btnResend && demoOtpHint) {
    btnResend.addEventListener('click', async () => {
      if (!currentEmail) return;
      const fullName = isCurrentNewUser ? (inputName?.value.trim() || '') : '';
      btnResend.textContent = 'Sending...';
      const res = await AuthService.requestOtp(currentEmail, fullName);
      btnResend.textContent = 'Code resent!';
      if (demoOtpHint && res.demoOtp) {
        demoOtpHint.textContent = res.demoOtp;
      }
      setTimeout(() => {
        btnResend.textContent = 'Resend OTP';
      }, 3000);
    });
  }

  // Submit Step 2 (Verify OTP)
  if (formOtp && inputOtp) {
    formOtp.addEventListener('submit', async (e) => {
      e.preventDefault();
      const otpVal = inputOtp.value.trim();
      if (!otpVal) return;

      if (otpError) otpError.classList.add('hidden');

      const fullName = isCurrentNewUser ? (inputName?.value.trim() || '') : '';

      const btnVerify = document.getElementById('btn-auth-verify-otp') as HTMLButtonElement | null;
      if (btnVerify) {
        btnVerify.disabled = true;
        btnVerify.innerHTML = `<span>Verifying...</span>`;
      }

      const res = await AuthService.verifyOtp(currentEmail, otpVal, fullName);

      if (btnVerify) {
        btnVerify.disabled = false;
        btnVerify.innerHTML = `<span>Verify & Enter VG Insights</span> <span>→</span>`;
      }

      if (res.success) {
        closeModal();
        onLoginSuccess();

        // Prompt student to install app / APK on their phone if not already installed
        if (!PWAInstallService.isAppAlreadyInstalled()) {
          setTimeout(() => {
            PWAInstallService.openInstallModal();
          }, 600);
        }
      } else {
        if (otpError) {
          otpError.textContent = res.message || 'Invalid verification code. Please check and try again.';
          otpError.classList.remove('hidden');
        }
      }
    });
  }
}
