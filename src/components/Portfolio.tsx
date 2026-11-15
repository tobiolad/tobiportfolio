import { useMemo, useState } from 'react';
import { IconArrowUpRight } from './Icons';
import { projects, type Project, type ProjectCategory } from '../data/portfolio';

const FILTERS: Array<'All' | ProjectCategory> = ['All', 'Product', 'Experiment', 'AI Agents', 'BI', 'Python / ML', 'SQL', 'Data'];

const initials = (title: string) => title.slice(0, 2).toUpperCase();

const CASE_STUDY_LABELS = [
  ['context', 'Context'],
  ['problem', 'Problem'],
  ['contribution', 'My Contribution'],
  ['approach', 'Approach'],
  ['outcome', 'Outcome'],
] as const;

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card">
      {project.image ? (
        <a className="project-image" href={project.href} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </a>
      ) : project.logo ? (
        <a className="project-visual logo" href={project.href} target="_blank" rel="noopener noreferrer">
          <img src={project.logo} alt={`${project.title} logo`} loading="lazy" />
        </a>
      ) : (
        <a className="project-visual" href={project.href} target="_blank" rel="noopener noreferrer">
          <span>{initials(project.title)}</span>
        </a>
      )}
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.badge && <span>{project.badge}</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.blurb}</p>
        <div className="tags">
          {project.tags.map((t) => <span key={t}>{t}</span>)}
        </div>

        {project.caseStudy && expanded && (
          <dl className="case-study">
            {CASE_STUDY_LABELS.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{project.caseStudy![key]}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="project-links">
          <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
            View project <IconArrowUpRight />
          </a>
          {project.caseStudy && (
            <button type="button" className="text-link ghost" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Hide case study' : 'Read full case study'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="section shell" data-reveal>
      <header className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Products, systems, and analysis built to make decisions clearer.</h2>
        <p>A mix of product, business intelligence, machine learning, SQL, and operational analytics.</p>
      </header>
      <div className="filters" role="tablist" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={f === filter}
            className={f === filter ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};

export default Portfolio;
