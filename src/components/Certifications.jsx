import React from "react";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1270px] mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800/60 rounded-xl shadow-md p-5 transition-transform hover:scale-[1.03] hover:shadow-xl"
          >
            <div
              className={`inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${cert.color}`}
            >
              {cert.issuer}
            </div>
            <ul className="space-y-2">
              {cert.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-indigo-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
