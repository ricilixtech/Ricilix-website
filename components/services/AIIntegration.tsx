import Image from 'next/image';

const AIIntegration = () => {
  return (
    <section className="py-16 md:py-20 bg-white max-h-[900px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-small text-sm font-medium mb-6">
              AI & Integration
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-6">
              Harness AI to Make Smarter Decisions Faster
            </h2>
            <p className="text-neutral-600 mb-6">
              AI isn't just hype—it's a practical tool that can transform how you operate. We integrate AI-powered 
              solutions that automate complex decisions, predict outcomes, and unlock insights hidden in your data.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Predictive Analytics</h4>
                  <p className="text-neutral-600">Forecast trends and make proactive decisions based on data patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Intelligent Automation</h4>
                  <p className="text-neutral-600">AI-powered workflows that adapt and improve over time.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">System Integration</h4>
                  <p className="text-neutral-600">Connect all your tools and platforms into one unified ecosystem.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-small hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
              alt="AI Integration"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;