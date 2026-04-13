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
          href="mailto:manne.bharadwaj.1953@gmail.com"
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
            Systems Engineer | Distributed Systems | High-Performance Computing
          </h2>

          <div className="text-gray-300 text-base leading-relaxed max-w-3.5xl text-justify space-y-5">
            <p>
              Systems Engineer specializing in distributed systems, fault tolerance, and high-performance computing. With 3+ years of systems engineering experience and graduate-level research, I've architected decentralized fault detection frameworks achieving 99.5% accuracy, engineered high-performance algorithms delivering 221x speedup, and optimized latency-critical systems reducing communication overhead by 73%.
            </p>
            <p>
              I understand systems at every level — from concurrent data structures and RDMA networking to kernel-level debugging and distributed consensus. Currently a Systems Research Engineer at Florida State University where I mentor 8+ developers in systems programming, conduct research on persistent memory and race condition detection, and manage infrastructure supporting 300+ students.
            <p>
              Passionate about building systems that are fast, reliable, and resilient. Whether designing distributed hash tables with <2% overhead, eliminating synchronization bottlenecks with RDMA, or implementing fault detection mechanisms achieving <150ms response time, I focus on systems that work under extreme conditions.
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
