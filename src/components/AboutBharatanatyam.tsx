import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Heart, Activity } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';

export default function AboutBharatanatyam() {
  const elements = [
    {
      title: 'Bha (Bhava)',
      subtitle: 'Expression & Emotion',
      desc: 'The internal state of mind or mood depicted by the dancer using facial expressions (Mukhabhinaya) and gestural narratives.',
      icon: Heart,
      color: 'text-rose-400 bg-rose-500/10',
    },
    {
      title: 'Ra (Raga)',
      subtitle: 'Melody & Music',
      desc: 'The unique melodic framework that sets the soul, atmospheric resonance, and traditional scale for the performance.',
      icon: Compass,
      color: 'text-blue-400 bg-blue-500/10',
    },
    {
      title: 'Ta (Tala)',
      subtitle: 'Rhythm & Time',
      desc: 'The precise metric rhythm cycles and patterns clicked out by the Guru using cymbals (nattuvangam) and dancer’s bells (ghungru).',
      icon: Activity,
      color: 'text-amber-400 bg-amber-500/10',
    },
  ];

  return (
    <section id="about-dance" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-[#e5e5e5] relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Traditional Text & Core Statement */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[#c5a059] uppercase font-mono tracking-widest text-xs font-semibold block">
              The Ancient Art Form
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              About Bharatanatyam
            </h2>
            <div className="w-20 h-px bg-[#c5a059]" />

            <div className="prose prose-neutral text-slate-300 space-y-4 font-serif text-base md:text-lg leading-relaxed">
              <p>
                Bharatanatyam is one of India's oldest and most sacred classical dance traditions, originating from the temples of Tamil Nadu thousands of years ago. It is structured around the ancient treatise <strong>Natya Shastra</strong>.
              </p>
              <p className="border-l-4 border-[#c5a059] pl-4 italic text-[#c5a059] bg-[#151515] py-3 pr-2 rounded-r-lg">
                The word "Bharatanatyam" represents an elegant synthesis of three vital elements: <strong>Bha</strong> (Bhava/Emotion), <strong>Ra</strong> (Raga/Melody), and <strong>Ta</strong> (Tala/Rhythm), culminating in <strong>Natyam</strong> (Dance).
              </p>
              <p>
                The <strong>Arangetram</strong> is a monumental milestone. Translating directly to "ascending the stage," it represents the debut solo performance of a disciple after years of intense, rigorous discipline, and signifies their readiness to perform and propagate this sacred art form independently.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Bento Cards explaining the Bha-Ra-Ta syllables */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-[#151515] border border-[#c5a059]/20 rounded-2xl p-6 relative overflow-hidden flex items-center justify-between">
              <div className="max-w-[65%] space-y-2 text-left">
                <span className="text-[#c5a059] font-mono font-medium text-xs uppercase tracking-wider block">The Sacred Debut</span>
                <h3 className="font-serif font-bold text-[#c5a059] text-xl">The Significance of Arangetram</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  The solo debut is not merely a recital, but an offering of gratitude to the Guru, local deities, and the audience, displaying technical stamina and pure devotion.
                </p>
              </div>
              <TraditionArtwork type="lotus" className="w-24 h-24 opacity-20 absolute -right-4 -bottom-4 md:static md:opacity-100" />
            </div>

            {elements.map((elem, idx) => {
              const Icon = elem.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#151515] border border-[#c5a059]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3 text-left">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${elem.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-white text-lg">{elem.title}</h4>
                      <p className="text-xs text-[#c5a059] font-mono font-medium uppercase tracking-wider">{elem.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed font-sans text-left">
                    {elem.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
