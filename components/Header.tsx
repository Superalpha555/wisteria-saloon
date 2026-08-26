'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Phone, MessageCircle, MapPin, X, Menu } from 'lucide-react';

interface HeaderProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile full-screen menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#hero', num: '01' },
    { name: 'SERVICES', href: '#services', num: '02' },
    { name: 'LOOKBOOK', href: '#lookbook', num: '03' },
    { name: 'THE STUDIO', href: '#studio', num: '04' },
    { name: 'CONTACT', href: '#location', num: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Editorial Ribbon */}
      <div className="bg-[#161616] text-[#F3F1EC] text-[11px] tracking-[0.2em] uppercase py-2 px-4 border-b border-[#292929] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#D8D6D0]">
              <MapPin className="w-3 h-3 text-[#C7353E]" />
              Erandwane • Pune
            </span>
            <span className="text-[#D8D6D0]/60 hidden md:inline">|</span>
            <span className="text-[#D8D6D0] hidden md:inline">
              Near Kalmadi School, Next to Kata Kirr Misal
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:+918010880342"
              className="flex items-center gap-1 text-[#F3F1EC] hover:text-[#C7353E] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C7353E]" />
              <span>+91 8010880342</span>
            </a>
            <span className="text-[#D8D6D0]/60">|</span>
            <a
              href="https://wa.me/918010880342?text=Hi%20Wisteria%20Salon,%20I'd%20like%20to%20enquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#F3F1EC] hover:text-[#C7353E] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#C7353E]" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F3F1EC]/95 backdrop-blur-md border-b border-[#16161615] py-3 shadow-xs'
            : 'bg-[#F3F1EC] py-4 sm:py-6 border-b border-[#16161610]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between">
          {/* Typographic Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col items-start leading-none select-none focus:outline-none"
            aria-label="Wisteria Salon Home"
          >
            <span className="text-[11px] tracking-[0.3em] font-semibold opacity-50 uppercase text-[#161616]">
              PUNE / ERANDWANE
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-none mt-1 text-[#161616]">
              WISTERIA <span className="cherry-accent">SALON</span>
            </h1>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] tracking-[0.2em] font-semibold" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors py-1 ${
                  idx === 0
                    ? 'border-b border-[#C7353E] text-[#161616]'
                    : 'text-[#161616] hover:opacity-60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              id="header-book-btn"
              onClick={handleBookClick}
              className="px-6 py-2.5 sm:py-3 bg-[#161616] text-[#F3F1EC] hover:bg-[#C7353E] text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer shadow-xs focus:outline-none"
            >
              <span>BOOK NOW</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#161616] hover:text-[#C7353E] border border-[#16161620] hover:border-[#161616] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#161616] text-[#F3F1EC] flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[#292929] pb-6">
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-[#F3F1EC]">
                  WISTERIA
                </span>
                <span className="text-[9px] tracking-[0.4em] font-semibold text-[#D8D6D0] uppercase">
                  SALON • ERANDWANE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-[#F3F1EC] hover:text-[#C7353E] border border-[#292929] hover:border-[#C7353E] transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4 my-8" aria-label="Mobile Navigation Links">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="group flex items-baseline justify-between border-b border-[#292929]/80 py-3 text-left focus:outline-none"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="text-xs font-mono text-[#C7353E]">{link.num}</span>
                    <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC] group-hover:text-[#C7353E] group-hover:translate-x-2 transition-all">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#292929] group-hover:text-[#C7353E] transition-colors" />
                </motion.a>
              ))}
            </nav>

            {/* Bottom Actions inside Menu */}
            <div className="border-t border-[#292929] pt-6 space-y-4">
              <button
                onClick={handleBookClick}
                className="w-full py-3.5 bg-[#C7353E] text-[#F3F1EC] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#9F252D] transition-colors flex items-center justify-center gap-2"
              >
                <span>REQUEST APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 text-center text-xs tracking-wider">
                <a
                  href="tel:+918010880342"
                  className="py-3 px-3 border border-[#292929] text-[#F3F1EC] hover:border-[#C7353E] hover:text-[#C7353E] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C7353E]" />
                  <span>CALL</span>
                </a>
                <a
                  href="https://wa.me/918010880342?text=Hi%20Wisteria%20Salon,%20I'd%20like%20to%20enquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 border border-[#292929] text-[#F3F1EC] hover:border-[#C7353E] hover:text-[#C7353E] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C7353E]" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              <p className="text-[11px] text-[#D8D6D0]/60 text-center leading-relaxed">
                Kalmadi Rd, next to Kata Kirr Misal, Erandwane, Pune
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
