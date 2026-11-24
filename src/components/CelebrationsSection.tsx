import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Flower2, Music, Sparkles, Sun, Utensils } from 'lucide-react';
import { WEDDING_DATA, WeddingEvent } from '../data/weddingDetails';
import { WEDDING_ASSETS } from '../config/weddingAssets';
import { WeddingLogo } from './WeddingLogo';
import { AlponaDivider, BrassDiya, ShankhaMotif } from './BengaliMotifs';

function EventArtwork({ motif }: { motif: WeddingEvent['motif'] }) {
  switch (motif) {
    case 'marigold':
      return <Flower2 className="h-5 w-5 text-[#D97706]" aria-hidden="true" />;
    case 'sangeet':
      return <Music className="h-5 w-5 text-[#5A0F16]" aria-hidden="true" />;
    case 'phere':
      return <Flame className="h-5 w-5 text-[#9E1B24]" aria-hidden="true" />;
    case 'haldi':
      return <Sun className="h-5 w-5 text-[#B47800]" aria-hidden="true" />;
    case 'baarat':
      return <Sparkles className="h-5 w-5 text-[#9E1B24]" aria-hidden="true" />;
    case 'dinner':
      return <Utensils className="h-5 w-5 text-[#5A0F16]" aria-hidden="true" />;
  }
}

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${event.borderClass} ${event.surfaceClass} shadow-[0_14px_38px_rgba(90,15,22,0.09)] transition-shadow duration-200 hover:shadow-[0_20px_46px_rgba(90,15,22,0.15)]`}
    >
      <div>
        {/* Function Editorial Photograph */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#EFE3D0]">
          {!imgFailed ? (
            <img
              src={event.image}
              alt={event.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F4ECE0] to-[#E6D9C7]">
              <EventArtwork motif={event.motif} />
            </div>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#220906]/55 via-transparent to-transparent"
          />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="font-display text-2xl sm:text-[28px] font-bold tracking-wide text-[#FFFDF8] drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] tabular-nums">
              {event.time}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5C168]/70 bg-[#FFFDF9]/95 shadow-md">
              <EventArtwork motif={event.motif} />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7A5E52] font-semibold">
            {event.themeLabel}
          </p>
          <h4 className="mt-1.5 font-display text-2xl sm:text-[30px] font-semibold uppercase tracking-wide text-[#2A1915]">
            {event.name}
          </h4>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#523E36]">
            {event.description}
          </p>
        </div>
      </div>

      <div className="mx-6 mb-5 flex items-center justify-between border-t border-[#B88A3B]/25 pt-3.5 sm:mx-7 sm:mb-6">
        <span className={`font-display text-xl font-semibold tabular-nums ${event.accentClass}`}>
          {event.time}
        </span>
        <ShankhaMotif className="h-5 w-5 text-[#B88A3B]/75" />
      </div>
    </motion.article>
  );
}

export function CelebrationsSection() {
  const [alponaImgFailed, setAlponaImgFailed] = useState(false);

  const morningRituals = WEDDING_DATA.dayTwo.events.filter(
    (e) => e.period === 'morning'
  );
  const eveningCelebrations = WEDDING_DATA.dayTwo.events.filter(
    (e) => e.period === 'evening'
  );

  return (
    <section
      id="celebrations"
      className="relative py-20 sm:py-28 px-4 sm:px-6 paper-texture"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#9E1B24] font-semibold">
            Wedding Itinerary · Rajnandgaon
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold text-[#5A0F16] [text-wrap:balance]">
            The Wedding Celebrations
          </h2>
          <div className="mt-4 flex justify-center">
            <AlponaDivider className="h-8 w-56 sm:w-64 text-[#B88A3B]" />
          </div>
        </motion.div>

        {/* DAY 1 — 12 DECEMBER 2026 */}
        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-[#B88A3B]/35 pb-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#9E1B24] font-semibold">
                Day One
              </p>
              <h3 className="mt-1 font-display text-3xl sm:text-4xl font-semibold text-[#2A1915]">
                {WEDDING_DATA.dayOne.date}
              </h3>
            </div>
            <p className="mt-2 sm:mt-0 font-display text-lg sm:text-xl italic text-[#5D473A]">
              {WEDDING_DATA.dayOne.subtitle}
            </p>
          </motion.div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {WEDDING_DATA.dayOne.events.map((event, idx) => (
              <EventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>

        {/* Monogram Emblem & Editorial Bengali Alpana Feature Between Days */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="my-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl border border-[#B88A3B]/45 bg-gradient-to-r from-[#FFFDF9] to-[#FBF3E4] p-5 sm:p-7 shadow-[0_14px_38px_rgba(90,15,22,0.07)]"
        >
          <div className="md:col-span-5 overflow-hidden rounded-xl border border-[#B88A3B]/35 bg-[#F4ECE0]">
            {!alponaImgFailed ? (
              <img
                src={WEDDING_ASSETS.ritualAlponaImage}
                alt="Traditional white Bengali alpana floor art with shankha conch, red hibiscus, and brass diya"
                referrerPolicy="no-referrer"
                onError={() => setAlponaImgFailed(true)}
                className="h-56 sm:h-64 w-full object-cover"
              />
            ) : (
              <div className="flex h-56 items-center justify-center bg-[#F4ECE0]">
                <BrassDiya className="h-12 w-12" />
              </div>
            )}
          </div>
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left px-1 sm:px-4">
            <WeddingLogo
              sizeClass="h-18 w-18"
              className="mb-3 border border-[#B88A3B]/60 p-1 shadow-sm"
            />
            <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#5A0F16]">
              Shankha, Alpona &amp; Sacred Blessings
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#523E36]">
              From sunlit morning Haldi blessings to the royal evening Baarat, lavish Reception Dinner, and sacred night Wedding Phere, every ritual honours Bengali heritage and family love.
            </p>
          </div>
        </motion.div>

        {/* DAY 2 — 13 DECEMBER 2026 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-[#B88A3B]/35 pb-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#9E1B24] font-semibold">
                Day Two
              </p>
              <h3 className="mt-1 font-display text-3xl sm:text-4xl font-semibold text-[#2A1915]">
                {WEDDING_DATA.dayTwo.date}
              </h3>
            </div>
            <p className="mt-2 sm:mt-0 font-display text-lg sm:text-xl italic text-[#5D473A]">
              {WEDDING_DATA.dayTwo.subtitle}
            </p>
          </motion.div>

          {/* Morning Rituals Sub-section */}
          <div className="mt-8">
            <div className="mb-5 flex items-center gap-3">
              <Sun className="h-4 w-4 text-[#B47800]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#6B5349] font-semibold">
                Morning Rituals
              </span>
              <span className="h-px flex-1 bg-[#B88A3B]/25" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {morningRituals.map((event, idx) => (
                <EventCard key={event.id} event={event} index={idx} />
              ))}
            </div>
          </div>

          {/* Evening Celebrations Sub-section (Baarat -> Reception Dinner -> Wedding Phere 9:30 PM) */}
          <div className="mt-12">
            <div className="mb-5 flex items-center gap-3">
              <BrassDiya className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#6B5349] font-semibold">
                Evening &amp; Sacred Night Celebrations
              </span>
              <span className="h-px flex-1 bg-[#B88A3B]/25" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eveningCelebrations.map((event, idx) => (
                <EventCard key={event.id} event={event} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
