import { IconArrowUpRight } from './Icons';
import { currentWork } from '../data/portfolio';
import { scrollToSection } from '../utilities';

const Focus = () => (
  <section className="focus shell" data-reveal>
    {currentWork.map((item) => {
      const isInternal = item.href.startsWith('#');
      return (
        <div key={item.title}>
          <p className="eyebrow">{item.eyebrow}</p>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {isInternal ? (
            <a className="text-link" href={item.href} onClick={scrollToSection(item.href)}>
              {item.linkLabel} <IconArrowUpRight />
            </a>
          ) : (
            <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">
              {item.linkLabel} <IconArrowUpRight />
            </a>
          )}
        </div>
      );
    })}
  </section>
);

export default Focus;
