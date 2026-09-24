import { IconArrowUpRight, IconBadge } from './Icons';
import type { PressData } from '../interfaces';

const Press = ({ data }: { data: PressData }) => {
  const { recognition, writing } = data;

  return (
    <section id="press" className="container" data-reveal>
      <div className="section-head">
        <span className="eyebrow">Press & recognition</span>
        <h2>Featured & published</h2>
      </div>

      <div className="press-grid">
        <div>
          <h3 className="block-title">Recognition</h3>
          <ul className="press-list">
            {recognition.map((item) => (
              <li key={item.title}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <IconBadge className="press-icon" />
                  <span>
                    <span className="press-item-title">{item.title}</span>
                    <span className="press-item-meta">{item.org} &middot; {item.description}</span>
                  </span>
                  <IconArrowUpRight className="press-external" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="block-title">Writing</h3>
          <ul className="press-list">
            {writing.map((item) => (
              <li key={item.title}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>
                    <span className="press-item-title">{item.title}</span>
                    <span className="press-item-meta">{item.outlet}</span>
                  </span>
                  <IconArrowUpRight className="press-external" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Press;
