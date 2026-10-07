import { site } from '@/content/site';
import Button from './Button';

export default function Cta() {
  return (
    <section id="contact" className="mx-auto max-w-site scroll-mt-20 px-6 pb-24 md:px-8">
      <div className="grid items-center gap-10 rounded-3xl bg-ink px-8 py-16 text-bg md:grid-cols-2 md:px-14 md:py-[72px]">
        <div className="grid gap-5">
          <h2 className="font-serif font-normal leading-none tracking-tight" style={{ fontSize: 'clamp(36px,4.5vw,60px)' }}>{site.cta.headline}</h2>
          <p className="max-w-[40ch] text-[18px] text-on-dark-muted">{site.cta.body}</p>
        </div>
        <div className="grid justify-items-start gap-[18px]">
          <Button href={site.bookingUrl} variant="green">{site.cta.button}</Button>
          <div className="flex flex-col gap-1 text-[16px]">
            <a href={site.phoneHref} className="text-bg hover:text-green">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="text-bg hover:text-green">{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
