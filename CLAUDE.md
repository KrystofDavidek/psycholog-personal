# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal website for a psychologist/therapist in Brno, Czech Republic. The site is built with TypeScript, React 17, Next.js 12, and styled with Tailwind CSS. It includes contact form functionality with email integration via nodemailer, Google Analytics tracking, and SEO features with sitemap generation.

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

These mappings are defined in `next.config.js` and mirrored in the `routes` object in `components/Navbar.tsx`.

### Key Components

- **Navbar** (`components/Navbar.tsx`): Main navigation with responsive design, includes hamburger menu for mobile, tracks active page state
- **Modals**: `Modal.tsx`, `ModalMini.tsx`, `CleanModal.tsx`, `CleanModalMini.tsx` - various modal components for content display
- **Layout**: `pages/_app.tsx` contains the app-wide layout with navbar, footer with contact info, and Google Analytics integration

### Styling

- Custom Tailwind color: `font-green` (#7D990C) - used throughout for brand consistency
- Responsive breakpoints follow Tailwind defaults
- Global styles in `styles/globals.css`

### Email Contact Form

- Contact form submission handled by `pages/api/contact.js`
- Uses nodemailer with SMTP (Seznam.cz configuration)
- Email credentials stored in environment variables: `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_PASSWORD`
- Form data validated with `react-hook-form` and `yup` (via `@hookform/resolvers`)
- Utility function in `utils/sendEmail.ts` handles client-side submission

### Analytics

- Google Analytics integrated via `utils/gtag.ts`
- Tracking ID stored in environment variable: `GA_TRACKING_ID`
- Page view tracking on route changes configured in `_app.tsx`

### SEO & Sitemap

- Sitemap generation configured in `next-sitemap.js`
- Site URL: `https://www.psycholog-terapeut-brno.cz/`
- Generates robots.txt automatically
- Runs post-build via the `postbuild` script

## Important Notes

- **Environment variables**: The project uses `.env` for sensitive data (email credentials, GA tracking ID). Never commit this file.
- **Czech language**: UI text and content are in Czech. Route names in URLs are Czech, but file/route names in code are English.
- **Assets**: Static assets in `assets/` folder, public files in `public/` folder
- **Production source maps**: Enabled via `productionBrowserSourceMaps: true` in next.config.js
