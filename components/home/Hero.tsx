import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-14 md:py-20 xl:py-24 ">

  {/* ⭐ Container */}
  <div className="
    max-w-7xl 
    xl:max-w-none 
    mx-auto 
    px-4 sm:px-6 lg:px-8 
    xl:px-16 2xl:px-24
  ">


        <div className="grid md:grid-cols-2 
                        gap-10 xl:gap-16 2xl:gap-24 
                        items-center">

          {/* Text Content */}
          <div>
            <h1 className="
            tracking-tight
            leading-tight
              font-heading 
              text-3xl md:text-4xl 
              xl:text-5xl 
              2xl:text-6xl 
              text-purple-700 
              mb-6 
              
            ">
              Transform Your Business with Intelligent Automation
            </h1>

            <p className="
              text-base md:text-lg 
              xl:text-xl 
              text-neutral-600 
              mb-8
            ">
              We help eCommerce and service businesses scale faster with AI-driven workflows, CRM optimization, and custom automation solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-custom">
                Get Started
              </button>

              <button className="border text-blue-600 border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
              alt="Business Automation"
              fill
              className="rounded-xl shadow-custom object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
