export type ProjectCategory =
  | 'Data Analytics & Business Intelligence'
  | 'Product Analytics & Experimentation'
  | 'AI & Intelligent Automation'
  | 'Data Engineering'
  | 'Software & Product Development'
  | 'Enterprise Transformation';
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

export interface ProgramLogo {
  name: string;
  /** Path to the program's real logo; omitted falls back to a plain text chip rather than a placeholder. */
  logo?: string;
  href?: string;
  /** True when the logo's own artwork (e.g. white text) only reads on a dark chip background. */
  dark?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface FounderPrograms {
  summary: string;
  programs: ProgramLogo[];
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
  /** Omitted when there's no public link for the work (e.g. internal employer projects); the card then has no "View project" link. */
  href?: string;
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

export type RecommendationCategory = 'Managers & Senior Colleagues' | 'Teammates' | 'Educators & Mentors' | 'Clients & Collaborators';

export interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  category: RecommendationCategory;
  date: string;
  quote: string;
  photo: string;
  /** True when the source screenshot cut the quote off mid-sentence and the full text could not be recovered. */
  isExcerpt?: boolean;
  /** True for the curated homepage selection. */
  featured?: boolean;
}

export const profile: Profile = {
  name: 'Tobi Oladimeji',
  location: 'Waterloo Region, Ontario, Canada',
  email: 'tobi@datafellowsai.com',
  linkedin: 'https://www.linkedin.com/in/tobioladimeji/',
  github: 'https://github.com/tobiolad',
  x: 'https://x.com/tobioladimeji_',
  headline: 'Data. AI. Product.',
  tagline: 'Building technology. Solving business problems.',
  intro: 'I’m a data, AI and product professional with experience in enterprise analytics, business intelligence, data engineering, applied AI, software product development and digital transformation. My experience spans organizations including PwC, ESGTree, Granted and Cohere, alongside building products and growing a global technology community through Data Fellows. Based in Waterloo, Ontario, Canada.',
  bio: 'Tobi Oladimeji is a data, AI and product professional with experience in enterprise analytics, business intelligence, data engineering, applied AI, software product development, and digital transformation. His experience spans organizations including PwC, ESGTree, Granted Technologies, AgroMall, and Cohere, alongside building products and growing Data Fellows, a global technology community of 1,600+ members across 33+ countries that he founded in 2022, into an independent automation studio. He also founded Inscend, an AI-powered B2B SaaS platform for ecommerce merchants, from November 2025 to November 2026.',
};

/** Companies referenced in Tobi's professional experience, shown as a homepage reference strip, not as Data Fellows customers or partners. */
export const experienceLogos: ProgramLogo[] = [
  { name: 'PwC', logo: '/images/experience-logos/pwc.svg' },
  { name: 'Cohere', logo: '/images/experience-logos/cohere.svg' },
  { name: 'ESGTree', logo: '/images/experience-logos/esgtree.svg' },
  { name: 'Granted', logo: '/images/experience-logos/granted.png' },
  { name: 'AgroMall', logo: '/images/experience-logos/agromall.png' },
];

export const metrics: Metric[] = [
  { value: '5+', label: 'years across data & analytics' },
  { value: '1,600+', label: 'Data Fellows community members' },
  { value: '33+', label: 'countries reached' },
  { value: '30+', label: 'Python scripts delivered at PwC' },
  { value: '98%', label: 'data accuracy on enterprise migration' },
];

export const currentWork: CurrentWorkItem[] = [
  {
    eyebrow: 'Open to',
    title: 'Full-time opportunities',
    description: 'Open to full-time opportunities in data, AI, product and technology, as well as meaningful professional collaborations and conversations about complex organizational problems.',
    href: '#contact',
    linkLabel: 'Get in touch',
  },
  {
    eyebrow: 'Alongside that',
    title: 'Data Fellows',
    description: 'Data Fellows is an independent automation studio helping organizations solve recurring operational challenges through software, data, and AI. Founded in 2022 as a data and technology community, it’s grown into a global network of over 1,600 professionals across 33+ countries.',
    href: 'https://datafellowsai.com/',
    linkLabel: 'Visit datafellowsai.com',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Cohere',
    role: 'AI Data Trainer (Independent Contractor)',
    period: 'Oct 2026 – Present',
    summary: 'Supporting AI model evaluation and data quality through structured response ranking, annotation, quality assessment, error identification and evaluation feedback across English and multimodal tasks.',
    tags: ['Data Annotation', 'AI Evaluation', 'Quality'],
  },
  {
    company: 'Data Fellows',
    role: 'Founder',
    period: 'Aug 2022 – Present',
    summary: 'Founded Data Fellows in 2022, growing it into a global network of over 1,600 data and technology professionals across 33 countries. My work spans product development, data strategy, applied AI, technical collaboration, industry partnerships and community development. Today, Data Fellows develops software, data and AI solutions to address operational challenges while continuing to support professional development and technical collaboration.',
    tags: ['Automation', 'Software & AI', 'Community'],
  },
  {
    company: 'Inscend',
    role: 'Founder & Product Lead',
    period: 'Nov 2025 – Nov 2026 · Concluded',
    summary: 'Led product discovery, validation and technical development for an AI-powered B2B SaaS platform for ecommerce merchants, in close collaboration with a distributed engineering team. Validated the product through customer discovery with 50+ founders, ran Shopify merchant pilots, and turned those customer insights into an AI-powered product intelligence feature set. Secured early paying customers and a development and referral agreement with SHOPLINE. Finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026.',
    tags: ['Product Discovery', 'Ecommerce Technology', 'Team Leadership'],
  },
  {
    company: 'Granted Technologies Inc.',
    role: 'Strategic Advisor (Head of Data Ops)',
    period: 'Oct 2025 – Aug 2026 · Contract, part-time',
    summary: 'Advised on data strategy, operational systems, workflow design, data quality and automation for grant discovery, extraction and reporting, supporting large-scale grant intelligence.',
    tags: ['Data Strategy', 'Automation', 'Grant Intelligence'],
  },
  {
    company: 'Venture Learning Collective',
    role: 'Co-Founder',
    period: 'Feb 2026 – Jul 2026 · Concluded',
    summary: 'Helped establish Venture Learning Collective to support entrepreneurship education and funding readiness. Secured a C$2,800 micro-grant through Weston Frontlines and delivered the Youth Funding Readiness Lab with GRANTED. The program ran May 27 to June 25, 2026, with six virtual sessions and a final showcase, serving a core cohort of 10 participants, eight of whom remained active throughout. Final reporting took place in July 2026.',
    tags: ['Founder Education', 'Funding Readiness', 'Community'],
  },
  {
    company: 'ESGTree',
    role: 'Data Analyst & Machine Learning Engineer',
    period: 'Feb 2024 – Sep 2024',
    summary: 'Built Power BI reporting, supported SQL/Python workflows, and developed LLM-based document extraction that reduced manual data input by approximately 30%.',
    tags: ['Power BI', 'Python', 'SQL', 'LLMs'],
  },
  {
    company: 'PwC',
    role: 'Data Analyst',
    period: 'Sep 2022 – Nov 2023',
    summary: 'Supported a Dynamics AX to Dynamics 365 F&O transformation, led mapping sessions, built Python validation scripts, and delivered reporting.',
    tags: ['Data Migration', 'Python', 'SQL', 'Power BI'],
  },
  {
    company: 'Rollback Ally',
    role: 'Lead Data Analyst',
    period: 'Feb 2023 – Sep 2023',
    summary: 'Led data analysis and reporting work at Rollback Ally.',
    tags: ['Data Analysis', 'Reporting'],
  },
  {
    company: 'Metridash',
    role: 'Business Intelligence Analyst',
    period: 'Jan 2023 – May 2023',
    summary: 'Business intelligence and reporting work at Metridash.',
    tags: ['Business Intelligence', 'Reporting'],
  },
  {
    company: 'Analytic Company GmbH',
    role: 'Data Analyst',
    period: 'May 2022 – Nov 2022',
    summary: 'Data analysis work at Analytic Company GmbH.',
    tags: ['Data Analysis'],
  },
  {
    company: 'Quantum Analytics NG',
    role: 'Data Analyst Intern',
    period: 'Sep 2021 – Nov 2021',
    summary: 'Data analyst internship at Quantum Analytics NG.',
    tags: ['Data Analysis'],
  },
  {
    company: 'AgroMall',
    role: 'Business Intelligence Analyst Intern',
    period: 'Jun 2021 – Oct 2021',
    summary: 'Built operational dashboards and recurring reports across agricultural and financial workflows while improving validation and automation.',
    tags: ['Power BI', 'SQL', 'Excel', 'Python'],
  },
];

export const founderPrograms: FounderPrograms = {
  summary: 'Selected into multiple global and Canadian accelerator and founder-in-residence programs supporting product development, growth, and fundraising, for Data Fellows and, previously, Inscend.',
  programs: [
    { name: 'BHive (GEIP)', logo: '/images/programs/bhive.png' },
    { name: 'Accelerator Centre (RevLab)', logo: '/images/programs/accelerator-centre.svg', href: 'https://www.acceleratorcentre.com/' },
    { name: 'League of Innovators (LOI)', logo: '/images/programs/league-of-innovators.png', href: 'https://www.loi.ac/' },
    { name: 'Emerging Leaders Collective (ELC)', logo: '/images/programs/elc.png' },
    { name: 'LvlUp Ventures (Labs)', logo: '/images/programs/lvlup-ventures.png', dark: true },
  ],
};

export const projects: Project[] = [
  {
    title: 'Product Analytics & Experimentation Lab',
    category: 'Product Analytics & Experimentation',
    blurb: 'An independently developed portfolio project using synthetic data: a deterministic SaaS data generator, a DuckDB metrics layer, an A/B experimentation engine with proper statistical testing, a FastAPI analytics API, and a React dashboard covering activation, funnels, retention, and experiment results.',
    image: '/images/portfolio/product_analytics_lab.jpg',
    href: 'https://github.com/tobiolad/product-analytics-lab',
    tags: ['Python', 'DuckDB', 'FastAPI', 'React'],
    badge: 'Flagship Project',
    caseStudy: {
      context: 'Product analytics teams need more than a dashboard of pre-aggregated numbers: a reproducible data source, one tested definition per metric, and a statistically sound A/B testing process.',
      problem: 'Most portfolio-style analytics projects stop at a few charts over a static CSV, with no reproducibility guarantee, no tested metric definitions, and no real experimentation methodology behind the numbers.',
      contribution: 'Built the full stack independently: a deterministic synthetic-data generator, a DuckDB schema with a canonical deduplicated events view, a metrics layer, an experimentation engine, a FastAPI analytics API, and a React and TypeScript dashboard.',
      approach: 'Generated synthetic SaaS data with a fixed seed and deliberate data-quality issues (duplicate events, late arrivals, missing channels), gave every metric exactly one documented SQL definition shared by the API and dashboard, and implemented the A/B test with a sample-ratio-mismatch check, a two-proportion z-test cross-validated against scipy, and an honestly-caveated post-hoc power read.',
      outcome: 'Verified with 77 passing tests across the generator, metrics, experiment engine, API, and frontend; the baked-in onboarding experiment on the synthetic dataset shows a statistically significant +11.2 percentage point activation lift with no guardrail harm. No real customers or commercial results are involved -- it demonstrates the methodology, not a live product.',
    },
  },
  {
    title: 'Ontario Infrastructure Decision Intelligence',
    category: 'Data Engineering',
    blurb: 'Full-stack rebuild of a public infrastructure analysis into a decision-intelligence platform: a Python ingestion pipeline with automated data-quality checks, a PostgreSQL dimensional model, a FastAPI analytics layer, and a React dashboard covering budgets, project status, and an interactive map.',
    image: '/images/portfolio/ont_communities.jpg',
    href: 'https://github.com/tobiolad/ont-communities',
    tags: ['Python', 'PostgreSQL', 'FastAPI', 'React'],
    badge: 'Flagship Project',
    caseStudy: {
      context: 'Ontario publishes a live public dataset of infrastructure projects (courthouses, correctional facilities, affordable housing, water infrastructure, and more) through its open data portal. A 2024 university group project had analyzed a static snapshot of this data in PostgreSQL and SQL.',
      problem: 'That original analysis worked from a static snapshot and had real data-cleaning weaknesses: coalescing missing budgets to $0, coalescing missing text to "unknown," detecting duplicates only on full-row matches, and applying a date type to a field that’s rarely a real date.',
      contribution: 'Independently rebuilt the project in 2026: a full repository and live-source audit, a from-scratch Python ingestion pipeline, a new PostgreSQL dimensional schema, an automated data-quality framework, a FastAPI analytical service, and a React and TypeScript dashboard.',
      approach: 'Built a pipeline that ingests directly from Ontario’s own API, not a static download, runs eight automated data quality checks on every run, and serves the data through a dashboard designed to avoid common misreadings, such as treating a $0 budget as free or a passed target window as proof of delay.',
      outcome: 'Verified against a real run on 2,272 live-ingested projects, with 62 passing tests across the pipeline, API, and web app, and a committed data-quality report from an actual pipeline run.',
    },
  },
  {
    title: 'PwC — Enterprise Data Transformation',
    category: 'Enterprise Transformation',
    blurb: 'Supported a Dynamics AX to Dynamics 365 F&O enterprise data migration, leading mapping sessions and building Python validation scripts.',
    tags: ['Data Migration', 'Python', 'SQL', 'Power BI'],
    caseStudy: {
      context: 'A large-scale ERP migration from Dynamics AX to Dynamics 365 F&O required mapping and validating data across legacy and target systems before cutover.',
      problem: 'Without rigorous mapping and validation, a migration of this scale risks silent data loss or corruption that only surfaces after go-live.',
      contribution: 'Led mapping sessions between business and technical stakeholders and built the Python validation scripts used to check migrated data against source records.',
      approach: 'Combined structured mapping workshops with Python-based validation scripts and Power BI reporting to give the project team visibility into data quality throughout the migration.',
      outcome: 'Delivered validation and reporting that supported 98% data accuracy on the migration.',
    },
  },
  {
    title: 'ESGTree — Applied AI & Document Extraction',
    category: 'AI & Intelligent Automation',
    blurb: 'Developed LLM-based document extraction that reduced manual data input by approximately 30%, alongside Power BI reporting and SQL/Python workflows.',
    tags: ['LLMs', 'Document Extraction', 'Power BI', 'Python'],
    caseStudy: {
      context: 'ESG reporting workflows involved large volumes of source documents whose data had to be manually read and entered into reporting systems.',
      problem: 'Manual document review and data entry was slow and didn’t scale with the volume of documents the team needed to process.',
      contribution: 'Designed and built the LLM-based extraction workflow, alongside the Power BI reporting and SQL/Python data pipelines that supported it.',
      approach: 'Used an LLM to read source documents and extract the relevant structured fields automatically, replacing manual entry for most cases while keeping a review step for edge cases.',
      outcome: 'Reduced manual data input by approximately 30%.',
    },
  },
  {
    title: 'Granted Source Agent',
    category: 'AI & Intelligent Automation',
    blurb: 'AI agent built for Granted that discovers, filters, analyzes, and exports non-dilutive funding opportunities across Canada and the US, using Gemini with Google Search grounding.',
    href: 'https://github.com/tobiolad/granted-source-agent',
    tags: ['AI Agents', 'Gemini API', 'Funding'],
  },
  {
    title: 'Inscend',
    category: 'Software & Product Development',
    blurb: 'A past venture (Nov 2025 – Nov 2026): an AI-powered B2B SaaS platform for ecommerce merchants. Led a distributed engineering team, engaged 50+ founders, ran Shopify merchant pilots, secured early paying customers, and established a development and referral agreement with SHOPLINE. Finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026.',
    href: 'https://www.inscend.io/',
    tags: ['Ecommerce', 'Product', 'Shopify'],
    badge: 'Past Venture',
    caseStudy: {
      context: 'Independent merchants running ecommerce stores, often on Shopify, need to continuously track what’s affecting their sales and operations, but rarely have the time or tooling to do it well.',
      problem: 'Founders were spending time manually checking their stores instead of acting on what actually needed their attention.',
      contribution: 'Founded Inscend and led a distributed engineering team building the product end to end.',
      approach: 'Built an AI-powered B2B SaaS platform that monitors store activity, surfaces what needs attention, and prepares next steps, bringing the founder in when judgment is required. Validated the approach through customer discovery with 50+ founders and Shopify merchant pilots.',
      outcome: 'Secured early paying customers and a development and referral agreement with SHOPLINE. Selected as a finalist at SAAS NORTH AI PitchFest and OBSIDI BFUTR 2026. Concluded November 2026; not an active product or company today.',
    },
  },
  {
    title: 'Monitoring & Evaluation Dashboard',
    category: 'Data Analytics & Business Intelligence',
    blurb: 'Power BI reporting for field operations, geographic activity, visit status, pending work, and monitoring performance.',
    image: '/images/portfolio/m & e.png',
    href: 'https://github.com/tobiolad/Evaluation-Dashboard',
    tags: ['Power BI', 'DAX', 'Operations'],
  },
  {
    title: 'Data Fellows',
    category: 'Software & Product Development',
    blurb: 'An independent automation studio and global technology community, helping organizations solve recurring operational challenges through software, data, and AI.',
    href: 'https://datafellowsai.com/',
    tags: ['Automation', 'Software', 'Data & AI', 'Community'],
    badge: 'Active Venture',
    caseStudy: {
      context: 'Many data and AI professionals, especially outside major tech hubs, lack access to structured learning, mentorship, and industry connections, while organizations everywhere carry recurring operational problems that don’t fit an off-the-shelf software product.',
      problem: 'Opportunities in data and AI weren’t evenly accessible, and there was no single place bringing practitioners together across regions, while many operational challenges stayed unsolved because they needed something built around the specific problem.',
      contribution: 'Founded Data Fellows in 2022 as a community for people interested in data and technology, and grew it into an organization that also designs and builds automation solutions for real operational problems.',
      approach: 'Built learning programs, professional development initiatives, and industry partnerships to grow the community, then added software engineering, data systems, and AI capability to design, build, and manage automation solutions for organizations’ recurring operational challenges.',
      outcome: 'Grew Data Fellows into a global network of 1,600+ professionals across 33+ countries, which now also operates as an independent automation studio.',
    },
  },
  {
    title: 'Inscend Source Agent',
    category: 'AI & Intelligent Automation',
    blurb: 'AI-assisted discovery agent built for Inscend. Uses Gemini with Google Search grounding to find and score indie beauty and skincare brands and founders across Canada and Nigeria, surfacing signal strength, fit, and outreach angles.',
    href: 'https://github.com/tobiolad/inscend-source-agent',
    tags: ['AI Agents', 'Gemini API', 'React'],
  },
  {
    title: 'AgroWallet Dashboard',
    category: 'Data Analytics & Business Intelligence',
    blurb: 'Operational reporting across farmer profiles, financial activity, loans, disbursements, repayments, agents, and farm characteristics.',
    image: '/images/portfolio/agrowallet.png',
    href: 'https://github.com/tobiolad/Farmers-Dash',
    tags: ['Power BI', 'Financial Data', 'Analytics'],
  },
  {
    title: 'BizPilot AI',
    category: 'Software & Product Development',
    blurb: 'An early experiment built through Data Fellows, started in 2025. It initially explored a marketplace connecting businesses with data professionals, then shifted toward AI-powered decision intelligence for small businesses. That work later informed Inscend.',
    href: 'https://www.producthunt.com/products/data-fellows',
    tags: ['AI', 'Decision Intelligence', 'Data Fellows'],
  },
  {
    title: 'Tire Price Analysis',
    category: 'Data Analytics & Business Intelligence',
    blurb: 'Analysis of 4,350 tire records combining Python EDA and Excel analysis to understand pricing and customer preferences.',
    image: '/images/portfolio/tire_price.jpg',
    href: 'https://github.com/tobiolad/tire-price-analysis',
    tags: ['Python', 'EDA', 'Excel'],
  },
  {
    title: 'Economic Freedom Analysis',
    category: 'Data Analytics & Business Intelligence',
    blurb: 'Python analysis of the Fraser Institute’s Economic Freedom dataset, examining Canada’s standing on legal system, sound money, and trade openness to make an evidence-based case for it as a stable, high-opportunity market.',
    image: '/images/portfolio/canada_economic.jpeg',
    href: 'https://github.com/tobiolad/Economic-Freedom',
    tags: ['Python', 'Pandas', 'EDA'],
  },
  {
    title: 'Real-Time Seismic Monitoring',
    category: 'Data Engineering',
    blurb: 'Public-data ingestion and geospatial analysis using USGS earthquake data for automated seismic monitoring and reporting.',
    image: '/images/portfolio/seismic.png',
    href: 'https://medium.com/@Tobioladimeji_/exploring-geospatial-analysis-building-a-real-time-seismic-event-monitoring-solution-a0c197a52c61',
    tags: ['ArcGIS', 'Public APIs', 'Geospatial'],
  },
  {
    title: 'COVID-19 Pandemic Dashboard',
    category: 'Data Analytics & Business Intelligence',
    blurb: 'Power BI dashboard tracking the global COVID-19 pandemic: countries affected, confirmed cases, and deaths.',
    image: '/images/portfolio/corona.png',
    href: 'https://github.com/tobiolad/Corona-Viz',
    tags: ['Power BI', 'DAX', 'Public Health'],
  },
  {
    title: 'Fake News Detection',
    category: 'AI & Intelligent Automation',
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
    title: 'League of Innovators: 2024 Cohort',
    source: 'League of Innovators',
    blurb: 'Selected for Canada’s free accelerator for founders under 30.',
    href: 'https://www.loi.ac/',
  },
  {
    type: 'Recognition',
    title: 'SAAS NORTH AI PitchFest: Finalist',
    source: 'SAAS NORTH',
    blurb: 'Finalist for the 9th annual SAAS NORTH Conference AI PitchFest, pitching Inscend in Ottawa.',
    href: 'https://www.linkedin.com/posts/tobioladimeji_saasnorth-pitchfestai-inscend-share-7513323612762955777-EkPp/',
  },
  {
    type: 'Recognition',
    title: 'OBSIDI BFUTR 2026: Finalist',
    source: 'OBSIDI',
    blurb: 'Selected as a finalist for BFUTR 2026 in Mississauga.',
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
  { label: 'Data & Analytics', items: ['SQL', 'Python', 'Power BI', 'Excel', 'Tableau', 'Operational reporting', 'Data quality', 'Data modelling', 'Product analytics'] },
  { label: 'Artificial Intelligence', items: ['Applied LLM workflows', 'AI model evaluation', 'Document extraction', 'Agentic workflows', 'AI-assisted software development'] },
  { label: 'Product & Technology', items: ['Product discovery', 'Requirements gathering', 'Software delivery', 'Product validation', 'Business analysis', 'Workflow automation'] },
  { label: 'Leadership & Strategy', items: ['Stakeholder management', 'Technical collaboration', 'Community development', 'Data strategy', 'Partnerships', 'Technical education'] },
];

export const education: EducationItem[] = [
  { school: 'Conestoga College', degree: 'Postgraduate Diploma, Business Analytics', year: '2024', location: 'Ontario, Canada' },
  { school: 'Landmark University', degree: 'B.Sc., Computer Science', year: '2022', location: 'Nigeria' },
];

export const recommendations: Recommendation[] = [
  // Category A: Managers & Senior Colleagues
  {
    name: 'Andrew S. Nevin, PhD',
    title: 'Partner, Financial Services Leader and Chief Economist, PwC',
    relationship: 'Senior colleague at PwC; did not manage Tobi directly',
    category: 'Managers & Senior Colleagues',
    date: 'Feb 8, 2024',
    quote: 'Tobi is an outstanding young professional with so much potential. During our time at PwC, I witnessed his dedication to mastering data analysis. Tobi’s ability to tackle complex data challenges and his eagerness to learn set him apart. He’s not just a team player but also brings a fresh perspective to every project. I highly recommend Tobi for his skills, passion, and the promise he holds in the field of data analytics.',
    photo: '/images/recommendations/andrew-nevin.jpg',
    featured: true,
  },
  {
    name: 'Edgardo Jaramillo',
    title: 'CEO, Rollback Ally',
    relationship: 'Managed Tobi directly',
    category: 'Managers & Senior Colleagues',
    date: 'Sep 27, 2023',
    quote: 'It was a great pleasure to have worked with Tobi. He is a very responsible, determined, and hard working professional. Tobi really helped us in analyzing data and report generation for various clients, developing them in PowerBi and integrating databases. Constantly solved problems and proposed new ideas. Tobi was always a team player and was invested in making things work. Apart from being a great professional he is a great person.',
    photo: '/images/recommendations/edgardo-jaramillo.jpg',
    featured: true,
  },
  // Category B: Teammates
  {
    name: 'Daniela Titus',
    title: 'Executive Assistant, Servi-Tek Facility Solutions',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Sep 15, 2023',
    quote: 'Tobi’s exceptional patience, professionalism, and capability to understand and work with disorganized data sets have turned him into an asset for our team. I admire his capacity to create reports from scratch in Power BI and connect various platforms to turn simple datasets added to a Google Sheets into meaningful reports for making informed decisions. Of course, he is a great coworker, and I can wholeheartedly recommend Tobi without any doubt.',
    photo: '/images/recommendations/daniela-titus.jpg',
    featured: true,
  },
  {
    name: 'Santiago Guevara León',
    title: 'Ticketing Specialist, Tuboleta',
    relationship: 'Worked with Tobi on the same team, at Rollback Ally',
    category: 'Teammates',
    date: 'Sep 14, 2023',
    quote: 'I wholeheartedly recommend Tobi for his exceptional contributions at Rollbackally. From the moment he joined our team, it was clear that he possessed a remarkable ability to adapt, coupled with a strong work ethic that consistently translated into outstanding results. Tobi’s dedication to his work is truly commendable, and his talent shines through in all that he undertakes. He is not only a skilled professional but also a natural leader who knows how to guide the team effectively toward achieving our goals. I am confident that Tobi will continue to excel in any role he takes on in the future.',
    photo: '/images/recommendations/santiago-guevara-leon.jpg',
    featured: true,
  },
  {
    name: 'Princess Chiamaka Eze',
    title: 'Social Media Manager, Ella’s Administrative Consult Ltd.',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 10, 2023',
    quote: 'I’ve known Tobi for a while and he has proven himself to be a professional data analyst... He’s a cool person to work with both on a professional and individual level and he always delivers any job given to him before the deadline. I recommend him without any reservation because he will be a valuable asset to any organization that hires him.',
    photo: '/images/recommendations/chiamaka-eze.jpg',
  },
  {
    name: 'Salamatu Alabi',
    title: 'Content Writer and SEO Specialist, AGPAYTECH LTD.',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 2, 2023',
    quote: 'I have known Tobi for some time now and during that time, I have been consistently impressed by his competence. He has a proven track record of achievements or skills and has demonstrated positive character traits in both personal/professional settings. I have no doubt that Tobi would be an asset to any organization lucky enough to have him on their team. He has a strong work ethic, excellent communication skills, and a commitment to delivering exceptional results. I recommend Tobi without reservation and am confident that he will make a valuable contribution to any organization he joins.',
    photo: '/images/recommendations/salamatu-alabi.jpg',
  },
  {
    name: 'Betty Orji',
    title: 'Director, Bettybnks Business Consult',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 2, 2023',
    quote: 'Tobi is an incredibly valuable resource. I had the privilege to work with him. He is so passionate about his job as a data analyst and works exceptionally well alone or with a team. I highly recommend his services!',
    photo: '/images/recommendations/betty-orji.jpg',
  },
  {
    name: 'Praise Oluwatosin Alagbe, AICMC',
    title: 'Program Coordinator & Virtual Assistant, Lis School of Business Recovery Ltd.',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 1, 2023',
    quote: 'Tobi Oladimeji has proven to be very sound in Data Analysis. His aim to help businesses improve on their data analysis and make sound decisions is very applaudable. I recommend him for any opportunity related to this field.',
    photo: '/images/recommendations/praise-alagbe.jpg',
  },
  {
    name: 'Sherley Mercelie P. M Eugene',
    title: 'Interpreter (Creole–Spanish), UNHCR',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 1, 2023',
    quote: 'Tobi is a young professional so passionate about data. He is competent, efficient, and proactive. I’ve never met someone so committed to data as Tobi. Tobi is a leader also. He uses his knowledge for the better good and invests himself in social projects that will also benefit his community. I believe that having access to quality knowledge is good, and being brilliant is inspiring. But social retribution is what makes any professional stand out for me. Tobi is all that. He will be an asset to any team.',
    photo: '/images/recommendations/sherley-eugene.jpg',
  },
  {
    name: 'Gloria Olaniyan',
    title: 'CEO & Founder, TRACK Africa',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Mar 1, 2023',
    quote: 'I highly recommend Tobi for his exceptional ability to interpret complex data sets and provide actionable insights, as well as his excellent communication skills which have been instrumental in driving successful collaborations and decision-making processes within an organization. Tobi has demonstrated exceptional skills in analyzing data, identifying trends and patterns, and...',
    photo: '/images/recommendations/gloria-olaniyan.jpg',
    isExcerpt: true,
    featured: true,
  },
  {
    name: 'Pranav Mahesan',
    title: 'Quant Risk Analyst, Dolidol',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Sep 28, 2022',
    quote: 'Tobi is very hard working and result oriented individual. He is a great team player and possess strong leadership and communication skills.',
    photo: '/images/recommendations/pranav-mahesan.jpg',
  },
  {
    name: 'Oyindamola Victor',
    title: 'QA (Backend), Turing',
    relationship: 'Worked with Tobi on the same team',
    category: 'Teammates',
    date: 'Sep 28, 2022',
    quote: 'Tobi is a great and critical thinker in the world of analytics, his passion and skills go beyond the scope of work but also ensuring value is added...',
    photo: '/images/recommendations/oyindamola-victor.jpg',
    isExcerpt: true,
  },
  // Category C: Educators & Mentors
  {
    name: 'Vinod Thomas',
    title: 'Vice President, Cybersecurity, M&T Bank',
    relationship: 'Was Tobi’s teacher, Diagnostic Analysis at Conestoga College',
    category: 'Educators & Mentors',
    date: 'Oct 11, 2024',
    quote: 'I had the pleasure of teaching Tobi in my Diagnostic Analysis course at Conestoga College, and I am confident he is a standout professional. His exceptional critical thinking and problem-solving skills were evident throughout the course, but what truly sets Tobi apart is his strong entrepreneurial spirit. Tobi consistently approached complex problems with creativity, determination, and a remarkable ability to see opportunities where others might see obstacles. His technical expertise, combined with a passion for innovative solutions and a drive to understand the broader business implications of his work, made him a natural leader in group projects. He has that rare combination of analytical rigor and forward-thinking that is crucial in today’s rapidly evolving landscape. Beyond his technical abilities, Tobi’s work ethic and commitment to excellence were outstanding. He regularly exceeded expectations, offering insights that enhanced discussions and group collaborations. His entrepreneurial mindset is reflected in his proactive approach to problem-solving and his eagerness to take on new challenges. I am confident that Tobi will excel in any professional or entrepreneurial endeavor he pursues. His ability to merge strategic thinking with practical execution makes him an invaluable asset to any team or organization. I highly recommend him to anyone looking for a dedicated, innovative, and driven professional.',
    photo: '/images/recommendations/vinod-thomas.jpg',
    featured: true,
  },
  {
    name: 'Chandeep Sharma',
    title: 'Data Specialist, Definity',
    relationship: 'Was Tobi’s teacher',
    category: 'Educators & Mentors',
    date: 'Sep 5, 2024',
    quote: 'Toby is sincere and has a zeal for learning and seeks opportunities to apply AI concepts and tools. His dedication in his deliverables truly shows his commitment. I would recommend him and wish best for his future endeavours.',
    photo: '/images/recommendations/chandeep-sharma.jpg',
  },
  {
    name: 'Dr. Ganesh Subramanian',
    title: 'Cyber Security Analyst & AWS Cloud Specialist',
    relationship: 'Was Tobi’s teacher, Business Intelligence Tools',
    category: 'Educators & Mentors',
    date: 'Apr 24, 2024',
    quote: 'Tobi was an exceptional student in my Business Intelligence Tools course. He demonstrated a strong understanding of analytical methods and models, excelled in data visualization techniques, and showcased a keen grasp of probability theory. Tobi’s dedication, proactive approach to learning, and collaborative spirit made him a standout in the class. I highly recommend him for any opportunities where his analytical skills and expertise in business intelligence and statistics are needed.',
    photo: '/images/recommendations/ganesh-subramanian.jpg',
  },
  {
    name: 'Timothy Laleye',
    title: 'Professor, Conestoga College',
    relationship: 'Was Tobi’s teacher, SQL',
    category: 'Educators & Mentors',
    date: 'Apr 24, 2024',
    quote: 'I had the pleasure of teaching Tobi SQL, and I wholeheartedly recommend him. Tobi consistently demonstrated a strong grasp of complex concepts, coupled with a dedicated work ethic and a collaborative spirit. His passion for SQL and his ability to apply it to real-world scenarios make him an asset to any team. I have no doubt that Tobi will continue to excel in his career and make significant contributions wherever he goes.',
    photo: '/images/recommendations/timothy-laleye.jpg',
  },
  {
    name: 'Marvi Shaikh',
    title: 'Senior Business Data Analyst, Sun Life',
    relationship: 'Was Tobi’s teacher',
    category: 'Educators & Mentors',
    date: 'Apr 23, 2024',
    quote: 'Toby is highly proficient in Python and advanced data analysis, specializing in predictive modelling. Throughout the course, his dedication and hardworking nature were evident in his approach to assignments and projects. Toby’s exceptional communication and presentation skills, coupled with his strong teamwork, attention to detail, and evident passion for data, make him a valuable asset to any team or organization.',
    photo: '/images/recommendations/marvi-shaikh.jpg',
  },
  {
    name: 'Roseline Oluwaseun Ogundokun',
    title: 'Senior Lecturer',
    relationship: 'Was Tobi’s teacher',
    category: 'Educators & Mentors',
    date: 'Sep 30, 2022',
    quote: 'I have know Tobi for 4 years and for those years, he impressed me with intense focus and commitment. I understand your organisation was made for persons who are deligent. Hardworking and have demonstrated relevant research and leadership skills. Tobi is no exception. Due to Tobi commitments to his research and academic work, he came out with a good grade in his first degree. He is indeed a talented and mature-minded student. I am certain and believe that Tobi is a perfect fit for your organisation and I give my highest recommendation for him.',
    photo: '/images/recommendations/roseline-ogundokun.jpg',
  },
  // Category D: Clients & Collaborators
  {
    name: 'Iwalola Adetunji-Odogwu, PhD',
    title: 'Principal Information Officer, Federal Ministry of Information and National Orientation',
    relationship: 'Was Tobi’s client',
    category: 'Clients & Collaborators',
    date: 'Mar 2, 2023',
    quote: 'Tobi Oladimeji is a highly professional individual with a keen interest in data analysis. He believes data is life and therefore pays keen attention to making the mundane tasks of analysing data become readable and usable for businesses and individuals. With other commendable skills like storytelling abilities and an impeccable grasp of data analysis tools like Excel, I find working with him easy and stress free. I highly recommend him for business consultations.',
    photo: '/images/recommendations/iwalola-adetunji-odogwu.jpg',
  },
  {
    name: 'Karimah Lawal',
    title: 'Business Development Manager, VestarCoffeeNG',
    relationship: 'Worked with Tobi, but on different teams',
    category: 'Clients & Collaborators',
    date: 'Mar 1, 2023',
    quote: 'Tobi is a highly skilled Data Analyst with great skills in Python and many other relatable skills. He’s commendable for breaking down complex data into forms that will turn into valuable insights for any organization and increase revenue. He is bold in his declaration of his skills and it shows in his job management too. He is a perfect fit for any organization seeking a brilliant Data Analyst with a root understanding of his job.',
    photo: '/images/recommendations/karimah-lawal.jpg',
  },
  {
    name: 'Alerechi Ordu',
    title: 'Engineering Manager, Oxygen X Finance (Access Holding)',
    relationship: 'Worked with Tobi, but on different teams',
    category: 'Clients & Collaborators',
    date: 'Mar 1, 2023',
    quote: 'Tobi is a highly skilled Data Analyst with proven relevant experience over the years. He’s a tech enthusiast with strong networking and collaborative skill. I highly recommend him because I have had an encounter with him.',
    photo: '/images/recommendations/alerechi-ordu.jpg',
  },
  {
    name: 'Aaron Duniya',
    title: 'Founder, Jabari Quest Solutions',
    relationship: 'Worked with Tobi, but they were at different companies',
    category: 'Clients & Collaborators',
    date: 'Mar 1, 2023',
    quote: 'Some say Data is Life. Truly, Tobi exemplifies this saying in how he gives life to his work as a Data Analyst. Tobi can utilize his skills, in helping you understand trends and what you need to move your business from where it is, to where you want it to be. I recommend Tobi to any Person or Company that needs his services.',
    photo: '/images/recommendations/aaron-duniya.jpg',
  },
];
