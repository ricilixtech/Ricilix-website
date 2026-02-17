import Image from 'next/image';

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading leading-tight tracking-tight text-purple-700 text-3xl md:text-4xl text-neutral-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-neutral-600">
            Join hundreds of companies that have transformed their operations with Ricilix.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-20 w-full">
              {/* <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop"
                alt="Client Logo"
                fill
                className="object-contain mx-auto grayscale"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;