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
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED
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
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED
    },
  },
};

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-50 to-purple-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            className="font-heading tracking-tight leading-tight text-4xl md:text-4xl text-purple-700 mb-4"
          >
            Solutions That Drive Growth
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
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

          {/* CARD 1 */}
          <motion.div variants={slideUp}>
            <Link href="/">
              <div className="bg-white border border-purple-300 p-8 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-purple-600 font-heading text-xl mb-3">
                  Business Automation
                </h3>
                <p className="text-neutral-600">
                  Reduce manual work by up to{" "}
                  <span className="font-semibold text-neutral-800">60%</span>{" "}
                  and streamline daily operations with automated workflows designed to save time and lower operational costs.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* CARD 2 */}
          <motion.div variants={slideUp}>
            <Link href="/">
              <div className="bg-white border border-purple-300 p-8 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                <h3 className="text-purple-600 font-heading text-xl mb-3">
                  CRM Optimization
                </h3>
                <p className="text-neutral-600">
                  Increase customer retention and sales visibility with structured CRM systems proven to improve pipeline efficiency by{" "}
                  <span className="font-semibold text-neutral-800">30%-40%</span>.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* CARD 3 */}
          <motion.div variants={slideUp}>
            <Link href="/">
              <div className="bg-white border border-purple-300 p-8 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
                  </svg>
                </div>
                <h3 className="text-purple-600 font-heading text-xl mb-3">
                  AI Chatbots for Business
                </h3>
                <p className="text-neutral-600">
                  Provide instant customer support and lead qualification 24/7 and reduce response time by up to{" "}
                  <span className="font-semibold text-neutral-800">70%</span>.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* CARD 4 */}
          <motion.div variants={slideUp}>
            <Link href="/">
              <div className="bg-white border border-purple-300 p-8 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-small flex items-center justify-center mb-6"> <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /> </svg> </div>
                <h3 className="text-purple-600 font-heading text-xl mb-3">
                  AI Integration
                </h3>
                <p className="text-neutral-600">
                  Deploy AI-powered solutions helping teams operate{" "}
                  <span className="font-semibold text-neutral-800">2× faster</span>.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* CARD 5 */}
          <motion.div variants={slideUp}>
            <Link href="/">
              <div className="bg-white border border-purple-300 p-8 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-small flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
                  </svg>
                </div>
                <h3 className="text-purple-600 font-heading text-xl mb-3">
                  Workflow Automation
                </h3>
                <p className="text-neutral-600">
                  Increase productivity by{" "}
                  <span className="font-semibold text-neutral-800">50%+</span>{" "}
                  while reducing operational delays.
                </p>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
