import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY as string | undefined;
const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL as string | undefined;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  if (!RESEND_API_KEY || !CONTACT_EMAIL) {
    return json({ success: false, message: 'El servidor de correo no está configurado.' }, 500);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ success: false, message: 'Solicitud inválida.' }, 400);
  }

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const subject = String(payload.subject ?? '').trim();
  const message = String(payload.message ?? '').trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'El nombre es requerido';
  if (!email) errors.email = 'El email es requerido';
  else if (!EMAIL_RE.test(email)) errors.email = 'Ingresa un email válido';
  if (!subject) errors.subject = 'El asunto es requerido';
  if (!message) errors.message = 'El mensaje es requerido';
  else if (message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres';

  if (Object.keys(errors).length > 0) {
    return json({ success: false, message: 'Corrige los campos marcados.', errors }, 400);
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    });

    if (error || !data?.id) {
      return json(
        { success: false, message: 'Hubo un problema al enviar el mensaje. Intenta de nuevo.' },
        500
      );
    }

    return json({ success: true }, 200);
  } catch {
    return json(
      { success: false, message: 'Hubo un problema al enviar el mensaje. Intenta de nuevo.' },
      500
    );
  }
};

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
