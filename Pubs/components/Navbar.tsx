'use client';

import React, { useState } from 'react';
import { MapPin, Code2, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenPhpViewer: () => void;
  onOpenBooking: () => void;
  onScrollTo: (sectionId: string) => void;
}

export function Navbar({ onOpenPhpViewer, onOpenBooking, onScrollTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pubDropdownOpen, setPubDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollTo(sectionId);
    setMobileMenuOpen(false);
    setPubDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#09130e]/95 backdrop-blur-md border-b border-[#d4af37]/25 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Zone - Crown Logo + Wordmark */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
        >
          {/* Traditional Crown Emblem */}
          <div className="w-9 h-9 flex items-center justify-center text-[#d4af37] group-hover:scale-105 transition-transform">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 fill-none stroke-current" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold leading-none">THE</span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-white leading-tight">
              MICROPUB COLLECTIVE
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#d4af37]/90 uppercase leading-none mt-0.5">
              SMALL PUBS. BIG CHARACTER.
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-[0.08em] text-[#e3ded3]">
          {/* Dropdown for Pubs */}
          <div className="relative" onMouseLeave={() => setPubDropdownOpen(false)}>
            <button
              onClick={() => {
                handleNavClick('pubs');
                setPubDropdownOpen(!pubDropdownOpen);
              }}
              onMouseEnter={() => setPubDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors py-1 cursor-pointer"
            >
              OUR PUBS <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>

            {pubDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-[#0e1c15] border border-[#d4af37]/40 rounded shadow-2xl py-2 z-50">
                <button
                  onClick={() => handleNavClick('pubs')}
                  className="w-full text-left px-4 py-2 text-xs text-[#e8e4da] hover:bg-[#162e22] hover:text-[#d4af37] transition-colors"
                >
                  All UK Micropubs
                </button>
                <button
                  onClick={() => handleNavClick('pubs')}
                  className="w-full text-left px-4 py-2 text-xs text-[#e8e4da] hover:bg-[#162e22] hover:text-[#d4af37] transition-colors"
                >
                  Yorkshire & The North
                </button>
                <button
                  onClick={() => handleNavClick('pubs')}
                  className="w-full text-left px-4 py-2 text-xs text-[#e8e4da] hover:bg-[#162e22] hover:text-[#d4af37] transition-colors"
                >
                  Kent & The South East
                </button>
                <button
                  onClick={() => handleNavClick('pubs')}
                  className="w-full text-left px-4 py-2 text-xs text-[#e8e4da] hover:bg-[#162e22] hover:text-[#d4af37] transition-colors"
                >
                  Cotswolds & The West
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('story')} 
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap cursor-pointer"
          >
            OUR STORY
          </button>
          <button 
            onClick={() => handleNavClick('drinks')} 
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap cursor-pointer"
          >
            DRINKS & FOOD
          </button>
          <button 
            onClick={() => handleNavClick('events')} 
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap cursor-pointer"
          >
            EVENTS
          </button>
          <button 
            onClick={() => handleNavClick('story')} 
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap cursor-pointer"
          >
            NEWS
          </button>
          <button 
            onClick={onOpenBooking} 
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Zone Actions */}
        <div className="flex items-center gap-3">
          {/* PHP Code & Download Button (Responding to "make this in PHP") */}
          <button
            onClick={onOpenPhpViewer}
            className="flex items-center gap-2 bg-[#14281f] hover:bg-[#1c382b] text-[#d4af37] border border-[#d4af37]/60 hover:border-[#d4af37] px-3.5 py-1.5 rounded text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
            title="Inspect, copy, or download the full PHP version of this site"
          >
            <Code2 className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden sm:inline">PHP SOURCE CODE</span>
            <span className="sm:hidden">PHP</span>
          </button>

          {/* Find a Pub Gold Outlined CTA Button */}
          <button
            onClick={() => handleNavClick('pubs')}
            className="flex items-center gap-2 border border-[#d4af37] bg-transparent hover:bg-[#d4af37] text-[#d4af37] hover:text-[#0b1410] px-4 py-2 rounded text-xs font-bold tracking-widest transition-all cursor-pointer whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5 fill-current" />
            <span>FIND A PUB</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d4af37] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1812] border-b border-[#d4af37]/30 px-6 py-5 flex flex-col gap-4 text-sm font-medium tracking-wider">
          <button
            onClick={() => handleNavClick('pubs')}
            className="text-left py-2 text-[#e3ded3] hover:text-[#d4af37] border-b border-[#1b3325]"
          >
            OUR PUBS (UK DIRECTORY)
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="text-left py-2 text-[#e3ded3] hover:text-[#d4af37] border-b border-[#1b3325]"
          >
            OUR STORY & HERITAGE
          </button>
          <button
            onClick={() => handleNavClick('drinks')}
            className="text-left py-2 text-[#e3ded3] hover:text-[#d4af37] border-b border-[#1b3325]"
          >
            DRINKS & FOOD MENUS
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className="text-left py-2 text-[#e3ded3] hover:text-[#d4af37] border-b border-[#1b3325]"
          >
            EVENTS & LIVE ACOUSTIC
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="text-left py-2 text-[#e3ded3] hover:text-[#d4af37] border-b border-[#1b3325]"
          >
            RESERVE A SNUG / CONTACT
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPhpViewer();
            }}
            className="flex items-center gap-2 text-left py-2 text-[#d4af37] font-bold"
          >
            <Code2 className="w-4 h-4" />
            DOWNLOAD FULL PHP SOURCE (.ZIP)
          </button>
        </div>
      )}
    </header>
  );
}
