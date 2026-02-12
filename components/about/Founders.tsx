import Image from 'next/image';

const Founders = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50 max-h-[900px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-neutral-600">
            Visionaries building Ricilix to transform businesses using AI and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Founder 1 */}
          <div className="bg-white p-8 rounded-large shadow-custom text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/pictures/hannan.png"
                alt="Abdul Hannan Asif"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Abdul Hannan Asif
            </h3>

            <p className="text-blue-600 mb-4">
              Co-Founder & CEO
            </p>

            <p className="text-neutral-600">
              Entrepreneur focused on building AI-driven business automation and scalable tech solutions.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="bg-white p-8 rounded-large shadow-custom text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/pictures/waleed.png"
                alt="Waleed Azam"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Waleed Azam
            </h3>

            <p className="text-purple-600 mb-4">
              Co-Founder & CEO
            </p>

            <p className="text-neutral-600">
              Technology enthusiast passionate about AI innovation, software development, and business transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;
