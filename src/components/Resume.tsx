import type { Resume as ResumeType } from '../interfaces';

const Resume = ({ data }: { data: ResumeType }) => {
  const { skillmessage, education, work, skillGroups } = data;

  return (
    <section id="resume" className="container" data-reveal>
      <div className="section-head">
        <span className="eyebrow">Experience</span>
        <h2>Background</h2>
      </div>

      <div className="exp-block">
        <h3 className="block-title">Work</h3>
        {work.map((job) => (
          <div className="timeline-item" key={job.company}>
            <div className="timeline-date">{job.years}</div>
            <div>
              <div className="timeline-role">{job.title}</div>
              <div className="timeline-company">{job.company}</div>
              <ul className="timeline-highlights">
                {job.highlights.map((highlight: string) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="exp-block">
        <h3 className="block-title">Education</h3>
        {education.map((edu) => (
          <div className="timeline-item" key={edu.school}>
            <div className="timeline-date">{edu.graduated}</div>
            <div>
              <div className="timeline-role">{edu.school}</div>
              <div className="timeline-company">{edu.degree} &middot; {edu.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="exp-block">
        <h3 className="block-title">Skills</h3>
        <p className="section-sub" style={{ marginBottom: 24 }}>{skillmessage}</p>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h4>{group.name}</h4>
              <div className="skill-badges">
                {group.skills.map((skill: string) => <span className="badge" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
