'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { LOOKBOOK_DATA, LookbookItem } from '@/lib/data';
import { LightboxModal } from './LightboxModal';

interface LookbookProps {
  onBookStyle: (styleName: string, category: string) => void;
}

export function Lookbook({ onBookStyle }: LookbookProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const categories = ['ALL', 'HAIR', 'COLOUR', 'STYLING', 'BEAUTY'];

  const filteredItems =
    activeCategory === 'ALL'
      ? LOOKBOOK_DATA
      : LOOKBOOK_DATA.filter((item) => item.category === activeCategory);

  return (
    <section
      id="lookbook"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F1EC] border-b border-[#16161615]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#16161615]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              [ 05 / ARCHIVE & EDITORIAL ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#161616] uppercase leading-none skew-text">
              THE <span className="cherry-accent">LOOKBOOK.</span>
            </h2>
          </div>

          {/* Minimalist Category Filter Nav */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Lookbook categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 text-[11px] font-mono tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#161616] text-[#F3F1EC] border-[#161616] shadow-xs'
                      : 'bg-transparent text-[#161616] border-[#16161620] hover:border-[#161616]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C7353E]" />}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Lookbook Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 pt-10 sm:pt-12"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              // Create controlled asymmetrical spans based on index or aspect
              let colSpan = 'lg:col-span-4';
              let aspectClass = 'aspect-[3/4]';

              if (idx === 0) {
                colSpan = 'lg:col-span-7 sm:col-span-2';
                aspectClass = 'aspect-[16/11]';
              } else if (idx === 1) {
                colSpan = 'lg:col-span-5';
                aspectClass = 'aspect-[3/4]';
              } else if (idx === 2) {
                colSpan = 'lg:col-span-5';
                aspectClass = 'aspect-[4/5]';
              } else if (idx === 3) {
                colSpan = 'lg:col-span-7 sm:col-span-2';
                aspectClass = 'aspect-[16/10]';
              } else if (idx === 4) {
                colSpan = 'lg:col-span-6';
                aspectClass = 'aspect-[4/5]';
              } else if (idx === 5) {
                colSpan = 'lg:col-span-6';
                aspectClass = 'aspect-[4/5]';
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan} group relative cursor-pointer`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div
                    className={`relative w-full ${aspectClass} bg-[#D8D6D0] overflow-hidden border border-[#16161615]`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#161616]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Label (Visible on Hover / Mobile) */}
                    <div className="absolute top-3 left-3 bg-[#161616]/90 text-[#F3F1EC] px-2.5 py-1 text-[10px] font-mono tracking-[0.2em] uppercase border border-[#292929] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#C7353E]" />
                      <span>{item.category}</span>
                    </div>

                    {/* Hover Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-[#F3F1EC] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#F3F1EC]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#D8D6D0]/80 line-clamp-1 font-mono">
                            {item.caption}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-none bg-[#C7353E] text-[#F3F1EC] flex items-center justify-center shrink-0 ml-3">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Caption underneath for default state */}
                  <div className="pt-2.5 flex items-baseline justify-between">
                    <span className="font-display font-bold text-sm text-[#161616] group-hover:text-[#C7353E] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#292929]/60 uppercase">
                      VIEW LOOK →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lookbook Bottom Note */}
        <div className="mt-14 pt-6 border-t border-[#D8D6D0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#292929]">
          <span className="text-[#292929]/70">
            * All editorial looks created and styled in Erandwane, Pune.
          </span>
          <a
            href="#booking"
            className="text-[#161616] hover:text-[#C7353E] font-bold tracking-widest uppercase flex items-center gap-1"
          >
            CUSTOM APPOINTMENT CONSULTATIONS AVAILABLE →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
        onBookStyle={onBookStyle}
      />
    </section>
  );
}
