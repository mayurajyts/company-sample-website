'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border bg-surface text-content transition-colors hover:border-electric-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 ${className}`}
    >
      {/* Render nothing until mounted so SSR and client markup agree */}
      {mounted &&
        (isDark ? (
          <Sun className="h-[18px] w-[18px]" />
        ) : (
          <Moon className="h-[18px] w-[18px]" />
        ))}
    </button>
  );
}
