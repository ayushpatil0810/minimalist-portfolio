## Minimalist Portfolio

A minimalist, content-driven portfolio built with Next.js 16 and React 19. The site focuses on clean typography, subtle motion, and a backend-first aesthetic with a single-page layout plus a dedicated resume page.

## Features

- Single-page homepage with sections for hero, projects, about, skills, rabbit holes, contact, and footer
- Dedicated /resume page with embedded PDF
- Light/dark theme toggle (system-aware)
- Motion and staggered reveals via Framer Motion
- Contact form powered by Web3Forms
- SEO metadata, sitemap, and robots.txt
- Strict CSP headers with allowed image domains

## Tech Stack

- Next.js 16.2.4 (App Router)
- React 19.2.4
- Tailwind CSS v4 + shadcn UI styles
- Framer Motion
- next-themes
- Phosphor Icons
- Vercel Analytics + Speed Insights

## Project Structure

- app/ - App Router pages, layout, and global styles
  - page.tsx - Homepage composition
  - resume/page.tsx - Resume page with embedded PDF
  - layout.tsx - Metadata, fonts, theme provider
  - globals.css - Theme tokens and base styles
  - sitemap.ts, robots.ts - SEO routes
- components/ - UI and section components
- config/ - Content configuration (about, projects, skills, socials, icons)
- public/ - Static assets (tech stack icons, resume PDF)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a .env.local file and add the required environment variables (see below).

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Environment Variables

The contact form posts to Web3Forms and requires a public access key:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

## Scripts

- npm run dev - Start the dev server
- npm run build - Production build
- npm run start - Start the production server
- npm run lint - Run ESLint

## Customization

- Update personal content in the config files:
  - config/about.ts
  - config/projects.ts
  - config/skills.ts
  - config/socials.ts
- Update metadata and social previews in app/layout.tsx
- Replace the avatar URL in components/hero.tsx
- Replace the resume PDF at public/resume.pdf
- Adjust allowed image domains in next.config.ts if you change external assets

## Security Notes

- A Content Security Policy is set in next.config.ts. If you add new external assets or APIs, update the CSP and image domains accordingly.

## Deployment

This project is ready for Vercel. For other platforms, ensure Node.js 18+ and build with npm run build.

## License

MIT
