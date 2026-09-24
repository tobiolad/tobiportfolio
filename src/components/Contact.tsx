import { useState } from 'react';
import { IconMail, IconCopy, IconCheck, SocialIcon } from './Icons';
import { profile } from '../data/portfolio';

const Contact = () => {
   const [copied, setCopied] = useState(false);

   const copyEmail = async () => {
      try {
         await navigator.clipboard.writeText(profile.email);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch {
         // clipboard unavailable; mailto link below still works
      }
   };

   return (
      <section id="contact" className="contact shell" data-reveal>
         <p className="eyebrow">Contact</p>
         <h2>Working on a hard data, AI, product, or decision problem?</h2>
         <p>Open to data, AI, analytics, senior role opportunities, and strategic product conversations.</p>
         <div className="actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
               <IconMail /> Email me
            </a>
            <button className="button" onClick={copyEmail} type="button">
               {copied ? <IconCheck /> : <IconCopy />} {copied ? 'Copied' : 'Copy email'}
            </button>
            <a className="button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
               <SocialIcon name="linkedin" /> LinkedIn
            </a>
         </div>
         <small>{profile.location}</small>
      </section>
   );
};

export default Contact;
