import { IconArrowUpRight } from './Icons';
import { publications, newsletter, founderPrograms, type Publication } from '../data/portfolio';
import ProgramChip from './ProgramChip';

const PublicationCard = ({ item, index }: { item: Publication; index: number }) => (
  <a
    className="writing-card"
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ '--i': index } as React.CSSProperties}
  >
    <span className="eyebrow">{item.type}{item.date ? ` · ${item.date}` : ''}</span>
    <h3>{item.title}</h3>
    <p>{item.blurb}</p>
    <footer>{item.source} <IconArrowUpRight /></footer>
  </a>
);

const Publications = () => {
  const articles = publications.filter((p) => p.type === 'Article');
  const about = publications.filter((p) => p.type === 'Profile' || p.type === 'Feature' || p.type === 'Recognition');
  const video = publications.find((p) => p.type === 'Video');

  return (
    <section id="publications" className="section shell" data-reveal>
      <header className="section-head">
        <p className="eyebrow">Publications & media</p>
        <h2>Writing, interviews, and appearances.</h2>
        <p>Writing and recognition spanning data, AI, product development, organizational operations, entrepreneurship, and technology infrastructure, plus profiles, features, and founder programs.</p>
      </header>

      <h3 className="pub-group-label">Articles I’ve written</h3>
      <div className="writing-grid">
        {articles.map((item, i) => <PublicationCard item={item} index={i} key={item.title} />)}
      </div>

      <h3 className="pub-group-label">Profiles, features & recognition</h3>
      <div className="writing-grid">
        {about.map((item, i) => <PublicationCard item={item} index={i} key={item.title} />)}
      </div>

      <h3 className="pub-group-label">Founder & accelerator programs</h3>
      <p className="pub-group-note">{founderPrograms.summary}</p>
      <div className="job-logos">
        {founderPrograms.programs.map((p) => <ProgramChip key={p.name} program={p} />)}
      </div>

      {video && (
        <a className="video-card" href={video.href} target="_blank" rel="noopener noreferrer">
          <div className="video-thumb">
            <img src={video.thumbnail} alt={video.title} loading="lazy" />
            <span className="video-play" aria-hidden="true" />
          </div>
          <div className="video-copy">
            <span className="eyebrow">Video appearance</span>
            <h3>{video.title}</h3>
            <p>{video.blurb}</p>
            <footer>{video.source} <IconArrowUpRight /></footer>
          </div>
        </a>
      )}

      <div className="newsletter-card">
        <div>
          <span className="eyebrow">Newsletter</span>
          <h3>{newsletter.title}</h3>
          <p>{newsletter.description}</p>
          <a className="text-link" href={newsletter.href} target="_blank" rel="noopener noreferrer">
            {newsletter.linkLabel} <IconArrowUpRight />
          </a>
        </div>
        <ul>
          {newsletter.editions.map((ed) => (
            <li key={ed.title}>
              {ed.href ? (
                <a href={ed.href} target="_blank" rel="noopener noreferrer">{ed.title}</a>
              ) : (
                <span>{ed.title}</span>
              )}
              <small>{ed.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
