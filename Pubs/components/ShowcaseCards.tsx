'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ShowcaseCardsProps {
  onCardSelect: (section: 'drinks' | 'pubs' | 'food' | 'events') => void;
}

export function ShowcaseCards({ onCardSelect }: ShowcaseCardsProps) {
  const cards = [
    {
      id: 'drinks' as const,
      title: 'OUR DRINKS',
      description: 'Discover our curated selection of ales, craft beers and fine spirits.',
      actionText: 'LEARN MORE',
      image: '/images/drinks.jpg',
      alt: 'Freshly poured pint of golden cask ale in an embossed crown glass',
    },
    {
      id: 'pubs' as const,
      title: 'OUR PUBS',
      description: 'Find your nearest Micropub Collective venue.',
      actionText: 'FIND A PUB',
      image: '/images/interior.jpg',
      alt: 'Warm and intimate timber snug interior of a traditional British micropub',
    },
    {
      id: 'food' as const,
      title: 'OUR FOOD',
      description: 'Great food, perfectly paired.',
      actionText: 'VIEW MENU',
      image: '/images/food.jpg',
      alt: 'Artisanal Scotch eggs sliced in half with runny golden yolks and mustard',
    },
    {
      id: 'events' as const,
      title: 'OUR EVENTS',
      description: 'Live music, quizzes, tastings and more.',
      actionText: 'SEE WHAT’S ON',
      image: '/images/events.jpg',
      alt: 'Musician playing acoustic guitar at an intimate micropub session',
    },
  ];

  return (
    <section className="bg-[#0b1410] pt-6 pb-12 sm:pb-16 border-b border-[#1f3729]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              onClick={() => onCardSelect(card.id)}
              className="group relative flex flex-col bg-[#0e1c15] border border-[#1d3527] hover:border-[#d4af37]/80 rounded-xs overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
            >
              {/* Card Image Wrap with dark gradient scrim */}
              <div className="relative h-60 sm:h-56 lg:h-64 overflow-hidden bg-[#070e0a]">
                <img
                  src={card.image}
                  alt={card.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c15] via-[#0e1c15]/40 to-transparent opacity-90" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 pt-3">
                <h3 className="font-serif text-lg font-bold tracking-[0.08em] text-[#d4af37] group-hover:text-[#faedd0] transition-colors">
                  {card.title}
                </h3>
                
                <p className="mt-2 text-sm text-[#beb6a4] leading-relaxed flex-grow">
                  {card.description}
                </p>

                <div className="mt-5 pt-3 border-t border-[#182b20] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[#d4af37] group-hover:text-white transition-colors">
                    {card.actionText}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
