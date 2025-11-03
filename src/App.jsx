import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Simple cursor glow for project cards
    const handler = (e) => {
      document.querySelectorAll('#projects a').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love, motion, and a bit of 3D.
      </footer>
    </div>
  );
}

export default App;
