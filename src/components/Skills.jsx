import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import skills from '../data/skills';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skills[activeIdx];
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" tabIndex={-1} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-accent-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-10">
            Skills &amp; Technologies
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((cat, i) => (
              <button
                key={cat.title}
                type="button"
                aria-pressed={activeIdx === i}
                onClick={() => setActiveIdx(i)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeIdx === i
                    ? 'bg-accent-600 border-accent-600 text-white shadow-lg shadow-accent-500/20'
                    : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout={!reduceMotion} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full">
                <div className="skill-grid">
                  {active.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.035 }}
                      className="skill-tile group flex flex-col items-center justify-center gap-2 px-2 py-3"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span
                        className="w-8 h-8 rounded-lg bg-panel-hover text-zinc-200 text-[9px] font-bold items-center justify-center text-center leading-tight hidden"
                        aria-hidden="true"
                      >
                        {item.name.replace('\n', ' ').slice(0, 3)}
                      </span>
                      <span className="text-xs text-zinc-300 text-center leading-tight whitespace-pre-line font-mono group-hover:text-zinc-200 transition-colors duration-200">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
