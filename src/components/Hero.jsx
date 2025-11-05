import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.10)_0%,rgba(0,0,0,0)_70%)]" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-200 backdrop-blur"
          initial={{ opacity: 0, y: -10, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.1 }}
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Available for freelance projects
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariant}
          className="text-balance font-extrabold leading-tight text-white"
        >
          <span className="block text-4xl sm:text-5xl">Aditya Suryavanshi</span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-3xl text-transparent sm:text-6xl">
            Web Developer
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariant}
          className="mt-4 max-w-2xl text-pretty text-slate-300"
        >
          I craft delightful, performant web experiences with a focus on clean architecture, micro-interactions, and accessible design. Let’s build something playful and modern.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariant}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-5 py-3 font-medium text-slate-200 backdrop-blur transition duration-300 hover:border-slate-600 hover:bg-slate-800">
            Contact
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2 text-slate-300 transition hover:scale-105 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2 text-slate-300 transition hover:scale-105 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
