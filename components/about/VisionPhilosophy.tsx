import Image from 'next/image';

const VisionPhilosophy = () => {
  return (
    <section className="py-16 md:py-20 bg-white max-h-[800px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl text-neutral-900 mb-6">Our Vision</h2>
            <p className="text-neutral-600 mb-4">
              We envision a world where businesses of all sizes can leverage enterprise-level automation 
              and AI to compete globally. Technology should be an enabler, not a barrier.
            </p>
            <p className="text-neutral-600">
              By 2030, we aim to help 10,000+ businesses achieve operational excellence through 
              intelligent automation and data-driven decision making.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team Collaboration"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPhilosophy;