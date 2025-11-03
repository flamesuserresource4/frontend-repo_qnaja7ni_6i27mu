import React from 'react';
import { Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
              <User className="h-3.5 w-3.5" /> About me
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Designer-minded developer who loves building delightful products.</h2>
            <p className="mt-4 text-white/80">
              I specialize in crafting rich web experiences with React, TypeScript, and modern CSS. I care deeply about micro-interactions,
              accessibility, and performance. Over the years, I’ve worked on startups, SaaS dashboards, and interactive marketing sites.
            </p>
            <p className="mt-3 text-white/70">
              Beyond code, I enjoy motion design and 3D, which often informs how I approach product storytelling and user engagement.
            </p>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
              <Code className="h-3.5 w-3.5" /> Core skills
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind',
                'Framer Motion',
                'Node.js',
                'GraphQL',
                'Three.js',
                'Testing'
              ].map((skill) => (
                <div key={skill} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
