import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Sparkles, Cpu, Layers } from 'lucide-react';
import AboutVisual from '../3d/AboutVisual';

const pillars = [
  {
    number: '01',
    title: 'Modern Software & Platforms',
    description: 'Engineering resilient, scalable web architectures and digital products designed around real user needs.',
    icon: Code,
  },
  {
    number: '02',
    title: 'Creative Problem Solving',
    description: 'Deconstructing real-world bottlenecks to engineer intuitive, simplified digital experiences.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Focused Innovation',
    description: 'Exploring emerging technologies and intelligent workflows without unnecessary complexity.',
    icon: Cpu,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-void overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span>ABOUT KARMAOX</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Building Useful Technology With Purpose.
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Karmaox is an emerging technology company focused on creating software, web platforms, and digital products that turn real-world challenges into practical, accessible digital solutions.
          </p>
        </div>

        {/* Content Grid: 3D Visual + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 3D Visual Mesh */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-indigo/5 pointer-events-none" />
              <AboutVisual />
              
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3">
                <span>SYSTEM ARCHITECTURE</span>
                <span className="text-brand-cyan">ENGINEERED V1</span>
              </div>
            </div>
          </motion.div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/10 group relative overflow-hidden"
                >
                  <div className="flex items-start gap-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <span className="font-mono text-lg sm:text-xl font-bold text-brand-cyan/80 group-hover:text-brand-cyan transition-colors">
                        {p.number}
                      </span>
                    </div>

                    {/* Pillar Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display font-semibold text-lg sm:text-xl text-white group-hover:text-brand-cyan transition-colors">
                          {p.title}
                        </h3>
                        <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner Accent line */}
                  <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
