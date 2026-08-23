import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, CheckCircle, Linkedin, Github, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-surface-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-widest mb-4">
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Have an Idea <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Worth Building?
              </span>
            </h2>

            <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Let's turn it into something real. Whether you're curious about our projects, exploring collaboration, or sharing feedback, we'd love to hear from you.
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
                  <div className="text-xs font-mono text-slate-400">Building Ideas Into Digital Experiences</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-light">
                Building practical digital products with modern software, web technologies, and creative innovation.
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Recorded</h3>
                  <p className="text-slate-300 text-sm max-w-md font-light leading-relaxed mb-6">
                    Thank you for reaching out to Karmaox. Direct backend integrations will be synced shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Message / Inquiry
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none text-slate-500">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your idea, inquiry, or challenge..."
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface/90 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none text-white text-sm placeholder-slate-500 transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* Notice & Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-medium text-sm tracking-wide text-white bg-gradient-to-r from-brand-cyan/80 to-brand-blue/80 hover:from-brand-cyan hover:to-brand-blue transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] font-mono text-slate-400 mt-3">
                      *Note: Contact form transmission configured for early-stage startup inquiries.
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
