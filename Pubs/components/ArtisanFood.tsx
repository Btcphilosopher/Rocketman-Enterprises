'use client';

import React from 'react';
import { FOOD_DATA } from '@/lib/pubData';
import { Utensils, Sparkles } from 'lucide-react';

export function ArtisanFood() {
  return (
    <section id="food" className="bg-[#08120e] py-16 sm:py-24 border-b border-[#1b3325]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-2">
            HONEST & ARTISANAL BAR FOOD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Food & Bar Snacks
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#b8b09e] font-light leading-relaxed">
            No greasy deep fryers or industrial microwave dinners. Pure artisanal British fare, handcrafted scotch eggs, and local farmhouse cheeses.
          </p>
        </div>

        {/* Hero Visual Banner with Food */}
        <div className="relative rounded overflow-hidden border border-[#d4af37]/40 mb-12 shadow-2xl h-72 sm:h-96">
          <img
            src="/images/food.jpg"
            alt="Artisanal British Scotch Eggs on Rustic Board"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08120e] via-[#08120e]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 max-w-xl">
            <span className="bg-[#09130e]/90 text-[#d4af37] border border-[#d4af37]/60 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider mb-2 inline-block">
              Fresh Daily
            </span>
            <p className="font-serif italic text-lg sm:text-2xl text-white">
              “Warm crispy crumb, seasoned pork & herb wrap, and a molten golden yolk paired with pungent English mustard.”
            </p>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOOD_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e1c15] border border-[#1b3325] hover:border-[#d4af37]/60 p-6 rounded transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <span className="font-mono text-base font-bold text-[#d4af37] shrink-0">
                    {item.price}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-[#d4af37] tracking-wider uppercase block mb-3">
                  {item.category} {item.vegetarian && '· Vegetarian'}
                </span>

                <p className="text-xs text-[#b8b09e] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="bg-[#08120e] border border-[#182b20] p-3 rounded text-[11px] text-[#ded8cb]">
                <strong className="text-[#d4af37] block mb-0.5">Cellar Pairing:</strong>
                <span>{item.pairing}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
