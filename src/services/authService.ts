import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  db, 
  doc, 
  setDoc, 
  getDoc,
  type FirebaseUser 
} from './firebase';

export interface AuthUser {
  id?: string;
  uid?: string;
  email: string;
  name: string;
  photoURL?: string;
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

export interface VerifyOtpResult {
  success: boolean;
  user?: AuthUser;
  isNewUser?: boolean;
  message: string;
  error?: string;
}

const AUTH_STORAGE_KEY = 'vg_insights_auth_user';
const REGISTRY_STORAGE_KEY = 'vg_insights_users_registry_v1';

export class AuthService {
  private static user: AuthUser | null = null;
  private static isInitialized = false;
  private static authListeners: Array<(user: AuthUser | null) => void> = [];

  public static init(): void {
    if (this.isInitialized) return;
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        this.user = JSON.parse(stored);
      }
    } catch {
      this.user = null;
    }

    // Subscribe to Firebase Auth state
    try {
      // Check for redirect result (mobile auth return)
      getRedirectResult(auth).then(async (result) => {
        if (result && result.user) {
          const syncedUser = await this.syncFromFirebaseUser(result.user);
          this.user = syncedUser;
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(syncedUser));
          this.saveUserToLocalRegistry(syncedUser);
          this.notifyListeners();
        }
      }).catch((err) => {
        console.warn('[AuthService] getRedirectResult error:', err);
      });

      onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
        if (fbUser) {
          const syncedUser = await this.syncFromFirebaseUser(fbUser);
          this.user = syncedUser;
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(syncedUser));
          this.saveUserToLocalRegistry(syncedUser);
        }
        this.notifyListeners();
      });
    } catch (e) {
      console.warn('[AuthService] Firebase Auth observer fallback:', e);
    }

    this.isInitialized = true;
  }

  public static onAuthChanged(callback: (user: AuthUser | null) => void): () => void {
    this.authListeners.push(callback);
    callback(this.getCurrentUser());
    return () => {
      this.authListeners = this.authListeners.filter(cb => cb !== callback);
    };
  }

  private static notifyListeners(): void {
    this.authListeners.forEach(cb => {
      try {
        cb(this.user);
      } catch (e) {
        console.error(e);
      }
    });
  }

  private static async syncFromFirebaseUser(fbUser: FirebaseUser): Promise<AuthUser> {
    let userName = fbUser.displayName || 'NEET Aspirant';
    let targetYear = 2026;

    try {
      const userDocRef = doc(db, 'users', fbUser.uid);
      const snap = await getDoc(userDocRef);
      if (snap.exists()) {
        const data = snap.data();
        if (data.name) userName = data.name;
        if (data.targetYear) targetYear = data.targetYear;
      } else {
        // Save initial profile
        await setDoc(userDocRef, {
          uid: fbUser.uid,
          email: fbUser.email,
          name: userName,
          targetYear,
          photoURL: fbUser.photoURL || '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }, { merge: true });
      }
    } catch (err) {
      console.warn('[AuthService] Firestore sync skipped or offline:', err);
    }

    return {
      id: fbUser.uid,
      uid: fbUser.uid,
      email: fbUser.email || `aspirant_${fbUser.uid.substring(0, 6)}@vginsights.in`,
      name: userName,
      photoURL: fbUser.photoURL || undefined,
      targetYear,
      loggedInAt: Date.now(),
      isEmailVerified: fbUser.emailVerified ?? true,
    };
  }

  private static getLocalRegistry(): Record<string, AuthUser> {
    try {
      const data = localStorage.getItem(REGISTRY_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  private static saveUserToLocalRegistry(user: AuthUser): void {
    try {
      const registry = this.getLocalRegistry();
      registry[user.email.toLowerCase()] = user;
      localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(registry));
    } catch {
      // Storage quota safety
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
   * Google One-Tap / Firebase Popup Login (Unlimited & Free)
   */
  public static async signInWithGoogle(): Promise<{ success: boolean; user?: AuthUser; error?: string }> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = await this.syncFromFirebaseUser(result.user);
      
      this.user = user;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      this.saveUserToLocalRegistry(user);
      this.notifyListeners();

      return { success: true, user };
    } catch (err: any) {
      // Don't log expected cancellations as errors
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        return { success: false, error: 'Sign-in cancelled' };
      }

      console.error('[AuthService] Google Sign-In error:', err);
      let errMsg = err.message || 'Google Sign-In failed. Please try again.';
      
      if (err.code === 'auth/unauthorized-domain' || (err.message && err.message.includes('unauthorized-domain'))) {
        const domain = typeof window !== 'undefined' ? window.location.hostname : 'your live domain';
        errMsg = `Domain "${domain}" is not authorized in Firebase. In Firebase Console → Authentication → Settings → Authorized domains, add "${domain}". Or enter with name below!`;
      } else if (err.code === 'auth/popup-blocked' || (err.message && err.message.includes('popup-blocked'))) {
        errMsg = 'Popup was blocked by your browser. Please allow popups or enter your name below to continue.';
      } else if (err.code === 'auth/network-request-failed') {
        errMsg = 'Network connection issue. Please check your internet or enter your name below.';
      }

      return { 
        success: false, 
        error: errMsg 
      };
    }
  }

  /**
   * Firebase Email & Password Login / Signup (Unlimited & Free)
   */
  public static async signInWithEmail(email: string, password: string, name?: string): Promise<{ success: boolean; user?: AuthUser; isNewUser?: boolean; error?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }
    if (!password || password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    try {
      // Try to sign in first
      try {
        const result = await signInWithEmailAndPassword(auth, cleanEmail, password);
        const user = await this.syncFromFirebaseUser(result.user);
        this.user = user;
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        this.saveUserToLocalRegistry(user);
        this.notifyListeners();
        return { success: true, user, isNewUser: false };
      } catch (signInErr: any) {
        // If user not found, create a new account automatically
        if (signInErr.code === 'auth/user-not-found' || signInErr.code === 'auth/invalid-credential') {
          const createResult = await createUserWithEmailAndPassword(auth, cleanEmail, password);
          const user = await this.syncFromFirebaseUser(createResult.user);
          if (name && name.trim()) {
            user.name = name.trim();
            const userDocRef = doc(db, 'users', createResult.user.uid);
            await setDoc(userDocRef, { name: name.trim() }, { merge: true });
          }
          this.user = user;
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
          this.saveUserToLocalRegistry(user);
          this.notifyListeners();
          return { success: true, user, isNewUser: true };
        } else {
          throw signInErr;
        }
      }
    } catch (err: any) {
      console.error('[AuthService] Email Auth error:', err);
      let errorMsg = err.message || 'Authentication failed.';
      if (err.code === 'auth/wrong-password') errorMsg = 'Incorrect password.';
      if (err.code === 'auth/email-already-in-use') errorMsg = 'Email is already registered. Please enter correct password.';
      return { success: false, error: errorMsg };
    }
  }

  /**
   * Instant 1-Tap Student Login (0-Friction / Infinite Scale / Offline Resilient)
   */
  public static quickStudentLogin(name: string, targetYear: number = 2026): AuthUser {
    const cleanName = name.trim().replace(/\s+/g, ' ') || 'NEET Aspirant';
    const cleanEmail = `student_${Date.now().toString(36)}@aspirant.vginsights.in`;
    
    const authenticatedUser: AuthUser = {
      id: `usr_${Date.now().toString(36)}`,
      uid: `usr_${Date.now().toString(36)}`,
      email: cleanEmail,
      name: cleanName,
      targetYear,
      loggedInAt: Date.now(),
      isEmailVerified: true,
    };

    this.user = authenticatedUser;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticatedUser));
    this.saveUserToLocalRegistry(authenticatedUser);
    this.notifyListeners();

    return authenticatedUser;
  }

  public static async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn('[AuthService] Firebase signout:', e);
    }
    this.user = null;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.notifyListeners();
  }

  public static updateUserProfile(updates: Partial<AuthUser>): AuthUser | null {
    if (!this.user) return null;
    this.user = {
      ...this.user,
      ...updates,
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(this.user));
    this.saveUserToLocalRegistry(this.user);

    if (this.user.uid) {
      try {
        const userDocRef = doc(db, 'users', this.user.uid);
        setDoc(userDocRef, {
          name: this.user.name,
          targetYear: this.user.targetYear,
          updatedAt: new Date().toISOString()
        }, { merge: true }).catch(() => {});
      } catch {}
    }

    this.notifyListeners();
    return this.user;
  }
}
