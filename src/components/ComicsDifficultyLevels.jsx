
import React, { memo } from 'react';

const ComicsDifficultyLevels = memo(function ComicsDifficultyLevels() {
  return (
    <section className="py-24 bg-white border-b-8 border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000] mb-8" style={{ WebkitTextStroke: '2px black' }}>Family Friendly!</h2>
        <div className="bg-[hsl(var(--comic-yellow,48_96%_65%))] border-4 border-black p-8 shadow-[8px_8px_0_0_#000] inline-block">
          <p className="text-2xl font-black text-black uppercase mb-4">Rated E for Everyone</p>
          <p className="text-lg font-bold text-black max-w-2xl">Our comics are designed to be safe, wholesome, and funny for readers of all ages. Whether you're 6 or 60, there's a laugh waiting for you!</p>
        </div>
      </div>
    </section>
  );
});

export default ComicsDifficultyLevels;
