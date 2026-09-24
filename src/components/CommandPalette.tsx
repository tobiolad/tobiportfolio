import { useEffect, useMemo, useRef, useState } from 'react';
import { IconSearch, IconArrow } from './Icons';

export interface Command {
  label: string;
  group: string;
  href: string;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  commands: Command[];
}

const CommandPalette = ({ open, onClose, commands }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? commands.filter((c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q))
      : commands;
    return matches.slice(0, 8);
  }, [query, commands]);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      setQuery('');
      setActiveIndex(0);
      const id = window.setTimeout(() => inputRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
    lastFocused.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      window.open(href, href.startsWith('mailto:') ? '_self' : '_blank', 'noopener');
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[activeIndex];
      if (target) go(target.href);
    }
  };

  // Keep keyboard focus inside the dialog while it's open, per WAI-ARIA
  // modal dialog practice: Tab/Shift+Tab wrap within its focusable elements
  // instead of leaking into the (visually obscured) page behind it.
  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'input, a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        <div className="palette-input">
          <IconSearch />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Jump to a section, project, or link…"
            aria-label="Search"
            autoComplete="off"
          />
          <kbd>esc</kbd>
        </div>
        <div className="palette-results" role="listbox">
          {results.length === 0 && <p className="palette-empty">No matches.</p>}
          {results.map((c, i) => (
            <a
              key={`${c.group}-${c.label}`}
              href={c.href}
              role="option"
              aria-selected={i === activeIndex}
              className={i === activeIndex ? 'active' : ''}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={(e) => {
                e.preventDefault();
                go(c.href);
              }}
            >
              <span>
                <span className="palette-group">{c.group}</span>
                {c.label}
              </span>
              <IconArrow />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
