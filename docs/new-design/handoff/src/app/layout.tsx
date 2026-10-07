import type { Metadata } from 'next';
import { Newsreader, Manrope } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '500'], variable: '--font-newsreader', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-manrope', display: 'swap' });

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
