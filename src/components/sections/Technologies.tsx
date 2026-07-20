'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { technologies } from '@/lib/data';

export function Technologies() {
  return (
    <section id="technologies" className="section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Our Technology Stack"
          title={
            <>
              Modern tools for <span className="text-gradient">reliable software</span>
            </>
          }
          description="We choose proven, well-supported technologies so your product stays fast, secure, and easy to maintain."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <Reveal key={tech} delay={(i % 8) * 0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border bg-surface px-5 py-2.5 text-sm font-semibold text-content transition-all duration-300 hover:-translate-y-1 hover:border-electric-400 hover:text-electric-500 hover:shadow-soft">
                <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
