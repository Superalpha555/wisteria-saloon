'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { EDITORIAL_PRINCIPLES } from '@/lib/data';

export function EditorialPrinciples() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  return (
    <section
      id="principles"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F1EC] border-b border-[#16161615]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-10 sm:pb-14 border-b border-[#16161615]">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold block mb-2">
            [ 07 / THE MANIFESTO ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#161616] uppercase leading-none skew-text">
            EDITORIAL <span className="cherry-accent">PRINCIPLES.</span>
          </h2>
        </div>

        {/* Large Numbered Composition with Expandable Interactive Reveals */}
        <div className="divide-y divide-[#16161615]">
          {EDITORIAL_PRINCIPLES.map((item, index) => {
            const isSelected = activeItem === index;

            return (
              <div
                key={item.number}
                className={`transition-colors duration-300 ${
                  isSelected ? 'bg-[#161616]/[0.02]' : 'hover:bg-[#161616]/[0.01]'
                }`}
              >
                <button
                  onClick={() => setActiveItem(isSelected ? null : index)}
                  className="w-full py-7 sm:py-10 flex items-start sm:items-center justify-between text-left group focus:outline-none cursor-pointer"
                  aria-expanded={isSelected}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 flex-1 pr-6">
                    {/* Big Number */}
                    <span
                      className={`font-mono text-lg sm:text-2xl font-bold transition-colors ${
                        isSelected ? 'text-[#C7353E]' : 'opacity-30 group-hover:opacity-100 text-[#161616]'
                      }`}
                    >
                      {item.number} /
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight transition-all duration-300 uppercase ${
                        isSelected
                          ? 'text-[#161616] translate-x-1 sm:translate-x-2'
                          : 'text-[#161616] group-hover:text-[#161616]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Toggle Indicator */}
                  <div
                    className={`w-9 h-9 rounded-none border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'border-[#161616] bg-[#161616] text-[#F3F1EC]'
                        : 'border-[#16161620] text-[#161616] group-hover:border-[#161616]'
                    }`}
                  >
                    {isSelected ? (
                      <Minus className="w-4 h-4 text-[#C7353E]" />
                    ) : (
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Revealable Description */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pb-8 sm:pb-10 pt-0"
                    >
                      <div className="sm:pl-20 max-w-3xl border-l-2 border-[#C7353E] pl-4 sm:ml-4">
                        <p className="text-base sm:text-lg text-[#161616]/90 font-light leading-relaxed">
                          {item.description}
                        </p>
                        <span className="text-[10px] font-mono tracking-widest text-[#161616]/50 uppercase pt-3 block">
                          [ WISTERIA STANDARD • PRINCIPLE {item.number} ]
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
