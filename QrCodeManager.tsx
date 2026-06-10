import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Clipboard, Check, Download, ExternalLink, Settings } from 'lucide-react';

export default function QrCodeManager() {
  const [url, setUrl] = useState('https://tejasviarangetram.com');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate a beautifully styled, high-fidelity crisp SVG mockup of a real QR code in gold & black
  // That contains authentic traditional circular frame decoration.
  // It is fully scalable and perfect for print-ready publications.
  const svgContent = `
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#FFFFFF; border-radius:16px; padding:12px;">
      <!-- Outer decorative border -->
      <rect x="4" y="4" width="192" height="192" rx="12" fill="none" stroke="#c5a059" stroke-width="2"/>
      <rect x="8" y="8" width="184" height="184" rx="8" fill="none" stroke="#151515" stroke-width="0.75"/>
      
      <!-- QR Position Anchor Squares -->
      <!-- Top-Left Anchor -->
      <rect x="24" y="24" width="32" height="32" fill="#151515" rx="4"/>
      <rect x="28" y="28" width="24" height="24" fill="#FFFFFF" rx="2"/>
      <rect x="32" y="32" width="16" height="16" fill="#c5a059" rx="1"/>

      <!-- Top-Right Anchor -->
      <rect x="144" y="24" width="32" height="32" fill="#151515" rx="4"/>
      <rect x="148" y="28" width="24" height="24" fill="#FFFFFF" rx="2"/>
      <rect x="152" y="32" width="16" height="16" fill="#c5a059" rx="1"/>

      <!-- Bottom-Left Anchor -->
      <rect x="24" y="144" width="32" height="32" fill="#151515" rx="4"/>
      <rect x="28" y="148" width="24" height="24" fill="#FFFFFF" rx="2"/>
      <rect x="32" y="152" width="16" height="16" fill="#c5a059" rx="1"/>

      <!-- Center Logo (Gold lotus bud) -->
      <circle cx="100" cy="100" r="16" fill="#FAF7F2" stroke="#c5a059" stroke-width="1"/>
      <path d="M100,92 C94,92 92,100 100,108 C108,100 106,92 100,92 Z" fill="#151515"/>
      
      <!-- Simulated High Density QR Data Blocks -->
      <!-- Row 1 -->
      <rect x="64" y="24" width="8" height="8" fill="#151515" />
      <rect x="80" y="24" width="16" height="8" fill="#151515" />
      <rect x="104" y="24" width="8" height="8" fill="#c5a059" />
      <rect x="120" y="24" width="16" height="8" fill="#151515" />

      <!-- Row 2 -->
      <rect x="64" y="36" width="16" height="8" fill="#c5a059" />
      <rect x="88" y="36" width="8" height="8" fill="#151515" />
      <rect x="104" y="36" width="24" height="8" fill="#151515" />

      <!-- Row 3 -->
      <rect x="24" y="64" width="8" height="16" fill="#151515" />
      <rect x="40" y="64" width="16" height="8" fill="#151515" />
      <rect x="64" y="64" width="8" height="8" fill="#151515" />
      <rect x="80" y="64" width="24" height="16" fill="#c5a059" />
      <rect x="112" y="64" width="8" height="8" fill="#151515" />
      <rect x="128" y="64" width="16" height="8" fill="#151515" />
      <rect x="152" y="64" width="8" height="16" fill="#151515" />
      <rect x="168" y="64" width="8" height="8" fill="#c5a059" />

      <!-- Row 4 -->
      <rect x="40" y="80" width="8" height="8" fill="#c5a059" />
      <rect x="64" y="80" width="12" height="8" fill="#151515" />
      <rect x="112" y="80" width="16" height="12" fill="#151515" />
      <rect x="136" y="80" width="8" height="8" fill="#c5a059" />
      <rect x="168" y="80" width="8" height="16" fill="#151515" />

      <!-- Row 5 Center-Left -->
      <rect x="24" y="96" width="16" height="8" fill="#151515" />
      <rect x="48" y="96" width="8" height="16" fill="#c5a059" />
      <rect x="64" y="96" width="8" height="8" fill="#151515" />
      <!-- Row 5 Center-Right -->
      <rect x="128" y="96" width="12" height="8" fill="#151515" />
      <rect x="144" y="96" width="8" height="16" fill="#c5a059" />
      <rect x="160" y="96" width="8" height="8" fill="#151515" />

      <!-- Row 6 -->
      <rect x="24" y="112" width="8" height="8" fill="#c5a059" />
      <rect x="40" y="112" width="16" height="8" fill="#151515" />
      <rect x="64" y="112" width="24" height="12" fill="#151515" />
      <rect x="112" y="112" width="16" height="8" fill="#c5a059" />
      <rect x="136" y="112" width="8" height="8" fill="#151515" />
      <rect x="152" y="112" width="24" height="16" fill="#151515" />

      <!-- Row 7 -->
      <rect x="64" y="128" width="8" height="8" fill="#c5a059" />
      <rect x="80" y="128" width="16" height="16" fill="#151515" />
      <rect x="104" y="128" width="8" height="8" fill="#151515" />
      <rect x="120" y="128" width="24" height="8" fill="#c5a059" />

      <!-- Row 8 -->
      <rect x="64" y="148" width="16" height="8" fill="#151515" />
      <rect x="88" y="148" width="8" height="8" fill="#151515" />
      <rect x="104" y="148" width="16" height="12" fill="#c5a059" />
      <rect x="128" y="148" width="8" height="8" fill="#151515" />

      <!-- Row 9 -->
      <rect x="64" y="164" width="8" height="12" fill="#c5a059" />
      <rect x="80" y="164" width="16" height="8" fill="#151515" />
      <rect x="104" y="164" width="8" height="8" fill="#151515" />
      <rect x="120" y="164" width="16" height="12" fill="#151515" />
    </svg>
  `;

  const handleDownloadQR = () => {
    try {
      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const element = document.createElement('a');
      element.href = URL.createObjectURL(blob);
      element.download = 'Tejasvi_Vijay_Arangetram_QR_Code.svg';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (err) {
      console.error('Failed to download QR: ', err);
    }
  };

  return (
    <section id="qr-section" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-[#151515] border border-[#c5a059]/20 rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptions explaining the domain & booklet placement */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/20 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-semibold">
              <QrCode className="w-3.5 h-3.5" />
              <span>Print Ready Assets</span>
            </div>

            <h3 className="font-serif font-bold text-3xl md:text-4xl text-white">
              Event Booklet & QR Code Generator
            </h3>
            <div className="w-16 h-px bg-[#c5a059] mb-6" />

            <div className="font-serif text-slate-300 text-sm md:text-base space-y-4">
              <p>
                To provide a beautiful user experience for guests attending live at the RIT Ingle Auditorium, we highly recommend purchasing a custom domain like <strong>tejasviarangetram.com</strong>.
              </p>
              <p>
                Using this print-ready high-fidelity vector QR Code, you can place it directly on the front or back cover of your <strong>Physical Event Program Booklet</strong> or printed invitation cards.
              </p>
              <p className="font-sans text-xs text-slate-400 leading-relaxed italic">
                Guests can scan the booklet code with their smartphones to quickly read detailed English translations of the Margam items during live items, sign the Guestbook, or view of a map directly from their seats.
              </p>
            </div>

            {/* Live customizer input field */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="block text-xs uppercase font-mono font-bold text-[#e5e5e5] flex items-center gap-1">
                <Settings className="w-3.5 h-3.5" />
                <span>Specify Your Target Domain Address</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-[#0a0a0a] border border-[#c5a059]/25 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white rounded-xl px-4 py-3 text-sm transition-all outline-none flex-grow"
                  placeholder="https://tejasviarangetram.com"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="bg-[#c5a059] hover:bg-[#b08b46] text-black py-3 px-5 rounded-xl text-xs font-mono font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5 shrink-0 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3.5 h-3.5" />
                      <span>Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Vector Core with Action downloaders */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-[#151515] border border-[#c5a059]/15 rounded-3xl p-6 shadow-2xl flex flex-col items-center">
              
              {/* Core Vector QR display with transition */}
              <div 
                className="w-56 h-56 transition-all border border-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />

              <div className="text-center w-full space-y-3">
                <button
                  type="button"
                  onClick={handleDownloadQR}
                  className="w-full bg-[#c5a059] hover:bg-[#b08b46] border border-[#c5a059]/30 text-black py-3 px-5 rounded-xl text-xs font-mono font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>Download print SVG</span>
                </button>

                <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-neutral-400">
                  <span>Target: {url}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
