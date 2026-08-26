'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Check, Clock } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/lib/data';

interface ServiceIndexProps {
  onSelectServiceForBooking: (serviceCategory: string, specificService?: string) => void;
}

export function ServiceIndex({ onSelectServiceForBooking }: ServiceIndexProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [expandedSubserviceId, setExpandedSubserviceId] = useState<string | null>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F1EC] border-b border-[#16161615] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#16161615]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              [ 03 / SIGNATURE SERVICES ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#161616] uppercase leading-none skew-text">
              SERVICE <span className="cherry-accent">INDEX.</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#161616]/60 uppercase tracking-widest max-w-sm">
            PRECISION CRAFT • TAILORED FORMULATIONS • CONTEMPORARY CARE
          </p>
        </div>

        {/* Main Grid: Interactive Editorial List + Dynamic Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-8 sm:pt-12 items-start">
          {/* Left / Main Column: Editorial Service Rows */}
          <div className="lg:col-span-7 space-y-0" role="tablist" aria-label="Services list">
            {SERVICES_DATA.map((service) => {
              const isActive = activeServiceId === service.id;
              const isExpanded = expandedSubserviceId === service.id;

              return (
                <div
                  key={service.id}
                  className={`border-b transition-all duration-300 ${
                    isActive
                      ? 'border-[#C7353E50] bg-[#161616]/[0.02]'
                      : 'border-[#16161615] hover:border-[#C7353E30]'
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveServiceId(service.id);
                      setExpandedSubserviceId(isExpanded ? null : service.id);
                    }}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    className="w-full text-left py-6 sm:py-7 px-2 sm:px-3 flex items-center justify-between group focus:outline-none cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6 flex-1 pr-4">
                      {/* Number */}
                      <span
                        className={`text-[10px] font-bold transition-colors ${
                          isActive ? 'text-[#C7353E]' : 'opacity-30 group-hover:opacity-100 text-[#161616]'
                        }`}
                      >
                        {service.number} /
                      </span>

                      {/* Title & Tagline */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 flex-wrap">
                        <span
                          className={`font-semibold tracking-widest uppercase transition-all duration-300 ${
                            isActive
                              ? 'text-[#161616] text-xl sm:text-2xl cherry-accent'
                              : 'text-[#161616] text-lg sm:text-xl group-hover:text-[#161616]'
                          }`}
                        >
                          {service.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-[#161616]/50 uppercase">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Arrow / Action Indicator */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
                          isActive ? 'text-[#C7353E] opacity-100 font-bold' : 'opacity-0 group-hover:opacity-60 text-[#161616]'
                        }`}
                      >
                        {isActive ? 'ACTIVE' : 'VIEW →'}
                      </span>
                      <div
                        className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? 'border-[#161616] bg-[#161616] text-[#F3F1EC]'
                            : 'border-[#16161620] text-[#161616] group-hover:border-[#161616]'
                        }`}
                      >
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90 text-[#C7353E]' : 'group-hover:translate-x-0.5'
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Sub-services Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden px-3 sm:px-5 pb-6 pt-1"
                      >
                        <div className="pt-2 pb-4 space-y-4 border-t border-[#16161610]">
                          <p className="text-sm text-[#161616]/80 leading-relaxed font-light">
                            {service.description}
                          </p>

                          {/* Features Pills */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {service.features.map((feat) => (\n                              <span\n                                key={feat}\n                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono uppercase bg-[#161616]/5 text-[#161616] border border-[#16161615]"\n                              >\n                                <Check className="w-3 h-3 text-[#C7353E]" />\n                                {feat}\n                              </span>\n                            ))}
                          </div>

                          {/* Specific Sub-Service List */}
                          <div className="space-y-2.5 pt-3">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-[#161616]/50 uppercase block font-semibold">
                              AVAILABLE IN THE STUDIO (DURATION ESTIMATES):
                            </span>
                            <div className="divide-y divide-[#16161610]">
                              {service.subServices.map((sub) => (
                                <div
                                  key={sub.name}
                                  className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#161616]/[0.02] px-2 transition-colors"
                                >
                                  <div className="space-y-0.5">
                                    <span className="text-sm font-semibold text-[#161616]">
                                      {sub.name}
                                    </span>
                                    <p className="text-xs text-[#161616]/60 font-light">{sub.description}</p>
                                  </div>
                                  <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                                    {sub.duration && (
                                      <span className="text-[11px] font-mono text-[#161616]/60 flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-[#C7353E]" />
                                        {sub.duration}
                                      </span>
                                    )}
                                    <button
                                      onClick={() =>
                                        onSelectServiceForBooking(service.category, sub.name)
                                      }
                                      className="text-xs font-bold font-mono tracking-wider uppercase text-[#C7353E] hover:text-[#9F252D] flex items-center gap-1 underline underline-offset-4 focus:outline-none cursor-pointer"
                                    >
                                      INQUIRE
                                      <ArrowUpRight className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Quick Inquire Button */}
                          <div className="pt-3 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-[#161616]/50">
                              Consultations are tailored to your hair condition.
                            </span>
                            <button
                              onClick={() => onSelectServiceForBooking(service.category)}
                              className="px-5 py-2 bg-[#161616] text-[#F3F1EC] text-[11px] font-bold tracking-widest uppercase hover:bg-[#C7353E] transition-colors cursor-pointer"
                            >
                              BOOK {service.category} →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Image & Detail Display */}
          <div className="lg:col-span-5 sticky top-24 hidden lg:block">
            <div className="relative aspect-[4/5] bg-[#D8D6D0] overflow-hidden border border-[#16161615]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeService.image}
                    alt={`Wisteria Salon ${activeService.category} Service`}
                    fill
                    sizes="40vw"
                    className="object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#161616]/85 via-[#161616]/20 to-transparent" />

                  {/* Overlay Meta */}
                  <div className="absolute top-4 left-4 bg-[#161616]/90 text-[#F3F1EC] px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase backdrop-blur-xs flex items-center gap-2 border border-[#292929]">
                    <span className="w-1.5 h-1.5 bg-[#C7353E]" />
                    <span>SERVICE // {activeService.number}</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-[#F3F1EC] space-y-2">
                    <span className="text-[11px] font-mono text-[#C7353E] font-bold tracking-widest uppercase block">
                      {activeService.tagline}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight">
                      {activeService.category}
                    </h3>
                    <p className="text-xs text-[#D8D6D0] leading-relaxed line-clamp-2 font-light">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
