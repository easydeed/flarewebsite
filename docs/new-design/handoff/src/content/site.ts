export const site = {
  name: 'FlareMedia',
  tagline: 'Marketing for the people who close deals.',
  bookingUrl: '#contact', // TODO: Calendly / Cal.com link
  phone: '(626) 333-4567',
  phoneHref: 'tel:6263334567',
  email: 'info@flaremedia.io',
  address: '440 Rte. 66, Glendora, CA 91740',
  eyebrow: 'Glendora, CA · Boutique agency',
  lede: 'We run marketing for title companies and email for real estate agents. Not a platform — a small team that does the work for you.',
  nav: [
    { label: 'Title', href: '#title' },
    { label: 'Agents', href: '#agents' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  title: {
    eyebrow: 'For title companies',
    headline: 'Your whole marketing department, outsourced.',
    services: [
      { name: 'Email marketing', desc: 'Monthly campaigns to your agents, lenders, and past clients — written, designed, sent.' },
      { name: 'Social media content', desc: 'A steady calendar of posts your team can approve in minutes.' },
      { name: 'Printable materials', desc: 'Rate sheets, flyers, and leave-behinds your reps actually use.' },
      { name: 'Title websites', desc: 'We build it, host it, and keep it current.' },
    ],
    cta: 'Talk to us about your title company',
  },
  agents: {
    eyebrow: 'For real estate agents',
    headline: 'Email your sphere every month. Without lifting a finger.',
    body: 'You tell us about your market. We write, design, and send on your behalf — from your name, to your list. You stay top of mind; we handle everything else.',
    points: [
      'One monthly email, written and designed for your market',
      'Sent from your name to your list',
      'Nothing to learn, nothing to log into',
    ],
    cta: 'Start sending next month',
  },
  how: {
    headline: 'No dashboards. No logins. No “set it up yourself.”',
    steps: [
      { title: 'A short call', desc: 'We learn your market, your brand, and who you need to stay in front of.' },
      { title: 'We build it', desc: 'Emails, posts, print, or site — you approve, we handle every detail.' },
      { title: 'We keep it running', desc: 'Month after month. You get a note when it goes out, not a to-do list.' },
    ],
  },
  work: {
    headline: 'Recent work',
    intro: "Emails, social posts, printables, and title websites we've shipped for clients.",
    // Tiles are HTML mockups — see components/Work.tsx and components/samples/.
  },
  cta: {
    headline: "Let's talk about your market.",
    body: "A 20-minute call. We'll tell you exactly what we'd do and what it costs.",
    button: 'Book a call',
  },
} as const;
