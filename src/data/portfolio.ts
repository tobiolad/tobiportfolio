export type ProjectCategory = 'Product' | 'BI' | 'Python / ML' | 'SQL' | 'Data';
export type WritingType = 'Article' | 'Profile' | 'Event' | 'Feature' | 'Recognition';

export interface Profile {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  x: string;
  headline: string;
  intro: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Focus {
  title: string;
  description: string;
  href: string;
  points: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface Project {
  title: string;
  category: ProjectCategory;
  blurb: string;
  image?: string;
  href: string;
  tags: string[];
  featured?: boolean;
}

export interface WritingItem {
  type: WritingType;
  title: string;
  source: string;
  blurb: string;
  href: string;
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
  email: 'oluwatobilobadimeji@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tobioladimeji/',
  github: 'https://github.com/tobiolad',
  x: 'https://x.com/tobioladimeji_',
  headline: 'I turn messy data into decisions people can act on.',
  intro: 'Data & AI operator, product founder, and ecosystem builder working across analytics, decision intelligence, automation, and early-stage product development.',
};

export const metrics: Metric[] = [
  { value: '5+', label: 'years across data & analytics' },
  { value: '1,500+', label: 'Data Fellows community members' },
  { value: '15+', label: 'countries reached' },
  { value: '30+', label: 'Python scripts delivered at PwC' },
  { value: '98%', label: 'data accuracy on enterprise migration' },
  { value: '250+', label: 'people at LvlUp pitch day' },
];

export const focus: Focus = {
  title: 'Building Inscend',
  description: 'Decision intelligence for founder-led commerce. Inscend connects business data, context, and financial impact so operators can see what deserves attention next.',
  href: 'https://www.inscend.io/',
  points: [
    'Launched with Shopify',
    'Expanded pilots from Canada into the United States',
    'Signed a contract and development partnership with SHOPLINE through LvlUp Ventures',
    'Placed 3rd out of 11 founders at LvlUp Ventures Power of the Pitch, B2B Emerging Day',
  ],
};

export const experience: ExperienceItem[] = [
  {
    company: 'Inscend',
    role: 'Founder',
    period: '2025 — Present',
    summary: 'Building decision intelligence for founder-led commerce businesses, translating store data and business context into financially grounded actions.',
    tags: ['Decision Intelligence', 'AI', 'Product', 'Commerce'],
  },
  {
    company: 'Granted Technologies Inc.',
    role: 'Strategic Advisor, Data & Operations',
    period: 'Oct 2025 — Present',
    summary: 'Advising on data architecture, quality controls, workflow design, automation, operational KPIs, and AI-assisted grant-data processes.',
    tags: ['Data Quality', 'Automation', 'AI Workflows'],
  },
  {
    company: 'Data Fellows',
    role: 'Founder & CEO',
    period: 'Aug 2022 — Present',
    summary: 'Founded and grew a global data and technology ecosystem focused on practical learning, collaboration, products, and access.',
    tags: ['Community', 'Strategy', 'Partnerships'],
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
    role: 'Data Analytics Team Lead',
    period: 'Sep 2022 — Nov 2023',
    summary: 'Supported a Dynamics AX to Dynamics 365 F&O transformation, led mapping sessions, built Python validation scripts, and delivered reporting.',
    tags: ['Data Migration', 'Python', 'SQL', 'Power BI'],
  },
  {
    company: 'AgroMall',
    role: 'Data Analyst',
    period: 'Mar 2021 — Aug 2022',
    summary: 'Built operational dashboards and recurring reports across agricultural and financial workflows while improving validation and automation.',
    tags: ['Power BI', 'SQL', 'Excel', 'Python'],
  },
];

export const projects: Project[] = [
  {
    title: 'Inscend',
    category: 'Product',
    blurb: 'Decision intelligence for founder-led commerce businesses. Designed around a practical question: what should I do next, and what could it mean financially?',
    href: 'https://www.inscend.io/',
    tags: ['AI', 'Decision Intelligence', 'Commerce'],
    featured: true,
  },
  {
    title: 'Data Fellows',
    category: 'Product',
    blurb: 'A global data and technology ecosystem built around practical learning, community, products, and making data useful to people and businesses.',
    href: 'https://datafellowsai.com/',
    tags: ['Community', 'Education', 'Data'],
    featured: true,
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
    title: 'Dividend Policy Forecast',
    category: 'Python / ML',
    blurb: 'Machine-learning pipeline concept for predicting dividend policy changes across S&P 500 companies using financial and market features.',
    href: 'https://github.com/tobiolad/Dividend-Policy-Forecast',
    tags: ['Machine Learning', 'Finance', 'Feature Engineering'],
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
    title: 'Healthcare Power BI',
    category: 'BI',
    blurb: 'Single-page COVID-19 reporting dashboard using Power BI, DAX, and visual design to communicate cases, recovery, and mortality patterns.',
    image: '/images/portfolio/corona.png',
    href: 'https://github.com/tobiolad/HealthCarePowerBI',
    tags: ['Power BI', 'DAX', 'Figma'],
  },
  {
    title: 'Fake News Detection',
    category: 'Python / ML',
    blurb: 'Final-year computer science project exploring machine-learning approaches for fake-news detection in Python.',
    href: 'https://github.com/tobiolad/Fake-News-Detection',
    tags: ['Python', 'Machine Learning', 'NLP'],
  },
];

export const writing: WritingItem[] = [
  {
    type: 'Article',
    title: 'Four Months Later, I Am Building Differently',
    source: 'LinkedIn',
    blurb: 'Notes from Startupfest, customer calls, collaboration, narrowing Inscend’s focus, launching with Shopify, and learning what earns trust.',
    href: 'https://www.linkedin.com/pulse/four-months-later-i-am-building-differently-tobi-oladimeji-zuwmc',
  },
  {
    type: 'Recognition',
    title: 'League of Innovators — 2024 Cohort',
    source: 'League of Innovators',
    blurb: 'Selected for Canada’s free accelerator for founders under 30.',
    href: 'https://www.loi.ac/',
  },
  {
    type: 'Feature',
    title: 'Championing Data-Driven Decision-Making for Small Businesses',
    source: 'AfriBlocks',
    blurb: 'Profiled by AfriBlocks, a Techstars-backed platform spotlighting high-impact African professionals.',
    href: 'https://blog.afriblocks.com/en/championing-data-driven-decision-making-for-small-businesses',
  },
  {
    type: 'Profile',
    title: 'Beyond Data: How Tobi Oladimeji Is Redefining the Human Side of Innovation',
    source: 'IKONIK Magazine',
    blurb: 'A profile on decision intelligence, community building, entrepreneurship, and making data useful to small businesses.',
    href: 'https://ikonikpress.com/beyond-data-how-tobi-oladimeji-is-redefining-the-human-side-of-innovation/',
  },
  {
    type: 'Article',
    title: 'Practical Ways Small Businesses Can Use Data to Grow',
    source: 'IKONIK Magazine',
    blurb: 'A practical guide to using everyday business data without expensive or complicated tooling.',
    href: 'https://ikonikpress.com/practical-ways-small-businesses-can-use-data-to-grow/',
  },
  {
    type: 'Article',
    title: 'Avoiding Common Data Mistakes',
    source: 'IKONIK Magazine',
    blurb: 'A field guide to the data mistakes that quietly cost small businesses time, money, and trust.',
    href: 'https://ikonikpress.com/avoiding-common-data-mistakes-by-tobi-oladimeji-for-ikonik-magazine/',
  },
  {
    type: 'Event',
    title: 'Beauty Founder Growth Lab: From First Customer to Repeat Buyer',
    source: 'Startupfest Off Event',
    blurb: 'Founder roundtable on acquisition, retention, positioning, metrics, customer feedback, and smarter growth decisions.',
    href: 'https://luma.com/wuz330xj',
  },
];

export const capabilities: CapabilityGroup[] = [
  { label: 'Analytics & BI', items: ['Power BI', 'SQL', 'Advanced Excel', 'Tableau', 'KPI design', 'Executive reporting'] },
  { label: 'Data & Engineering', items: ['Python', 'ETL', 'Data quality', 'Validation', 'PostgreSQL', 'Microsoft SQL Server'] },
  { label: 'AI & Automation', items: ['LLM workflows', 'Document extraction', 'AI evaluation', 'Workflow automation', 'Decision systems'] },
  { label: 'Product & Strategy', items: ['Product discovery', 'Founder research', 'Requirements', 'Stakeholder engagement', 'Partnerships'] },
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
