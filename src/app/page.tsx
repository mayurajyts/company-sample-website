import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Products } from '@/components/sections/Products';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Process } from '@/components/sections/Process';
import { Industries } from '@/components/sections/Industries';
import { Technologies } from '@/components/sections/Technologies';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { siteConfig } from '@/lib/site';

// Structured data helps search engines understand the organization.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  alternateName: siteConfig.brand,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
    addressLocality: 'Colombo',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChoose />
      <Process />
      <Industries />
      <Technologies />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
