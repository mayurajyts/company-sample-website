'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/lib/data';

export function Process() {
  return (
    <section id="process" className="section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A proven, transparent <span className="text-gradient">development process</span>
            </>
          }
          description="Seven deliberate steps that take your idea from concept to a live, supported product — with no surprises."
        />

        <div className="relative mt-16">
          {/* Vertical connecting line */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:left-1/2 md:block"
          />

          <div className="flex flex-col gap-8 md:gap-2">
            {processSteps.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <Reveal key={step.step} direction={isRight ? 'left' : 'right'}>
                  <div
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      isRight ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                      <step.icon className="h-6 w-6" />
                    </div>

                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-3rem)] ${isRight ? 'md:pl-0' : ''}`}>
                      <div className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                        <span className="text-sm font-bold text-electric-500">
                          {step.step}
                        </span>
                        <h3 className="mt-1 font-display text-lg font-bold text-content">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
