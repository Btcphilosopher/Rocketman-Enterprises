'use client';

import React, { useState } from 'react';
import { Beer, Heart, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenPhpViewer: () => void;
  onScrollTo: (sectionId: string) => void;
}

export function Footer({ onOpenPhpViewer, onScrollTo }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050b07] border-t border-[#d4af37]/25 pt-16 pb-12 text-[#a8a192]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-[#d4af37] mb-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current" strokeWidth="1.8">
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
              </svg>
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                THE MICROPUB COLLECTIVE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8f887a] leading-relaxed mb-5">
              Honouring the British micropub philosophy: simple conversation, pristine independent cask ales, no electronics or fruit machines, and genuine community hospitality.
            </p>

            <div className="inline-block border border-[#d4af37]/40 bg-[#0c1811] px-3.5 py-1.5 rounded text-[11px] font-semibold text-[#d4af37]">
              <span>Proud Supporter of CAMRA & Independent British Breweries</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#d4af37] uppercase mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollTo('pubs')} className="hover:text-white transition-colors cursor-pointer">
                  Our Pubs Directory
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('drinks')} className="hover:text-white transition-colors cursor-pointer">
                  Ales & Cellar List
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('food')} className="hover:text-white transition-colors cursor-pointer">
                  Artisan Food Menu
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('events')} className="hover:text-white transition-colors cursor-pointer">
                  Live Folk & Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('story')} className="hover:text-white transition-colors cursor-pointer">
                  Micropub Movement History
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Traditions Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#d4af37] uppercase mb-4">
              OPENING TRADITIONS
            </h4>
            <div className="space-y-1.5 text-xs text-[#beb7a6]">
              <p><strong>Wed - Fri:</strong> 12:00 - 22:30</p>
              <p><strong>Saturday:</strong> 11:30 - 23:00</p>
              <p><strong>Sunday Session:</strong> 12:00 - 20:30</p>
              <p className="text-[11px] text-[#736c5f] italic pt-1">
                Closed Mondays & Tuesdays for cellar conditioning & rest.
              </p>
            </div>
          </div>

          {/* Tasting Cellar Dispatch Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#d4af37] uppercase mb-3">
              THE TASTING CELLAR
            </h4>
            <p className="text-xs text-[#8f887a] mb-3">
              Subscribe for guest cask announcements, seasonal perry releases, and folk session dates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-[#0b1410] border border-[#233d2e] rounded px-3 py-1.5 text-xs text-white placeholder-[#78857c] focus:outline-none focus:border-[#d4af37] flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] hover:bg-[#faeed1] text-[#09130e] px-3.5 py-1.5 rounded text-xs font-bold tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  JOIN
                </button>
              </form>
            ) : (
              <p className="text-xs text-[#d4af37] font-medium">
                ✓ Cheers! You are subscribed to our monthly cellar dispatches.
              </p>
            )}

            <div className="mt-5 pt-3 border-t border-[#16271e]">
              <button
                onClick={onOpenPhpViewer}
                className="flex items-center gap-2 text-xs text-[#d4af37] hover:text-white transition-colors cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>View & Download PHP Project Files (.zip)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-[#16281e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706a5e]">
          <p>
            &copy; {new Date().getFullYear()} The MicroPub Collective Ltd. All rights reserved. Please drink responsibly.
          </p>
          <div className="flex items-center gap-5">
            <span>Cellar Invariants</span>
            <span>·</span>
            <span>CAMRA Charter</span>
            <span>·</span>
            <button onClick={onOpenPhpViewer} className="text-[#d4af37] hover:underline cursor-pointer">
              PHP Backend Code
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
