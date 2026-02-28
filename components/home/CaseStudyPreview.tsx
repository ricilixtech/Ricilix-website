"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    category: "EV Infrastructure",
    title: "Centralized CRM & Automation for EV Charger Operations",
    description:
      "RICILIX consolidated fragmented systems into a unified HubSpot CRM architecture, reducing manual workload by 70% and enabling full operational visibility.",
    href: "/case-studies/ev-crm-automation",
  },
  {
    category: "E-Commerce",
    title: "Automated Lead Nurturing & CRM Optimization",
    description:
      "Implemented AI-driven workflows to boost customer engagement, improve lead conversion by 60%, and reduce repetitive manual tasks.",
    href: "/case-studies/ecommerce-automation",
  },
];

const CaseStudyPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4 tracking-tight leading-tight">
            Real  <span className="text-red-500">
              Results
            </span> , Real  <span className="text-red-500">
              Impact
            </span>
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            See how we transform complex operations into intelligent, scalable business systems.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-gray-800/70 border border-red-400 backdrop-blur-lg rounded-2xl p-8 shadow-lg shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300">

                <span className="text-sm font-medium text-red-500 font-bold uppercase tracking-wide mb-2 inline-block">
                  {caseStudy.category}
                </span>

                <h3 className="font-heading text-2xl md:text-3xl text-white font-semibold mb-4">
                  {caseStudy.title}
                </h3>

                <p className="text-neutral-300 mb-6">
                  {caseStudy.description.split(/(\d+%)/g).map((part, idx) => {
                    // Check if the part is a percentage number
                    if (/\d+%/.test(part)) {
                      return (
                        <span key={idx} className="text-red-500 font-semibold">
                          {part}
                        </span>
                      );
                    }
                    return part; // normal text
                  })}
                </p>

                <Link
                  href={caseStudy.href}
                  className="inline-block text-red-400 font-semibold hover:text-red-600 transition"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;