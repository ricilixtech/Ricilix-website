"use client"

import Image from "next/image";
import { motion } from "framer-motion";
const Mission = () => {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-purple-700 mb-6">
              Building the Future of Business Operations
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              At Ricilix, we believe technology should empower businesses, not complicate them. 
              Our mission is to make advanced automation and AI accessible to every growing company.
            </p>
          </div>
        </div>
                {/* ===== Logo ===== */}
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
        <div className="mt-4 text-center">
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

      </section>
    );
  };
  
  export default Mission;