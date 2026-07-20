/**
 * Central place for company-wide constants. Update these values to
 * rebrand or change contact details across the entire site.
 */
export const siteConfig = {
  name: 'Axiyana Technology Solutions',
  brand: 'Axiyana',
  tagline: 'Innovating Tomorrow, Delivering Today.',
  description:
    'Axiyana Technology Solutions develops innovative software products and custom software solutions that help businesses grow, automate, and succeed in a digital world.',
  // Used for absolute URLs in metadata. Update if you later add a custom domain.
  url: 'https://mayurajyts.github.io/company-sample-website',
  email: 'info.axiyana@gmail.com',
  phone: '+94 70 660 0448',
  location: 'Colombo, Sri Lanka',
  socials: {
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
] as const;
