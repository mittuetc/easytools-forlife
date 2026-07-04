
import React, { memo } from 'react';

const ComicsAbout = memo(function ComicsAbout() {
  return (
    <section className="py-24 bg-white border-b-8 border-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000] mb-8" style={{ WebkitTextStroke: '2px black' }}>About Comics Hub</h2>
        <div className="bg-[hsl(var(--comic-yellow,48_96%_65%))] border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
          <p className="text-xl font-bold text-black leading-relaxed">
            Welcome to Comics Hub, where every day brings a fresh dose of colorful, neo-brutalist comedy. We wanted to recreate the joy of opening the Sunday funnies—delivering family-friendly laughs, silly sound effects, and the continuing adventures of everyone's favorite sandwich duo, Peanut Butter and Jelly.
          </p>
        </div>
      </div>
    </section>
  );
});

export default ComicsAbout;
