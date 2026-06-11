import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, ShieldCheck, Trophy, Sparkles, Heart } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';

type TabType = 'biography' | 'journey' | 'achievements' | 'gratitude';

export default function TheDancer() {
  const [activeTab, setActiveTab] = useState<TabType>('biography');

  const tabsConfig = [
    { id: 'biography', label: 'Biography', icon: User },
    { id: 'journey', label: 'Dance Journey', icon: Sparkles },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'gratitude', label: 'Gratitude Message', icon: Heart },
  ];

  return (
    <section id="dancer" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Featuring the Artist</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            About the Dancer
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Decorative details */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full relative aspect-[3/4] bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-6 shadow-md flex flex-col justify-between items-center overflow-hidden">
              {/* Corner designs */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#c5a059]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#c5a059]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#c5a059]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#c5a059]" />

              <div className="w-full text-center text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                Tejasvi Vijay's Debut
              </div>

              {/* Core Artwork of dancer */}
              <div className="w-44 h-64 my-auto relative flex items-center justify-center">
                <TraditionArtwork type="dancer_silhouette" className="w-full h-full text-[#c5a059]" />
              </div>

              <div className="text-center w-full">
                <h3 className="font-serif font-bold text-xl text-[#c5a059] tracking-wider mb-1">Tejasvi Vijay</h3>
                <p className="text-xs text-slate-400 font-mono uppercase tracking-wide">Classical Bharatanatyam Artisan</p>
                
                {/* Micro badge */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] uppercase font-mono text-[#c5a059] bg-[#c5a059]/10 rounded-full px-3 py-1 border border-[#c5a059]/20 w-fit mx-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>RIT Ingle Recital Stage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab systems for biography, journey, achievements, gratitude */}
          <div className="lg:col-span-7 flex flex-col min-h-[400px]">
            {/* Tabs List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-[#c5a059]/20 pb-2 mb-8">
              {tabsConfig.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center gap-2 justify-center py-3.5 px-3 rounded-xl font-sans text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#c5a059] text-black font-semibold shadow-sm'
                        : 'bg-[#151515] hover:bg-[#c5a059]/10 text-slate-300 border border-[#c5a059]/20'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content area */}
            <div className="bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-8 shadow-sm flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-base md:text-lg text-slate-300 leading-relaxed space-y-4 text-left"
                >
                  {activeTab === 'biography' && (
                    <>
                      <h4 className="font-serif font-bold text-2xl text-[#c5a059] mb-4">Dedicated to the Art</h4>
                      <p>
                        Tejasvi Vijay is an incredibly talented and dedicated young Bharatanatyam dancer residing in Rochester, New York. Gifted with natural grace and athletic coordination, Tejasvi fell in love with classical Indian dance at a very tender age. 
                      </p>
                      <p>
                        Through her years of academic high achievement, she has gracefully balanced schoolwork with the strenuous demands of classical dance. Her focus, spiritual intent, and humbleness have earned her recognition as a promising promising name in her community's cultural landscape.
                      </p>
                    </>
                  )}

                  {activeTab === 'journey' && (
                    <>
                      <h4 className="font-serif font-bold text-2xl text-[#c5a059] mb-4">A Decade of Devotion</h4>
                      <p>
                        Tejasvi's training commenced under the renowned guidance of **Guru Srimathi Parvatha Chidambaram**, who instilled in her the classic traditions, core rules, and purity of movement belonging to this timeless art. 
                      </p>
                      <p>
                        Her journey at the Bharata School of Indian Fine Arts spans ten years of intensive study, involving deep learning of rhythmic complexity (Nritta), the fine intricacies of facial expressions (Abhinaya), and building the muscular stamina required for a complete Margam (the traditional sequence of items in a solo recital).
                      </p>
                    </>
                  )}

                  {activeTab === 'achievements' && (
                    <div className="space-y-4">
                      <h4 className="font-serif font-bold text-2xl text-[#c5a059] mb-4">Artistic Milestones</h4>
                      <ul className="space-y-4 font-sans text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                          <div>
                            <strong className="text-white font-serif text-base block">10 Years of Traditional Discipline</strong>
                            Successfully completed standard curriculum guidelines under Guru Parvatha Chidambaram with advanced standing.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                          <div>
                            <strong className="text-white font-serif text-base block">Sustained Community Performances</strong>
                            Performed as a lead ensemble regular in prominent regional multi-faith events, temple celebrations, and multi-cultural benefit shows throughout New York State.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                          <div>
                            <strong className="text-white font-serif text-base block">Outstanding Balance</strong>
                            Maintained top school grades while devoting up to 15 hours weekly to core rigorous practice sessions in preparation for her Arangetram.
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'gratitude' && (
                    <>
                      <h4 className="font-serif font-bold text-2xl text-[#c5a059] mb-4">Words of Thanksgiving</h4>
                      <p className="italic text-[#c5a059]">
                        "I stand before you on this stage with immense, deep humbleness. This Arangetram is not just my presentation, but an offering at the lotus feet of the Divine and our spiritual guides for guiding me along some beautiful paths."
                      </p>
                      <p>
                        "To my beloved Guru, Srimathi Parvatha Chidambaram, thank you for your selfless guide, infinite patience, and for teaching me that dance is a spiritual bridge. To my parents, Vijay and Jayashri, thank you for being my constant bedrock, my transport, and my absolute strength. Without your pure encouragement, this dream would not be possible."
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
