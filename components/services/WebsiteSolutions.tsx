import Image from 'next/image';

const WebsiteSolutions = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-small text-sm font-medium mb-6">
              Website Solutions
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-6">
              Websites That Convert Visitors Into Customers
            </h2>
            <p className="text-neutral-600 mb-6">
              Your website should be a revenue-generating machine, not just a digital brochure. 
              We build conversion-optimized, automation-ready websites that turn traffic into tangible business results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Conversion-Focused Design</h4>
                  <p className="text-neutral-600">Every element optimized to guide visitors toward taking action.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Automation Integration</h4>
                  <p className="text-neutral-600">Seamlessly connect your website to CRM, email, and business tools.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Performance Optimization</h4>
                  <p className="text-neutral-600">Lightning-fast loading speeds that improve SEO and user experience.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-green-600 text-white px-6 py-3 rounded-small hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
              alt="Website Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSolutions;