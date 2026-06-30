import nodemailer from 'nodemailer';

const prerender = false;
async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const smtpHost = undefined                          || "smtp.gmail.com";
    const smtpPort = parseInt(undefined                          || "587");
    const smtpSecure = undefined                            === "true";
    const smtpUser = undefined                         ;
    const smtpPass = undefined                         ;
    if (!smtpUser || !smtpPass) {
      console.warn("Nodemailer configuration error: SMTP_USER or SMTP_PASS environment variables are not set.");
      return new Response(
        JSON.stringify({ error: "Email service is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
    const mailOptions = {
      from: `"${name}" <${undefined                                || smtpUser}>`,
      to: undefined                              || "mail@samudhra.co.in",
      replyTo: email,
      subject: `New Water Solutions Enquiry from ${name}`,
      text: `You have received a new enquiry:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #024095; border-bottom: 2px solid #07bee8; padding-bottom: 10px;">New Water Solutions Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #024095; font-style: italic;">
            <strong>Message / Requirement:</strong><br/>
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Enquiry sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send enquiry", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
