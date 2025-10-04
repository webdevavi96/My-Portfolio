export async function handler(event) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.VITE_EMAILJS_SERVICE_ID,
        template_id: process.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: process.env.VITE_EMAILJS_PUBLIC_KEY, // public key
        template_params: {
          name,
          email,
          subject,
          message,
        },
      }),
    });

    if (res.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully ✅" }),
      };
    } else {
      const errorText = await res.text();
      return {
        statusCode: res.status,
        body: JSON.stringify({ message: `Failed to send email: ${errorText}` }),
      };
    }
  } catch (err) {
    console.error("EmailJS error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error ❌" }),
    };
  }
}
