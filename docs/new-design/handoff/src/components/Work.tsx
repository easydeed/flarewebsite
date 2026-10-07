import { site } from '@/content/site';
import { TitleEmail, AgentEmail, SocialSet, ClosingFlyer, TitleSite, RateSheet } from './samples';

// Each sample is a pure HTML/CSS mockup ported 1:1 from design/FlareMedia Redesign.dc.html
// (comments "<!-- 1. ... -->" through "<!-- 6. ... -->"). Keep the 4:5 tile + caption row.
const tiles = [
  { title: 'Monthly market email', kind: 'Email · Title', Sample: TitleEmail },
  { title: 'Agent sphere newsletter', kind: 'Email · Agent', Sample: AgentEmail },
  { title: 'Social calendar', kind: 'Social', Sample: SocialSet },
  { title: 'Closing cost flyer', kind: 'Print', Sample: ClosingFlyer },
  { title: 'Title company site', kind: 'Website', Sample: TitleSite },
  { title: 'Rate sheet', kind: 'Print', Sample: RateSheet },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-site scroll-mt-20 px-6 py-24 md:px-8">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-serif font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(34px,4vw,52px)' }}>{site.work.headline}</h2>
        <p className="max-w-[40ch] text-muted">{site.work.intro}</p>
      </div>
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {tiles.map(({ title, kind, Sample }) => (
          <figure key={title} className="flex flex-col gap-3">
            {/* Tile: aspect 4/5, border-box, overflow hidden, radius 16. Sample owns its own padding/background. */}
            <div className="box-border aspect-[4/5] overflow-hidden rounded-2xl"><Sample /></div>
            <figcaption className="flex justify-between gap-3 text-[14px]">
              <span className="font-bold">{title}</span><span className="text-faint">{kind}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
