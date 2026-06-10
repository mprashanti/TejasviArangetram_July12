import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Youtube, X, Heart } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';

interface VideoCard {
  id: string;
  source: 'God' | 'Guru' | 'Elders';
  title: string;
  duration: string;
  description: string;
  artworkType: 'lotus' | 'diya' | 'peacock';
}

export default function Gratitude() {
  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);

  const gratitudeVideos: VideoCard[] = [
    {
      id: 'video-1',
      source: 'God',
      title: 'Devotion to God: Mangalacharana Thankfulness',
      duration: '4 mins',
      description: 'A soulful prayer reciting Sanskrit verses of adoration, offering absolute thankfulness to Lord Nataraja and the cosmos for guiding her steps.',
      artworkType: 'diya',
    },
    {
      id: 'video-2',
      source: 'Guru',
      title: 'Surrender to Guru: Shishya Pranam',
      duration: '6 mins',
      description: 'A heartwarming, emotional video of the traditional Guru-namaskaram, where Tejasvi offers flowers and seeks the divine mentorship of Guru Parvatha.',
      artworkType: 'lotus',
    },
    {
      id: 'video-3',
      source: 'Elders',
      title: 'Blessings of Elders: Family Lineage Tribute',
      duration: '5 mins',
      description: 'Expressing gratitude to her sweet parents Vijay and Jayashri, as well as her beloved grandparents, for teaching her ancestral values.',
      artworkType: 'peacock',
    },
  ];

  return (
    <section id="gratitude" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background vectors */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none">
        <TraditionArtwork type="mandala" />
      </div>

      <div className="w-full max-w-7xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Offering of Thanks</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Pranams & Gratitude
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
          <p className="text-xs text-white/40 font-sans tracking-wide max-w-sm mx-auto uppercase">
            A beautiful tribute of gratitude offered to the Divine, our Mentors, and our beloved family.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gratitudeVideos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#151515] border border-[#c5a059]/15 rounded-3xl overflow-hidden p-6 text-left flex flex-col justify-between hover:border-[#c5a059]/40 transition-colors group aspect-[4/5]"
            >
              <div className="space-y-4">
                {/* Visual Video Cover Thumb with traditional artwork */}
                <div className="relative aspect-video w-full rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-60" />
                  <div className="w-14 h-14 opacity-40 group-hover:opacity-80 transition-opacity">
                    <TraditionArtwork type={vid.artworkType} className="w-full h-full text-[#c5a059]" />
                  </div>
                  
                  {/* Fake Youtube / Play overlay */}
                  <div 
                    onClick={() => setActiveVideo(vid)}
                    className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/45 hover:bg-black/60 transition-colors group animate-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center text-black shadow-lg"
                    >
                      <Play className="w-5 h-5 ml-0.5 fill-current text-black" />
                    </motion.div>
                  </div>

                  <span className="absolute bottom-2 right-2 bg-black/65 px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300">
                    {vid.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[#c5a059] font-mono uppercase text-[9px] tracking-widest font-bold block">
                    Gratitude to {vid.source}
                  </span>
                  <h4 className="font-serif font-bold text-white text-lg group-hover:text-[#c5a059]/80 transition-colors leading-snug">
                    {vid.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-neutral-400 font-sans mt-4 leading-relaxed font-light line-clamp-3">
                {vid.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#151515] border border-[#c5a059]/20 rounded-3xl overflow-hidden shadow-2xl relative max-w-2xl w-full p-8 text-left z-10"
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 p-1 rounded-full border border-[#c5a059]/40 bg-[#c5a059]/10">
                    <TraditionArtwork type={activeVideo.artworkType} className="w-full h-full text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="text-[#c5a059] font-mono uppercase text-[9px] tracking-widest font-bold block">Gratitude to {activeVideo.source}</span>
                    <h3 className="font-serif font-medium text-white text-xl leading-tight">{activeVideo.title}</h3>
                  </div>
                </div>

                <div className="w-full aspect-video bg-black rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/5 relative overflow-hidden my-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                  <Heart className="w-12 h-12 text-[#c5a059] animate-pulse mb-4 relative z-10" />
                  <p className="font-sans text-sm text-neutral-300 max-w-sm relative z-10 font-light leading-relaxed mb-4">
                    "This video expresses deep gratitude. When hosted on a custom domain, the actual YouTube or Vimeo stream embed link will replace this preview."
                  </p>
                  
                  {/* Share button mock */}
                  <div className="flex gap-2 relative z-10">
                    <button className="bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] py-2 px-4 rounded-full uppercase transition-all cursor-pointer">
                      Preview Video Player
                    </button>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-mono text-[10px] py-2 px-4 rounded-full uppercase transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span>Host Channel</span>
                    </a>
                  </div>
                </div>

                <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">{activeVideo.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
