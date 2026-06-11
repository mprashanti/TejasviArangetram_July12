import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, GraduationCap, Compass, BookOpen, Music, Users, MapPin, Heart, QrCode } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, GraduationCap, Compass, BookOpen, Music, Users, MapPin, Heart, QrCode } from 'lucide-react';
import Hero from './Hero';
import Invitation from './Invitation';
import AboutBharatanatyam from './AboutBharatanatyam';
import TheDancer from './TheDancer';
import TheGuru from './TheGuru';
import Blessings from './Blessings';
import Program from './Program';
import Gallery from './Gallery';
import Guestbook from './Guestbook';
import VenueDirections from './VenueDirections';
import Gratitude from './Gratitude';
import QrCodeManager from './QrCodeManager';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Welcome', href: '#hero', icon: Landmark },
    { label: 'Invitation', href: '#invitation', icon: GraduationCap },
    { label: 'The Art', href: '#about-dance', icon: Compass },
    { label: 'Dancer', href: '#dancer', icon: BookOpen },
    { label: 'Guru', href: '#guru', icon: Music },
    { label: 'Blessings', href: '#blessings', icon: Heart },
    { label: 'Program', href: '#program', icon: Music },
    { label: 'Gallery', href: '#gallery', icon: Users },
    { label: 'Guestbook', href: '#guestbook', icon: Heart },
    { label: 'Venue & GPS', href: '#venue', icon: MapPin },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="root-container" className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#c5a059] selection:text-[#0a0a0a]">
      
      {/* Sticky Premium Header Display */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c5a059]/20 py-4 shadow-lg text-white'
            : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Calligraphy */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-serif font-bold text-lg md:text-xl tracking-widest uppercase text-[#c5a059] group-hover:text-white transition-colors">
              Tejasvi Arangetram
            </span>
          </a>

          {/* Large Screen Nav Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-mono uppercase tracking-widest px-3 py-2 rounded-lg text-neutral-400 hover:text-[#c5a059] hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Actions Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#c5a059] hover:bg-white/5 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-Out Cover */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-[#0c0c0c] border-l border-[#c5a059]/20 z-40 shadow-2xl p-6 transform transition-transform duration-350 ease-out flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6 pt-16 text-left">
          <div className="border-b border-white/5 pb-4">
            <span className="font-serif text-[#c5a059] font-bold text-lg tracking-widest uppercase">Tejasvi Vijay</span>
            <p className="text-[10px] font-mono text-white/40 uppercase mt-0.5 tracking-wider">A Celebration of Tradition</p>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-sans font-medium text-neutral-300 hover:text-[#c5a059] hover:bg-white/5 transition-all text-left"
                >
                  <Icon className="w-4 h-4 text-[#c5a059]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-[10px] font-mono text-white/30">
          <span>Rochester, NY • July 12, 2026</span>
        </div>
      </div>

      {/* Dim overlay when Mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 z-30 lg:hidden backdrop-blur-xs"
        />
      )}

      {/* Main Single Page Contents */}
      <main>
        <Hero />
        <Invitation />
        <AboutBharatanatyam />
        <TheDancer />
        <TheGuru />
        <Blessings />
        <Program />
        <Gallery />
        <Guestbook />
        <VenueDirections />
        <Gratitude />
        <QrCodeManager />
      </main>

      {/* Footer Element */}
      <footer className="bg-[#080808] border-t border-[#c5a059]/20 text-white/50 py-16 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Subtle decorative ring lines */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-48 opacity-5">
          <Landmark className="w-full h-full text-[#c5a059]" />
        </div>

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <h2 className="font-serif font-bold text-2xl text-white tracking-widest uppercase text-[#c5a059]">Tejasvi Vijay's Arangetram</h2>
          
          <p className="font-serif italic text-sm md:text-base max-w-sm mx-auto text-white/60 leading-relaxed font-light">
            “Under the divine shelter of almighty mentors and with the guidance of Guru Srimathi Parvatha Chidambaram.”
          </p>

          <div className="w-24 h-px bg-[#c5a059]/40 mx-auto" />

          <div className="text-xs font-mono uppercase tracking-widest text-[#c5a059] space-x-1">
            <span>July 12th, 2026</span>
            <span>•</span>
            <span>Rochester, NY</span>
          </div>

          <p className="text-[10px] font-mono tracking-wide mt-8 text-white/20">
            © 2026 Vijay Krishnamoorthy & Jayashri Bhaskar. All Rights Reserved. • Designed for GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}
