import React, { useEffect, useRef } from 'react';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const links = [
  [FiMail, 'Email', 'mailto:manne.bharadwaj.1953@gmail.com'],
  [FaLinkedin, 'LinkedIn', 'https://www.linkedin.com/in/bharadwaj-manne-711476249/'],
  [FaGithub, 'GitHub', 'https://github.com/Bharadwaj-1953'],
  [FaInstagram, 'Instagram', 'https://www.instagram.com/bharadwaj_manne'],
];

export default function ContactDock() {
  const dock = useRef(null);

  useEffect(() => {
    const compact = window.matchMedia('(max-width: 760px), (max-height: 480px) and (pointer: coarse)');

    let focusFrame = 0;

    function keepFocusVisible(event) {
      const target = event.target;
      if (!compact.matches || !(target instanceof HTMLElement) || dock.current.contains(target)) return;
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(() => {
        if (document.activeElement !== target) return;
        const focused = target.getBoundingClientRect();
        const controls = dock.current.getBoundingClientRect();
        const overlaps = focused.bottom > controls.top && focused.top < controls.bottom &&
          focused.right > controls.left && focused.left < controls.right;
        if (overlaps) {
          const safeCenter = controls.top / 2;
          window.scrollBy({ top: focused.top + focused.height / 2 - safeCenter, behavior: 'instant' });
        }
      });
    }

    document.addEventListener('focusin', keepFocusVisible);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('focusin', keepFocusVisible);
    };
  }, []);

  return (
    <nav ref={dock} className="contact-dock" aria-label="Quick contact">
      {links.map(([Icon, label, href]) => (
        <a key={label} href={href} aria-label={label}
          target={href.startsWith('https:') ? '_blank' : undefined} rel="noopener noreferrer">
          <Icon aria-hidden="true" />
          <span aria-hidden="true">{label}<FiArrowUpRight data-arrow="diagonal" /></span>
        </a>
      ))}
    </nav>
  );
}