import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { WeddingLogo } from './WeddingLogo';
import {
  AlponaCorner,
  BrassDiya,
  MarigoldToran,
  ShankhaMotif,
} from './BengaliMotifs';
import { FloatingPetals } from './FloatingPetals';

interface EntranceDoorProps {
  onEntered: () => void;
  onStartMusic: () => void;
}

type DoorStage = 'idle' | 'cracking' | 'opening' | 'zooming' | 'done';

const BURST_SPARKLES = Array.from({ length: 24 }, (_, idx) => {
  const angle = (idx / 24) * Math.PI * 2;
  return {
    id: idx,
    dx: Math.cos(angle) * (88 + (idx % 4) * 32),
    dy: Math.sin(angle) * (88 + (idx % 4) * 32),
    size: 4 + (idx % 4),
  };
});

function CarvedDoorPanel({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <div className="relative flex h-full w-full flex-col justify-between p-3 sm:p-6 md:p-8 select-none">
      {/* Upper Carved Arch / Crown Panel */}
      <div className="wood-panel-recessed relative flex flex-col items-center justify-center rounded-t-[48px] sm:rounded-t-[84px] border border-[#D4AF37]/45 px-3 py-5 sm:py-8">
        <div className="pointer-events-none absolute inset-1.5 rounded-t-[42px] sm:rounded-t-[76px] border border-[#F2D583]/20" />
        <ShankhaMotif
          className={`h-8 w-8 sm:h-12 sm:w-12 text-[#F3D786] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${
            isLeft ? '' : '-scale-x-100'
          }`}
        />
        <div className="mt-2.5 flex items-center gap-2">
          <span className="h-px w-6 sm:w-12 bg-[#D4AF37]/50" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#F2D37E]" />
          <span className="h-px w-6 sm:w-12 bg-[#D4AF37]/50" />
        </div>
      </div>

      {/* Central Grand Medallion & Brass Ring Knocker Panel */}
      <div className="wood-panel-recessed relative my-3 sm:my-5 flex flex-1 flex-col items-center justify-center border border-[#D4AF37]/45 p-3 sm:p-5">
        <div className="pointer-events-none absolute inset-2 border border-[#F2D583]/20" />

        {/* Carved Red & Gold Bengali Alpana Mandala */}
        <div className="relative flex h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 items-center justify-center rounded-full border-2 border-[#D4AF37]/55 bg-gradient-to-br from-[#8B161F]/80 via-[#5E0E15]/85 to-[#3A080C]/90 shadow-[inset_0_4px_14px_rgba(0,0,0,0.6),0_6px_16px_rgba(0,0,0,0.45)]">
          <div className="h-[78%] w-[78%] rounded-full border border-dashed border-[#F4DA91]/55 flex items-center justify-center">
            <div className="h-[54%] w-[54%] rounded-full border border-[#E5C168]/65 bg-[#46110E]/70 flex items-center justify-center">
              <div className="h-3 w-3 sm:h-4 sm:w-4 rotate-45 bg-gradient-to-br from-[#FFF0B5] to-[#B88A3B]" />
            </div>
          </div>
        </div>

        {/* Heavy Antique Brass Door Handle / Knocker near center seam */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center ${
            isLeft ? 'right-2.5 sm:right-6 md:right-8' : 'left-2.5 sm:left-6 md:left-8'
          }`}
        >
          {/* Brass Mounting Escutcheon */}
          <div className="antique-brass flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#FFF2BE]/60">
            <div className="h-2 w-2 rounded-full bg-[#4A2D0B]" />
          </div>
          {/* Hanging Heavy Brass Ring */}
          <div className="-mt-1.5 h-9 w-9 sm:h-12 sm:w-12 rounded-full border-[4px] sm:border-[5px] border-[#DFB656] shadow-[0_6px_14px_rgba(0,0,0,0.72),inset_0_2px_4px_rgba(255,244,195,0.6)]" />
        </div>
      </div>

      {/* Lower Carved Wainscot Panel */}
      <div className="wood-panel-recessed relative flex h-20 sm:h-28 md:h-32 items-center justify-center border border-[#D4AF37]/45 px-4">
        <div className="pointer-events-none absolute inset-1.5 border border-[#F2D583]/20" />
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-8 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#E5C168]/70 bg-[#8F151E]/80" />
          <span className="h-1.5 w-8 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>
      </div>

      {/* Outer Brass Hinges */}
      <div
        className={`pointer-events-none absolute top-[18%] h-10 w-2 sm:w-3 rounded-sm antique-brass ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute bottom-[18%] h-10 w-2 sm:w-3 rounded-sm antique-brass ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      />
    </div>
  );
}

export function EntranceDoor({ onEntered, onStartMusic }: EntranceDoorProps) {
  const [stage, setStage] = useState<DoorStage>('idle');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (stage === 'idle' || stage === 'done') return;

    if (shouldReduceMotion) {
      const quickTimer = window.setTimeout(() => {
        setStage('done');
        onEntered();
      }, 450);
      return () => window.clearTimeout(quickTimer);
    }

    if (stage === 'cracking') {
      const t = window.setTimeout(() => setStage('opening'), 650);
      return () => window.clearTimeout(t);
    }
    if (stage === 'opening') {
      const t = window.setTimeout(() => setStage('zooming'), 2700);
      return () => window.clearTimeout(t);
    }
    if (stage === 'zooming') {
      const t = window.setTimeout(() => {
        setStage('done');
        onEntered();
      }, 1450);
      return () => window.clearTimeout(t);
    }
  }, [stage, shouldReduceMotion, onEntered]);

  const handleSealTrigger = () => {
    if (stage !== 'idle') return;
    onStartMusic();
    setStage('cracking');
  };

  const doorsOpen = stage === 'opening' || stage === 'zooming' || stage === 'done';
  const sealBroken = stage !== 'idle';

  return (
    <motion.section
      aria-label="Traditional Bengali Wedding Entrance"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 'done' ? 0 : 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-0 z-50 h-[100dvh] w-screen overflow-hidden bg-[#230905]"
    >
      {/* Full-Screen Camera Zoom Container */}
      <motion.div
        className="relative h-full w-full"
        animate={stage === 'zooming' ? { scale: 2.05 } : { scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer Full-Screen Carved Wooden Door Frame Jambs */}
        <div className="relative flex h-full w-full flex-col border-[10px] sm:border-[18px] border-[#2C0C07] shadow-[inset_0_0_50px_rgba(0,0,0,0.85)]">
          {/* Inner Antique Gold Frame Molding */}
          <div className="relative h-full w-full border-2 border-[#C89A3E]/70 bg-[#1B0604]">
            {/* Top Carved Lintel & Lush Hanging Marigold Toran */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-30">
              <MarigoldToran className="h-12 sm:h-16 md:h-20 w-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.65)]" />
            </div>

            {/* Delicate Gold Alpana Corner Brackets on Outer Door Frame */}
            <AlponaCorner className="pointer-events-none absolute top-2 left-2 z-30 h-12 w-12 sm:h-20 sm:w-20 text-[#F3D786]/45" />
            <AlponaCorner className="pointer-events-none absolute top-2 right-2 z-30 h-12 w-12 sm:h-20 sm:w-20 rotate-90 text-[#F3D786]/45" />
            <AlponaCorner className="pointer-events-none absolute bottom-2 left-2 z-30 h-12 w-12 sm:h-20 sm:w-20 -rotate-90 text-[#F3D786]/45" />
            <AlponaCorner className="pointer-events-none absolute bottom-2 right-2 z-30 h-12 w-12 sm:h-20 sm:w-20 rotate-180 text-[#F3D786]/45" />

            {/* 3D Perspective Stage Filling Entire Viewport */}
            <div className="relative h-full w-full overflow-hidden" style={{ perspective: '1900px' }}>
              {/* Radiant Golden-White Sanctuary Light Behind Doors */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: doorsOpen ? 1 : 0.1 }}
                transition={{ duration: 1.7, ease: 'easeInOut' }}
                style={{
                  background:
                    'radial-gradient(circle at 50% 48%, #FFFFFF 0%, #FFF8DF 38%, #F7DA8F 76%, #C99135 100%)',
                }}
              >
                <motion.div
                  animate={{
                    scale: doorsOpen ? 1.5 : 0.75,
                    opacity: doorsOpen ? 0.95 : 0,
                    rotate: doorsOpen ? 16 : 0,
                  }}
                  transition={{ duration: 2.3, ease: 'easeOut' }}
                  className="h-full w-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 48%, rgba(255,255,255,0.72) 0deg, transparent 22deg, rgba(255,244,200,0.52) 45deg, transparent 70deg, rgba(255,255,255,0.72) 96deg, transparent 132deg, rgba(255,244,200,0.52) 180deg, transparent 222deg, rgba(255,255,255,0.72) 270deg, transparent 322deg, rgba(255,255,255,0.72) 360deg)',
                  }}
                />
              </motion.div>

              {/* Floating Petals & Golden Dust inside Doorway */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <FloatingPetals variant="gold-crimson" density="rich" />
              </div>

              {/* Full-Screen Double Wooden Doors */}
              <div
                className="relative z-10 grid h-full w-full grid-cols-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* LEFT FULL-SCREEN DOOR */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: doorsOpen ? -114 : 0 }}
                  transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformOrigin: 'left center',
                    backfaceVisibility: 'hidden',
                  }}
                  className="bengali-wood-door relative h-full border-r-2 border-[#B88A3B]/65 shadow-[inset_-18px_0_36px_rgba(0,0,0,0.65)]"
                >
                  <CarvedDoorPanel side="left" />
                </motion.div>

                {/* RIGHT FULL-SCREEN DOOR */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: doorsOpen ? 114 : 0 }}
                  transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformOrigin: 'right center',
                    backfaceVisibility: 'hidden',
                  }}
                  className="bengali-wood-door relative h-full border-l-2 border-[#B88A3B]/65 shadow-[inset_18px_0_36px_rgba(0,0,0,0.65)]"
                >
                  <CarvedDoorPanel side="right" />
                </motion.div>
              </div>

              {/* Center Meeting Seam Brass Astragal Shadow */}
              {!doorsOpen && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-1 -translate-x-1/2 bg-gradient-to-r from-[#1D0604] via-[#B88A3B]/75 to-[#1D0604]"
                />
              )}

              {/* Central Auspicious Seal & Bengali Invitation Caption */}
              <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-4">
                <div className="relative flex items-center justify-center">
                  {/* Burst Sparkles on Seal Fracture */}
                  {sealBroken &&
                    BURST_SPARKLES.map((sp) => (
                      <motion.span
                        key={sp.id}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ x: sp.dx, y: sp.dy, opacity: 0, scale: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute rounded-full bg-[#F7DC88] shadow-[0_0_12px_#F7DC88]"
                        style={{ width: sp.size, height: sp.size }}
                      />
                    ))}

                  <motion.button
                    type="button"
                    onClick={handleSealTrigger}
                    disabled={sealBroken}
                    aria-label="Tap the wedding seal to open the doors and enter the celebration"
                    whileHover={!sealBroken ? { scale: 1.06 } : undefined}
                    whileTap={!sealBroken ? { scale: 0.94 } : undefined}
                    animate={
                      sealBroken
                        ? { scale: [1, 1.2, 0.25], opacity: [1, 0.95, 0], rotate: 22 }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: sealBroken ? 0.6 : 0.2 }}
                    className="pointer-events-auto group relative flex h-34 w-34 sm:h-44 sm:w-44 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#F3D786] bg-gradient-to-br from-[#BE232E] via-[#8E131D] to-[#4F080E] p-3 sm:p-3.5 shadow-[0_18px_48px_rgba(12,2,2,0.85),0_0_32px_rgba(212,175,55,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F3D786]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-1.5 rounded-full border border-dashed border-[#F7E09E]/80"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -inset-3 rounded-full border border-[#E5C168]/40 transition-transform duration-300 group-hover:scale-110"
                    />
                    <WeddingLogo
                      sizeClass="h-full w-full"
                      className="border border-[#E5C168] shadow-inner"
                    />
                  </motion.button>
                </div>

                {/* Bengali Title & Tap Prompt below Seal */}
                <motion.div
                  animate={{ opacity: sealBroken ? 0 : 1, y: sealBroken ? 12 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-6 rounded-xl border border-[#D4AF37]/50 bg-[#230805]/85 px-5 py-3.5 text-center backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                >
                  <p className="font-bengali text-xl sm:text-3xl font-semibold tracking-wide text-[#F9E3A6]">
                    {WEDDING_DATA.doorCaptionBengali}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#EAD4AA]">
                    {WEDDING_DATA.doorSubCaption}
                  </p>
                </motion.div>
              </div>

              {/* Flanking Glowing Brass Diyas at Bottom Corners */}
              <div
                aria-hidden="true"
                className="animate-diya-glow pointer-events-none absolute bottom-3 left-3 sm:bottom-5 sm:left-6 z-30"
              >
                <BrassDiya className="h-11 w-11 sm:h-14 sm:w-14" />
              </div>
              <div
                aria-hidden="true"
                className="animate-diya-glow pointer-events-none absolute bottom-3 right-3 sm:bottom-5 sm:right-6 z-30"
              >
                <BrassDiya className="h-11 w-11 sm:h-14 sm:w-14" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final Full-Screen Golden-White Light Transition Veil */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'zooming' ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: 'easeIn' }}
        className="pointer-events-none fixed inset-0 z-40 bg-[#FFFDF8]"
      />
    </motion.section>
  );
}
