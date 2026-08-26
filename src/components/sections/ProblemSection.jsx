import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle, CheckCircle2, ArrowRight, Sparkles, Layers, Cpu, Code2 } from 'lucide-react';
import AboutVisual from '../3d/AboutVisual';

export default function ProblemSection() {
  return (
    <section id="the-problem" className="relative py-28 md:py-36 bg-void overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>THE REALITY &amp; THE CHALLENGE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Great Ideas Often Get Stuck <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Before the First Line of Code.
            </span>
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Every day, students notice genuine bottlenecks in education, transit, campus life, and local businesses. They envision clever solutions—yet most ideas never become working software.
          </p>
        </div>

        {/* 2-Column Comparison Cards: The Student Reality vs The Roadblock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: What Students Already Have */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  01 &bull; What Students Have
                </span>
                <Lightbulb className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Real-World Problem Insights
              </h3>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                Direct, firsthand experience with everyday problems that older corporations often overlook.
              </p>

              <div className="space-y-3 text-sm font-light text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>A clear understanding of daily pain points in their environment.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>A vision for an app, web tool, or digital platform to fix it.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Curiosity and motivation to build something meaningful.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono text-slate-400">
              STRONG INTENT &bull; HIGH CREATIVE POTENTIAL
            </div>
          </motion.div>

          {/* Card 2: Where Execution Gets Blocked */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                  02 &bull; Where They Get Stuck
                </span>
                <AlertTriangle className="w-5 h-5 text-rose-400" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4">
                The Technical Execution Gap
              </h3>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                Turning a concept into software requires navigating complex architecture, tech stacks, and tools.
              </p>

              <div className="space-y-3 text-sm font-light text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-2" />
                  <span>Uncertainty about which tech stack, database, or frameworks to choose.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-2" />
                  <span>Struggling to leverage modern AI coding assistants for real production code.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-2" />
                  <span>No clear pathway to turn rough ideas into a working Minimum Viable Product (MVP).</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono text-slate-400">
              COMPLEXITY BARRIER &bull; LACK OF MENTORSHIP
            </div>
          </motion.div>

        </div>

        {/* The KARMAOX Bridge Solution Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-cyan/30 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-indigo/5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                <span>HOW KARMAOX BRIDGES THIS GAP</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                We Help Students Understand, Learn, and Build.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                KARMAOX provides a structured pathway: deconstructing the problem, selecting the right tools, using AI-assisted development, and building a real, deployable MVP that can be tested in the real world.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#approach"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 hover:from-brand-cyan/30 hover:to-brand-indigo/30 border border-brand-cyan/50 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)] group/btn"
              >
                <span>Explore the 6 Stages</span>
                <ArrowRight className="w-4 h-4 text-brand-cyan group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
