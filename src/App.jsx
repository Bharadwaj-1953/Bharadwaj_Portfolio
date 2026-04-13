import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Publications />
      <Footer />
    </div>
  );
};

export default App;
