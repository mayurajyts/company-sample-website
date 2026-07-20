'use client';

import { Target, Eye, Compass } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'Deliver innovative, reliable, and scalable software solutions that empower organizations through technology.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To become a globally recognized software company delivering products and solutions that transform industries.',
  },
  {
    icon: Compass,
    title: 'Why We Exist',
    body: 'We believe great software should be accessible to every ambitious business — from Sri Lankan startups to global enterprises.',
  },
];

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="About Axiyana"
              title={
                <>
                  A software partner built for the{' '}
                  <span className="text-gradient">next decade</span>
                </>
              }
              description="Axiyana Technology Solutions is a Sri Lankan software company on a mission to build world-class products and deliver high-quality solutions for businesses everywhere."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                We started in Sri Lanka with a bold, long-term vision: to grow into a
                globally recognized technology company. We combine engineering
                discipline, thoughtful design, and a genuine partnership mindset to
                help our clients move faster and build with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Sri Lankan Roots', 'Global Ambition', 'Product & Services'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-surface-2 px-4 py-2 text-sm font-medium text-content"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1} direction="left">
                <div className="card group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-content">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted">{pillar.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
