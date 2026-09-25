import { profile } from '../data/portfolio';

const scrollToTop = (e: React.MouseEvent) => {
   e.preventDefault();
   window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
   <footer className="footer shell">
      <span className="brand"><span>TO</span></span>
      <p>Data → context → decision → action.</p>
      <div>
         <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
         <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
         <a href="#top" onClick={scrollToTop}>Back to top</a>
      </div>
   </footer>
);

export default Footer;
