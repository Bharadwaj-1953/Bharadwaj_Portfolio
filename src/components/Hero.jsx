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
          href="mailto:bharadwajmanne1953@gmail.com"
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
          <h2 className="text-xl font-semibold text-slate-400 mb-1">
            Software Engineer
          </h2>
          <p className="text-sm text-indigo-300 font-medium mb-6 tracking-wide">
            Backend &amp; Distributed Systems
          </p>

          <div className="text-gray-300 text-base leading-relaxed max-w-3.5xl text-justify space-y-5">
            <p>
              Software Engineer focused on backend and distributed systems, the layer where correctness, concurrency, and scale all have to work together, not just on paper but under real production load. I like problems that don't have a clean textbook answer: where the bottleneck actually is, why a system behaves differently at 10x traffic, what breaks first when you push it.
            </p>
            <p>
              I come at engineering from both ends, hands-on systems work close to the hardware, and enough research background to know when the "obvious" fix is actually a workaround. That combination shapes how I approach problems: I'd rather understand why something fails than patch around it. I hold certifications across AWS, GCP, and Azure, and I stay comfortable moving between infrastructure, algorithms, and the connective tissue in between.
            </p>
            <p>
              I'm looking for backend or distributed systems roles at companies where scale is a genuine constraint and the engineering bar is high. If you're building something that has to stay correct and fast at the same time, I'd like to talk.
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
