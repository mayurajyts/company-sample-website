'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { technologies } from '@/lib/data';

const marqueeItems = [...technologies, ...technologies];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Decorative animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fade [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-electric-500/25 blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Innovating Tomorrow, Delivering Today
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="h-display mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Empowering Businesses Through{' '}
            <span className="text-gradient">Intelligent Software Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Axiyana Technology Solutions develops innovative software products and
            custom software solutions that help businesses grow, automate, and
            succeed in a digital world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#services" className="btn-primary w-full sm:w-auto">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Play className="h-4 w-4" />
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Trust / tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Built with a modern, battle-tested stack
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {marqueeItems.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="whitespace-nowrap rounded-full border bg-surface px-4 py-2 text-sm font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
