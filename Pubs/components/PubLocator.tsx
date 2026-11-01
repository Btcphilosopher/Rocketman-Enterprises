'use client';

import React, { useState, useMemo } from 'react';
import { PUBS_DATA, Pub } from '@/lib/pubData';
import { MapPin, Phone, Clock, Beer, Sparkles, Dog, Trees, Search } from 'lucide-react';

interface PubLocatorProps {
  onReservePub: (pub: Pub) => void;
}

export function PubLocator({ onReservePub }: PubLocatorProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [dogFriendlyOnly, setDogFriendlyOnly] = useState<boolean>(false);
  const [beerGardenOnly, setBeerGardenOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'Yorkshire', 'Kent', 'Cotswolds', 'Peak District'];

  const filteredPubs = useMemo(() => {
    return PUBS_DATA.filter((pub) => {
      const matchesRegion = selectedRegion === 'All' || pub.region === selectedRegion;
      const matchesDog = !dogFriendlyOnly || pub.dogFriendly;
      const matchesGarden = !beerGardenOnly || pub.beerGarden;
      const matchesSearch =
        searchQuery === '' ||
        pub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.postcode.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesRegion && matchesDog && matchesGarden && matchesSearch;
    });
  }, [selectedRegion, dogFriendlyOnly, beerGardenOnly, searchQuery]);

  return (
    <section id="pubs" className="bg-[#08120e] py-16 sm:py-24 border-b border-[#1b3325]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-2">
            UK SANCTUARIES & VENUES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Micropub Collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#b8b09e] font-light leading-relaxed">
            Every micropub in our collective is dedicated to gravity-fed stillage, real cask conditioning, and the art of conversation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0e1c15] border border-[#1e382a] p-4 sm:p-5 rounded mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Region Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    selectedRegion === region
                      ? 'bg-[#d4af37] text-[#09130e] shadow-sm font-bold'
                      : 'bg-[#13261c] text-[#ded8cb] hover:bg-[#1a3527] hover:text-[#faeed1]'
                  }`}
                >
                  {region} {region === 'All' ? `(${PUBS_DATA.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search Input & Toggles */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              {/* Search Bar */}
              <div className="relative flex-grow md:flex-grow-0 min-w-[200px]">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#d4af37]" />
                <input
                  type="text"
                  placeholder="Search town, pub, postcode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#08120e] border border-[#233d2e] rounded pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#78857c] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Toggles */}
              <button
                onClick={() => setDogFriendlyOnly(!dogFriendlyOnly)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors cursor-pointer border ${
                  dogFriendlyOnly
                    ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#faedd0]'
                    : 'border-[#233d2e] bg-[#13261c] text-[#a49e8f] hover:text-white'
                }`}
              >
                <Dog className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Dogs Welcome</span>
              </button>

              <button
                onClick={() => setBeerGardenOnly(!beerGardenOnly)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors cursor-pointer border ${
                  beerGardenOnly
                    ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#faedd0]'
                    : 'border-[#233d2e] bg-[#13261c] text-[#a49e8f] hover:text-white'
                }`}
              >
                <Trees className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Courtyard / Garden</span>
              </button>
            </div>

          </div>
        </div>

        {/* Pubs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPubs.map((pub) => (
            <article
              key={pub.id}
              className="bg-[#0e1c15] border border-[#1c3527] hover:border-[#d4af37]/70 rounded overflow-hidden shadow-xl transition-all flex flex-col group"
            >
              {/* Image & Award Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#070e0a]">
                <img
                  src={pub.image}
                  alt={pub.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c15] via-[#0e1c15]/30 to-transparent" />
                
                {/* CAMRA Award Badge */}
                <div className="absolute top-4 left-4 bg-[#09130e]/90 border border-[#d4af37] px-3 py-1 rounded text-[11px] font-bold text-[#d4af37] tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>{pub.camraAward}</span>
                </div>

                {/* Stillage & Cider Pill */}
                <div className="absolute bottom-4 right-4 bg-[#09130e]/90 border border-[#2a4837] px-3 py-1 rounded text-xs text-[#faedd0] flex items-center gap-3 backdrop-blur-sm">
                  <span className="flex items-center gap-1">
                    <Beer className="w-3.5 h-3.5 text-[#d4af37]" />
                    <strong className="text-[#d4af37]">{pub.caskLines}</strong> Cask Lines
                  </span>
                  <span className="text-[#2a4837]">|</span>
                  <span>
                    <strong className="text-[#d4af37]">{pub.ciderCount}</strong> Ciders
                  </span>
                </div>
              </div>

              {/* Pub Details Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
                      {pub.region} · {pub.county}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                      {pub.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs italic text-[#c5bea8] mb-3">
                  “{pub.tagline}”
                </p>

                <p className="text-sm text-[#b8b09e] leading-relaxed mb-5">
                  {pub.description}
                </p>

                {/* Live Tap Board */}
                <div className="bg-[#09130e] border border-[#1b3325] p-3.5 rounded mb-5">
                  <div className="text-[11px] font-bold tracking-wider text-[#d4af37] uppercase mb-2 flex items-center gap-1.5">
                    <Beer className="w-3.5 h-3.5" />
                    <span>Pouring Today by Gravity:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {pub.currentAles.map((ale, i) => (
                      <div key={i} className="flex items-center justify-between text-[#ded8cb] bg-[#11231a] px-2.5 py-1.5 rounded">
                        <span className="font-medium truncate mr-2">{ale.name}</span>
                        <span className="font-mono text-[#d4af37] shrink-0">{ale.abv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Info: Address, Hours, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#a69f8e] mb-6 pt-3 border-t border-[#182b20]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{pub.address}, {pub.town} ({pub.postcode})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{pub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Mon-Fri: {pub.openingHours.weekdays} · Sat: {pub.openingHours.saturday} · Sun: {pub.openingHours.sunday}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#182b20]">
                  <button
                    onClick={() => onReservePub(pub)}
                    className="bg-[#d4af37] hover:bg-[#faedd0] text-[#09130e] font-bold text-xs tracking-wider px-5 py-2.5 rounded transition-colors cursor-pointer"
                  >
                    RESERVE A SNUG TABLE
                  </button>
                  <span className="text-xs text-[#a69f8e]">
                    {pub.dogFriendly ? '🐕 Dogs Welcome' : 'Snug Only'} · {pub.beerGarden ? '🌿 Courtyard' : 'Traditional Snug'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center py-16 bg-[#0e1c15] border border-[#1e382a] rounded p-8">
            <p className="text-lg text-[#ded8cb] font-serif">No micropubs found matching your selected filters.</p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setDogFriendlyOnly(false);
                setBeerGardenOnly(false);
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#d4af37] text-[#09130e] font-bold text-xs rounded tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
