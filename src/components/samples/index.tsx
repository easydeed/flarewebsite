// Ported 1:1 from design/FlareMedia Redesign.dc.html, Work section.
// Pure JSX + inline styles. No images. Font sizes stay tiny — these are miniatures.

const stripe = 'repeating-linear-gradient(135deg,#D9D5C9 0 6px,#E8E4D9 6px 12px)';
const serif = 'var(--font-newsreader), Georgia, serif';

export function TitleEmail() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#E8E4D9', borderRadius: 16, overflow: 'hidden', padding: '28px 28px 0', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', background: '#fff', borderRadius: '8px 8px 0 0', boxShadow: '0 12px 30px rgba(21,32,26,.12)', overflow: 'hidden', fontSize: 9, lineHeight: 1.45, color: '#3E453F' }}>
        <div style={{ padding: '14px 18px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEE' }}>
          <span style={{ fontFamily: serif, fontSize: 14, color: '#15201A' }}>Summit Title &amp; Escrow</span>
          <span style={{ fontSize: 7, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A8F88' }}>October 2026</span>
        </div>
        <div style={{ height: 88, background: stripe }} />
        <div style={{ padding: '16px 18px 0' }}>
          <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.15, color: '#15201A', marginBottom: 8 }}>Rates dipped. Here&apos;s what it means for your fall closings.</div>
          <p style={{ margin: '0 0 10px' }}>Three things every agent in the San Gabriel Valley should know before the end of Q4 — plus our updated closing cost sheet.</p>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            <span style={{ background: '#15201A', color: '#fff', padding: '5px 10px', borderRadius: 999, fontWeight: 700 }}>Read the update</span>
            <span style={{ border: '1px solid #DDD', padding: '5px 10px', borderRadius: 999 }}>Download sheet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingBottom: 16 }}>
            <div>
              <div style={{ height: 38, background: '#F0EDE4', borderRadius: 4, marginBottom: 5 }} />
              <strong style={{ color: '#15201A' }}>Escrow timelines</strong><br />What&apos;s changed since July
            </div>
            <div>
              <div style={{ height: 38, background: '#F0EDE4', borderRadius: 4, marginBottom: 5 }} />
              <strong style={{ color: '#15201A' }}>Meet the team</strong><br />Your new closing officer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgentEmail() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#15201A', borderRadius: 16, overflow: 'hidden', padding: '28px 56px 0', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', background: '#fff', borderRadius: '22px 22px 0 0', border: '5px solid #2B3630', borderBottom: 0, overflow: 'hidden', fontSize: 8.5, lineHeight: 1.45, color: '#3E453F' }}>
        <div style={{ padding: '10px 14px 6px', fontSize: 7, color: '#8A8F88', display: 'flex', justifyContent: 'space-between' }}>
          <span>From: Dana Reyes, Realtor®</span><span>9:41</span>
        </div>
        <div style={{ padding: '0 14px 10px', borderBottom: '1px solid #EEE' }}>
          <div style={{ fontWeight: 700, fontSize: 10, color: '#15201A' }}>Your October home-value check-in</div>
        </div>
        <div style={{ margin: '12px 14px 0', height: 70, borderRadius: 8, background: stripe }} />
        <div style={{ padding: '12px 14px 0' }}>
          <div style={{ fontFamily: serif, fontSize: 15, lineHeight: 1.15, color: '#15201A', marginBottom: 6 }}>Hi Marcus — homes near you sold 4% higher this fall.</div>
          <p style={{ margin: '0 0 10px' }}>I pulled the numbers for your street. If you&apos;ve wondered what your place is worth, I&apos;d love to walk you through it. No pressure, just data.</p>
          <span style={{ display: 'inline-block', background: '#1F7A3F', color: '#fff', padding: '6px 12px', borderRadius: 999, fontWeight: 700 }}>See your numbers</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 14, paddingTop: 10, borderTop: '1px solid #EEE' }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#C9C5B9', display: 'inline-block' }} />
            <div>
              <strong style={{ color: '#15201A' }}>Dana Reyes</strong><br />
              <span style={{ color: '#8A8F88' }}>Realtor® · DRE 01234567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialSet() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#F0EDE4', borderRadius: 16, overflow: 'hidden', padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 10 }}>
      <div style={{ background: '#15201A', color: '#F6F4EE', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 7, letterSpacing: '.12em', textTransform: 'uppercase', color: '#70F28B' }}>Title tip #12</span>
        <span style={{ fontFamily: serif, fontSize: 14, lineHeight: 1.1 }}>What a title search actually finds.</span>
      </div>
      <div style={{ background: '#fff', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#15201A' }}>
        <span style={{ fontSize: 7, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8A8F88' }}>Closed this week</span>
        <div>
          <span style={{ fontFamily: serif, fontSize: 26, lineHeight: 1 }}>14</span><br />
          <span style={{ fontSize: 8, color: '#5E645D' }}>families got their keys</span>
        </div>
      </div>
      <div style={{ background: stripe, borderRadius: 8, padding: 14, display: 'flex', alignItems: 'flex-end' }}>
        <span style={{ background: '#fff', padding: '4px 8px', borderRadius: 999, fontSize: 7, fontWeight: 700, color: '#15201A' }}>Meet Priya, Escrow Officer</span>
      </div>
      <div style={{ background: '#1F7A3F', color: '#F6F4EE', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 7, letterSpacing: '.12em', textTransform: 'uppercase', opacity: 0.8 }}>Agent Q&amp;A</span>
        <span style={{ fontFamily: serif, fontSize: 13, lineHeight: 1.1 }}>&quot;Can my buyer close in 10 days?&quot; Yes — here&apos;s how.</span>
      </div>
    </div>
  );
}

export function ClosingFlyer() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#E8E4D9', borderRadius: 16, overflow: 'hidden', padding: '28px 40px 0', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ width: '100%', background: '#fff', boxShadow: '0 12px 30px rgba(21,32,26,.12)', padding: '22px 20px 0', fontSize: 8, lineHeight: 1.45, color: '#3E453F', height: 'calc(100% - 28px)', boxSizing: 'border-box', overflow: 'hidden' }}>
        <div style={{ fontSize: 7, letterSpacing: '.12em', textTransform: 'uppercase', color: '#1F7A3F', marginBottom: 6 }}>For buyers · California</div>
        <div style={{ fontFamily: serif, fontSize: 20, lineHeight: 1, color: '#15201A', marginBottom: 12 }}>Who pays for what at closing?</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
          <div>
            <strong style={{ color: '#15201A', display: 'block', borderBottom: '1px solid #15201A', paddingBottom: 3, marginBottom: 5 }}>Buyer typically pays</strong>
            Lender&apos;s title policy<br />Escrow fee (½)<br />Recording fees<br />Prepaid interest
          </div>
          <div>
            <strong style={{ color: '#15201A', display: 'block', borderBottom: '1px solid #15201A', paddingBottom: 3, marginBottom: 5 }}>Seller typically pays</strong>
            Owner&apos;s title policy<br />Escrow fee (½)<br />Transfer tax<br />Commissions
          </div>
        </div>
        <div style={{ background: '#F0EDE4', borderRadius: 6, padding: 10 }}>
          <strong style={{ color: '#15201A' }}>Example: $750,000 purchase</strong><br />
          Estimated buyer closing costs: <strong style={{ color: '#15201A' }}>$9,200 – $14,500</strong>
        </div>
      </div>
    </div>
  );
}

export function TitleSite() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#15201A', borderRadius: 16, overflow: 'hidden', padding: '24px 0 0 28px', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', height: 'calc(100% - 24px)', background: '#F6F4EE', borderRadius: '8px 0 0 0', overflow: 'hidden', fontSize: 8, color: '#3E453F', boxShadow: '0 12px 30px rgba(0,0,0,.3)' }}>
        <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2DED3' }}>
          <span style={{ fontFamily: serif, fontSize: 11, color: '#15201A' }}>Summit Title</span>
          <span style={{ display: 'flex', gap: 8, fontSize: 6.5, fontWeight: 600, color: '#5E645D' }}>Services · Agents · Rates · Contact</span>
          <span style={{ background: '#15201A', color: '#fff', padding: '3px 8px', borderRadius: 999, fontSize: 6.5, fontWeight: 700 }}>Open escrow</span>
        </div>
        <div style={{ padding: '22px 14px 16px' }}>
          <div style={{ fontSize: 6.5, letterSpacing: '.12em', textTransform: 'uppercase', color: '#1F7A3F', marginBottom: 6 }}>Serving the San Gabriel Valley since 1994</div>
          <div style={{ fontFamily: serif, fontSize: 21, lineHeight: 1, color: '#15201A', maxWidth: '14ch', marginBottom: 8 }}>Closings that stay on schedule.</div>
          <p style={{ margin: 0, maxWidth: '30ch', fontSize: 7.5, lineHeight: 1.5 }}>Independent title and escrow with a real person on every file. Agents, lenders, and buyers all get one point of contact.</p>
        </div>
        <div style={{ margin: '0 14px', height: 60, borderRadius: 6, background: stripe }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: 14 }}>
          <div style={{ background: '#fff', border: '1px solid #E2DED3', borderRadius: 6, padding: 8, fontSize: 6.5 }}>
            <strong style={{ color: '#15201A', display: 'block', fontSize: 7.5 }}>Rate calculator</strong>Instant quotes
          </div>
          <div style={{ background: '#fff', border: '1px solid #E2DED3', borderRadius: 6, padding: 8, fontSize: 6.5 }}>
            <strong style={{ color: '#15201A', display: 'block', fontSize: 7.5 }}>Order title</strong>Upload a contract
          </div>
          <div style={{ background: '#fff', border: '1px solid #E2DED3', borderRadius: 6, padding: 8, fontSize: 6.5 }}>
            <strong style={{ color: '#15201A', display: 'block', fontSize: 7.5 }}>Track escrow</strong>Live status
          </div>
        </div>
      </div>
    </div>
  );
}

const rateRows = [
  ['$400,000', '$1,310', '$620', false],
  ['$600,000', '$1,690', '$780', false],
  ['$750,000', '$1,945', '$880', true],
  ['$1,000,000', '$2,380', '$1,040', false],
  ['$1,500,000', '$3,140', '$1,360', false],
] as const;

export function RateSheet() {
  return (
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', background: '#F0EDE4', borderRadius: 16, overflow: 'hidden', padding: '28px 40px 0', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ width: '100%', height: 'calc(100% - 28px)', background: '#fff', boxShadow: '0 12px 30px rgba(21,32,26,.12)', padding: 20, fontSize: 8, lineHeight: 1.45, color: '#3E453F', boxSizing: 'border-box', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <span style={{ fontFamily: serif, fontSize: 15, color: '#15201A' }}>Owner&apos;s Policy Rates</span>
          <span style={{ fontSize: 7, color: '#8A8F88' }}>Effective Oct 2026</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', fontSize: 7.5, borderTop: '1.5px solid #15201A' }}>
          <div style={{ padding: '5px 0', fontWeight: 700, color: '#15201A', borderBottom: '1px solid #E2DED3' }}>Sale price</div>
          <div style={{ padding: '5px 0', fontWeight: 700, color: '#15201A', borderBottom: '1px solid #E2DED3', textAlign: 'right' }}>Owner&apos;s</div>
          <div style={{ padding: '5px 0', fontWeight: 700, color: '#15201A', borderBottom: '1px solid #E2DED3', textAlign: 'right' }}>Lender&apos;s</div>
          {rateRows.map(([price, owner, lender, highlight]) => {
            const bg = highlight ? '#F6F4EE' : undefined;
            const cell = { padding: '5px 0', borderBottom: '1px solid #EEE', background: bg };
            return (
              <div key={price} style={{ display: 'contents' }}>
                <div style={cell}>{price}</div>
                <div style={{ ...cell, textAlign: 'right' }}>{owner}</div>
                <div style={{ ...cell, textAlign: 'right' }}>{lender}</div>
              </div>
            );
          })}
        </div>
        <p style={{ margin: '10px 0 0', fontSize: 6.5, color: '#8A8F88' }}>Sample rates for illustration. Escrow fees quoted separately. Ask about our concurrent-issue discount.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, paddingTop: 8, borderTop: '1px solid #EEE' }}>
          <span style={{ fontFamily: serif, fontSize: 10, color: '#15201A' }}>Summit Title &amp; Escrow</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#70F28B', display: 'inline-block' }} />
        </div>
      </div>
    </div>
  );
}
