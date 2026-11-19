import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['publications', 'Research'],
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const sections = navLinks.map(([id]) => document.getElementById(id));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        setActive(current => entry.isIntersecting ? entry.target.id : current === entry.target.id ? '' : current);
      }
    }, { rootMargin: '-18% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current.focus();
      }
    }
    function closeOnOutsideClick(event) {
      if (!header.current.contains(event.target)) setOpen(false);
    }
    const desktop = window.matchMedia('(min-width: 761px)');
    function closeOnDesktop(event) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="shell nav-layout">
        <a className="wordmark" href="#hero" onClick={() => setOpen(false)}>
          <img className="header-logo" src="/bm-logo.png" alt="" width="32" height="32" />
          Bharadwaj Manne
        </a>
        <button type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open} aria-controls="main-navigation" ref={menuButton} onClick={() => setOpen(!open)}>
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? 'site-nav is-open' : 'site-nav'}>
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Contact <FiArrowUpRight data-arrow="diagonal" aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}