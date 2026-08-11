import React from 'react';
import AnimatedSection from './AnimatedSection';

const publications = [
  {
    badge: 'IPO India · Patent',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    topBorder: 'border-t-amber-500/50',
    meta: 'Application No: 202321049964',
    title:
      'Systems and Methods for Detection of Anomalies in Civil Infrastructure Using Context-Aware Semantic Computer Vision Techniques',
    points: [
      'Co-invented a real-time anomaly detection platform using ML, big data, and context-aware semantic computer vision to identify threats across network environments and civil infrastructure simultaneously.',
      'A behavioral engine continuously clusters incoming event data, builds an evolving model of normal system behavior, and triggers instant alerts the moment patterns deviate, with no batch processing or manual review.',
      'Semantic segmentation localizes anomalous regions in infrastructure imagery, quantifies type and severity per region, and routes only role-relevant alerts to each user through a rule-defined relevance engine.',
    ],
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus',
    linkText: 'View Publication',
  },
  {
    badge: 'IEEE · Published',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
    topBorder: 'border-t-sky-500/50',
    meta: 'Accession No: 23204218',
    title:
      'Dilated Convolutions and Time-Frequency Attention for Speech Enhancement',
    points: [
      'Co-authored DTFAAEC, a fully convolutional encoder-decoder for real-time speech enhancement that reconstructs clean speech using Time Frequency Attention inserted after every encoder and decoder layer.',
      'Dilated convolutions aggregate multi-resolution temporal context in a single pass; causal convolutions enforce forward-only processing; two GRU layers in the bottleneck model long-range sequential dynamics of speech.',
      'Outperformed CRN, AECNN-SM, TCNN, and DDAEC on the Common Voice corpus, achieving STOI 91.48 and PESQ 2.89 under babble noise across a range of -5dB to +5dB SNR conditions.',
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/10134924',
    linkText: 'Access Full Article',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Research
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-12">
            Papers &amp; Publications
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.meta} delay={i * 0.1}>
              <div
                className={`bg-zinc-900/50 border border-zinc-800/60 border-t-2 ${pub.topBorder} rounded-2xl p-5 sm:p-6 flex flex-col h-full hover:border-zinc-700/70 hover:bg-zinc-900/70 transition-all duration-300`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-bold font-mono px-2.5 py-1 rounded-full border shrink-0 ${pub.badgeColor}`}>
                    {pub.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-600 text-right">{pub.meta}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-zinc-100 text-[15px] leading-snug mb-5">
                  {pub.title}
                </h3>

                {/* Points */}
                <div className="space-y-3 flex-1 mb-6">
                  {pub.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                      <p className="text-sm text-zinc-400 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-indigo-400 transition-colors duration-200 group"
                >
                  <span className="group-hover:underline">{pub.linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">&#8594;</span>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
