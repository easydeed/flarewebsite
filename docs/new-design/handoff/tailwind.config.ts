import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F6F4EE', 'bg-alt': '#F0EDE4', surface: '#FFFFFF',
        ink: '#15201A', 'ink-soft': '#3E453F', muted: '#5E645D', faint: '#8A8F88',
        line: '#E2DED3', 'line-strong': '#C9C5B9',
        green: '#70F28B', 'green-deep': '#1F7A3F', 'on-dark-muted': '#C8CCC4',
      },
      fontFamily: {
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
} satisfies Config;
