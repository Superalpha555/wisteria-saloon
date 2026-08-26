'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';
import { CLIENT_STORIES } from '@/lib/data';

export function ClientStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : CLIENT_STORIES.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < CLIENT_STORIES.length - 1 ? prev + 1 : 0));
  };

  const currentStory = CLIENT_STORIES[currentIndex];

  return (
    <section
      id="stories"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#161616] text-[#F3F1EC] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#292929]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              [ 08 / VERIFIED EXPERIENCES ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F3F1EC] uppercase leading-none skew-text">
              REAL PEOPLE. <br />
              <span className="cherry-accent">REAL STORIES.</span>
            </h2>
          </div>

          <div className="text-[10px] font-mono text-[#D8D6D0]/50 max-w-xs uppercase tracking-wider">
            EDITORIAL PLACEHOLDER SYSTEM • READY FOR SALON CLIENT VOICES
          </div>
        </div>

        {/* Big Editorial Quote Showcase */}
        <div className="py-10 sm:py-16 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Quote text */}
              <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F3F1EC] leading-snug">
                &ldquo;{currentStory.quote}&rdquo;
              </blockquote>

              {/* Client Metadata & Service */}
              <div className="flex flex-wrap items-baseline gap-4 sm:gap-8 pt-4 border-t border-[#292929]">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#C7353E] uppercase font-bold block">
                    CLIENT NAME
                  </span>
                  <span className="font-bold text-base sm:text-lg text-[#F3F1EC] tracking-wide">
                    {currentStory.clientName}
                  </span>
                </div>

                <div className="hidden sm:block text-[#292929]">|</div>

                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#D8D6D0]/50 uppercase block">
                    SERVICE
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#D8D6D0] uppercase">
                    {currentStory.service}
                  </span>
                </div>

                <div className="hidden sm:block text-[#292929]">|</div>

                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#D8D6D0]/50 uppercase block">
                    LOCATION
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#D8D6D0]/80 uppercase">
                    {currentStory.note}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation & Progress Bar */}
        <div className="pt-6 border-t border-[#292929] flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#D8D6D0]">
            <span className="text-[#C7353E] font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[#292929]">/</span>
            <span>{String(CLIENT_STORIES.length).padStart(2, '0')}</span>
          </div>

          {/* Minimal Arrow Navigation */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 border border-[#292929] hover:border-[#C7353E] text-[#D8D6D0] hover:text-[#C7353E] transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous story"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-[#292929] hover:border-[#C7353E] text-[#D8D6D0] hover:text-[#C7353E] transition-colors focus:outline-none cursor-pointer"
              aria-label="Next story"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
