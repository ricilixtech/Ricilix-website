import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Benefits from '@/components/home/Benefits';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview'; // 👈 ADD THIS
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Benefits />
      <CaseStudyPreview />
      <PortfolioPreview />
      <TrustSection />
      <CTASection />
    </>
  );
}
