import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skills from '../data/skills';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skills[activeIdx];

  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
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
                onClick={() => setActiveIdx(i)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeIdx === i
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full md:inline-block md:w-auto md:min-w-0 md:max-w-full bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 md:p-8">
                <p className="text-xs text-zinc-600 font-mono mb-6 uppercase tracking-widest">
                  {active.title}
                </p>
                <div className="flex flex-wrap gap-3">
                  {active.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.035 }}
                      className="group flex flex-col items-center gap-2 p-3 w-20 bg-zinc-900 border border-zinc-800/60 rounded-xl hover:border-indigo-500/40 hover:bg-zinc-800/60 hover:scale-110 hover:-translate-y-1 transition-all duration-200 cursor-default shadow-sm hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <img
                        src={item.icon}
                        alt={item.name.replace('\n', ' ')}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-zinc-400 text-center leading-tight whitespace-pre-line font-mono group-hover:text-zinc-200 transition-colors duration-200">
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
