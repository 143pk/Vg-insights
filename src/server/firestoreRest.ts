/**
 * Cloudflare Worker / Edge Firestore REST Client
 * Directly synchronizes user entitlements and payment logs to Cloud Firestore
 * using Google's official Firestore REST v1 API with zero external dependencies.
 */

let cachedAccessToken: { token: string; expiresAt: number } | null = null;

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN[ A-Z_-]+-----/g, '')
    .replace(/-----END[ A-Z_-]+-----/g, '')
    .replace(/\s+/g, '');
  const raw = atob(b64);
  const buf = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) {
    buf[i] = raw.charCodeAt(i);
  }
  return buf.buffer;
}

function base64UrlEncode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlEncodeBuffer(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return base64UrlEncode(binary);
}

/**
 * Obtains a Google OAuth2 access token for Cloud Datastore / Firestore using RS256 JWT
 */
export async function getGoogleAccessToken(serviceAccount: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedAccessToken && cachedAccessToken.expiresAt > now + 60) {
    return cachedAccessToken.token;
  }

  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const dataToSign = new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`);

  const binaryKey = pemToArrayBuffer(serviceAccount.private_key);
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBuffer = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, dataToSign);
  const encodedSignature = base64UrlEncodeBuffer(signatureBuffer);
  const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString()
  });

  const tokenData: any = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.access_token) {
    throw new Error(`Failed to obtain Google OAuth2 access token: ${tokenData.error_description || tokenData.error || 'Unknown error'}`);
  }

  cachedAccessToken = {
    token: tokenData.access_token,
    expiresAt: now + (tokenData.expires_in || 3600)
  };

  return tokenData.access_token;
}

/**
 * Updates a user's entitlement fields in Firestore via Firestore REST v1 API
 */
export async function updateFirestoreEntitlementViaRest(params: {
  serviceAccount: { client_email: string; private_key: string; project_id?: string };
  projectId: string;
  userId: string;
  isPremium: boolean;
  status: string;
  planId?: string;
  planName?: string;
  subscriptionId?: string;
  lastPaymentId?: string;
  expiresAt: number;
}): Promise<boolean> {
  try {
    const token = await getGoogleAccessToken(params.serviceAccount);
    const proj = params.projectId || params.serviceAccount.project_id || 'vginsights-bed28';

    const fields: Record<string, any> = {
      isPremium: { booleanValue: params.isPremium },
      premiumStatus: { stringValue: params.status },
      premiumExpiresAt: { integerValue: String(params.expiresAt) },
      updatedAt: { timestampValue: new Date().toISOString() }
    };

    const updateMaskFields = ['isPremium', 'premiumStatus', 'premiumExpiresAt', 'updatedAt'];

    if (params.planId) {
      fields.planId = { stringValue: params.planId };
      updateMaskFields.push('planId');
    }
    if (params.planName) {
      fields.planName = { stringValue: params.planName };
      updateMaskFields.push('planName');
    }
    if (params.subscriptionId) {
      fields.subscriptionId = { stringValue: params.subscriptionId };
      updateMaskFields.push('subscriptionId');
    }
    if (params.lastPaymentId) {
      fields.lastPaymentId = { stringValue: params.lastPaymentId };
      updateMaskFields.push('lastPaymentId');
    }

    const queryParams = updateMaskFields.map(f => `updateMask.fieldPaths=${encodeURIComponent(f)}`).join('&');
    const docUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(proj)}/databases/(default)/documents/users/${encodeURIComponent(params.userId)}?${queryParams}`;

    const res = await fetch(docUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn('[Firestore REST] Failed to update user entitlement:', errText);
      return false;
    }

    console.log(`[Firestore REST] Successfully updated entitlement for ${params.userId} in project ${proj}`);
    return true;
  } catch (err) {
    console.warn('[Firestore REST] Exception updating entitlement:', err);
    return false;
  }
}
