'use client';

import React from 'react';
import { motion } from 'motion/react';

export function SignatureStatement() {
  return (
    <section
      id="statement"
      className="bg-[#161616] text-[#F3F1EC] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#292929] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Tag & Numbering */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              <span>[ 02 / PHILOSOPHY ]</span>
            </div>
            <div className="w-16 h-0.5 bg-[#C7353E]" />
            <p className="text-[11px] font-mono tracking-[0.25em] text-[#D8D6D0]/50 uppercase hidden lg:block">
              WISTERIA SALON
              <br />
              ERANDWANE, PUNE
            </p>
          </div>

          {/* Large Bold Editorial Typographic Statement */}
          <div className="lg:col-span-9 space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] uppercase text-[#F3F1EC] skew-text">
                GOOD STYLE
                <br />
                <span className="cherry-accent">IS NEVER</span>
                <br />
                ACCIDENTAL.
              </h2>
            </motion.div>

            {/* Minimal Supporting Editorial Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#292929]">
              <p className="text-sm sm:text-base text-[#D8D6D0] leading-relaxed font-light">
                We believe exceptional hair design is rooted in precision craft,
                intuitive listening, and understanding how you live in the world.
                Every line, texture, and tonal nuance is curated for effortless reality.
              </p>
              <p className="text-sm sm:text-base text-[#D8D6D0]/70 leading-relaxed font-light">
                No cookie-cutter salon trends. No rushed chairs. Just elevated,
                contemporary hair and beauty care designed specifically around you in our Erandwane studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
