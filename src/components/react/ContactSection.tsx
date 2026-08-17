import { useState, type SubmitEventHandler } from 'react';
import type { SocialLink } from '../../types/portfolio';

interface ContactSectionProps {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
  cvUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

const inputBase =
  'w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15';

export default function ContactSection({ email, phone, location, socialLinks, cvUrl }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(
          data.message || 'Hubo un problema al enviar el mensaje. Intenta de nuevo.'
        );
        if (data.errors) setErrors(data.errors);
      }
    } catch {
      setSubmitError('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const formatWhatsAppNumber = (phone: string) => phone.replace(/[^0-9]/g, '');

  const fieldClass = (hasError?: string) =>
    `${inputBase} ${hasError ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700'}`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0b0b0f] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent dark:text-accent-dark font-medium mb-3">
            // Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Hablemos
          </h2>
          <div className="w-14 h-px bg-accent/40 dark:bg-accent-dark/50 mx-auto mt-5"></div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
            ¿Tienes un proyecto en mente? Me encantaría escucharte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="reveal rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8">
            {submitted ? (
              <div className="text-center py-10" aria-live="polite">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                {submitError && (
                  <div
                    role="alert"
                    className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
                  >
                    <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass(errors.name)}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={fieldClass(errors.email)}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={fieldClass(errors.subject)}
                      placeholder="¿De qué trata?"
                    />
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="mt-1.5 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${fieldClass(errors.message)} resize-none`}
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent hover:bg-accent-strong text-white font-semibold rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="reveal reveal-delay-1 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-7">
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Información de contacto
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-accent/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent-soft dark:bg-accent-dark-soft flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-accent-strong dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wide">Email</p>
                    <p className="font-medium text-slate-900 dark:text-white text-sm truncate">{email}</p>
                  </div>
                </a>

                {phone && (
                  <a
                    href={`https://wa.me/${formatWhatsAppNumber(phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-emerald-400/40 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wide">WhatsApp</p>
                      <p className="font-medium text-slate-900 dark:text-white text-sm truncate">{phone}</p>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <div className="w-11 h-11 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wide">Ubicación</p>
                    <p className="font-medium text-slate-900 dark:text-white text-sm truncate">{location}</p>
                  </div>
                </div>

                {cvUrl && (
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-amber-400/40 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wide">Currículum</p>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Descargar CV</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-7">
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Sígueme
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-accent hover:bg-accent-soft dark:hover:bg-accent-dark-soft transition-all duration-200 hover:scale-105 group"
                    aria-label={link.platform}
                  >
                    {link.icon === 'github' && (
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-accent-strong dark:group-hover:text-accent-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-accent-strong dark:group-hover:text-accent-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}