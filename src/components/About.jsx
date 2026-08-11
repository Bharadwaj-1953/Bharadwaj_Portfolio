import React from 'react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '221x', label: 'Speedup over SOTA', sub: 'DriftScope · C++17' },
  { value: '3.87', label: 'GPA at FSU', sub: 'Computer Science' },
  { value: '13', label: 'GitHub Projects', sub: 'Systems · ML · Cloud · Full-Stack' },
  { value: '2', label: 'Publications', sub: 'IEEE + IPO India Patent' },
];

const tags = ['Python', 'C++', 'C', 'Java', 'TypeScript', 'Distributed Systems', 'RDMA', 'MPI', 'InfiniBand', 'QEMU'];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-14 max-w-lg">
            Building systems that hold under pressure
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                Software Engineer focused on backend and distributed systems, the layer where
                correctness, concurrency, and scale all have to work together under real
                production load. I like problems that don't have a clean textbook answer: where
                the bottleneck actually is, why a system behaves differently at 10x traffic,
                what breaks first when you push it.
              </p>
              <p>
                I come at engineering from both ends, hands-on systems work close to the
                hardware, and enough research background to know when the "obvious" fix is
                actually a workaround. I'd rather understand why something fails than patch
                around it.
              </p>
              <p>
                Certified across AWS, GCP, and Azure. Comfortable moving between
                infrastructure, algorithms, and the connective tissue in between.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-md text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4" style={{ alignItems: 'stretch' }}>
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={0.15 + i * 0.08} className="h-full">
                <div className="h-full bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 group flex flex-col">
                  <p className="font-mono text-2xl sm:text-3xl font-bold text-zinc-100 mb-1.5 group-hover:text-indigo-300 transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-300 font-medium mb-1">{stat.label}</p>
                  <p className="text-xs text-zinc-600 font-mono mt-auto">{stat.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
