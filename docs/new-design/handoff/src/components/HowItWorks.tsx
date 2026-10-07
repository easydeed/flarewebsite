import { site } from '@/content/site';

export default function HowItWorks() {
  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto grid max-w-site items-start gap-12 px-6 py-22 md:grid-cols-2 md:px-8" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <h2 className="font-serif font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(34px,4vw,52px)' }}>{site.how.headline}</h2>
        <ol className="grid gap-7">
          {site.how.steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4">
              <span className="font-serif text-[30px] leading-none text-green-deep">{i + 1}</span>
              <div>
                <div className="text-[19px] font-bold">{s.title}</div>
                <p className="mt-1 text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
