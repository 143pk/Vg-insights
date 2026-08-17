export interface AuthUser {
  id?: string;
  email: string;
  name: string;
  targetYear?: number;
  loggedInAt: number;
  isEmailVerified?: boolean;
}

export interface CheckEmailResult {
  success: boolean;
  isRegistered: boolean;
  name?: string;
  error?: string;
}

export interface RequestOtpResult {
  success: boolean;
  isNewUser?: boolean;
  needsName?: boolean;
  userName?: string;
  message: string;
  demoOtp?: string;
  emailSent?: boolean;
  error?: string;
}

export interface VerifyOtpResult {
  success: boolean;
  user?: AuthUser;
  isNewUser?: boolean;
  message: string;
  error?: string;
}

const AUTH_STORAGE_KEY = 'vg_insights_auth_user';
const OTP_STORAGE_KEY = 'vg_insights_pending_otp';

export class AuthService {
  private static user: AuthUser | null = null;
  private static isInitialized = false;

  public static init(): void {
    if (this.isInitialized) return;
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        this.user = JSON.parse(stored);
        // Silently sync latest name & profile from server in background
        if (this.user?.email) {
          this.syncProfileFromServer(this.user.email);
        }
      }
    } catch {
      this.user = null;
    }
    this.isInitialized = true;
  }

  private static async syncProfileFromServer(email: string): Promise<void> {
    try {
      const res = await fetch(`/api/auth/me?email=${encodeURIComponent(email)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user && data.user.name) {
          if (this.user && this.user.name !== data.user.name) {
            this.user.name = data.user.name;
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(this.user));
          }
        }
      }
    } catch {
      // Offline / background sync ignore
    }
  }

  public static isAuthenticated(): boolean {
    this.init();
    return this.user !== null;
  }

  public static getCurrentUser(): AuthUser | null {
    this.init();
    return this.user;
  }

  /**
   * Checks if an email is already registered on the server.
   */
  public static async checkEmail(email: string): Promise<CheckEmailResult> {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, isRegistered: false, error: 'Please enter a valid email address.' };
    }

    try {
      const res = await fetch('/api/auth/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      });

      if (res.ok) {
        const data = await res.json();
        return {
          success: true,
          isRegistered: Boolean(data.isRegistered),
          name: data.name,
        };
      }
    } catch (err) {
      console.warn('[AuthService] Server check failed, checking local state:', err);
    }

    // Fallback: Check local storage
    const currentStored = this.getCurrentUser();
    if (currentStored && currentStored.email.toLowerCase() === cleanEmail) {
      return { success: true, isRegistered: true, name: currentStored.name };
    }

    return { success: true, isRegistered: false };
  }

  /**
   * Requests a 6-digit OTP from the server.
   * If new user, transmits the Full Name for account creation.
   */
  public static async requestOtp(email: string, name?: string): Promise<RequestOtpResult> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name ? name.trim().replace(/\s+/g, ' ') : '';

    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    try {
      const res = await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, name: cleanName }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data) {
        // Save pending client token for fallback verification
        if (data.demoOtp) {
          localStorage.setItem(
            OTP_STORAGE_KEY,
            JSON.stringify({
              email: cleanEmail,
              otp: data.demoOtp,
              name: cleanName,
              expiresAt: Date.now() + 10 * 60 * 1000,
            })
          );
        }

        return {
          success: true,
          isNewUser: data.isNewUser,
          needsName: data.needsName,
          userName: data.userName,
          message: data.message || `A verification code was sent to ${cleanEmail}`,
          demoOtp: data.demoOtp,
          emailSent: data.emailSent,
        };
      } else if (data?.needsName) {
        return {
          success: true,
          needsName: true,
          isNewUser: true,
          message: data.message || 'Please provide your Full Name.',
        };
      } else {
        return {
          success: false,
          message: data?.error || 'Failed to request OTP from server.',
        };
      }
    } catch (err: any) {
      // Fallback local OTP generator for local offline mode
      console.warn('[AuthService] Falling back to client-side OTP generation:', err);
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      localStorage.setItem(
        OTP_STORAGE_KEY,
        JSON.stringify({
          email: cleanEmail,
          otp: generatedOtp,
          name: cleanName,
          expiresAt: Date.now() + 10 * 60 * 1000,
        })
      );

      return {
        success: true,
        isNewUser: Boolean(cleanName),
        message: `Verification code generated for ${cleanEmail}`,
        demoOtp: generatedOtp,
      };
    }
  }

  /**
   * Verifies the 6-digit OTP on the server and logs in the user.
   */
  public static async verifyOtp(
    email: string,
    enteredOtp: string,
    name?: string
  ): Promise<VerifyOtpResult> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = enteredOtp.trim();
    const cleanName = name ? name.trim().replace(/\s+/g, ' ') : '';

    if (!cleanOtp || cleanOtp.length !== 6) {
      return { success: false, message: 'Please enter the complete 6-digit OTP code.' };
    }

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          otp: cleanOtp,
          name: cleanName,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success && data.user) {
        const authenticatedUser: AuthUser = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          targetYear: data.user.targetYear || 2026,
          loggedInAt: Date.now(),
          isEmailVerified: true,
        };

        this.user = authenticatedUser;
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticatedUser));
        localStorage.removeItem(OTP_STORAGE_KEY);

        return {
          success: true,
          user: authenticatedUser,
          isNewUser: data.isNewUser,
          message: data.message || `Welcome to VG Insights, ${authenticatedUser.name}!`,
        };
      } else if (data?.error) {
        return {
          success: false,
          message: data.error,
        };
      }
    } catch (err) {
      console.warn('[AuthService] Server verify failed, checking fallback:', err);
    }

    // Fallback verification for demo/offline
    let isValid = false;
    let savedName = cleanName;

    if (cleanOtp === '123456') {
      isValid = true;
    } else {
      try {
        const storedStr = localStorage.getItem(OTP_STORAGE_KEY);
        if (storedStr) {
          const stored = JSON.parse(storedStr);
          if (
            stored.email === cleanEmail &&
            stored.otp === cleanOtp &&
            Date.now() < stored.expiresAt
          ) {
            isValid = true;
            if (!savedName && stored.name) savedName = stored.name;
          }
        }
      } catch {
        isValid = false;
      }
    }

    if (!isValid) {
      return {
        success: false,
        message: 'Invalid or expired OTP. Please use 123456 or request a new code.',
      };
    }

    // Determine fallback name
    if (!savedName) {
      const username = cleanEmail.split('@')[0];
      savedName = username.charAt(0).toUpperCase() + username.slice(1);
    }

    const fallbackUser: AuthUser = {
      email: cleanEmail,
      name: savedName,
      targetYear: 2026,
      loggedInAt: Date.now(),
      isEmailVerified: true,
    };

    this.user = fallbackUser;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(fallbackUser));
    localStorage.removeItem(OTP_STORAGE_KEY);

    return {
      success: true,
      user: fallbackUser,
      message: `Welcome to VG Insights, ${fallbackUser.name}!`,
    };
  }

  public static logout(): void {
    this.user = null;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(OTP_STORAGE_KEY);
  }
}
