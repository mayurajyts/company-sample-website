import { siteConfig } from '@/lib/site';

type LogoProps = {
  /** Height of the mark in pixels. Wordmark scales relative to it. */
  size?: number;
  showText?: boolean;
  className?: string;
};

/**
 * Axiyana brand mark, rebuilt as inline SVG so it stays razor-sharp at any
 * size, adapts to dark mode, and needs no external image request.
 * A stylized "A" formed by an upward arrow — innovation and growth.
 */
export function Logo({ size = 40, showText = true, className = '' }: LogoProps) {
  const gid = 'axiyana-mark-gradient';
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        role="img"
        aria-label={`${siteConfig.brand} logo`}
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gid} x1="8" y1="58" x2="52" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Left face of the "A" (darker facet) */}
        <path
          d="M30 8 L8 58 L18 58 L34 20 Z"
          fill="url(#axiyana-mark-gradient)"
          opacity="0.55"
        />
        {/* Right rising stroke + arrowhead of the "A" */}
        <path
          d="M30 8 L54 40 L45 40 L48 30 L36 30 L30 8 Z"
          fill="url(#axiyana-mark-gradient)"
        />
        {/* Sweeping upward arrow shaft through the mark */}
        <path
          d="M14 50 C28 44 40 36 50 20"
          stroke="url(#axiyana-mark-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Crossbar of the "A" */}
        <rect x="22" y="40" width="18" height="5" rx="2.5" fill="url(#axiyana-mark-gradient)" />
        {/* Spark accent */}
        <path
          d="M45 12 L47 17 L52 19 L47 21 L45 26 L43 21 L38 19 L43 17 Z"
          fill="#06B6D4"
        />
      </svg>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-content">
            {siteConfig.brand}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
            Technology Solutions
          </span>
        </span>
      )}
    </span>
  );
}
