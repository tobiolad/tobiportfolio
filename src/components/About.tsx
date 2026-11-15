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
        <p>I’ve spent the last few years working with data, building products, and exploring how technology can solve business problems.</p>
        <p>Along the way, I’ve worked with different companies, founded Data Fellows, built Inscend, and had the chance to work with some great people.</p>
        <p>I’m still figuring out what I want to build next, and I’m open to opportunities where I can contribute, learn, and solve interesting problems.</p>
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
