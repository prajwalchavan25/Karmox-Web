import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Sparkles, Terminal, Code2, Bug, Layers, Layout, Cloud, CheckCircle } from 'lucide-react';

const aiCapabilities = [
  {
    title: 'Problem Analysis',
    desc: 'Deconstructs messy real-world challenges into clearly defined technical requirements.',
    icon: Terminal,
  },
  {
    title: 'Feature Planning',
    desc: 'Scopes minimum viable features (MVPs) to prevent bloat and prioritize high-impact utility.',
    icon: Layers,
  },
  {
    title: 'Technology Selection',
    desc: 'Recommends modern, beginner-friendly tech stacks (React, Vite, Python, Node, Supabase).',
    icon: Cpu,
  },
  {
    title: 'UI/UX Planning',
    desc: 'Guides responsive user journeys, wireframing, and modern design best practices.',
    icon: Layout,
  },
  {
    title: 'Coding Guidance',
    desc: 'Assists in structuring clean, maintainable codebases with AI-assisted workflows.',
    icon: Code2,
  },
  {
    title: 'Debugging & Testing',
    desc: 'Helps students troubleshoot runtime errors, resolve build issues, and write automated tests.',
    icon: Bug,
  },
  {
    title: 'Cloud Deployment',
    desc: 'Provides step-by-step guidance for hosting, continuous deployment, and connecting custom domains.',
    icon: Cloud,
  },
];

export default function KarmaoxAI() {
  return (
    <section id="karmaox-ai" className="relative py-28 md:py-36 bg-void overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>COMING SOON • RESEARCH &amp; DEVELOPMENT</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            KARMAOX AI <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-slate-100 to-brand-indigo">
              The Intelligent Mentor for Student Builders.
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            We are designing an AI-powered co-pilot tailored specifically to guide students through the end-to-end process of turning raw ideas into functional software products.
          </p>
        </div>

        {/* Interactive Feature Matrix & Simulated Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7 AI Mentorship Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`glass-panel p-5 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all ${
                    i === 0 ? 'sm:col-span-2 bg-white/[0.03]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Simulated AI Mentor Interface Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-6 rounded-3xl border border-brand-cyan/30 relative overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-brand-cyan">
                  <Bot className="w-3 h-3" />
                  <span>KARMAOX-AI &bull; PREVIEW</span>
                </div>
              </div>

              {/* Chat / Mentorship Simulation */}
              <div className="space-y-4 text-xs font-mono">
                
                {/* Student Query */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                  <div className="text-[10px] text-slate-500 mb-1">STUDENT QUERY</div>
                  "I want to build an app for local bus timings near our campus, but I don't know where to start."
                </div>

                {/* AI Mentor Response */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 border border-brand-cyan/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-brand-cyan font-bold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI MENTOR BREAKDOWN</span>
                  </div>
                  
                  <div className="text-slate-300 font-light space-y-1.5 text-[11px] leading-relaxed">
                    <p>1. <strong className="text-white">Core MVP</strong>: Track 3 key routes first with crowd-sourced arrival pings.</p>
                    <p>2. <strong className="text-white">Tech Stack</strong>: React + Vite for lightweight PWA mobile access.</p>
                    <p>3. <strong className="text-white">Data Layer</strong>: Simple real-time database (Supabase / Firebase).</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                  <span>Architecture Guide</span>
                  <span className="text-brand-cyan font-semibold">Ready to Scaffold &rarr;</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] font-mono text-slate-400">
                  *Concept preview. Full AI platform launching in upcoming roadmap phases.
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
