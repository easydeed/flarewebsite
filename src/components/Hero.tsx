import { site } from '@/content/site';
import Button from './Button';

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-site gap-10 px-6 pb-22 pt-28 md:px-8" style={{ paddingTop: 112, paddingBottom: 88 }}>
      <div className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[.12em] text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-green" />{site.eyebrow}
      </div>
      <h1 className="max-w-[16ch] font-serif font-normal leading-none tracking-[-0.025em]" style={{ fontSize: 'clamp(44px,7vw,92px)' }}>
        {site.hero.lead}<em className="italic text-green-deep">{site.hero.emphasis}</em>{site.hero.tail}
      </h1>
      <div className="grid items-end gap-8 md:grid-cols-2">
        <p className="max-w-[34ch] text-[21px] leading-normal text-ink-soft">{site.lede}</p>
        <div className="flex flex-wrap gap-3.5 md:justify-self-end">
          <Button href={site.bookingUrl}>{site.cta.button}</Button>
          <Button href="#work" variant="outline">{site.seeWork}</Button>
        </div>
      </div>
    </section>
  );
}
