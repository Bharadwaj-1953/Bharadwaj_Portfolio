import React from 'react';
import AnimatedSection from './AnimatedSection';
import projects from '../data/projects';

const stats = [
  { value: 'Master of Science', label: 'Computer Science', sub: 'Florida State University' },
  { value: '~4', label: 'Years of experience', sub: 'Public sector, research, and industry' },
  { value: String(projects.length), label: 'Public GitHub repositories', sub: 'Systems · ML · Cloud · Full stack' },
  { value: '2', label: 'Research outputs', sub: 'IEEE paper · Indian patent application' },
];

const tags = ['Python', 'C++', 'C', 'Java', 'TypeScript', 'SQL', 'distributed systems', 'RDMA', 'MPI', 'InfiniBand', 'QEMU', 'SSIS', 'ServiceNow', 'Salesforce'];

export default function About() {
  return (
    <section id="about" tabIndex={-1} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-accent-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-14 max-w-lg">
            Building systems that hold under pressure
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: bio */}
          <AnimatedSection delay={0.1}>
            <div className="about-bio space-y-5 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                I’m a software engineer focused on backend and distributed systems, the layer where
                correctness, concurrency, and scale all have to work together under real
                production load. I like problems that don't have a clean textbook answer: where
                the bottleneck actually is, why a system behaves differently at 10× the traffic,
                what breaks first when you push it.
              </p>
              <p>
                I come at engineering from both ends, hands-on systems work close to the
                hardware, and enough research background to know when the "obvious" fix is
                actually a workaround. I'd rather understand why something fails than patch
                around it.
              </p>
              <p>
                Currently at the Florida Department of Children &amp; Families, building
                Python and SQL automation pipelines, SSIS workflows, and data systems
                that support child welfare programs and federal compliance reporting.
              </p>
              <p>
                Certified across AWS, Google Cloud, and Azure. Comfortable moving between
                infrastructure, algorithms, and the connective tissue in between.
              </p>
              <ul className="about-technologies" aria-label="Core technologies">
                {tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-4" style={{ alignItems: 'stretch' }}>
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={0.15 + i * 0.08} className="h-full">
                <div className="h-full border-t border-zinc-700 py-4 flex flex-col">
                  <p className="about-stat-value font-semibold text-accent-200 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-300 font-medium mb-0.5">{stat.label}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-auto">{stat.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
