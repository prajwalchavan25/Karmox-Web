import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Sparkles, Clock, ArrowRight } from 'lucide-react';

const roadmapSteps = [
  {
    phase: 'NOW',
    status: 'In Active Progress',
    title: 'Building Foundation',
    description: 'Establishing core technical architecture, design systems, and rapid prototyping workflows for Karmaox.',
    details: ['Core System Architecture', 'Prototype Sandbox', 'Karmix Helper Concept'],
    active: true,
  },
  {
    phase: 'NEXT',
    status: 'Upcoming Milestone',
    title: 'Initial Product Launches',
    description: 'Releasing the first generation of utility-focused web platforms and digital assistant concepts to early testers.',
    details: ['Private Beta Testing', 'Iterative Feedback Loop', 'Performance Tuning'],
    active: false,
  },
  {
    phase: 'FUTURE',
    status: 'Long-term Horizon',
    title: 'Ecosystem Expansion',
    description: 'Expanding into advanced AI integrations, developer tools, and scalable technology solutions for complex workflows.',
    details: ['Autonomous Agents', 'Intelligent Workspaces', 'Multi-Platform Suite'],
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section className="relative py-28 md:py-36 bg-void overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Milestone className="w-3.5 h-3.5 text-brand-cyan" />
            <span>TRAJECTORY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Future Roadmap
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Our strategic vision for building, validating, and scaling digital products over time.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Glowing connecting line on desktop */}
          <div className="hidden md:block absolute top-12 inset-x-8 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo/30 -z-0 opacity-40" />

          {roadmapSteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-panel p-8 rounded-3xl border relative z-10 flex flex-col justify-between ${
                step.active
                  ? 'border-brand-cyan/50 bg-surface-cardHover shadow-[0_0_30px_rgba(0,240,255,0.12)]'
                  : 'border-white/10'
              }`}
            >
              <div>
                {/* Node & Phase Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.active ? 'bg-brand-cyan shadow-[0_0_12px_#00f0ff]' : 'bg-slate-800 border border-white/20'}`}>
                      <div className={`w-2 h-2 rounded-full ${step.active ? 'bg-black' : 'bg-slate-400'}`} />
                    </div>
                    <span className="font-mono text-lg font-bold text-white tracking-wider">
                      {step.phase}
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full ${
                    step.active
                      ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'
                      : 'bg-white/5 text-slate-400 border border-white/10'
                  }`}>
                    {step.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Milestone bullet items */}
              <div className="pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
