import type { Request, Response } from 'express';
import { UserDatabase } from '../../src/server/userDatabase';

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
    const email = (req.query?.email as string) || (req.body?.email as string);
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail) {
      return res.status(400).json({ success: false, error: 'Email parameter is required.' });
    }

    const user = UserDatabase.findUserByEmail(cleanEmail);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        targetYear: user.targetYear,
        createdAt: user.createdAt,
        lastLoginAt: user.lastLoginAt,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || 'Server error while fetching user profile.',
    });
  }
}
