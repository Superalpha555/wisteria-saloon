'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight, Phone, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [\n    { name: 'SERVICES', href: '#services' },\n    { name: 'LOOKBOOK', href: '#lookbook' },\n    { name: 'THE STUDIO', href: '#studio' },\n    { name: 'LOCATION', href: '#location' },\n    { name: 'BOOK NOW', href: '#booking' },\n  ];

  return (
    <footer className="bg-[#161616] text-[#F3F1EC] pt-16 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 border-t border-[#292929]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Massive Typographic Wordmark */}
        <div className="border-b border-[#292929] pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter uppercase text-[#F3F1EC] leading-none block hover:text-[#C7353E] transition-colors duration-500 skew-text">
              WISTERIA<span className="cherry-accent">.</span>
            </span>
            <span className="text-[11px] sm:text-xs tracking-[0.4em] font-semibold text-[#D8D6D0]/80 uppercase pl-1 block mt-2 font-mono">
              SALON • ERANDWANE • PUNE
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end px-4 py-2.5 border border-[#292929] hover:border-[#C7353E] text-[11px] font-mono tracking-widest text-[#D8D6D0] hover:text-[#C7353E] transition-colors flex items-center gap-2 uppercase cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer Navigation Columns & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 text-xs">
          {/* Col 1: Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-display font-bold text-base sm:text-lg text-[#D8D6D0] hover:text-[#F3F1EC] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#292929] group-hover:text-[#C7353E] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Studio Information */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold block">
              STUDIO ADDRESS
            </span>
            <address className="not-italic text-xs text-[#D8D6D0]/80 space-y-1 leading-relaxed font-light">
              <p className="font-semibold text-[#F3F1EC]">Kalmadi Road, near Kalmadi School,</p>
              <p>next to Kata Kirr Misal,</p>
              <p>Bhonde Colony, Erandwane,</p>
              <p>Pune, Maharashtra 411004</p>
            </address>

            <div className="pt-2 space-y-1.5">
              <a
                href="tel:+918010880342"
                className="flex items-center gap-2 text-xs text-[#F3F1EC] hover:text-[#C7353E] transition-colors font-mono"
              >
                <Phone className="w-3 h-3 text-[#C7353E]" />
                <span>+91 8010880342</span>
              </a>
              <a
                href="https://wa.me/918010880342?text=Hi%20Wisteria%20Salon,%20I'd%20like%20to%20enquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#F3F1EC] hover:text-[#C7353E] transition-colors font-mono"
              >
                <MessageCircle className="w-3 h-3 text-[#C7353E]" />
                <span>WhatsApp Appointment Desk</span>
              </a>
            </div>
          </div>

          {/* Col 3: Brand Statement */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold block">
              THE STUDIO
            </span>
            <p className="text-xs text-[#D8D6D0]/70 leading-relaxed font-light">
              Independent hair studio & contemporary beauty culture in Pune.
              Precision cutting, dimensional colour, and elevated personal styling.
            </p>
            <div className="pt-1 text-[10px] font-mono text-[#D8D6D0]/50">
              <p>By appointment & daily walk-in consultations.</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#D8D6D0]/50">
          <div>
            © {new Date().getFullYear()} WISTERIA SALON • ERANDWANE, PUNE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-3">
            <span>KALMADI ROAD</span>
            <span>•</span>
            <span>BHONDE COLONY</span>
            <span>•</span>
            <span className="text-[#C7353E]">411004</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
