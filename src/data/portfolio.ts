export type ProjectCategory = 'Product' | 'AI Agents' | 'BI' | 'Python / ML' | 'SQL' | 'Data' | 'Experiment';
export type PublicationType = 'Article' | 'Profile' | 'Feature' | 'Recognition' | 'Video';

export interface Profile {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  x: string;
  headline: string;
  tagline: string;
  intro: string;
  /** Third-person summary for entity recognition (search/AI systems, not just human readers). */
  bio: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CurrentWorkItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface ProjectCaseStudy {
  context: string;
  problem: string;
  contribution: string;
  approach: string;
  outcome: string;
}

export interface Project {
  title: string;
  category: ProjectCategory;
  blurb: string;
  image?: string;
  /** Square logo mark shown instead of the initials placeholder (e.g. for a company/product card). */
  logo?: string;
  href: string;
  tags: string[];
  /** Short label shown on the card, e.g. "Active Venture" or "Past Venture". */
  badge?: string;
  /** Full Context/Problem/Contribution/Approach/Outcome breakdown, shown only for significant projects. */
  caseStudy?: ProjectCaseStudy;
}

export interface Publication {
  type: PublicationType;
  title: string;
  source: string;
  date?: string;
  blurb: string;
  href: string;
  thumbnail?: string;
}

export interface NewsletterEdition {
  title: string;
  date: string;
  href?: string;
}

export interface Newsletter {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  editions: NewsletterEdition[];
}

export interface CapabilityGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
  location: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export const profile: Profile = {
  name: 'Tobi Oladimeji',
  location: 'Waterloo Region, Ontario, Canada',
  email: 'tobi@datafellowsai.com',
  linkedin: 'https://www.linkedin.com/in/tobioladimeji/',
  github: 'https://github.com/tobiolad',
  x: 'https://x.com/tobioladimeji_',
  headline: 'Building products, exploring ideas, and solving business problems through technology.',
  tagline: 'Exploring hard problems worth building a company around.',
  intro: 'I’ve worked across data, AI, and product development, from enterprise projects to building my own software products and businesses. I’m exploring new full-time roles in product, data, and AI, and open to building again when the right problem comes along.',
  bio: 'Tobi Oladimeji is a founder and product builder with a background in data analytics and AI. He founded Data Fellows and built Inscend, and is currently exploring his next opportunity in product, data, and AI.',
};

export const metrics: Metric[] = [
  { value: '5+', label: 'years across data & analytics' },
  { value: '1,600+', label: 'Data Fellows community members' },
  { value: '33+', label: 'countries reached' },
  { value: '30+', label: 'Python scripts delivered at PwC' },
  { value: '98%', label: 'data accuracy on enterprise migration' },
];

export const currentWork: CurrentWorkItem[] = [
  {
    eyebrow: 'Current work',
    title: 'Data Fellows',
    description: 'A global AI and data community with 1,600+ members across 33+ countries. Learning programs, professional development, industry partnerships, and community events.',
    href: 'https://datafellowsai.com/',
    linkLabel: 'Visit datafellowsai.com',
  },
  {
    eyebrow: 'Exploring next',
    title: 'What’s next',
    description: 'Exploring hard problems worth building a company around. Open to product, data, and AI roles, and to new venture opportunities where I can build, lead, or contribute.',
    href: '#contact',
    linkLabel: 'Get in touch',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Data Fellows',
    role: 'Founder & CEO',
    period: 'Aug 2022 — Present',
    summary: 'Founded Data Fellows, a global AI and data community with over 1,600 members across 33+ countries. Led learning programs, professional development initiatives, industry partnerships, and community events, bringing together professionals and organizations to make opportunities in technology more accessible.',
    tags: ['Community', 'Strategy', 'Partnerships'],
  },
  {
    company: 'Cohere',
    role: 'AI Data Trainer',
    period: 'Oct 2026 — Present · Independent Contractor',
    summary: 'Supporting machine learning data quality and evaluation workflows through ranking, auditing, error analysis and correction, quality assessment, and optimization feedback across text-based AI tasks.',
    tags: ['Data Annotation', 'AI Evaluation', 'Quality'],
  },
  {
    company: 'Inscend',
    role: 'Founder',
    period: 'Nov 2025 — Nov 2026',
    summary: 'Founded and launched an AI-powered B2B SaaS platform for ecommerce merchants. Led a distributed engineering team, engaged 50+ founders, ran Shopify merchant pilots, secured early paying customers, and established a development and referral agreement with SHOPLINE. Finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026.',
    tags: ['Ecommerce Technology', 'Product', 'Team Leadership'],
  },
  {
    company: 'Granted Technologies Inc.',
    role: 'Advisor',
    period: 'Oct 2025 — Aug 2026',
    summary: 'Advised on data architecture, quality controls, workflow design, automation, operational KPIs, and AI-assisted grant-data processes.',
    tags: ['Data Quality', 'Automation', 'AI Workflows'],
  },
  {
    company: 'Venture Learning Collective',
    role: 'Co-Founder',
    period: 'Feb 2026 — Jul 2026',
    summary: 'Helped establish Venture Learning Collective to support entrepreneurship education and funding readiness. Secured a C$2,800 micro-grant through Weston Frontlines and delivered the Youth Funding Readiness Lab with GRANTED. The program ran May 27 to June 25, 2026, with six virtual sessions and a final showcase, serving a core cohort of 10 participants, eight of whom remained active throughout. Final reporting took place in July 2026.',
    tags: ['Founder Education', 'Funding Readiness', 'Community'],
  },
  {
    company: 'Founder in Residence / Accelerator Programs',
    role: 'Founder in Residence',
    period: '2024 — 2026',
    summary: 'Participated in accelerator and founder-in-residence programs including BHive GEIP, Accelerator Centre RevLab, and League of Innovators, building founder skills alongside Data Fellows and Inscend.',
    tags: ['Accelerator', 'Founder Development'],
  },
  {
    company: 'ESGTree',
    role: 'Data Analyst & Machine Learning Engineer',
    period: 'Feb 2024 — Sep 2024',
    summary: 'Built Power BI reporting, supported SQL/Python workflows, and developed LLM-based document extraction that reduced manual data input by approximately 30%.',
    tags: ['Power BI', 'Python', 'SQL', 'LLMs'],
  },
  {
    company: 'PwC',
    role: 'Data Analyst',
    period: 'Sep 2022 — Nov 2023',
    summary: 'Supported a Dynamics AX to Dynamics 365 F&O transformation, led mapping sessions, built Python validation scripts, and delivered reporting.',
    tags: ['Data Migration', 'Python', 'SQL', 'Power BI'],
  },
  {
    company: 'Rollback Ally',
    role: 'Lead Data Analyst',
    period: 'Feb 2023 — Sep 2023',
    summary: 'Led data analysis and reporting work at Rollback Ally.',
    tags: ['Data Analysis', 'Reporting'],
  },
  {
    company: 'Metridash',
    role: 'Business Intelligence Analyst',
    period: 'Jan 2023 — May 2023',
    summary: 'Business intelligence and reporting work at Metridash.',
    tags: ['Business Intelligence', 'Reporting'],
  },
  {
    company: 'Analytic Company GmbH',
    role: 'Data Analyst',
    period: 'May 2022 — Nov 2022',
    summary: 'Data analysis work at Analytic Company GmbH.',
    tags: ['Data Analysis'],
  },
  {
    company: 'Quantum Analytics NG',
    role: 'Data Analyst Intern',
    period: 'Sep 2021 — Nov 2021',
    summary: 'Data analyst internship at Quantum Analytics NG.',
    tags: ['Data Analysis'],
  },
  {
    company: 'AgroMall',
    role: 'Business Intelligence Analyst Intern',
    period: 'Jun 2021 — Oct 2021',
    summary: 'Built operational dashboards and recurring reports across agricultural and financial workflows while improving validation and automation.',
    tags: ['Power BI', 'SQL', 'Excel', 'Python'],
  },
];

export const projects: Project[] = [
  {
    title: 'Inscend',
    category: 'Product',
    blurb: 'An AI-powered B2B SaaS platform for ecommerce merchants, founded and launched Nov 2025 — Nov 2026. Led a distributed engineering team, engaged 50+ founders, ran Shopify merchant pilots, secured early paying customers, and established a development and referral agreement with SHOPLINE. Finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026.',
    href: 'https://www.inscend.io/',
    tags: ['Ecommerce', 'Product', 'Shopify'],
    badge: 'Past Venture',
    caseStudy: {
      context: 'Independent merchants running ecommerce stores, often on Shopify, need to continuously track what’s affecting their sales and operations, but rarely have the time or tooling to do it well.',
      problem: 'Founders were spending time manually checking their stores instead of acting on what actually needed their attention.',
      contribution: 'Founded Inscend and led a distributed engineering team building the product end to end.',
      approach: 'Built an AI-powered B2B SaaS platform that monitors store activity, surfaces what needs attention, and prepares next steps, bringing the founder in when judgment is required. Validated the approach through customer discovery with 50+ founders and Shopify merchant pilots.',
      outcome: 'Secured early paying customers and a development and referral agreement with SHOPLINE. Selected as a finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026.',
    },
  },
  {
    title: 'Data Fellows',
    category: 'Product',
    blurb: 'A global AI and data community with 1,600+ members across 33+ countries, focused on professional development, technology education, community building, and industry partnerships.',
    href: 'https://datafellowsai.com/',
    tags: ['Community', 'Education', 'Data'],
    badge: 'Active Venture',
    caseStudy: {
      context: 'Many data and AI professionals, especially outside major tech hubs, lack access to structured learning, mentorship, and industry connections.',
      problem: 'Opportunities in data and AI weren’t evenly accessible, and there was no single place bringing practitioners together across regions.',
      contribution: 'Founded and lead Data Fellows, building its programs, partnerships, and community operations from the ground up.',
      approach: 'Built learning programs, professional development initiatives, industry partnerships, and community events, bringing together professionals and organizations across countries.',
      outcome: 'Grew it into a global AI and data community with 1,600+ members across 33+ countries.',
    },
  },
  {
    title: 'BizPilot AI',
    category: 'Experiment',
    blurb: 'An early experiment built through Data Fellows, started in 2025. It initially explored a marketplace connecting businesses with data professionals, then shifted toward AI-powered decision intelligence for small businesses. That work later informed Inscend.',
    href: 'https://www.producthunt.com/products/data-fellows',
    tags: ['AI', 'Decision Intelligence', 'Data Fellows'],
  },
  {
    title: 'Inscend Source Agent',
    category: 'AI Agents',
    blurb: 'AI-assisted discovery agent built for Inscend. Uses Gemini with Google Search grounding to find and score indie beauty and skincare brands and founders across Canada and Nigeria, surfacing signal strength, fit, and outreach angles.',
    href: 'https://github.com/tobiolad/inscend-source-agent',
    tags: ['AI Agents', 'Gemini API', 'React'],
  },
  {
    title: 'Granted Source Agent',
    category: 'AI Agents',
    blurb: 'AI agent built for Granted that discovers, filters, analyzes, and exports non-dilutive funding opportunities across Canada and the US, using Gemini with Google Search grounding.',
    href: 'https://github.com/tobiolad/granted-source-agent',
    tags: ['AI Agents', 'Gemini API', 'Funding'],
  },
  {
    title: 'Monitoring & Evaluation Dashboard',
    category: 'BI',
    blurb: 'Power BI reporting for field operations, geographic activity, visit status, pending work, and monitoring performance.',
    image: '/images/portfolio/m & e.png',
    href: 'https://github.com/tobiolad/Evaluation-Dashboard',
    tags: ['Power BI', 'DAX', 'Operations'],
  },
  {
    title: 'AgroWallet Dashboard',
    category: 'BI',
    blurb: 'Operational reporting across farmer profiles, financial activity, loans, disbursements, repayments, agents, and farm characteristics.',
    image: '/images/portfolio/agrowallet.png',
    href: 'https://github.com/tobiolad/Farmers-Dash',
    tags: ['Power BI', 'Financial Data', 'Analytics'],
  },
  {
    title: 'Tire Price Analysis',
    category: 'Python / ML',
    blurb: 'Analysis of 4,350 tire records combining Python EDA and Excel analysis to understand pricing and customer preferences.',
    image: '/images/portfolio/tire_price.jpg',
    href: 'https://github.com/tobiolad/tire-price-analysis',
    tags: ['Python', 'EDA', 'Excel'],
  },
  {
    title: 'Economic Freedom Analysis',
    category: 'Python / ML',
    blurb: 'Python analysis of the Fraser Institute’s Economic Freedom dataset, examining Canada’s standing on legal system, sound money, and trade openness to make an evidence-based case for it as a stable, high-opportunity market.',
    image: '/images/portfolio/canada_economic.jpeg',
    href: 'https://github.com/tobiolad/Economic-Freedom',
    tags: ['Python', 'Pandas', 'EDA'],
  },
  {
    title: 'Real-Time Seismic Monitoring',
    category: 'Data',
    blurb: 'Public-data ingestion and geospatial analysis using USGS earthquake data for automated seismic monitoring and reporting.',
    image: '/images/portfolio/seismic.png',
    href: 'https://medium.com/@Tobioladimeji_/exploring-geospatial-analysis-building-a-real-time-seismic-event-monitoring-solution-a0c197a52c61',
    tags: ['ArcGIS', 'Public APIs', 'Geospatial'],
  },
  {
    title: 'Ontario Community Project',
    category: 'SQL',
    blurb: 'SQL analysis of Ontario infrastructure data covering budgets, project status, completion timelines, and community-level decision support.',
    image: '/images/portfolio/ont_communities.jpg',
    href: 'https://github.com/tobiolad/ont-communities',
    tags: ['SQL', 'Infrastructure', 'Analysis'],
  },
  {
    title: 'COVID-19 Pandemic Dashboard',
    category: 'BI',
    blurb: 'Power BI dashboard tracking the global COVID-19 pandemic — countries affected, confirmed cases, and deaths.',
    image: '/images/portfolio/corona.png',
    href: 'https://github.com/tobiolad/Corona-Viz',
    tags: ['Power BI', 'DAX', 'Public Health'],
  },
  {
    title: 'Fake News Detection',
    category: 'Python / ML',
    blurb: 'Final-year computer science project exploring machine-learning approaches for fake-news detection in Python.',
    href: 'https://github.com/tobiolad/Fake-News-Detection',
    tags: ['Python', 'Machine Learning', 'NLP'],
  },
];

export const publications: Publication[] = [
  {
    type: 'Article',
    title: 'Building a Lean and Affordable Data Strategy',
    source: 'IKONIK Magazine',
    date: 'Nov 11, 2026',
    blurb: 'Why small businesses and entrepreneurs don’t need expensive tools or large teams to use data well, and how to start with a simple, sustainable routine.',
    href: 'https://ikonikpress.com/building-a-lean-and-affordable-data-strategy/',
  },
  {
    type: 'Profile',
    title: 'Beyond Data: How Tobi Oladimeji Is Redefining the Human Side of Innovation',
    source: 'IKONIK Magazine',
    date: 'Nov 23, 2025',
    blurb: 'A profile and Q&A on founding Data Fellows, building Inscend, and making data practical for small business owners across dozens of countries.',
    href: 'https://ikonikpress.com/beyond-data-how-tobi-oladimeji-is-redefining-the-human-side-of-innovation/',
  },
  {
    type: 'Article',
    title: 'Avoiding Common Data Mistakes',
    source: 'IKONIK Magazine',
    date: 'Oct 22, 2025',
    blurb: 'Frequent data-handling errors small business owners make, and practical fixes for each.',
    href: 'https://ikonikpress.com/avoiding-common-data-mistakes-by-tobi-oladimeji-for-ikonik-magazine/',
  },
  {
    type: 'Article',
    title: 'Practical Ways Small Businesses Can Use Data to Grow',
    source: 'IKONIK Magazine',
    date: 'Jun 30, 2025',
    blurb: 'Simple, practical ways small businesses can use the data they already have, without advanced tools.',
    href: 'https://ikonikpress.com/practical-ways-small-businesses-can-use-data-to-grow/',
  },
  {
    type: 'Feature',
    title: 'Championing Data-Driven Decision-Making for Small Businesses',
    source: 'AfriBlocks',
    date: 'Jul 12, 2024',
    blurb: 'Profiled by AfriBlocks, a Techstars-backed platform spotlighting high-impact African professionals.',
    href: 'https://blog.afriblocks.com/en/championing-data-driven-decision-making-for-small-businesses',
  },
  {
    type: 'Video',
    title: 'Data Too Complex? This AI Makes It Simple for Small Biz!',
    source: 'CanadianSME Small Business Magazine',
    blurb: 'Video appearance on the CanadianSME Small Business Magazine YouTube channel, discussing making data and AI practical for small businesses.',
    href: 'https://www.youtube.com/watch?v=kegYSA9PtAM',
    thumbnail: 'https://i.ytimg.com/vi/kegYSA9PtAM/hqdefault.jpg',
  },
  {
    type: 'Recognition',
    title: 'League of Innovators — 2024 Cohort',
    source: 'League of Innovators',
    blurb: 'Selected for Canada’s free accelerator for founders under 30.',
    href: 'https://www.loi.ac/',
  },
  {
    type: 'Recognition',
    title: 'SAAS NORTH AI PitchFest — Finalist',
    source: 'SAAS NORTH',
    blurb: 'Finalist for the 9th annual SAAS NORTH Conference AI PitchFest, pitching Inscend in Ottawa.',
    href: 'https://www.linkedin.com/posts/tobioladimeji_saasnorth-pitchfestai-inscend-share-7513323612762955777-EkPp/',
  },
  {
    type: 'Recognition',
    title: 'OBSIDI BFUTR 2026 — Pitch Finalist',
    source: 'OBSIDI',
    blurb: 'Pitched Inscend at BFUTR 2026 in Mississauga, competing for up to $350,000.',
    href: 'https://www.linkedin.com/posts/tobioladimeji_bfutr2026-blackfounders-inscend-share-7521118285040623616-ALE-/',
  },
];

export const newsletter: Newsletter = {
  title: 'Data Made Simple',
  description: 'Data Made Simple is a weekly note on how data, analytics, and AI show up in real work, based on lessons I’ve learned.',
  href: 'https://www.linkedin.com/newsletters/data-made-simple-7416025825822617600',
  linkLabel: 'Read on LinkedIn',
  editions: [
    { title: 'Four Months Later, I Am Building Differently', date: 'Jul 22, 2026', href: 'https://www.linkedin.com/pulse/four-months-later-i-am-building-differently-tobi-oladimeji-zuwmc' },
    { title: 'What Your First 100 Customers Are Quietly Teaching You', date: 'Mar 23, 2026' },
    { title: 'Most Founders Don’t Have a Data Problem. They Have a Question Problem.', date: 'Mar 16, 2026' },
    { title: 'Small Businesses Have the Advantage. They Just Don’t Realize It.', date: 'Mar 9, 2026' },
    { title: 'Why We Optimize for the Wrong Test', date: 'Mar 2, 2026' },
  ],
};

export const capabilities: CapabilityGroup[] = [
  { label: 'Analytics & BI', items: ['Power BI', 'SQL', 'Advanced Excel', 'Tableau', 'KPI design', 'Executive reporting'] },
  { label: 'Data & Engineering', items: ['Python', 'ETL', 'Data quality', 'Validation', 'PostgreSQL', 'Microsoft SQL Server'] },
  { label: 'AI & Automation', items: ['LLM workflows', 'Document extraction', 'AI evaluation', 'Workflow automation', 'Decision systems'] },
  { label: 'Product & Strategy', items: ['Product discovery', 'Customer research', 'Business strategy', 'Team leadership', 'Community development'] },
];

export const education: EducationItem[] = [
  { school: 'Conestoga College', degree: 'Postgraduate Diploma, Business Analytics', year: '2024', location: 'Ontario, Canada' },
  { school: 'Landmark University', degree: 'B.Sc., Computer Science', year: '2022', location: 'Nigeria' },
];

export const testimonials: Testimonial[] = [
  { quote: 'Tobi really helped us in analyzing data and report generation for various clients, developing them in Power BI and integrating databases. He constantly solved problems and proposed new ideas.', name: 'Edgardo Jaramillo' },
  { quote: 'His patience, professionalism, and capability to understand and work with disorganized datasets have turned him into an asset for our team.', name: 'Daniela Titus' },
  { quote: 'Tobi’s ability to tackle complex data challenges and his eagerness to learn set him apart. He brings a fresh perspective to every project.', name: 'Andrew S. Nevin' },
];
