import emailjs from "@emailjs/browser";

export async function handler(event) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    const res = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, email, subject, message },
      process.env.EMAILJS_PUBLIC_KEY
    );

    if (res.status === 200) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully" }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send email" }),
      };
    }
  } catch (err) {
    console.error("EmailJS error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error" }),
    };
  }
}
