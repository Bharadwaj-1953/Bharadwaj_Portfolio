import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import projects from '../data/projects';
import AnimatedSection from './AnimatedSection';

// 6 best projects across all domains
const featuredTitles = [
  'PMTrace - Persistent Memory File System Bug Detection Framework',
  'DriftScope - High-Performance Data Stream Outlier Detection Engine',
  'InfinixCore - Distributed Computing Engine via InfiniBand and RDMA',
  'AtlasSync - AI-Powered Collaborative Travel Planning Platform',
  'BirthViz - Interactive Florida Medicaid Analytics Dashboard',
  'ApexFlow - Machine Learning-Based F1 Driver Behavior Analysis',
];

const categoryBadge = {
  Systems:      'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
  ML:           'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  'Full-Stack': 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  Cloud:        'text-sky-400 bg-sky-500/10 border-sky-500/25',
};

const categoryMap = {
  'PMTrace - Persistent Memory File System Bug Detection Framework':     'Systems',
  'DriftScope - High-Performance Data Stream Outlier Detection Engine':  'Systems',
  'InfinixCore - Distributed Computing Engine via InfiniBand and RDMA': 'Systems',
  'AtlasSync - AI-Powered Collaborative Travel Planning Platform':       'Full-Stack',
  'BirthViz - Interactive Florida Medicaid Analytics Dashboard':         'Full-Stack',
  'ApexFlow - Machine Learning-Based F1 Driver Behavior Analysis':       'ML',
};

const featuredProjects = projects.filter(p => featuredTitles.includes(p.title));

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Featured
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100">
              Featured Projects
            </h2>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-indigo-400 transition-colors duration-200 group shrink-0"
            >
              View all 13 projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">&#8594;</span>
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => {
            const cat = categoryMap[project.title] || 'Systems';
            const shortTitle = project.title.split(' - ')[0];

            return (
              <AnimatedSection key={project.title} delay={i * 0.07}>
                <div className="group flex flex-col rounded-2xl p-6 bg-zinc-900/70 border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/8 transition-all duration-300 h-full">

                  {/* Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-semibold font-mono px-2.5 py-1 rounded-full border ${categoryBadge[cat]}`}>
                      {cat}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400 tracking-[0.15em] uppercase">
                      Featured
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-zinc-100 text-base leading-snug mb-2.5">
                    {shortTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key achievement */}
                  <div className="mb-5">
                    <p className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                      <span className="text-indigo-400 font-mono mt-0.5 shrink-0">+</span>
                      <span>{project.features[0]}</span>
                    </p>
                  </div>

                  {/* Top 4 tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 bg-zinc-800/80 border border-zinc-700/40 rounded text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-indigo-400 transition-colors duration-200 group/link"
                  >
                    <FaGithub size={12} />
                    <span className="group-hover/link:underline">View on GitHub</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">&#8594;</span>
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-indigo-500/40 text-zinc-300 hover:text-zinc-100 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-indigo-500/5 group"
            >
              Browse all 13 projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">&#8594;</span>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
