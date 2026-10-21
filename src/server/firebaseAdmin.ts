import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getAuth, type Auth } from 'firebase-admin/auth';
import fs from 'fs';
import path from 'path';

let adminApp: App | null = null;

export function getFirebaseAdmin(): App {
  if (adminApp) return adminApp;

  const currentApps = getApps();
  if (currentApps.length > 0 && currentApps[0]) {
    adminApp = currentApps[0];
    return adminApp;
  }

  const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
  let projectId = process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || 'vginsights-bed28';

  if (fs.existsSync(configPath)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (cfg.projectId) projectId = cfg.projectId;
    } catch {}
  }

  // 1. Check for inline service account JSON in environment variable (ideal for Netlify/Vercel/Render)
  const inlineServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_ADMIN_CREDENTIALS;
  if (inlineServiceAccount && inlineServiceAccount.trim()) {
    try {
      const raw = inlineServiceAccount.trim();
      const parsed = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      adminApp = initializeApp({
        credential: cert(parsed),
        projectId: parsed.project_id || projectId
      });
      return adminApp;
    } catch (e) {
      console.warn('[FirebaseAdmin] Failed to parse FIREBASE_SERVICE_ACCOUNT environment variable:', e);
    }
  }

  // 2. Check for service account key file path if available
  const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
    try {
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
      adminApp = initializeApp({
        credential: cert(serviceAccount),
        projectId
      });
      return adminApp;
    } catch (e) {
      console.warn('[FirebaseAdmin] Failed to load credentials from GOOGLE_APPLICATION_CREDENTIALS:', e);
    }
  }

  // Initialize with application default credentials or project config
  try {
    adminApp = initializeApp({
      projectId
    });
  } catch (err: any) {
    const fallbackApps = getApps();
    if (fallbackApps.length > 0 && fallbackApps[0]) {
      adminApp = fallbackApps[0];
    } else {
      console.error('[FirebaseAdmin] Initialization error:', err);
      throw err;
    }
  }

  return adminApp;
}

export function getAdminFirestore(): Firestore {
  const app = getFirebaseAdmin();
  return getFirestore(app);
}

export function getAdminAuth(): Auth {
  const app = getFirebaseAdmin();
  return getAuth(app);
}

/**
 * Extracts and verifies the Firebase ID Token from the Authorization header.
 * Rejects any unauthenticated or expired requests.
 */
export async function authenticateFirebaseRequest(authHeader?: string): Promise<{
  uid: string;
  email: string;
  name?: string;
}> {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Unauthorized: Missing or invalid Authorization Bearer token.');
  }

  const idToken = authHeader.split('Bearer ')[1].trim();
  if (!idToken) {
    throw new Error('Unauthorized: Empty Bearer token.');
  }

  const auth = getAdminAuth();
  const decoded = await auth.verifyIdToken(idToken);

  return {
    uid: decoded.uid,
    email: (decoded.email || '').toLowerCase(),
    name: decoded.name || ''
  };
}
