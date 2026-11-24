import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingDetails';
import { AlponaDivider, BrassDiya } from './BengaliMotifs';

export function RsvpSection() {
  return (
    <section id="rsvp" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 paper-texture">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex justify-center">
            <BrassDiya className="animate-diya-glow h-10 w-10" />
          </div>

          <p className="text-xs uppercase tracking-[0.26em] text-[#9E1B24] font-semibold">
            RSVP
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#5A0F16] uppercase [text-wrap:balance]">
            {WEDDING_DATA.rsvp.heading}
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-display text-lg sm:text-2xl italic text-[#523E36]">
            {WEDDING_DATA.rsvp.subtitle}
          </p>

          <div className="my-7 flex justify-center">
            <AlponaDivider className="h-8 w-52 text-[#B88A3B]" />
          </div>

          <div className="space-y-1.5">
            <p className="font-display text-3xl sm:text-4xl font-semibold tracking-wider text-[#2A1915]">
              {WEDDING_DATA.rsvp.contactName}
            </p>
            <p className="text-lg sm:text-xl font-medium tracking-wide text-[#9E1B24] tabular-nums">
              {WEDDING_DATA.rsvp.phoneDisplay}
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-md grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={WEDDING_DATA.rsvp.telHref}
              className="flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-[#9E1B24] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFFDF9] shadow-[0_8px_22px_rgba(158,27,36,0.28)] transition-all duration-200 hover:bg-[#7A131A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A3B]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>CALL NOW</span>
            </a>

            <a
              href={WEDDING_DATA.rsvp.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl border border-[#236B3F] bg-[#1F5E37] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFFDF9] shadow-[0_8px_22px_rgba(31,94,55,0.24)] transition-all duration-200 hover:bg-[#174A2B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A3B]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
