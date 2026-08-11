import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaEnvelope, href: 'mailto:manne.bharadwaj.1953@gmail.com', label: 'Email', hover: 'hover:text-red-400' },
  { icon: FaGithub, href: 'https://github.com/Bharadwaj-1953', label: 'GitHub', hover: 'hover:text-zinc-100' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/bharadwaj-manne-711476249/', label: 'LinkedIn', hover: 'hover:text-blue-400' },
  { icon: FaInstagram, href: 'https://www.instagram.com/bharadwaj_manne', label: 'Instagram', hover: 'hover:text-pink-400' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">

        <div className="flex items-center gap-3">
          <img src="/bm-logo.png" alt="BM" className="w-6 h-6 object-contain opacity-50" />
          <span className="text-sm text-zinc-600 font-mono">Bharadwaj Manne</span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-zinc-600 ${hover} transition-colors duration-200`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-700 font-mono">
          &copy; {new Date().getFullYear()} Bharadwaj Manne. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
