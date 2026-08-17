/**
 * VG Insights - Client-side Email Service Helper
 * 
 * Safely communicates with the secure server-side API (/api/send-email).
 * Note: Credentials are NEVER handled on the client side.
 */

export interface ClientSendEmailPayload {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  fromName?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

export interface ClientEmailResponse {
  success: boolean;
  message?: string;
  messageId?: string;
  error?: string;
}

export interface SmtpVerificationResponse {
  success: boolean;
  status: 'connected' | 'unconfigured' | 'auth_or_connection_failed' | 'error';
  message: string;
  details?: {
    host: string;
    port: number;
    secure: boolean;
    smtpUserConfigured?: boolean;
    smtpPasswordConfigured?: boolean;
  };
}

/**
 * Sends an email through the secure server-side endpoint.
 */
export async function sendEmailViaServer(payload: ClientSendEmailPayload): Promise<ClientEmailResponse> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({
      success: false,
      error: `Server returned HTTP ${response.status}`,
    }));

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `Failed to send email (HTTP ${response.status})`,
      };
    }

    return data;
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || 'Network error while attempting to send email.',
    };
  }
}

/**
 * Checks if the Gmail SMTP server credentials are valid and connected.
 */
export async function checkSmtpConnection(): Promise<SmtpVerificationResponse> {
  try {
    const response = await fetch('/api/verify-smtp', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const data = await response.json().catch(() => ({
      success: false,
      status: 'error' as const,
      message: `Server returned HTTP ${response.status}`,
    }));

    return data;
  } catch (error: any) {
    return {
      success: false,
      status: 'error',
      message: error?.message || 'Network error while verifying SMTP connection.',
    };
  }
}
