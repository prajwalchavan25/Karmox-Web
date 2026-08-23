import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'What We Build', href: '#what-we-build' },
  { name: 'Founder', href: '#founder' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'about', 'what-we-build', 'founder', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          
          {/* Logo with official OX symbol (44-48px on desktop, 38px on mobile) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group select-none flex-shrink-0"
          >
            <img
              src="/assets/karmaox-logo.png"
              alt="Karmaox Logo"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
            />
            <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-white group-hover:text-brand-cyan transition-colors">
              KARMAOX
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-5 py-2 rounded-full border border-white/5 mx-4">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all relative ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 hover:from-brand-cyan/30 hover:to-brand-indigo/30 border border-brand-cyan/40 hover:border-brand-cyan text-brand-cyan hover:text-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] group"
            >
              <span>Let's Build</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-surface-card border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] p-4 z-30 md:hidden"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-3 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-brand-cyan hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/40 text-brand-cyan text-sm font-semibold uppercase tracking-wider"
                >
                  <span>Let's Build</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
