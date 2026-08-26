'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SignatureStatement } from '@/components/SignatureStatement';
import { ServiceIndex } from '@/components/ServiceIndex';
import { FeaturedService } from '@/components/FeaturedService';
import { Lookbook } from '@/components/Lookbook';
import { StudioStory } from '@/components/StudioStory';
import { EditorialPrinciples } from '@/components/EditorialPrinciples';
import { ClientStories } from '@/components/ClientStories';
import { BookingExperience } from '@/components/BookingExperience';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';
import { MobileActionBar } from '@/components/MobileActionBar';

export default function Home() {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(
    undefined
  );
  const [selectedSubservice, setSelectedSubservice] = useState<string | undefined>(
    undefined
  );

  const scrollToBooking = (category?: string, subservice?: string) => {
    if (category) setSelectedServiceCategory(category);
    if (subservice) setSelectedSubservice(subservice);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLookbook = () => {
    const lookbookEl = document.getElementById('lookbook');
    if (lookbookEl) {
      lookbookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F1EC] text-[#161616] selection:bg-[#C7353E] selection:text-[#F3F1EC] pb-12 sm:pb-0">
      {/* Sticky Header with Navigation */}
      <Header onOpenBooking={() => scrollToBooking()} />

      {/* Hero: Bold Editorial Fashion Campaign */}
      <Hero
        onBookClick={() => scrollToBooking()}
        onExploreLookbook={scrollToLookbook}
      />

      {/* Signature Statement: Visual Pause */}
      <SignatureStatement />

      {/* Service Index: Bold Editorial Menu */}
      <ServiceIndex
        onSelectServiceForBooking={(category, subservice) =>
          scrollToBooking(category, subservice)
        }
      />

      {/* Featured Service: The Signature */}
      <FeaturedService onExploreServices={scrollToServices} />

      {/* The Lookbook: Curated Fashion Editorial & Lightbox */}
      <Lookbook
        onBookStyle={(styleName, category) =>
          scrollToBooking(category, styleName)
        }
      />

      {/* The Studio: Environment & Spatial Narrative */}
      <StudioStory />

      {/* Editorial Principles: Numbered Manifesto */}
      <EditorialPrinciples />

      {/* Client Stories: Editorial Placeholder System */}
      <ClientStories />

      {/* Booking Experience: Functional Appointment Inquiry */}
      <BookingExperience
        preselectedService={selectedServiceCategory}
        preselectedSubservice={selectedSubservice}
      />

      {/* Location: Erandwane Pune Map & Landmarks */}
      <LocationSection />

      {/* Footer: Dark Minimal Wordmark & Details */}
      <Footer />

      {/* Compact Mobile Action Bar */}
      <MobileActionBar onBookClick={() => scrollToBooking()} />
    </main>
  );
}
