import { experience } from '../data/portfolio';

const Resume = () => (
  <section id="experience" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">Experience</p>
      <h2>From enterprise data transformation to founder-led product building.</h2>
      <p>The common thread is practical decision support: cleaner information, clearer systems, and better actions.</p>
    </header>
    <div className="timeline">
      {experience.map((job) => (
        <article className="job" key={`${job.company}-${job.role}`}>
          <div className="when">{job.period}</div>
          <div>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p>{job.summary}</p>
            <div className="tags">
              {job.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Resume;
