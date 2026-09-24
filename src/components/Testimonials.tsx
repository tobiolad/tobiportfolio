import type { TestimonialsData } from '../interfaces';

const Testimonials = ({ data }: { data: TestimonialsData }) => {
   const testimonials = data.testimonials;

   return (
      <section id="testimonials" className="container" data-reveal>
         <div className="section-head">
            <span className="eyebrow">Recommendations</span>
            <h2>What people I've worked with say</h2>
         </div>
         <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
               <div className="testimonial-card" key={testimonial.user}>
                  <p>&ldquo;{testimonial.text}&rdquo;</p>
                  <cite>{testimonial.user}</cite>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Testimonials;
