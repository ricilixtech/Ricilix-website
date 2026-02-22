"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";

// Import 3D Model (disable SSR)
const RicilixModel = dynamic(() => import("./RicilixModel"), {
  ssr: false,
});

/* =========================
   Animation Variants
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED (valid cubic-bezier)
    },
  },
};
const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80, // 👈 positive value = comes from right
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};


const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-4 md:py-8 xl:py-10">

      <div className="max-w-7xl xl:max-w-none md:py-6 py-4 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center">

          {/* ================= TEXT SECTION ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={slideInLeft}
              className="tracking-tight leading-tight font-heading text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-purple-700 mb-6"
            >
              Transform Your Business with Intelligent Automation
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="text-base md:text-lg xl:text-xl text-neutral-600 mb-8"
            >
              We help eCommerce and service businesses scale faster with AI-driven workflows, CRM optimization, and custom automation solutions.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-purple-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-custom">
                Get Started
              </button>

              <button className="border text-blue-600 border-neutral-300 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                View Case Studies
              </button>
            </motion.div>
          </motion.div>

          {/* ================= IMAGE SECTION ================= */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full"
          >
            <Image
              src="/pictures/HomePage/Home1.jpeg"
              alt="Business Automation"
              fill
              className="rounded-xl shadow-custom object-cover"
              priority
            />
          </motion.div>


        </div>

        {/* ================= LOGO ================= */}
        <motion.div
          className="m-4 md:m-6 flex justify-center"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="
              relative
              w-[220px] h-[95px]
              sm:w-[260px] sm:h-[115px]
              md:w-[400px] md:h-[175px]
              lg:w-[480px] lg:h-[210px]
              xl:w-[560px] xl:h-[240px]
              2xl:w-[620px] 2xl:h-[260px]
            "
          >
            <Image
              src="/pictures/HomePage/Ricilix Logo.png"
              alt="Ricilix Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          className="mt-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={slideInLeft}
            className="text-sm md:text-base text-neutral-600 font-medium"
          >
            <span className="font-heading font-semibold text-purple-700">
              60%
            </span>{" "}
            Less Manual Work •{" "}
            <span className="font-heading font-semibold text-purple-700">
              40%
            </span>{" "}
            Better Pipeline Visibility •{" "}
            <span className="font-heading font-semibold text-purple-700">
              2× Faster Operations
            </span>
          </motion.p>
        </motion.div>

      </div>

      {/* ===== 3D MODEL (Optional) ===== */}
      {/* 
      <div className="mt-6 w-full">
        <RicilixModel />
      </div> 
      */}

    </section>
  );
};

export default Hero;
