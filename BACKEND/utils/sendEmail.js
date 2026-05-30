import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/**
 * Send an email notification when a new contact message is received.
 * @param {{ name: string, email: string, message: string }} data
 */
export async function sendContactEmail({ name, email, message }) {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `💬 New Message from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 24px;">📩 New Contact Message</h1>
        </div>
        <div style="padding: 32px; color: #e0e0e0;">
          <div style="background: #16213e; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #8b8fa3; text-transform: uppercase; letter-spacing: 1px;">From</p>
            <p style="margin: 0; font-size: 18px; font-weight: 600; color: #fff;">${name}</p>
          </div>
          <div style="background: #16213e; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #8b8fa3; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
          </div>
          <div style="background: #16213e; border-radius: 12px; padding: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #8b8fa3; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #d0d0d0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #555; text-align: center;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
