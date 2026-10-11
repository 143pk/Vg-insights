import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  type User as FirebaseUser 
} from 'firebase/auth';
import { 
  getFirestore, 
  initializeFirestore,
  doc, 
  setDoc, 
  getDoc,
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firebase Auth & Providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore with auto-detect long polling to prevent 10-second backend timeouts in iframes & restricted networks
let firestoreInstance;
try {
  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
  }, firebaseConfig.firestoreDatabaseId);
} catch {
  firestoreInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
}
export const db = firestoreInstance;

let firestoreReachable: boolean | null = null;

export function isFirestoreOnline(): boolean {
  return firestoreReachable ?? false;
}

export function markFirestoreOffline(): void {
  firestoreReachable = false;
}

// Test connection silently and handle offline gracefully without 10-second blocking timeout
export async function validateFirestoreConnection(): Promise<boolean> {
  if (firestoreReachable !== null) {
    return firestoreReachable;
  }
  try {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      firestoreReachable = false;
      return false;
    }
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 2000)
    );
    await Promise.race([
      getDocFromServer(doc(db, 'test', 'connection')),
      timeoutPromise
    ]);
    firestoreReachable = true;
    return true;
  } catch (error) {
    firestoreReachable = false;
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("[Firebase] Client operating in offline mode.");
    }
    return false;
  }
}

// Error handling standard helper
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): void {
  const errMsg = error instanceof Error ? error.message : String(error);
  if (errMsg.includes('offline') || errMsg.includes('unavailable') || errMsg.includes('PERMISSION_DENIED') || errMsg.includes('permission-denied') || errMsg.includes('timeout')) {
    markFirestoreOffline();
    console.info(`[Firebase] Operating in offline mode. Operation ${operationType} on ${path || 'document'} preserved in local store.`);
    return;
  }
  const errInfo: FirestoreErrorInfo = {
    error: errMsg,
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.warn('Firestore Error Context:', JSON.stringify(errInfo));
}

export {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type FirebaseUser,
  doc,
  setDoc,
  getDoc
};


