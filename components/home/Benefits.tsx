"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Proven ROI",
    description: "Our clients see an average 40% reduction in operational costs within 6 months.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    description: "Technology that grows with your business, from startup to enterprise.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    description: "Dedicated team ensuring your systems run smoothly 24/7.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const Benefits = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center">

          {/* Image */}
          <div className="relative h-[350px] sm:h-[370px] md:h-[380px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl shadow-red-500/30">
            <Image
              src="/pictures/HomePage/Home2.jpeg"
              alt="Business Results"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-8 leading-tight tracking-tight border border-red-200 rounded-lg bg-gray-900/60 p-4 text-center">
              Why Businesses Choose <span className="text-red-500">
              Ricilix
            </span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2 text-red-400 font-semibold">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;