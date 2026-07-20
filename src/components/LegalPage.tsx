import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Section = { heading: string; body: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <article className="section-pad pt-32 lg:pt-40">
      <div className="container max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-electric-500"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="h-display mt-6 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-content">
                {section.heading}
              </h2>
              {section.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
