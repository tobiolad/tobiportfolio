import { scrollToSection } from '../utilities';
import { IconArrowUp, SocialIcon } from './Icons';
import type { Main } from '../interfaces';

const Footer = ({ data }: { data: Main }) => {
   const { social, name } = data;

   return (
      <footer>
         <div className="footer-inner">
            <span className="footer-copy">&copy; {(new Date()).getFullYear()} {name}</span>
            <div className="footer-social">
               {social.map((network) => (
                  <a key={network.name} className="icon-btn" target="_blank" rel="noopener noreferrer" href={network.url} aria-label={network.name}>
                     <SocialIcon name={network.name} />
                  </a>
               ))}
               <a className="icon-btn back-to-top" href="#home" onClick={scrollToSection('#home')} aria-label="Back to top">
                  <IconArrowUp />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
