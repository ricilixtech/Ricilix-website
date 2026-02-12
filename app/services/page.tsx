import ServicesHero from '@/components/services/ServicesHero';
import BusinessAutomation from '@/components/services/BusinessAutomation';
import CRMSolutions from '@/components/services/CRMSolutions';
import WebsiteSolutions from '@/components/services/WebsiteSolutions';
import CustomWorkflows from '@/components/services/CustomWorkflows';
import AIIntegration from '@/components/services/AIIntegration';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BusinessAutomation />
      <CRMSolutions />
      <WebsiteSolutions />
      <CustomWorkflows />
      <AIIntegration />
      <ServicesCTA />
    </>
  );
}