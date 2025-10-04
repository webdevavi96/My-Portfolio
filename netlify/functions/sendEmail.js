import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // your Gmail
        pass: process.env.EMAIL_PASS,   // App password
      },
    });

    // 1️⃣ Send email to myself
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // 2️⃣ Send auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for contacting me, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you shortly.\n\nBest regards,\n[Avinash Chaurasiya]`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent and auto-reply sent successfully!" }),
    };
  } catch (err) {
    console.error("Email sending error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: err.message }),
    };
  }
}
