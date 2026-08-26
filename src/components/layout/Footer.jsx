import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Problem', href: '#the-problem' },
    { name: 'Approach', href: '#approach' },
    { name: 'KARMAOX AI', href: '#karmaox-ai' },
    { name: 'Problem Bank', href: '#problem-bank' },
    { name: 'Founder', href: '#founder' },
    { name: 'Submit Idea', href: '#submit-idea' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-void pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-cyan/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/karmaox-logo.png"
                alt="Karmaox Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-display font-bold text-xl tracking-[0.2em] text-white">
                KARMAOX
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              KARMAOX helps students turn real-world problems into real technology through modern tools, AI mentorship, and practical engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-brand-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              TURN PROBLEMS INTO TECHNOLOGY
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.linkedin.com/in/prajwal-chavan-6a1020380/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/prajwalchavan25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/prajwal_chavan10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Karmaox. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Problem &rarr; Idea &rarr; Build &rarr; Product</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
