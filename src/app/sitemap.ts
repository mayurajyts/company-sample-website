import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

// Generated as a static /sitemap.xml during `next build` (output: export).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteConfig.url}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
