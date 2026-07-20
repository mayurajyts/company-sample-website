'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { industries } from '@/lib/data';

export function Industries() {
  return (
    <section id="industries" className="section-pad scroll-mt-24 bg-surface-2">
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Domain expertise across <span className="text-gradient">key sectors</span>
            </>
          }
          description="We adapt our engineering and design to the realities of your industry — its users, regulations, and pace."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 4) * 0.06}>
              <div className="card group flex flex-col items-center gap-4 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-400 hover:shadow-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric-500/10 text-electric-500 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-base font-bold text-content">
                  {industry.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
