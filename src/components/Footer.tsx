import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, navLinks } from '@/lib/site';

const socialIcons = [
  { href: siteConfig.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: siteConfig.socials.github, label: 'GitHub', Icon: Github },
  { href: siteConfig.socials.twitter, label: 'Twitter / X', Icon: Twitter },
  { href: siteConfig.socials.facebook, label: 'Facebook', Icon: Facebook },
];

const serviceLinks = [
  'Custom Software',
  'Web Applications',
  'Mobile Apps',
  'Cloud Solutions',
  'UI/UX Design',
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size={40} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-surface text-muted transition-colors hover:border-electric-400 hover:text-electric-500"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-content">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted transition-colors hover:text-electric-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-content">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-muted transition-colors hover:text-electric-500">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-content">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-electric-500"
                >
                  <Mail className="h-4 w-4 shrink-0 text-electric-500" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-electric-500"
                >
                  <Phone className="h-4 w-4 shrink-0 text-electric-500" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-electric-500" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-electric-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-electric-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
