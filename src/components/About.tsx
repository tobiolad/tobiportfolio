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
        <p>I’ve spent years working with data, analytics and AI. One thing I’ve learned is that having more information doesn’t necessarily make decisions easier.</p>
        <p>Today, I’m building Inscend to help beauty founders understand what’s affecting their products and take action.</p>
        <p>I’m also the founder of Data Fellows, a global AI and data community focused on practical learning, opportunities and making technology more accessible.</p>
        <p>My work brings together data, AI, product development and the people using these tools to solve everyday business problems.</p>
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
