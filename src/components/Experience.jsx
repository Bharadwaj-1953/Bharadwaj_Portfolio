import React from 'react';
import experience from '../data/experience';
import AnimatedSection from './AnimatedSection';

const logoMap = {
  'Florida State University': '/FSU 1.png',
  'Sri Bhramara Township PVT. LTD.': '/sri.png',
  'Unical Systems': '/Unical.jpg',
  'Oasis Infobyte': '/Oasis.jpg',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-14">
            Professional Experience
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-zinc-700/50 to-transparent" />

          <div className="space-y-6">
            {experience.map((exp, i) => {
              const logo = logoMap[exp.companyName];
              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="relative md:pl-14">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-0 top-7 w-8 h-8 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-zinc-950 ring-offset-0" />
                    </div>

                    {/* Card */}
                    <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-700/70 hover:bg-zinc-900/70 transition-all duration-300">

                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                        {logo && (
                          <img
                            src={logo}
                            alt={exp.companyName}
                            className="w-10 h-10 rounded-xl object-contain bg-white p-1 shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-bold text-zinc-100 text-base leading-snug">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-zinc-400 mt-0.5">{exp.companyName}</p>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                            <span className="text-xs text-zinc-500 font-mono">{exp.date}</span>
                            <span className="text-zinc-700 text-xs">·</span>
                            <span className="text-xs text-zinc-500">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {exp.points.length > 0 && (
                        <ul className="space-y-2.5">
                          {exp.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-1 h-1 rounded-full bg-indigo-500/70 mt-2 shrink-0" />
                              <p className="text-sm text-zinc-400 leading-relaxed">{point}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
