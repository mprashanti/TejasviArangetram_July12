import React from 'react';

interface TraditionArtworkProps {
  type: 'diya' | 'mandala' | 'lotus' | 'peacock' | 'temple_arch' | 'dancer_silhouette' | 'sai_baba_alt' | 'sage_alt' | 'guru_alt';
  className?: string;
}

export default function TraditionArtwork({ type, className = '' }: TraditionArtworkProps) {
  switch (type) {
    case 'diya':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500 animate-pulse">
            {/* Diya Base */}
            <path
              d="M15,55 C15,75 85,75 85,55 C80,50 20,50 15,55 Z"
              fill="currentColor"
              className="text-amber-800 drop-shadow-md"
            />
            <path
              d="M30,52 C30,62 70,62 70,52"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            {/* Stand */}
            <path d="M47,55 L47,75 L43,78 L57,78 L53,75 L53,55 Z" fill="#8B5A2B" />
            <ellipse cx="50" cy="78" rx="15" ry="4" fill="#8B5A2B" />
            {/* Flame */}
            <path
              d="M50,45 C43,45 45,25 50,15 C55,25 57,45 50,45 Z"
              fill="#FF4500"
              className="origin-bottom animate-bounce duration-1000"
            />
            <path
              d="M50,43 C46,43 47,30 50,22 C53,30 54,43 50,43 Z"
              fill="#FFD700"
              className="origin-bottom animate-ping duration-700"
            />
            {/* Divine Aura */}
            <circle cx="50" cy="35" r="18" fill="rgba(253, 224, 71, 0.15)" className="animate-ping" />
          </svg>
        </div>
      );

    case 'mandala':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500 opacity-60 animate-spin" style={{ animationDuration: '40s' }}>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#58111A" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            {/* Spokes */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              return (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 75 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 75 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#D4AF37"
                  strokeWidth="0.75"
                  opacity="0.8"
                />
              );
            })}
            {/* Petals */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              return (
                <path
                  key={i}
                  d="M100,100 C130,50 170,100 100,100"
                  transform={`rotate(${angle} 100 100)`}
                  fill="none"
                  stroke="#58111A"
                  strokeWidth="1"
                />
              );
            })}
            {/* Inner Ring patterns */}
            <circle cx="100" cy="100" r="30" fill="none" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="100" cy="100" r="8" fill="#58111A" />
          </svg>
        </div>
      );

    case 'lotus':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Outer Petals */}
            <path d="M50,80 C20,70 10,40 50,15 C90,40 80,70 50,80 Z" fill="rgba(219, 39, 119, 0.15)" stroke="#DB2777" strokeWidth="1.5" />
            {/* Inner Petals */}
            <path d="M50,80 C30,75 25,50 50,25 C75,50 70,75 50,80 Z" fill="rgba(219, 39, 119, 0.25)" stroke="#DB2777" strokeWidth="1.5" />
            {/* Center Petals */}
            <path d="M50,80 C40,78 35,55 50,35 C65,55 60,78 50,80 Z" fill="rgba(251, 113, 133, 0.4)" stroke="#E11D48" strokeWidth="2" />
            {/* Leaves base */}
            <path d="M15,80 C30,85 70,85 85,80 C70,72 30,72 15,80 Z" fill="#047857" opacity="0.8" />
            {/* Floral center */}
            <circle cx="50" cy="74" r="5" fill="#D4AF37" />
            <circle cx="46" cy="76" r="2.5" fill="#FBBF24" />
            <circle cx="54" cy="76" r="2.5" fill="#FBBF24" />
          </svg>
        </div>
      );

    case 'peacock':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Feather Outer Shroud */}
            <path d="M50,90 C15,70 20,20 50,5 C80,20 85,70 50,90 Z" fill="rgba(4, 120, 87, 0.1)" stroke="#047857" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M50,85 C25,65 28,30 50,12 C72,30 75,65 50,85 Z" fill="rgba(4, 120, 87, 0.2)" stroke="#059669" strokeWidth="2" />
            {/* Feather Blue Eye */}
            <path d="M50,70 C35,55 35,40 50,25 C65,40 65,55 50,70 Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.5" />
            {/* Feather Navy Center */}
            <path d="M50,60 C42,50 42,42 50,35 C58,42 58,50 50,60 Z" fill="#1E3A8A" />
            {/* Golden Core */}
            <circle cx="50" cy="48" r="6" fill="#FBBF24" />
            {/* Quill line */}
            <path d="M50,85 L50,98" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'temple_arch':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full text-amber-500" opacity="0.85">
            {/* Columns */}
            <rect x="25" y="45" width="8" height="65" fill="#58111A" rx="1" stroke="#D4AF37" strokeWidth="1" />
            <rect x="87" y="45" width="8" height="65" fill="#58111A" rx="1" stroke="#D4AF37" strokeWidth="1" />
            {/* Column bases */}
            <rect x="21" y="105" width="16" height="8" fill="#D4AF37" rx="1" />
            <rect x="83" y="105" width="16" height="8" fill="#D4AF37" rx="1" />
            {/* Arching vaults */}
            <path d="M25,50 Q60,10 95,50" fill="none" stroke="#D4AF37" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M29,52 Q60,18 91,52" fill="none" stroke="#58111A" strokeWidth="2.5" />
            {/* Top spires */}
            <path d="M60,10 L56,22 L64,22 Z" fill="#D4AF37" />
            <circle cx="60" cy="7" r="2.5" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="1" />
            {/* Decorative floral accents inside column corners */}
            <circle cx="37" cy="42" r="3" fill="#D4AF37" />
            <circle cx="83" cy="42" r="3" fill="#D4AF37" />
          </svg>
        </div>
      );

    case 'dancer_silhouette':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 120" className="w-full h-full text-amber-600">
            {/* Head and Crown */}
            <circle cx="50" cy="22" r="8" fill="currentColor" />
            {/* Crown (Kireetam) */}
            <path d="M44,17 L50,8 L56,17 Z" fill="#D4AF37" />
            <circle cx="50" cy="5" r="2" fill="#D4AF37" />
            
            {/* Torso */}
            <path d="M42,32 L58,32 L54,58 L46,58 Z" fill="currentColor" />
            {/* Traditional sash/fan plate (Bharatanatyam folded silk costume) */}
            <path d="M45,58 L55,58 L68,85 L32,85 Z" fill="#D4AF37" opacity="0.9" />
            {/* Fan stripes */}
            {Array.from({ length: 7 }).map((_, i) => {
              const startX = 45 + (i * 10) / 6;
              const endX = 32 + (i * 36) / 6;
              return (
                <line
                  key={i}
                  x1={startX}
                  y1="58"
                  x2={endX}
                  y2="85"
                  stroke="#58111A"
                  strokeWidth="1.5"
                />
              );
            })}
            
            {/* Outstretched arms - Natarajasana pose or gracefully folded */}
            <path d="M42,35 C25,35 20,25 12,28 C10,29 12,33 15,32 C23,30 27,39 42,39 Z" fill="currentColor" />
            <path d="M58,35 C70,28 75,32 88,22 C90,20 87,17 84,20 C76,28 68,39 58,39 Z" fill="currentColor" />
            
            {/* Legs and bells */}
            <path d="M46,58 L44,80 L38,82 L38,86 L48,86 L48,58 Z" fill="currentColor" />
            <path d="M54,58 L56,80 L62,82 L62,86 L52,86 L52,58 Z" fill="currentColor" />
            {/* Anklets / Ghungru */}
            <rect x="36" y="86" width="10" height="3" fill="#D4AF37" rx="0.5" />
            <rect x="54" y="86" width="10" height="3" fill="#D4AF37" rx="0.5" />
            {/* Floor board line */}
            <line x1="15" y1="95" x2="85" y2="95" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'sai_baba_alt':
      // Graceful geometric illustration with orange and gold aura representing the altar photo
      return (
        <div className="relative w-full h-full bg-[#151515] rounded-lg overflow-hidden border border-[#c5a059]/25 flex flex-col items-center justify-center p-6 text-center shadow-xl">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent opacity-60" />
          <div className="relative w-36 h-36 rounded-full mb-4 bg-black border-4 border-[#c5a059] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#c5a059]">
              {/* Halos */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#c5a059" strokeWidth="0.5" strokeDasharray="4,4" />
              <circle cx="50" cy="50" r="38" fill="rgba(197, 160, 89, 0.08)" />
              {/* Silhouette representing Sathya Sai Baba */}
              <circle cx="50" cy="35" r="14" fill="#c5a059" /> {/* Face */}
              <path d="M50,15 C30,15 28,34 32,45 C34,50 38,45 50,45 C62,45 66,50 68,45 C72,34 70,15 50,15 Z" fill="#151515" /> {/* Unique Hair */}
              <path d="M28,85 L72,85 C72,60 66,52 50,52 C34,52 28,60 28,85 Z" fill="#b08b46" /> {/* Robe */}
              <path d="M46,80 C46,80 50,75 54,80" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <span className="font-sans font-medium text-white text-base">Bhagawan Sri Sathya Sai Baba</span>
          <span className="text-xs text-[#c5a059]/80 font-serif mt-1 italic">“Love All, Serve All”</span>
        </div>
      );

    case 'sage_alt':
      // Graceful geometric representation of Kanchi Mahaperiyava sage
      return (
        <div className="relative w-full h-full bg-[#151515] rounded-lg overflow-hidden border border-[#c5a059]/25 flex flex-col items-center justify-center p-6 text-center shadow-xl">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent opacity-60" />
          <div className="relative w-36 h-36 rounded-full mb-4 bg-black border-4 border-[#c5a059] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 100 100" className="w-28 h-28 text-amber-700">
              {/* Aura */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#c5a059" strokeWidth="0.5" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="38" fill="rgba(197, 160, 89, 0.08)" />
              {/* Sage Silhouette */}
              <circle cx="50" cy="35" r="11" fill="#b08b46" /> {/* face */}
              <path d="M35,35 Q50,44 65,35" fill="none" stroke="#c5a059" strokeWidth="1" /> {/* spectacles feel */}
              {/* White hair & Beard represent age */}
              <path d="M38,38 C35,45 35,58 50,58 C65,58 65,45 62,38 C58,45 42,45 38,38 Z" fill="#e5e5e5" stroke="#c5a059" strokeWidth="1" />
              {/* Ochre Robe */}
              <path d="M26,85 C26,62 38,50 50,50 C62,50 74,62 74,85 Z" fill="#8d662c" />
              {/* Blessing Hand */}
              <path d="M66,70 C72,70 74,62 72,56 C70,54 67,58 66,62 Z" fill="#b08b46" />
            </svg>
          </div>
          <span className="font-sans font-medium text-white text-base">Kanchi Mahaperiyava</span>
          <span className="text-xs text-[#c5a059]/80 font-serif mt-1 italic">“Blessings of Grace”</span>
        </div>
      );

    case 'guru_alt':
      // Graceful geometric representation of Guru Srimathi Parvatha Chidambaram
      return (
        <div className="relative w-full h-full bg-[#151515] rounded-xl overflow-hidden border border-[#c5a059]/20 flex flex-col items-center justify-center p-8 text-center shadow-xl">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent opacity-80" />
          <div className="relative w-40 h-40 rounded-full mb-5 bg-black border-4 border-[#c5a059] flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-amber-600">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#c5a059" strokeWidth="0.75" />
              {/* Female Indian Dance Mentor Silhouette */}
              <circle cx="50" cy="36" r="13" fill="#b08b46" /> {/* face */}
              {/* Red Bindi / Kumkum */}
              <circle cx="50" cy="33" r="2.5" fill="#ef4444" />
              {/* Elegant hair bun with jasmine flowers */}
              <circle cx="50" cy="20" r="4" fill="#e5e5e5" stroke="#c5a059" strokeWidth="1" /> {/* Gajra flowers */}
              <path d="M35,32 C38,20 62,20 65,32 C65,40 35,40 35,32 Z" fill="#151515" /> {/* Hair */}
              {/* Traditional Sari drape */}
              <path d="M24,85 L76,85 C76,58 66,54 50,54 C34,54 24,58 24,85 Z" fill="#151515" />
              <path d="M38,55 Q50,75 62,85" stroke="#c5a059" strokeWidth="4" fill="none" /> {/* Gold border of sari */}
              {/* Pearl necklace */}
              <circle cx="50" cy="52" r="6" fill="none" stroke="#e5e5e5" strokeWidth="1.5" strokeDasharray="3,2" />
            </svg>
          </div>
          <span className="font-sans font-medium text-white text-lg">Guru Srimathi Parvatha Chidambaram</span>
          <span className="text-xs text-[#c5a059] font-serif mt-1 uppercase tracking-widest font-semibold block">Bharata School of Indian Fine Arts</span>
        </div>
      );

    default:
      return null;
  }
}
