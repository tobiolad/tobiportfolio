import './App.css'
import { About, Contact, Footer, Header, Portfolio, Metrics, Focus, Resume, Testimonials, Writing, CommandPalette } from './components'
import type { Command } from './components/CommandPalette'
import { profile, projects, writing } from './data/portfolio'
import { useScrollReveal, useCommandPalette } from './hooks'

const NAV_COMMANDS: Command[] = [
  { label: 'Work', group: 'Section', href: '#work' },
  { label: 'Experience', group: 'Section', href: '#experience' },
  { label: 'Writing', group: 'Section', href: '#writing' },
  { label: 'About', group: 'Section', href: '#about' },
  { label: 'Contact', group: 'Section', href: '#contact' },
]

function App() {
  useScrollReveal();
  const { open, setOpen } = useCommandPalette();

  const commands: Command[] = [
    ...NAV_COMMANDS,
    ...projects.map((p) => ({ label: p.title, group: 'Project', href: p.href })),
    ...writing.map((w) => ({ label: w.title, group: 'Writing', href: w.href })),
    { label: 'LinkedIn', group: 'Link', href: profile.linkedin },
    { label: 'GitHub', group: 'Link', href: profile.github },
    { label: 'X', group: 'Link', href: profile.x },
    { label: 'Email me', group: 'Link', href: `mailto:${profile.email}` },
  ];

  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>
      <Header onOpenPalette={() => setOpen(true)} />
      <main id="main">
        <Metrics />
        <Focus />
        <Portfolio />
        <Resume />
        <Writing />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={open} onClose={() => setOpen(false)} commands={commands} />
    </div>
  )
}

export default App
