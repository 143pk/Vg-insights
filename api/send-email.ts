import type { Request, Response } from 'express';
import { sendEmail, getSmtpConfigStatus, SendEmailOptions } from '../src/server/emailService.js';

/**
 * Serverless / Express API Handler for sending emails via Gmail SMTP.
 * Compatible with Vercel Serverless Functions and Express backend.
 * 
 * POST /api/send-email
 * Body: { to, subject, html, text, fromName, replyTo, cc, bcc }
 */
export default async function handler(req: Request | any, res: Response | any) {
  // CORS Headers for API accessibility
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please use POST to send emails.',
    });
  }

  try {
    const config = getSmtpConfigStatus();
    if (!config.isConfigured) {
      return res.status(503).json({
        success: false,
        error: 'SMTP service not configured on server. Please ensure SMTP_USER and SMTP_PASSWORD environment variables are set.',
      });
    }

    const { to, subject, text, html, fromName, replyTo, cc, bcc, attachments } = req.body || {};

    if (!to) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: "to" (recipient email address).',
      });
    }

    if (!subject) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: "subject".',
      });
    }

    if (!text && !html) {
      return res.status(400).json({
        success: false,
        error: 'Missing email body: either "html" or "text" must be provided.',
      });
    }

    // Basic email format check for string recipient
    if (typeof to === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid recipient email address format.',
      });
    }

    const emailOptions: SendEmailOptions = {
      to,
      subject,
      text,
      html,
      fromName: fromName || 'VG Insights – NEET UG',
      replyTo,
      cc,
      bcc,
      attachments,
    };

    const result = await sendEmail(emailOptions);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Email delivered successfully via Gmail SMTP.',
        messageId: result.messageId,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email.',
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || 'Internal server error while processing email request.',
    });
  }
}
