"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-4 md:py-8 xl:py-10">


      <div className="max-w-7xl xl:max-w-none md:py-6 py-4 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center">

          {/* Text Content */}
          <div>
            <h1 className="tracking-tight leading-tight font-heading text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-purple-700 mb-6">
              Transform Your Business with Intelligent Automation
            </h1>

            <p className="text-base md:text-lg xl:text-xl text-neutral-600 mb-8">
              We help eCommerce and service businesses scale faster with AI-driven workflows, CRM optimization, and custom automation solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-custom">
                Get Started
              </button>

              <button className="border text-blue-600 border-neutral-300 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full">
            <Image
              src="/pictures/HomePage/Home1.jpeg"
              alt="Business Automation"
              fill
              className="rounded-xl shadow-custom object-cover"
              priority
            />
          </div>
        </div>

        {/* ===== Logo Showcase (Still Inside Hero) ===== */}

        <motion.div
          className="m-4 md:m-6 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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


        {/* ===== Stats ===== */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-neutral-600 font-medium">

            <motion.span
              className="font-heading font-semibold text-purple-700"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              60%
            </motion.span>{" "}
            Less Manual Work •{" "}

            <motion.span
              className="font-heading font-semibold text-purple-700"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              40%
            </motion.span>{" "}
            Better Pipeline Visibility •{" "}

            <motion.span
              className="font-heading font-semibold text-purple-700"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              2× Faster Operations
            </motion.span>

          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
