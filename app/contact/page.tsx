import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import MapSection from '@/components/contact/MapSection';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-black to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <MapSection />
    </>
  );
}