import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Nieprawidłowe dane.' }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Wszystkie pola są wymagane.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: 'Nieprawidłowy adres email.' }, { status: 400 });
  }

  // Sanitise name — strip newlines to prevent header injection
  const safeName = String(name).replace(/[\r\n]/g, ' ').slice(0, 100);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Wiadomość od ${safeName} – KS HEKSA`,
      text: message,
    });
  } catch {
    return Response.json({ error: 'Błąd wysyłania wiadomości. Spróbuj ponownie.' }, { status: 500 });
  }

  return Response.json({ success: true });
}
