import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-slate-400 border-t border-gray-700">
      {/* Icons Row */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-4 text-lg">
        {/* Email */}
        <a
          href="mailto:manne.bharadwaj.1953@gmail.com"
          className="relative group transition"
          aria-label="Email"
        >
          <FaEnvelope className="group-hover:text-red-400 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-gray-800 px-2 py-1 rounded-md transition-opacity duration-200 whitespace-nowrap">
            Email
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Bharadwaj-1953"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition"
          aria-label="GitHub"
        >
          <FaGithub className="group-hover:text-gray-400 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-gray-800 px-2 py-1 rounded-md transition-opacity duration-200 whitespace-nowrap">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bharadwaj-manne-711476249/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="group-hover:text-blue-400 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-gray-800 px-2 py-1 rounded-md transition-opacity duration-200 whitespace-nowrap">
            LinkedIn
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bharadwaj_manne"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition"
          aria-label="Instagram"
        >
          <FaInstagram className="group-hover:text-pink-400 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-gray-800 px-2 py-1 rounded-md transition-opacity duration-200 whitespace-nowrap">
            Instagram
          </span>
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Bharadwaj Manne. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
