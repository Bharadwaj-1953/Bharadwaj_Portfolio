import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 md:px-28 flex items-center justify-center">
      {/* Logo - Top Left */}
      <div className="absolute top-8 left-12">
        <img
          src="/bm-logo.png"
          alt="BM Logo"
          className="w-14 h-14 object-contain transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Social Icons - Top Right */}
      <div className="absolute top-12 right-16 flex space-x-4 text-white text-xl">
        <a
          href="mailto:bharadwajmanne.195@gmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/bharadwaj-manne-711476249/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Bharadwaj-1953"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/bharadwaj_manne"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Main Content */}
      <div className="hero-main max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-16 mt-20">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
              Bharadwaj Manne
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-slate-400 mb-6">
            Software Developer
          </h2>

          <div className="text-gray-300 text-base leading-relaxed max-w-3.5xl text-justify space-y-5">
            <p>
              I am a recent graduate from Florida State University with a strong background in computer science and software development. During my time at FSU, I worked as both a Teaching Assistant and Research Assistant, where I supported students, contributed to academic projects, and strengthened my problem-solving and collaboration skills.
            </p>
            <p>
              Alongside my academic experience, I bring over 3 years of professional experience as a Software Developer. I have worked on designing, developing, and maintaining scalable applications, focusing on writing clean, efficient code and delivering reliable solutions in fast-paced environments.
            </p>
            <p>
              Passionate about building systems that are fast, reliable, and resilient. Whether designing distributed hash tables with &lt;2% overhead, eliminating synchronization bottlenecks with RDMA, or implementing fault detection mechanisms achieving &lt;150ms response time, I focus on systems that work under extreme conditions.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image flex-shrink-0 ml-14">
          <img
            src="/Bharadwaj_Manne.jpg"
            alt="Bharadwaj Manne"
            className="max-h-[500px] w-auto object-contain rounded-xl border border-purple-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
