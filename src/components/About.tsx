import { capabilities, education, profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">About</p>
      <h2>Analyst by training. Builder by instinct.</h2>
    </header>
    <div className="about-grid">
      <div className="story">
        <p className="lede">{profile.bio}</p>
        <p>I’m a founder with a background in computer science, data analytics, AI, and product development.</p>
        <p>I founded Data Fellows, a global AI and data community with 1,600+ members across 33+ countries, and Inscend, focused on ecommerce technology, education, and business growth.</p>
        <p>I also co-founded Venture Learning Collective, supporting entrepreneurship education and funding readiness.</p>
        <p>Previously, I worked in data analytics at PwC, and I advise GRANTED on data systems and operations.</p>
        <p>I’m interested in building businesses around meaningful problems, bringing the right people together, and turning ideas into practical solutions.</p>
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
