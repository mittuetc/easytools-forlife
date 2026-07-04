
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Laugh } from 'lucide-react';

const steps = [
  { title: 'Open the Daily Comic', desc: 'A brand new AI-generated comic strip is waiting for you every day.', icon: BookOpen },
  { title: 'Follow the PB&J Series', desc: 'Catch up on the ongoing adventures of Peanut Butter and Jelly in the archive.', icon: Search },
  { title: 'Read & Laugh', desc: 'Enjoy colorful, thick-bordered panels packed with visual gags and silly sound effects.', icon: Laugh }
];

const ComicsHowItWorks = memo(function ComicsHowItWorks() {
  return (
    <section className="py-24 bg-[hsl(var(--bread-tan))] border-y-8 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000]" style={{ WebkitTextStroke: '2px black' }}>How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[hsl(var(--comic-yellow,48_96%_65%))] border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000]">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-black uppercase text-black mb-3">{step.title}</h3>
                <p className="text-black font-medium text-lg leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ComicsHowItWorks;
