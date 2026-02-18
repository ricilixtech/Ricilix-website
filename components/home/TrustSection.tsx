"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    company: "TechNova Solutions",
    rating: 5,
    review:
      "Ricilix transformed our workflow automation. Our team productivity increased dramatically.",
  },
  {
    company: "Velocity Commerce",
    rating: 4,
    review:
      "Their AI integrations helped us improve customer support and reduce response time.",
  },
  {
    company: "NextGen Logistics",
    rating: 5,
    review:
      "Professional team and exceptional automation solutions. Highly recommended.",
  },
  {
    company: "Digital Orbit",
    rating: 5,
    review:
      "Ricilix helped streamline our CRM and business processes efficiently.",
  },
];

const TrustSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto Slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: 320, behavior: "smooth" });

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading tracking-tight text-3xl md:text-4xl text-purple-700 mb-4">
            Trusted by Growing Businesses
          </h2>

          <p className="text-lg text-neutral-600">
            Join companies that transformed operations with Ricilix.
          </p>
        </div>

        
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
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
              {/* Company Name */}
              <h3 className="font-heading text-xl font-semibold mb-2">
                {item.company}
              </h3>

              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-neutral-600 leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
