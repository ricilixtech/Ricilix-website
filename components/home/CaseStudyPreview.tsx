import Link from "next/link";

const CaseStudyPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-white">

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="font-heading leading-tight tracking-tight text-purple-700 text-3xl md:text-4xl mb-4">
            Real Results, Real Impact
          </h2>

          <p className="text-lg text-neutral-600">
            See how we transform complex operations into scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 xl:gap-12">

          {/* EV Case Study Card */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">

            <div className="mb-6">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                EV Infrastructure
              </span>
            </div>

            <h3 className="font-heading text-2xl text-neutral-900 mb-4">
              Centralized CRM & Automation for EV Charger Operations
            </h3>

            <p className="text-neutral-700 mb-6">
              RICILIX consolidated fragmented systems into a unified HubSpot CRM architecture,
              reducing manual workload by 75% and enabling full operational visibility.
            </p>

            <Link
              href="/case-studies/ev-crm-automation"
              className="text-purple-600 font-medium hover:text-purple-700 transition"
            >
              Read Full Case Study →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
