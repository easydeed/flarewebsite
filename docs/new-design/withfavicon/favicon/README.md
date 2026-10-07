# FlareMedia favicon

Green flame mark on the brand ink tile (#15201A), rounded 22%.

## Files
- icon-512.png, icon-192.png — PWA / Android (manifest)
- icon-180.png — Apple touch icon
- icon-32.png, icon-16.png — browser tab
- logo-mark.png — the mark alone on transparent (512px). Also use this as `public/logo-mark.png` for the site header (replaces the `logo-mark.svg` TODO in the handoff).

## Next.js App Router — drop in `src/app/`
Rename and place; Next picks these up automatically, no <link> tags needed:
- icon-32.png  → src/app/icon.png
- icon-180.png → src/app/apple-icon.png

Then add `src/app/manifest.ts`:
```ts
import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FlareMedia', short_name: 'FlareMedia',
    background_color: '#F6F4EE', theme_color: '#15201A', display: 'standalone', start_url: '/',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
```
and copy icon-192.png and icon-512.png into `public/`.

## Plain HTML fallback
```html
<link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png">
<link rel="apple-touch-icon" href="/icon-180.png">
```
