import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        // Brand palette
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#F3F6FB',
          100: '#E4EAF4',
          200: '#C6D3E7',
          300: '#9BB1D2',
          400: '#5E7BA8',
          500: '#33517E',
          600: '#1E3860',
          700: '#132A4C',
          800: '#0B1F3A',
          900: '#071427',
        },
        electric: {
          DEFAULT: '#2563EB',
          50: '#EFF5FF',
          100: '#DBE7FE',
          200: '#BFD4FE',
          300: '#93B4FD',
          400: '#608BFA',
          500: '#2563EB',
          600: '#1D4FD8',
          700: '#1B3FB0',
          800: '#1C388C',
          900: '#1B3271',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        // Theme-aware semantic tokens (driven by CSS vars in globals.css)
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        base: 'rgb(var(--bg) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,31,58,0.04), 0 8px 24px rgba(11,31,58,0.06)',
        card: '0 2px 6px rgba(11,31,58,0.05), 0 18px 40px -12px rgba(11,31,58,0.12)',
        glow: '0 20px 60px -20px rgba(37,99,235,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #2563EB 0%, #06B6D4 100%)',
        'grid-fade':
          'linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
