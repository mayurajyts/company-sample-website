'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  return (
    <section className="section-pad">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-16 text-center shadow-glow sm:px-12 lg:py-20">
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-grid-fade [background-size:36px_36px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="h-display text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
                Ready to build the future of your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                Partner with Axiyana and turn your ideas into powerful, scalable software.
                Let&apos;s start the conversation today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="btn w-full bg-white text-navy-800 hover:-translate-y-0.5 hover:bg-navy-50 sm:w-auto"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="btn w-full border border-white/40 text-white hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
