'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/lib/data';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Answers to <span className="text-gradient">common questions</span>
            </>
          }
          description="Everything you need to know before we start working together. Can’t find your answer? Just reach out."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question} delay={i * 0.04}>
                  <div
                    className={`card overflow-hidden transition-colors duration-300 ${
                      isOpen ? 'border-electric-400' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-display text-base font-semibold text-content sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-electric-400 bg-electric-500 text-white'
                            : 'text-muted'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                        >
                          <p className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-6 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
