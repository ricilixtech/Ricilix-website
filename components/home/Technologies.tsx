"use client";

import Image from "next/image";

const technologies = [
    {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Zapier",
        logo: "https://cdn.simpleicons.org/zapier",
    },
    {
        name: "n8n",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "HubSpot",
        logo: "https://cdn.simpleicons.org/hubspot",
    },
    {
        name: "Salesforce",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
        name: "Make",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
        name: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },


    {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
        name: "Stripe",
        logo: "https://cdn.simpleicons.org/stripe",
    },
    {
        name: "Shopify",
        logo: "https://cdn.simpleicons.org/shopify",
    },
    {
        name: "Airtable",
        logo: "https://cdn.simpleicons.org/airtable",
    },
];


const TechRow = ({ reverse = false }: { reverse?: boolean }) => {
    return (
        <div className="relative overflow-hidden group">
            <div
                className={`
          flex w-max gap-6 md:gap-10
          ${reverse ? "animate-scroll-reverse" : "animate-scroll"}
          group-hover:[animation-play-state:paused]
        `}
            >
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="
              flex items-center gap-3
              bg-white/80 backdrop-blur-md
              shadow-md
              rounded-2xl
              px-4 md:px-6
              py-3
              min-w-[150px] md:min-w-[190px]
              border border-purple-100
              hover:shadow-purple-200 hover:shadow-lg
              transition-all duration-300
            "
                    >
                        <Image
                            src={tech.logo}
                            alt={tech.name || "OpenAI"}
                            width={tech.name === "" ? 80 : 28}
                            height={tech.name === "" ? 32 : 28}
                            className={`object-contain ${tech.name === "" ? "w-20 h-auto" : "w-9 h-8"}`}
                            unoptimized
                        />

                        <p className="text-sm md:text-base font-semibold text-neutral-700 whitespace-nowrap">
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
        <section className="py-20 bg-gradient-to-b from-white via-purple-100 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-purple-700 mb-4">
                        Technologies We Use
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-sm md:text-base">
                        We leverage industry-leading automation, AI, and CRM technologies
                        to build scalable business systems.
                    </p>
                </div>

                {/* Desktop → 2 Rows */}
                <div className="hidden md:block space-y-12">
                    <TechRow />
                    <TechRow reverse />
                </div>

                {/* Mobile → 2 Rows */}
                <div className="md:hidden space-y-8">
                    <TechRow />
                    <TechRow reverse />

                </div>

            </div>
            {/* Bottom Statement */}
            <div className="mt-20 px-6">
                <div className="max-w-4xl mx-auto text-center">


                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                        We leverage the <span className="font-semibold text-purple-700">latest programming languages</span>,
                        powerful <span className="font-semibold text-purple-700">AI frameworks</span>,
                        advanced <span className="font-semibold text-purple-700">automation platforms</span>,
                        and secure <span className="font-semibold text-purple-700">cloud infrastructure</span>
                        to design <span className="font-bold text-purple-700">intelligent, scalable systems</span>
                        that solve real business problems and accelerate sustainable growth.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default Technologies;
