const ContactHero = () => {
    return (
      <section className="py-16 md:py-24 bg-black max-h-[600px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white font-bold mb-6">
            Let's Build <span className="text-red-500">Something Great</span> Together
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto">
            Ready to transform your business operations? Get in touch and let's discuss 
            how we can help you achieve your goals.
          </p>
        </div>
      </section>
    );
  };
  
  export default ContactHero;