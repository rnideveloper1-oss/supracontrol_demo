import React from 'react';

export default function SupraLogo({ size = 'default', showTagline = true, lightTheme = false, className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  const iconHeight = isSmall ? 28 : isLarge ? 50 : 38;
  const supraFontSize = isSmall ? 'text-lg' : isLarge ? 'text-3xl' : 'text-2xl';
  const taglineFontSize = isSmall ? 'text-[9px]' : isLarge ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* S-Circuit Brand Mark */}
      <svg
        viewBox="0 0 160 110"
        style={{ height: `${iconHeight}px`, width: 'auto' }}
        className="shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top & Left Blue S Spine */}
        <path
          d="M 100 24 L 50 24 C 36 24 28 32 28 42 C 28 52 36 60 50 60 L 80 60 C 94 60 102 68 102 78 C 102 88 94 96 80 96 L 36 96"
          fill="none"
          stroke="#1a56db"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Top Node (Blue Ring) */}
        <circle cx="106" cy="24" r="8" fill="#ffffff" stroke="#1a56db" strokeWidth="5" />

        {/* Middle Line (Green Trace + Node) */}
        <path d="M 52 60 L 106 60" stroke="#78c043" strokeWidth="13" strokeLinecap="round" />
        <circle cx="106" cy="60" r="8" fill="#ffffff" stroke="#78c043" strokeWidth="5" />

        {/* Bottom Line (Green Trace + Node) */}
        <path d="M 52 96 L 106 96" stroke="#78c043" strokeWidth="13" strokeLinecap="round" />
        <circle cx="106" cy="96" r="8" fill="#ffffff" stroke="#78c043" strokeWidth="5" />

        {/* Bottom-Left Terminal Node (Blue Ring) */}
        <circle cx="28" cy="96" r="8" fill="#ffffff" stroke="#1a56db" strokeWidth="5" />
      </svg>

      {/* Typography: Supra + Control + Tagline */}
      <div className="ml-2.5 flex flex-col justify-center leading-none">
        <div className={`flex items-center font-black tracking-tight ${supraFontSize}`}>
          {/* Supra in Deep Royal Blue */}
          <span className={lightTheme ? 'text-white' : 'text-brand-blue'}>Supra</span>

          {/* Control in Vibrant Lime Green */}
          <span className="text-brand-green ml-0.5 relative">
            C
            <span className="relative inline-block mx-[1px]">
              o
              <svg
                viewBox="0 0 24 24"
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                  isSmall ? 'w-2 h-2' : isLarge ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'
                }`}
                fill="none"
                stroke={lightTheme ? "#ffffff" : "#1a56db"}
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M 4 8 A 10 10 0 0 1 20 8" />
                <path d="M 7 12 A 6 6 0 0 1 17 12" />
                <circle cx="12" cy="16" r="1.5" fill={lightTheme ? "#ffffff" : "#1a56db"} />
              </svg>
            </span>
            ntrol
          </span>
        </div>

        {/* Tagline: -Enabling Digital Evolution- */}
        {showTagline && (
          <span
            className={`whitespace-nowrap font-bold tracking-[0.14em] uppercase mt-1 ${taglineFontSize} ${
              lightTheme ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            -Enabling Digital Evolution-
          </span>
        )}
      </div>
    </div>
  );
}
