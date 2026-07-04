
import React, { memo } from 'react';

const ComicsUseCases = memo(function ComicsUseCases() {
  return (
    <section className="py-24 bg-[hsl(var(--comic-green,140_70%_50%))] border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000] mb-12" style={{ WebkitTextStroke: '2px black' }}>Perfect For...</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Morning Coffee Laughs ☕", "Kids Screen Time 🧒", "Lunch Break Reading 🥪", "Bedtime Stories 🛏️"].map((uc, idx) => (
            <div key={idx} className="bg-white border-4 border-black px-6 py-4 font-black uppercase text-xl shadow-[4px_4px_0_0_#000] rotate-1 hover:-rotate-1 transition-transform cursor-default">
              {uc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ComicsUseCases;
