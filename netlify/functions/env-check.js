// netlify/functions/env-check.js
export async function handler() {
  // mask values so we don't log secrets
  const mask = (s) => {
    if (!s) return null;
    const visible = s.slice(0, 3);
    return `${visible}...(${s.length})`;
  };

  console.log("ENV CHECK - EMAIL_USER present:", !!process.env.EMAIL_USER);
  console.log("ENV CHECK - EMAIL_PASS present:", !!process.env.EMAIL_PASS);
  console.log("ENV CHECK - EMAIL_USER masked:", mask(process.env.EMAIL_USER));
  console.log("ENV CHECK - EMAIL_PASS masked:", mask(process.env.EMAIL_PASS));

  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      emailUserPresent: !!process.env.EMAIL_USER,
      emailPassPresent: !!process.env.EMAIL_PASS,
      emailUserMasked: mask(process.env.EMAIL_USER),
      emailPassMasked: mask(process.env.EMAIL_PASS),
    }),
  };
}
