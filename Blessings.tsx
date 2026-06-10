import React from 'react';
import { motion } from 'motion/react';
import TraditionArtwork from './TraditionArtwork';

export default function Blessings() {
  return (
    <section id="blessings" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative overflow-hidden">
      {/* Decorative gold background icons */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>

      <div className="w-full max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Spiritual Foundations</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Divine Blessings
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto mb-4" />
          <p className="font-serif italic text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            “This Arangetram is offered in absolute devotion at the lotus feet of our beloved spiritual gurus.”
          </p>
        </div>

        {/* Altar grids featuring the two spiritual figures side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Guru 1: Sri Sathya Sai Baba */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square max-w-sm rounded-3xl bg-[#151515] p-6 shadow-2xl border border-[#c5a059]/25 hover:border-[#c5a059]/50 transition-all">
              <TraditionArtwork type="sai_baba_alt" className="w-full h-full" />
            </div>
          </motion.div>

          {/* Guru 2: Kanchi Mahaperiyava */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square max-w-sm rounded-3xl bg-[#151515] p-6 shadow-2xl border border-[#c5a059]/25 hover:border-[#c5a059]/50 transition-all">
              <TraditionArtwork type="sage_alt" className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
