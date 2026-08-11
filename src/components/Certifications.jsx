import React from 'react';
import certifications from '../data/certifications';
import AnimatedSection from './AnimatedSection';

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-12">
            Certifications
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.issuer} delay={i * 0.07}>
              <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-700/70 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                <span
                  className={`inline-block text-xs font-bold text-white px-3 py-1.5 rounded-full mb-5 bg-gradient-to-r ${cert.color}`}
                >
                  {cert.issuer}
                </span>
                <ul className="space-y-2.5">
                  {cert.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-indigo-500/70 mt-2 shrink-0" />
                      <span className="text-sm text-zinc-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
