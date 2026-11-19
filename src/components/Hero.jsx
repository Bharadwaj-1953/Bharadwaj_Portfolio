import React from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section id="hero" className="hero" tabIndex={-1}>
      <div className="shell hero-grid">
        <AnimatedSection className="hero-copy">
          <p className="eyebrow">Software engineer</p>
          <h1>Bharadwaj<br />Manne<span className="hero-name-dot" aria-hidden="true">.</span></h1>
          <p className="hero-intro">I build backend and distributed systems, with a focus on performance and reliability under real workloads.</p>
          <div className="hero-actions">
            <a className="solid-button" href="#projects">View projects <FiArrowDown data-arrow="down" aria-hidden="true" /></a>
            <a className="text-link" href="mailto:manne.bharadwaj.1953@gmail.com">Email me <FiArrowUpRight data-arrow="diagonal" aria-hidden="true" /></a>
          </div>
        </AnimatedSection>
        <AnimatedSection className="hero-photo" delay={0.08}>
          <picture>
            <source media="(max-width: 760px)" srcSet="/bharadwaj-manne-mobile.jpg" />
            <img src="/bharadwaj-manne-retouched.jpg" alt="Bharadwaj Manne at a mountain overlook"
              width="1086" height="1448" fetchPriority="high" />
          </picture>
        </AnimatedSection>
      </div>
    </section>
  );
}