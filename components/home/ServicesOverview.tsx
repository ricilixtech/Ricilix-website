const ServicesOverview = () => {
    return (
      <section className="py-16 md:py-20 bg-white max-h-[900px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-4">
              Solutions That Drive Growth
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We solve real operational challenges with technology that works for your business, not against it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 p-8 rounded-large hover:shadow-custom-hover transition">
              <div className="w-12 h-12 bg-blue-100 rounded-small flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 mb-3">Business Automation</h3>
              <p className="text-neutral-600">Eliminate repetitive tasks and streamline operations with intelligent automation workflows.</p>
            </div>
            
            <div className="bg-white border border-neutral-200 p-8 rounded-large hover:shadow-custom-hover transition">
              <div className="w-12 h-12 bg-purple-100 rounded-small flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 mb-3">CRM Optimization</h3>
              <p className="text-neutral-600">Maximize customer relationships with tailored CRM systems that boost retention and revenue.</p>
            </div>
            
            <div className="bg-white border border-neutral-200 p-8 rounded-large hover:shadow-custom-hover transition">
              <div className="w-12 h-12 bg-green-100 rounded-small flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 mb-3">AI Integration</h3>
              <p className="text-neutral-600">Leverage AI-powered tools to make smarter decisions and automate complex processes.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesOverview;