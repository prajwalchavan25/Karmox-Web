import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Terminal } from 'lucide-react';
import HeroScene from '../3d/HeroScene';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden mesh-bg"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Small Label / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#00f0ff] animate-pulse" />
              <span>KARMAOX</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] mb-6">
              Building Ideas <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Into Digital Experiences.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              Karmaox is a technology-driven company focused on building practical digital products, experiences, and solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('what-we-build')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide text-white bg-gradient-to-r from-brand-cyan/80 to-brand-blue/80 hover:from-brand-cyan hover:to-brand-blue transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] group"
              >
                <span>Explore Karmaox</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('founder')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <User className="w-4 h-4 text-brand-cyan" />
                <span>Meet the Founder</span>
              </button>
            </div>

            {/* Key Feature Indicator */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Focus</div>
                <div className="text-sm font-semibold text-white">Digital Products</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Approach</div>
                <div className="text-sm font-semibold text-white">Engineering First</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Status</div>
                <div className="text-sm font-semibold text-brand-cyan flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  Active Development
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Tech Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full aspect-square max-w-[500px] relative">
              {/* Backlight halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-indigo/20 blur-3xl rounded-full pointer-events-none" />
              
              {/* 3D Canvas */}
              <HeroScene />

              {/* Minimal floating tech telemetry */}
              <div className="absolute -bottom-4 right-4 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-[11px] font-mono text-slate-400 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                <span>INTERACTIVE 3D CORE &bull; DRAG &bull; ROTATE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
