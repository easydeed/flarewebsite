import Image from 'next/image';

// TODO: replace /logo-mark.svg with the exported green flame mark (see README).
export default function Logo({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Image src="/logo-mark.svg" alt="" width={Math.round(size * 0.6)} height={size} />
      <span className={`font-serif font-medium tracking-tight ${dark ? 'text-bg' : 'text-ink'}`} style={{ fontSize: size * 0.75 }}>FlareMedia</span>
    </a>
  );
}
