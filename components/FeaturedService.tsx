'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedServiceProps {
  onExploreServices: () => void;
}

export function FeaturedService({ onExploreServices }: FeaturedServiceProps) {
  return (
    <section
      id="featured"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#161616] text-[#F3F1EC] border-b border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Dominant Asymmetric Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full bg-[#292929] overflow-hidden border border-[#292929]">
              <Image
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop"
                alt="Wisteria Salon Signature Dimensional Hair & Precision Cut"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#161616]/70 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 bg-[#161616]/90 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[#F3F1EC] border border-[#292929] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C7353E]" />
                <span>FEATURED SERVICE / 01</span>
              </div>

              <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-[#D8D6D0]/70 uppercase">
                <span>ERANDWANE EDITORIAL SUITE</span>
              </div>
            </div>
          </motion.div>

          {/* Asymmetric Typography & Positioning Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold block">
                [ 04 / SPOTLIGHT ]
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.88] text-[#F3F1EC] skew-text">
                THE <br />
                <span className="cherry-accent">SIGNATURE.</span>
              </h2>
            </div>

            <div className="w-16 h-1 bg-cherry my-4" />

            <p className="text-base sm:text-lg text-[#D8D6D0] leading-relaxed font-light">
              &ldquo;Created around texture, shape and your personal style.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#D8D6D0]/70 leading-relaxed font-light">
              Our signature approach pairs a deep morphological hair diagnosis with
              weight-free internal slicing and custom tonal gloss. Designed to grow
              out gracefully in Pune&apos;s climate with minimal morning effort.
            </p>

            <div className="pt-2">
              <button
                id="explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#F3F1EC] text-[#161616] text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#C7353E] hover:text-[#F3F1EC] transition-all duration-300 group cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7353E] group-hover:text-[#F3F1EC] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
