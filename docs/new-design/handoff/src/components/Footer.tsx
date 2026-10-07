import { site } from '@/content/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 px-6 py-10 text-[14px] text-muted md:px-8">
        <Logo size={26} />
        <div>{site.address}</div>
        <div className="flex gap-5">
          <a href={site.phoneHref} className="hover:text-ink">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
        </div>
        <div>© {new Date().getFullYear()} {site.name}</div>
      </div>
    </footer>
  );
}
