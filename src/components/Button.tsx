import { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'green';
const styles: Record<Variant, string> = {
  primary: 'bg-ink text-bg hover:bg-green-deep',
  outline: 'border border-line-strong text-ink hover:border-ink',
  green: 'bg-green text-ink hover:bg-bg',
};

export default function Button({ href, variant = 'primary', small, children }: { href: string; variant?: Variant; small?: boolean; children: ReactNode }) {
  return (
    <a href={href} className={`inline-flex items-center rounded-full font-semibold transition-colors whitespace-nowrap ${small ? 'px-5 py-[11px] text-[15px]' : 'px-7 py-4'} ${styles[variant]}`}>
      {children}
    </a>
  );
}
