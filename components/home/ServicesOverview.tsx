"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* =========================
   Animation Variants
========================= */

const leftContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ServicesOverview = () => {
  const services = [
    {
      title: "Business Automation",
      description: (
        <>
          Reduce manual work by up to <span className="font-semibold text-red-500">60%</span> and
          streamline daily operations with automated workflows designed to save time and lower operational costs.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: "/services",
    },
    {
      title: "CRM Optimization",
      description: (
        <>
          Increase customer retention and sales visibility with structured CRM systems proven to improve pipeline efficiency by{" "}
          <span className="font-semibold text-red-500">30%-40%</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      ),
      href: "/services",
    },
    {
      title: "AI Chatbots for Business",
      description: (
        <>
          Provide instant customer support and lead qualification 24/7 and reduce response time by up to{" "}
          <span className="font-semibold text-red-500">70%</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      href: "/services",
    },
    {
      title: "AI Integration",
      description: (
        <>
          Deploy AI-powered solutions helping teams operate <span className="font-semibold text-red-500">2× faster</span>.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      href: "/ai-integration",
    },
    {
      title: "Workflow Automation",
      description: (
        <>
          Increase productivity by <span className="font-semibold text-red-500">50%+</span> while reducing operational delays.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
        </svg>
      ),
      href: "/workflow-automation",
    },
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-8xl mx-4 px-4 sm:px-6 lg:px-8 border border-red-200 rounded-lg py-6 px-3 lg:px-6  bg-gray-900/60">
        {/* ================= HEADING SECTION ================= */}
        <motion.div
          className="text-center mb-12"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl md:text-4xl text-white font-bold mb-4"
          >
            Solutions That Drive <span className="text-red-500">Growth</span>
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-xl text-neutral-200 max-w-2xl mx-auto"
          >
            We solve real operational challenges with technology that works for your business, not against it.
          </motion.p>
        </motion.div>

        {/* ================= CARDS SECTION ================= */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={slideUp}>
              <Link href={service.href}>
                <div className="
                  border border-red-300 
                  bg-black/40 
                  p-8 
                  rounded-lg 
                  shadow-[10px_0_20px_rgba(255,0,0,0.3),-10px_0_20px_rgba(255,0,0,0.3)] 
                  hover:shadow-[10px_0_25px_rgba(255,0,0,0.5),-10px_0_25px_rgba(255,0,0,0.5)] 
                  transform hover:scale-105 
                  transition duration-300 cursor-pointer
                ">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-red-500 font-heading text-xl mb-3">{service.title}</h3>
                  <p className="text-neutral-200 mb-4">{service.description}</p>
                  <button className="text-red-500 border-red-600 border cursor-pointer bg-gray-800 px-4 py-2 mt-2 rounded-lg hover:bg-gray-700 transition font-semibold">
                    See Details →
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;