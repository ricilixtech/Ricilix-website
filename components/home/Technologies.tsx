"use client";

import Image from "next/image";

const technologies = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier" },
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
  { name: "Make", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
  { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable" },
];

const TechRow = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`
          flex w-max gap-6 md:gap-8
          ${reverse ? "animate-scroll-reverse" : "animate-scroll"}
          group-hover:[animation-play-state:paused]
        `}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="
              flex items-center gap-3
              bg-gradient-to-r from-gray-800/80 via-gray-900/60 to-black/80
              backdrop-blur-lg
              shadow-xl shadow-purple-500/30
              rounded-2xl
              px-5 py-3
              min-w-[150px] md:min-w-[180px]
              border border-purple-700/20
              hover:scale-105 hover:shadow-purple-500/50
              transition-transform duration-300
            "
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              width={tech.name === "OpenAI" ? 80 : 28}
              height={tech.name === "OpenAI" ? 32 : 28}
              className={`object-contain ${tech.name === "OpenAI" ? "w-20 h-auto" : "w-9 h-8"}`}
              unoptimized
            />
            <p className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section className="py-20 relative">
      <div className=" mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cutting-Edge <span className="text-red-500">
              Technologies
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We leverage modern automation, AI, and cloud platforms to deliver scalable, reliable, and intelligent business systems.
          </p>
        </div>

        {/* Desktop → 2 Rows */}
        <div className="hidden md:block space-y-12">
          <TechRow />
          <TechRow reverse />
        </div>

        {/* Mobile → 2 Rows */}
        <div className="md:hidden space-y-4">
          <TechRow />
          <TechRow reverse />
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 px-6 text-center">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed  mx-auto">
            Harness the power of{" "}
            <span className="font-semibold text-red-500">latest programming languages</span>,{" "}
            <span className="font-semibold text-red-500">AI frameworks</span>,{" "}
            <span className="font-semibold text-red-500">automation platforms</span>, and{" "}
            <span className="font-semibold text-red-500">cloud infrastructure</span> to build{" "}
            <span className="font-bold text-red-500">intelligent, scalable systems</span> that accelerate business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;