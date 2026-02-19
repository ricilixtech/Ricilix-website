import Image from "next/image";

const Founders = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-100 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-purple-700 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-neutral-600">
            The professionals driving innovation, technology, and growth at Ricilix.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Abdul Hannan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/hannan.png"
                alt="Abdul Hannan Asif"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Abdul Hannan Asif
            </h3>

            <p className="text-blue-600 mb-4 font-medium">
              Team Lead & Solutions Architect
            </p>

            <p className="text-neutral-600">
              Leads strategic automation initiatives and oversees the development of scalable AI-powered solutions.
            </p>
          </div>

          {/* Waleed */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/waleed.png"
                alt="Waleed Azam"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Waleed Azam
            </h3>

            <p className="text-purple-600 mb-4 font-medium">
              Senior Software Developer
            </p>

            <p className="text-neutral-600">
              Specializes in AI integrations, backend systems, and building robust automation infrastructure.
            </p>
          </div>

          {/* Sharjeel */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/sharjeel.png"
                alt="Sharjeel"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Sharjeel
            </h3>

            <p className="text-green-600 mb-4 font-medium">
              Marketing & SEO Strategist
            </p>

            <p className="text-neutral-600">
              Drives brand growth through digital marketing, search engine optimization, and data-driven acquisition strategies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;
