import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, GraduationCap, Code2, Rocket, Briefcase, ArrowRight, Sparkles } from 'lucide-react';

const stages = [
  {
    step: '01',
    title: 'Problem',
    tagline: 'Real-World Observation',
    description: 'Identify a tangible, authentic problem you experience in daily life—from campus bottlenecks to local industry challenges.',
    icon: Search,
    color: '#00f0ff',
  },
  {
    step: '02',
    title: 'Idea',
    tagline: 'Solution Architecture',
    description: 'Deconstruct the problem and formulate a practical, focused digital solution concept that addresses the root cause.',
    icon: Lightbulb,
    color: '#38bdf8',
  },
  {
    step: '03',
    title: 'Learn',
    tagline: 'Skill & Tool Mastery',
    description: 'Discover the exact modern frameworks, libraries, and design principles required to build your specific solution.',
    icon: GraduationCap,
    color: '#6366f1',
  },
  {
    step: '04',
    title: 'Build',
    tagline: 'AI-Assisted Engineering',
    description: 'Write real software using modern developer ecosystems, component libraries, and intelligent AI-assisted workflows.',
    icon: Code2,
    color: '#818cf8',
  },
  {
    step: '05',
    title: 'MVP',
    tagline: 'Working Prototype',
    description: 'Deploy a functional minimum viable product that can be tested by real users in real-world scenarios.',
    icon: Rocket,
    color: '#a855f7',
  },
  {
    step: '06',
    title: 'Opportunity',
    tagline: 'Growth & Collaboration',
    description: 'Unlock opportunities for internships, collaborative building, open-source contribution, or future product scaling.',
    icon: Briefcase,
    color: '#ec4899',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>THE 6-STAGE ROADMAP</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            The KARMAOX Approach
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            A continuous, actionable progression that turns raw observations into working digital products.
          </p>
        </div>

        {/* 6-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient glow on card hover */}
                <div
                  className="absolute -top-24 -right-24 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: stage.color }}
                />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-bold text-brand-cyan">
                      {stage.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      <Icon className="w-5 h-5 text-white group-hover:text-brand-cyan transition-colors" />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {stage.tagline}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-brand-cyan transition-colors mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Bottom Stage Progress Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE 0{idx + 1} OF 06</span>
                  {idx < stages.length - 1 ? (
                    <span className="flex items-center gap-1 group-hover:text-brand-cyan transition-colors">
                      Next Stage <ArrowRight className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-brand-cyan">Final Milestone</span>
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
