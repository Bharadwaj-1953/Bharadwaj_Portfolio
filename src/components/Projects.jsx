import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import projects from '../data/projects';
import AnimatedSection from './AnimatedSection';

const categories = ['Featured', 'All', 'Systems', 'ML', 'Full-Stack', 'Cloud'];

const projectMeta = {
  'PMTrace - Persistent Memory File System Bug Detection Framework':
    { category: 'Systems', featured: true },
  'DriftScope - High-Performance Data Stream Outlier Detection Engine':
    { category: 'Systems', featured: true },
  'InfinixCore - Distributed Computing Engine via InfiniBand and RDMA':
    { category: 'Systems', featured: true },
  'PeerGuard - Decentralized Fault Tolerance and Network Partition Detection':
    { category: 'Systems', featured: false },
  'NexusMPI - Scalable Distributed Processing Engine via MPI and Docker':
    { category: 'Systems', featured: false },
  'AtlasSync - AI-Powered Collaborative Travel Planning Platform':
    { category: 'Full-Stack', featured: true },
  'BirthViz - Interactive Florida Medicaid Analytics Dashboard':
    { category: 'Full-Stack', featured: true },
  'ApexFlow - Machine Learning-Based F1 Driver Behavior Analysis':
    { category: 'ML', featured: true },
  'MediFlow - Cloud-Native Medical Data Integration and Mining System':
    { category: 'Cloud', featured: false },
  'FarmOracle - Precision Crop Recommendation Engine':
    { category: 'ML', featured: false },
  'MoodLens - Multimodal Emotion Recognition via Facial Expression and Speech':
    { category: 'ML', featured: false },
  'OncoCast - Machine Learning-Based Tumor Classification System':
    { category: 'ML', featured: false },
  'StreamHive - Cloud-Native OTT Streaming Platform':
    { category: 'Cloud', featured: false },
};

const categoryBadge = {
  Systems:      'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
  ML:           'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  'Full-Stack': 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  Cloud:        'text-sky-400 bg-sky-500/10 border-sky-500/25',
};

function ProjectCard({ project, animIndex }) {
  const [expanded, setExpanded] = useState(false);
  const meta = projectMeta[project.title] || {};
  const cat = meta.category || 'Systems';
  const isFeatured = meta.featured;
  const shortTitle = project.title.split(' - ')[0];
  const visibleTechs = expanded ? project.technologies : project.technologies.slice(0, 4);
  const remaining = project.technologies.length - 4;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: animIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col rounded-2xl p-6 border transition-all duration-300 ${
        isFeatured
          ? 'bg-zinc-900/70 border-indigo-500/25 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/8'
          : 'bg-zinc-900/50 border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-900/70'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[11px] font-semibold font-mono px-2.5 py-1 rounded-full border ${categoryBadge[cat]}`}>
          {cat}
        </span>
        {isFeatured && (
          <span className="text-[10px] font-mono text-indigo-400 tracking-[0.15em] uppercase">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display font-bold text-zinc-100 text-base leading-snug mb-2.5">
        {shortTitle}
      </h3>

      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="mb-5">
        <p className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
          <span className="text-indigo-400 font-mono mt-0.5 shrink-0">+</span>
          <span>{project.features[0]}</span>
        </p>
      </div>

      {/* Tech tags — expandable */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {visibleTechs.map(tech => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-0.5 bg-zinc-800/80 border border-zinc-700/40 rounded text-zinc-400"
          >
            {tech}
          </span>
        ))}
        {!expanded && remaining > 0 && (
          <button
            onClick={e => { e.stopPropagation(); setExpanded(true); }}
            className="text-[11px] font-mono px-2 py-0.5 text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 rounded bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-150"
          >
            +{remaining} more
          </button>
        )}
        {expanded && (
          <button
            onClick={e => { e.stopPropagation(); setExpanded(false); }}
            className="text-[11px] font-mono px-2 py-0.5 text-zinc-500 hover:text-zinc-300 border border-zinc-700/40 hover:border-zinc-600 rounded transition-all duration-150"
          >
            Less
          </button>
        )}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-indigo-400 transition-colors duration-200 group/link mt-auto"
      >
        <FaGithub size={12} />
        <span className="group-hover/link:underline">View on GitHub</span>
        <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">&#8594;</span>
      </a>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState('Featured');

  const filtered = projects.filter(p => {
    if (active === 'Featured') return projectMeta[p.title]?.featured;
    if (active === 'All') return true;
    return projectMeta[p.title]?.category === active;
  });

  const headingLabel =
    active === 'Featured' ? 'Featured Projects' :
    active === 'All'      ? 'All Projects' :
    `${active} Projects`;

  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100">
              {headingLabel}
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    active === cat
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 bg-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} animIndex={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
