import React from 'react';

function Logo({ variant = 'dark' }) {
  // 'dark' variant = intended for light backgrounds (dark text)
  // 'light' variant = intended for dark backgrounds (light text)
  const isDark = variant === 'dark';
  
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Red Gradient Icon */}
      <div className={`relative w-10 h-10 rounded-xl shadow-lg group-hover:shadow-red-500/30 transition-all duration-300 transform group-hover:scale-105 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-red-600 to-rose-700' 
          : 'bg-gradient-to-br from-red-600 to-rose-700'
      }`}>
        {/* Abstract Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-1.5">
          <div className="rounded-sm bg-white/20"></div>
          <div className="rounded-sm bg-white/40"></div>
          <div className="rounded-sm bg-white/40"></div>
          <div className="rounded-sm bg-white/20"></div>
        </div>
        
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40"></div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tight ${
          isDark ? 'text-slate-900' : 'text-white'
        }`}>
          Mini
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
            isDark 
              ? 'from-red-600 to-rose-600' 
              : 'from-red-600 to-rose-600' 
          }`}>
            Quora
          </span>
        </span>
        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
          isDark ? 'text-slate-900' : 'text-slate-200'
        }`}>
          Blog Platform
        </span>
      </div>
    </div>
  );
}

export default Logo;