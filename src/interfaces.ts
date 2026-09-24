export interface ResumeData {
    main: Main;
    resume: Resume;
    portfolio: PortfolioData;
    testimonials: TestimonialsData;
}

export interface TestimonialsData {
    testimonials: Testimonial[];
}

export interface Testimonial {
    text: string;
    user: string;
}

export interface PortfolioData {
    featured: Project[];
    projects: Project[];
}

export interface Project {
    title: string;
    category: string;
    description: string;
    image?: string;
    url: string;
    cta: string;
}

export interface Resume {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skillGroups: SkillGroup[];
}

export interface SkillGroup {
    name: string;
    skills: string[];
}

export interface Work {
    company: string;
    title: string;
    years: string;
    highlights: string[];
}

export interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

export interface Main {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string[];
    stats: Stat[];
    contactmessage: string;
    email: string;
    address: Address;
    linkedin: string;
    social: Social[];
}

export interface Stat {
    label: string;
    value: string;
}

export interface Social {
    name: string;
    url: string;
}

export interface Address {
    city: string;
    state: string;
    zip: string;
}
