import Image from 'next/image';

const MapSection = () => {
  return (
    <section className="py-16 bg-neutral-50 max-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-200 h-96 rounded-large relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
            alt="Office Location Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;