import { IconArrowUpRight } from './Icons';
import { focus } from '../data/portfolio';

const Focus = () => (
  <section className="focus shell" data-reveal>
    <div>
      <p className="eyebrow">Current focus</p>
      <h2>{focus.title}</h2>
      <p>{focus.description}</p>
      <a className="text-link" href={focus.href} target="_blank" rel="noopener noreferrer">
        Explore Inscend <IconArrowUpRight />
      </a>
    </div>
    <div className="focus-points">
      {focus.points.map((point) => (
        <p key={point}><b>✓</b>{point}</p>
      ))}
    </div>
  </section>
);

export default Focus;
