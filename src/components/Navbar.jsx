import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/50 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <img
            src="/bm-logo.png"
            alt="BM"
            className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          />
          <span className="font-display font-bold text-sm text-zinc-300 hidden sm:block tracking-wide group-hover:text-zinc-100 transition-colors duration-200">
            Bharadwaj Manne
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-zinc-800 mx-3" />
          <a
            href="https://github.com/Bharadwaj-1953"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-all duration-200"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/bharadwaj-manne-711476249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-all duration-200"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:manne.bharadwaj.1953@gmail.com"
            className="ml-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-1.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Contact Me
          </a>

        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://github.com/Bharadwaj-1953"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/bharadwaj-manne-711476249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:manne.bharadwaj.1953@gmail.com"
            className="text-xs font-semibold text-white bg-indigo-600 px-4 py-2.5 rounded-full min-h-[40px] flex items-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
