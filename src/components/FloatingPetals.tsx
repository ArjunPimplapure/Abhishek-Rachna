import React, { useMemo } from 'react';

interface FloatingPetalsProps {
  variant?: 'gold-crimson' | 'rose-gold';
  density?: 'light' | 'rich';
}

interface PetalSeed {
  id: number;
  leftPct: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  spinDeg: number;
  color: string;
}

interface DustSeed {
  id: number;
  leftPct: number;
  topPct: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingPetals({
  variant = 'gold-crimson',
  density = 'light',
}: FloatingPetalsProps) {
  const petalCount = density === 'rich' ? 18 : 11;
  const dustCount = density === 'rich' ? 20 : 12;

  const petals = useMemo<PetalSeed[]>(() => {
    const palette =
      variant === 'rose-gold'
        ? ['#9E1B24', '#C8372D', '#B92B38', '#D4AF37']
        : ['#D97706', '#9E1B24', '#E69F24', '#F3D27A'];

    return Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      leftPct: (i * 19 + 7) % 96,
      size: 10 + ((i * 5) % 9),
      duration: 11 + ((i * 3) % 8),
      delay: -((i * 2.3) % 12),
      driftX: (i % 2 === 0 ? 1 : -1) * (20 + ((i * 11) % 35)),
      spinDeg: (i % 2 === 0 ? 1 : -1) * (180 + ((i * 40) % 160)),
      color: palette[i % palette.length],
    }));
  }, [petalCount, variant]);

  const dust = useMemo<DustSeed[]>(() => {
    return Array.from({ length: dustCount }, (_, i) => ({
      id: i,
      leftPct: (i * 23 + 4) % 97,
      topPct: (i * 17 + 8) % 92,
      size: 3 + (i % 3),
      duration: 3 + (i % 4),
      delay: -((i * 1.1) % 4),
    }));
  }, [dustCount]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="animate-petal absolute -top-8 block will-change-transform"
          style={
            {
              left: `${petal.leftPct}%`,
              width: `${petal.size}px`,
              height: `${Math.round(petal.size * 1.35)}px`,
              backgroundColor: petal.color,
              borderRadius: '65% 35% 70% 30% / 55% 45% 55% 45%',
              opacity: 0.72,
              boxShadow: '0 2px 6px rgba(90, 15, 22, 0.16)',
              '--petal-duration': `${petal.duration}s`,
              '--petal-delay': `${petal.delay}s`,
              '--drift-x': `${petal.driftX}px`,
              '--spin-deg': `${petal.spinDeg}deg`,
            } as React.CSSProperties
          }
        />
      ))}

      {dust.map((particle) => (
        <span
          key={`dust-${particle.id}`}
          className="animate-dust absolute rounded-full bg-[#E5C158] will-change-transform"
          style={
            {
              left: `${particle.leftPct}%`,
              top: `${particle.topPct}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: '0 0 8px rgba(212, 175, 55, 0.75)',
              '--dust-duration': `${particle.duration}s`,
              '--dust-delay': `${particle.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
