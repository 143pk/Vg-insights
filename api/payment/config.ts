import { Request, Response } from 'express';
import { PAYMENT_PLANS } from './plans';

export default async function paymentConfigHandler(req: Request, res: Response) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID || '';
    const hasLiveKey = !!keyId && !keyId.includes('YOUR_') && !keyId.includes('placeholder');

    return res.json({
      success: true,
      keyId: hasLiveKey ? keyId : '',
      isConfigured: hasLiveKey,
      currency: 'INR',
      plans: Object.values(PAYMENT_PLANS),
      businessName: 'VG Insights',
      supportEmail: 'optionvortex@gmail.com'
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve payment configuration: ' + (error?.message || 'Server error')
    });
  }
}
