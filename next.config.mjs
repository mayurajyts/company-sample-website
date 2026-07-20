/**
 * Next.js configuration for a fully static export that works on GitHub Pages.
 *
 * - `output: 'export'` produces a static site in the `out/` directory.
 * - `images.unoptimized` is required because GitHub Pages has no image server.
 * - `basePath`/`assetPrefix` are needed ONLY when deploying to a project page
 *   (https://<user>.github.io/<repo>). Set NEXT_PUBLIC_BASE_PATH="/<repo>".
 *   Leave it empty for a custom domain or a <user>.github.io user/org page.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
