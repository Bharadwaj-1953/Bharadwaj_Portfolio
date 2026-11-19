import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const publications = [
  {
    badge: 'IPO India · Patent application',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    idLabel: 'Application no.',
    id: '202321049964',
    title:
      'Systems and Methods for Detection of Anomalies in Civil Infrastructure Using Context-Aware Semantic Computer Vision Techniques',
    summary: 'Co-invented a system that uses semantic segmentation to locate and assess anomalies in civil infrastructure images.',
    details: [
      { label: "Scope", text: "The platform combines machine learning and context-aware computer vision to detect unusual activity in network event data and identify anomalies in images of civil infrastructure." },
      { label: "Event stream", text: "A behavioral engine clusters incoming events and updates a model of normal activity over time. It flags deviations as events arrive, so detection can run continuously without waiting for a batch." },
      { label: "Image analysis", text: "Semantic segmentation identifies the image regions affected by an anomaly. The system classifies each affected region and estimates severity so a reviewer can see where the problem is and how serious it appears." },
      { label: "Alert routing", text: "A rule-based relevance layer uses the anomaly type and severity to route alerts to the people responsible for reviewing or acting on them." },
    ],
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus',
    linkText: 'Search application at IP India',
  },
  {
    badge: 'IEEE · Published',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
    idLabel: 'Accession no.',
    id: '23204218',
    title:
      'Dilated Convolutions and Time-Frequency Attention for Speech Enhancement',
    summary: 'Co-authored a real-time speech enhancement model that combines dilated convolutions with time-frequency attention to recover speech from noisy audio.',
    details: [
      { label: "Problem and approach", text: "The Dilated Time-Frequency Attention Autoencoder (DTFAAEC) enhances speech in real time. It uses a fully convolutional encoder-decoder with skip connections to carry features from the encoder to the decoder." },
      { label: "Attention", text: "Time-frequency attention follows the encoder and decoder layers. The mechanism learns which information is useful across time, frequency, and feature channels when reconstructing speech." },
      { label: "Temporal context", text: "Densely connected blocks combine dilated and causal convolutions. Dilation gathers context across multiple time scales, while causality keeps predictions independent of future frames. Squeezed temporal convolutional networks follow each dense block." },
      { label: "Decoder", text: "Sub-pixel convolutions upsample the decoder’s features during reconstruction." },
      { label: "Evaluation", text: "The Common Voice evaluation used babble noise at signal-to-noise ratios from −5 dB to +5 dB. The recorded results are 91.48 for short-time objective intelligibility (STOI) and 2.89 for perceptual evaluation of speech quality (PESQ), with comparisons against CRN, AECNN-SM, TCNN, and DDAEC." },
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/10134924',
    linkText: 'Read on IEEE Xplore',
  },
];

export default function Publications() {
  return (
    <section id="publications" tabIndex={-1} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <AnimatedSection>
          <p className="text-accent-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Research
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-12">
            Papers &amp; Publications
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.id} delay={i * 0.1}>
              <div
                className="open-entry flex flex-col h-full"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-4">
                  <span className={`text-[11px] font-bold font-mono px-2.5 py-1 rounded-full border shrink-0 ${pub.badgeColor}`}>
                    {pub.badge}
                  </span>
                  <dl className="publication-id">
                    <dt>{pub.idLabel}</dt>
                    <dd>{pub.id}</dd>
                  </dl>
                </div>

                {/* Title */}
                <h3 className="publication-title text-zinc-100 mb-5">
                  {pub.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-2">{pub.summary}</p>

                <details className="project-details mb-2">
                  <summary>Research details <FiPlus aria-hidden="true" /></summary>
                  <div>
                    <dl className="research-detail-list">
                      {pub.details.map(({ label, text }) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{text}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </details>

                {/* Link */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-mono text-accent-300 hover:text-accent-200 transition-colors duration-200 group"
                >
                  <span className="group-hover:underline">{pub.linkText}</span>
                  <FiArrowRight data-arrow="right" aria-hidden="true" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
