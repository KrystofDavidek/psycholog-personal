# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal website for a psychologist/therapist in Brno, Czech Republic. The site is built with TypeScript, React 19, Next.js 15 (App Router), and styled with Tailwind CSS. It includes contact form functionality with email integration via nodemailer, Google Analytics tracking, and SEO features with sitemap generation.

## Common Commands

- **Development server**: `npm run dev` or `yarn dev` (starts Next.js dev server)
- **Build**: `npm run build` or `yarn build` (builds for production + generates sitemap)
- **Production server**: `npm start` or `yarn start`
- **Linting**: `npm run lint` or `yarn lint`

Note: The `postbuild` script automatically runs `next-sitemap` after building.

## Architecture

### URL Structure & Routing

The site uses Next.js rewrites to map Czech URLs to English route names:
- `/` → index (Úvod)
- `/o-mně` → `/about` (O mně)
- `/první-setkání` → `/first` (První setkání)
- `/má-praxe` → `/practice` (Má praxe)
- `/kontakt` → `/contact` (Kontakt)

These mappings are defined in `next.config.ts` and mirrored in the `routes` object in `components/Navbar.tsx`.

### Key Components

- **Navbar** (`components/Navbar.tsx`): Main navigation with responsive design, includes hamburger menu for mobile, tracks active page state
- **Footer** (`components/Footer.tsx`): Site-wide footer with contact info
- **ContactModal** (`components/ContactModal.tsx`): Modal component for contact form display
- **ContactInfo** (`components/ContactInfo.tsx`): Reusable contact information block
- **PageHeader** (`components/PageHeader.tsx`): Shared page header component
- **YouTubeEmbed** (`components/YouTubeEmbed.tsx`): YouTube video embed component
- **Layout**: `app/layout.tsx` contains the app-wide layout with Navbar, Footer, Google Analytics integration, and structured data (JSON-LD)

### Styling

- Custom Tailwind color: `font-green` (#7D990C) - used throughout for brand consistency
- Responsive breakpoints follow Tailwind defaults
- Global styles in `app/globals.css`

### Email Contact Form

- Contact form submission handled by the Route Handler at `app/api/contact/route.ts`
- Uses nodemailer with SMTP (Seznam.cz configuration)
- Email credentials stored in environment variables: `SMTP_EMAIL`, `SMTP_PASSWORD`
- Form data validated with `react-hook-form` and `yup` (via `@hookform/resolvers`)
- Utility function in `utils/sendEmail.ts` handles client-side submission

### Analytics

- Google Analytics integrated via `@next/third-parties/google` (`GoogleAnalytics` component)
- Tracking ID stored in environment variable: `NEXT_PUBLIC_GA_TRACKING_ID`
- Configured directly in `app/layout.tsx`

### SEO & Sitemap

- Sitemap generation configured in `next-sitemap.js`
- Site URL: `https://www.psycholog-terapeut-brno.cz/`
- Generates robots.txt automatically
- Runs post-build via the `postbuild` script
- Structured data (JSON-LD) for `ProfessionalService`, `Person`, and `WebSite` defined in `app/layout.tsx`

## Important Notes

- **Environment variables**: The project uses `.env` for sensitive data (email credentials, GA tracking ID). Never commit this file.
- **Czech language**: UI text and content are in Czech. Route names in URLs are Czech, but file/route names in code are English.
- **Assets**: Static assets in `public/static/` folder
