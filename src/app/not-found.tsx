import Link from 'next/link';
import { Home } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="text-center">
        <Logo size={52} showText={false} className="justify-center" />
        <p className="mt-8 font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-content">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
