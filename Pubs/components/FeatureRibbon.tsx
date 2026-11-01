'use client';

import React from 'react';
import { Wine, UtensilsCrossed, Users } from 'lucide-react';

interface FeatureRibbonProps {
  onFeatureClick: (tab: 'drinks' | 'food' | 'community' | 'pubs') => void;
}

export function FeatureRibbon({ onFeatureClick }: FeatureRibbonProps) {
  return (
    <section className="bg-[#08120e] border-b border-[#d4af37]/30 py-5 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/25">
          
          {/* Feature 1: Real Ales & Craft Beer */}
          <button
            onClick={() => onFeatureClick('drinks')}
            className="flex items-center justify-center sm:justify-start gap-4 py-3 md:py-1 px-2 sm:px-5 group cursor-pointer text-left focus:outline-none"
          >
            {/* Custom Hop Leaf SVG Icon */}
            <div className="text-[#d4af37] group-hover:scale-110 transition-transform flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.8">
                <path d="M12 2v4m0 0a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4zm-4 4a6 6 0 0 0-4 6c0 3.3 2.7 6 6 6m8-12a6 6 0 0 1 4 6c0 3.3-2.7 6-6 6m-4 0v4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#d4af37] leading-tight">
                REAL ALES
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.1em] text-[#ded8cb] leading-tight">
                & CRAFT BEER
              </span>
            </div>
          </button>

          {/* Feature 2: Fine Wines & Spirits */}
          <button
            onClick={() => onFeatureClick('drinks')}
            className="flex items-center justify-center sm:justify-start gap-4 py-3 md:py-1 px-2 sm:px-5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="text-[#d4af37] group-hover:scale-110 transition-transform flex-shrink-0">
              <Wine className="w-8 h-8 stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#d4af37] leading-tight">
                FINE WINES
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.1em] text-[#ded8cb] leading-tight">
                & SPIRITS
              </span>
            </div>
          </button>

          {/* Feature 3: Great Food & Snacks */}
          <button
            onClick={() => onFeatureClick('food')}
            className="flex items-center justify-center sm:justify-start gap-4 py-3 md:py-1 px-2 sm:px-5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="text-[#d4af37] group-hover:scale-110 transition-transform flex-shrink-0">
              <UtensilsCrossed className="w-8 h-8 stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#d4af37] leading-tight">
                GREAT FOOD
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.1em] text-[#ded8cb] leading-tight">
                & SNACKS
              </span>
            </div>
          </button>

          {/* Feature 4: Local Community & Events */}
          <button
            onClick={() => onFeatureClick('community')}
            className="flex items-center justify-center sm:justify-start gap-4 py-3 md:py-1 px-2 sm:px-5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="text-[#d4af37] group-hover:scale-110 transition-transform flex-shrink-0">
              <Users className="w-8 h-8 stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#d4af37] leading-tight">
                LOCAL COMMUNITY
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.1em] text-[#ded8cb] leading-tight">
                & EVENTS
              </span>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
