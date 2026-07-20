'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { stats } from '@/lib/data';

export function Stats() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="relative overflow-hidden rounded-4xl bg-navy-800 px-6 py-14 shadow-card dark:bg-navy-900 sm:px-12 lg:py-16">
          {/* Decorative background */}
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-fade [background-size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          />
          <motion.div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric-500/30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <span className="text-gradient">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-navy-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
