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
        <p>My work sits where data, operations, product, and human judgment meet.</p>
        <p>I started in analytics and business intelligence, working with operational data, dashboards, validation, automation, and enterprise migration. Over time, the work pulled me toward a larger question: how do you help someone make a better decision, not merely give them another dashboard?</p>
        <p>That question now shapes Inscend, Data Fellows, and the way I approach AI-enabled systems.</p>
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
