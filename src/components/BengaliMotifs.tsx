import React from 'react';

interface MotifProps {
  className?: string;
}

export function AlponaCorner({ className = 'w-16 h-16' }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 112 V24 C8 15 15 8 24 8 H112"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 96 V30 C18 23 23 18 30 18 H96"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* Traditional Bengali lotus petal corner */}
      <path
        d="M22 22 C36 22 46 28 50 40 C38 42 26 34 22 22 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M22 22 C22 36 28 46 40 50 C42 38 34 26 22 22 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M22 22 C44 26 56 38 60 60 C38 56 26 44 22 22 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="64" cy="22" r="2.2" fill="currentColor" />
      <circle cx="22" cy="64" r="2.2" fill="currentColor" />
      <circle cx="80" cy="18" r="1.5" fill="currentColor" />
      <circle cx="18" cy="80" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function AlponaDivider({ className = 'w-64 h-10' }: MotifProps) {
  return (
    <svg
      viewBox="0 0 360 52"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Left symmetrical lotus scroll */}
      <path
        d="M16 26 H122 M122 26 C132 16 144 16 152 26 C144 36 132 36 122 26 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Right symmetrical lotus scroll */}
      <path
        d="M344 26 H238 M238 26 C228 16 216 16 208 26 C216 36 228 36 238 26 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Central Bengali Sacred Lotus */}
      <path
        d="M180 7 C187 17 190 26 180 39 C170 26 173 17 180 7 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M180 39 C166 34 159 24 162 14 C170 18 176 26 180 39 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M180 39 C194 34 201 24 198 14 C190 18 184 26 180 39 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="180" cy="45" r="2.2" fill="currentColor" />
      <circle cx="110" cy="26" r="2" fill="currentColor" />
      <circle cx="250" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

export function ShankhaMotif({ className = 'w-7 h-7' }: MotifProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 30 C8 22 14 13 24 11 C31 9.5 39 14 40 21 C41 28 34 35 26 36 C19 37 13 35 10 30 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M16 16 C20 21 20 29 16 34" stroke="currentColor" strokeWidth="1.2" />
      <path d="M23 12 C27 19 27 29 22 36" stroke="currentColor" strokeWidth="1.2" />
      <path d="M30 13 C33 19 33 27 29 34" stroke="currentColor" strokeWidth="1.2" />
      <path d="M38 19 L44 21 L39 26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrassDiya({ className = 'w-9 h-9' }: MotifProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      {/* Flame */}
      <path
        d="M24 7 C27 13 29 17 24 22 C19 17 21 13 24 7 Z"
        fill="#F6B83B"
        stroke="#D97706"
        strokeWidth="1"
      />
      <path d="M24 12 C25.5 15 26 17.5 24 20 C22 17.5 22.5 15 24 12 Z" fill="#FFF7D6" />
      {/* Brass bowl */}
      <path
        d="M10 26 H38 C36 33 30 37 24 37 C18 37 12 33 10 26 Z"
        fill="#C69335"
        stroke="#8C621B"
        strokeWidth="1.3"
      />
      <path d="M18 37 L15 41 H33 L30 37" stroke="#8C621B" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function MarigoldToran({ className = 'w-full h-14' }: MotifProps) {
  return (
    <svg
      viewBox="0 0 600 72"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {/* Draped marigold festoons */}
      <path
        d="M0 8 Q75 44 150 12 Q225 44 300 12 Q375 44 450 12 Q525 44 600 8"
        stroke="#C57B14"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Mango leaves along top */}
      {[30, 90, 150, 210, 270, 330, 390, 450, 510, 570].map((x) => (
        <path
          key={x}
          d={`M${x} 8 C${x - 6} 18, ${x - 2} 28, ${x} 31 C${x + 2} 28, ${x + 6} 18, ${x} 8 Z`}
          fill="#2D5A27"
          fillOpacity="0.85"
        />
      ))}
      {/* Marigold & Jasmine blossom clusters */}
      {[0, 75, 150, 225, 300, 375, 450, 525, 600].map((x, idx) => {
        const y = idx % 2 === 0 ? 12 : 28;
        return (
          <g key={x}>
            <circle cx={x} cy={y} r="7" fill="#E68A1E" />
            <circle cx={x} cy={y} r="4.2" fill="#F6B93B" />
            {idx % 2 === 1 && (
              <>
                <line x1={x} y1={y + 7} x2={x} y2={y + 30} stroke="#FBF7F0" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx={x} cy={y + 33} r="4.5" fill="#9E1B24" />
                <circle cx={x} cy={y + 20} r="3" fill="#FFF9EE" />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function BengaliFishMotif({ className = 'w-12 h-6' }: MotifProps) {
  return (
    <svg viewBox="0 0 80 36" fill="none" aria-hidden="true" className={className}>
      <path
        d="M16 18 C26 7 46 7 60 18 C46 29 26 29 16 18 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M60 18 L72 10 L69 18 L72 26 Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="25" cy="16" r="1.8" fill="currentColor" />
      <path d="M34 12 C37 16 37 20 34 24" stroke="currentColor" strokeWidth="1" />
      <path d="M43 11 C46 16 46 20 43 25" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
