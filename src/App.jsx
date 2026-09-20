import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let active = true;

    function raf(time) {
      if (!active) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      active = false;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <MouseTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
