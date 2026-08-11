import React from "react";

const publications = [
  {
    title:
      "Systems and Methods for Detection of Anomalies in Civil Infrastructure Using Context-Aware Semantic Computer Vision Techniques",
    tags: ["Publisher: IPO India", "Application No: 202321049964"],
    points: [
      "Co-invented a real-time anomaly detection platform using ML, big data, and context-aware semantic computer vision to identify threats across network environments and civil infrastructure simultaneously.",
      "A behavioral engine continuously clusters incoming event data, builds an evolving model of normal system behavior, and triggers instant alerts the moment patterns deviate - no batch processing, no manual review.",
      "Semantic segmentation localizes anomalous regions in civil infrastructure imagery, quantifies type and severity per region, and routes only role-relevant alerts to each user through a rule-defined relevance engine.",
    ],
    link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
    linkText: "View Publication",
  },
  {
    title:
      "Dilated Convolutions and Time-Frequency Attention for Speech Enhancement",
    tags: ["Publisher: IEEE", "Accession No: 23204218"],
    points: [
      "Co-authored DTFAAEC, a fully convolutional encoder-decoder for real-time speech enhancement that reconstructs clean speech using Time Frequency Attention (TFA) inserted after every encoder and decoder layer.",
      "Dilated convolutions aggregate multi-resolution temporal context in a single pass; causal convolutions enforce forward-only processing; two GRU layers in the bottleneck model long-range sequential dynamics of speech.",
      "Outperformed CRN, AECNN-SM, TCNN, and DDAEC on the Common Voice corpus, achieving STOI 91.48 and PESQ 2.89 under babble noise across -5dB to +5dB SNR conditions.",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10134924",
    linkText: "Access Full Article",
  },
];

const Publications = () => {
  return (
    <section className="publications-section py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Papers &amp; Publications
      </h2>

      <div className="publications-grid grid md:grid-cols-2 gap-8 max-w-[1270px] mx-auto">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="publication-card bg-gray-800/60 p-6 rounded-xl shadow-md transition-transform hover:scale-[1.03] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-md font-semibold text-indigo-300 text-center mb-4">
                {pub.title}
              </h3>

              <div className="flex flex-col gap-3 text-sm">
                {pub.points.map((point, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-[6px] h-[6px] mt-[7px] mr-4 bg-white rounded-full shrink-0" />
                    <p className="text-slate-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs text-white px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-center mt-4">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-all group"
              >
                <span className="group-hover:underline">{pub.linkText}</span>
                <span className="text-lg">&#8594;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
