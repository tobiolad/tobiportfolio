import { useState } from 'react';
import { experience } from '../data/portfolio';

const VISIBLE_COUNT = 8;

const Resume = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? experience : experience.slice(0, VISIBLE_COUNT);
  const hiddenCount = experience.length - VISIBLE_COUNT;

  return (
    <section id="experience" className="section shell" data-reveal>
      <header className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Experience across data, AI, product and community.</h2>
        <p>The common thread is practical decision support: cleaner information, clearer systems, and better actions.</p>
      </header>
      <div className="timeline">
        {shown.map((job) => (
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
      {!showAll && hiddenCount > 0 && (
        <button type="button" className="button show-more" onClick={() => setShowAll(true)}>
          Show {hiddenCount} more role{hiddenCount === 1 ? '' : 's'}
        </button>
      )}
    </section>
  );
};

export default Resume;
