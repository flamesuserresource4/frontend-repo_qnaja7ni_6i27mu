import React from 'react';
import { Code, User, GraduationCap, Languages } from 'lucide-react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'MongoDB',
  'MySQL',
  'Git',
  'Figma',
];

const competencies = [
  'Frontend Architecture',
  'Responsive Design',
  'Version Control',
  'Agile Development',
  'AI-Enhanced Development',
  'Code Quality',
  'User-Centric Development',
  'Performance Optimization',
  'Quality Assurance',
  'Full-Stack Capability',
  'UX / UI Design',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Summary */}
          <div className="md:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
              <User className="h-3.5 w-3.5" /> Summary
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Hi, I’m Aymen — I turn complex problems into thoughtful digital products.</h2>
            <p className="mt-4 text-white/80">
              Web Developer with extensive frontend expertise and solid backend and database foundations. Computer Science graduate now
              pursuing a Master’s in Artificial Intelligence. I’ve built scalable apps that streamline workflows, with commercial freelance
              experience and a passion for clean code, delightful UX, and mentoring others.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                  <Code className="h-4 w-4" /> Core Competencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((c) => (
                    <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{c}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                  <Code className="h-4 w-4" /> Technical Proficiencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                <GraduationCap className="h-4 w-4" /> Education
              </div>
              <div className="text-sm">
                <div className="font-medium">MSc in Artificial Intelligence (In Progress)</div>
                <div className="text-white/70">University of Mohamed Khider • Expected Jun 2027</div>
                <div className="mt-3 font-medium">BSc in Computer Science</div>
                <div className="text-white/70">University of Mohamed Khider • Oct 2022 – Jun 2025</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                <Languages className="h-4 w-4" /> Languages
              </div>
              <div className="space-y-1 text-sm text-white/80">
                <div>Arabic — Native</div>
                <div>English — Fluent (Technical & Business)</div>
                <div>French — Intermediate</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                <User className="h-4 w-4" /> Mentoring
              </div>
              <div className="text-sm text-white/80">
                Technology Educator & Mentor (Summer 2025): designed robotics/web dev curricula, mentored 30+ students with a 90% increase in coding proficiency, and led hands-on workshops.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
