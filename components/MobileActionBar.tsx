'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  onBookClick: () => void;
}

export function MobileActionBar({ onBookClick }: MobileActionBarProps) {
  return (
    <aside
      id="mobile-action-bar"
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#161616]/95 backdrop-blur-md border-t border-[#292929] px-4 py-2.5 sm:hidden"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* CALL */}
        <a
          href="tel:+918010880342"
          className="flex items-center justify-center gap-1.5 py-2 px-2 border border-[#292929] bg-[#161616] text-[#F3F1EC] hover:text-[#C7353E] hover:border-[#C7353E] text-[11px] font-mono font-bold tracking-wider uppercase transition-colors"
        >
          <Phone className="w-3 h-3 text-[#C7353E]" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918010880342?text=Hi%20Wisteria%20Salon,%20I'd%20like%20to%20enquire%20about%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 border border-[#292929] bg-[#161616] text-[#F3F1EC] hover:text-[#C7353E] hover:border-[#C7353E] text-[11px] font-mono font-bold tracking-wider uppercase transition-colors"
        >
          <MessageCircle className="w-3 h-3 text-[#C7353E]" />
          <span>WHATSAPP</span>
        </a>

        {/* BOOK */}
        <button
          onClick={onBookClick}
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#C7353E] hover:bg-[#9F252D] text-[#F3F1EC] text-[11px] font-mono font-bold tracking-wider uppercase transition-colors"
        >
          <Calendar className="w-3 h-3" />
          <span>BOOK</span>
        </button>
      </div>
    </aside>
  );
}
