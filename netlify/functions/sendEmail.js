import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // Gmail App password
      },
    });

    // ✅ Verify connection (helps debug deployment)
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // 1️⃣ Send email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // 2️⃣ Send auto-reply to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for contacting me, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out! I’ve received your message and will get back to you soon.\n\nBest regards,\nAvinash Chaurasiya`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email and auto-reply sent successfully!",
      }),
    };
  } catch (err) {
    console.error("❌ Email sending error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Server error",
        error: err.message,
      }),
    };
  }
}
