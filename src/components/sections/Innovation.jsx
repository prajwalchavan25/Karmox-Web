import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Code2, RefreshCw, Sparkles, ArrowRight } from 'lucide-react';
import InnovationVisual from '../3d/InnovationVisual';

const stages = [
  {
    step: '01',
    title: 'Discover',
    tag: 'Problem Validation',
    description: 'Identify problems worth solving through first-principles thinking, user observation, and deep curiosity.',
    icon: Compass,
    color: '#00f0ff',
  },
  {
    step: '02',
    title: 'Build',
    tag: 'Rapid Prototyping',
    description: 'Turn ideas into working technology with clean code, modern architectures, and robust engineering.',
    icon: Code2,
    color: '#38bdf8',
  },
  {
    step: '03',
    title: 'Evolve',
    tag: 'Continuous Iteration',
    description: 'Improve, experiment and build better versions based on real-world utility and performance feedback.',
    icon: RefreshCw,
    color: '#a855f7',
  },
];

export default function Innovation() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="innovation" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>INNOVATION PIPELINE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            We Experiment. We Build. We Learn.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Our systematic approach to turning theoretical concepts into robust digital products.
          </p>
        </div>

        {/* 3D Network Canvas */}
        <div className="mb-12 glass-panel rounded-3xl border border-white/10 p-4 relative overflow-hidden">
          <div className="absolute top-4 left-6 z-10 text-[11px] font-mono text-slate-400">
            <span>PIPELINE TELEMETRY: STAGE 0{activeStage + 1} ACTIVE</span>
          </div>
          <InnovationVisual activeStage={activeStage} />
        </div>

        {/* 3 Stages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isActive = activeStage === idx;

            return (
              <motion.div
                key={stg.step}
                onClick={() => setActiveStage(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`cursor-pointer glass-panel p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'border-brand-cyan/60 bg-surface-cardHover shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <div
                    className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo"
                  />
                )}

                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-2xl font-bold ${isActive ? 'text-brand-cyan' : 'text-slate-400'}`}>
                    {stg.step}
                  </span>
                  <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-brand-cyan/10 border-brand-cyan/40 text-brand-cyan' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider mb-2">
                  {stg.tag}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {stg.title}
                </h3>

                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {stg.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
