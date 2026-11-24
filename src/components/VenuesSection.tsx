import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin } from 'lucide-react';
import { WEDDING_DATA, WeddingVenue } from '../data/weddingDetails';
import { AlponaDivider } from './BengaliMotifs';

function VenueCard({ venue, index }: { venue: WeddingVenue; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#B88A3B]/45 bg-[#FFFDF9] shadow-[0_14px_40px_rgba(90,15,22,0.08)]"
    >
      <div>
        <div className="relative h-52 sm:h-60 overflow-hidden bg-[#F4ECE0]">
          {!imgFailed ? (
            <img
              src={venue.image}
              alt={venue.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F4ECE0] to-[#E6D9C7]">
              <MapPin className="h-10 w-10 text-[#9E1B24]" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E1B24] font-semibold">
            <span>{venue.label}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#6B5349]">{venue.dates}</span>
          </div>

          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#2A1915]">
            {venue.name}
          </h3>

          <div className="mt-3 flex items-start gap-2.5 text-sm sm:text-base text-[#523E36]">
            <MapPin className="h-4 w-4 shrink-0 text-[#9E1B24] mt-1" aria-hidden="true" />
            <span>{venue.address}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 sm:px-7 sm:pb-7">
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#9E1B24] px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#FFFDF9] shadow-[0_6px_18px_rgba(158,27,36,0.25)] transition-all duration-200 hover:bg-[#7A131A] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A3B]"
        >
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{venue.buttonText}</span>
          <ExternalLink
            className="h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

export function VenuesSection() {
  return (
    <section id="venues" className="py-16 sm:py-24 px-4 sm:px-6 paper-texture">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.26em] text-[#9E1B24] font-semibold">
            Directions &amp; Locations
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5A0F16] [text-wrap:balance]">
            Celebration Venues
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C453D]">
            Two memorable destinations in Rajnandgaon and Raipur.
          </p>
          <div className="mt-4 flex justify-center">
            <AlponaDivider className="w-56 sm:w-64 h-8 text-[#B88A3B]" />
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WEDDING_DATA.venues.map((venue, idx) => (
            <VenueCard key={venue.id} venue={venue} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
