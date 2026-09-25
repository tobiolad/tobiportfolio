import { scrollToSection, scrollToTop } from '../utilities';
import { IconSearch, IconArrow, IconArrowUpRight, SocialIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { profile, focus } from '../data/portfolio';

const NAV_ITEMS = [
   { href: '#work', label: 'Work' },
   { href: '#experience', label: 'Experience' },
   { href: '#writing', label: 'Writing' },
   { href: '#about', label: 'About' },
   { href: '#contact', label: 'Contact' },
];

const Header = ({ onOpenPalette }: { onOpenPalette: () => void }) => {
   const handleNav = (href: string) => (e: React.MouseEvent) => {
      scrollToSection(href)(e);
   };

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

         <header className="hero shell" id="home">
            <div className="hero-copy">
               <p className="status"><i /> {profile.location}</p>
               <p className="eyebrow">Data & AI operator · Product founder · Ecosystem builder</p>
               <h1>{profile.headline}</h1>
               <p className="lead">{profile.intro}</p>
               <div className="actions">
                  <a className="button primary" href="#work" onClick={handleNav('#work')}>
                     Explore selected work <IconArrow />
                  </a>
                  <a className="button" href={`mailto:${profile.email}`}>
                     Start a conversation <IconArrowUpRight />
                  </a>
               </div>
               <div className="socials">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" /> LinkedIn</a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer"><SocialIcon name="github" /> GitHub</a>
                  <a href={profile.x} target="_blank" rel="noopener noreferrer"><SocialIcon name="x" /> X</a>
               </div>
            </div>
            <aside className="portrait-card">
               <img src="/images/headshot3.jpg" alt={profile.name} />
               <div>
                  <span className="eyebrow">Currently</span>
                  <strong>{focus.title}</strong>
                  <p>Decision intelligence for founder-led commerce.</p>
                  <a href={focus.href} target="_blank" rel="noopener noreferrer">inscend.io <IconArrowUpRight /></a>
               </div>
            </aside>
         </header>
      </>
   );
};

export default Header;
