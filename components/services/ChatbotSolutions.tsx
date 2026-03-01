import Image from "next/image";
import Link from "next/link";

const ChatbotSolutions = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="order-1 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/pictures/projects/RevTalk ss.png"
              alt="Chatbot Solutions"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium mb-6">
              AI Chatbot Solutions
            </div>

            <h2 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-blue-700 mb-6">
              Intelligent Chatbots for Your Business
            </h2>

            <p className="text-neutral-600 mb-6">
              Transform customer support with AI-powered chatbots that answer queries instantly,
              guide users through your products and services, and help your business scale
              without increasing staff.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">24/7 Customer Support</h4>
                  <p className="text-neutral-600">Provide instant answers to customer queries any time, any day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Knowledge Base Integration</h4>
                  <p className="text-neutral-600">Connect your FAQs, manuals, and support articles for accurate automated responses.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-heading text-neutral-900 mb-1">Lead Qualification & Engagement</h4>
                  <p className="text-neutral-600">Automate lead collection and pre-qualify prospects before your sales team engages.</p>
                </div>
              </div>

            </div>

            {/* Call-to-Action */}
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
              Let's Build Your Chatbot
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatbotSolutions;