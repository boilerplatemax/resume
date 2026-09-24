import { useState } from 'react';
import { FiMail, FiSend, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import { contact } from '../data';
import Reveal from './Reveal';

const inputClass =
  'w-full rounded-2xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-muted focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30 transition-colors';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6714b298-c9f8-489d-800a-c33e2f5f6cce',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: FiPhone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'in/maxshapovalov', href: contact.linkedin },
    { icon: FiMapPin, label: 'Based in', value: 'Victoria, BC, Canada' },
  ];

  return (
    <section id="contact" className="px-4 sm:px-6 pb-20 md:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-coral px-6 py-14 md:px-14 md:py-20 text-white">
          <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-butter/40 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">06 &middot; Contact</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">
                Let&rsquo;s build something good.
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/90">
                Hiring for a full-stack, frontend, or product role? Or need a site or app built right?
                I usually reply within a day.
              </p>

              <ul className="mt-10 space-y-3">
                {links.map((item) => {
                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15">
                        <item.icon size={18} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.14em] text-white/70">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 rounded-2xl p-1 transition-transform hover:translate-x-1"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-1">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border-2 border-ink bg-white p-6 md:p-8 text-ink shadow-pop"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="A role, a project, a hello" />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me a bit about it..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend size={18} />
                    Send message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {submitStatus === 'success' && (
                  <p className="rounded-2xl bg-emerald-50 p-4 text-center text-sm text-emerald-800">
                    Message sent! I&rsquo;ll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="rounded-2xl bg-red-50 p-4 text-center text-sm text-red-700">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
