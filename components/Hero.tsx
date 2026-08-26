'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Scissors } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreLookbook: () => void;
}

export function Hero({ onBookClick, onExploreLookbook }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between bg-[#F3F1EC] pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#D8D6D0]"
    >
      {/* Top Editorial Subline & Metadata */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D8D6D0]/80">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C7353E] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#292929] font-medium">
            ERANDWANE • PUNE • 411004
          </span>
        </div>

        <div className="flex items-center space-x-6 text-[11px] font-mono uppercase tracking-[0.2em] text-[#292929]/70">
          <span className="hidden md:inline">HAIR • COLOUR • BEAUTY • GROOMING</span>
          <span className="text-[#161616] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#161616]" />
            EST. ERANDWANE STUDIO
          </span>
        </div>
      </div>

      {/* Main Hero Body: Asymmetric Typography + Campaign Visual */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Oversized Typographic Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] tracking-[0.4em] font-bold opacity-40 mb-3 uppercase">
                EDITORIAL CONCEPT / 2024
              </p>
              <h1 className="text-5xl sm:text-7xl xl:text-[90px] leading-[0.85] font-extrabold tracking-tighter skew-text mb-6 uppercase text-[#161616]">
                YOUR LOOK.
                <br />
                <span className="cherry-accent">YOUR RULES.</span>
              </h1>
            </motion.div>

            {/* Clean Minimalism Cherry Bar */}
            <div className="w-24 h-1 bg-cherry mb-6" />

            {/* Clean Positioning Note */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl font-light leading-relaxed max-w-lg text-[#161616]/90 mb-8"
            >
              Style without limits. A space for creative expression and modern beauty
              culture in the heart of Pune.
            </motion.p>
          </div>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
          >
            <button
              id="hero-book-cta"
              onClick={onBookClick}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#161616] text-[#F3F1EC] hover:bg-[#C7353E] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-xs focus:outline-none"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4 text-[#D8D6D0]" />
            </button>

            <button
              id="hero-lookbook-cta"
              onClick={onExploreLookbook}
              className="px-6 py-3.5 sm:py-4 border border-[#16161620] hover:border-[#C7353E] hover:text-[#C7353E] text-[#161616] text-[11px] font-bold tracking-[0.2em] uppercase bg-transparent transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            >
              <span>EXPLORE LOOKBOOK</span>
              <span className="text-[#C7353E]">→</span>
            </button>
          </motion.div>

          {/* Quick Landmark Reference */}
          <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#292929]/75">
            <MapPin className="w-3.5 h-3.5 text-[#C7353E] shrink-0" />
            <span>Kalmadi Road, near Kalmadi School, next to Kata Kirr Misal, Erandwane</span>
          </div>
        </div>

        {/* Right Column: Strong Editorial Visual Composition */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none bg-[#D8D6D0] overflow-hidden border border-[#16161615]"
          >
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
              alt="Wisteria Salon Editorial Hair & Style Concept"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center grayscale contrast-105 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Vertical Studio Tag */}
            <div className="absolute top-6 right-6 vertical-text text-[10px] tracking-[0.4em] font-bold opacity-60 text-[#161616] bg-[#F3F1EC]/80 px-1 py-3 backdrop-blur-xs">
              BHONDE COLONY / PUNE
            </div>

            {/* Minimal Studio Quote Box */}
            <div className="absolute bottom-6 left-6 text-[#F3F1EC] bg-[#161616] p-5 max-w-[240px] border border-[#292929]">
              <p className="text-[10px] tracking-[0.2em] font-bold mb-1.5 text-[#C7353E]">THE STUDIO.</p>
              <p className="text-xs leading-relaxed opacity-80">
                A space for changing things up, trying something new and making your style your own.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-[#D8D6D0]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#292929]">
        <div className="flex items-center space-x-6">
          <span className="text-[#C7353E] font-bold">01 / DISCOVER</span>
          <span className="text-[#292929]/70">CONSULTATIONS & APPOINTMENTS AVAILABLE</span>
        </div>

        <a
          href="#statement"
          className="flex items-center gap-2 text-[#161616] hover:text-[#C7353E] transition-colors"
          aria-label="Scroll to signature statement"
        >
          <span className="tracking-[0.2em] uppercase text-[11px]">SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
