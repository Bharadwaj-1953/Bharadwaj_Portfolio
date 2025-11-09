import React from "react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    university: "Florida State University, Tallahassee, FL",
    duration: "Aug 2024 – May 2026",
    logo: "/FSU.png",
  },
  {
    degree:
      "Bachelor of Technology in Computer Science and Engineering (Data Analytics)",
    university: "Vellore Institute of Technology, Andhra Pradesh",
    duration: "Aug 2020 – May 2024",
    logo: "/VITAP.png",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Education
      </h2>

      {/* Responsive Grid without resizing desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto">
        {educationData.map((edu, index) => {
          const isVITAP = edu.logo.includes("VITAP");
          const logoClasses = `w-28 h-28 ${
            isVITAP ? "object-contain" : "object-cover"
          } mx-auto mb-4 shadow-md bg-white rounded-full`;

          return (
            <div
              key={index}
              className="bg-gray-800/60 rounded-xl shadow-md p-6 text-center transition-transform hover:scale-[1.03] hover:shadow-xl w-full"
            >
              <div className="flex flex-col items-center justify-center">
                <img src={edu.logo} alt={edu.university} className={logoClasses} />
                <h3 className="text-lg font-semibold text-indigo-300 mb-1 text-center">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-200 mb-1 text-center">
                  {edu.university}
                </p>
                <p className="text-xs text-slate-400 italic text-center">
                  {edu.duration}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
