const CaseStudyPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-white">

      {/* Wider container on large screens */}
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="font-heading leading-tight tracking-tight text-purple-700 text-3xl md:text-4xl mb-4">
            Real Results, Real Impact
          </h2>

          <p className="text-lg text-neutral-600">
            See how we've helped businesses transform their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 xl:gap-12">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-large">

            <div className="mb-6">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                eCommerce
              </span>
            </div>

            <h3 className="font-heading text-2xl text-neutral-900 mb-4">
              300% Revenue Growth in 12 Months
            </h3>

            <p className="text-neutral-700 mb-6">
              Automated order processing and CRM integration helped a mid-sized retailer triple their revenue while reducing manual work by 60%.
            </p>

            <button className="text-purple-600 font-medium hover:text-purple-700 transition">
              Read Case Study →
            </button>
          </div>


          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-large">

            <div className="mb-6">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                Service Business
              </span>
            </div>

            <h3 className="font-heading text-2xl text-neutral-900 mb-4">
              50% Time Saved on Client Management
            </h3>

            <p className="text-neutral-700 mb-6">
              Custom workflow automation and AI-powered scheduling transformed a consulting firm's operations and client satisfaction.
            </p>

            <button className="text-purple-600 font-medium hover:text-purple-700 transition">
              Read Case Study →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
