import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Box, Sparkles, ArrowUpRight } from 'lucide-react';
import Card3DIcon from '../3d/Card3DIcon';

const cards = [
  {
    id: 'ai',
    title: 'AI & Intelligent Tools',
    tagline: 'Practical Automation',
    description: 'AI-powered solutions designed for practical use.',
    type: 'ai',
    borderGlow: 'hover:border-brand-cyan/40',
    accentColor: '#00f0ff',
  },
  {
    id: 'web',
    title: 'Web Platforms',
    tagline: 'High-Performance Web',
    description: 'Modern web experiences and platforms designed around real users.',
    type: 'web',
    borderGlow: 'hover:border-sky-400/40',
    accentColor: '#38bdf8',
  },
  {
    id: 'digital',
    title: 'Digital Products',
    tagline: 'Utility-Driven Software',
    description: 'Useful software products built from real-world problems.',
    type: 'digital',
    borderGlow: 'hover:border-brand-indigo/40',
    accentColor: '#6366f1',
  },
  {
    id: 'experimental',
    title: 'Experimental Technology',
    tagline: 'Frontier Explorations',
    description: 'Exploring new technologies, ideas and unconventional solutions.',
    type: 'experimental',
    borderGlow: 'hover:border-purple-400/40',
    accentColor: '#c084fc',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="products" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
            <Box className="w-3.5 h-3.5 text-brand-cyan" />
            <span>DISCIPLINES &amp; CAPABILITIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            What We're Building
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Focused on creating real utility across modern software, web frameworks, and intelligent tools.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div id="what-we-build" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 ${card.borderGlow} transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
            >
              {/* Card Ambient Glow on Hover */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: card.accentColor }}
              />

              <div>
                {/* Top bar: 3D Micro canvas + Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2 rounded-2xl bg-surface/80 border border-white/10 shadow-inner group-hover:border-white/20 transition-colors">
                    <Card3DIcon type={card.type} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    {card.tagline}
                  </span>
                </div>

                {/* Card Title & Content */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-brand-cyan transition-colors mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom detail */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="group-hover:text-slate-300 transition-colors">INITIATIVE 0{index + 1}</span>
                <div className="flex items-center gap-1 text-slate-400 group-hover:text-brand-cyan transition-colors">
                  <span>Explore Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
