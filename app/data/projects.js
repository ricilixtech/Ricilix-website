export const projects = [
    {
      slug: "revtalk-ai-support-1",
      title: "RevTalk – AI-Powered EV Charger Support Chatbot",
      shortDescription:
        "AI-powered 24/7 EV charger support assistant built using RAG architecture and LLM integration.",
      image: "/pictures/projects/RevTalk ss.png",
      content: {
        problem:
          "RevCharge required a 24/7 automated support system to handle customer inquiries related to EV charger compatibility, pricing, and installation. Manual support limited response time and scalability.",
  
        solution:
          "I built a Retrieval-Augmented Generation (RAG) based AI chatbot that intelligently retrieves product and business information and generates accurate responses in real-time.",
  
        features: [
          "Instant customer support",
          "Context-aware responses",
          "Escalation to human representatives",
          "Seamless website integration",
        ],
  
        techStack: [
          "Python",
          "RAG Architecture",
          "LLM API (Gemini/OpenAI)",
          "Vector Database",
          "Next.js",
          "Tailwind CSS",
        ],
  
        impact: [
          "Reduced manual support workload",
          "Enabled 24/7 automated assistance",
          "Improved customer engagement experience",
        ],
      },
    },
  
    {
      slug: "hubspot-crm-transformation-1",
      title: "HubSpot CRM Transformation – EV Charger Operations Automation",
      shortDescription:
        "Centralized CRM and automation system built to unify EV charger leads, customers, and installations across B2B, B2C, and B2B2C workflows.",
      image: "/pictures/projects/hubspot-crm.png",
      content: {
        problem:
          "The EV charger company was managing leads, installations, and customer support across multiple disconnected platforms including email inboxes, Jumptech, Typeform, and internal databases. Teams manually searched systems to locate customer and installation information, causing delays, duplicate records, and lack of operational visibility across B2B, B2C, and B2B2C business models.",
    
        solution:
          "RICILIX implemented HubSpot as a centralized CRM and designed a structured data architecture to unify customer and installation records. Data from multiple platforms was cleaned using Python, mapped, and migrated into HubSpot. Custom objects were introduced to support complex B2B2C workflows, while Zapier automation enabled automatic contact creation, updates, and real-time data synchronization.",
    
        features: [
          "Centralized CRM for leads, customers, and installations",
          "Multi-source data migration and structured data mapping",
          "Custom objects supporting B2B, B2C, and B2B2C workflows",
          "Automated survey-to-CRM synchronization",
          "Custom EV installation and property data tracking",
          "Duplicate prevention and standardized data structure",
        ],
    
        techStack: [
          "HubSpot CRM",
          "Python (Data Cleaning & Migration)",
          "Zapier Automation",
          "Jumptech Integration",
          "Typeform Data Migration",
          "Custom CRM Data Architecture",
        ],
    
        impact: [
          "75% reduction in manual tracking workload",
          "Customer lookup time reduced from 10–15 minutes to under 1 minute",
          "Centralized visibility across all installations and customers",
          "Improved support response efficiency",
          "Scalable CRM foundation for business growth",
        ],
      },
    },
  
  ];
  