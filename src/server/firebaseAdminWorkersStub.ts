/**
 * Stub for the 'firebase-admin' packages in the Cloudflare Workers build
 * (aliased in wrangler.json). firebase-admin is a Node-only SDK: bundling it
 * into the Worker added ~9 MB of dead code and broke the Workers deploy.
 * On Workers, callers catch the throw and use the Firestore REST fallback.
 */

function unavailable(): never {
  throw new Error('firebase-admin is not available in the Cloudflare Workers runtime');
}

export const initializeApp = unavailable;
export const cert = unavailable;
export const getFirestore = unavailable;
export const getAuth = unavailable;
export function getApps(): any[] {
  return [];
}

export type App = any;
export type Firestore = any;
export type Auth = any;
