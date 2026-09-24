import { metrics } from '../data/portfolio';

const Metrics = () => (
  <section className="metrics shell" aria-label="Career highlights">
    {metrics.map((m) => (
      <div className="metric" key={m.label}>
        <strong>{m.value}</strong>
        <span>{m.label}</span>
      </div>
    ))}
  </section>
);

export default Metrics;
