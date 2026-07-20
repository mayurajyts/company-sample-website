# Axiyana Technology Solutions — Website

The official marketing website for **Axiyana Technology Solutions**, a Sri Lankan
software company building innovative products and delivering high-quality software
solutions. Built as a fast, fully static site that deploys to **GitHub Pages**.

> _Innovating Tomorrow, Delivering Today._

---

## ✨ Tech Stack

| Area          | Choice                                             |
| ------------- | -------------------------------------------------- |
| Framework     | [Next.js 14](https://nextjs.org/) (App Router)     |
| Language      | TypeScript                                         |
| Styling       | Tailwind CSS (with light/dark theme)               |
| Animation     | Framer Motion                                      |
| Icons         | lucide-react                                       |
| Fonts         | Inter, Manrope, Plus Jakarta Sans (`next/font`)    |
| Deployment    | Static export → GitHub Pages                       |

Features: responsive mobile-first layout, dark mode with no flash, scroll-reveal
animations, animated counters, accordion FAQ, animated timeline, SEO metadata +
JSON-LD, sitemap/robots, and WCAG-friendly semantics.

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18.18+ (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open http://localhost:3000

# 3. Create a production static build (outputs to ./out)
npm run build

# 4. Preview the static build locally
npm run serve   # serves ./out at http://localhost:3000
```

The static site is generated into the **`out/`** directory.

---

## 📁 Project Structure

```
.
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── public/                        # static assets (favicon, robots, .nojekyll)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # root layout, fonts, SEO, theme script
│   │   ├── page.tsx               # home page (assembles all sections)
│   │   ├── globals.css            # theme tokens + Tailwind layers
│   │   ├── privacy/ · terms/      # legal pages
│   │   ├── sitemap.ts             # generated sitemap.xml
│   │   └── not-found.tsx          # 404 page
│   ├── components/
│   │   ├── Navbar.tsx · Footer.tsx · Logo.tsx
│   │   ├── ThemeProvider.tsx · ThemeToggle.tsx · LegalPage.tsx
│   │   ├── ui/                    # Reveal, Counter, SectionHeading
│   │   └── sections/             # Hero, About, Services, Products, ...
│   └── lib/
│       ├── site.ts               # company constants + nav links
│       └── data.ts               # services, products, FAQs, etc.
├── next.config.mjs · tailwind.config.ts · tsconfig.json
```

---

## ✏️ Customizing Content

- **Company info** (name, email, phone, socials): `src/lib/site.ts`
- **Services, products, industries, FAQs, testimonials, stats**: `src/lib/data.ts`
- **Colors & fonts**: `tailwind.config.ts` and the theme tokens in
  `src/app/globals.css`
- **Logo**: the mark is inline SVG in `src/components/Logo.tsx` and
  `public/favicon.svg`. To use your exact PNG logo instead, drop it in
  `public/` and swap the SVG for a `next/image`.

---

## 🌐 Deploying to GitHub Pages

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and publishes automatically on every push to `main`.

### One-time setup

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually). Your site goes live at the URL
   shown in **Settings → Pages**.

### ⚠️ Base path — the #1 gotcha

GitHub Pages serves project sites from a sub-path
(`https://<user>.github.io/<repo>/`). Assets break unless the app knows that
prefix. This is handled for you via the `NEXT_PUBLIC_BASE_PATH` env var:

- **Project page** (`<user>.github.io/<repo>`): the workflow automatically sets
  `NEXT_PUBLIC_BASE_PATH=/<repo>`. Nothing to do. ✅
- **User/org page** (repo named `<user>.github.io`) **or a custom domain**:
  open `.github/workflows/deploy.yml` and **delete** the
  `NEXT_PUBLIC_BASE_PATH` line under the _Build static site_ step.

### Custom domain

Add your domain in **Settings → Pages → Custom domain**, create a file
`public/CNAME` containing your domain (e.g. `axiyana.com`), remove the base-path
line as noted above, and update `siteConfig.url` in `src/lib/site.ts`.

---

## 📨 Making the Contact Form Collect Submissions

The contact form works out of the box by opening the visitor's email client
(`mailto:`), which needs no backend. To capture submissions to a dashboard
instead, use a static-friendly form service:

1. Create a form at [Formspree](https://formspree.io) or
   [Getform](https://getform.io) and copy your endpoint URL.
2. In `src/components/sections/Contact.tsx`, set the `<form>`'s `action` to that
   URL with `method="post"`, and remove the custom `handleSubmit` handler.

---

## 📝 License

© Axiyana Technology Solutions. All rights reserved.
