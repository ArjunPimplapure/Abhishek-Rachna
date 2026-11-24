import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { WeddingLogo } from './WeddingLogo';
import { AlponaCorner, AlponaDivider, ShankhaMotif } from './BengaliMotifs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function getTimeRemainingIST(): TimeLeft {
  const targetMs = new Date(WEDDING_DATA.countdownTargetIso).getTime();
  const nowMs = Date.now();
  const diff = targetMs - nowMs;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export function CountdownScratchCard() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeRemainingIST());
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const foilCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparkleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const isRevealedRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    isRevealedRef.current = isRevealed;
  }, [isRevealed]);

  // Real-time 1-second IST countdown
  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeRemainingIST());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  // Paint brushed metallic antique-gold scratch surface at exact container dimensions
  const paintFoil = useCallback(() => {
    const container = containerRef.current;
    const canvas = foilCanvasRef.current;
    const sparkleCanvas = sparkleCanvasRef.current;
    if (!container || !canvas || !sparkleCanvas) return;

    const width = Math.max(240, Math.round(container.clientWidth));
    const height = Math.max(180, Math.round(container.clientHeight));

    canvas.width = width;
    canvas.height = height;
    sparkleCanvas.width = width;
    sparkleCanvas.height = height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = 'source-over';

    // Metallic antique-gold gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#9B7024');
    grad.addColorStop(0.24, '#D9B24C');
    grad.addColorStop(0.48, '#F6DF92');
    grad.addColorStop(0.72, '#C7963A');
    grad.addColorStop(1, '#8A5F1A');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle metallic brushed texture
    ctx.strokeStyle = 'rgba(255, 248, 220, 0.16)';
    ctx.lineWidth = 1;
    for (let y = 4; y < height; y += 6) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Traditional embossed border on gold foil
    ctx.strokeStyle = 'rgba(90, 15, 22, 0.34)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(12, 12, width - 24, height - 24);
    ctx.strokeStyle = 'rgba(255, 250, 232, 0.52)';
    ctx.strokeRect(16, 16, width - 32, height - 32);

    // Embossed Scratch Label
    ctx.fillStyle = '#4A1812';
    ctx.textAlign = 'center';
    ctx.font = '600 22px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('Scratch to Unveil', width / 2, height / 2 - 8);
    ctx.font = '500 13px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = 'rgba(74, 24, 18, 0.88)';
    ctx.fillText('Rub gently with finger or cursor', width / 2, height / 2 + 18);
  }, []);

  // Re-paint foil cleanly if container resizes before scratching starts
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    paintFoil();

    const observer = new ResizeObserver(() => {
      if (!isRevealedRef.current && scratchPercent === 0) {
        paintFoil();
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [paintFoil, scratchPercent]);

  // Sparkle particle loop
  const runSparkles = useCallback(() => {
    const sparkleCanvas = sparkleCanvasRef.current;
    if (!sparkleCanvas) return;
    const ctx = sparkleCanvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

    sparksRef.current = sparksRef.current
      .map((s) => ({
        ...s,
        x: s.x + s.vx,
        y: s.y + s.vy,
        vy: s.vy + 0.08,
        life: s.life - 0.045,
      }))
      .filter((s) => s.life > 0);

    for (const s of sparksRef.current) {
      ctx.fillStyle = `rgba(255, 236, 162, ${s.life})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }

    if (sparksRef.current.length > 0) {
      rafRef.current = window.requestAnimationFrame(runSparkles);
    } else {
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const spawnSparks = useCallback(
    (x: number, y: number) => {
      for (let i = 0; i < 4; i++) {
        sparksRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3.4,
          vy: (Math.random() - 0.7) * 3,
          life: 1,
          size: 1.5 + Math.random() * 2.2,
        });
      }
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(runSparkles);
      }
    },
    [runSparkles]
  );

  const computeClearedRatio = useCallback(() => {
    const canvas = foilCanvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return 0;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return 0;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    let total = 0;
    const stride = 24;
    for (let i = 3; i < pixels.length; i += 4 * stride) {
      total++;
      if (pixels[i] < 40) cleared++;
    }
    return total > 0 ? Math.round((cleared / total) * 100) : 0;
  }, []);

  const scratchAt = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = foilCanvasRef.current;
      if (!canvas || isRevealedRef.current) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 44;

      if (lastPointRef.current) {
        ctx.beginPath();
        ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      lastPointRef.current = { x, y };
      spawnSparks(x, y);
    },
    [spawnSparks]
  );

  const finishStroke = useCallback(() => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;
    const pct = computeClearedRatio();
    setScratchPercent(pct);
    if (pct >= 48) {
      setIsRevealed(true);
    }
  }, [computeClearedRatio]);

  // Native non-passive touch listeners so mobile & WhatsApp browsers never swallow finger scratches
  useEffect(() => {
    const canvas = foilCanvasRef.current;
    if (!canvas) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (isRevealedRef.current || e.touches.length === 0) return;
      e.preventDefault();
      isDrawingRef.current = true;
      lastPointRef.current = null;
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDrawingRef.current || isRevealedRef.current || e.touches.length === 0) return;
      e.preventDefault();
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      finishStroke();
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [scratchAt, finishStroke]);

  const handleReset = () => {
    setIsRevealed(false);
    setScratchPercent(0);
    window.setTimeout(() => paintFoil(), 30);
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4ECE0] via-[#FBF5EA] to-[#F5EAD9] py-20 sm:py-28 px-4 sm:px-6"
    >
      {/* Warm ambient golden radiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.16) 0%, transparent 64%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#9E1B24] font-semibold">
            Shubho Muhurat
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold text-[#5A0F16] [text-wrap:balance]">
            A Special Surprise Awaits!
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#5C453D]">
            Scratch to discover the countdown to our special day.
          </p>
        </motion.div>

        {/* Ornamental Bengali Lotus-Inspired Scratch Card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 max-w-2xl rounded-[32px] border-2 border-[#B88A3B] bg-gradient-to-b from-[#FFFDF8] to-[#F9EFE0] p-4 sm:p-8 shadow-[0_26px_70px_rgba(90,15,22,0.14)]"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <ShankhaMotif className="h-6 w-6 text-[#9E1B24]/85" />
            <WeddingLogo
              sizeClass="h-14 w-14"
              className="border border-[#B88A3B]/60 p-1 shadow-sm"
            />
            <ShankhaMotif className="h-6 w-6 -scale-x-100 text-[#9E1B24]/85" />
          </div>

          <AlponaCorner className="pointer-events-none absolute top-3 left-3 h-10 w-10 text-[#9E1B24]/35" />
          <AlponaCorner className="pointer-events-none absolute top-3 right-3 h-10 w-10 rotate-90 text-[#9E1B24]/35" />
          <AlponaCorner className="pointer-events-none absolute bottom-3 left-3 h-10 w-10 -rotate-90 text-[#9E1B24]/35" />
          <AlponaCorner className="pointer-events-none absolute bottom-3 right-3 h-10 w-10 rotate-180 text-[#9E1B24]/35" />

          {/* Interactive Scratch Canvas + Countdown */}
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl border border-[#9E1B24]/35 bg-[#FFFDF9] px-4 py-10 sm:px-8 sm:py-12 select-none"
          >
            <div className="relative z-0 flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9E1B24] font-semibold">
                12 December 2026 · Wedding Day
              </p>

              {timeLeft.isPast ? (
                <div className="my-6">
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-[#5A0F16]">
                    The Celebrations Begin!
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid w-full max-w-lg grid-cols-4 gap-2 sm:gap-4">
                  {[
                    { label: 'Days', value: pad(timeLeft.days) },
                    { label: 'Hours', value: pad(timeLeft.hours) },
                    { label: 'Minutes', value: pad(timeLeft.minutes) },
                    { label: 'Seconds', value: pad(timeLeft.seconds) },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="flex flex-col items-center rounded-xl border border-[#B88A3B]/45 bg-[#FBF6EB] py-3.5 sm:py-4 px-1.5 shadow-inner"
                    >
                      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#9E1B24] tabular-nums leading-none">
                        {unit.value}
                      </span>
                      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#5D473A] font-semibold">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Antique Gold Scratch Canvas */}
            <canvas
              ref={foilCanvasRef}
              onMouseDown={(e) => {
                if (isRevealed) return;
                isDrawingRef.current = true;
                lastPointRef.current = null;
                scratchAt(e.clientX, e.clientY);
              }}
              onMouseMove={(e) => {
                if (!isDrawingRef.current || isRevealed) return;
                scratchAt(e.clientX, e.clientY);
              }}
              onMouseUp={finishStroke}
              onMouseLeave={finishStroke}
              className={`absolute inset-0 z-10 h-full w-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
                isRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
              style={{ touchAction: 'none' }}
              aria-label="Scratch off the antique gold foil to reveal the wedding countdown"
            />

            {/* Golden Sparkle Overlay Canvas */}
            <canvas
              ref={sparkleCanvasRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
            <span className="text-xs text-[#6B5349] tabular-nums">
              {isRevealed
                ? 'Countdown unveiled with blessings'
                : scratchPercent > 0
                  ? `${scratchPercent}% uncovered`
                  : 'Rub with finger or mouse to scratch'}
            </span>

            <div className="flex items-center gap-2">
              {!isRevealed ? (
                <button
                  type="button"
                  onClick={() => setIsRevealed(true)}
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border border-[#B88A3B]/45 bg-[#FFFDF9] px-3 py-1.5 text-xs font-medium text-[#5A0F16] transition-colors hover:bg-[#F4ECE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B24]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#B88A3B]" aria-hidden="true" />
                  <span>Reveal Countdown</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border border-[#B88A3B]/45 bg-[#FFFDF9] px-3 py-1.5 text-xs font-medium text-[#5A0F16] transition-colors hover:bg-[#F4ECE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B24]"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-[#9E1B24]" aria-hidden="true" />
                  <span>Scratch Again</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <AlponaDivider className="h-9 w-56 sm:w-72 text-[#B88A3B]/80" />
        </div>
      </div>
    </section>
  );
}
