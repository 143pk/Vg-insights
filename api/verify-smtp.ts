import type { Request, Response } from 'express';
import { verifySmtpConnection, getSmtpConfigStatus } from '../src/server/emailService';

/**
 * Serverless / Express API Handler for verifying Gmail SMTP credentials.
 * Checks connectivity and authentication without revealing secrets.
 * 
 * GET/POST /api/verify-smtp
 */
export default async function handler(req: Request | any, res: Response | any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const status = getSmtpConfigStatus();

    // If credentials are not present, return diagnostic info without crashing
    if (!status.isConfigured) {
      return res.status(503).json({
        success: false,
        status: 'unconfigured',
        details: {
          host: status.host,
          port: status.port,
          secure: status.secure,
          smtpUserConfigured: status.userConfigured,
          smtpPasswordConfigured: status.passwordConfigured,
        },
        message: 'SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.',
      });
    }

    const verification = await verifySmtpConnection();

    if (verification.success) {
      return res.status(200).json({
        success: true,
        status: 'connected',
        details: {
          host: status.host,
          port: status.port,
          secure: status.secure,
          smtpUserConfigured: status.userConfigured,
          smtpPasswordConfigured: true,
        },
        message: verification.message,
      });
    } else {
      return res.status(502).json({
        success: false,
        status: 'auth_or_connection_failed',
        details: {
          host: status.host,
          port: status.port,
          secure: status.secure,
        },
        message: verification.message,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      status: 'error',
      message: error?.message || 'Unexpected server error during SMTP verification.',
    });
  }
}
