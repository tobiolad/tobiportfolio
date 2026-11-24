import { useMemo, useRef, useState } from 'react';
import { IconArrowUpRight } from './Icons';
import { projects, type Project, type ProjectCategory } from '../data/portfolio';
import { useStaggerReveal } from '../motion';

const CATEGORY_ORDER: ProjectCategory[] = [
  'Product Analytics & Experimentation',
  'Data Analytics & Business Intelligence',
  'AI & Intelligent Automation',
  'Data Engineering',
  'Software & Product Development',
  'Enterprise Transformation',
];
// Only show a filter for categories that actually have a project, so a filter
// never shows an empty grid after a project gets recategorized.
const FILTERS: Array<'All' | ProjectCategory> = [
  'All',
  ...CATEGORY_ORDER.filter((c) => projects.some((p) => p.category === c)),
];

const initials = (title: string) => title.slice(0, 2).toUpperCase();

const Visual = ({ href, className, children }: { href?: string; className: string; children: React.ReactNode }) =>
  href ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );

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
        <Visual className="project-image" href={project.href}>
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </Visual>
      ) : project.logo ? (
        <Visual className="project-visual logo" href={project.href}>
          <img src={project.logo} alt={`${project.title} logo`} loading="lazy" />
        </Visual>
      ) : (
        <Visual className="project-visual" href={project.href}>
          <span>{initials(project.title)}</span>
        </Visual>
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
          {project.href && (
            <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
              View project <IconArrowUpRight />
            </a>
          )}
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
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, '.project-card');

  return (
    <section id="work" className="section shell">
      <header className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Products, systems, and analysis built to make decisions clearer.</h2>
        <p>A mix of product analytics, business intelligence, applied AI, data engineering, and enterprise transformation work.</p>
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
      <div className="project-grid" ref={gridRef}>
        {shown.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};

export default Portfolio;
