import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const newsreader = localFont({
  src: [
    { path: '../../node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/@fontsource/newsreader/files/newsreader-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../node_modules/@fontsource/newsreader/files/newsreader-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../node_modules/@fontsource/newsreader/files/newsreader-latin-500-italic.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-newsreader',
  display: 'swap',
});

const manrope = localFont({
  src: [
    { path: '../../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../../node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FlareMedia — Marketing for title companies and real estate agents',
  description: 'Boutique agency in Glendora, CA. Email, social, print, and websites for title companies; done-for-you email for real estate agents.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${manrope.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased text-[17px] leading-relaxed">{children}</body>
    </html>
  );
}
