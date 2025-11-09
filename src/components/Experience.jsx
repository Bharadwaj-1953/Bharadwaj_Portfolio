import React from "react";
import experience from "../data/experience";

const logoMap = {
  "Unical Systems": "/Unical.jpg",
  "SmartInternz": "/SmartBridge.png",
  "Oasis Infobyte": "/Oasis.jpg",
  "Florida State University": "/FSU 1.png",
};

const Experience = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Professional Experience
      </h2>

      <div className="relative max-w-[1270px] mx-auto">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-500 z-0" />

        <div className="flex flex-col gap-12 relative z-10">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const logoSrc = logoMap[exp.companyName];

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline marker (centered for desktop) */}
                <span className="hidden md:block absolute w-5 h-5 bg-indigo-400 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-md" />

                <div
                  className={`w-full md:w-1/2 ${
                    isLeft ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="relative bg-gray-800/60 p-6 rounded-xl shadow-md transition-transform hover:scale-[1.03] hover:shadow-xl animate-fadeIn">
                    {/* Logo + Info */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 mb-3 text-center sm:text-left">
                      <img
                        src={logoSrc}
                        alt={exp.companyName}
                        className="w-12 h-12 rounded-md object-contain bg-white p-1 mb-3 sm:mb-0"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-indigo-300">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {exp.companyName}, {exp.location}
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          {exp.date}
                        </p>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex flex-col gap-2 mt-2 text-sm">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start text-left">
                          <span className="w-[6px] h-[6px] mt-2 mr-3 bg-white rounded-full shrink-0" />
                          <p className="text-slate-300 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
