import React from "react";

const publications = [
  {
    title:
      "Systems and Methods for Detection of Anomalies in Civil Infrastructure Using Context-Aware Semantic Computer Vision Techniques",
    tags: ["Publisher: IPO India", "Application No: 202321049964"],
    points: [
      "Developed a machine learning-based anomaly detection system for real-time structural health monitoring of civil infrastructure.",
      "Engineered a semantic computer vision framework that improved anomaly detection accuracy by ~20% compared to traditional models.",
      "Designed animated visualization techniques, leading to a 25% faster response time in identifying critical infrastructure issues.",
    ],
    link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
    linkText: "View Publication",
  },
  {
    title:
      "Dilated Convolutions and Time-Frequency Attention for Speech Enhancement",
    tags: ["Publisher: IEEE", "Accession No: 23204218"],
    points: [
      "Proposed a Dilated Time-Frequency Attention Autoencoder (DTFAAEC) model that enhanced real-time speech intelligibility and quality by up to 30% (PESQ and STOI).",
      "Integrated dilated convolutions, sub-pixel convolutions, and TFA modules to improve temporal and spectral modeling.",
      "Achieved +0.4 PESQ and +5.2% STOI improvements over CNN baselines on benchmark speech datasets.",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10134924",
    linkText: "Access Full Article",
  },
];

const Publications = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Papers & Publications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-[1270px] mx-auto">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-800/60 p-6 rounded-xl shadow-md transition-transform hover:scale-[1.03] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-md font-semibold text-indigo-300 text-center mb-3">
                {pub.title}
              </h3>

              {/* Bullet Points */}
              <div className="flex flex-col gap-2 mt-2 text-sm">
                {pub.points.map((point, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-[6px] h-[6px] mt-2 mr-4 bg-white rounded-full shrink-0" />
                    <p className="text-slate-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
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

            {/* View Link */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-4 transition-all group"
            >
              <span className="group-hover:underline">{pub.linkText}</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
