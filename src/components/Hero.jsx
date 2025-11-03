import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Aymen Amrane</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mou-ny"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/aymen-amr"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Hero text */}
        <div className="pointer-events-auto mt-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Based in Biskra, Algeria • Open to relocation & remote
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Web Developer crafting scalable, user-first products with a playful 3D touch.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Frontend specialist with solid backend and database foundations, currently pursuing an AI MSc. I transform
            traditional workflows into intuitive digital tools.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Footer hint */}
        <div className="pointer-events-none mb-4 flex items-center justify-center text-xs text-white/60">
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;
