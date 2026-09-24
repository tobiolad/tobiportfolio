import { IconMail, SocialIcon } from './Icons';
import type { Main } from '../interfaces';

const Contact = ({ data }: { data: Main }) => {
   const { name, email, contactmessage, address, social } = data;

   return (
      <section id="contact" className="container">
         <div className="contact-panel">
            <span className="eyebrow">Get in touch</span>
            <h2>Let's talk.</h2>
            <p className="lead">{contactmessage}</p>
            <p className="contact-location">{name} &middot; {address.city}, {address.state}, {address.zip}</p>
            <div className="contact-actions">
               <a className="btn btn-primary" href={`mailto:${email}?subject=Hey Tobi`}>
                  <IconMail /> Email me
               </a>
               {social.map((network) => (
                  <a key={network.name} className="icon-btn" target="_blank" rel="noopener noreferrer" href={network.url} aria-label={network.name}>
                     <SocialIcon name={network.name} />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Contact;
