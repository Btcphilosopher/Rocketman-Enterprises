'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden border-b border-[#d4af37]/30">
      {/* Background Photography with atmospheric dark green & amber vignette scrim */}
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-right-bottom scale-100 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9, 19, 14, 0.94) 0%, rgba(9, 19, 14, 0.78) 40%, rgba(9, 19, 14, 0.35) 75%, rgba(9, 19, 14, 0.75) 100%), url('/images/hero.jpg')`,
        }}
        aria-hidden="true"
      />

      {/* Atmospheric warm light glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09130e] via-transparent to-transparent pointer-events-none" />

      {/* Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hero Lockup */}
          <div className="lg:col-span-8 max-w-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-white tracking-tight leading-[1.05] drop-shadow-md">
              Small Pubs. <br />
              <span className="relative inline-block pb-3">
                Big Character.
                {/* Signature Gold Underline Accent */}
                <span className="absolute bottom-0 left-0 w-24 sm:w-28 h-1 bg-[#d4af37]" />
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#ded9ce] font-light leading-relaxed max-w-xl drop-shadow-sm">
              A collection of outstanding micropubs across the UK, celebrating great drinks, local community and British hospitality.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#e6c15c] via-[#d4af37] to-[#b98a22] text-[#0d1813] font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-xs shadow-lg hover:shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>EXPLORE OUR PUBS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Traditional Chalkboard Sign */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative group rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Outer Timber Frame */}
              <div className="bg-[#2a1a0f] p-3 rounded shadow-2xl border-4 border-[#180f08] ring-1 ring-white/10">
                {/* Chalkboard Texture */}
                <div className="bg-[#1c211f] border border-[#37413d] px-7 py-9 sm:py-11 rounded-xs text-center min-w-[210px] sm:min-w-[240px] shadow-inner">
                  <div className="space-y-3 font-serif italic text-2xl sm:text-[1.7rem] text-[#f2f4f3] tracking-wide text-shadow">
                    <p className="hover:text-[#faeed1] transition-colors">Real Ales</p>
                    <p className="hover:text-[#faeed1] transition-colors">Craft Beer</p>
                    <p className="hover:text-[#faeed1] transition-colors">Fine Wines</p>
                    <p className="hover:text-[#faeed1] transition-colors">Great Food</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
