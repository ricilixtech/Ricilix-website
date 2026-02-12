import Image from 'next/image';

const CRMSolutions = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50 max-h-[900px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
              alt="CRM Solutions"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-small text-sm font-medium mb-6">
              CRM Optimization
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-6">
              Turn Customers Into Loyal Advocates
            </h2>
            <p className="text-neutral-600 mb-6">
              A powerful CRM isn't just about storing contacts—it's about building relationships that drive revenue. 
              We implement and optimize CRM systems that boost retention, increase lifetime value, and accelerate sales cycles.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Custom CRM Implementation</h4>
                  <p className="text-neutral-600">Tailored systems that match your exact sales process and customer journey.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Pipeline Automation</h4>
                  <p className="text-neutral-600">Automated lead nurturing and follow-ups that never miss an opportunity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Customer Insights</h4>
                  <p className="text-neutral-600">Data-driven intelligence that helps you understand and serve customers better.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-purple-600 text-white px-6 py-3 rounded-small hover:bg-purple-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMSolutions;