import React from 'react';
import { motion } from 'framer-motion';
import { Database, GraduationCap, BookOpen, Bus, Sprout, Store, Users, Zap, Sparkles, PlusCircle } from 'lucide-react';

const problemDomains = [
  {
    id: 'college',
    title: 'College & Campus Life',
    example: 'Mess attendance, resource room booking, lost & found hubs, and event scheduling bottlenecks.',
    icon: GraduationCap,
    color: '#00f0ff',
  },
  {
    id: 'education',
    title: 'Education & Peer Learning',
    example: 'Personalized study resources, peer doubts exchange, and focused collaborative study rooms.',
    icon: BookOpen,
    color: '#38bdf8',
  },
  {
    id: 'transport',
    title: 'Transportation & Mobility',
    example: 'Campus commute pooling, accurate local transit tracking, and student shuttle routes.',
    icon: Bus,
    color: '#6366f1',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Rural Tech',
    example: 'Local crop market prices, affordable soil telemetry, and direct farm-to-consumer logistics.',
    icon: Sprout,
    color: '#10b981',
  },
  {
    id: 'business',
    title: 'Local Businesses',
    example: 'Hyper-local store inventory discovery, neighborhood services, and micro-commerce tools.',
    icon: Store,
    color: '#f59e0b',
  },
  {
    id: 'community',
    title: 'Community & Civic Life',
    example: 'Civic issue reporting, neighborhood volunteer coordination, and emergency response circles.',
    icon: Users,
    color: '#ec4899',
  },
  {
    id: 'student-life',
    title: 'Student Productivity',
    example: 'Student budget management, internship discovery, and habit-tracking designed for engineers.',
    icon: Zap,
    color: '#a855f7',
  },
];

export default function ProblemBank() {
  return (
    <section id="problem-bank" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>COMING SOON • PROBLEM REPOSITORY</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              KARMAOX Problem Bank
            </h2>

            <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              A curated community repository where students can document real-world challenges, discover problems worth solving, and find teammates to build solutions with.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#submit-idea"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-brand-cyan" />
              <span>Contribute a Problem</span>
            </a>
          </div>
        </div>

        {/* Problem Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all group relative overflow-hidden flex flex-col justify-between"
              >
                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: domain.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      <Icon className="w-5 h-5 text-white group-hover:text-brand-cyan transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors mb-2.5">
                    {domain.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {domain.example}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="group-hover:text-slate-300 transition-colors">Repository Topic</span>
                  <span className="text-brand-cyan">Explore Topics &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
