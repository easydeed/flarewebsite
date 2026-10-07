# FlareMedia website — Cursor handoff

Rebuild of flaremedia.io as a single-page Next.js 14 (App Router) + Tailwind site.
Design reference: open `design/FlareMedia Redesign.dc.html` in a browser (one page, both branches as sections). Match it.

## Prompt to paste into Cursor

> Create a new Next.js 14 app (App Router, TypeScript, Tailwind) named flaremedia-site. Copy everything from this handoff folder's `src/` into the project's `src/`, `tailwind.config.ts` to the root, and `public/` into `public/`. Install `@next/font` fonts via `next/font/google` (Newsreader, Manrope) exactly as in `src/app/layout.tsx`. All copy comes from `src/content/site.ts` — never hardcode text in components. Follow DESIGN.md for colors, type, and spacing. Port the six Work-section sample mockups from the HTML reference into `src/components/samples/` as pure JSX + Tailwind (or inline styles) — no images. Run `npm run dev` and compare against `design/FlareMedia Redesign.dc.html` section by section until they match. Then run `npm run build` and fix any type errors.

## What's in here

- `DESIGN.md` — tokens, type scale, section-by-section spec, responsive rules
- `src/content/site.ts` — ALL copy, contact info, service lists, booking URL
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- `src/components/*.tsx` — Nav, Hero, Branches, HowItWorks, Work, Cta, Footer
- `src/components/samples/*.tsx` — the six Work mockups (port from the HTML reference; see Work.tsx)
- `tailwind.config.ts` — brand colors + font families
- `public/logo.png` — the existing logo (white wordmark + green mark, use on dark only); `public/logo-mark.png` to be exported from the brand file (see TODO)
- `design/` — the HTML design reference and the recreation of the old site

## TODO before launch (needs the FlareMedia team)

1. **Booking URL** — set `bookingUrl` in `src/content/site.ts` (Calendly / Cal.com / HubSpot link). Currently `#contact`.
2. **Logo mark** — export the green flame mark alone as a transparent PNG/SVG → `public/logo-mark.svg`. The light header shows mark + "FlareMedia" set in Newsreader. The current `logo.png` is white text and vanishes on light backgrounds.
3. **Work samples** — the design ships SIX HTML/CSS mockups (no images) in the Work section: title email, agent newsletter on a phone, 4-up social set, closing-cost flyer, title website, rate sheet — all for a fictional "Summit Title & Escrow" / "Dana Reyes, Realtor". `src/components/Work.tsx` renders them from `src/components/samples/*.tsx`. Copy them 1:1 from `design/FlareMedia Redesign.dc.html` (search "<!-- 1. Title company monthly email -->" … "<!-- 6. Rate sheet -->"). When real client work exists, swap any tile for an `<Image>` — keep the 4:5 tile and caption row.
4. **Email** — old site used both info@flaremedia.io and info@flaremedia.com. Package uses `.io`. Confirm.
5. Delete the old site entirely (Linoor template, jQuery, Bootstrap, 20+ CSS files, Google Translate script, Melbourne Zoo map embed). Nothing from it is reused except `logo.png`.

## Non-goals (intentionally removed from the old site)

Carousel hero, testimonials carousel (placeholder text), "success stories" gallery (lorem ipsum), tabs section, animated counters, sponsors logos (one repeated placeholder), newsletter signup, contact form + PHP mailer, map embed, preloader, color switcher, side menu. Primary CTA is "Book a call".
