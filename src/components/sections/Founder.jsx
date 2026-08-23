import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Github, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <User className="w-3.5 h-3.5 text-brand-cyan" />
            <span>FOUNDER</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Meet the Builder.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            The visionary and engineering drive behind Karmaox.
          </p>
        </div>

        {/* Clean Founder Profile Card with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Founder Portrait Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group/photo">
                {/* Image */}
                <img
                  src="/assets/founder.jpg"
                  alt="Prajwal Chavan — Founder of Karmaox"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 ease-out group-hover/photo:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle vignette / glass overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-brand-cyan/20 rounded-2xl pointer-events-none group-hover/photo:border-brand-cyan/50 transition-colors duration-500" />
                
                {/* Floating Micro Badge */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl glass-panel border border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300 backdrop-blur-md">
                  <span>KARMAOX</span>
                  <span className="text-brand-cyan">FOUNDER</span>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Founder &amp; Builder</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-1">
                Prajwal Chavan
              </h3>

              <div className="text-sm font-mono text-slate-400 mb-6">
                Founder &amp; Builder of Karmaox
              </div>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                Building Karmaox with a focus on technology, creativity, and practical digital solutions.
              </p>

              {/* Verified Authentic Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/prajwal-chavan-6a1020380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-slate-200 hover:text-brand-cyan text-xs font-medium transition-all group/link"
                >
                  <Linkedin className="w-4 h-4 text-brand-cyan" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/prajwalchavan25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-slate-200 hover:text-brand-cyan text-xs font-medium transition-all group/link"
                >
                  <Github className="w-4 h-4 text-brand-cyan" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.instagram.com/prajwal_chavan10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-slate-200 hover:text-brand-cyan text-xs font-medium transition-all group/link"
                >
                  <Instagram className="w-4 h-4 text-brand-cyan" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
