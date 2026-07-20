'use client';

import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/lib/data';

export function Products() {
  return (
    <section id="products" className="section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              A growing suite of <span className="text-gradient">Axiyana products</span>
            </>
          }
          description="Beyond client work, we are building our own family of software products designed to run modern businesses end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 0.08}>
              <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-px h-px bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <product.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border bg-surface-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {product.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-content">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-electric-500">
                  {product.full}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-content">
                  Join the waitlist
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}

          {/* Call-to-action tile */}
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl bg-navy-800 p-7 text-white shadow-card transition-transform duration-300 hover:-translate-y-1.5 dark:bg-navy-900"
            >
              <div>
                <h3 className="font-display text-xl font-bold">Need something custom?</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  We also build bespoke products tailored to your industry and workflow.
                  Let&apos;s talk about your idea.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
