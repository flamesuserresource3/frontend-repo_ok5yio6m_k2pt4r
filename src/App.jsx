import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" className="group inline-flex items-center gap-2 text-sm font-medium text-white">
        <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
        <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">aditya suryavanshi</span>
      </a>
      <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
        <a href="#about" className="transition hover:text-white">About</a>
        <a href="#projects" className="transition hover:text-white">Projects</a>
        <a href="#contact" className="transition hover:text-white">Contact</a>
      </nav>
    </div>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
  </header>
);

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
        © {new Date().getFullYear()} Aditya Suryavanshi. Built with care and motion.
      </footer>
    </div>
  );
}

export default App;
