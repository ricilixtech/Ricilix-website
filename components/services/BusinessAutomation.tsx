import Image from 'next/image';

const BusinessAutomation = () => {
  return (
    <section className="py-16 md:py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-small text-sm font-medium mb-6">
              Business Automation
            </div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-purple-700 mb-6">
              Eliminate Manual Work, Multiply Productivity
            </h2>
            <p className="text-neutral-600 mb-6">
              Stop wasting time on repetitive tasks. Our intelligent automation solutions handle everything
              from data entry to complex multi-step workflows, freeing your team to focus on strategic growth.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Order Processing Automation</h4>
                  <p className="text-neutral-600">Reduce order fulfillment time by 80% with automated workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Data Synchronization</h4>
                  <p className="text-neutral-600">Keep all your systems in perfect sync without manual updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Report Generation</h4>
                  <p className="text-neutral-600">Get instant insights with automated reporting and analytics.</p>
                </div>
              </div>
            </div>

            
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Business Automation"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;