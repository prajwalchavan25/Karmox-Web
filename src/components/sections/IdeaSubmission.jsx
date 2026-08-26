import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, CheckCircle, AlertCircle, Sparkles, Tag, Linkedin, Github, Instagram } from 'lucide-react';

export default function IdeaSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'College & Campus Life',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please describe the problem or idea you want to build.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/karmaoxdeveloper@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          category: formData.category,
          idea_description: formData.message.trim(),
          _subject: `New Idea Submission from ${formData.name.trim()} (${formData.category})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus('success');
        setFormData({ name: '', email: '', category: 'College & Campus Life', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to submit right now. Please try again or reach out directly at karmaoxdeveloper@gmail.com.'
      );
    }
  };

  return (
    <section id="submit-idea" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>IDEA INCUBATION</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Have a Problem? <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-slate-100 to-brand-indigo">
                Build the Solution.
              </span>
            </h2>

            <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Bring your real-world problem and idea to KARMAOX. Whether you have a rough sketch or a clear concept, we'll help you structure, learn, and turn it into working technology.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 w-full mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/karmaox-logo.png"
                  alt="Karmaox"
                  className="h-6 w-auto object-contain"
                />
                <div>
                  <div className="font-display font-bold text-base text-white">Karmaox</div>
                  <div className="text-xs font-mono text-slate-400">Turning Ideas Into Technology</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-light">
                Direct Inquiries: <span className="text-brand-cyan font-mono">karmaoxdeveloper@gmail.com</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/prajwal-chavan-6a1020380/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-brand-cyan transition-colors text-xs font-medium border border-white/10 hover:border-brand-cyan/40"
              >
                <Linkedin className="w-4 h-4 text-brand-cyan" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/prajwalchavan25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-brand-cyan transition-colors text-xs font-medium border border-white/10 hover:border-brand-cyan/40"
              >
                <Github className="w-4 h-4 text-brand-cyan" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/prajwal_chavan10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-brand-cyan transition-colors text-xs font-medium border border-white/10 hover:border-brand-cyan/40"
              >
                <Instagram className="w-4 h-4 text-brand-cyan" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Idea Submission Form */}
          <div className="lg:col-span-7" id="contact">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

              {status === 'success' ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Idea Submitted</h3>
                  <p className="text-slate-300 text-base max-w-md font-light leading-relaxed mb-6">
                    Thanks for contacting Karmaox. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setErrorMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
                  >
                    Submit Another Idea
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error Notification banner if any */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                      <div>{errorMessage}</div>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        disabled={status === 'loading'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-brand-cyan">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        disabled={status === 'loading'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Problem Domain / Category */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Problem Domain / Category
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <Tag className="w-4 h-4" />
                      </div>
                      <select
                        disabled={status === 'loading'}
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm transition-all font-sans disabled:opacity-60 cursor-pointer"
                      >
                        <option value="College & Campus Life">College &amp; Campus Life</option>
                        <option value="Education & Peer Learning">Education &amp; Peer Learning</option>
                        <option value="Transportation & Transit">Transportation &amp; Transit</option>
                        <option value="Agriculture & Rural Tech">Agriculture &amp; Rural Tech</option>
                        <option value="Local Business & Commerce">Local Business &amp; Commerce</option>
                        <option value="Community & Civic Solutions">Community &amp; Civic Solutions</option>
                        <option value="Student Productivity">Student Productivity &amp; Tools</option>
                        <option value="Other Real-World Problem">Other Real-World Problem</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Describe the Problem &amp; Your Idea <span className="text-brand-cyan">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none text-slate-500">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={4}
                        disabled={status === 'loading'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What problem did you notice? What digital solution or app do you envision to solve it?"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans resize-none disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-xl font-medium text-sm tracking-wide text-white bg-gradient-to-r from-brand-cyan/80 to-brand-blue/80 hover:from-brand-cyan hover:to-brand-blue transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting idea...</span>
                        </div>
                      ) : (
                        <>
                          <span>Submit Your Idea</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] font-mono text-slate-400 mt-3">
                      Submissions are routed directly to <span className="text-slate-300">karmaoxdeveloper@gmail.com</span>
                    </p>
                  </div>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
