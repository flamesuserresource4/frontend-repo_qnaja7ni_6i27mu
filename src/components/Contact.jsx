import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-[#0a0a0a]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
          <Mail className="h-3.5 w-3.5" /> Contact
        </div>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Let’s build something remarkable</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          I’m open to freelance gigs, product collaborations, and full-time roles. Tell me about your idea, and I’ll get back within 24–48 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:aymenamrane359@gmail.com"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Email me
          </a>
          <a
            href="tel:+213542576162"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +213 542 576 162</div>
          </a>
          <a
            href="https://github.com/mou-ny"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</div>
          </a>
          <a
            href="https://www.linkedin.com/in/aymen-amr"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</div>
          </a>
        </div>
        <div className="mt-6 text-xs text-white/60">Biskra, Algeria • Open to relocation</div>
      </div>
    </section>
  );
};

export default Contact;
