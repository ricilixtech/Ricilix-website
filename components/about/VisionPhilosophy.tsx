import Image from 'next/image';

const VisionPhilosophy = () => {
  return (
    <section className="py-16 md:py-20 bg-white max-h-[800px] bg-gradient-to-b from-black via-black to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl text-red-600 font-bold text-center mb-6">Our Vision</h2>
            <p className="text-neutral-200 mb-4 text-center">
              We envision a world where businesses of all sizes can leverage <span className="text-red-500 font-bold">enterprise-level automation</span>{" "}  
              and AI to compete globally. Technology should be an enabler, not a barrier.
            </p>
            <p className="text-neutral-300 text-center">
              By <span className="text-red-500 font-bold">2030</span>{" "}, we aim to help <span className="text-red-500 font-bold">10,000+ businesses</span>{" "} achieve operational excellence through 
              intelligent automation and data-driven decision making.
            </p>
          </div>
          <div className="relative h-[300px] lg:h-[350px] xl:h-[400px] w-full border rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team Collaboration"
              fill
              className="rounded-large shadow-custom object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPhilosophy;