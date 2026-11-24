import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { WEDDING_ASSETS } from '../config/weddingAssets';
import { AlponaCorner, AlponaDivider } from './BengaliMotifs';

export function GrandReceptionSection() {
  const [imgFailed, setImgFailed] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 24 }, (_, idx) => ({
        id: idx,
        left: `${(idx * 17 + 5) % 95}%`,
        top: `${(idx * 23 + 6) % 90}%`,
        size: idx % 3 === 0 ? 3 : 2,
        delay: `${(idx % 5) * 0.7}s`,
      })),
    []
  );

  return (
    <section
      id="grand-reception"
      className="relative overflow-hidden bg-gradient-to-b from-[#3A0A12] via-[#4A0F19] to-[#2B070D] py-20 sm:py-28 px-4 sm:px-6 text-[#FAF3E6]"
    >
      {/* Subtle hanging string lights / starfield atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-44 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(232, 201, 135, 0.35) 0%, transparent 70%)',
          }}
        />
        {stars.map((star) => (
          <span
            key={star.id}
            className="animate-dust absolute rounded-full bg-[#F5DE9D]"
            style={
              {
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: '0 0 8px rgba(245, 222, 157, 0.8)',
                '--dust-delay': star.delay,
                '--dust-duration': '4.5s',
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-[#E8C987]/45 bg-[#2A070D]/70 p-6 sm:p-12 backdrop-blur-sm shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
        >
          <AlponaCorner className="pointer-events-none absolute top-3 left-3 w-12 h-12 sm:w-16 sm:h-16 text-[#E8C987]/45" />
          <AlponaCorner className="pointer-events-none absolute top-3 right-3 w-12 h-12 sm:w-16 sm:h-16 rotate-90 text-[#E8C987]/45" />
          <AlponaCorner className="pointer-events-none absolute bottom-3 left-3 w-12 h-12 sm:w-16 sm:h-16 -rotate-90 text-[#E8C987]/45" />
          <AlponaCorner className="pointer-events-none absolute bottom-3 right-3 w-12 h-12 sm:w-16 sm:h-16 rotate-180 text-[#E8C987]/45" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Editorial Reception Details */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.28em] text-[#E8C987] font-semibold">
                Raipur Celebration
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[#FFFDF7] [text-wrap:balance]">
                {WEDDING_DATA.grandReception.heading}
              </h2>
              <p className="mt-3 font-display text-lg sm:text-xl italic text-[#F1DFC2]">
                {WEDDING_DATA.grandReception.subtitle}
              </p>

              <div className="my-6 flex justify-center lg:justify-start">
                <AlponaDivider className="w-52 h-8 text-[#E8C987]/80" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-[#E8C987]">
                    {WEDDING_DATA.grandReception.eventName}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-sm sm:text-base text-[#FAF3E6]/90">
                  <div className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Calendar className="h-4 w-4 shrink-0 text-[#E8C987]" aria-hidden="true" />
                    <span className="font-semibold tracking-wider tabular-nums">
                      {WEDDING_DATA.grandReception.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-[#E8C987]" aria-hidden="true" />
                    <span className="font-semibold tracking-wider tabular-nums">
                      {WEDDING_DATA.grandReception.time}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8C987]/25">
                  <div className="flex items-start justify-center lg:justify-start gap-2.5">
                    <MapPin className="h-5 w-5 shrink-0 text-[#E8C987] mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-display text-2xl font-semibold text-[#FFFDF7]">
                        {WEDDING_DATA.grandReception.venueName}
                      </p>
                      <p className="mt-1 text-sm text-[#EAD8BE]">
                        {WEDDING_DATA.grandReception.venueAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception Photograph Showcase */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-xl border border-[#E8C987]/40 bg-[#1D0408] min-h-[240px]">
              {!imgFailed ? (
                <img
                  src={WEDDING_ASSETS.receptionImage}
                  alt="Royal evening outdoor wedding reception lawn illuminated with golden string lights and crystal chandeliers"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center p-6 text-center">
                  <p className="font-display text-2xl text-[#E8C987]">
                    {WEDDING_DATA.grandReception.venueName}
                  </p>
                  <p className="mt-2 text-sm text-[#EAD8BE]">
                    {WEDDING_DATA.grandReception.venueAddress}
                  </p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24060B]/70 via-transparent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
