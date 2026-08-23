import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatWeBuild from './components/sections/WhatWeBuild';
import ProductShowcase from './components/sections/ProductShowcase';
import Innovation from './components/sections/Innovation';
import Vision from './components/sections/Vision';
import Founder from './components/sections/Founder';
import Roadmap from './components/sections/Roadmap';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import LoadingScreen from './components/ui/LoadingScreen';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-void text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan relative">
      {/* Boot Loading Animation */}
      <LoadingScreen onFinish={() => setLoaded(true)} />

      {/* UX enhancements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <WhatWeBuild />
        <ProductShowcase />
        <Innovation />
        <Vision />
        <Founder />
        <Roadmap />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
