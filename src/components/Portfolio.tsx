import { IconArrowUpRight } from './Icons';
import type { PortfolioData, Project } from '../interfaces';

const initials = (title: string) => title.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

const ProjectCard = ({ project, dense }: { project: Project; dense?: boolean }) => (
  <a
    className="project-card"
    target="_blank"
    rel="noopener noreferrer"
    href={project.url}
    title={project.title}
  >
    <div className={`project-media ${project.image ? '' : 'placeholder'}`}>
      {project.image
        ? <img alt={`${project.title} preview`} src={`/images/portfolio/${project.image}`} loading="lazy" />
        : <span>{initials(project.title)}</span>}
    </div>
    <div className="project-body">
      <span className="project-tag">{project.category}</span>
      <h4>{project.title}</h4>
      {!dense && <p>{project.description}</p>}
      <span className="project-cta">{project.cta} <IconArrowUpRight /></span>
    </div>
  </a>
);

const Portfolio = ({ data }: { data: PortfolioData }) => {
  const featured = data?.featured || [];
  const projects = data?.projects || [];

  return (
    <section id="portfolio" className="container-wide">
      <div className="section-head">
        <span className="eyebrow">Selected work</span>
        <h2>What I'm building</h2>
        <p className="section-sub">Current companies and applied AI work, plus a sample of past data and analytics projects.</p>
      </div>

      <div className="portfolio-grid">
        {featured.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>

      {projects.length > 0 && (
        <div className="portfolio-secondary">
          <h3 className="subheading">Data & analytics projects</h3>
          <div className="portfolio-grid dense">
            {projects.map((project) => <ProjectCard key={project.title} project={project} dense />)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
