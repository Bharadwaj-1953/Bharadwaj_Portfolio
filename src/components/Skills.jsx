// src/components/Skills.jsx

import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section className="skills-section py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Skills & Technologies
      </h2>

      <div className="skills-grid grid md:grid-cols-2 gap-8 max-w-[1270px] mx-auto">
        {skills.map((category, index) => (
          <div
            key={index}
            className="skills-card bg-gray-800/50 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold text-indigo-300 mb-5">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="skill-box w-20 h-20 bg-gray-900 border border-gray-700 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain mb-1"
                    loading="lazy"
                  />
                  <span className="text-[10px] text-white text-center px-1 whitespace-pre-line">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
