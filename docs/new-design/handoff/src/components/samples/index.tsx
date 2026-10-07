// TODO (Cursor): port each mockup from design/FlareMedia Redesign.dc.html, Work section.
// Rules: pure JSX, inline styles or Tailwind, no images. Root element of each sample must be
// width/height 100% with the tile background + padding from the reference. Font sizes are
// intentionally tiny (7–21px) — they are miniatures. Photo areas use the striped placeholder:
//   background: repeating-linear-gradient(135deg,#D9D5C9 0 6px,#E8E4D9 6px 12px)
// Fictional brands: "Summit Title & Escrow", "Dana Reyes, Realtor®". Keep copy verbatim.

const Stub = ({ label }: { label: string }) => (
  <div className="flex h-full w-full items-center justify-center bg-[#E8E4D9] font-mono text-xs text-muted">{label}</div>
);

export const TitleEmail  = () => <Stub label="1 · Title company monthly email" />;
export const AgentEmail  = () => <Stub label="2 · Agent sphere newsletter (phone)" />;
export const SocialSet   = () => <Stub label="3 · Social post set (2×2)" />;
export const ClosingFlyer = () => <Stub label="4 · Closing cost flyer" />;
export const TitleSite   = () => <Stub label="5 · Title company website" />;
export const RateSheet   = () => <Stub label="6 · Rate sheet" />;
