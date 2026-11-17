import { capabilities, education } from '../data/portfolio';

const About = () => (
  <section id="about" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">About</p>
      <h2>Across data, AI, and product: in enterprise and in my own ventures.</h2>
    </header>
    <div className="about-grid">
      <div className="story">
        <p className="lede">Data, AI, and product aren’t separate lanes for me. They’re how I’ve approached every problem, in enterprise and in my own company.</p>
        <p>I’ve worked across data analytics, artificial intelligence, business intelligence, and product development at PwC, ESGTree, and Granted, and I currently do independent contract work with Cohere, alongside building my own ventures through Data Fellows, including Inscend.</p>
        <p>That range, from enterprise data transformation to AI-assisted product work to leading my own company, is what I bring to every problem: the rigor of structured analysis and the judgment to turn it into something that actually works.</p>
        <p>I founded Data Fellows in 2022 as a community for people interested in data and technology, and it’s grown into a global network of 1,600+ professionals across 33+ countries. It’s since evolved into an independent automation studio too: alongside the community, learning programs, and industry partnerships, we now design, build, and manage automation solutions for organizations’ recurring operational challenges. I’m still open to the right opportunities, technical collaborations, and conversations about complex organizational problems alongside that.</p>
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
