import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Orbit, Cpu } from 'lucide-react';
import VisionScene from '../3d/VisionScene';

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-40 bg-void overflow-hidden border-t border-white/5">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-brand-cyan/10 via-brand-indigo/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Orbit className="w-3.5 h-3.5 text-brand-cyan" />
            <span>LONG-TERM PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1]">
            The Future Is Built, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-slate-100 to-brand-indigo">
              Not Predicted.
            </span>
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-xl font-light leading-relaxed">
            Karmaox exists to explore what technology can become when ideas are built with purpose, curiosity and persistence.
          </p>
        </div>

        {/* Cinematic 3D Expanding Core Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass-panel rounded-3xl border border-white/10 p-6 md:p-10 overflow-hidden shadow-2xl"
        >
          <div className="absolute top-6 left-8 flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span>TOPOLOGY EVOLUTION &bull; CONNECTED MATRIX</span>
          </div>

          <VisionScene />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-center sm:text-left">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">01 &bull; Persistence</span>
              <p className="text-sm text-slate-300 mt-1 font-light">Deep iteration through practical engineering rather than hype.</p>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">02 &bull; Purpose</span>
              <p className="text-sm text-slate-300 mt-1 font-light">Software designed for measurable real-world user clarity.</p>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">03 &bull; Open Frontier</span>
              <p className="text-sm text-slate-300 mt-1 font-light">Embracing AI, web, and spatial tech to build the next generation.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
