import React from 'react';
import { motion } from 'motion/react';
import { Clock, Navigation, MapPin, ExternalLink, CalendarDays } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';

export default function VenueDirections() {
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Ingle+Auditorium,+92+Lomb+Memorial+Dr,+Rochester,+NY+14623';

  const scheduleEvents = [
    {
      time: '3:30 PM',
      title: 'Seating Starts & Stage Prayers',
      desc: 'Guests are seated. The artist offers her silent prayers on stage to Lord Ganesha, Lord Nataraja, and her gurus.',
      color: 'border-l-2 border-[#c5a059]/50',
    },
    {
      time: '4:00 PM',
      title: 'Grand Debut performance',
      desc: 'The solo classical Margam debut recital commences, accompanied by top live carnatic vocalists and instrumentalists.',
      color: 'border-l-2 border-[#c5a059]',
    },
    {
      time: '6:00 PM',
      title: 'Traditional Feast Dinner',
      desc: 'A gorgeous, warm Indian buffet vegetarian dinner served to all guests in honor of Tejasvi’s incredible milestone.',
      color: 'border-l-2 border-[#c5a059]/30',
    },
  ];

  return (
    <section id="venue" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">Locating the Recital</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Venue & Directions
          </h2>
          <div className="w-16 h-px bg-[#c5a059] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Schedule & Venue Wording */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between text-left">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-white">Schedule of Auspicious Events</h3>
              <p className="text-sm text-slate-400 font-sans">
                Please join us promptly to seek blessings. Here is our structured timeline for Sunday, July 12th, 2026.
              </p>
            </div>

            {/* Schedule Cards */}
            <div className="space-y-4">
              {scheduleEvents.map((evt, idx) => (
                <div key={idx} className={`bg-[#151515] border border-white/5 p-5 rounded-2xl shadow-sm pl-6 ${evt.color}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase font-mono font-bold text-[#c5a059] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{evt.time}</span>
                    </span>
                    {idx === 1 && (
                      <span className="bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border border-[#c5a059]/20">
                        Main Act
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-white text-base mb-1">{evt.title}</h4>
                  <p className="text-xs text-slate-450 leading-relaxed font-sans text-neutral-400">{evt.desc}</p>
                </div>
              ))}
            </div>

            {/* Address specifications */}
            <div className="bg-[#151515] border border-[#c5a059]/15 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-[#c5a059]/10 rounded-xl text-[#c5a059]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase font-mono tracking-widest text-[#c5a059] font-semibold">Address Destination</p>
                <h4 className="font-serif font-semibold text-white text-lg">Ingle Auditorium (RIT)</h4>
                <p className="text-xs text-slate-450 font-sans leading-relaxed text-[#c5a059]/80">
                  92 Lomb Memorial Dr, Rochester, NY 14623
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Directions Mockup & GPS linkages */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Elegant Map Visual Frame */}
            <div className="w-full bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-4 flex-grow flex flex-col justify-between overflow-hidden shadow-2xl relative min-h-[380px]">
              
              {/* Graphic custom mock map showing RIT campus and nearby highways */}
              <div className="absolute inset-0 bg-[#161616] p-6 flex flex-col justify-between relative overflow-hidden">
                
                {/* Simulated Roads */}
                <div className="absolute top-1/4 left-0 w-full h-8 bg-neutral-800 rotate-6 origin-right opacity-60" />
                <div className="absolute top-0 left-1/3 w-10 h-full bg-neutral-800 -rotate-12 origin-top opacity-60" />
                <div className="absolute bottom-1/3 left-0 w-full h-6 bg-neutral-800 -rotate-3 origin-left opacity-60" />
                
                {/* RIT Rochester Woods / green areas */}
                <div className="absolute top-2 right-4 w-40 h-40 rounded-full bg-[#1E291B]/40 opacity-70 blur-md pointer-events-none" />
                <div className="absolute bottom-4 left-6 w-36 h-36 rounded-full bg-[#1E291B]/40 opacity-70 blur-md pointer-events-none" />

                {/* Google Landmark Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 bg-[#151515] rounded-full p-1.5 shadow-md flex items-center justify-center border-2 border-[#c5a059]"
                  >
                    <TraditionArtwork type="dancer_silhouette" className="w-full h-full text-[#c5a059]" />
                  </motion.div>
                  <div className="bg-black border border-[#c5a059]/30 text-white font-mono text-[9px] uppercase tracking-wider font-bold py-1 px-3.5 rounded-full shadow-lg mt-2.5 whitespace-nowrap">
                    Ingle Auditorium (RIT)
                  </div>
                </div>

                {/* Legend markers in the mock map corner */}
                <div className="absolute bottom-3 left-3 bg-[#151515]/95 border border-[#c5a059]/20 rounded-lg p-2.5 text-[9px] font-mono shadow-sm flex flex-col gap-1 text-left text-neutral-300">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-[#1E291B]/40 rounded border border-white/5" />
                    <span>RIT Forest Grounds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-neutral-800 rounded border border-white/5" />
                    <span>Lomb Memorial Dr</span>
                  </div>
                </div>
              </div>

              {/* Bottom bar of Map pane */}
              <div className="bg-[#151515] p-4 justify-between items-center z-10 flex border-t border-white/5 rounded-b-2xl shadow-sm text-left gap-4">
                <div>
                  <h5 className="font-serif font-bold text-white text-sm">Need Turn-by-Turn GPS Directions?</h5>
                  <p className="text-[10px] text-neutral-400 font-sans mt-0.5">Launches Google Maps safely on your smartphone or browser.</p>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c5a059] hover:bg-[#b08b46] text-black p-3 rounded-full shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

            {/* Google Map real launch action button */}
            <div className="mt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#151515] border border-[#c5a059]/20 text-white hover:bg-neutral-900 font-sans text-xs uppercase font-medium tracking-widest py-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Launch in Google Maps Router</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#c5a059]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
