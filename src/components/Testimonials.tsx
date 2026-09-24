import { testimonials } from '../data/portfolio';

const Testimonials = () => (
  <section className="quotes shell" aria-label="Recommendations" data-reveal>
    <p className="eyebrow">From people I've worked with</p>
    <div>
      {testimonials.map((t) => (
        <blockquote key={t.name}>
          <p>&ldquo;{t.quote}&rdquo;</p>
          <footer>{t.name}</footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
