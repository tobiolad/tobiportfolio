import { experienceLogos } from '../data/portfolio';
import ProgramChip from './ProgramChip';

const ExperienceLogos = () => (
  <section className="exp-logos shell" aria-label="Professional experience">
    <p className="exp-logos-label">Experience across</p>
    <div className="job-logos">
      {experienceLogos.map((p) => <ProgramChip key={p.name} program={p} />)}
    </div>
  </section>
);

export default ExperienceLogos;
