import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Schedule a free consultation and discover how automation can accelerate your growth.
        </p>
        <Link href="/contact">
          <button className="bg-purple-700 font-bold hover:bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-neutral-50 transition shadow-custom  cursor-pointer">
            Book Free Consultation
          </button>
        </Link>

      </div>
    </section>
  );
};

export default CTASection;