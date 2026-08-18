import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export interface UserRecord {
  id: string;
  email: string;
  name: string;
  createdAt: number;
  lastLoginAt: number;
  targetYear?: number;
  isEmailVerified: boolean;
}

export interface PendingOtpRecord {
  email: string;
  otp: string;
  name?: string;
  isNewUser: boolean;
  createdAt: number;
  expiresAt: number;
  attempts: number;
}

// In-memory cache synced with server storage
let usersCache: Map<string, UserRecord> = new Map();
const pendingOtps: Map<string, PendingOtpRecord> = new Map();
let isInitialized = false;

// Ensure storage directory exists
function getDataFilePath(): string {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {
      // Ignore if cannot create directory
    }
  }
  return path.join(dataDir, 'users.json');
}

function loadUsersFromDisk(): void {
  if (isInitialized) return;
  try {
    const filePath = getDataFilePath();
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const list: UserRecord[] = JSON.parse(raw);
      usersCache = new Map(list.map(u => [u.email.toLowerCase(), u]));
    }
  } catch (err) {
    console.warn('[UserDatabase] Could not load users from disk, using memory store.');
  }
  isInitialized = true;
}

function saveUsersToDisk(): void {
  try {
    const filePath = getDataFilePath();
    const list = Array.from(usersCache.values());
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    // If disk write fails in serverless / read-only sandbox, keep memory map intact
  }
}

export class UserDatabase {
  public static init(): void {
    loadUsersFromDisk();
  }

  public static findUserByEmail(email: string): UserRecord | null {
    this.init();
    const cleanEmail = email.trim().toLowerCase();
    return usersCache.get(cleanEmail) || null;
  }

  public static isEmailRegistered(email: string): boolean {
    this.init();
    const cleanEmail = email.trim().toLowerCase();
    return usersCache.has(cleanEmail);
  }

  public static createUser(email: string, name: string, targetYear: number = 2027): UserRecord {
    this.init();
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim().replace(/\s+/g, ' ');

    if (!cleanEmail) {
      throw new Error('Email is required.');
    }
    if (!cleanName) {
      throw new Error('Full Name is required for first-time signup.');
    }

    const existing = usersCache.get(cleanEmail);
    if (existing) {
      // Don't overwrite existing user's record on accidental double signup, just update login
      existing.lastLoginAt = Date.now();
      saveUsersToDisk();
      return existing;
    }

    const newUser: UserRecord = {
      id: `usr_${crypto.randomUUID ? crypto.randomUUID().slice(0, 12) : Date.now().toString(36)}`,
      email: cleanEmail,
      name: cleanName,
      createdAt: Date.now(),
      lastLoginAt: Date.now(),
      targetYear,
      isEmailVerified: true,
    };

    usersCache.set(cleanEmail, newUser);
    saveUsersToDisk();
    return newUser;
  }

  public static recordUserLogin(email: string): UserRecord | null {
    this.init();
    const cleanEmail = email.trim().toLowerCase();
    const user = usersCache.get(cleanEmail);
    if (user) {
      user.lastLoginAt = Date.now();
      saveUsersToDisk();
      return user;
    }
    return null;
  }

  public static getAllUsers(): UserRecord[] {
    this.init();
    return Array.from(usersCache.values());
  }

  /**
   * Pending OTP Management
   */
  public static savePendingOtp(email: string, otp: string, name?: string, isNewUser: boolean = false): void {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name ? name.trim().replace(/\s+/g, ' ') : undefined;

    pendingOtps.set(cleanEmail, {
      email: cleanEmail,
      otp: otp.trim(),
      name: cleanName,
      isNewUser,
      createdAt: Date.now(),
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes expiry
      attempts: 0,
    });
  }

  public static getPendingOtp(email: string): PendingOtpRecord | null {
    const cleanEmail = email.trim().toLowerCase();
    const record = pendingOtps.get(cleanEmail);
    if (!record) return null;

    if (Date.now() > record.expiresAt) {
      pendingOtps.delete(cleanEmail);
      return null;
    }

    return record;
  }

  public static verifyAndConsumeOtp(
    email: string,
    enteredOtp: string,
    providedName?: string
  ): { success: boolean; user?: UserRecord; isNewUser: boolean; message: string } {
    this.init();
    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = enteredOtp.trim();

    if (!cleanOtp || cleanOtp.length !== 6) {
      return { success: false, isNewUser: false, message: 'Please enter a valid 6-digit OTP.' };
    }

    const pending = this.getPendingOtp(cleanEmail);

    // Check if OTP matches either the stored pending code or the universal testing demo code (123456)
    const isStandardDemo = cleanOtp === '123456';
    const isPendingMatch = pending && pending.otp === cleanOtp;

    if (!isStandardDemo && !isPendingMatch) {
      if (pending) {
        pending.attempts += 1;
        if (pending.attempts >= 5) {
          pendingOtps.delete(cleanEmail);
          return { success: false, isNewUser: false, message: 'Too many incorrect attempts. Please request a new OTP.' };
        }
      }
      return { success: false, isNewUser: false, message: 'Invalid or expired OTP code. Please try again or request a new code.' };
    }

    // OTP is valid - determine if this is a first-time signup or returning login
    const existingUser = this.findUserByEmail(cleanEmail);

    if (existingUser) {
      // Returning User: Preserve existing saved Full Name permanently
      existingUser.lastLoginAt = Date.now();
      saveUsersToDisk();
      pendingOtps.delete(cleanEmail);
      return {
        success: true,
        user: existingUser,
        isNewUser: false,
        message: `Welcome back, ${existingUser.name}!`,
      };
    } else {
      // First-time signup: Must have a Full Name
      const signupName = (providedName || pending?.name || '').trim().replace(/\s+/g, ' ');
      
      if (!signupName) {
        return {
          success: false,
          isNewUser: true,
          message: 'Full Name is required for first-time account registration.',
        };
      }

      const newUser = this.createUser(cleanEmail, signupName);
      pendingOtps.delete(cleanEmail);
      return {
        success: true,
        user: newUser,
        isNewUser: true,
        message: `Account created successfully. Welcome to VG Insights, ${newUser.name}!`,
      };
    }
  }
}
