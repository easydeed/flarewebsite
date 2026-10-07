import { site } from '@/content/site';
import Logo from './Logo';
import Button from './Button';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-6 py-[18px] md:px-8">
        <Logo />
        <nav className="hidden gap-7 text-[15px] font-semibold md:flex">
          {site.nav.map((n) => <a key={n.href} href={n.href} className="hover:text-green-deep">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-5">
          <a href={site.phoneHref} className="hidden text-[15px] font-semibold text-muted sm:block">{site.phone}</a>
          <Button href={site.bookingUrl} small>Book a call</Button>
        </div>
      </div>
    </header>
  );
}
