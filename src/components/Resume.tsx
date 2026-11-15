import { useState } from 'react';
import { experience, type ProgramLogo } from '../data/portfolio';

const VISIBLE_COUNT = 8;

const ProgramChip = ({ program }: { program: ProgramLogo }) => {
  const [imgOk, setImgOk] = useState(true);
  const content = program.logo && imgOk ? (
    <img src={program.logo} alt={program.name} loading="lazy" onError={() => setImgOk(false)} />
  ) : (
    <span>{program.name}</span>
  );
  return program.href ? (
    <a className="job-logo" href={program.href} target="_blank" rel="noopener noreferrer" title={program.name}>
      {content}
    </a>
  ) : (
    <span className="job-logo" title={program.name}>{content}</span>
  );
};

const Resume = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? experience : experience.slice(0, VISIBLE_COUNT);
  const hiddenCount = experience.length - VISIBLE_COUNT;

  return (
    <section id="experience" className="section shell" data-reveal>
      <header className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>From enterprise data transformation to founder-led product building.</h2>
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
              {job.logos && (
                <div className="job-logos">
                  {job.logos.map((p) => <ProgramChip key={p.name} program={p} />)}
                </div>
              )}
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
