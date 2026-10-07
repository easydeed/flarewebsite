import { site } from '@/content/site';

export default function Branches() {
  const { title, agents, bookingUrl } = site;
  return (
    <section className="mx-auto grid max-w-site gap-5 px-6 pb-24 md:grid-cols-2 md:px-8">
      <div id="title" className="flex scroll-mt-24 flex-col gap-7 rounded-[20px] border border-line bg-surface p-10">
        <div className="text-[13px] font-bold uppercase tracking-[.12em] text-green-deep">{title.eyebrow}</div>
        <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-tight">{title.headline}</h2>
        <ul className="border-t border-line">
          {title.services.map((s, i) => (
            <li key={s.name} className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 border-b border-line py-[18px]">
              <span className="font-serif text-[18px] tabular-nums text-faint">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="text-[18px] font-bold">{s.name}</div>
                <div className="mt-0.5 text-[16px] text-muted">{s.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <a href={bookingUrl} className="mt-auto inline-flex items-center gap-2 font-bold hover:text-green-deep">{title.cta} <span>→</span></a>
      </div>

      <div id="agents" className="flex scroll-mt-24 flex-col gap-7 rounded-[20px] bg-ink p-10 text-bg">
        <div className="text-[13px] font-bold uppercase tracking-[.12em] text-green">{agents.eyebrow}</div>
        <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-tight">{agents.headline}</h2>
        <p className="text-on-dark-muted">{agents.body}</p>
        <ul className="border-t border-bg/20">
          {agents.points.map((p) => (
            <li key={p} className="flex gap-3.5 border-b border-bg/20 py-4"><span className="text-green">—</span>{p}</li>
          ))}
        </ul>
        <a href={bookingUrl} className="mt-auto inline-flex items-center gap-2 font-bold text-green hover:text-bg">{agents.cta} <span>→</span></a>
      </div>
    </section>
  );
}
