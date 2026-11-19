import React, { useEffect, useState } from 'react';
import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

const profiles = [
  ['GitHub', 'https://github.com/Bharadwaj-1953'],
  ['LinkedIn', 'https://www.linkedin.com/in/bharadwaj-manne-711476249/'],
  ['Instagram', 'https://www.instagram.com/bharadwaj_manne'],
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver(([entry]) => {
      setShowBackToTop(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" tabIndex={-1} className="site-footer">
      <div className="shell">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch.</h2>
        <div className="footer-links">
          <a className="solid-button" href="mailto:manne.bharadwaj.1953@gmail.com">Send an email <FiArrowUpRight data-arrow="diagonal" aria-hidden="true" /></a>
          {profiles.map(([label, href]) => (
            <a className="text-link" key={label} href={href} target="_blank" rel="noopener noreferrer">{label} <FiArrowUpRight data-arrow="diagonal" aria-hidden="true" /></a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bharadwaj Manne</span>
          <a className="text-link footer-back-to-top" href="#hero">Back to top <FiArrowUp data-arrow="up" aria-hidden="true" /></a>
        </div>
      </div>
      {showBackToTop && (
        <a className="back-to-top-float" href="#hero" aria-label="Back to top">
          <FiArrowUp data-arrow="up" aria-hidden="true" />
          <span aria-hidden="true">Back to top</span>
        </a>
      )}
    </footer>
  );
}