import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Github, Sparkles, Code, ArrowUpRight } from 'lucide-react';

export default function Founder() {
  return (
    <section className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <User className="w-3.5 h-3.5 text-brand-cyan" />
            <span>LEADERSHIP</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Built From Curiosity.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Driven by a passion for building practical digital solutions and exploring the future of software and AI.
          </p>
        </div>

        {/* Clean Founder Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle top glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            
            {/* Avatar / Founder Monogram */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 via-surface-card to-brand-indigo/20 border border-white/15 p-1 flex items-center justify-center flex-shrink-0 shadow-lg relative group">
              <div className="w-full h-full rounded-xl bg-surface-card flex items-center justify-center text-white font-display font-bold text-2xl tracking-wider">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-indigo">
                  PC
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-card border border-brand-cyan/50 flex items-center justify-center">
                <Code className="w-2.5 h-2.5 text-brand-cyan" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-display font-bold text-2xl text-white">
                  Prajwal Chavan
                </h3>
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                  Founder
                </span>
              </div>

              <div className="text-sm font-mono text-slate-400 mb-4">
                Founder — Karmaox
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                Focused on architecting simple, elegant software systems and turning exploratory ideas into tangible products that solve real-world problems.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/prajwalchavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-brand-cyan text-xs font-medium transition-all group"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/prajwalchavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-brand-cyan text-xs font-medium transition-all group"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
