import React from 'react';
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
import ContactDock from './components/ContactDock';
import MouseTrail from './components/MouseTrail';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
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
      <ContactDock />
      <MouseTrail />
    </>
  );
}