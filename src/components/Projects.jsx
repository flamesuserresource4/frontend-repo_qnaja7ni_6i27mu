import React from 'react';
import { ExternalLink, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A performant analytics dashboard with real-time charts and immersive micro-interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D experience blending product storytelling with smooth scroll-driven animations.',
    tags: ['Three.js', 'Spline', 'GSAP'],
    link: '#'
  },
  {
    title: 'SaaS Marketing Site',
    description: 'Conversion-focused site with a custom component library and delightful dark mode.',
    tags: ['Next.js', 'Design Systems', 'SEO'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
              <Rocket className="h-3.5 w-3.5" /> Selected work
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Projects that blend polish and performance</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                background: 'radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 60%)'
              }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
