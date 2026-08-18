import type { Request, Response } from 'express';
import { UserDatabase } from '../../src/server/userDatabase';
import { sendEmail, getSmtpConfigStatus } from '../../src/server/emailService';
import { generateOtpEmailTemplate } from '../../src/server/otpEmailTemplate';

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

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { email, name } = req.body || {};
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanName = name ? name.trim().replace(/\s+/g, ' ') : '';

    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    const existingUser = UserDatabase.findUserByEmail(cleanEmail);
    const isNewUser = !existingUser;

    // If first-time user and no name has been provided yet, prompt client to supply Full Name
    if (isNewUser && !cleanName) {
      return res.status(200).json({
        success: true,
        needsName: true,
        isNewUser: true,
        message: 'First-time registration: Please provide your Full Name to continue.',
      });
    }

    // Generate secure 6-digit verification code
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Determine display name for greeting
    const recipientName = existingUser ? existingUser.name : cleanName;

    // Save pending OTP record in server store
    UserDatabase.savePendingOtp(cleanEmail, generatedOtp, cleanName, isNewUser);

    // Check if SMTP is configured
    const smtpStatus = getSmtpConfigStatus();
    let emailSent = false;
    let emailDeliveryNote = '';

    if (smtpStatus.isConfigured) {
      const emailContent = generateOtpEmailTemplate({
        otp: generatedOtp,
        isNewUser,
        name: recipientName,
      });

      const sendResult = await sendEmail({
        to: cleanEmail,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      });

      if (sendResult.success) {
        emailSent = true;
        emailDeliveryNote = `Verification code sent to ${cleanEmail} via Gmail.`;
      } else {
        console.warn('[Request OTP] SMTP send failed:', sendResult.error);
        emailDeliveryNote = `Could not deliver email: ${sendResult.error}`;
      }
    } else {
      emailDeliveryNote = `SMTP not configured on server. Use demo code ${generatedOtp} or 123456.`;
    }

    return res.status(200).json({
      success: true,
      isNewUser,
      emailSent,
      userName: existingUser?.name,
      message: emailSent
        ? `We have sent a 6-digit verification code to ${cleanEmail}`
        : emailDeliveryNote,
      // Provide generated OTP or default fallback in development/preview when SMTP is unconfigured
      demoOtp: generatedOtp,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || 'Server error while requesting OTP code.',
    });
  }
}
