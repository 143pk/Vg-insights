/**
 * Generates responsive HTML and plaintext email templates for VG Insights OTP verification.
 */
export function generateOtpEmailTemplate(params: {
  otp: string;
  isNewUser: boolean;
  name?: string;
}): { subject: string; html: string; text: string } {
  const { otp, isNewUser, name } = params;
  const greeting = name ? `Hello ${name},` : 'Hello Aspirant,';
  const actionText = isNewUser
    ? 'create your new VG Insights NEET UG account'
    : 'sign in to your VG Insights account';

  const subject = isNewUser
    ? `Your VG Insights Verification Code: ${otp}`
    : `Your VG Insights Login Code: ${otp}`;

  const text = `${greeting}\n\nYour 6-digit verification code to ${actionText} is: ${otp}\n\nThis code will expire in 10 minutes. If you did not request this code, please ignore this email.\n\nBest regards,\nVG Insights — NEET UG Preparation Platform`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 520px; background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); overflow: hidden;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header Branding -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 32px; text-align: left; border-bottom: 3px solid #2563eb;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      <span style="color: #2563eb;">VG</span> Insights
                    </div>
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;">
                      NEET UG PLATFORM
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 36px 32px 28px 32px;">
              <h1 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0;">
                ${isNewUser ? 'Welcome to VG Insights' : 'Sign in to VG Insights'}
              </h1>
              
              <p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 24px 0;">
                ${greeting}<br>
                Please use the following 6-digit verification code to ${actionText}:
              </p>

              <!-- OTP Code Display Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td align="center" style="background-color: #eff6ff; border: 1px dashed #3b82f6; border-radius: 14px; padding: 20px 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #1d4ed8; margin-bottom: 8px;">
                      One-Time Passcode (OTP)
                    </div>
                    <div style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 36px; font-weight: 800; letter-spacing: 10px; color: #1e3a8a;">
                      ${otp}
                    </div>
                    <div style="font-size: 12px; color: #64748b; margin-top: 8px;">
                      ⏱️ Valid for <strong>10 minutes</strong>
                    </div>
                  </td>
                </tr>
              </table>

              <p style="font-size: 13px; line-height: 1.5; color: #64748b; margin: 0 0 8px 0;">
                If you did not request this verification code, please disregard this email. Your account remains secure.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="font-size: 11px; color: #64748b; margin: 0 0 4px 0;">
                VG Insights • The Academic Learning & Weakness Diagnosis Platform for NEET UG
              </p>
              <p style="font-size: 11px; color: #94a3b8; margin: 0;">
                © ${new Date().getFullYear()} VG Insights. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return { subject, html, text };
}
