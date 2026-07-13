// src/utils/services-data.js
// Centralized service data for Samudhra Water Solutions
// Used by both the services listing page and individual detail pages

export const services = [
  {
    num: "01",
    slug: "uf-plant",
    title: "UF Plant Installation & Maintenance",
    tagline: "Advanced ultrafiltration for consistently pure, bacteria-free water — built for scale.",
    shortDescription: "Remove suspended solids, bacteria, and harmful particles from water with our high-performance Ultrafiltration (UF) systems. Ideal for pre-treatment, municipal supply, and industrial wastewater recycling.",
    image: "/images/products/Uf Plant.jpg",
    heroImage: "/images/products/Uf Plant.jpg",
    categories: ["commercial", "industrial"],
    idealFor: ["Municipalities", "Industries", "Hospitals", "Food & Beverage", "Apartments"],
    benefits: [
      "Removes 99.99% bacteria & suspended solids",
      "Low energy consumption vs RO",
      "Consistent water quality output",
      "Protects downstream RO membranes",
      "Compact modular design"
    ],
    problem: {
      title: "Contaminated Water Risks Health & Equipment",
      description: "Untreated water from borewells, rivers, or municipal lines carries bacteria, viruses, and suspended particles that cause waterborne diseases and damage sensitive industrial equipment. Conventional sand filters often fail to remove micro-level contaminants effectively."
    },
    solution: {
      title: "UF Plant — Precision Barrier Filtration",
      description: "Our Ultrafiltration plants use hollow-fibre membranes with pore sizes as small as 0.01 microns to physically remove bacteria, protozoa, and turbidity. The result is crystal-clear, safe water without chemicals — delivered reliably at scale for years."
    },
    features: [
      { icon: "efficiency", title: "High Efficiency", description: "Removes particles down to 0.01 micron with minimal pressure and energy." },
      { icon: "maintenance", title: "Low Maintenance", description: "Automated backwash cycles extend membrane life and reduce manual effort." },
      { icon: "energy", title: "Energy Saving", description: "Operates at low pressure, consuming significantly less electricity than RO systems." },
      { icon: "lifespan", title: "Long Equipment Life", description: "Industrial-grade membranes designed for 5-7 years of continuous operation." },
      { icon: "custom", title: "Customized Design", description: "Engineered to match your specific water source, flow rate, and quality requirements." },
      { icon: "install", title: "Expert Installation", description: "Professional site assessment, installation, and commissioning by certified engineers." }
    ],
    applications: ["Municipal Water Treatment", "Industrial Wastewater", "Pre-treatment for RO", "Food & Beverage", "Hospitals & Healthcare", "Apartment Complexes", "Hotels & Resorts", "Schools & Institutions"],
    process: [
      { step: 1, title: "Water Testing", description: "Comprehensive analysis of your water source for turbidity, bacteria, and contaminants." },
      { step: 2, title: "Site Inspection", description: "Our engineers assess your location, flow requirements, and installation space." },
      { step: 3, title: "Solution Design", description: "Custom UF system designed to match your exact capacity and water quality needs." },
      { step: 4, title: "Installation", description: "Professional installation by certified technicians with minimal disruption." },
      { step: 5, title: "Testing & Commissioning", description: "Rigorous output testing to ensure every parameter meets safety standards." },
      { step: 6, title: "Maintenance Support", description: "Scheduled maintenance, membrane cleaning, and 24/7 emergency support." }
    ],
    specs: {
      capacity: ["500 LPH", "1,000 LPH", "2,000 LPH", "5,000 LPH", "10,000 LPH", "Custom"],
      waterSource: ["Borewell", "Municipal Supply", "River Water", "Pond Water"],
      applications: ["Industrial", "Commercial", "Municipal", "Pre-treatment"]
    },
    benefitCards: [
      { title: "Crystal Clear Water", description: "Eliminates turbidity and visible impurities for pristine output." },
      { title: "Bacteria-Free Safety", description: "Physical barrier removes 99.99% of harmful microorganisms." },
      { title: "Chemical-Free Process", description: "No chlorine or chemical dosing needed for basic purification." },
      { title: "Protects RO Membranes", description: "Extends downstream RO system life by removing fouling agents." },
      { title: "Low Operating Cost", description: "Minimal energy and chemical costs compared to traditional systems." },
      { title: "Consistent Output", description: "Delivers uniform water quality regardless of source variation." },
      { title: "Scalable Design", description: "Easily expandable to meet growing water demands." },
      { title: "Eco-Friendly", description: "Reduced chemical usage and lower waste generation." }
    ],
    faqs: [
      { question: "What is a UF Plant and how does it work?", answer: "A UF (Ultrafiltration) Plant uses hollow-fibre membranes with microscopic pores (0.01 micron) to physically filter out bacteria, viruses, suspended solids, and turbidity from water. Water is pushed through these membranes under low pressure, and contaminants are trapped while clean water passes through." },
      { question: "How much does a UF Plant installation cost?", answer: "The cost depends on capacity, water source quality, and site requirements. Our UF systems range from affordable residential units to large-scale industrial plants. Contact us for a free site assessment and customized quotation." },
      { question: "How often does a UF Plant need maintenance?", answer: "Routine maintenance is typically required every 3-6 months, including membrane cleaning and backwash optimization. Our AMC plans cover all scheduled maintenance, membrane replacement, and emergency support." },
      { question: "Can a UF Plant treat borewell water?", answer: "Yes, UF plants are excellent for treating borewell water. They effectively remove iron particles, bacteria, and suspended solids commonly found in borewell sources across Kerala." },
      { question: "What is the lifespan of UF membranes?", answer: "With proper maintenance, UF membranes typically last 5-7 years. Our maintenance programs ensure optimal membrane performance and timely replacement when needed." },
      { question: "Is a UF Plant better than an RO Plant?", answer: "UF and RO serve different purposes. UF removes bacteria and particles but not dissolved salts (TDS). RO removes both. For municipal or low-TDS water, UF is more energy-efficient. For high-TDS or salty water, RO is necessary. We often combine both for optimal results." },
      { question: "Do you provide AMC (Annual Maintenance Contract)?", answer: "Yes, we offer comprehensive AMC plans covering scheduled maintenance, membrane cleaning, spare parts, emergency repairs, and 24/7 support for all our UF installations." },
      { question: "How long does installation take?", answer: "Installation typically takes 2-5 days depending on system capacity and site preparation requirements. Our team handles everything from civil work to commissioning." }
    ],
    relatedServices: ["ro-plant", "water-softener", "iron-removal-plant"],
    metaTitle: "UF Plant Installation & Maintenance in Kerala | Samudhra Water Solutions",
    metaDescription: "Professional UF (Ultrafiltration) plant installation and maintenance services in Kerala. Remove bacteria, turbidity & contaminants. 16+ years experience. Free water testing.",
    keywords: "UF plant Kerala, ultrafiltration plant installation, UF plant maintenance, water treatment Kerala, Samudhra water solutions"
  },
  {
    num: "02",
    slug: "sewage-treatment-plant",
    title: "Sewage Treatment Plant (STP)",
    tagline: "Engineered sewage treatment systems that protect public health and the environment.",
    shortDescription: "Treat domestic and commercial wastewater to meet environmental discharge standards. Our STP systems ensure safe water disposal or reuse, protecting communities and ecosystems.",
    image: "/images/products/Sewage Treatment Plant.jpg",
    heroImage: "/images/products/Sewage Treatment Plant.jpg",
    categories: ["commercial", "industrial", "waste-water"],
    idealFor: ["Apartments", "Hotels", "Hospitals", "IT Parks", "Townships", "Industries"],
    benefits: [
      "Meets KSPCB discharge norms",
      "Enables water reuse for landscaping",
      "Reduces environmental impact",
      "Automated operation",
      "Minimal odor technology"
    ],
    problem: {
      title: "Untreated Sewage Pollutes Water Bodies & Soil",
      description: "Discharging untreated sewage contaminates rivers, lakes, and groundwater — causing waterborne diseases, environmental degradation, and regulatory penalties. Apartments and commercial facilities above certain capacities are legally mandated to have STPs."
    },
    solution: {
      title: "STP — Compliant Wastewater Treatment",
      description: "Our Sewage Treatment Plants use advanced biological and mechanical processes (SBR, MBBR, MBR technologies) to treat wastewater to reusable quality. Treated water can be safely discharged or reused for landscaping, toilet flushing, and cooling towers."
    },
    features: [
      { icon: "efficiency", title: "KSPCB Compliant", description: "Designed to meet all Kerala State Pollution Control Board discharge standards." },
      { icon: "maintenance", title: "Low Maintenance", description: "Automated systems with minimal manual intervention and easy monitoring." },
      { icon: "energy", title: "Odor-Free Operation", description: "Advanced aeration and sealed design eliminates unpleasant sewage odors." },
      { icon: "lifespan", title: "Water Reuse Ready", description: "Treated water quality suitable for landscaping, toilet flushing, and cooling." },
      { icon: "custom", title: "Custom Capacity", description: "Systems designed from 10 KLD to 500+ KLD based on your facility requirements." },
      { icon: "install", title: "Turnkey Installation", description: "Complete design, civil work, equipment installation, and commissioning." }
    ],
    applications: ["Residential Apartments", "Commercial Complexes", "Hotels & Resorts", "Hospitals", "IT Parks", "Townships", "Educational Institutions", "Industrial Facilities"],
    process: [
      { step: 1, title: "Site Assessment", description: "Evaluate sewage volume, quality, and available space for STP installation." },
      { step: 2, title: "Regulatory Review", description: "Ensure design meets KSPCB norms and local building regulations." },
      { step: 3, title: "System Design", description: "Custom STP design using SBR/MBBR/MBR technology based on your needs." },
      { step: 4, title: "Civil & Installation", description: "Complete construction, equipment setup, and piping work." },
      { step: 5, title: "Commissioning", description: "System startup, bacterial seeding, and performance optimization." },
      { step: 6, title: "Operation Support", description: "Training, maintenance contracts, and regulatory compliance assistance." }
    ],
    specs: {
      capacity: ["10 KLD", "25 KLD", "50 KLD", "100 KLD", "250 KLD", "500 KLD"],
      waterSource: ["Domestic Sewage", "Commercial Wastewater", "Mixed Effluent"],
      applications: ["Residential", "Commercial", "Industrial", "Municipal"]
    },
    benefitCards: [
      { title: "Regulatory Compliance", description: "Meet all KSPCB and CPCB discharge norms effortlessly." },
      { title: "Water Reuse", description: "Reclaim up to 80% of water for non-potable applications." },
      { title: "Environmental Protection", description: "Prevent groundwater and surface water contamination." },
      { title: "Space Efficient", description: "Compact designs that fit within existing building footprints." },
      { title: "Cost Savings", description: "Reduce municipal water bills through treated water reuse." },
      { title: "Automated Monitoring", description: "PLC-based controls with remote monitoring capabilities." },
      { title: "Odor Control", description: "Advanced aeration technology eliminates unpleasant smells." },
      { title: "Professional Support", description: "Dedicated operations team and maintenance contracts." }
    ],
    faqs: [
      { question: "Is an STP mandatory for apartments in Kerala?", answer: "Yes, as per KSPCB regulations, apartments and commercial buildings generating more than 10 KLD (kiloliters per day) of sewage are required to install and operate a Sewage Treatment Plant." },
      { question: "What technology do you use for STPs?", answer: "We design and install SBR (Sequential Batch Reactor), MBBR (Moving Bed Biofilm Reactor), and MBR (Membrane Bioreactor) based STPs depending on capacity, space constraints, and output quality requirements." },
      { question: "Can treated water from STP be reused?", answer: "Yes, properly treated STP water can be reused for landscaping, toilet flushing, vehicle washing, and cooling tower makeup water — significantly reducing your freshwater consumption." },
      { question: "How much does STP installation cost?", answer: "Cost varies based on capacity, technology, site conditions, and civil work requirements. Contact us for a detailed site assessment and customized quotation." },
      { question: "How often does an STP need maintenance?", answer: "Regular maintenance includes daily checks, weekly sludge removal, and monthly equipment servicing. Our AMC plans cover all operational and maintenance requirements." },
      { question: "What is the lifespan of an STP?", answer: "A well-maintained STP can operate efficiently for 15-25 years. Mechanical components may need periodic replacement, but the civil structure lasts much longer." },
      { question: "Do you handle KSPCB compliance paperwork?", answer: "Yes, we assist with all regulatory documentation, water quality testing reports, and compliance submissions to the Kerala State Pollution Control Board." },
      { question: "Can you upgrade an existing STP?", answer: "Absolutely. We evaluate existing STPs, identify performance gaps, and upgrade equipment, aeration systems, or technology to improve output quality and efficiency." }
    ],
    relatedServices: ["effluent-treatment-plant", "uf-plant", "swimming-pool-filtration"],
    metaTitle: "Sewage Treatment Plant (STP) Installation in Kerala | Samudhra Water Solutions",
    metaDescription: "Expert STP installation and maintenance in Kerala. KSPCB compliant sewage treatment plants for apartments, hotels, hospitals. 16+ years experience. Free site assessment.",
    keywords: "STP installation Kerala, sewage treatment plant, KSPCB compliance, wastewater treatment, Samudhra water solutions"
  },
  {
    num: "03",
    slug: "effluent-treatment-plant",
    title: "Effluent Treatment Plant (ETP)",
    tagline: "Industrial wastewater treatment engineered for compliance, sustainability, and zero liquid discharge.",
    shortDescription: "Treat industrial wastewater containing chemicals, heavy metals, and organic pollutants before discharge. Our ETP systems ensure regulatory compliance and protect the environment.",
    image: "/images/products/Effluent Treatment Plant.jpg",
    heroImage: "/images/products/Effluent Treatment Plant.jpg",
    categories: ["commercial", "industrial", "waste-water"],
    idealFor: ["Factories", "Textile Mills", "Pharmaceutical Units", "Food Processing", "Chemical Plants"],
    benefits: [
      "Meets KSPCB/CPCB discharge norms",
      "Treats chemical & organic pollutants",
      "Enables water recycling",
      "Prevents environmental penalties",
      "Custom-designed per industry"
    ],
    problem: {
      title: "Industrial Effluent Threatens Ecosystems & Compliance",
      description: "Industrial processes generate wastewater laden with heavy metals, chemicals, oils, and toxic organic compounds. Discharging untreated effluent leads to soil contamination, water body pollution, ecosystem damage, and severe regulatory penalties including facility shutdown orders."
    },
    solution: {
      title: "ETP — Industry-Specific Treatment Engineering",
      description: "Our Effluent Treatment Plants are custom-engineered for each industry's specific pollutant profile. Using physical, chemical, and biological treatment stages, we reduce BOD, COD, TSS, and specific contaminants to meet all discharge norms — or achieve Zero Liquid Discharge (ZLD)."
    },
    features: [
      { icon: "efficiency", title: "Industry-Specific Design", description: "Custom treatment process tailored to your industry's effluent characteristics." },
      { icon: "maintenance", title: "Multi-Stage Treatment", description: "Physical, chemical, and biological stages for comprehensive pollutant removal." },
      { icon: "energy", title: "ZLD Capable", description: "Zero Liquid Discharge solutions for maximum water recovery and minimal waste." },
      { icon: "lifespan", title: "Regulatory Compliance", description: "Designed to consistently meet KSPCB, CPCB, and industry-specific standards." },
      { icon: "custom", title: "Water Recovery", description: "Reclaim and reuse up to 90% of treated water in your production processes." },
      { icon: "install", title: "Automated Controls", description: "PLC/SCADA systems for real-time monitoring, dosing, and operational control." }
    ],
    applications: ["Textile & Dyeing", "Pharmaceutical", "Food Processing", "Chemical Manufacturing", "Automotive", "Electroplating", "Paper & Pulp", "Dairy Industry"],
    process: [
      { step: 1, title: "Effluent Analysis", description: "Detailed lab analysis of your industrial wastewater composition and volume." },
      { step: 2, title: "Process Design", description: "Custom treatment process design based on pollutant profile and discharge norms." },
      { step: 3, title: "Equipment Engineering", description: "Selection and fabrication of treatment equipment and dosing systems." },
      { step: 4, title: "Installation", description: "Complete civil and mechanical installation with piping and electrical work." },
      { step: 5, title: "Commissioning", description: "System startup, chemical optimization, and treated water quality verification." },
      { step: 6, title: "Compliance Support", description: "Regular testing, reporting, and regulatory submission assistance." }
    ],
    specs: {
      capacity: ["5 KLD", "10 KLD", "25 KLD", "50 KLD", "100 KLD", "Custom"],
      waterSource: ["Industrial Effluent", "Process Wastewater", "Chemical Waste", "Mixed Effluent"],
      applications: ["Industrial", "Manufacturing", "Chemical Processing", "Pharmaceutical"]
    },
    benefitCards: [
      { title: "Full Compliance", description: "Meet all KSPCB and CPCB discharge standards consistently." },
      { title: "Water Recycling", description: "Recover up to 90% of water for reuse in production processes." },
      { title: "Zero Penalties", description: "Avoid hefty fines and shutdown orders from pollution control boards." },
      { title: "Heavy Metal Removal", description: "Effectively remove lead, chromium, mercury, and other heavy metals." },
      { title: "BOD/COD Reduction", description: "Achieve target BOD and COD levels for safe discharge." },
      { title: "Sludge Management", description: "Proper sludge handling, dewatering, and disposal assistance." },
      { title: "Remote Monitoring", description: "SCADA-based real-time monitoring of all treatment parameters." },
      { title: "Sustainable Operations", description: "Reduce your environmental footprint and enhance corporate sustainability." }
    ],
    faqs: [
      { question: "What is an Effluent Treatment Plant?", answer: "An ETP is a wastewater treatment system specifically designed to treat industrial effluent containing chemicals, heavy metals, oils, and organic pollutants before discharge or reuse. The treatment process is customized based on the specific industry and pollutant profile." },
      { question: "Is an ETP mandatory for industries?", answer: "Yes, industries generating polluting effluent are legally required to install ETPs as per KSPCB and CPCB regulations. Non-compliance can result in heavy fines, closure orders, and legal action." },
      { question: "What industries need ETPs?", answer: "Textile & dyeing, pharmaceutical, chemical manufacturing, food processing, electroplating, automotive, paper & pulp, dairy, and any industry generating contaminated wastewater require ETPs." },
      { question: "How much does an ETP cost?", answer: "ETP costs vary significantly based on effluent type, volume, treatment complexity, and discharge standards required. Contact us for a detailed effluent analysis and customized quotation." },
      { question: "Can treated water be reused in production?", answer: "Yes, with proper treatment including tertiary stages, ETP-treated water can be recycled for cooling, washing, and even some production processes — reducing freshwater intake significantly." },
      { question: "What is Zero Liquid Discharge (ZLD)?", answer: "ZLD is an advanced treatment approach where all wastewater is recovered for reuse, leaving only solid waste for disposal. We design ZLD systems using evaporators, crystallizers, and membrane technologies." },
      { question: "How often does an ETP need maintenance?", answer: "ETPs require daily operational checks, weekly chemical dosing optimization, and monthly equipment maintenance. Our AMC plans cover comprehensive operational support." },
      { question: "Do you provide operator training?", answer: "Yes, we provide complete training for your operations team on system operation, chemical dosing, troubleshooting, and compliance reporting procedures." }
    ],
    relatedServices: ["sewage-treatment-plant", "dm-plant", "uf-plant"],
    metaTitle: "Effluent Treatment Plant (ETP) Installation in Kerala | Samudhra Water Solutions",
    metaDescription: "Custom ETP installation for industries in Kerala. Treat chemical & industrial wastewater. KSPCB compliant. Zero Liquid Discharge capable. Free effluent analysis.",
    keywords: "ETP installation Kerala, effluent treatment plant, industrial wastewater treatment, KSPCB compliance, Samudhra water solutions"
  },
  {
    num: "04",
    slug: "dm-plant",
    title: "De-Mineralizing (DM) Plant",
    tagline: "Ultra-pure demineralized water for critical industrial processes and laboratories.",
    shortDescription: "Produce highly purified water free from dissolved minerals and salts for pharmaceutical, power generation, electronics, and laboratory applications with our precision DM plant systems.",
    image: "/images/products/DM plant.jpg",
    heroImage: "/images/products/DM plant.jpg",
    categories: ["commercial", "industrial"],
    idealFor: ["Pharmaceuticals", "Power Plants", "Electronics", "Laboratories", "Boilers"],
    benefits: [
      "Removes dissolved minerals completely",
      "Prevents boiler scaling & corrosion",
      "Pharmaceutical-grade water quality",
      "Ion exchange technology",
      "Automated regeneration"
    ],
    problem: {
      title: "Dissolved Minerals Damage Industrial Equipment",
      description: "Water containing dissolved minerals causes scaling in boilers and heat exchangers, contaminates pharmaceutical products, damages electronic components, and produces unreliable laboratory results. Standard filtration cannot remove dissolved ions — specialized treatment is essential."
    },
    solution: {
      title: "DM Plant — Complete Ion Removal",
      description: "Our DM Plants use high-grade ion exchange resins in cation and anion beds to remove virtually all dissolved minerals, salts, and ions from water. The result is ultra-pure demineralized water with near-zero conductivity — meeting the most stringent industrial standards."
    },
    features: [
      { icon: "efficiency", title: "Ultra-Pure Output", description: "Produces water with less than 1 µS/cm conductivity for critical applications." },
      { icon: "maintenance", title: "Automated Regeneration", description: "Self-regenerating resin beds with minimal operator intervention needed." },
      { icon: "energy", title: "Multi-Bed Design", description: "Strong acid cation + strong base anion + mixed bed for maximum purity." },
      { icon: "lifespan", title: "Industrial Grade", description: "Heavy-duty construction with premium resins rated for years of service." },
      { icon: "custom", title: "Custom Capacity", description: "Systems from 100 LPH to 50,000 LPH designed for your specific needs." },
      { icon: "install", title: "Complete Integration", description: "Seamlessly integrated with your existing water treatment and process systems." }
    ],
    applications: ["Pharmaceutical Production", "Power Generation", "Electronics Manufacturing", "Chemical Laboratories", "Boiler Feed Water", "Cosmetics Industry", "Food & Beverage", "Textile Processing"],
    process: [
      { step: 1, title: "Water Analysis", description: "Comprehensive analysis of source water TDS, hardness, silica, and ion profile." },
      { step: 2, title: "System Sizing", description: "Calculate capacity based on your daily water demand and purity requirements." },
      { step: 3, title: "Design & Engineering", description: "Custom DM system with appropriate resin selection and bed configuration." },
      { step: 4, title: "Fabrication & Installation", description: "Vessel fabrication, piping, and professional installation at your facility." },
      { step: 5, title: "Resin Charging", description: "Load premium resins, complete initial regeneration, and verify output quality." },
      { step: 6, title: "Training & AMC", description: "Operator training and comprehensive annual maintenance contracts." }
    ],
    specs: {
      capacity: ["100 LPH", "500 LPH", "1,000 LPH", "5,000 LPH", "10,000 LPH", "50,000 LPH"],
      waterSource: ["Pre-treated Water", "RO Permeate", "Municipal Supply"],
      applications: ["Pharmaceutical", "Power Generation", "Electronics", "Laboratory", "Boiler Feed"]
    },
    benefitCards: [
      { title: "Zero Mineral Content", description: "Complete removal of dissolved salts, minerals, and ionic impurities." },
      { title: "Prevents Scaling", description: "Eliminates boiler scale, heat exchanger fouling, and pipe corrosion." },
      { title: "Pharmaceutical Grade", description: "Meets pharmacopoeia standards for purified water production." },
      { title: "Boiler Protection", description: "Extends boiler life by preventing mineral-related damage and corrosion." },
      { title: "Cost Effective", description: "Ion exchange technology offers lower operating costs than thermal methods." },
      { title: "Reliable Output", description: "Consistent quality with online conductivity monitoring and alarms." },
      { title: "Quick Regeneration", description: "Fast resin regeneration means minimal downtime during operation." },
      { title: "Space Efficient", description: "Compact vertical vessel design optimizes your floor space." }
    ],
    faqs: [
      { question: "What is a DM Plant?", answer: "A DM (Demineralization) Plant is a water treatment system that removes dissolved minerals and salts from water using ion exchange technology. It produces ultra-pure water required for industries like pharmaceuticals, power generation, and electronics manufacturing." },
      { question: "What is the difference between DM water and RO water?", answer: "RO removes 95-99% of dissolved solids through membrane filtration. DM plants use ion exchange resins to remove virtually 100% of dissolved minerals, producing higher purity water. DM water typically has lower conductivity than RO water." },
      { question: "What industries need DM Plants?", answer: "Pharmaceutical companies, power plants (for boiler feed water), electronics manufacturers, chemical laboratories, cosmetics producers, and any industry requiring water with near-zero mineral content." },
      { question: "How often do DM Plant resins need regeneration?", answer: "Regeneration frequency depends on source water quality and daily consumption. Typically, resins are regenerated every 8-24 hours using acid (HCl) and alkali (NaOH). Our automated systems handle this process seamlessly." },
      { question: "What is mixed bed DM?", answer: "A mixed bed demineralizer contains both cation and anion resins mixed together in a single vessel. It produces the highest purity water and is typically used as a polishing step after conventional DM treatment." },
      { question: "How long do DM resins last?", answer: "With proper maintenance and regeneration, ion exchange resins typically last 3-5 years before needing replacement. Resin life depends on water quality, regeneration practices, and operating conditions." },
      { question: "Can a DM Plant be combined with RO?", answer: "Yes, combining RO as pre-treatment with DM polishing is a common and cost-effective approach. RO reduces the ionic load, extending DM resin life and reducing chemical consumption for regeneration." },
      { question: "Do you provide DM Plant AMC?", answer: "Yes, we offer comprehensive AMC plans covering resin regeneration, quality monitoring, chemical supply, and complete system maintenance for all our DM installations." }
    ],
    relatedServices: ["ro-plant", "uf-plant", "effluent-treatment-plant"],
    metaTitle: "DM Plant Installation in Kerala | Demineralization Plant | Samudhra Water Solutions",
    metaDescription: "Professional DM Plant installation for industries in Kerala. Ultra-pure demineralized water for pharmaceuticals, boilers, electronics. Expert design & AMC support.",
    keywords: "DM plant Kerala, demineralization plant, deionized water, boiler feed water treatment, Samudhra water solutions"
  },
  {
    num: "05",
    slug: "desalination-plant",
    title: "Desalination Water Filtration Plant",
    tagline: "Converting seawater and brackish water into safe, drinkable freshwater.",
    shortDescription: "Solve water scarcity with our advanced desalination systems. We convert seawater and brackish groundwater into potable freshwater for coastal communities, resorts, and industrial facilities.",
    image: "/images/products/Desalination Water Filtration.jpg",
    heroImage: "/images/products/Desalination Water Filtration.jpg",
    categories: ["commercial", "industrial", "salty-water"],
    idealFor: ["Coastal Communities", "Resorts", "Islands", "Naval Facilities", "Industries"],
    benefits: [
      "Converts seawater to drinking water",
      "Solves water scarcity challenges",
      "High salt rejection (99.5%+)",
      "Energy recovery systems",
      "Scalable for any capacity"
    ],
    problem: {
      title: "Freshwater Scarcity in Coastal & Arid Regions",
      description: "Many coastal areas, islands, and water-scarce regions lack access to freshwater despite being surrounded by seawater. Brackish groundwater sources are too salty for direct consumption or agricultural use, and transporting freshwater is expensive and unsustainable."
    },
    solution: {
      title: "Desalination — Unlimited Freshwater from the Sea",
      description: "Our desalination plants use advanced Reverse Osmosis membrane technology with energy recovery devices to convert seawater (up to 45,000 ppm TDS) into safe, potable freshwater. These systems provide a reliable, independent water source for any location."
    },
    features: [
      { icon: "efficiency", title: "High Salt Rejection", description: "Advanced RO membranes achieve 99.5%+ salt rejection from seawater." },
      { icon: "maintenance", title: "Energy Recovery", description: "Pressure exchangers recover energy from brine, reducing electricity costs by 40%." },
      { icon: "energy", title: "Corrosion Resistant", description: "Super duplex steel, FRP, and titanium components for marine-grade durability." },
      { icon: "lifespan", title: "Reliable Supply", description: "24/7 operation capability providing consistent freshwater regardless of season." },
      { icon: "custom", title: "Any Scale", description: "From small containerized units to large municipal desalination facilities." },
      { icon: "install", title: "Turnkey Solution", description: "Complete design, fabrication, installation, and operational training." }
    ],
    applications: ["Coastal Municipalities", "Island Communities", "Hotels & Resorts", "Naval & Maritime", "Industrial Facilities", "Agriculture", "Emergency Relief", "Off-Grid Locations"],
    process: [
      { step: 1, title: "Water Sampling", description: "Collect and analyze seawater/brackish water for TDS, salinity, and contaminants." },
      { step: 2, title: "Feasibility Study", description: "Assess intake options, discharge, energy availability, and environmental impact." },
      { step: 3, title: "System Design", description: "Engineer pre-treatment, RO, post-treatment, and energy recovery systems." },
      { step: 4, title: "Fabrication", description: "Build and assemble all components with marine-grade materials." },
      { step: 5, title: "Installation", description: "Complete site installation, intake/outfall construction, and piping." },
      { step: 6, title: "Commissioning", description: "System startup, membrane conditioning, and output water quality verification." }
    ],
    specs: {
      capacity: ["1,000 LPH", "5,000 LPH", "10,000 LPH", "50,000 LPH", "1,00,000 LPH", "Custom"],
      waterSource: ["Seawater", "Brackish Groundwater", "Coastal Well Water"],
      applications: ["Municipal", "Industrial", "Hospitality", "Maritime", "Agriculture"]
    },
    benefitCards: [
      { title: "Unlimited Supply", description: "The ocean provides an inexhaustible source of freshwater through desalination." },
      { title: "Water Independence", description: "Eliminate dependence on rainfall, rivers, and municipal supply." },
      { title: "WHO Standard", description: "Output water meets World Health Organization drinking water standards." },
      { title: "Energy Efficient", description: "Modern ERDs reduce energy consumption to as low as 3 kWh per cubic meter." },
      { title: "Year-Round Reliability", description: "Consistent operation unaffected by droughts, seasons, or rainfall patterns." },
      { title: "Marine-Grade Build", description: "Corrosion-resistant materials ensure durability in coastal environments." },
      { title: "Minimal Environmental Impact", description: "Responsible brine management and eco-friendly discharge solutions." },
      { title: "Remote Operation", description: "Fully automated with remote monitoring and control capabilities." }
    ],
    faqs: [
      { question: "How does desalination work?", answer: "Desalination uses Reverse Osmosis (RO) technology to force seawater through semi-permeable membranes under high pressure. The membranes allow water molecules to pass through while blocking salt and other dissolved solids, producing clean freshwater." },
      { question: "Is desalinated water safe to drink?", answer: "Yes, desalinated water meets WHO drinking water standards. After RO treatment, the water undergoes post-treatment including remineralization and disinfection to ensure it is safe, healthy, and pleasant-tasting." },
      { question: "How much does a desalination plant cost?", answer: "Costs vary based on capacity, water source salinity, and site requirements. Small containerized units start at a competitive price point. Contact us for a customized feasibility study and quotation." },
      { question: "How much electricity does desalination use?", answer: "Modern desalination plants with energy recovery devices consume approximately 3-5 kWh per cubic meter of freshwater produced — significantly less than older systems. We optimize energy efficiency in every design." },
      { question: "What happens to the salt/brine?", answer: "Concentrated brine is managed through controlled dilution and environmentally responsible discharge. We design brine disposal systems that minimize environmental impact while complying with all regulations." },
      { question: "Can desalination treat brackish water too?", answer: "Yes, brackish water (TDS 1,000-15,000 ppm) is actually easier and less energy-intensive to desalinate than seawater. We design systems optimized for the specific salinity of your water source." },
      { question: "How long does a desalination plant last?", answer: "The civil and mechanical infrastructure lasts 20-25+ years. RO membranes typically need replacement every 3-5 years, and pumps and instruments are serviced periodically through our AMC programs." },
      { question: "Do you provide maintenance for desalination plants?", answer: "Yes, we offer comprehensive operation and maintenance contracts including membrane cleaning, chemical dosing optimization, equipment servicing, and 24/7 emergency support." }
    ],
    relatedServices: ["ro-plant", "uf-plant", "water-softener"],
    metaTitle: "Desalination Plant Installation in Kerala | Seawater RO | Samudhra Water Solutions",
    metaDescription: "Advanced desalination plant installation in Kerala. Convert seawater to drinking water. Energy-efficient RO technology. Custom designs for resorts, industries & communities.",
    keywords: "desalination plant Kerala, seawater RO, brackish water treatment, water scarcity solution, Samudhra water solutions"
  },
  {
    num: "06",
    slug: "iron-removal-plant",
    title: "Iron Removal Plant (IRP)",
    tagline: "Eliminate iron stains, metallic taste, and unpleasant odor from your water supply.",
    shortDescription: "Remove excess iron from borewell water to eliminate stains, metallic taste, and unpleasant odor. Our IRP systems deliver crystal-clear, iron-free water for homes, businesses, and industries.",
    image: "/images/products/Iron Remover Plant IRP.jpg",
    heroImage: "/images/products/Iron Remover Plant IRP.jpg",
    categories: ["residential", "commercial", "industrial", "iron-water"],
    idealFor: ["Homes", "Villas", "Apartments", "Hotels", "Factories", "Restaurants"],
    benefits: [
      "Removes iron & manganese",
      "Crystal clear water output",
      "Low maintenance design",
      "Protects plumbing & appliances",
      "Long operational life"
    ],
    problem: {
      title: "Iron in Water Causes Staining, Bad Taste & Damage",
      description: "High iron content in borewell water is a common problem across Kerala. Iron causes reddish-brown stains on fixtures, metallic taste in food and drinks, unpleasant odor, clogged pipes, and damaged appliances. It also discolors laundry and makes water visually unappealing."
    },
    solution: {
      title: "IRP — Advanced Iron Removal Technology",
      description: "Our Iron Removal Plants use a combination of aeration, oxidation, and media filtration (catalytic media/manganese greensand) to convert dissolved ferrous iron into filterable ferric particles. The result is crystal-clear, odor-free water with iron levels below 0.1 ppm."
    },
    features: [
      { icon: "efficiency", title: "High Iron Removal", description: "Reduces iron from 5+ ppm to below 0.1 ppm — exceeding BIS drinking water standards." },
      { icon: "maintenance", title: "Auto-Backwash", description: "Automatic backwash systems clean the filter media, maintaining consistent performance." },
      { icon: "energy", title: "Chemical-Free Option", description: "Aeration-based designs remove iron without chemicals for residential applications." },
      { icon: "lifespan", title: "Durable Media", description: "Premium filter media lasts 5-7 years before needing replacement." },
      { icon: "custom", title: "Custom Sizing", description: "Sized precisely for your flow rate and iron concentration levels." },
      { icon: "install", title: "Quick Installation", description: "Most residential systems installed and operational within a single day." }
    ],
    applications: ["Residential Homes", "Apartment Complexes", "Hotels & Restaurants", "Schools & Hospitals", "Industrial Facilities", "Agricultural Farms", "Commercial Buildings", "Food Processing Units"],
    process: [
      { step: 1, title: "Water Testing", description: "Lab analysis of your borewell water for iron, manganese, pH, and TDS levels." },
      { step: 2, title: "Site Inspection", description: "Assess plumbing layout, tank location, and installation requirements." },
      { step: 3, title: "Solution Design", description: "Select the right IRP technology and capacity based on test results." },
      { step: 4, title: "Installation", description: "Professional installation with proper plumbing connections and backwash setup." },
      { step: 5, title: "Testing", description: "Verify output water quality with before/after iron level comparison." },
      { step: 6, title: "Maintenance Support", description: "Scheduled media replacement, backwash optimization, and performance monitoring." }
    ],
    specs: {
      capacity: ["500 LPH", "1,000 LPH", "2,000 LPH", "5,000 LPH", "10,000 LPH", "Custom"],
      waterSource: ["Borewell", "Open Well", "River Water", "Groundwater"],
      applications: ["Residential", "Commercial", "Industrial", "Agricultural"]
    },
    benefitCards: [
      { title: "Crystal Clear Water", description: "Transforms reddish-brown water into sparkling clear output." },
      { title: "No More Stains", description: "Eliminates iron stains on fixtures, tiles, and clothing permanently." },
      { title: "Better Tasting Water", description: "Removes metallic taste and unpleasant iron odor from water." },
      { title: "Protects Plumbing", description: "Prevents iron deposits from clogging pipes and damaging valves." },
      { title: "Appliance Protection", description: "Extends the life of water heaters, washing machines, and RO systems." },
      { title: "Clean Laundry", description: "No more yellow or rust-colored stains on white clothes." },
      { title: "Healthy Water", description: "Iron levels reduced to safe BIS drinking water standards." },
      { title: "Low Running Cost", description: "Minimal electricity and maintenance costs for daily operation." }
    ],
    faqs: [
      { question: "How do I know if my water has high iron?", answer: "Signs of high iron include reddish-brown stains on fixtures, metallic taste, yellow/brown discoloration, sediment in water, and iron deposits in pipes. A simple water test can confirm the exact iron level in parts per million (ppm)." },
      { question: "How much does an Iron Removal Plant cost?", answer: "Residential iron removal systems start at competitive prices. The cost depends on iron concentration, flow rate required, and system capacity. Contact us for free water testing and a customized quote." },
      { question: "Does the IRP need electricity?", answer: "Basic gravity-fed aeration systems work without electricity. Automated systems with backwash require a small pump. Power consumption is minimal — comparable to a household water pump." },
      { question: "How often does the filter media need replacement?", answer: "Premium catalytic media typically lasts 5-7 years with proper backwashing. Manganese greensand may need replacement every 3-5 years depending on iron load and water volume." },
      { question: "Can the IRP also remove manganese?", answer: "Yes, our iron removal systems are designed to remove both iron and manganese simultaneously. The same oxidation and filtration process handles both contaminants effectively." },
      { question: "Will it work for very high iron levels (5+ ppm)?", answer: "Yes, for high iron concentrations, we design multi-stage treatment systems with enhanced aeration and oxidation to handle iron levels exceeding 5 ppm effectively." },
      { question: "Is installation disruptive to my daily water supply?", answer: "Most residential installations are completed within a single day. We plan the work to minimize disruption to your water supply and test everything before handover." },
      { question: "Do you offer a warranty and maintenance?", answer: "Yes, all our iron removal systems come with a comprehensive warranty. We also offer AMC plans covering filter media replacement, backwash optimization, and performance monitoring." }
    ],
    relatedServices: ["water-softener", "ro-plant", "uf-plant"],
    metaTitle: "Iron Removal Plant Installation in Kerala | IRP | Samudhra Water Solutions",
    metaDescription: "Professional iron removal plant installation in Kerala. Remove iron stains, metallic taste & odor from borewell water. Free water testing. 16+ years experience.",
    keywords: "iron removal plant Kerala, IRP installation, iron water treatment, borewell water iron removal, Samudhra water solutions"
  },
  {
    num: "07",
    slug: "ro-plant",
    title: "RO Plant (Reverse Osmosis)",
    tagline: "High-performance reverse osmosis systems from 250 LPH to 1,00,000 LPH — engineered for purity.",
    shortDescription: "From compact 250 LPH systems for offices to massive 1,00,000 LPH industrial plants, our RO systems reduce TDS, remove pathogens, and deliver premium-quality purified water for every scale.",
    image: "/images/products/100000 LPH RO plant.jpg",
    heroImage: "/images/products/100000 LPH RO plant.jpg",
    categories: ["commercial", "industrial", "salty-water", "hard-water", "iron-water"],
    idealFor: ["Industries", "Hospitals", "Hotels", "Apartments", "Offices", "Schools"],
    benefits: [
      "Removes 95-99% TDS",
      "Eliminates pathogens & bacteria",
      "Handles salty & hard water",
      "Scalable 250–1,00,000 LPH",
      "BIS/IS standard compliant"
    ],
    problem: {
      title: "High TDS & Contaminants Make Water Unsafe",
      description: "Many water sources across Kerala — borewells, coastal groundwater, and industrial areas — contain dangerously high Total Dissolved Solids (TDS), heavy metals, bacteria, and chemical contaminants. This water is unsafe for drinking, causes equipment scaling, and fails to meet industrial quality standards."
    },
    solution: {
      title: "RO Plant — Complete Purification at Scale",
      description: "Our Reverse Osmosis plants force water through semi-permeable membranes at high pressure, rejecting 95-99% of dissolved solids, bacteria, viruses, and chemical contaminants. With systems from 250 LPH to 1,00,000 LPH, we deliver pure, safe water for any application at any scale."
    },
    features: [
      { icon: "efficiency", title: "99% TDS Rejection", description: "Advanced thin-film composite membranes remove virtually all dissolved contaminants." },
      { icon: "maintenance", title: "Multi-Stage Design", description: "Pre-treatment, RO, and post-treatment stages ensure consistent output quality." },
      { icon: "energy", title: "Energy Optimized", description: "High-efficiency pumps and energy recovery for lower electricity costs." },
      { icon: "lifespan", title: "24/7 Operation", description: "Industrial-grade components designed for continuous, round-the-clock operation." },
      { icon: "custom", title: "Any Capacity", description: "From 250 LPH office systems to 1,00,000 LPH industrial mega-plants." },
      { icon: "install", title: "PLC Controlled", description: "Automated operation with real-time monitoring, alarms, and remote access." }
    ],
    applications: ["Industrial Manufacturing", "Hospitals & Healthcare", "Hotels & Hospitality", "Apartment Complexes", "Schools & Colleges", "Corporate Offices", "Food & Beverage", "Pharmaceutical"],
    process: [
      { step: 1, title: "Water Analysis", description: "Comprehensive source water analysis for TDS, hardness, iron, bacteria, and pH." },
      { step: 2, title: "Capacity Planning", description: "Calculate daily water demand and peak flow requirements." },
      { step: 3, title: "System Design", description: "Engineer multi-stage RO with appropriate pre-treatment and post-treatment." },
      { step: 4, title: "Installation", description: "Complete mechanical, electrical, and plumbing installation at your facility." },
      { step: 5, title: "Commissioning", description: "Membrane conditioning, system tuning, and output quality verification." },
      { step: 6, title: "AMC & Support", description: "Comprehensive maintenance contracts with 24/7 emergency support." }
    ],
    specs: {
      capacity: ["250 LPH", "500 LPH", "1,000 LPH", "5,000 LPH", "10,000 LPH", "50,000 LPH", "1,00,000 LPH"],
      waterSource: ["Borewell", "Municipal", "River", "Sea Water", "Brackish Water"],
      applications: ["Industrial", "Commercial", "Institutional", "Hospitals", "Hotels"]
    },
    benefitCards: [
      { title: "Safe Drinking Water", description: "Removes 99.9% of bacteria, viruses, and harmful dissolved contaminants." },
      { title: "TDS Reduction", description: "Reduces TDS from 2000+ ppm to safe drinking levels (below 50 ppm)." },
      { title: "Heavy Metal Removal", description: "Effectively removes arsenic, lead, mercury, and other dangerous metals." },
      { title: "Consistent Quality", description: "Online TDS monitoring ensures consistent output quality 24/7." },
      { title: "Reduces Scaling", description: "Prevents mineral deposits in pipes, boilers, and industrial equipment." },
      { title: "Better Taste", description: "Significantly improves water taste by removing dissolved salts and chemicals." },
      { title: "Compact Design", description: "Space-efficient skid-mounted systems for easy installation." },
      { title: "Smart Automation", description: "PLC controls with auto-flush, auto-shutdown, and remote monitoring." }
    ],
    faqs: [
      { question: "What size RO plant do I need?", answer: "The required capacity depends on your daily water consumption and peak demand. For offices (25-50 people), a 250-500 LPH system is typical. For apartments (100+ families), 2000-5000 LPH. For industries, 10,000 LPH and above. We help size the system based on your specific requirements." },
      { question: "How much does a commercial RO plant cost?", answer: "Costs depend on capacity, source water quality, and required output standard. Small commercial systems (250 LPH) are very affordable, while large industrial plants (50,000+ LPH) are significant investments. Contact us for a customized quotation." },
      { question: "How often do RO membranes need replacement?", answer: "With proper pre-treatment and maintenance, RO membranes typically last 3-5 years. Membrane life depends on source water quality, operating pressure, and cleaning frequency." },
      { question: "Can RO treat seawater?", answer: "Yes, our seawater RO (SWRO) systems use special high-pressure pumps and seawater-grade membranes to treat water with TDS up to 45,000 ppm, converting it to safe drinking water." },
      { question: "What pre-treatment is needed for RO?", answer: "Typical pre-treatment includes sediment filtration, activated carbon filtration, water softening, and antiscalant dosing. The exact pre-treatment depends on your source water quality." },
      { question: "Is there water wastage in RO?", answer: "RO systems produce concentrated reject water (brine). Modern systems achieve 50-75% recovery rates, and reject water can often be used for gardening, floor cleaning, or toilet flushing." },
      { question: "Do you provide RO plant maintenance?", answer: "Yes, our AMC plans cover membrane cleaning, filter replacement, pump servicing, chemical dosing optimization, and 24/7 emergency support for all our RO installations." },
      { question: "Can the RO plant be automated?", answer: "Yes, all our commercial and industrial RO plants feature PLC-based automation with auto-start, auto-flush, high-pressure cutoff, tank level control, and optional remote monitoring via mobile app." }
    ],
    relatedServices: ["uf-plant", "water-softener", "iron-removal-plant"],
    metaTitle: "RO Plant Installation in Kerala | 250 LPH to 1,00,000 LPH | Samudhra Water Solutions",
    metaDescription: "Commercial & industrial RO plant installation in Kerala. From 250 LPH to 1,00,000 LPH. TDS removal, bacteria elimination. Free water testing. 16+ years experience.",
    keywords: "RO plant Kerala, reverse osmosis plant installation, commercial RO, industrial RO plant, water purification Kerala"
  },
  {
    num: "08",
    slug: "water-softener",
    title: "Water Softener",
    tagline: "End hard water problems forever — protect your pipes, appliances, and family.",
    shortDescription: "Remove hardness-causing calcium, magnesium, and iron ions through proven ion exchange technology. Our water softeners prevent scaling, extend appliance life, and improve daily water quality.",
    image: "/images/products/Water softening plant.jpg",
    heroImage: "/images/products/Water softening plant.jpg",
    categories: ["residential", "commercial", "industrial", "iron-water", "hard-water"],
    idealFor: ["Homes", "Villas", "Apartments", "Hotels", "Hospitals", "Boilers"],
    benefits: [
      "Removes calcium & magnesium",
      "Prevents scale buildup",
      "Extends appliance lifespan",
      "Softer skin & hair",
      "Automatic regeneration"
    ],
    problem: {
      title: "Hard Water Destroys Pipes, Appliances & Comfort",
      description: "Hard water contains high levels of calcium and magnesium that form white scale deposits inside pipes, water heaters, washing machines, and bathroom fixtures. This reduces water flow, increases energy bills, shortens appliance life, causes dry skin and dull hair, and leaves soap scum on surfaces."
    },
    solution: {
      title: "Water Softener — Ion Exchange Technology",
      description: "Our water softeners use high-capacity resin beads to exchange hardness-causing calcium and magnesium ions with sodium ions. The result is soft water that prevents scaling, protects your plumbing and appliances, improves soap lathering, and leaves skin and hair feeling noticeably softer."
    },
    features: [
      { icon: "efficiency", title: "Complete Softening", description: "Reduces hardness from 500+ ppm to below 50 ppm for genuinely soft water." },
      { icon: "maintenance", title: "Auto Regeneration", description: "Timer or meter-based automatic regeneration — set it and forget it." },
      { icon: "energy", title: "No Electricity Needed", description: "Many residential models operate on water pressure alone — zero power consumption." },
      { icon: "lifespan", title: "Premium Resins", description: "High-capacity, food-grade resins that last 5-8 years with proper care." },
      { icon: "custom", title: "Right-Sized", description: "Systems sized for your specific hardness level, family size, and water usage." },
      { icon: "install", title: "Same-Day Install", description: "Most residential installations completed within a few hours." }
    ],
    applications: ["Residential Homes", "Apartment Complexes", "Hotels & Hospitality", "Hospitals & Clinics", "Industrial Boilers", "Cooling Towers", "Laundry Services", "Commercial Buildings"],
    process: [
      { step: 1, title: "Water Testing", description: "Test your water for hardness (calcium, magnesium) and TDS levels." },
      { step: 2, title: "System Selection", description: "Choose the right softener capacity based on hardness and daily consumption." },
      { step: 3, title: "Installation", description: "Professional plumbing connection at your water inlet point." },
      { step: 4, title: "Resin Charging", description: "Load premium ion exchange resins and perform initial regeneration." },
      { step: 5, title: "Testing", description: "Verify output water hardness and ensure proper regeneration cycle." },
      { step: 6, title: "Maintenance Plan", description: "Schedule salt refills, resin checks, and annual maintenance visits." }
    ],
    specs: {
      capacity: ["500 LPH", "1,000 LPH", "2,000 LPH", "5,000 LPH", "10,000 LPH", "Custom"],
      waterSource: ["Borewell", "Municipal Supply", "Groundwater"],
      applications: ["Residential", "Commercial", "Industrial", "Hospitality", "Healthcare"]
    },
    benefitCards: [
      { title: "Scale-Free Pipes", description: "Prevents white calcium deposits inside pipes and fixtures." },
      { title: "Longer Appliance Life", description: "Water heaters, washing machines, and dishwashers last years longer." },
      { title: "Lower Energy Bills", description: "Scale-free heaters are 30% more efficient — saving electricity costs." },
      { title: "Better Lathering", description: "Soap and shampoo lather richly, reducing detergent consumption." },
      { title: "Softer Skin & Hair", description: "Soft water is noticeably gentler on skin and leaves hair silkier." },
      { title: "Spot-Free Surfaces", description: "No more white spots on bathroom tiles, faucets, and glassware." },
      { title: "Cleaner Laundry", description: "Clothes feel softer, colors stay brighter, and whites stay white." },
      { title: "Simple Maintenance", description: "Just add salt periodically — the system handles the rest automatically." }
    ],
    faqs: [
      { question: "How do I know if I have hard water?", answer: "Signs include white scale deposits on faucets, poor soap lathering, dry skin after bathing, stiff laundry, and cloudy spots on glassware. A simple water test can measure your exact hardness level in ppm." },
      { question: "How much does a water softener cost?", answer: "Residential water softeners are very affordably priced. The cost depends on capacity, automation level, and installation requirements. Contact us for free water testing and a customized quote." },
      { question: "Does a water softener need electricity?", answer: "Many residential models operate purely on water pressure with timer-based mechanical regeneration — no electricity required. Automated digital models may need a small power connection." },
      { question: "How often do I need to add salt?", answer: "Salt consumption depends on water hardness and daily usage. Typically, residential softeners need salt replenishment every 1-3 months. We provide guidance on the right salt type and quantity." },
      { question: "Is softened water safe to drink?", answer: "Yes, softened water is safe to drink. The sodium added during the ion exchange process is minimal. However, for drinking purposes, we recommend using an RO purifier for the best taste and purity." },
      { question: "Can a softener also remove iron?", answer: "Standard water softeners can handle low iron levels (up to 1-2 ppm). For higher iron content, we recommend a dedicated Iron Removal Plant as a pre-treatment stage before the softener." },
      { question: "How long does a water softener last?", answer: "The softener tank and controls last 15-20 years. The ion exchange resin typically needs replacement every 5-8 years depending on usage and water quality." },
      { question: "Do you service water softeners from other brands?", answer: "Yes, we service and maintain water softeners from all major brands. We can also replace resins, upgrade control valves, and optimize regeneration settings for any existing system." }
    ],
    relatedServices: ["iron-removal-plant", "ro-plant", "water-tank-cleaning"],
    metaTitle: "Water Softener Installation in Kerala | Hard Water Treatment | Samudhra Water Solutions",
    metaDescription: "Professional water softener installation in Kerala. Remove hard water scaling, protect appliances, enjoy softer skin. Free water testing. Residential & commercial solutions.",
    keywords: "water softener Kerala, hard water treatment, water softening plant, calcium removal, Samudhra water solutions"
  },
  {
    num: "09",
    slug: "multibrand-purifier-servicing",
    title: "MultiBrand Water Purifier Servicing",
    tagline: "Expert repair and maintenance for all water purifier brands — one call, one solution.",
    shortDescription: "One-stop service center for all water purifier brands. We provide filter replacement, membrane cleaning, repair, and annual maintenance for Kent, Aquaguard, Pureit, LivPure, and all other brands.",
    image: "/images/products/Multibrand Water Purifiers.png",
    heroImage: "/images/products/Multibrand Water Purifiers.png",
    categories: ["residential"],
    idealFor: ["Homes", "Offices", "Restaurants", "Schools", "Clinics"],
    benefits: [
      "Service all purifier brands",
      "Genuine spare parts",
      "Same-day service available",
      "Affordable pricing",
      "Trained technicians"
    ],
    problem: {
      title: "Unserviced Purifiers Deliver Unsafe Water",
      description: "Water purifiers need regular maintenance — filter changes, membrane cleaning, and UV lamp replacement. An unserviced purifier can become a breeding ground for bacteria, pass contaminants through worn filters, and ultimately deliver water that is worse than tap water."
    },
    solution: {
      title: "MultiBrand Servicing — All Brands, One Expert Team",
      description: "Our trained technicians service water purifiers of every brand — Kent, Aquaguard, Pureit, LivPure, Blue Star, AO Smith, and more. We provide genuine spare parts, expert repairs, and comprehensive AMC plans to keep your purifier performing at its best."
    },
    features: [
      { icon: "efficiency", title: "All Brands Covered", description: "Kent, Aquaguard, Pureit, LivPure, Blue Star, AO Smith, and 50+ more brands." },
      { icon: "maintenance", title: "Genuine Spares", description: "Authentic filters, membranes, and parts for reliable performance." },
      { icon: "energy", title: "Same-Day Service", description: "Quick response with same-day or next-day service across Thiruvananthapuram." },
      { icon: "lifespan", title: "Trained Experts", description: "Certified technicians with deep knowledge of all purifier technologies." },
      { icon: "custom", title: "AMC Plans", description: "Annual maintenance contracts with scheduled visits and priority support." },
      { icon: "install", title: "Transparent Pricing", description: "Upfront pricing with no hidden charges — full invoice provided." }
    ],
    applications: ["Residential Homes", "Corporate Offices", "Restaurants & Cafes", "Schools & Colleges", "Clinics & Hospitals", "Hotels & Guest Houses", "Government Offices", "Retail Shops"],
    process: [
      { step: 1, title: "Service Request", description: "Call, WhatsApp, or book online — tell us your purifier brand and issue." },
      { step: 2, title: "Diagnosis", description: "Our technician inspects your purifier and identifies the problem." },
      { step: 3, title: "Quote Approval", description: "Transparent price quote for parts and service before any work begins." },
      { step: 4, title: "Repair/Service", description: "Expert repair, filter replacement, or complete service performed." },
      { step: 5, title: "Water Quality Test", description: "TDS check and output water quality verification after service." },
      { step: 6, title: "Next Service Reminder", description: "Automatic reminders for your next scheduled service date." }
    ],
    specs: {
      capacity: ["All Residential Models", "Commercial Models", "Under-sink", "Wall-mounted", "Countertop", "Industrial Dispensers"],
      waterSource: ["Any Source"],
      applications: ["Residential", "Commercial", "Institutional"]
    },
    benefitCards: [
      { title: "Brand-Agnostic", description: "Expert service for 50+ water purifier brands — no brand restrictions." },
      { title: "Genuine Parts", description: "Only authentic spares used — never cheap knockoffs that compromise quality." },
      { title: "Quick Turnaround", description: "Most services completed within 1-2 hours at your home or office." },
      { title: "Transparent Pricing", description: "Clear upfront quotes with no hidden charges or surprise fees." },
      { title: "TDS Verification", description: "Output water quality tested and verified after every service." },
      { title: "Service Warranty", description: "Warranty on all parts replaced and service work performed." },
      { title: "AMC Benefits", description: "Annual plans with scheduled visits, priority booking, and discounted parts." },
      { title: "Pan-City Coverage", description: "Doorstep service across Thiruvananthapuram and surrounding areas." }
    ],
    faqs: [
      { question: "Which water purifier brands do you service?", answer: "We service all major brands including Kent, Aquaguard, Pureit, LivPure, Blue Star, AO Smith, Havells, Tata Swach, Hindware, and 40+ other domestic and international brands." },
      { question: "How much does water purifier servicing cost?", answer: "Basic servicing starts at very affordable rates. The cost depends on the purifier model, filters/parts needed, and type of service. We provide a clear quote before starting any work." },
      { question: "How often should I service my water purifier?", answer: "We recommend servicing every 6 months for optimal performance. Pre-filters should be changed every 3-6 months, RO membranes every 12-18 months, and UV lamps annually." },
      { question: "Do you provide doorstep service?", answer: "Yes, all our services are performed at your doorstep. Our technicians carry tools, testing equipment, and common spare parts for on-the-spot service." },
      { question: "Can you repair an old water purifier?", answer: "Yes, we repair purifiers of all ages. If a purifier is beyond economical repair, we'll advise you honestly and offer competitive options for a new system." },
      { question: "Do you use genuine spare parts?", answer: "Yes, we use only genuine/OEM-equivalent spare parts from authorized suppliers. We never use cheap knockoffs that could compromise water quality or purifier performance." },
      { question: "What is included in your AMC plan?", answer: "Our AMC typically includes 2-3 scheduled service visits, filter replacements, sanitization, TDS testing, and priority emergency support — all at a discounted annual rate." },
      { question: "Is there a warranty on service work?", answer: "Yes, all parts replaced carry a manufacturer warranty, and our service work is warranted for 30-90 days depending on the type of repair performed." }
    ],
    relatedServices: ["ro-plant", "iron-removal-plant", "water-softener"],
    metaTitle: "MultiBrand Water Purifier Service in Trivandrum | Samudhra Water Solutions",
    metaDescription: "Expert water purifier servicing for all brands in Thiruvananthapuram. Kent, Aquaguard, Pureit, LivPure repair & maintenance. Genuine spares. Same-day doorstep service.",
    keywords: "water purifier service Trivandrum, Kent service center, Aquaguard repair, multi-brand purifier maintenance, Samudhra water solutions"
  },
  {
    num: "10",
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    tagline: "Professional water tank cleaning for safe, hygienic water storage — every drop matters.",
    shortDescription: "Ensure safe, clean water storage with professional tank cleaning. We remove sludge, algae, bacteria, and sediment from overhead and underground tanks using advanced cleaning and disinfection methods.",
    image: "/images/new_home/water cleaning.png",
    heroImage: "/images/new_home/water cleaning.png",
    categories: ["residential", "commercial"],
    idealFor: ["Homes", "Apartments", "Hotels", "Hospitals", "Schools", "Offices"],
    benefits: [
      "Removes sludge & sediment",
      "Kills bacteria & algae",
      "UV/chemical disinfection",
      "Extends tank life",
      "Certified cleaning process"
    ],
    problem: {
      title: "Dirty Tanks Contaminate Your Entire Water Supply",
      description: "Water storage tanks accumulate sludge, sediment, algae, and bacteria over time — even if your source water is clean. An uncleaned tank becomes a breeding ground for pathogens that contaminate every tap in your home. This is a hidden health risk that most families ignore until illness strikes."
    },
    solution: {
      title: "Professional Tank Cleaning & Disinfection",
      description: "Our certified team performs thorough tank draining, high-pressure cleaning, sludge removal, scrubbing, and UV/chemical disinfection. We ensure your tank is hygienically clean and free from harmful bacteria, giving you genuinely safe water from every tap."
    },
    features: [
      { icon: "efficiency", title: "Deep Cleaning", description: "High-pressure washing removes all sludge, scale, and biofilm deposits." },
      { icon: "maintenance", title: "Disinfection", description: "UV treatment and food-grade chemical disinfection for complete sanitization." },
      { icon: "energy", title: "All Tank Types", description: "Overhead, underground, FRP, PVC, concrete, and stainless steel tanks." },
      { icon: "lifespan", title: "Quick Service", description: "Most residential tanks cleaned and refilled within 2-3 hours." },
      { icon: "custom", title: "Scheduled Plans", description: "6-month and annual cleaning schedules to maintain consistent hygiene." },
      { icon: "install", title: "Health Certificate", description: "Water quality testing report provided after every cleaning service." }
    ],
    applications: ["Residential Homes", "Apartment Complexes", "Hotels & Resorts", "Hospitals & Clinics", "Schools & Colleges", "Corporate Offices", "Industrial Facilities", "Government Buildings"],
    process: [
      { step: 1, title: "Inspection", description: "Assess tank condition, size, access points, and cleaning requirements." },
      { step: 2, title: "Draining", description: "Carefully drain the tank while minimizing water wastage." },
      { step: 3, title: "Sludge Removal", description: "Remove all sediment, sludge, and debris from the tank bottom." },
      { step: 4, title: "Scrubbing", description: "High-pressure scrubbing of walls, floor, and inlet/outlet areas." },
      { step: 5, title: "Disinfection", description: "UV treatment and/or food-grade chemical disinfection." },
      { step: 6, title: "Quality Check", description: "Refill, test water quality, and provide a hygiene certificate." }
    ],
    specs: {
      capacity: ["500 L", "1,000 L", "2,000 L", "5,000 L", "10,000 L", "Custom"],
      waterSource: ["Any Source"],
      applications: ["Residential", "Commercial", "Institutional", "Industrial"]
    },
    benefitCards: [
      { title: "Safe Drinking Water", description: "Clean tanks mean every tap delivers genuinely safe water." },
      { title: "Disease Prevention", description: "Removes bacteria, viruses, and parasites that cause waterborne diseases." },
      { title: "Algae Removal", description: "Eliminates green algae growth that thrives in unclean tanks." },
      { title: "Better Water Quality", description: "No more sediment, odor, or discoloration from dirty tanks." },
      { title: "Longer Tank Life", description: "Regular cleaning prevents corrosion and extends tank lifespan." },
      { title: "Efficient Water Flow", description: "Clean outlets and pipes ensure proper water pressure and flow." },
      { title: "Documented Hygiene", description: "Water quality reports and cleaning certificates for your records." },
      { title: "Affordable Service", description: "Competitive pricing with scheduled cleaning plans for ongoing protection." }
    ],
    faqs: [
      { question: "How often should I clean my water tank?", answer: "We recommend cleaning every 6 months for residential tanks and every 3 months for commercial/institutional tanks. Tanks in areas with high sediment or poor water quality may need more frequent cleaning." },
      { question: "How much does water tank cleaning cost?", answer: "Pricing depends on tank size, type, and location. Residential tank cleaning (500L-2000L) is very affordable. Contact us for a quick quote based on your tank specifications." },
      { question: "How long does the cleaning process take?", answer: "Most residential tanks (up to 2000L) are cleaned within 2-3 hours including draining, cleaning, disinfection, and refilling. Larger commercial tanks may take 4-6 hours." },
      { question: "Do I need to be present during cleaning?", answer: "Not necessarily. You can provide access and we'll handle the entire process. However, we recommend being available for the initial inspection and final handover." },
      { question: "What chemicals do you use for disinfection?", answer: "We use food-grade, WHO-approved disinfectants that are safe for drinking water storage. UV disinfection is also available as a chemical-free option." },
      { question: "Can you clean underground tanks?", answer: "Yes, we clean all types of tanks — overhead, underground, sump tanks, FRP tanks, PVC tanks, concrete tanks, and stainless steel tanks." },
      { question: "Do you provide a water quality report?", answer: "Yes, after every cleaning service, we test the water quality and provide a detailed report documenting the before/after condition and water safety parameters." },
      { question: "Can you set up a regular cleaning schedule?", answer: "Absolutely! We offer 6-month and annual cleaning plans with automatic reminders and priority scheduling for regular customers." }
    ],
    relatedServices: ["multibrand-purifier-servicing", "water-softener", "iron-removal-plant"],
    metaTitle: "Water Tank Cleaning Service in Trivandrum | Samudhra Water Solutions",
    metaDescription: "Professional water tank cleaning in Thiruvananthapuram. Remove sludge, bacteria & algae. UV disinfection. Overhead & underground tanks. Health certificate provided.",
    keywords: "water tank cleaning Trivandrum, tank cleaning service Kerala, overhead tank cleaning, underground tank cleaning, Samudhra water solutions"
  },
  {
    num: "11",
    slug: "swimming-pool-filtration",
    title: "Swimming Pool Filtration Plant",
    tagline: "Crystal-clear, safe pool water — engineered for hygiene, aesthetics, and compliance.",
    shortDescription: "Maintain crystal-clear, hygienic pool water with our professional filtration systems. We design, install, and maintain complete pool filtration and chemical dosing systems for residential and commercial pools.",
    image: "/images/products/Swimming Pool Filtration Plant.jpeg",
    heroImage: "/images/products/Swimming Pool Filtration Plant.jpeg",
    categories: ["residential", "commercial"],
    idealFor: ["Homes", "Hotels", "Resorts", "Clubs", "Fitness Centers", "Water Parks"],
    benefits: [
      "Crystal clear pool water",
      "Automatic chlorination",
      "Multi-grade sand filtration",
      "Energy-efficient pumps",
      "Regulatory compliant"
    ],
    problem: {
      title: "Unfiltered Pool Water Poses Health Risks",
      description: "Without proper filtration and chemical treatment, swimming pool water quickly becomes a breeding ground for bacteria, algae, and harmful pathogens. Cloudy, green, or smelly pool water is not just unappealing — it causes skin infections, ear infections, and respiratory issues. Commercial pools without proper treatment face regulatory violations."
    },
    solution: {
      title: "Pool Filtration — Complete Water Treatment System",
      description: "Our swimming pool filtration plants combine multi-grade sand filters, high-efficiency circulation pumps, automatic chemical dosing (chlorine/pH), and UV sanitizers to keep your pool water crystal-clear, pathogen-free, and compliant with health standards — year-round."
    },
    features: [
      { icon: "efficiency", title: "Multi-Grade Filtration", description: "Sand, gravel, and anthracite layers for thorough particle removal down to 10 microns." },
      { icon: "maintenance", title: "Auto Chemical Dosing", description: "Automated chlorine and pH dosing maintains perfect water chemistry 24/7." },
      { icon: "energy", title: "Energy Efficient", description: "Variable-speed pumps reduce electricity consumption by up to 70%." },
      { icon: "lifespan", title: "UV Sanitization", description: "Optional UV systems provide chemical-free pathogen elimination." },
      { icon: "custom", title: "Any Pool Size", description: "Systems designed for pools from 10,000L residential to 5,00,000L commercial." },
      { icon: "install", title: "Turnkey Service", description: "Complete design, installation, commissioning, and training included." }
    ],
    applications: ["Residential Pools", "Hotel & Resort Pools", "Club & Community Pools", "Water Parks", "Fitness Center Pools", "Therapeutic Pools", "Infinity Pools", "Commercial Swim Schools"],
    process: [
      { step: 1, title: "Pool Assessment", description: "Evaluate pool volume, usage patterns, and existing equipment condition." },
      { step: 2, title: "System Design", description: "Design filtration, circulation, and chemical dosing system for your pool." },
      { step: 3, title: "Equipment Selection", description: "Select pumps, filters, dosing systems, and controls for optimal performance." },
      { step: 4, title: "Installation", description: "Complete plumbing, electrical, and equipment installation." },
      { step: 5, title: "Commissioning", description: "System startup, water balancing, and chemical optimization." },
      { step: 6, title: "Maintenance Plan", description: "Regular water testing, equipment servicing, and seasonal maintenance." }
    ],
    specs: {
      capacity: ["10,000 L", "25,000 L", "50,000 L", "1,00,000 L", "2,50,000 L", "Custom"],
      waterSource: ["Municipal Supply", "Borewell", "Treated Water"],
      applications: ["Residential", "Commercial", "Hospitality", "Municipal", "Recreational"]
    },
    benefitCards: [
      { title: "Crystal Clear Water", description: "Consistently transparent, sparkling pool water that invites swimming." },
      { title: "Pathogen-Free", description: "Effective elimination of bacteria, viruses, and harmful microorganisms." },
      { title: "Algae Prevention", description: "Proper filtration and chemistry prevent green, black, and mustard algae." },
      { title: "Balanced Chemistry", description: "Automated dosing maintains perfect pH, chlorine, and alkalinity levels." },
      { title: "Regulatory Compliance", description: "Meet all health department and municipal pool safety standards." },
      { title: "Energy Savings", description: "Modern variable-speed pumps cut electricity costs dramatically." },
      { title: "Extended Season", description: "Properly treated pools stay usable longer with less winterization effort." },
      { title: "Reduced Maintenance", description: "Automated systems minimize manual cleaning and chemical handling." }
    ],
    faqs: [
      { question: "What size filtration system does my pool need?", answer: "The filtration system is sized based on pool volume and turnover rate. Residential pools typically need a 4-6 hour turnover, while commercial pools require 2-4 hours. We calculate the exact specifications based on your pool dimensions." },
      { question: "How much does a pool filtration plant cost?", answer: "Costs depend on pool size, equipment quality, and automation level. Contact us with your pool dimensions for a customized quotation including installation." },
      { question: "How often should pool water be tested?", answer: "We recommend testing pH and chlorine daily for commercial pools and 2-3 times per week for residential pools. Automated chemical dosing systems reduce manual testing requirements significantly." },
      { question: "Can you upgrade an existing pool filtration system?", answer: "Yes, we evaluate existing systems and recommend upgrades including energy-efficient pumps, automated dosing, UV sanitizers, or complete system replacements for better performance." },
      { question: "What chemicals are needed for pool maintenance?", answer: "Typical chemicals include chlorine (granules or liquid), pH adjusters (acid/soda ash), algaecide, and clarifier. Our automated dosing systems handle chemical addition automatically for consistent results." },
      { question: "How often does the sand filter need replacement?", answer: "Pool filter sand typically lasts 5-7 years before needing replacement. We recommend annual backwashing schedules and periodic sand inspections to maintain optimal filtration performance." },
      { question: "Do you provide pool maintenance contracts?", answer: "Yes, we offer weekly, bi-weekly, and monthly pool maintenance plans covering water testing, chemical balancing, equipment checks, cleaning, and seasonal start-up/shutdown services." },
      { question: "Can you install filtration for an existing pool?", answer: "Absolutely. We design and retrofit filtration systems for existing pools, whether they currently have no filtration or need an outdated system replaced with modern equipment." }
    ],
    relatedServices: ["uf-plant", "water-tank-cleaning", "multibrand-purifier-servicing"],
    metaTitle: "Swimming Pool Filtration Plant in Kerala | Samudhra Water Solutions",
    metaDescription: "Professional swimming pool filtration installation in Kerala. Crystal clear water, auto chemical dosing, energy-efficient pumps. Residential & commercial pools. Expert maintenance.",
    keywords: "pool filtration Kerala, swimming pool filter system, pool water treatment, pool maintenance, Samudhra water solutions"
  }
];

// Shared company trust stats
export const companyStats = [
  { number: "16+", label: "Years Experience", icon: "trophy" },
  { number: "1000+", label: "Successful Installations", icon: "check-circle" },
  { number: "50+", label: "Experienced Engineers", icon: "users" },
  { number: "24/7", label: "Customer Assistance", icon: "headset" }
];

export const whySamudhra = [
  { title: "16+ Years Experience", description: "Trusted water treatment expertise since 2009.", icon: "trophy" },
  { title: "1000+ Installations", description: "Successfully completed across Kerala and beyond.", icon: "check-circle" },
  { title: "Expert Engineers", description: "Certified professionals with deep domain knowledge.", icon: "users" },
  { title: "Custom Solutions", description: "Every system designed specifically for your water.", icon: "settings" },
  { title: "Genuine Parts", description: "Only authentic spares and consumables used.", icon: "shield" },
  { title: "Affordable Pricing", description: "Premium quality solutions at competitive prices.", icon: "tag" }
];

// Shared testimonials
export const testimonials = [
  {
    client: "Dr. K. Raghavan",
    entity: "Private Clinical Center, TVM",
    statement: "Samudhra precision-engineered our full 50,000 LPH reverse osmosis layout. Their custom media filter parameters handled our hard water iron properties flawlessly. Purity remains total.",
    rating: 5,
    initials: "KR",
    color: "#024095"
  },
  {
    client: "Meera Nair",
    entity: "Residential Villa, Kowdiar",
    statement: "We had Samudhra customize an automated brine softener and copper infusion system for our whole house. The white scale buildup inside our piping was instantly eliminated.",
    rating: 5,
    initials: "MN",
    color: "#07bee8"
  },
  {
    client: "Thomas Kurian",
    entity: "Commercial Complex, Thampanoor",
    statement: "Managing high-volume commercial properties requires absolute service accountability. Samudhra's maintenance contract team performs rigorous membrane audits like clockwork.",
    rating: 5,
    initials: "TK",
    color: "#024095"
  },
  {
    client: "George Mathew",
    entity: "Resident, Pattom",
    statement: "We had severe iron content in our well water. They analyzed the water test report and designed a custom iron removal filter. Now the water is crystal clear.",
    rating: 5,
    initials: "GM",
    color: "#07bee8"
  }
];

// Helper to get service by slug
export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}

// Helper to get related services
export function getRelatedServices(slugs) {
  return services.filter(s => slugs.includes(s.slug));
}
