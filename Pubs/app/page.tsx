'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureRibbon } from '@/components/FeatureRibbon';
import { ShowcaseCards } from '@/components/ShowcaseCards';
import { PubLocator } from '@/components/PubLocator';
import { CellarMenu } from '@/components/CellarMenu';
import { ArtisanFood } from '@/components/ArtisanFood';
import { EventsSection } from '@/components/EventsSection';
import { OurStory } from '@/components/OurStory';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { PhpCodeViewerModal } from '@/components/PhpCodeViewerModal';
import { Pub, PubEvent } from '@/lib/pubData';
import { Code2, Download, ArrowRight, Beer } from 'lucide-react';

export default function Home() {
  const [phpModalOpen, setPhpModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPubForBooking, setSelectedPubForBooking] = useState<Pub | null>(null);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowcaseSelect = (section: 'drinks' | 'pubs' | 'food' | 'events') => {
    handleScrollTo(section);
  };

  const handleReservePub = (pub: Pub) => {
    setSelectedPubForBooking(pub);
    setBookingModalOpen(true);
  };

  const handleRsvpEvent = (event: PubEvent) => {
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0b1410] text-[#e8e6df] flex flex-col font-sans">
      
      {/* Top Banner highlighting the PHP project availability */}
      <aside aria-label="PHP Code Edition Notice" className="bg-[#12241b] border-b border-[#d4af37]/40 px-4 py-2 text-xs text-[#faeed1]">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1 bg-[#d4af37] text-[#0b1410] font-bold rounded text-[10px] uppercase">
              PHP EDITION READY
            </span>
            <span>
              Complete modular PHP version (<code className="text-[#d4af37] font-mono">index.php</code>, <code className="text-[#d4af37] font-mono">header.php</code>, <code className="text-[#d4af37] font-mono">data.php</code>, etc.) is generated and ready to download!
            </span>
          </div>
          <button
            onClick={() => setPhpModalOpen(true)}
            className="inline-flex items-center gap-1.5 font-bold text-[#d4af37] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Open PHP Source Viewer & Download .ZIP</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </aside>

      {/* Main Top Navigation */}
      <Navbar
        onOpenPhpViewer={() => setPhpModalOpen(true)}
        onOpenBooking={() => {
          setSelectedPubForBooking(null);
          setBookingModalOpen(true);
        }}
        onScrollTo={handleScrollTo}
      />

      {/* Hero Section matching the image */}
      <Hero onExploreClick={() => handleScrollTo('pubs')} />

      {/* 4-Feature Ribbon (Hop, Wine, Cutlery, People) */}
      <FeatureRibbon
        onFeatureClick={(tab) => {
          if (tab === 'drinks') handleScrollTo('drinks');
          else if (tab === 'food') handleScrollTo('food');
          else if (tab === 'community') handleScrollTo('events');
          else handleScrollTo('pubs');
        }}
      />

      {/* 4 Showcase Cards (Our Drinks, Our Pubs, Our Food, Our Events) */}
      <ShowcaseCards onCardSelect={handleShowcaseSelect} />

      {/* Interactive UK Micropubs Directory */}
      <PubLocator onReservePub={handleReservePub} />

      {/* Cellar & Taplist Menu */}
      <CellarMenu />

      {/* Artisan Food & Bar Bites */}
      <ArtisanFood />

      {/* Acoustic Sessions & Events Calendar */}
      <EventsSection onRsvpEvent={handleRsvpEvent} />

      {/* The Micropub Movement Manifesto & Heritage */}
      <OurStory />

      {/* Site Footer */}
      <Footer
        onOpenPhpViewer={() => setPhpModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Snug Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedPub={selectedPubForBooking}
      />

      {/* PHP Code Viewer & Exporter Modal */}
      <PhpCodeViewerModal
        isOpen={phpModalOpen}
        onClose={() => setPhpModalOpen(false)}
      />

    </main>
  );
}
