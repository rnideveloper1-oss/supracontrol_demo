import React from 'react';

export default function ICVBadge({ className = '' }) {
  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-slate-200/80 flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* ICV Large Bold Letters */}
      <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#004b87] leading-none mb-1">
        ICV
      </div>
      
      {/* IN-COUNTRY VALUE */}
      <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#004b87] uppercase mb-1">
        IN-COUNTRY VALUE
      </div>

      {/* CERTIFIED banner */}
      <div className="w-full border-t-2 border-b-2 border-[#004b87] py-0.5 mt-0.5">
        <span className="text-xs sm:text-sm font-black tracking-wider text-[#004b87] uppercase">
          CERTIFIED
        </span>
      </div>
    </div>
  );
}
