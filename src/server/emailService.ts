import nodemailer, { Transporter } from 'nodemailer';

export interface EmailAttachment {
  filename: string;
  content?: string | Buffer;
  path?: string;
  contentType?: string;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  fromName?: string;
  fromAddress?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
  attachments?: EmailAttachment[];
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  accepted?: string[];
  rejected?: string[];
  error?: string;
}

export interface SmtpConfigStatus {
  isConfigured: boolean;
  host: string;
  port: number;
  secure: boolean;
  userConfigured: boolean;
  passwordConfigured: boolean;
}

/**
 * Validates and retrieves the current SMTP environment configuration.
 * Never exposes the actual password or sensitive credentials.
 */
export function getSmtpConfigStatus(): SmtpConfigStatus {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
  const userConfigured = Boolean(process.env.SMTP_USER && process.env.SMTP_USER.trim().length > 0);
  const passwordConfigured = Boolean(process.env.SMTP_PASSWORD && process.env.SMTP_PASSWORD.trim().length > 0);

  return {
    isConfigured: userConfigured && passwordConfigured,
    host,
    port,
    secure,
    userConfigured,
    passwordConfigured,
  };
}

/**
 * Creates and returns a Nodemailer transporter instance using Gmail SMTP credentials.
 * Utilizes lazy initialization to avoid crashing on startup if credentials are not yet set.
 */
export function createEmailTransporter(): Transporter {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();

  if (!user || !pass) {
    throw new Error('SMTP credentials missing: Please set SMTP_USER and SMTP_PASSWORD in environment variables.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Gmail TLS/SSL security settings
    tls: {
      rejectUnauthorized: true,
    },
  });
}

/**
 * Verifies the SMTP connection to Gmail without sending an email.
 * Returns true on success or throws a descriptive error.
 */
export async function verifySmtpConnection(): Promise<{ success: boolean; message: string }> {
  const config = getSmtpConfigStatus();

  if (!config.userConfigured) {
    return {
      success: false,
      message: 'SMTP_USER environment variable is not configured.',
    };
  }

  if (!config.passwordConfigured) {
    return {
      success: false,
      message: 'SMTP_PASSWORD environment variable is not configured. Please use a 16-character Google App Password.',
    };
  }

  try {
    const transporter = createEmailTransporter();
    await transporter.verify();
    return {
      success: true,
      message: `SMTP connection established successfully with ${config.host}:${config.port} via SSL/TLS.`,
    };
  } catch (error: any) {
    const errorCode = error?.code || 'UNKNOWN_ERROR';
    let userFriendlyError = `SMTP verification failed (${errorCode}): ${error?.message || 'Unable to connect to Gmail SMTP.'}`;

    if (errorCode === 'EAUTH' || error?.responseCode === 535) {
      userFriendlyError = 'Gmail SMTP Authentication Failed (535): Invalid username or Google App Password. Please ensure 2-Step Verification is enabled on your Google Account and generate a 16-character App Password under security settings.';
    } else if (errorCode === 'ECONNECTION' || errorCode === 'ETIMEDOUT') {
      userFriendlyError = `Unable to establish connection to ${config.host}:${config.port}. Please verify outbound port access and network connectivity.`;
    }

    return {
      success: false,
      message: userFriendlyError,
    };
  }
}

/**
 * Core server-side method to send an email via Gmail SMTP.
 * Handles recipient formatting, defaults the from header to "VG Insights", and provides sanitized error handling.
 */
export async function sendEmail(options: SendEmailOptions): Promise<EmailResult> {
  const {
    to,
    subject,
    text,
    html,
    fromName = 'VG Insights – NEET UG',
    fromAddress = process.env.SMTP_USER,
    replyTo,
    cc,
    bcc,
    attachments,
  } = options;

  if (!to || (Array.isArray(to) && to.length === 0)) {
    return {
      success: false,
      error: 'Recipient email address (to) is required.',
    };
  }

  if (!subject || subject.trim().length === 0) {
    return {
      success: false,
      error: 'Email subject is required.',
    };
  }

  if (!text && !html) {
    return {
      success: false,
      error: 'Email content (either html or text) is required.',
    };
  }

  try {
    const transporter = createEmailTransporter();
    const formattedSender = `"${fromName.replace(/"/g, '')}" <${fromAddress}>`;

    const info = await transporter.sendMail({
      from: formattedSender,
      to,
      subject,
      text,
      html,
      replyTo: replyTo || fromAddress,
      cc,
      bcc,
      attachments,
    });

    return {
      success: true,
      messageId: info.messageId,
      accepted: Array.isArray(info.accepted) ? info.accepted.map(String) : [],
      rejected: Array.isArray(info.rejected) ? info.rejected.map(String) : [],
    };
  } catch (error: any) {
    const errorCode = error?.code || 'UNKNOWN_ERROR';
    let errorMessage = `Failed to deliver email: ${error?.message || 'Unknown SMTP error'}`;

    if (errorCode === 'EAUTH' || error?.responseCode === 535) {
      errorMessage = 'SMTP Authentication failed: Check your SMTP_USER and Google App Password.';
    } else if (errorCode === 'EENVELOPE') {
      errorMessage = 'Invalid recipient or sender email address envelope.';
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}
