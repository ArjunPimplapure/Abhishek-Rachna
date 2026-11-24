import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/weddingDetails';
import {
  AlponaDivider,
  BengaliFishMotif,
  ShankhaMotif,
} from './BengaliMotifs';

export function FamilyComplimentsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4ECE0] via-[#F9F1E4] to-[#F2E6D4] py-20 sm:py-28 px-4 sm:px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(184, 138, 59, 0.1) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-3 flex items-center justify-center gap-3 text-[#B88A3B]">
            <BengaliFishMotif className="h-5 w-10" />
            <ShankhaMotif className="h-6 w-6 text-[#9E1B24]" />
            <BengaliFishMotif className="h-5 w-10 -scale-x-100" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-[#9E1B24] uppercase [text-wrap:balance]">
            WITH BEST COMPLIMENTS FROM
          </h2>

          <div className="mt-4 flex justify-center">
            <AlponaDivider className="h-8 w-52 sm:w-64 text-[#B88A3B]" />
          </div>
        </motion.div>

        {/* Elders & Family Members Grid with staggered scroll reveal */}
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-center">
          {WEDDING_DATA.complimentsElders.map((name, idx) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (idx % 3) * 0.08 }}
              className="rounded-xl border border-[#B88A3B]/25 bg-[#FFFDF9]/80 px-4 py-3.5 font-display text-lg sm:text-xl font-medium text-[#2F1D19] shadow-sm"
            >
              {name}
            </motion.li>
          ))}
        </ul>

        {/* Younger Family Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-12 border-t border-[#B88A3B]/35 pt-8"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[#8F6520] font-semibold">
            With Love From Younger Family Members
          </p>
          <p className="mt-3 font-display text-2xl sm:text-3xl font-medium leading-relaxed text-[#5A0F16]">
            {WEDDING_DATA.complimentsYounger.join(', ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
