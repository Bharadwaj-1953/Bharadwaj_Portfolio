import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 md:px-28 flex items-center justify-center">

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

      {/* Main Grid Layout */}
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-16 mt-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
              Bharadwaj Manne
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-slate-400 mb-6">
            Cloud-Native Full Stack Engineer
          </h2>

          {/* Bio Paragraphs */}
          <div className="text-gray-300 text-base leading-relaxed max-w-2xl text-justify space-y-5">
            <p>
              I'm a software developer specializing in cloud-native architectures and full stack development. With hands-on experience across AWS, GCP, and containerized environments, I build secure, scalable systems that integrate seamlessly from backend to frontend. My focus lies in creating high-performance applications that are both user-friendly and production-ready.
            </p>
            <p>
              I enjoy working at the intersection of cloud infrastructure, intelligent systems, and software engineering. Whether it's deploying microservices with Kubernetes, automating workflows, or crafting responsive web interfaces, I aim to deliver clean, reliable, and maintainable solutions that solve real-world challenges.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 ml-14">
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
