import React from 'react';

export default function CanvasFallback({ type = "core" }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Glowing Orbs */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-cyan/20 to-brand-indigo/20 blur-2xl animate-pulse-slow" />
        <div className="w-48 h-48 rounded-full border border-brand-cyan/30 animate-spin-slow flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border border-brand-indigo/40 border-dashed animate-spin flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-cyan/30 via-brand-blue/20 to-brand-indigo/30 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-brand-cyan shadow-[0_0_15px_#00f0ff] animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
