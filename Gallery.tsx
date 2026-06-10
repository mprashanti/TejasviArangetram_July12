import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, X, Filter } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'childhood' | 'training' | 'costume'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-1',
      category: 'childhood',
      title: 'First Footsteps',
      description: 'At age 4, fascinated by temple anklet bells and rhythm.',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'gallery-2',
      category: 'childhood',
      title: 'Traditional Little Saree',
      description: 'Dressed in a festive pattu pavadai for standard community puja.',
      imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'gallery-3',
      category: 'training',
      title: 'The Mirror Alignment',
      description: 'Fine-tuning hand posture (Araimandi position) at the studio.',
      imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'gallery-4',
      category: 'training',
      title: 'Learning the Jathis',
      description: 'Rhythmic coordination training with Guru’s nattuvangam cymbals.',
      imageUrl: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'gallery-5',
      category: 'costume',
      title: 'Splendid Stage Zari',
      description: 'Fine pleated traditional silk costume crafted specifically for her debut.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'gallery-6',
      category: 'costume',
      title: 'Temple Jewelry Portrait',
      description: 'Adorned with traditional headgears, neck chokers, and waist belt (Oddiyanam).',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Capturing Moments</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            The Dancer's Gallery
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
          <p className="text-sm text-slate-400 font-sans max-w-md mx-auto">
            A visual retrospective of childhood preparation, continuous practice hours, and exquisite costume details.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'childhood', 'training', 'costume'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#c5a059] text-black font-semibold shadow-sm'
                  : 'bg-[#151515] text-[#e5e5e5] border border-[#c5a059]/20 hover:bg-[#c5a059]/10'
              }`}
            >
              {filter === 'all' ? 'All Photos' : `${filter} photos`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-[#151515] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#c5a059]/20 cursor-pointer aspect-square"
              >
                {/* Fallback pattern overlaid on image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark gradient slide-up cover with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[#c5a059] font-mono text-[9px] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white mb-1 flex items-center justify-between">
                    <span>{item.title}</span>
                    <Eye className="w-4 h-4 text-[#c5a059]" strokeWidth={2} />
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal opening */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              {/* Outer clicks to close */}
              <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full bg-[#151515] border border-[#c5a059]/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white backdrop-blur-md z-25 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Photo */}
                <div className="lg:w-2/3 aspect-square lg:aspect-auto max-h-[70vh] bg-black">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Side: Information Panel */}
                <div className="lg:w-1/3 p-8 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="text-[#c5a059] font-mono text-[10px] uppercase tracking-widest font-bold block">
                      {selectedImage.category} photo
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white tracking-wide">
                      {selectedImage.title}
                    </h3>
                    <div className="w-12 h-px bg-[#c5a059]/50" />
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">{selectedImage.description}</p>
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-6 text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Tejasvi Arangetram Memoire</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
