'use client';

import React, { useState } from 'react';
import { DRINKS_DATA } from '@/lib/pubData';
import { Beer, Sparkles, CheckCircle2 } from 'lucide-react';

export function CellarMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cask Ale', 'Craft Keg', 'Cider & Perry', 'Fine Wine', 'Artisan Spirits'];

  const filteredDrinks = DRINKS_DATA.filter((drink) => {
    return activeCategory === 'All' || drink.category === activeCategory;
  });

  return (
    <section id="drinks" className="bg-[#0b1510] py-16 sm:py-24 border-b border-[#1b3325]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-2">
            CELLAR & STILLAGE SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Drinks & Cellar List
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#b8b09e] font-light leading-relaxed">
            Conditioned at 11°C–13°C and poured without artificial nitrogen or carbonation. Real ale as it has been enjoyed in Britain for centuries.
          </p>
        </div>

        {/* Quality Charter Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 bg-[#0e1c15] border border-[#1d3829] p-4 rounded text-xs">
          <div className="flex items-center gap-2.5 text-[#ded8cb]">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Living Cask Ales – Unpasteurised & Naturally Conditioned</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#ded8cb]">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Gravity Stillage Pouring Straight from Oak & Steel Barrels</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#ded8cb]">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>100% Fresh Apple Juice English Farmhouse Ciders</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#d4af37] text-[#09130e] font-bold shadow-md'
                  : 'bg-[#12231a] text-[#ded8cb] hover:bg-[#1a3527] hover:text-[#faeed1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Drinks Grid / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredDrinks.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e1c15] border border-[#1b3325] hover:border-[#d4af37]/60 p-5 sm:p-6 rounded transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="bg-[#14281e] border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#d4af37] shrink-0">
                    {item.abv}
                  </span>
                </div>

                <div className="text-xs text-[#d4af37] font-medium mb-3">
                  {item.breweryOrProducer} · <span className="text-[#a49e8f] italic">{item.origin}</span>
                </div>

                <p className="text-xs text-[#b8b09e] leading-relaxed mb-4">
                  {item.notes}
                </p>
              </div>

              <div className="pt-3 border-t border-[#182b20] flex items-center justify-between text-xs">
                <span className="text-[#888173]">Poured in Branded Crown Glass</span>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-[#c8c2b3]">Half: <strong className="text-white">{item.priceHalf}</strong></span>
                  <span className="text-[#c8c2b3]">Pint: <strong className="text-[#d4af37]">{item.pricePint}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
