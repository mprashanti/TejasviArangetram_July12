import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Eye, Layers, Compass, Play } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';
import { ProgramItem } from '../types';

export default function Program() {
  const [selectedId, setSelectedId] = useState<string>('pushpanjali');

  const programList: ProgramItem[] = [
    {
      id: 'pushpanjali',
      name: 'Pushpanjali',
      type: 'Invocation',
      raga: 'Nattai',
      tala: 'Adi',
      composer: 'Dr. M. Balamuralikrishna',
      description: 'The traditional opening item of a classic Bharatanatyam recital. The Sanskrit word "Pushpanjali" translates literally to "the offering of flowers".',
      significance: 'The dancer offers fresh, fragrant petals to Lord Nataraja (the cosmic deity of dance), seeks the sacred blessings of the Guru, the accompanists, and the beloved audience to ensure an auspicious start without any obstacles.',
    },
    {
      id: 'andal',
      name: 'Andal Kauthwam',
      type: 'Devotional Hymn',
      raga: 'Kalyani',
      tala: 'Adi',
      composer: 'Traditional Ancient Verse',
      description: 'An ancient, high-energy devotional hymn combining pure rhythmic patterns (Nritta) with story episodes (Abhinaya).',
      significance: 'This hymn praises Andal, the only female Alwar saint, who is revered as an incarnation of Mother Earth. The dancer depicts Andal’s unwavering love and mystical surrender to Sri Ranganatha (Lord Vishnu).',
    },
    {
      id: 'varnam',
      name: 'Varnam: Mata Pita',
      type: 'The Masterpiece Repertoire',
      raga: 'Charukesi',
      tala: 'Adi',
      composer: 'Lalgudi G. Jayaraman',
      description: 'The absolute centerpiece and longest, most complex piece of the classical Margam. It tests the dancer’s intellectual command, physical stamina, and rich facial expressions.',
      significance: 'This Varnam beautifully explores the sentiment of "Mata Pita Guru Deivam"—paying homage to our parents as our first spiritual guides and primary anchors in this mortal realm. It alternates between breathtaking footwork sequences (Jathis) and slow, highly emotive storytelling segments.',
    },
    {
      id: 'sitarama',
      name: 'Padam: Sita Rama Kalyanam',
      type: 'Expressive Narrative Lyric',
      raga: 'Kapi',
      tala: 'Rupakam',
      composer: 'Saint Tyagaraja',
      description: 'A slow-tempo item dedicated strictly to abhinaya (expression). The dancer uses subtle facial gestures and hand hand (mudras) to convey complex poetic feelings.',
      significance: 'This narrative enactment brings to life the divine wedding ceremony (Kalyanam) of Sita Devi and Lord Rama from the Ramayana. The dancer showcases the breaking of Shiva’s grand bow, Rama’s majestic composure, and Sita’s bashful absolute devotion.',
    },
    {
      id: 'krishna',
      name: 'Padam: Krishna Bhajan',
      type: 'Soul-Stirring Devotional',
      raga: 'Yaman Kalyan',
      tala: 'Adi',
      composer: 'Saint Meera Bai',
      description: 'A deeply emotional bhajan centered entirely around standard, playful devotion to the sapphire-colored deity, Lord Krishna.',
      significance: 'Based on Meera Bai’s poems, the dancer navigates from representing a playful cowherd playing his flute to a state of absolute self-transcendence, seeking communion with the divine flute player.',
    },
    {
      id: 'tillana',
      name: 'Tillana: Bhuvaneshwari Vijayam',
      type: 'Pure Rhythmic Ecstasy',
      raga: 'Hindolam',
      tala: 'Adi',
      composer: 'Dr. M. Balamuralikrishna',
      description: 'A fast-paced, highly spirited dance of complex spatial coordination, striking geometric poses, and exquisite static neck/eye movements.',
      significance: 'This Tillana is an energetic, joyous celebration of pure dance (Nritta). It concludes with a brief, glowing devotional verse (Sahitya) dedicated to Goddess Bhuvaneshwari, the majestic sovereign of the cosmic worlds.',
    },
    {
      id: 'mangalam',
      name: 'Mangalam',
      type: 'Auspicious Conclusion',
      raga: 'Madhyamavati',
      tala: 'Adi',
      composer: 'Traditional Prayers',
      description: 'The formal final prayer and thanksgiving sequence that completes a full classical Bharatanatyam Margam.',
      significance: 'The dancer offers a final respectful bow to the stage, mother earth, the spiritual guides, musicians, and the assembly of devotees, invoking peace, health, and cosmic harmony for all of humanity.',
    },
  ];

  const selectedItem = programList.find(x => x.id === selectedId) || programList[0];

  return (
    <section id="program" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative">
      {/* Background mandala lines */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">The Performance Order</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            The Arangetram Margam
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
          <p className="text-xs text-white/40 font-sans tracking-wide max-w-md mx-auto uppercase">
            Click on any item below to view its raga, tala, composer, and storytelling significance.
          </p>
        </div>

        {/* Layout: Sidebar list with selected content display card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Margam items sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {programList.map((item, index) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-[#c5a059]/10 border-[#c5a059]/50 shadow-[0_0_15px_rgba(197,160,89,0.15)] text-white'
                      : 'bg-[#151515] border-white/5 hover:bg-white/10 hover:border-white/15 text-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      isSelected ? 'bg-[#c5a059] text-black' : 'bg-white/5 text-neutral-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className={`font-serif font-semibold text-base transition-colors ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-mono uppercase tracking-wide opacity-50 mt-0.5">{item.type}</p>
                    </div>
                  </div>
                  <Play className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'text-[#c5a059] scale-125' : 'text-neutral-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display detailed explanation for selected piece */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Gold floral outline behind */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 opacity-10 pointer-events-none">
                  <TraditionArtwork type="lotus" />
                </div>

                <div className="space-y-6">
                  {/* Item header */}
                  <div className="border-b border-white/10 pb-6 text-left">
                    <span className="text-[#c5a059] font-mono tracking-widest text-[10px] uppercase font-bold block mb-1">
                      {selectedItem.type}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
                      {selectedItem.name}
                    </h3>
                  </div>

                  {/* Scientific Details (Raga, Tala, Composer) */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                      <Music className="w-4 h-4 mx-auto text-[#c5a059] mb-1" />
                      <span className="block text-[9px] uppercase font-mono text-neutral-400">Ragas (Melody)</span>
                      <span className="block text-xs font-serif font-bold text-white mt-0.5">{selectedItem.raga}</span>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                      <Compass className="w-4 h-4 mx-auto text-[#c5a059] mb-1" />
                      <span className="block text-[9px] uppercase font-mono text-neutral-400">Talas (Rhythm)</span>
                      <span className="block text-xs font-serif font-bold text-white mt-0.5">{selectedItem.tala}</span>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                      <Eye className="w-4 h-4 mx-auto text-[#c5a059] mb-1" />
                      <span className="block text-[9px] uppercase font-mono text-neutral-400">Composer</span>
                      <span className="block text-xs font-serif font-bold text-white mt-0.5 truncate">{selectedItem.composer}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-left">
                    {/* Abstract Description */}
                    <div>
                      <h4 className="text-xs uppercase font-mono text-[#c5a059] tracking-wider font-semibold mb-1.5">Movement Concept</h4>
                      <p className="text-sm font-sans text-slate-300 leading-relaxed font-light">{selectedItem.description}</p>
                    </div>

                    {/* Spiritual Significance */}
                    <div className="bg-[#c5a059]/5 border border-[#c5a059]/20 p-5 rounded-2xl mt-4">
                      <h4 className="text-xs uppercase font-mono text-[#c5a059] tracking-wider font-semibold mb-1.5">Significance & Narration</h4>
                      <p className="text-sm font-serif italic text-slate-300 leading-relaxed font-light">{selectedItem.significance}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/30 text-left">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Item {programList.findIndex(x => x.id === selectedId) + 1} of 7 in Traditional Setup</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
