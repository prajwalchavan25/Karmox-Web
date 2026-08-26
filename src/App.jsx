import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProblemSection from './components/sections/ProblemSection';
import Approach from './components/sections/Approach';
import KarmaoxAI from './components/sections/KarmaoxAI';
import ProblemBank from './components/sections/ProblemBank';
import ProductShowcase from './components/sections/ProductShowcase';
import Founder from './components/sections/Founder';
import IdeaSubmission from './components/sections/IdeaSubmission';
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

      {/* Main Content Flow: Problem -> Idea -> Build -> Product -> Opportunity */}
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <Approach />
        <KarmaoxAI />
        <ProblemBank />
        <ProductShowcase />
        <Founder />
        <IdeaSubmission />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
