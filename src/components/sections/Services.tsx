'use client';

import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/lib/data';

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-surface-2">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Services that move your <span className="text-gradient">business forward</span>
            </>
          }
          description="From first line of code to long-term support, we cover the full spectrum of modern software development."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.06}>
              <article className="card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-400 hover:shadow-card">
                {/* Hover glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-surface-2 text-electric-500 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  {service.soon && (
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-content">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
