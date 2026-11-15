import { useRef } from 'react';
import { scrollToSection, scrollToTop } from '../utilities';
import { IconSearch, IconArrow, IconArrowUpRight, SocialIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/portfolio';
import { useHeroIntro, useTiltPortrait } from '../motion';

const NAV_ITEMS = [
   { href: '#work', label: 'Work' },
   { href: '#experience', label: 'Experience' },
   { href: '#publications', label: 'Publications' },
   { href: '#about', label: 'About' },
   { href: '#contact', label: 'Contact' },
];

const Header = ({ onOpenPalette }: { onOpenPalette: () => void }) => {
   const handleNav = (href: string) => (e: React.MouseEvent) => {
      scrollToSection(href)(e);
   };
   const heroRef = useRef<HTMLElement>(null);
   const portraitRef = useRef<HTMLElement>(null);
   useHeroIntro(heroRef);
   useTiltPortrait(portraitRef);

   return (
      <>
         <nav className="site-nav" id="top">
            <a className="brand" href="#top" onClick={scrollToTop}>
               <span>TO</span>
               <strong>{profile.name}</strong>
            </a>
            <ul className="nav-links">
               {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                     <a href={item.href} onClick={handleNav(item.href)}>{item.label}</a>
                  </li>
               ))}
            </ul>
            <div className="nav-actions">
               <button onClick={onOpenPalette} aria-label="Open quick navigation" className="palette-trigger">
                  <IconSearch /><small>⌘K</small>
               </button>
               <ThemeToggle />
            </div>
         </nav>

         <header className="hero shell" id="home" ref={heroRef}>
            <div className="hero-copy">
               <p className="status" data-hero-item><i /> {profile.location}</p>
               <p className="eyebrow" data-hero-item>Founder · Product builder · Data & AI professional</p>
               <h1 className="hero-name" aria-label={profile.name}>
                  {profile.name.split(' ').map((word, i) => (
                     <span className="word-mask" key={i}>
                        <span className="word-inner" aria-hidden="true">{word}</span>
                     </span>
                  ))}
               </h1>
               <p className="lead" data-hero-item>{profile.headline} {profile.intro}</p>
               <div className="actions" data-hero-item>
                  <a className="button primary" href="#work" onClick={handleNav('#work')}>
                     Explore My Work <IconArrow />
                  </a>
                  <a className="button" href="#contact" onClick={handleNav('#contact')}>
                     Get in Touch <IconArrowUpRight />
                  </a>
               </div>
               <div className="socials" data-hero-item>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" /> LinkedIn</a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer"><SocialIcon name="github" /> GitHub</a>
                  <a href={profile.x} target="_blank" rel="noopener noreferrer"><SocialIcon name="x" /> X</a>
               </div>
            </div>
            <aside className="portrait-frame" ref={portraitRef}>
               <img src="/images/headshot3.jpg" alt={profile.name} width={1333} height={2000} fetchPriority="high" />
            </aside>
         </header>
      </>
   );
};

export default Header;
