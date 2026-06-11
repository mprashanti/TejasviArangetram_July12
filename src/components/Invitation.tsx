import React from 'react';
import { motion } from 'motion/react';
import TraditionArtwork from './TraditionArtwork';

export default function Invitation() {
  return (
    <section id="invitation" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative overflow-hidden flex flex-col items-center">
      {/* Background soft floral/mandala graphics */}
      <div className="absolute top-10 left-10 w-48 h-48 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>
      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* Border wrapper for classic Indian invitation card feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#151515] border-2 border-[#c5a059]/40 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Ornamental corner designs */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#c5a059]" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#c5a059]" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#c5a059]" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#c5a059]" />

          {/* Diya above invitations */}
          <div className="mx-auto w-20 h-20 mb-6">
            <TraditionArtwork type="diya" className="w-full h-full text-[#c5a059]" />
          </div>

          <span className="block text-[#c5a059] font-serif text-lg md:text-xl font-medium tracking-widest uppercase mb-4">
            A Celebration of Tradition
          </span>

          <div className="w-32 h-[1px] bg-[#c5a059]/40 mx-auto mb-8" />

          {/* Invitation Wording */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="font-serif text-base md:text-lg text-slate-300 leading-relaxed font-light italic">
              With the blessings of God, our spiritual guides, and our elders,
              we cordially invite you to the Bharatanatyam Arangetram of our beloved daughter,
            </p>

            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#c5a059] tracking-wide my-6 drop-shadow-[0_1px_10px_rgba(197,160,89,0.15)]">
              Tejasvi Vijay
            </h3>

            <p className="font-serif text-base md:text-lg text-slate-300 leading-relaxed font-light">
              Your presence as she debuts on the sacred stage will be a source of great joy, motivation, and blessings for our family as she takes this significant step in her artistic journey.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-[#c5a059]/30 mx-auto my-8" />

          {/* Parents Hosts Footer */}
          <div className="space-y-2 mt-6">
            <p className="text-xs uppercase font-mono tracking-widest text-[#c5a059] font-semibold">With Warm Warm Wishes from</p>
            <p className="text-lg md:text-2xl font-serif font-semibold text-white tracking-wider">
              Vijay Krishnamoorthy & Jayashri Bhaskar
            </p>
            <p className="text-xs text-slate-500 font-mono tracking-wide mt-1 uppercase">Rochester, New York</p>
          </div>

          {/* Interactive Flowers on invitation */}
          <div className="absolute -bottom-8 left-12 w-20 h-20 opacity-20">
            <TraditionArtwork type="lotus" />
          </div>
          <div className="absolute -bottom-8 right-12 w-20 h-20 opacity-20">
            <TraditionArtwork type="lotus" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
