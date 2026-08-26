'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { LookbookItem } from '@/lib/data';

interface LightboxModalProps {
  item: LookbookItem | null;
  items: LookbookItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: LookbookItem) => void;
  onBookStyle: (styleName: string, category: string) => void;
}

export function LightboxModal({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
  onBookStyle,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const idx = items.findIndex((i) => i.id === item.id);
        const prev = idx > 0 ? items[idx - 1] : items[items.length - 1];
        onSelect(prev);
      }
      if (e.key === 'ArrowRight') {
        const idx = items.findIndex((i) => i.id === item.id);
        const next = idx < items.length - 1 ? items[idx + 1] : items[0];
        onSelect(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item, items, onClose, onSelect]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#161616]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <div
          className="relative max-w-5xl w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top / Close Bar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-[#161616]/80 text-[#F3F1EC] hover:text-[#C7353E] border border-[#292929] hover:border-[#C7353E] transition-colors focus:outline-none"
            aria-label="Close lookbook image"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left / Main Visual Stage */}
          <div className="relative w-full lg:w-3/5 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#292929] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Category tag badge */}
            <div className="absolute top-4 left-4 bg-[#161616]/90 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[#F3F1EC] border border-[#292929] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#C7353E]" />
              <span>{item.category}</span>
            </div>
          </div>

          {/* Right Info & Action Panel */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#161616]">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#D8D6D0]/60 border-b border-[#292929] pb-3">
                <span>LOOKBOOK // ARCHIVE</span>
                <span>
                  {String(currentIndex + 1).padStart(2, '0')} /{' '}
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono tracking-widest text-[#C7353E] uppercase font-bold">
                  {item.category} EDITORIAL
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#F3F1EC]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-[#D8D6D0] leading-relaxed italic">
                &ldquo;{item.caption}&rdquo;
              </p>

              <div className="pt-2 border-t border-[#292929] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D8D6D0]/60 block">
                  CRAFT SPECIFICATIONS:
                </span>
                <p className="text-xs text-[#D8D6D0]/80 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>

            {/* Actions & Carousel Navigation */}
            <div className="space-y-4 pt-4 border-t border-[#292929]">
              <button
                onClick={() => {
                  onClose();
                  onBookStyle(item.title, item.category);
                }}
                className="w-full py-3.5 bg-[#C7353E] hover:bg-[#9F252D] text-[#F3F1EC] text-xs font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>REQUEST THIS LOOK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => {
                    const idx = items.findIndex((i) => i.id === item.id);
                    const prev = idx > 0 ? items[idx - 1] : items[items.length - 1];
                    onSelect(prev);
                  }}
                  className="px-4 py-2 border border-[#292929] hover:border-[#F3F1EC] text-xs font-mono text-[#D8D6D0] hover:text-[#F3F1EC] transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>

                <button
                  onClick={() => {
                    const idx = items.findIndex((i) => i.id === item.id);
                    const next = idx < items.length - 1 ? items[idx + 1] : items[0];
                    onSelect(next);
                  }}
                  className="px-4 py-2 border border-[#292929] hover:border-[#F3F1EC] text-xs font-mono text-[#D8D6D0] hover:text-[#F3F1EC] transition-colors flex items-center gap-1"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
