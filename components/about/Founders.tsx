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
            Experienced entrepreneurs and technologists passionate about business transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-large shadow-custom text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt="Alex Thompson"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-heading text-xl text-neutral-900 mb-2">Alex Thompson</h3>
            <p className="text-blue-600 mb-4">Co-Founder & CEO</p>
            <p className="text-neutral-600">
              15+ years in enterprise automation and digital transformation. Former CTO at a Fortune 500 company.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-large shadow-custom text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt="Sarah Chen"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-heading text-xl text-neutral-900 mb-2">Sarah Chen</h3>
            <p className="text-purple-600 mb-4">Co-Founder & CTO</p>
            <p className="text-neutral-600">
              AI and machine learning expert with a PhD from MIT. Built automation systems for 200+ companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;