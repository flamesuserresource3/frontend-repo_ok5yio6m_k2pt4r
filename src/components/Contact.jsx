import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks ${name}! Your message has been received. I will get back to you soon.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <motion.div
          initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 12 }}
          viewport={{ once: true }}
          className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 ring-1 ring-inset ring-cyan-500/30"
        >
          <Mail className="h-5 w-5" />
        </motion.div>
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white"
        >
          Let’s work together
        </motion.h2>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-xl backdrop-blur"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.label
            initial={{ x: -6, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col text-sm text-slate-300"
          >
            Name
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              className="mt-2 rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
            />
          </motion.label>

          <motion.label
            initial={{ x: 6, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col text-sm text-slate-300"
          >
            Email
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
            />
          </motion.label>
        </div>

        <motion.label
          initial={{ y: 6, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-5 flex flex-col text-sm text-slate-300"
        >
          Project details
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project, timeline, and budget."
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
          />
        </motion.label>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/20"
        >
          Send message
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-cyan-300"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
