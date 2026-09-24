import { IconArrowUpRight } from './Icons';
import { writing } from '../data/portfolio';

const Writing = () => (
  <section id="writing" className="section shell" data-reveal>
    <header className="section-head">
      <p className="eyebrow">Writing & speaking</p>
      <h2>Thinking in public while building.</h2>
      <p>Decision intelligence, practical AI, small-business data, community, and the work between insight and action.</p>
    </header>
    <div className="writing-grid">
      {writing.map((item) => (
        <a className="writing-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.title}>
          <span className="eyebrow">{item.type}</span>
          <h3>{item.title}</h3>
          <p>{item.blurb}</p>
          <footer>{item.source} <IconArrowUpRight /></footer>
        </a>
      ))}
    </div>
  </section>
);

export default Writing;
