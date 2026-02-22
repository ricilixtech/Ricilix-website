import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Benefits from '@/components/home/Benefits';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview'; // 👈 ADD THIS
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';
import Technologies from '@/components/home/Technologies';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Technologies/>
      <Benefits />
      <CaseStudyPreview />
      <PortfolioPreview />
      <TrustSection />
      <CTASection />
    </>
  );
}
