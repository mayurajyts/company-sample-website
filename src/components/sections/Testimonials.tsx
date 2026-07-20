'use client';

import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad scroll-mt-24 bg-surface-2">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by teams who <span className="text-gradient">value quality</span>
            </>
          }
          description="We measure our success by the results and relationships we build with the people we serve."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <Quote className="h-8 w-8 text-electric-500/30" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-content">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="font-semibold text-content">{t.name}</div>
                    <div className="text-sm text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
