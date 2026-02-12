import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24 max-h-[700px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
              Transform Your Business with Intelligent Automation
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              We help eCommerce and service businesses scale faster with AI-driven workflows, CRM optimization, and custom automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-small hover:bg-blue-700 transition shadow-custom">
                Get Started
              </button>
              <button className="border border-neutral-300 text-neutral-700 px-8 py-3 rounded-small hover:border-blue-600 hover:text-blue-600 transition">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
              alt="Business Automation"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;