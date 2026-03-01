import Image from "next/image";
import Link from "next/link";

const CustomWorkflows = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid: Image left, Text right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="order-1 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
              alt="Custom Workflows"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2">

            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium mb-6">
              Custom Workflows
            </div>

            <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-purple-700 mb-6">
              Digitize Your Unique Business Processes
            </h2>

            <p className="text-neutral-600 mb-6">
              Every business has unique workflows that give them a competitive edge. 
              We transform your proprietary processes into digital systems that scale, 
              ensuring your competitive advantage grows with you.
            </p>

            {/* CTA Button */}
            

            <div className="space-y-4">

              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>

                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">
                    Process Mapping & Analysis
                  </h4>
                  <p className="text-neutral-600">
                    We document and optimize your workflows before digitizing them.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>

                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">
                    Custom Platform Development
                  </h4>
                  <p className="text-neutral-600">
                    Build proprietary systems that give you a lasting competitive advantage.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>

                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">
                    Team Training & Support
                  </h4>
                  <p className="text-neutral-600">
                    Comprehensive onboarding ensures smooth adoption across your organization.
                  </p>
                </div>
              </div>
              <div className="mb-8">
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition shadow-md font-medium"
              >
                Let's Start
              </Link>
            </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomWorkflows;