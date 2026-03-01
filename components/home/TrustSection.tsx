"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    company: "KRC Kankai",
    description: "Automotive rubber spare parts supplier for cars",
    rating: 5,
    review:
      "Ricilix streamlined our inventory and order management processes. Our operations are now faster and far more efficient.",
  },
  {
    company: "Revcharge",
    description: "EV charger sales and distribution company",
    rating: 4,
    review:
      "With Ricilix automation and AI integrations, we improved customer inquiries handling and boosted our sales workflow.",
  },
  {
    company: "Ihsan Traders",
    description: "Digital transformation and CRM consultancy",
    rating: 5,
    review:
      "Ricilix helped streamline our CRM and business processes efficiently.",
  },
];

const TrustSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const visibleWidth = el.clientWidth;
    const totalWidth = el.scrollWidth;
    const maxScroll = totalWidth - visibleWidth;
    const scrollLeft = el.scrollLeft;

    const widthRatio = visibleWidth / totalWidth;
    const calculatedThumbWidth = widthRatio * 100;

    const scrollRatio = scrollLeft / maxScroll;
    const maxThumbMove = 100 - calculatedThumbWidth;
    const calculatedThumbLeft = scrollRatio * maxThumbMove;

    setThumbWidth(calculatedThumbWidth);
    setThumbLeft(calculatedThumbLeft);
  };

  return (
    <section className=" relative py-16 md:py-20 ">
      <div className="max-w-8xl mx-2 lg:mx-4 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border border-red-200 rounded-lg bg-gray-900/60">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading tracking-tight text-4xl text-white font-bold mb-4">
            Trusted by Growing <span className="text-red-500">
              Businesses
            </span>
          </h2>
          <p className="text-neutral-200 text-lg">
            Join companies that transformed operations with Ricilix.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex gap-6 
            overflow-x-auto 
            scrollbar-hide 
            scroll-smooth
            snap-x snap-mandatory
            pb-4
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                snap-start
                min-w-[280px] sm:min-w-[320px] lg:min-w-[420px] xl:min-w-[480px]
                bg-gray-800/70 border border-red-500 backdrop-blur-lg
                p-6 rounded-2xl shadow-lg shadow-red-500/50
                transition-transform hover:scale-105 cursor-pointer
              "
            >
              <h3 className="font-heading text-xl font-semibold text-red-500 mb-2">
                {item.company}
              </h3>

              <p className="text-red-400 text-sm mb-3 font-semibold">
                {item.description}
              </p>

              <div className="flex mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Scroll Track */}
        <div className="mt-8 w-full max-w-xl mx-auto">
          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full bg-red-500 rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${thumbWidth}%`,
                left: `${thumbLeft}%`,
              }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;