import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Cpu, CheckCircle2, Layers } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="relative py-28 md:py-36 bg-void overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
            <span>PRODUCT INCUBATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            From Idea to Product.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Karmaox incubates focused software experiments, refining raw prototypes into intuitive, privacy-conscious digital tools.
          </p>
        </div>

        {/* Featured Product Card: Karmix Helper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-14 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle top edge border gradient */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Product Meta & Description */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span>Status: In Development</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Karmix Helper
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                An experimental digital assistant concept focused on making everyday tasks and information easier to manage.
              </p>

              {/* Product Specifications / Realistic metadata */}
              <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Product Type</div>
                  <div className="text-sm font-medium text-slate-200 mt-0.5">Digital Assistant Concept</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Current Phase</div>
                  <div className="text-sm font-medium text-brand-cyan mt-0.5">Architecture &amp; UX Research</div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-brand-cyan/50 text-slate-200 hover:text-white text-sm font-medium transition-all group/btn"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 text-brand-cyan group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <span className="text-[11px] font-mono text-slate-400 mt-2">
                *Early concept preview. Public release milestones in roadmap.
              </span>
            </div>

            {/* Right: Futuristic Software Interface Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl bg-surface-card border border-white/15 p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Window header buttons */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3 h-3 text-brand-cyan" />
                    <span>karmix-preview.core</span>
                  </div>
                </div>

                {/* Simulated Assistant UI */}
                <div className="space-y-4">
                  {/* Prompt Bar */}
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md bg-brand-cyan/20 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-brand-cyan" />
                      </div>
                      <span className="text-xs text-slate-300 font-mono">Synthesize project brief and organize daily queue...</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">⌘K</span>
                  </div>

                  {/* Interactive response card */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-brand-cyan/5 to-brand-indigo/5 border border-brand-cyan/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-semibold text-white">Contextual Workflow Generated</span>
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Tasks mapped to priority channels. Automatic reminders synced across lightweight local database.
                    </p>
                  </div>

                  {/* Mini data stream */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Zero bloat runtime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Privacy-first design</span>
                    </div>
                  </div>
                </div>

                {/* Subtle corner badge */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
