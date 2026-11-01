'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Users, MapPin, Beer } from 'lucide-react';
import { PUBS_DATA, Pub } from '@/lib/pubData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPub?: Pub | null;
}

export function BookingModal({ isOpen, onClose, preselectedPub }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPubId, setSelectedPubId] = useState(preselectedPub?.id || PUBS_DATA[0].id);
  const [partySize, setPartySize] = useState('2');
  const [dateTime, setDateTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedPub = PUBS_DATA.find((p) => p.id === selectedPubId) || PUBS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0e1c15] border border-[#d4af37]/60 rounded shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#b8b09e] hover:text-white p-1 rounded transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase block mb-1">
                RESERVATIONS & SNUG SEATING
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Reserve a Table or Corner
              </h2>
              <p className="mt-1 text-xs text-[#b8b09e]">
                Micropubs are intimate spaces. We hold a small selection of snug booths and timber tables for reservations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Pub Choice */}
              <div>
                <label className="block text-[#ded8cb] font-semibold mb-1">
                  Select Micropub Venue *
                </label>
                <select
                  value={selectedPubId}
                  onChange={(e) => setSelectedPubId(e.target.value)}
                  className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {PUBS_DATA.map((pub) => (
                    <option key={pub.id} value={pub.id}>
                      {pub.name} — {pub.town}, {pub.county}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#ded8cb] font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Thomas Hardy"
                    className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-[#ded8cb] font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="thomas@example.co.uk"
                    className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Party Size & Date/Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#ded8cb] font-semibold mb-1">
                    Party Size (Intimate venues)
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="1">1 Person (Quiet corner)</option>
                    <option value="2">2 Persons (Table for two)</option>
                    <option value="4">4 Persons (Snug booth)</option>
                    <option value="6">6 Persons (Maximum gathering)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#ded8cb] font-semibold mb-1">
                    Date & Approximate Time *
                  </label>
                  <input
                    type="text"
                    required
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    placeholder="e.g. Friday 7pm"
                    className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[#ded8cb] font-semibold mb-1">
                  Contact Telephone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07..."
                  className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[#ded8cb] font-semibold mb-1">
                  Special Notes / Ale Preferences
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Bringing a dog, celebrating a birthday, or wishing to taste dark milds..."
                  className="w-full bg-[#08120e] border border-[#233d2e] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#faedd0] text-[#09130e] font-bold text-xs tracking-wider py-3 rounded transition-colors cursor-pointer"
                >
                  CONFIRM SNUG RESERVATION REQUEST
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Cheers, {name}!
            </h3>
            <p className="text-xs text-[#b8b09e] max-w-sm mx-auto mb-5 leading-relaxed">
              Your snug reservation request for <strong>{partySize} guests</strong> at <strong>{selectedPub.name}</strong> on <strong>{dateTime}</strong> has been logged with the cellar master.
            </p>
            <div className="bg-[#08120e] border border-[#1b3325] p-4 rounded text-left text-xs text-[#ded8cb] max-w-sm mx-auto mb-6">
              <div className="flex items-center gap-2 mb-1 text-[#d4af37]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-bold">{selectedPub.address}, {selectedPub.town}</span>
              </div>
              <div className="text-[#a49e8f]">Direct telephone: {selectedPub.phone}</div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-[#d4af37] text-[#09130e] font-bold text-xs rounded tracking-wider"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
