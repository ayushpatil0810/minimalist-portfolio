# Modern Redesigned Portfolio Website

A sleek, content-driven modern portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Framer Motion**. It steps away from generic purple gradients and heavy glassmorphism, opting for a clean, editorial-geometric aesthetic.

## Features

- **Geometric & Readable Typography**: Powered by **Syne** for bold headlines and **DM Sans** for legible body text, with **JetBrains Mono** reserved for code snippets and system tags.
- **Wider Layout & Bento Grid**: Upgraded from restricted sizing to `max-w-4xl` for general layouts and project deep-dives. Projects are structured in an asymmetric bento grid.
- **Dedicated Project Route Deep-Dives**: Dynamic routing at `/projects/[slug]` with an in-depth Problem-Approach-Outcome layout, tech tags, metadata sidebar, and shared-element view-transition animations.
- **Unified About & Skills Space**: Merged into an elegant two-column layout showing professional milestones/bio alongside structured proficiency grids.
- **Smart GitHub Activity Heatmap**: Clean warm-stone design highlighting contribution statistics (total, streak, most active days) without relying on token keys.
- **Framer Motion Micro-Animations**:
  - Floating pill navigation with interactive layout sliding indicators.
  - Character-level staggered entrance animation on name wordmarks.
  - Smooth page-fade and directional slide keyframes utilizing browser-native view transition rules.
  - Lerp-smoothed trailing custom cursor.
  - Gentle mouse-interactive 3D tilt on the avatar.
- **Faint Dot-Grid Background Texturing** in the Hero.
- **SEO & Social Previews**: Dynamic Sitemap generation for dynamic routes, fully optimized SEO metadata, and dynamic social preview Open Graph (`opengraph-image.tsx`) generation using `next/og`.

## Tech Stack

- **Framework**: Next.js 16.2.4 (Turbopack, App Router)
- **Runtime logic**: React 19.2.4
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animations**: Framer Motion 12 + Web View Transitions API
- **Icons**: Phosphor Icons

## Project Structure

- `app/` - Routing segments
  - `page.tsx` - Homepage with Hero, Heatmap, Teaser grid, and Contact sections
  - `projects/page.tsx` - Bento grid showing all creations
  - `projects/[slug]/page.tsx` - Project case studies
  - `about/page.tsx` - Structured biography, credentials, and skills
  - `resume/page.tsx` - PDF container for resume view
  - `opengraph-image.tsx` - Dynamic OG card generator (`next/og`)
  - `sitemap.ts` - Dynamic sitemap including project slugs
  - `globals.css` - Custom styling theme and keyframes
- `components/` - Interactive layouts (Nav, Custom Cursor, Activity tracker, etc.)
- `config/` - Data sources (projects, skills, socials)
- `public/` - Public assets and tech icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the live site.
