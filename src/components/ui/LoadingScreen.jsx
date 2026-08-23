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
            {/* Official Karmaox Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-28 h-28 mb-6 flex items-center justify-center"
            >
              <img
                src="/assets/karmaox-logo.png"
                alt="Karmaox Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              />
              <div className="absolute inset-0 bg-brand-cyan/15 blur-2xl rounded-full animate-pulse-slow -z-10" />
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
                Building Ideas Into Digital Experiences
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
