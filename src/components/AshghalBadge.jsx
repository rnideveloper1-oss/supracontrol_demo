import React from 'react';

export default function AshghalBadge({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 160"
        className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
          </filter>
          <linearGradient id="blueGear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1a56db" />
          </linearGradient>
          <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78c043" />
            <stop offset="100%" stopColor="#5ea031" />
          </linearGradient>
        </defs>

        {/* Outer 16-Tooth Gear / Rosette Ring */}
        <g fill="url(#blueGear)" stroke="#ffffff" strokeWidth="2">
          {Array.from({ length: 16 }).map((_, i) => {
            const rot = i * 22.5;
            return (
              <rect
                key={i}
                x="71"
                y="6"
                width="18"
                height="148"
                rx="4"
                transform={`rotate(${rot} 80 80)`}
              />
            );
          })}
        </g>

        {/* Outer Circle Layer */}
        <circle cx="80" cy="80" r="62" fill="#1a56db" stroke="#ffffff" strokeWidth="3" />
        
        {/* Inner White Face */}
        <circle cx="80" cy="80" r="52" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

        {/* Top Crest / Authority Building Symbol */}
        <g stroke="#1a56db" strokeWidth="2" fill="none" strokeLinecap="round">
          <rect x="66" y="44" width="28" height="20" rx="2" fill="#f8fafc" />
          <line x1="72" y1="50" x2="88" y2="50" />
          <line x1="72" y1="56" x2="88" y2="56" />
          <line x1="80" y1="38" x2="80" y2="44" />
          <circle cx="80" cy="37" r="1.5" fill="#1a56db" />
        </g>

        {/* Center Banner: Ashghal Approved */}
        <g filter="url(#badgeShadow)">
          <rect x="18" y="72" width="124" height="26" rx="13" fill="url(#pillGrad)" stroke="#ffffff" strokeWidth="2" />
          <text
            x="80"
            y="89"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11.5"
            fontWeight="bold"
            letterSpacing="0.03em"
            fontFamily="system-ui, sans-serif"
          >
            Ashghal Approved
          </text>
        </g>

        {/* Bottom Micro Crest Details */}
        <g transform="translate(68, 106)" stroke="#78c043" strokeWidth="1.5" fill="none">
          <path d="M 4 8 C 10 2, 16 12, 22 6" />
          <path d="M 6 12 C 12 6, 18 16, 24 10" />
        </g>
        <text
          x="80"
          y="126"
          textAnchor="middle"
          fill="#1a56db"
          fontSize="6.5"
          fontWeight="bold"
          letterSpacing="0.05em"
          fontFamily="system-ui, sans-serif"
        >
          CERTIFIED INTEGRATOR
        </text>
      </svg>
    </div>
  );
}
