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
  const [scrollProgress, setScrollProgress] = useState(0);

  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);
  
  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
  
    const visibleWidth = el.clientWidth;
    const totalWidth = el.scrollWidth;
    const maxScroll = totalWidth - visibleWidth;
  
    const scrollLeft = el.scrollLeft;
  
    // Calculate thumb width ratio
    const widthRatio = visibleWidth / totalWidth;
    const calculatedThumbWidth = widthRatio * 100;
  
    // Calculate thumb position ratio
    const scrollRatio = scrollLeft / maxScroll;
    const maxThumbMove = 100 - calculatedThumbWidth;
    const calculatedThumbLeft = scrollRatio * maxThumbMove;
  
    setThumbWidth(calculatedThumbWidth);
    setThumbLeft(calculatedThumbLeft);
  };
  
  

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-50 to-purple-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading tracking-tight text-4xl text-purple-700 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-neutral-600">
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
                min-w-[280px]
                sm:min-w-[320px]
                lg:min-w-[420px]
                xl:min-w-[480px]
                bg-white 
                p-6 
                rounded-2xl 
                shadow-sm 
                border 
                border-neutral-100
              "
            >
              <h3 className="font-heading text-purple-700 text-xl font-semibold">
                {item.company}
              </h3>

              <p className="text-sm text-purple-500 mb-3">
                {item.description}
              </p>

              <div className="flex mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-neutral-600 leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Scroll Track */}
        <div className="mt-8 w-full max-w-xl mx-auto">
  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="absolute top-0 h-full bg-gray-500 rounded-full transition-all duration-200 ease-out"
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
