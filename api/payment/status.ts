import { Request, Response } from 'express';
import { PaymentStore } from '../../src/server/paymentStore';

export default async function paymentStatusHandler(req: Request, res: Response) {
  try {
    const userEmail = (req.query.email as string) || (req.body && req.body.email) || '';
    const userId = (req.query.userId as string) || (req.body && req.body.userId) || '';

    const identifier = userEmail || userId;
    if (!identifier) {
      return res.status(400).json({
        success: false,
        message: 'Identifier (email or userId) is required.'
      });
    }

    const entitlement = PaymentStore.getEntitlement(identifier);

    return res.json({
      success: true,
      entitlement
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error?.message || 'Failed to check entitlement status'
    });
  }
}
