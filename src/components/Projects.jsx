import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import projects from '../data/projects';
import AnimatedSection from './AnimatedSection';

const categories = ['Featured', 'All', 'Systems', 'ML', 'Full-Stack', 'Cloud'];
const featured = ['PMTrace', 'DriftScope', 'EoMT'];
const projectCategories = {
  PMTrace: 'Systems', DriftScope: 'Systems', InfinixCore: 'Systems', PeerGuard: 'Systems', NexusMPI: 'Systems',
  EoMT: 'ML', ApexFlow: 'ML', FarmOracle: 'ML', MoodLens: 'ML', OncoCast: 'ML',
  AtlasSync: 'Full-Stack', BirthViz: 'Full-Stack',
  MediFlow: 'Cloud', StreamHive: 'Cloud',
};
const catalog = projects.map(project => ({
  ...project,
  name: project.title.split(' - ')[0],
}));

function ProjectArticle({ project }) {
  return (
    <article className="project-entry">
      <p className="eyebrow">{projectCategories[project.name]}</p>
      <h3>
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code on GitHub`}>
          {project.name} <FiArrowUpRight data-arrow="diagonal" aria-hidden="true" />
        </a>
      </h3>
      <p className="project-description">{project.description}</p>
      <details className="project-details">
        <summary>Technical details <FiPlus aria-hidden="true" /></summary>
        <div>
          <ul className="project-findings">
            {project.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
          <p className="project-tech">{project.technologies.slice(0, 4).join(' · ')}</p>
        </div>
      </details>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState('Featured');
  const reduceMotion = useReducedMotion();
  const filtered = active === 'Featured'
    ? featured.map(name => catalog.find(project => project.name === name))
    : catalog.filter(project => active === 'All' || projectCategories[project.name] === active);

  return (
    <section id="projects" tabIndex={-1} className="work-section" aria-labelledby="work-title">
      <div className="shell">
        <AnimatedSection className="work-heading">
          <h2 id="work-title">Projects</h2>
        </AnimatedSection>
        <div className="work-filters" role="group" aria-label="Filter projects">
          {categories.map(category => (
            <button key={category} type="button" aria-pressed={active === category}
              aria-controls="project-results" onClick={() => setActive(category)}>{category}</button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{filtered.length} projects shown</p>
        <motion.div id="project-results" className="project-grid" key={active}
          initial={reduceMotion ? false : { opacity: 0.7, y: 6 }}
          animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
          {filtered.map(project => <ProjectArticle key={project.name} project={project} />)}
        </motion.div>
      </div>
    </section>
  );
}
