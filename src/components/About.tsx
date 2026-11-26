import { capabilities, education } from '../data/portfolio';

const About = () => (
  <section id="about" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">About</p>
      <h2>A data, AI, and product professional who builds useful systems and works well across teams.</h2>
    </header>
    <div className="about-grid">
      <div className="story">
        <p className="lede">I work at the intersection of data, AI, and product development, helping organizations solve problems through technology.</p>
        <p>My experience spans enterprise analytics, business intelligence, data engineering, applied AI, software product development and digital transformation across PwC, ESGTree, Granted and Cohere.</p>
        <p>Alongside that work, I’ve grown Data Fellows into a global, community-led technology initiative connecting more than 1,600 professionals across 33 countries. I also worked on Inscend, a Shopify-connected commerce product initiative that concluded in November 2026, contributing to product discovery, engineering coordination and merchant pilots.</p>
        <p>That range gives me structured analytical judgment, product sense and practical experience working with technical and business stakeholders.</p>
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
