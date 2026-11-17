import { capabilities, education, profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">About</p>
      <h2>Across data, AI, and product — in enterprise and in my own ventures.</h2>
    </header>
    <div className="about-grid">
      <div className="story">
        <p className="lede">{profile.bio}</p>
        <p>I’ve spent the last few years working across data, AI, and product, at PwC, ESGTree, Granted Technologies, and AgroMall, as an AI data trainer with Cohere, and building my own ventures through Data Fellows, including Inscend.</p>
        <p>That range, from enterprise data transformation to AI-assisted product work to leading my own company, is what I bring to every problem: the rigor of structured analysis and the judgment to turn it into something that actually works.</p>
        <p>As Founder &amp; CEO of Data Fellows, I’m building technology to solve hard operational problems, and I’m open to full-time roles, technical collaborations, and conversations about complex organizational problems alongside that.</p>
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
