'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

const contactDetails = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, '')}`,
  },
  { icon: MapPin, label: 'Location', value: siteConfig.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // Static-host friendly: composes a prefilled email via the user's mail client.
  // To collect submissions server-side, point the <form> at Formspree/Getform
  // (see README) and remove this handler.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent(`New enquiry from ${name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-surface-2">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">great together</span>
            </>
          }
          description="Tell us about your project or product idea. We usually respond within one business day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info + map */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="card p-7">
                <h3 className="font-display text-lg font-bold text-content">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-5">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-content transition-colors hover:text-electric-500"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-medium text-content">{item.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card overflow-hidden">
                <iframe
                  title="Axiyana location — Sri Lanka"
                  src="https://maps.google.com/maps?q=Colombo,Sri%20Lanka&z=11&output=embed"
                  className="h-56 w-full border-0 grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card h-full p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="mt-5">
                <Field label="Company (optional)" name="company" placeholder="Your company" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-content">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full resize-none rounded-xl border bg-surface-2 px-4 py-3 text-sm text-content outline-none transition-colors placeholder:text-muted/70 focus:border-electric-400 focus:ring-2 focus:ring-electric-500/30"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opening your mail app…
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-muted">
                By submitting, you agree to our{' '}
                <a href="/privacy" className="underline hover:text-electric-500">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-content">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-content outline-none transition-colors placeholder:text-muted/70 focus:border-electric-400 focus:ring-2 focus:ring-electric-500/30"
      />
    </div>
  );
}
