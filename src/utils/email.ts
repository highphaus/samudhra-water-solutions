import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER || process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  });
  return info;
};
