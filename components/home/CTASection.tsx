"use client";

import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Glass/Red-Black Card */}
        <div className="relative bg-black/60 backdrop-blur-md border border-red-500 shadow-lg rounded-2xl p-10 md:p-14">

          <h2 className="font-heading tracking-tight leading-tight text-3xl md:text-4xl text-red-500 mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and discover how intelligent automation, AI integration, 
            and workflow optimization can accelerate your business growth.
          </p>

          <Link href="/contact">
            <button className="group bg-red-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 hover:bg-red-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
              Book Free Consultation
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;