import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { WEDDING_ASSETS } from '../config/weddingAssets';
import { WeddingLogo } from './WeddingLogo';
import { AlponaCorner, AlponaDivider, BrassDiya } from './BengaliMotifs';
import { FloatingPetals } from './FloatingPetals';

interface ClosingSectionProps {
  onReplayDoor: () => void;
}

export function ClosingSection({ onReplayDoor }: ClosingSectionProps) {
  const [sholaFailed, setSholaFailed] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-[#B88A3B]/35 bg-gradient-to-b from-[#F9F1E4] via-[#F4E8D4] to-[#EBDAC0] py-20 sm:py-24 px-4 sm:px-6 text-center">
      {/* Slowly floating crimson rose petals & golden sparkles */}
      <FloatingPetals variant="rose-gold" density="rich" />

      <AlponaCorner className="pointer-events-none absolute top-4 left-4 w-14 h-14 sm:w-20 sm:h-20 text-[#9E1B24]/30" />
      <AlponaCorner className="pointer-events-none absolute top-4 right-4 w-14 h-14 sm:w-20 sm:h-20 rotate-90 text-[#9E1B24]/30" />
      <AlponaCorner className="pointer-events-none absolute bottom-4 left-4 w-14 h-14 sm:w-20 sm:h-20 -rotate-90 text-[#9E1B24]/30" />
      <AlponaCorner className="pointer-events-none absolute bottom-4 right-4 w-14 h-14 sm:w-20 sm:h-20 rotate-180 text-[#9E1B24]/30" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Tasteful Bengali Shola Lotus & Diya still-life medallion */}
          <div className="mb-8 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-[#B88A3B]/60 bg-[#FFFDF9] p-1 shadow-md">
            {!sholaFailed ? (
              <img
                src={WEDDING_ASSETS.sholaFloralImage}
                alt="Traditional Bengali white shola lotus, red rose petals, and lit brass diya"
                referrerPolicy="no-referrer"
                onError={() => setSholaFailed(true)}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FBF7F0]">
                <BrassDiya className="w-10 h-10" />
              </div>
            )}
          </div>

          <p className="max-w-xl font-display text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-[#4A352E] [text-wrap:balance]">
            {WEDDING_DATA.closing.message}
          </p>

          <div className="my-6 flex items-center gap-4">
            <BrassDiya className="w-8 h-8" />
            <AlponaDivider className="w-40 sm:w-56 h-8 text-[#B88A3B]" />
            <BrassDiya className="w-8 h-8" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wider text-[#5A0F16]">
            {WEDDING_DATA.closing.couple}
          </h2>

          {/* Uploaded Wedding Logo/Monogram */}
          <div className="my-6">
            <WeddingLogo sizeClass="h-24 w-24 sm:h-28 sm:w-28" />
          </div>

          <p className="text-sm uppercase tracking-[0.22em] text-[#7A5E52]">
            {WEDDING_DATA.closing.regards}
          </p>
          <p className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold text-[#9E1B24]">
            {WEDDING_DATA.closing.family}
          </p>

          {/* Discreet Replay Door action */}
          <button
            type="button"
            onClick={onReplayDoor}
            className="mt-10 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-[#B88A3B]/55 bg-[#FFFDF9]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A0F16] transition-colors hover:bg-[#FFFDF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E1B24]"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Replay Entrance Door</span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
