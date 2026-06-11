import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import TraditionArtwork from './TraditionArtwork';

export default function Hero() {
  const targetDate = new Date('2026-07-12T16:00:00-04:00'); // Eastern Daylight Time (Rochester, NY)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    function calculateTime() {
      const difference = targetDate.getTime() - Date.now();
      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isCompleted: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false,
      });
    }

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeSegments = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between items-center bg-[#0a0a0a] text-neutral-200 overflow-hidden pt-28 pb-12 px-6 md:px-12">
      {/* Decorative Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#c5a059] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#c5a059] opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Golden subtle mandala backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-5">
        <TraditionArtwork type="mandala" className="w-full h-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Side: Invitation details & Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-full text-xs font-mono uppercase tracking-widest text-[#c5a059]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Sacred Debut Recital</span>
          </motion.div>

          {/* Core Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-[#c5a059] font-serif italic text-xl mb-2">Bharatanatyam</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-none tracking-tight text-white mb-6">
              Arangetram
            </h1>
            <div className="h-[1px] w-24 bg-[#c5a059] mb-6"></div>
          </motion.div>

          {/* Quick Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-[#151515] border border-[#c5a059]/20 rounded-2xl p-6 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#c5a059] mt-0.5" />
              <div>
                <p className="text-xs text-[#c5a059] uppercase font-mono tracking-wider font-semibold">Date</p>
                <p className="text-sm font-sans font-medium text-white">July 12th, 2026</p>
                <p className="text-xs text-white/40">Sunday</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#c5a059] mt-0.5" />
              <div>
                <p className="text-xs text-[#c5a059] uppercase font-mono tracking-wider font-semibold">Timeline</p>
                <p className="text-sm font-sans font-medium text-white">4:00 PM – 6:00 PM</p>
                <p className="text-xs text-white/40">3:30 PM Seating & Stage Prayers</p>
              </div>
            </div>

            <div className="sm:col-span-2 border-t border-[#c5a059]/20 pt-3 mt-1 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#c5a059] mt-0.5" />
              <div>
                <p className="text-xs text-[#c5a059] uppercase font-mono tracking-wider font-semibold">Venue</p>
                <p className="text-sm font-sans font-medium text-white">Ingle Auditorium, RIT Campus</p>
                <p className="text-xs text-white/40">92 Lomb Memorial Dr, Rochester, NY 14623</p>
              </div>
            </div>
          </motion.div>

          {/* Countdown Clock */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full text-left"
          >
            <h3 className="text-xs uppercase font-mono text-[#c5a059] tracking-widest font-semibold mb-3">Countdown to auspicious moment</h3>
            {timeLeft.isCompleted ? (
              <div className="py-2 px-4 bg-[#c5a059]/20 border border-[#c5a059]/50 rounded-xl inline-block">
                <p className="font-serif italic text-white">The auspicious celebration is live!</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-3 max-w-sm">
                {timeSegments.map((seg, idx) => (
                  <div key={idx} className="bg-[#151515] border border-[#c5a059]/20 rounded-xl p-3 text-center backdrop-blur-sm">
                    <span className="block text-2xl md:text-3xl font-mono font-bold text-white tracking-tight">{String(seg.value).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider">{seg.label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Side: Dancer Silhouette Graphic Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex justify-center items-center relative aspect-square max-w-md mx-auto w-full lg:max-w-none"
        >
          {/* Flame lighting effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c5a059]/10 to-transparent blur-3xl" />
          
          {/* Framed Artwork Display */}
          <div className="relative w-full aspect-[3/4] bg-[#1a1a1a] rounded-3xl border border-[#c5a059]/20 p-8 flex flex-col justify-between items-center shadow-2xl">
            {/* Top gold ornamental corner tabs */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c5a059]/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c5a059]/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]/40" />
            
            <div className="flex w-full justify-between items-center text-xs font-mono text-[#c5a059]/60 tracking-wider">
              <span>RIT CAMPUS</span>
              <span>NY, USA</span>
            </div>

            <TraditionArtwork type="dancer_silhouette" className="w-56 h-72 my-auto text-[#c5a059] drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
            
            <div className="text-center">
              <p className="font-serif text-sm tracking-widest text-[#c5a059] uppercase font-medium">Tejasvi Vijay</p>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-wide mt-1">JULY 12, 2026 • 4:00 PM</p>
            </div>
          </div>

          {/* Flickering diya lamps in corner */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0a0a0a] rounded-full p-2 border border-[#c5a059]/30 flex items-center justify-center">
            <TraditionArtwork type="diya" className="w-12 h-12" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0a0a0a] rounded-full p-2 border border-[#c5a059]/30 flex items-center justify-center">
            <TraditionArtwork type="diya" className="w-12 h-12" />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center mt-12 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Enter Celebration</span>
        <ChevronDown className="w-4 h-4 text-[#c5a059] mt-1" />
      </motion.div>
    </section>
  );
}
