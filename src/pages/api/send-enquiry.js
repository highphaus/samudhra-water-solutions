export const prerender = false;

import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Helper to sanitize environment variables (removes quotes and leading/trailing spaces)
    const cleanEnvVar = (val) => {
      if (!val) return val;
      let cleaned = val.trim();
      if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
        cleaned = cleaned.substring(1, cleaned.length - 1);
      }
      return cleaned.trim();
    };

    // SMTP Configuration
    const smtpHost = cleanEnvVar(import.meta.env.SMTP_HOST) || 'smtp.zoho.in';
    const smtpPort = parseInt(cleanEnvVar(import.meta.env.SMTP_PORT) || '465');
    const smtpSecure = cleanEnvVar(import.meta.env.SMTP_SECURE) !== 'false'; // default to true (SSL) for 465
    const smtpUser = cleanEnvVar(import.meta.env.SMTP_USER) || cleanEnvVar(import.meta.env.EMAIL_USER);
    const smtpPass = cleanEnvVar(import.meta.env.SMTP_PASS) || cleanEnvVar(import.meta.env.EMAIL_PASS);
    const smtpFromEmail = cleanEnvVar(import.meta.env.SMTP_FROM_EMAIL) || smtpUser;
    const smtpToEmail = cleanEnvVar(import.meta.env.SMTP_TO_EMAIL) || cleanEnvVar(import.meta.env.CONTACT_RECEIVER_EMAIL) || 'mail@samudhra.co.in';

    console.log('--- send-enquiry diagnostic ---');
    console.log('SMTP_HOST:', import.meta.env.SMTP_HOST, '-> using host:', smtpHost);
    console.log('SMTP_PORT:', import.meta.env.SMTP_PORT, '-> using port:', smtpPort);
    console.log('SMTP_USER:', import.meta.env.SMTP_USER);
    console.log('EMAIL_USER:', import.meta.env.EMAIL_USER, '-> using user:', smtpUser);
    console.log('EMAIL_PASS length (raw):', (import.meta.env.SMTP_PASS || import.meta.env.EMAIL_PASS)?.length);
    console.log('EMAIL_PASS length (cleaned):', smtpPass ? smtpPass.length : 0);

    if (!smtpUser || !smtpPass) {
      console.warn('Nodemailer configuration error: SMTP or EMAIL environment variables are not set.');
      return new Response(
        JSON.stringify({ error: 'Email service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpFromEmail}>`,
      to: smtpToEmail,
      replyTo: email,
      subject: `New Water Solutions Enquiry from ${name}`,
      text: `You have received a new enquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #024095; border-bottom: 2px solid #07bee8; padding-bottom: 10px;">New Water Solutions Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #024095; font-style: italic;">
            <strong>Message / Requirement:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (firstError) {
      console.warn(`SMTP transmission failed with host ${smtpHost}: ${firstError.message}`);
      
      let fallbackHost = null;
      if (smtpHost === 'smtp.zoho.in') {
        fallbackHost = 'smtp.zoho.com';
      } else if (smtpHost === 'smtp.zoho.com') {
        fallbackHost = 'smtp.zoho.in';
      }

      if (fallbackHost) {
        console.warn(`Retrying email delivery with fallback host ${fallbackHost}...`);
        transporter = nodemailer.createTransport({
          host: fallbackHost,
          port: 465,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });
        await transporter.sendMail(mailOptions);
      } else {
        throw firstError;
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Enquiry sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Nodemailer error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send enquiry', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
