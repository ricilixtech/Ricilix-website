import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50 max-h-[800px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              alt="Business Results"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-6">
              Why Businesses Choose Ricilix
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-small flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-2">Proven ROI</h3>
                  <p className="text-neutral-600">Our clients see an average 40% reduction in operational costs within 6 months.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-small flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-2">Scalable Solutions</h3>
                  <p className="text-neutral-600">Technology that grows with your business, from startup to enterprise.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-small flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-2">Expert Support</h3>
                  <p className="text-neutral-600">Dedicated team ensuring your systems run smoothly 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;