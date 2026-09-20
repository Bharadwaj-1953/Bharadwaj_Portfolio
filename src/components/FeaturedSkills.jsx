import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const featured = [
  { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',           category: 'Language'   },
  { name: 'C++',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',     category: 'Language'   },
  { name: 'Java',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',               category: 'Language'   },
  { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',   category: 'Language'   },
  { name: 'AWS',         icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',                          category: 'Cloud'      },
  { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',           category: 'DevOps'     },
  { name: 'Kubernetes',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',      category: 'DevOps'     },
  { name: 'PostgreSQL',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',   category: 'Database'   },
  { name: 'Redis',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',             category: 'Database'   },
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',             category: 'Frontend'   },
  { name: 'Linux',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',             category: 'Systems'    },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',                 category: 'DevOps'     },
];

const categoryColor = {
  Language: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  Cloud:    'text-sky-400 bg-sky-500/10 border-sky-500/20',
  DevOps:   'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Database: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  Frontend: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Systems:  'text-rose-400 bg-rose-500/10 border-rose-500/20',
};

export default function FeaturedSkills() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Core Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Featured Skills
          </h2>
          <p className="text-zinc-500 text-sm mb-12 max-w-lg">
            The tools I reach for first — across languages, infrastructure, and systems.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {featured.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl hover:border-indigo-500/40 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-default group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
                <div className="text-center">
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 mb-1.5">
                    {skill.name}
                  </p>
                  <span className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded border ${categoryColor[skill.category]}`}>
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
