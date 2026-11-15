import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconArrow } from './Icons';
import { recommendations, type Recommendation, type RecommendationCategory } from '../data/portfolio';

const CATEGORIES: RecommendationCategory[] = [
  'Managers & Senior Colleagues',
  'Teammates',
  'Educators & Mentors',
  'Clients & Collaborators',
];

const FILTERS: Array<'All' | RecommendationCategory> = ['All', ...CATEGORIES];

const initials = (name: string) =>
  name
    .replace(/,.*$/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

const RecCard = ({ r }: { r: Recommendation }) => {
  const [imgOk, setImgOk] = useState(true);
  return (
    <article className="rec-card">
      <header>
        {imgOk ? (
          <img src={r.photo} alt="" aria-hidden="true" loading="lazy" onError={() => setImgOk(false)} />
        ) : (
          <span className="rec-initials" aria-hidden="true">{initials(r.name)}</span>
        )}
        <div>
          <p className="rec-name">{r.name}</p>
          <p className="rec-title">{r.title}</p>
        </div>
      </header>
      <blockquote>
        <p>&ldquo;{r.quote}&rdquo;{r.isExcerpt && <span className="rec-excerpt-tag"> (excerpt)</span>}</p>
      </blockquote>
      <footer>
        <span>{r.relationship}</span>
        <span>{r.date}</span>
      </footer>
    </article>
  );
};

const RecModal = ({ onClose }: { onClose: () => void }) => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lastFocused.current?.focus();
    };
  }, [onClose]);

  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const grouped = useMemo(() => {
    const cats = filter === 'All' ? CATEGORIES : [filter];
    return cats.map((c) => ({ category: c, items: recommendations.filter((r) => r.category === c) }));
  }, [filter]);

  return createPortal(
    <div className="rec-modal-backdrop" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        className="rec-modal"
        role="dialog"
        aria-modal="true"
        aria-label="All recommendations"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        <div className="rec-modal-head">
          <h3>All recommendations</h3>
          <button type="button" className="rec-modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={f === filter}
              className={f === filter ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f} <span className="rec-count">{f === 'All' ? recommendations.length : recommendations.filter((r) => r.category === f).length}</span>
            </button>
          ))}
        </div>
        <div className="rec-modal-body">
          {grouped.map(({ category, items }) => (
            <section key={category}>
              <p className="pub-group-label">{category}</p>
              <div className="rec-modal-grid">
                {items.map((r) => <RecCard key={r.name} r={r} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

const Recommendations = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const shown = useMemo(
    () => (filter === 'All' ? recommendations.filter((r) => r.featured) : recommendations.filter((r) => r.category === filter)),
    [filter]
  );

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.rec-card');
    const amount = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="recommendations" className="section shell" data-reveal>
      <header className="section-head">
        <p className="eyebrow">What people say</p>
        <h2>Recommendations from the people I&rsquo;ve worked with.</h2>
        <p>Managers, teammates, educators, and collaborators, in their own words, pulled directly from LinkedIn.</p>
      </header>
      <div className="filters" role="tablist" aria-label="Filter recommendations by relationship">
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
      <div className="rec-carousel">
        <div className="rec-track" ref={trackRef} role="list">
          {shown.map((r) => <RecCard key={r.name} r={r} />)}
        </div>
        <div className="rec-nav">
          <button type="button" aria-label="Previous" onClick={() => scrollByCard(-1)}><IconArrow className="rec-nav-prev" /></button>
          <button type="button" aria-label="Next" onClick={() => scrollByCard(1)}><IconArrow /></button>
        </div>
      </div>
      <button type="button" className="text-link ghost rec-view-all" onClick={() => setModalOpen(true)}>
        View all {recommendations.length} recommendations
      </button>
      {modalOpen && <RecModal onClose={() => setModalOpen(false)} />}
    </section>
  );
};

export default Recommendations;
