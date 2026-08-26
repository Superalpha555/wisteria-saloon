'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, Compass } from 'lucide-react';

export function LocationSection() {
  const addressQuery = encodeURIComponent(
    'Wisteria Salon, Kalmadi Road, near Kalmadi School, next to Kata Kirr Misal, Bhonde Colony, Erandwane, Pune, Maharashtra 411004'
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section
      id="location"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#161616] text-[#F3F1EC] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 sm:pb-14 border-b border-[#292929]">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
              [ 10 / THE STUDIO LOCATION ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F3F1EC] uppercase leading-none skew-text">
              FIND <span className="cherry-accent">WISTERIA.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
            <p className="text-lg sm:text-xl text-[#F3F1EC] font-light leading-relaxed">
              Centrally placed in the vibrant Erandwane district of Pune,
              situated on Kalmadi Road within walking distance of key neighborhood landmarks.
            </p>
            <div className="w-16 h-0.5 bg-[#C7353E]" />
          </div>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 sm:pt-14 items-stretch">
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#292929]/30 p-6 sm:p-8 border border-[#292929]">
            <div className="space-y-6">
              {/* Address */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#C7353E] uppercase font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  STUDIO ADDRESS
                </span>
                <p className="text-base sm:text-lg text-[#F3F1EC] font-medium leading-relaxed">
                  Kalmadi Road, near Kalmadi School,
                  <br />
                  next to Kata Kirr Misal,
                  <br />
                  Bhonde Colony, Erandwane,
                  <br />
                  Pune, Maharashtra 411004
                </p>
              </div>

              {/* Landmark Reference Note */}
              <div className="p-4 bg-[#161616] border border-[#292929] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8D6D0]/50 block">
                  NEIGHBORHOOD LANDMARKS
                </span>
                <p className="text-xs text-[#D8D6D0] leading-relaxed font-light">
                  • Directly next to Kata Kirr Misal
                  <br />• Adjacent to Kalmadi High School & Junior College
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-1 pt-2 border-t border-[#292929]">
                <span className="text-[10px] font-mono tracking-widest text-[#D8D6D0]/50 uppercase font-bold block">
                  PHONE CONTACT
                </span>
                <a
                  href="tel:+918010880342"
                  className="text-xl sm:text-2xl font-bold text-[#F3F1EC] hover:text-[#C7353E] transition-colors inline-block"
                >
                  +91 8010880342
                </a>
              </div>

              {/* Hours / Schedule note without fabricated claims */}
              <div className="space-y-1 pt-2 border-t border-[#292929]">
                <span className="text-[10px] font-mono tracking-widest text-[#D8D6D0]/50 uppercase font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C7353E]" />
                  APPOINTMENTS & VISITS
                </span>
                <p className="text-xs text-[#D8D6D0]/80 leading-relaxed font-light">
                  Sessions by appointment & walk-in consultations based on daily chair availability.
                </p>
              </div>
            </div>

            {/* Directions CTA */}
            <div className="pt-6">
              <a
                id="get-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#C7353E] hover:bg-[#9F252D] text-[#F3F1EC] text-[11px] font-bold font-mono tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Editorial Map / Landmark Graphic Canvas */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-[#161616] border border-[#292929] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#D8D6D0 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />

            {/* Top Bar inside Map Canvas */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#292929] pb-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#C7353E] animate-spin-slow" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#F3F1EC]">
                  ERANDWANE DISTRICT MAP
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#D8D6D0]/50 uppercase">
                PUNE, MAHARASHTRA
              </span>
            </div>

            {/* Stylized Architectural Map Diagram */}
            <div className="relative z-10 my-8 py-6 space-y-6">
              {/* Kalmadi Road Axis */}
              <div className="relative border-t-2 border-dashed border-[#292929] pt-4">
                <span className="absolute -top-3 right-4 bg-[#161616] px-2 text-[10px] font-mono tracking-widest text-[#D8D6D0]/50 uppercase">
                  KALMADI ROAD AXIS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {/* Landmark 1 */}
                  <div className="p-4 bg-[#292929]/50 border border-[#292929] text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#D8D6D0]/50 uppercase block">
                      LANDMARK
                    </span>
                    <span className="font-display font-bold text-sm text-[#F3F1EC]">
                      Kalmadi School
                    </span>
                  </div>

                  {/* WISTERIA PIN - Highlighted Centerpiece */}
                  <div className="p-4 bg-[#C7353E] text-[#F3F1EC] text-center space-y-1 shadow-lg transform sm:-translate-y-2 border border-[#9F252D]">
                    <span className="text-[9px] font-mono uppercase tracking-[0.25em] font-bold block">
                      ★ STUDIO DESTINATION
                    </span>
                    <span className="font-display font-extrabold text-base tracking-tight block">
                      WISTERIA SALON
                    </span>
                    <span className="text-[10px] font-mono text-[#F3F1EC]/90 block">
                      Bhonde Colony
                    </span>
                  </div>

                  {/* Landmark 2 */}
                  <div className="p-4 bg-[#292929]/50 border border-[#292929] text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#D8D6D0]/50 uppercase block">
                      LANDMARK
                    </span>
                    <span className="font-display font-bold text-sm text-[#F3F1EC]">
                      Kata Kirr Misal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Map Canvas */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#292929] text-xs font-mono text-[#D8D6D0]/70">
              <span className="flex items-center gap-1.5 text-[11px]">
                <Navigation className="w-3.5 h-3.5 text-[#C7353E]" />
                Easy parking & neighborhood access
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3F1EC] hover:text-[#C7353E] font-bold text-[11px] tracking-widest uppercase flex items-center gap-1 underline underline-offset-4"
              >
                OPEN LIVE GOOGLE MAPS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
