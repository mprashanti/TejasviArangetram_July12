import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Heart, MapPin, Gift, AlertCircle, Sparkles } from 'lucide-react';
import { BlessingMessage } from '../types';
import TraditionArtwork from './TraditionArtwork';

const FLOWER_OPTIONS = [
  { id: 'lotus', name: 'Pink Lotus', meaning: 'Spiritual Purity & Devotion' },
  { id: 'marigold', name: 'Gold Marigold', meaning: 'Auspicious Joy & Radiance' },
  { id: 'jasmine', name: 'White Jasmine', meaning: 'Grace, Purity & Artistic Elegance' },
  { id: 'rose', name: 'Royal Red Rose', meaning: 'Deep Love & Lifetime Admiration' },
];

const PRE_SEEDED_BLESSINGS: BlessingMessage[] = [
  {
    id: 'seed-1',
    name: 'Aunty Sarita & Uncle Rajesh',
    city: 'Boston, MA',
    message: 'Dearest Tejasvi, we are so incredibly proud of your years of relentless discipline and focus! This Arangetram is a culmination of your pure devotion and grace. You look absolutely radiant. Wishing you limitless joy and success on your beautiful path!',
    flowerType: 'lotus',
    timestamp: '2026-06-10T12:00:00Z',
  },
  {
    id: 'seed-2',
    name: 'The Srinivasan Family',
    city: 'Rochester, NY',
    message: 'Guru Srimathi Parvatha’s elite mentoring shines so visibly in your incredible footwork and expressive eyes, Tejasvi. What a deeply moving and soulful debut. Our heartiest congratulations to Vijay and Jayashri as well!',
    flowerType: 'marigold',
    timestamp: '2026-06-10T14:30:00Z',
  },
  {
    id: 'seed-3',
    name: 'Ananya S. & Ramesh (Pratibha School)',
    city: 'Rochester, NY',
    message: 'We are completely awestruck! You are pure magic on stage, Tejasvi. We know the endless late-night practice jams you spent on this, and every second was worth it. May the Divine keep showering blessings on your artistic journey!',
    flowerType: 'jasmine',
    timestamp: '2026-06-10T21:15:00Z',
  },
];

export default function Guestbook() {
  const [blessings, setBlessings] = useState<BlessingMessage[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    message: '',
    flowerType: 'lotus',
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [error, setError] = useState('');

  // Hydrate from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('arangetram_blessings');
      if (stored) {
        setBlessings(JSON.parse(stored));
      } else {
        setBlessings(PRE_SEEDED_BLESSINGS);
        localStorage.setItem('arangetram_blessings', JSON.stringify(PRE_SEEDED_BLESSINGS));
      }
    } catch (_) {
      setBlessings(PRE_SEEDED_BLESSINGS);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectFlower = (flowerId: string) => {
    setFormData(prev => ({
      ...prev,
      flowerType: flowerId,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please provide your name or family name.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please write a loving blessing or message.');
      return;
    }

    setSubmitting(true);

    const newBlessing: BlessingMessage = {
      id: `blessing-${Date.now()}`,
      name: formData.name.trim(),
      city: formData.city.trim() || 'Well-wisher',
      message: formData.message.trim(),
      flowerType: formData.flowerType,
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      const updated = [newBlessing, ...blessings];
      setBlessings(updated);
      try {
        localStorage.setItem('arangetram_blessings', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save to local storage: ', err);
      }

      setFormData({
        name: '',
        city: '',
        message: '',
        flowerType: 'lotus',
      });
      setSubmitting(false);
      setShowSplash(true);

      // Dismiss floral shower splash after 3.5 seconds
      setTimeout(() => {
        setShowSplash(false);
      }, 3500);
    }, 800);
  };

  return (
    <section id="guestbook" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Auspicious Wishes</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Guestbook & Shubhakamana
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
          <p className="text-sm text-slate-400 font-sans max-w-md mx-auto">
            Offer a traditional virtual flower and leave some loving blessings or messages for the young debutante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Post Blessings Form Card */}
          <div className="lg:col-span-5 bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="font-serif font-bold text-xl text-[#c5a059] mb-2 flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#c5a059]" />
              <span>Leave a Blessing</span>
            </h3>
            <p className="text-xs text-slate-400 font-sans mb-6">
              Your words will be cherished and saved forever as a beautiful memory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="block text-xs uppercase font-mono font-bold text-[#e5e5e5] mb-1.5">
                  Name / Family Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Uncle Suresh & Family"
                  className="w-full bg-[#0a0a0a] border border-[#c5a059]/20 text-[#e5e5e5] focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-xl px-4 py-3 text-sm transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono font-bold text-[#e5e5e5] mb-1.5">
                  Your City / Location
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g., Rochester, NY"
                  className="w-full bg-[#0a0a0a] border border-[#c5a059]/20 text-[#e5e5e5] focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-xl px-4 py-3 text-sm transition-all outline-none"
                />
              </div>

              {/* Special interactive flower picking buttons */}
              <div>
                <label className="block text-xs uppercase font-mono font-bold text-[#e5e5e5] mb-2">
                  Select a Sacred Blessing Flower Offering
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FLOWER_OPTIONS.map(fl => {
                    const isSelected = formData.flowerType === fl.id;
                    return (
                      <button
                        type="button"
                        key={fl.id}
                        onClick={() => handleSelectFlower(fl.id)}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-[#c5a059]/10 border-[#c5a059] ring-1 ring-[#c5a059]'
                            : 'bg-[#0a0a0a] hover:bg-white/5 border-white/10'
                        }`}
                      >
                        <span className={`font-serif text-xs font-bold ${isSelected ? 'text-[#c5a059]' : 'text-neutral-400'}`}>
                          {fl.name}
                        </span>
                        <span className="text-[9px] text-zinc-500 font-sans mt-1 leading-tight line-clamp-1">{fl.meaning}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono font-bold text-[#e5e5e5] mb-1.5">
                  Your Loving Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write congratulations, appreciation for her years of practice, or warm blessings for her big day..."
                  className="w-full bg-[#0a0a0a] border border-[#c5a059]/20 text-[#e5e5e5] focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                />
              </div>

              {error && (
                <div className="bg-rose-950/40 text-rose-300 text-xs p-3 rounded-xl flex items-center gap-2 border border-rose-900/50">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#c5a059] hover:bg-[#b08b46] text-black font-sans font-semibold uppercase tracking-widest text-xs py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>Sending blessings...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Post Blessing Recital</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Live scroll overflow of postings */}
          <div className="lg:col-span-7 space-y-4 max-h-[640px] overflow-y-auto pr-2 custom-scroll">
            <h3 className="font-serif font-bold text-xl text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between text-left">
              <span>Messages & Blessings Board</span>
              <span className="bg-[#c5a059]/10 text-[#c5a059] font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-[#c5a059]/20">
                {blessings.length} Subhakamana
              </span>
            </h3>

            <AnimatePresence initial={false}>
              {blessings.map((bless, idx) => (
                <motion.div
                  key={bless.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#151515] border border-[#c5a059]/15 rounded-2xl p-6 shadow-md relative overflow-hidden flex items-start gap-4 text-left"
                >
                  <div className="w-12 h-12 rounded-full border border-[#c5a059]/20 bg-[#0a0a0a] shrink-0 p-1">
                    {/* Render matching flower as virtual offering */}
                    <TraditionArtwork
                      type={bless.flowerType === 'rose' ? 'lotus' : bless.flowerType === 'jasmine' ? 'peacock' : bless.flowerType === 'marigold' ? 'diya' : 'lotus'}
                      className="w-full h-full animate-pulse"
                    />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-serif font-bold text-white text-base">{bless.name}</h4>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                        <MapPin className="w-3 h-3 text-[#c5a059]" />
                        <span className="text-slate-400">{bless.city}</span>
                      </div>
                    </div>

                    <p className="font-serif text-sm text-slate-300 leading-relaxed italic pr-4">
                      "{bless.message}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                      <span>Offered a virtual {bless.flowerType}</span>
                      <span>
                        {new Date(bless.timestamp).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {blessings.length === 0 && (
              <div className="text-center py-12 text-neutral-400 font-serif">
                Be the first to leave a beautiful blessing for Tejasvi!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flower petals celebration splash! */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 blur-0 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="relative p-8 md:p-12 max-w-md w-full bg-[#151515] border border-[#c5a059]/50 rounded-3xl text-center shadow-2xl flex flex-col items-center">
              <Sparkles className="w-16 h-16 text-[#c5a059] mb-6 animate-pulse" />
              <h3 className="font-serif font-bold text-3xl text-white mb-2">Blessing Received!</h3>
              <p className="text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-6">Archived at the lotus feet</p>
              
              <div className="w-32 h-32 mb-6">
                <TraditionArtwork type="lotus" className="w-full h-full animate-bounce" />
              </div>

              <p className="text-sm font-serif text-neutral-300 leading-relaxed mb-6 italic">
                “Flowers of pure devotion and loving intentions have been placed upon the stage. Thank you immensely for your participation.”
              </p>

              <button
                onClick={() => setShowSplash(false)}
                className="bg-[#c5a059] hover:bg-[#b08b46] text-black px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Altar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
