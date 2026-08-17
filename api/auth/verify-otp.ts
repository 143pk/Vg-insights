import type { Request, Response } from 'express';
import { UserDatabase } from '../../src/server/userDatabase.js';

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
    const { email, otp, name } = req.body || {};
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanOtp = (otp || '').trim();
    const cleanName = name ? name.trim().replace(/\s+/g, ' ') : undefined;

    if (!cleanEmail) {
      return res.status(400).json({ success: false, error: 'Email address is required.' });
    }

    if (!cleanOtp) {
      return res.status(400).json({ success: false, error: '6-digit OTP code is required.' });
    }

    const verification = UserDatabase.verifyAndConsumeOtp(cleanEmail, cleanOtp, cleanName);

    if (!verification.success) {
      return res.status(400).json({
        success: false,
        error: verification.message,
        isNewUser: verification.isNewUser,
      });
    }

    return res.status(200).json({
      success: true,
      message: verification.message,
      isNewUser: verification.isNewUser,
      user: {
        id: verification.user?.id,
        email: verification.user?.email,
        name: verification.user?.name,
        targetYear: verification.user?.targetYear,
        createdAt: verification.user?.createdAt,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || 'Server error while verifying OTP.',
    });
  }
}
