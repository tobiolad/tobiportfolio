import type { Main } from '../interfaces';

const About = ({ data }: { data: Main }) => {
   const { name, image, bio, stats } = data;

   return (
      <section id="about" className="container">
         <div className="section-head">
            <span className="eyebrow">About</span>
            <h2>A bit of background</h2>
         </div>
         <div className="about-grid">
            <div className="about-photo">
               <img src={`/images/${image}`} alt={name} />
            </div>
            <div>
               <div className="about-bio">
                  {bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
               </div>
               {stats.length > 0 && (
                  <div className="stat-row">
                     {stats.map((stat) => (
                        <div key={stat.label}>
                           <div className="stat-value">{stat.value}</div>
                           <div className="stat-label">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default About;
