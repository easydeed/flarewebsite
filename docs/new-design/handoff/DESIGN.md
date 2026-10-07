# Design spec

## Direction
Warm, editorial, quiet. Serif headlines, sans body. Brand green used sparingly as a signal (dot, eyebrow, one CTA), never as a background wash. No gradients, no icon sets, no stock-photo heroes.

## Tokens (see tailwind.config.ts)
- bg            #F6F4EE  warm off-white page ground
- bg-alt        #F0EDE4  "how it works" band
- surface       #FFFFFF  title card
- ink           #15201A  deep green-black — text, dark card, buttons
- ink-soft      #3E453F  hero lede
- muted         #5E645D  secondary text
- faint         #8A8F88  numerals, captions
- line          #E2DED3  hairlines
- line-strong   #C9C5B9  outline button border
- green         #70F28B  brand — dot, agent eyebrow, dark-card accents, CTA button on dark
- green-deep    #1F7A3F  green for TEXT on light backgrounds (contrast-safe); hover color
- on-dark-muted #C8CCC4  secondary text on ink

## Type
- Headlines: Newsreader (Google), weight 400, letter-spacing -0.02 to -0.025em, line-height 1.0–1.1. Italic for the single emphasized word in the hero ("close"), colored green-deep.
- Body/UI: Manrope (Google), 400/600/700. Base 17px / 1.6.
- Eyebrows: 13px, 700, uppercase, tracking .12em.
- Scale: h1 clamp(44px,7vw,92px) · section h2 clamp(34px,4vw,52px) · card h2 40px · CTA h2 clamp(36px,4.5vw,60px) · lede 21px · body 17px · caption 14px.
- Use `text-wrap: balance` on headlines.

## Layout
- Container max-width 1200px, padding-x 32px (24px under 640px).
- Radii: cards 20px, CTA block 24px, work tiles 16px, buttons pill (999px).
- Buttons: 16px/28px padding (nav: 11/20). Primary = ink bg + bg text; hover → green-deep bg. On dark: green bg + ink text; hover → bg (#F6F4EE).
- Sticky header, 92% bg with 12px backdrop blur, 1px line bottom.

## Sections (in order)
1. **Nav** — mark + "FlareMedia" (Newsreader 24) · links Title / Agents / Work / Contact (15px 600) · phone (muted) · "Book a call" pill.
2. **Hero** — eyebrow with green dot "Glendora, CA · Boutique agency" · h1 · two-column bottom row: lede (max 34ch) left, buttons right (Book a call, See the work outline).
3. **Branches** — 2-col grid (stacks <640). Left white card "For title companies": numbered 4-row service list with hairlines. Right ink card "For real estate agents": paragraph + 3 dash-bullets + green link. Both end with an arrow link to the booking URL.
4. **How it works** — full-width bg-alt band with top/bottom hairlines. Left: h2. Right: 3 numbered steps (Newsreader numerals in green-deep).
5. **Work** — h2 + one-line intro; grid auto-fill minmax(260px,1fr), 4:5 tiles, caption row title/kind.
6. **CTA** — ink block, 2-col: h2 + supporting line | green "Book a call" button + phone + email stacked.
7. **Footer** — single row, 14px muted: mark + name · address · phone + email · © year.

## Responsive
Everything is CSS-grid auto-fit; nothing has fixed heights. Under 768px: hide nav links behind nothing (just drop the phone, keep Book a call), stack hero bottom row. Keep 44px+ tap targets.

## Accessibility
Text contrast ≥ 4.5:1 everywhere (green-deep on bg = 5.1:1; green #70F28B is only used for non-text or on ink). Semantic sections with ids: top, title, agents, work, contact. `scroll-margin-top` on anchor targets to clear the sticky header.
