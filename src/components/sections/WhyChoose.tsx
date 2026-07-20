'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { reasons } from '@/lib/data';

export function WhyChoose() {
  return (
    <section id="why" className="section-pad scroll-mt-24 bg-surface-2">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Axiyana"
          title={
            <>
              Built on principles that <span className="text-gradient">earn trust</span>
            </>
          }
          description="These are the standards we hold ourselves to on every project, for every client."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border bg-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 4) * 0.06}>
              <div className="group h-full bg-surface p-7 transition-colors duration-300 hover:bg-surface-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-500 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-content">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
