'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ferramentas', href: '#ferramentas' },
  { label: 'Frameworks', href: '#frameworks' },
  { label: 'Prompts', href: '#prompts' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Portfólio', href: '#portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo" onClick={handleLogoClick} aria-label="PH.hub - Voltar ao início">
          <span className="logo-glyph">◈</span>
          <span>PH<span style={{ color: 'var(--purple-500)' }}>.</span>hub</span>
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#repositorio" className="nav-cta" onClick={() => setOpen(false)}>
              Repositório
            </a>
          </li>
        </ul>

        <button
          className={`navbar-toggle${open ? ' active' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
