const CTASection = () => {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 max-h-[500px] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule a free consultation and discover how automation can accelerate your growth.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-small hover:bg-neutral-50 transition shadow-custom font-medium">
            Book Free Consultation
          </button>
        </div>
      </section>
    );
  };
  
  export default CTASection;