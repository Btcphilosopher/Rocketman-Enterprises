'use client';

import React from 'react';
import { EVENTS_DATA, PubEvent } from '@/lib/pubData';
import { Calendar, MapPin, Clock, Music } from 'lucide-react';

interface EventsSectionProps {
  onRsvpEvent: (event: PubEvent) => void;
}

export function EventsSection({ onRsvpEvent }: EventsSectionProps) {
  return (
    <section id="events" className="bg-[#0b1510] py-16 sm:py-24 border-b border-[#1b3325]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-2">
            WHAT’S ON & GATHERINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Events & Acoustic Sessions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#b8b09e] font-light leading-relaxed">
            Unamplified folk melodies, pen-and-paper pub quizzes, and brewer-hosted tasting evenings.
          </p>
        </div>

        {/* 2-Column Split: Events List & Policy Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Events Cards */}
          <div className="lg:col-span-7 space-y-5">
            {EVENTS_DATA.map((event) => (
              <article
                key={event.id}
                className="bg-[#0e1c15] border border-[#1b3325] hover:border-[#d4af37]/70 p-6 rounded transition-all shadow-md flex flex-col sm:flex-row gap-5 items-start"
              >
                {/* Date badge */}
                <div className="bg-[#08120e] border border-[#d4af37]/40 px-4 py-3 rounded text-center shrink-0 w-full sm:w-32">
                  <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase block">
                    {event.category}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-white block mt-1">
                    {event.date}
                  </span>
                  <span className="text-[11px] text-[#a49e8f] block mt-0.5">
                    {event.time}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs text-[#d4af37] mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.pubName} ({event.location})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#b8b09e] leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <button
                    onClick={() => onRsvpEvent(event)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#d4af37] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>RESERVE SEAT / FREE RSVP</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Traditional Unplugged Manifesto */}
          <div className="lg:col-span-5 bg-[#0e1c15] border border-[#1b3325] rounded overflow-hidden shadow-xl">
            <div className="h-56 overflow-hidden">
              <img
                src="/images/events.jpg"
                alt="Acoustic session in micropub"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-7">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-1.5">
                TRADITION FIRST
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Strictly Acoustic & Electronic-Free
              </h3>
              <p className="text-xs sm:text-sm text-[#b8b09e] leading-relaxed mb-4">
                In line with the 2005 founding micropub charter, none of our collective pubs permit fruit machines, jukeboxes, or television screens.
              </p>
              <p className="text-xs sm:text-sm text-[#b8b09e] leading-relaxed mb-5">
                Our musical sessions rely on the raw acoustics of wooden beams and brick hearths. Musicians and listeners sit side by side as friends.
              </p>
              <div className="pt-4 border-t border-[#182b20] text-xs text-[#ded8cb]">
                <strong className="text-[#d4af37] block mb-1">Perform at Our Venues:</strong>
                <p className="text-[#a49e8f]">Are you a folk duo, acoustic player, or traditional balladeer? Reach out to any venue landlord directly.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
