import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Branches from '@/components/Branches';
import HowItWorks from '@/components/HowItWorks';
import Work from '@/components/Work';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Branches />
        <HowItWorks />
        <Work />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
