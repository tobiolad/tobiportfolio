import { capabilities, education } from '../data/portfolio';

const About = () => (
  <section id="about" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">About</p>
      <h2>A data, AI, and product professional, with entrepreneurial experience that sharpens how I work.</h2>
    </header>
    <div className="about-grid">
      <div className="story">
        <p className="lede">Data, AI, and product aren’t separate lanes for me. They’re how I approach every problem, whether inside an organization or building my own.</p>
        <p>I’ve worked across enterprise analytics, business intelligence, data engineering, applied AI, and software product development at PwC, ESGTree, and Granted, and I currently support AI model evaluation and data quality as an independent contractor with Cohere.</p>
        <p>Alongside that, I founded Data Fellows in 2022, growing it from a data and technology community into a global network of 1,600+ professionals across 33+ countries that also develops software, data, and AI solutions for operational challenges. I previously founded and led Inscend, an AI-powered B2B SaaS platform for ecommerce merchants, from November 2025 to November 2026.</p>
        <p>That range, from enterprise data transformation to AI model evaluation to leading my own company, is what I bring to a team: the rigor of structured analysis and the judgment to turn it into something that actually works.</p>
        <p className="human">Outside the work, I play saxophone and enjoy mentoring people early in their data and technology careers.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((group) => (
          <div className="capability" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="education">
      {education.map((edu) => (
        <div key={edu.school}>
          <span>{edu.year}</span>
          <h3>{edu.degree}</h3>
          <p>{edu.school}</p>
          <small>{edu.location}</small>
        </div>
      ))}
    </div>
  </section>
);

export default About;
