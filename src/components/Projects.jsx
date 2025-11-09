// src/components/Projects.jsx

import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="projects-grid grid md:grid-cols-2 gap-8 max-w-[1270px] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800/60 p-6 rounded-xl shadow-md transition-transform transform hover:scale-[1.03] hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-indigo-300 mb-4 text-center">
              {project.title}
            </h3>

            <p className="mb-4 text-sm text-slate-300 text-justify">
              {project.description}
            </p>

            <ul className="list-disc list-inside text-sm mb-4 pl-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs text-white px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-all group"
              >
                <span className="group-hover:underline">View on GitHub</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
