import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import TraditionArtwork from './TraditionArtwork';

export default function TheGuru() {
  return (
    <section id="guru" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-neutral-300 relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Guru Altar Artwork of Guru Srimathi Parvatha Chidambaram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-sm">
              <TraditionArtwork type="guru_alt" />
            </div>
          </motion.div>

          {/* Right Side: Professional and Sentimental description of Guru/Mentor */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[#c5a059] font-mono tracking-widest text-xs uppercase font-semibold block">The Guiding Light</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Guru Srimathi Parvatha Chidambaram
            </h2>
            <div className="w-16 h-px bg-[#c5a059]" />

            <div className="prose prose-neutral text-slate-300 font-serif text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Guru Srimathi Parvatha Chidambaram is a highly respected educator, director, and champion of classical Indian heritage based in Rochester, New York. As the founder of the <strong>Bharata School of Indian Fine Arts</strong>, she has devoted her entire career to maintaining the absolute purity, stylistic rigor, and spiritual essence of Bharatanatyam.
              </p>
              <p>
                Under her meticulous direction, students undergo rigorous and intense training that goes beyond mere physical posture; Srimathi Parvatha fosters a rich understanding of Sanskrit stotras, raga, thrithala (rhythm), and the ancient mythological epics that constitute classical storytelling (abhinaya).
              </p>
            </div>

            {/* Sacred quote on Guru-Shishya Parmpara */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#151515] p-6 rounded-2xl border-l-4 border-[#c5a059] relative mt-6"
            >
              <Quote className="w-10 h-10 text-[#c5a059]/20 absolute top-2 right-2" />
              <p className="font-serif italic text-slate-200 leading-relaxed text-sm md:text-base">
                “The relationship between Guru and Shishya (disciple) is the foundational cornerstone of this sacred art. Through years of patient, daily mentorship, Tejasvi has learned to translate dry mathematical rhythms into liquid grace, and simple expressions into deep, soul-stirring storytelling.”
              </p>
              <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#c5a059] mt-2">
                — On the Guru-Shishya Parampara
              </span>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
