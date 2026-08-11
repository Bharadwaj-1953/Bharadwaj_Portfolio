import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const roles = [
  'Backend Engineer',
  'Distributed Systems',
  'Systems Programmer',
  'Research Engineer',
];

const terminalLines = [
  { type: 'cmd',    text: '$ ./highlights' },
  { type: 'empty' },
  { type: 'kv', key: 'Research', value: "USENIX FAST '25  ·  Published",      color: 'text-emerald-400' },
  { type: 'kv', key: 'Systems',  value: '221× speedup over state-of-the-art', color: 'text-indigo-300'  },
  { type: 'kv', key: 'Accuracy', value: '99.5% fault detection  ·  < 3% CPU', color: 'text-indigo-300'  },
  { type: 'kv', key: 'Academic', value: 'GPA 3.87 / 4.0  ·  Florida State',   color: 'text-amber-300'   },
  { type: 'kv', key: 'Papers',   value: 'IEEE Co-Author  ·  IPO India Patent', color: 'text-amber-300'   },
  { type: 'empty' },
  { type: 'cursor', text: '$ _' },
];

const socials = [
  { icon: FaEnvelope, href: 'mailto:manne.bharadwaj.1953@gmail.com', label: 'Email', hover: 'hover:text-red-400' },
  { icon: FaGithub, href: 'https://github.com/Bharadwaj-1953', label: 'GitHub', hover: 'hover:text-zinc-100' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/bharadwaj-manne-711476249/', label: 'LinkedIn', hover: 'hover:text-blue-400' },
  { icon: FaInstagram, href: 'https://www.instagram.com/bharadwaj_manne', label: 'Instagram', hover: 'hover:text-pink-400' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let count = 0;
    const id = setInterval(() => {
      count++;
      setVisibleLines(count);
      if (count >= terminalLines.length) clearInterval(id);
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] bg-zinc-950 flex items-center overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.04] mb-4 gradient-text"
            >
              Bharadwaj<br />Manne
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center gap-3 mb-5 h-8"
            >
              <div className="w-5 h-px bg-indigo-500 shrink-0" />
              <div className="overflow-hidden h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-lg sm:text-xl font-semibold text-indigo-300 block whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile-only photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="md:hidden flex justify-center mb-6"
            >
              <img
                src="/Bharadwaj_Manne.jpg"
                alt="Bharadwaj Manne"
                className="w-36 h-44 object-cover rounded-2xl border border-purple-400/40 shadow-xl shadow-black/40"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mb-8"
            >
              Building systems where correctness, concurrency, and scale work together
              under real load. I'd rather understand why something fails than patch around it.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-px min-h-[44px] flex items-center"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-zinc-700 hover:border-indigo-500/40 text-zinc-300 hover:text-zinc-100 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-indigo-500/5 min-h-[44px] flex items-center"
              >
                About Me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-5"
            >
              {socials.map(({ icon: Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-zinc-500 ${hover} transition-colors duration-200 p-1`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <div className="bg-zinc-900/70 border border-zinc-800/70 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-xl hover:shadow-indigo-500/10 backdrop-blur-sm transition-all duration-300">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/50 group/traffic">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center cursor-default">
                  <span className="text-[7px] font-bold text-[#820005] opacity-0 group-hover/traffic:opacity-100 transition-opacity duration-100 leading-none select-none">&#x2715;</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-default">
                  <span className="text-[8px] font-bold text-[#5a3b00] opacity-0 group-hover/traffic:opacity-100 transition-opacity duration-100 leading-none select-none">&#x2212;</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center cursor-default">
                  <span className="text-[7px] font-bold text-[#005a00] opacity-0 group-hover/traffic:opacity-100 transition-opacity duration-100 leading-none select-none">&#x2197;</span>
                </div>
                <span className="ml-2 text-zinc-500 text-xs font-mono tracking-wide">~/bharadwaj -- bash</span>
              </div>
              <div className="p-6 font-mono text-sm min-h-[260px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    {line.type === 'kv' ? (
                      <div className="flex items-baseline leading-relaxed select-none mb-0.5">
                        <span className="text-zinc-500 w-[5.5rem] shrink-0 font-medium">{line.key}</span>
                        <span className="text-zinc-700 mx-2 select-none">│</span>
                        <span className={line.color}>{line.value}</span>
                      </div>
                    ) : (
                      <div className={`select-none ${
                        line.type === 'cmd'    ? 'text-zinc-300 mb-2'
                        : line.type === 'cursor' ? 'text-zinc-300 mt-2'
                        : 'h-3'
                      }`}>
                        {line.text || ' '}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="h-px w-3/4 mx-auto mt-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
