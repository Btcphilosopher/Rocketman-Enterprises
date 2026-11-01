'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Beer, Award } from 'lucide-react';

export function OurStory() {
  return (
    <section id="story" className="bg-[#08120e] py-16 sm:py-24 border-b border-[#1b3325]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-2">
              HERITAGE & MANIFESTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Small Spaces. Mighty Conversations.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#b8b09e] font-light leading-relaxed">
              <p>
                The modern micropub movement was born in 2005 when <strong className="text-white font-medium">Martyn Hillier</strong> opened <em className="text-[#d4af37]">The Butchers Arms</em> in Herne, Kent. His principle was revolutionary in its simplicity: a small, one-room freehouse focused entirely on quality real ale and lively human interaction.
              </p>
              <p>
                At <strong className="text-white font-medium">The MicroPub Collective</strong>, we unite the very finest independent micropubs across Britain. You won&apos;t find loud televisions blaring sports, noisy slot machines, or mass-produced industrial lager. Instead, you&apos;ll discover pristine cellar-conditioned casks, craft farmhouse ciders, and friends you haven&apos;t met yet.
              </p>
              <p>
                Our landlords pour by gravity directly from the stillage room or through authentic hand-pumps. Each pint is served with respect for the craft and the local community it sustains.
              </p>
            </div>

            {/* Principles Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#182b20]">
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-[#d4af37] block">100%</span>
                <span className="text-xs text-[#ded8cb] mt-1 block">Independent Brewers</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-[#d4af37] block">0</span>
                <span className="text-xs text-[#ded8cb] mt-1 block">Fruit Machines / TVs</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-[#d4af37] block">18+</span>
                <span className="text-xs text-[#ded8cb] mt-1 block">CAMRA Accolades</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-[#d4af37] block">11°C</span>
                <span className="text-xs text-[#ded8cb] mt-1 block">Cellar Conditioning</span>
              </div>
            </div>
          </div>

          {/* Right Column Image & Quote */}
          <div className="lg:col-span-5">
            <div className="relative rounded overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#0e1c15]">
              <img
                src="/images/interior.jpg"
                alt="Cozy tavern snug interior"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c15] via-[#0e1c15]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-[#09130e]/95 border border-[#d4af37]/30 p-4 rounded text-xs text-[#ded8cb] backdrop-blur-sm">
                <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-widest block mb-1">
                  The Micropub Oath
                </span>
                <p className="italic font-serif text-sm text-[#faedd0]">
                  “A micropub is a small freehouse which listens to its customers, mainly serves cask ale, promotes conversation, and shuns all forms of electronic entertainment.”
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
