This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run d# FJMCAANA Landing Page — Next.js Components

Built for the Next.js **App Router** with TypeScript + Tailwind. Drop these
into an existing project (or `npx create-next-app@latest --typescript --tailwind --app`
and copy them in).

## File map

```
tailwind.config.ts        # pine green/gold/cream design tokens
app/layout.tsx             # loads Fraunces / Public Sans / Space Grotesk via next/font
app/globals.css            # base styles + .seal-divider utility
app/page.tsx                # composes all sections, server-fetch pattern commented in
lib/types.ts                 # SiteStats / Cause / NewsItem — shapes your NestJS API should return
components/
  Navbar.tsx                 # client component (mobile menu state)
  Hero.tsx
  StatsBar.tsx                # accepts stats prop, has fallback data
  SealDivider.tsx
  Leadership.tsx
  CausesSection.tsx          # accepts causes prop, has fallback data
  GetInvolved.tsx
  MembershipForm.tsx         # client component, POSTs to `${API_BASE}/leads`
  NewsSection.tsx             # accepts items prop, has fallback data
  Footer.tsx
```

## Wiring up your NestJS + Prisma + MySQL API

Every dynamic section takes props with a fallback so the page always renders,
even before the backend exists.

1. **Read-only data (stats, causes, news):** fetch server-side in `app/page.tsx`
   since it's a Server Component — see the commented block at the top of that
   file. Set `API_BASE_URL` in `.env.local`.

2. **Form submission (membership leads):** `MembershipForm.tsx` already does a
   real `fetch()` POST to `${NEXT_PUBLIC_API_BASE_URL}/leads`. Set
   `NEXT_PUBLIC_API_BASE_URL` in `.env.local` (must be prefixed `NEXT_PUBLIC_`
   since it runs in the browser) and make sure your NestJS controller accepts
   `{ fullName: string, email: string }` and has CORS enabled for your
   frontend's origin.

3. Suggested `.env.local`:
   ```
   API_BASE_URL=https://api.fjmcaana.org
   NEXT_PUBLIC_API_BASE_URL=https://api.fjmcaana.org
   ```

## Team slider + team page

- `lib/team.ts` — single source of truth for all team members (name, role,
  image path, a short slider `highlight`, and the full `message`). Add or
  edit members here only; both the homepage slider and `/team` page read
  from this file.
- `components/TeamSlider.tsx` — autoplaying slider on the homepage (5.5s
  interval, pauses on hover, prev/next arrows, dot navigation). Its "See
  more" button links to `/team#<slug>`.
- `app/team/page.tsx` — full team page. Every member has a `<section
  id={slug}>`, so linking to `/team#amnah-andrabi` lands the visitor exactly
  on that person's profile (the `scroll-mt-24` class keeps it clear of the
  sticky nav).
- **Images:** drop the seven photos into `public/team/` using the exact
  filenames listed in `public/team/README.txt` (they match what's already
  referenced in `lib/team.ts`).
- Once you're pulling council members from Prisma/MySQL instead of hardcoding
  them, replace the `TEAM_MEMBERS` array with a server-fetched array of the
  same `TeamMember` shape — no component changes needed.

## Notes

- All colors/fonts are Tailwind tokens (`bg-pine`, `text-gold`, `font-display`,
  etc.) — change them once in `tailwind.config.ts` to restyle the whole site.
- `CausesSection` and `NewsSection` map arrays into cards — extend the `Cause`
  / `NewsItem` types in `lib/types.ts` as your Prisma schema grows (e.g. add
  `imageUrl` and swap the gradient placeholder for a real `<Image>`).
ev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
