import React from 'react';
import { ExternalLink, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'UniFlow — Student Management Platform',
    description:
      'Full‑stack academic platform: task orchestration, intelligent note‑taking, course tracking, grade analytics, calendar sync, Pomodoro, and gamification. Boosted student productivity by ~20%.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
    period: 'Apr 2025 – May 2025',
    role: 'Full‑Stack Developer',
  },
  {
    title: 'Directis 360 — School Management System',
    description:
      'Delivered a custom enterprise frontend that digitized 100% of school operations with intelligent workflow automation, reducing admin overhead by 60%.',
    tags: ['React', 'TypeScript', 'Design System'],
    link: '#',
    period: 'Jul 2025 – Sep 2025',
    role: 'Frontend Developer + Limited Backend',
  },
  {
    title: 'Academic Project Portfolio',
    description:
      'Interactive Task Manager (Java Swing), Gaming Suite, Digital Drawing Board with real‑time collab, plus A+ presentations on IoT & Smart Home interfaces.',
    tags: ['Java', 'Swing', 'Algorithms', 'Collaboration'],
    link: 'https://github.com/mou-ny',
    period: 'Sep 2022 – May 2025',
    role: 'Student Projects',
  },
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
              target={p.link?.startsWith('http') ? '_blank' : undefined}
              rel={p.link?.startsWith('http') ? 'noreferrer' : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                background: 'radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 60%)'
              }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <div className="mt-1 text-xs text-white/60">{p.role} • {p.period}</div>
                  </div>
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
