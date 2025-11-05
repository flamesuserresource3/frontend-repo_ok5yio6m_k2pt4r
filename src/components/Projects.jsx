import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Orbit UI',
    desc: 'A component library focused on motion-first interactions and accessible patterns.',
    tags: ['React', 'Framer Motion', 'Radix'],
    color: 'from-fuchsia-500/20 to-purple-500/20',
    href: '#',
    anim: { hover: { rotate: -1, y: -6 } },
  },
  {
    title: 'Neon Cart',
    desc: 'High-performance e-commerce starter with SSR, edge caching and analytics.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    color: 'from-emerald-500/20 to-cyan-500/20',
    href: '#',
    anim: { hover: { scale: 1.03, y: -10 } },
  },
  {
    title: 'Atlas CMS',
    desc: 'Headless CMS with role-based access and real-time collaboration.',
    tags: ['Node.js', 'tRPC', 'PostgreSQL'],
    color: 'from-amber-500/20 to-rose-500/20',
    href: '#',
    anim: { hover: { rotate: 1.2, y: -8 } },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white"
        >
          Selected Work
        </motion.h2>
        <motion.div
          initial={{ rotate: -12, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 10 }}
          viewport={{ once: true }}
          className="hidden items-center gap-1 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 md:inline-flex"
        >
          <Star className="h-4 w-4 text-amber-400" /> motion-rich
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={p.anim.hover}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 18 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br ${p.color} p-5 shadow-lg`}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
            <div className="flex h-40 items-end justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-300">{p.desc}</p>
              </div>
              <ExternalLink className="mb-1 h-5 w-5 flex-shrink-0 text-slate-200 opacity-70 transition group-hover:opacity-100" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <motion.span
                  key={t}
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-slate-700/60 bg-slate-900/50 px-2.5 py-1 text-xs text-slate-300"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
