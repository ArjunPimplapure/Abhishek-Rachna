import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { WEDDING_ASSETS } from '../config/weddingAssets';
import { WeddingLogo } from './WeddingLogo';
import { AlponaDivider, BrassDiya, ShankhaMotif } from './BengaliMotifs';
import { FloatingPetals } from './FloatingPetals';

export function HeroInvitation() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-[#2C0908] text-[#FAF3E6]"
    >
      {/* Full-Bleed Heritage Bengali Rajbari Courtyard Backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        {!heroImgFailed && (
          <img
            src={WEDDING_ASSETS.courtyardImage}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setHeroImgFailed(true)}
            className="h-full w-full object-cover opacity-35"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(44, 9, 8, 0.78) 0%, rgba(72, 14, 18, 0.84) 48%, rgba(251, 247, 240, 1) 100%)',
          }}
        />
      </div>

      {/* Warm Ambient Petals & Golden Sparkles */}
      <FloatingPetals variant="gold-crimson" density="light" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-12 pb-20 sm:pt-16 sm:pb-28 text-center">
        {/* Exact Bengali Religious Heading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-bengali text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-wide text-[#F7DC91] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
        >
          {WEDDING_DATA.religiousHeading}
        </motion.p>

        {/* Official Wedding Logo / Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="my-7 flex justify-center"
        >
          <div className="rounded-full border-2 border-[#E5C168]/65 bg-[#FEFDFD] p-1.5 shadow-[0_16px_45px_rgba(0,0,0,0.38)]">
            <WeddingLogo sizeClass="h-28 w-28 sm:h-36 sm:w-36" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex justify-center"
        >
          <AlponaDivider className="h-9 w-56 sm:w-72 text-[#E8C987]" />
        </motion.div>

        {/* Introduction Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mx-auto mt-6 max-w-2xl font-display text-xl sm:text-2xl md:text-[26px] italic leading-relaxed text-[#FFF7E8]"
        >
          {WEDDING_DATA.introduction}
        </motion.p>

        {/* Luminous Royal Couple Showcase — Scroll-Triggered Flow */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#D4AF37]/45 bg-gradient-to-b from-[#FFFDF9]/96 via-[#FBF5EA]/96 to-[#F5E9D6]/96 px-6 py-10 sm:px-12 sm:py-14 text-[#231815] shadow-[0_30px_80px_rgba(32,6,6,0.35)]">
          {/* GROOM — Prominent Groom's Family Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#9E1B24] font-semibold">
              The Groom · Maity Family
            </p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl md:text-[60px] font-semibold tracking-wide text-[#5A0F16] uppercase leading-tight [text-wrap:balance]">
              {WEDDING_DATA.groom.name}
            </h1>
            <p className="mt-3 text-sm sm:text-base font-medium text-[#362620]">
              {WEDDING_DATA.groom.parents}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#6B5349]">
              {WEDDING_DATA.groom.grandparents}
            </p>
          </motion.div>

          {/* Traditional Bengali Floral & Shankha Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="my-8 flex items-center justify-center gap-4"
          >
            <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#B88A3B]" />
            <div className="flex items-center gap-2.5">
              <ShankhaMotif className="h-5 w-5 text-[#B88A3B]" />
              <span className="font-display text-3xl sm:text-4xl italic text-[#9E1B24]">
                weds
              </span>
              <ShankhaMotif className="h-5 w-5 -scale-x-100 text-[#B88A3B]" />
            </div>
            <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#B88A3B]" />
          </motion.div>

          {/* BRIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#8F6520] font-semibold">
              The Bride · Sarkar Family
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-wide text-[#7B1821] uppercase leading-tight [text-wrap:balance]">
              {WEDDING_DATA.bride.name}
            </h2>
            <p className="mt-3 text-sm sm:text-base font-medium text-[#362620]">
              {WEDDING_DATA.bride.parents}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#6B5349]">
              {WEDDING_DATA.bride.grandparents}
            </p>
          </motion.div>

          {/* Ceremonial Date Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-[#B88A3B]/35 pt-6 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#5A0F16] font-semibold"
          >
            <BrassDiya className="h-6 w-6 mr-1" />
            <span>12 &amp; 13 December 2026</span>
            <span aria-hidden="true">·</span>
            <span>Rajnandgaon</span>
            <span aria-hidden="true">·</span>
            <span>16 December 2026 · Raipur</span>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <motion.a
          href="#countdown"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 inline-flex min-h-[44px] flex-col items-center gap-1 text-xs uppercase tracking-[0.24em] text-[#6B261C] hover:text-[#9E1B24] transition-colors"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
