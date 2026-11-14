import { IconArrowUpRight } from './Icons';
import { currentWork } from '../data/portfolio';

const Focus = () => (
  <section className="focus shell" data-reveal>
    {currentWork.map((item) => (
      <div key={item.company}>
        <p className="eyebrow">Current work</p>
        <h2>{item.company}</h2>
        <p>{item.description}</p>
        <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">
          {item.linkLabel} <IconArrowUpRight />
        </a>
      </div>
    ))}
  </section>
);

export default Focus;
