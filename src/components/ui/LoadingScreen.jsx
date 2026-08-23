import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        // Smooth progression
        const step = Math.random() * 25 + 15;
        return Math.min(100, Math.round(prev + step));
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void text-white select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Karmaox Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-16 h-16 mb-8"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="load-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="24" fill="#0c0e1a" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <motion.path
                  d="M30 25 L30 75 M30 50 L68 25 M38 45 L72 75"
                  stroke="url(#load-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <circle cx="70" cy="25" r="4" fill="#00f0ff" className="animate-pulse" />
                <circle cx="72" cy="75" r="4" fill="#6366f1" className="animate-pulse" />
              </svg>
              <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full animate-pulse-slow -z-10" />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <span className="font-display font-bold text-xl tracking-[0.3em] uppercase text-white">
                KARMAOX
              </span>
              <p className="text-[11px] font-mono tracking-widest text-slate-400 mt-1 uppercase">
                Technology &bull; Innovation
              </p>
            </motion.div>

            {/* Micro Progress Bar */}
            <div className="w-48 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-indigo"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between w-48 text-[10px] font-mono text-slate-500">
              <span>SYSTEM INIT</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
