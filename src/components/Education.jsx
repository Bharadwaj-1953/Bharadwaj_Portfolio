import React from 'react';
import AnimatedSection from './AnimatedSection';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    university: 'Florida State University',
    location: 'Tallahassee, FL',
    duration: 'Aug 2024 – May 2026',
    gpa: '3.87 / 4.0',
    logo: '/FSU.png',
    logoStyle: 'object-cover',
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering (Data Analytics)',
    university: 'Vellore Institute of Technology',
    location: 'Andhra Pradesh, India',
    duration: 'Aug 2020 – May 2024',
    gpa: '9.38 / 10.0',
    logo: '/VITAP.png',
    logoStyle: 'object-contain',
  },
];

export default function Education() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-accent-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-12">
            Education
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {educationData.map((edu, i) => (
            <AnimatedSection key={edu.university} delay={i * 0.1}>
              <div className="open-entry h-full flex flex-col">
                <img
                  src={edu.logo}
                  alt={edu.university}
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${edu.logoStyle} bg-white rounded-xl p-1.5 mb-5 shrink-0`}
                />
                <h3 className="font-display font-bold text-zinc-100 text-base leading-snug mb-2 flex-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-400 mb-0.5">{edu.university}</p>
                <p className="text-xs text-zinc-400 font-mono mb-5">{edu.location}</p>
                <div className="flex items-center justify-between pt-4 border-t border-panel-line">
                  <span className="text-xs font-mono text-zinc-400">{edu.duration}</span>
                  <span className="text-sm font-bold font-mono text-accent-400">
                    GPA {edu.gpa}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
