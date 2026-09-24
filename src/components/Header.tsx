import { useState } from 'react';
import { scrollToSection } from '../utilities';
import { IconMenu, IconClose, SocialIcon } from './Icons';
import type { Main } from '../interfaces';

const NAV_ITEMS = [
   { href: '#about', label: 'About' },
   { href: '#resume', label: 'Experience' },
   { href: '#portfolio', label: 'Work' },
   { href: '#testimonials', label: 'Recommendations' },
   { href: '#contact', label: 'Contact' },
];

const Header = ({ data }: { data: Main }) => {
   const { name, occupation, description, social, email } = data;
   const [menuOpen, setMenuOpen] = useState(false);

   const handleNav = (href: string) => (e: React.MouseEvent) => {
      setMenuOpen(false);
      scrollToSection(href)(e);
   };

   return (
      <>
         <nav className="site-nav" id="home">
            <div className="site-nav-inner">
               <a className="brand" href="#home" onClick={handleNav('#home')}>{name}</a>
               <ul className="nav-links">
                  {NAV_ITEMS.map((item) => (
                     <li key={item.href}>
                        <a href={item.href} onClick={handleNav(item.href)}>{item.label}</a>
                     </li>
                  ))}
               </ul>
               <div className="nav-cta">
                  <a className="btn btn-primary btn-text" href={`mailto:${email}`}>Get in touch</a>
                  <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen((o) => !o)}>
                     {menuOpen ? <IconClose /> : <IconMenu />}
                  </button>
               </div>
            </div>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
               {NAV_ITEMS.map((item) => (
                  <a key={item.href} href={item.href} onClick={handleNav(item.href)}>{item.label}</a>
               ))}
               <a href={`mailto:${email}`}>Get in touch</a>
            </div>
         </nav>

         <header className="hero container-wide">
            <span className="eyebrow">Founder · Data & AI</span>
            <h1>I'm {name}<br />
               <span className="accent-name">{occupation}</span>
            </h1>
            <p className="lede">{description}</p>
            <div className="hero-actions">
               <a className="btn btn-primary" href="#portfolio" onClick={handleNav('#portfolio')}>See what I'm building</a>
               <a className="btn" href="#contact" onClick={handleNav('#contact')}>Get in touch</a>
            </div>
            <div className="hero-social">
               {social.map((network) => (
                  <a key={network.name} className="icon-btn" target="_blank" rel="noopener noreferrer" href={network.url} aria-label={network.name}>
                     <SocialIcon name={network.name} />
                  </a>
               ))}
            </div>
         </header>
      </>
   );
};

export default Header;
