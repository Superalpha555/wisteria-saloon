'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface BookingProps {
  preselectedService?: string;
  preselectedSubservice?: string;
}

export function BookingExperience({
  preselectedService,
  preselectedSubservice,
}: BookingProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedServiceOverride, setSelectedServiceOverride] = useState<string | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (11:00 AM - 02:00 PM)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const derivedService = preselectedService
    ? preselectedSubservice
      ? `${preselectedService} - ${preselectedSubservice}`
      : `${preselectedService}`
    : 'Hair - The Signature Haircut';

  const currentService = selectedServiceOverride ?? derivedService;

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!mobile.trim() || mobile.trim().length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hi Wisteria Salon, I'd like to enquire about an appointment.
Name: ${name || '[Client Name]'}
Mobile: ${mobile || '[Mobile]'}
Service: ${currentService}
Preferred Date: ${date || 'Flexible'}
Preferred Time: ${time}
Notes: ${message || 'None'}`;
    return encodeURIComponent(text);
  };

  return (
    <section
      id="booking"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F1EC] border-b border-[#16161615]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C7353E] uppercase font-bold">
                [ 09 / APPOINTMENTS & ENQUIRIES ]
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#161616] uppercase leading-[0.9] skew-text">
                READY <br />
                FOR A <br />
                <span className="cherry-accent">CHANGE?</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed font-light">
              We operate primarily by scheduled appointments to guarantee
              undivided attention to every client. Send an inquiry or reach out directly to reserve your chair.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="border border-[#16161620] bg-[#161616]/[0.02] p-4 sm:p-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#161616]/60 block mb-1">
                  CALL DIRECTLY
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+918010880342"
                    className="text-lg sm:text-xl font-bold text-[#161616] hover:text-[#C7353E] transition-colors"
                  >
                    +91 8010880342
                  </a>
                  <a
                    href="tel:+918010880342"
                    className="w-8 h-8 rounded-none bg-[#161616] text-[#F3F1EC] hover:bg-[#C7353E] transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Call Wisteria Salon"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="border border-[#16161620] bg-[#161616]/[0.02] p-4 sm:p-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#161616]/60 block mb-1">
                  INSTANT WHATSAPP ENQUIRY
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#161616]/70">
                    Pre-filled message available
                  </span>
                  <a
                    href="https://wa.me/918010880342?text=Hi%20Wisteria%20Salon,%20I'd%20like%20to%20enquire%20about%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#161616] text-[#F3F1EC] text-[11px] font-mono font-bold tracking-wider uppercase hover:bg-[#C7353E] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C7353E]" />
                    <span>CHAT</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#161616]/60 space-y-0.5">
              <p>Kalmadi Road, Erandwane, Pune 411004</p>
              <p>Near Kalmadi School, next to Kata Kirr Misal</p>
            </div>
          </div>

          {/* Right Column: Clean Appointment Form */}
          <div className="lg:col-span-7 bg-[#161616] text-[#F3F1EC] p-6 sm:p-8 border border-[#292929]">
            {isSubmitted ? (\n              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 space-y-5 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#C7353E]/20 border border-[#C7353E] flex items-center justify-center text-[#C7353E]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#F3F1EC]">
                    APPOINTMENT REQUEST RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D6D0] max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong className="text-[#F3F1EC] font-semibold">{name}</strong>.
                    Our studio team at Wisteria Salon has recorded your request for{' '}
                    <strong className="text-[#C7353E] font-semibold">{currentService}</strong> on{' '}
                    <strong className="text-[#F3F1EC] font-semibold">{date}</strong> ({time}). We will contact you at{' '}
                    <strong className="text-[#F3F1EC] font-semibold">{mobile}</strong> shortly to confirm.
                  </p>
                </div>

                {/* Instant WhatsApp forward option */}
                <div className="pt-4 border-t border-[#292929] max-w-md mx-auto space-y-3">
                  <span className="text-[10px] font-mono text-[#D8D6D0]/60 uppercase block">
                    OPTIONAL: SEND DETAILS DIRECTLY VIA WHATSAPP
                  </span>
                  <a
                    href={`https://wa.me/918010880342?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#C7353E] text-[#F3F1EC] text-[11px] font-bold font-mono tracking-widest uppercase hover:bg-[#9F252D] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SEND SUMMARY TO SALON ON WHATSAPP</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setMobile('');
                      setDate('');
                      setMessage('');
                    }}
                    className="text-[11px] font-mono text-[#D8D6D0]/70 hover:text-[#F3F1EC] underline uppercase pt-2 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#292929] pb-3">
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight text-[#F3F1EC]">
                    APPOINTMENT INQUIRY
                  </h3>
                  <p className="text-[10px] font-mono text-[#D8D6D0]/60 uppercase tracking-wider mt-1">
                    Please provide your preferred appointment details
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-2.5 bg-[#C7353E]/20 border border-[#C7353E] text-[#F3F1EC] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C7353E] shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-name"
                      className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0] font-semibold"
                    >
                      NAME <span className="text-[#C7353E]">*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none placeholder-[#D8D6D0]/30 transition-colors"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-phone"
                      className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0] font-semibold"
                    >
                      MOBILE NUMBER <span className="text-[#C7353E]">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none placeholder-[#D8D6D0]/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="booking-service"
                    className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0] font-semibold"
                  >
                    SELECT SERVICE <span className="text-[#C7353E]">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={currentService}
                    onChange={(e) => setSelectedServiceOverride(e.target.value)}
                    className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none transition-colors"
                  >
                    <optgroup label="01 / HAIR" className="bg-[#161616] text-[#F3F1EC]">
                      <option value="Hair - The Signature Haircut">Hair - The Signature Haircut</option>
                      <option value="Hair - Texture & Movement Layering">Hair - Texture & Movement Layering</option>
                      <option value="Hair - Restorative Scalp Ritual">Hair - Restorative Scalp Ritual</option>
                      <option value="Hair - Editorial Wash & Blowout">Hair - Editorial Wash & Blowout</option>
                    </optgroup>
                    <optgroup label="02 / COLOUR" className="bg-[#161616] text-[#F3F1EC]">
                      <option value="Colour - Signature Balayage & Melt">Colour - Signature Balayage & Melt</option>
                      <option value="Colour - Full Global Colour & Shine">Colour - Full Global Colour & Shine</option>
                      <option value="Colour - Face-Framing Money Piece">Colour - Face-Framing Money Piece</option>
                      <option value="Colour - Tonal Gloss & Refresh">Colour - Tonal Gloss & Refresh</option>
                    </optgroup>
                    <optgroup label="03 / BEAUTY" className="bg-[#161616] text-[#F3F1EC]">
                      <option value="Beauty - Custom Glow Facial">Beauty - Custom Glow Facial</option>
                      <option value="Beauty - Editorial Manicure & Nails">Beauty - Editorial Manicure & Nails</option>
                      <option value="Beauty - Restorative Spa Pedicure">Beauty - Restorative Spa Pedicure</option>
                      <option value="Beauty - Brow & Lash Architecture">Beauty - Brow & Lash Architecture</option>
                    </optgroup>
                    <optgroup label="04 / GROOMING" className="bg-[#161616] text-[#F3F1EC]">
                      <option value="Grooming - Modern Precision Cut & Fade">Grooming - Modern Precision Cut & Fade</option>
                      <option value="Grooming - Beard Design & Hot Towel">Grooming - Beard Design & Hot Towel</option>
                      <option value="Grooming - Complete Grooming Session">Grooming - Complete Grooming Session</option>
                    </optgroup>
                    <optgroup label="05 / OCCASION & CONSULTATION" className="bg-[#161616] text-[#F3F1EC]">
                      <option value="Occasion - Contemporary Bridal Styling">Occasion - Contemporary Bridal Styling</option>
                      <option value="Occasion - Editorial Evening Updo">Occasion - Editorial Evening Updo</option>
                      <option value="Consultation - General Hair & Style Diagnostic">Consultation - General Hair & Style Diagnostic</option>
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-date"
                      className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0] font-semibold"
                    >
                      PREFERRED DATE <span className="text-[#C7353E]">*</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-time"
                      className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0] font-semibold"
                    >
                      PREFERRED TIME
                    </label>
                    <select
                      id="booking-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none transition-colors"
                    >
                      <option value="Morning (11:00 AM - 02:00 PM)">Morning (11:00 AM - 02:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
                      <option value="Flexible / Any available slot">Flexible / Any available slot</option>
                    </select>
                  </div>
                </div>

                {/* Message / Special Notes */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="booking-message"
                    className="text-[10px] font-mono tracking-widest uppercase text-[#D8D6D0]"
                  >
                    MESSAGE / CURRENT HAIR STATUS (OPTIONAL)
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention previous chemical treatments, desired look, or specific stylist inquiries..."
                    className="w-full bg-[#161616] text-[#F3F1EC] border border-[#292929] px-3.5 py-2.5 text-xs focus:border-[#C7353E] focus:outline-none placeholder-[#D8D6D0]/30 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    id="submit-booking-btn"
                    type="submit"
                    className="w-full py-3.5 bg-[#C7353E] hover:bg-[#9F252D] text-[#F3F1EC] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs focus:outline-none"
                  >
                    <span>REQUEST APPOINTMENT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] font-mono text-[#D8D6D0]/50 text-center mt-2.5">
                    We will get in touch to confirm your appointment time and stylist availability.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
