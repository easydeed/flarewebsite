import Image from 'next/image';
import { site } from '@/content/site';

// Green flame cropped from the brand file. The full wordmark (logo.png) is white and only works on dark.
export default function Logo({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Image src="/logo-mark.png" alt="" width={Math.round(size * 0.6)} height={size} priority={size >= 32} />
      <span className={`font-serif font-medium tracking-tight ${dark ? 'text-bg' : 'text-ink'}`} style={{ fontSize: size * 0.75 }}>{site.name}</span>
    </a>
  );
}
