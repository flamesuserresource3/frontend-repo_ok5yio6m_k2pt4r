import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Framer Motion',
  'Vite',
];

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <motion.div
          initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 12 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 ring-1 ring-inset ring-cyan-500/30"
        >
          <Code className="h-5 w-5" />
        </motion.div>
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white"
        >
          About
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-3 text-slate-300"
        >
          I’m a web developer who loves crafting human, playful interfaces and robust systems underneath. My focus is on performance, accessibility, and the small animations that make products feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <ul className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.li
                key={s}
                initial={{ y: 10, opacity: 0, rotate: -1 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
