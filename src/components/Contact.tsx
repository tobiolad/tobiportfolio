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
         <h2>Let’s stay connected.</h2>
         <p>I enjoy conversations about data, AI, product development and technology. For Data Fellows community and collaboration inquiries, reach out through <a href="https://datafellowsai.com/" target="_blank" rel="noopener noreferrer">datafellowsai.com</a>.</p>
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
            <a className="button" href={profile.github} target="_blank" rel="noopener noreferrer">
               <SocialIcon name="github" /> GitHub
            </a>
         </div>
         <small>{profile.location}</small>
      </section>
   );
};

export default Contact;
