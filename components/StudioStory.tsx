'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Scissors, Sparkles, HeartHandshake } from 'lucide-react';

export function StudioStory() {
  return (
    <section
      id="studio"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#161616] text-[#F3F1EC] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 sm:pb-14 border-b border-[#292929]">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              [ 06 / ENVIRONMENT ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F3F1EC] uppercase leading-none skew-text">
              THE <span className="cherry-accent">STUDIO.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#F3F1EC] font-light leading-snug tracking-tight">
              &ldquo;A space for changing things up, trying something new and making your style your own.&rdquo;
            </p>
            <div className="w-20 h-0.5 bg-[#C7353E] Prim" />
            <p className="text-xs sm:text-sm text-[#D8D6D0]/80 max-w-2xl leading-relaxed font-light">
              Located on Kalmadi Road in Erandwane, Wisteria is designed as a calm,
              unhurried aesthetic environment. We blend contemporary cutting and colouring techniques
              with an inclusive, open atmosphere where personal expression is celebrated.
            </p>
          </div>
        </div>

        {/* 3 Strong Images with Intentionally Varied Crops */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 sm:pt-14 items-center">
          {/* Image 1: Tall Vertical Mood */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="relative aspect-[3/4] bg-[#292929] overflow-hidden border border-[#292929]">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
                alt="Wisteria Salon Interior & Styling Environment"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center grayscale contrast-105 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#161616]/90 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-[#F3F1EC] border border-[#292929]">
                <span>ATMOSPHERE / 01</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-[#D8D6D0]/70 pt-3 uppercase tracking-wider">
              Natural daylight & contemporary workstation design
            </p>
          </motion.div>

          {/* Image 2: Dominant Wide Centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] bg-[#292929] overflow-hidden border border-[#292929]">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
                alt="Wisteria Hair Studio Craft in Action"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#161616]/90 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-[#F3F1EC] flex items-center gap-1.5 border border-[#292929]">
                <span className="w-1.5 h-1.5 bg-[#C7353E]" />
                <span>PRECISION TOOLS / 02</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-[#D8D6D0]/70 pt-3 uppercase tracking-wider">
              Bespoke formulations & tailored consultations
            </p>
          </motion.div>

          {/* Image 3: Detail / Rituals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="relative aspect-[3/4] bg-[#292929] overflow-hidden border border-[#292929]">
              <Image
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop"
                alt="Wisteria Beauty & Scalp Rituals"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center grayscale contrast-105 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#161616]/90 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-[#F3F1EC] border border-[#292929]">
                <span>CARE RITUALS / 03</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-[#D8D6D0]/70 pt-3 uppercase tracking-wider">
              Scalp restoration & restorative treatments
            </p>
          </motion.div>
        </div>

        {/* Studio Details / Culture Notes without fake claims */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 mt-12 border-t border-[#292929]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#C7353E] uppercase font-bold">
              [ 01 // INCLUSIVE CULTURE ]
            </span>
            <h4 className="font-display font-bold text-base text-[#F3F1EC]">
              Gender-Inclusive Space
            </h4>
            <p className="text-xs text-[#D8D6D0]/75 leading-relaxed font-light">
              Every client and aesthetic is welcome. Cuts, colours, and grooming are priced by technique and time, not gender stereotypes.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#C7353E] uppercase font-bold">
              [ 02 // CONSULTATION FIRST ]
            </span>
            <h4 className="font-display font-bold text-base text-[#F3F1EC]">
              In-Depth Diagnostics
            </h4>
            <p className="text-xs text-[#D8D6D0]/75 leading-relaxed font-light">
              Before scissors touch your hair, we assess hair health, growth patterns, and lifestyle routines to design a look that lasts.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#C7353E] uppercase font-bold">
              [ 03 // LOCAL NEIGHBORHOOD ]
            </span>
            <h4 className="font-display font-bold text-base text-[#F3F1EC]">
              Erandwane Landmark
            </h4>
            <p className="text-xs text-[#D8D6D0]/75 leading-relaxed font-light">
              Centrally situated near Kalmadi School and next to Kata Kirr Misal, accessible with convenient neighborhood connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
