
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ComicsGameModes = memo(function ComicsGameModes() {
  return (
    <section className="py-24 bg-[hsl(var(--comic-blue,200_95%_50%))] border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000] text-center mb-16" style={{ WebkitTextStroke: '2px black' }}>Reading Modes!</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <motion.div className="flex-1 bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]" whileHover={{ scale: 1.02 }}>
            <h3 className="text-3xl font-black uppercase mb-4 text-black">The Daily Strip</h3>
            <p className="text-lg font-bold text-black">Quick, standalone jokes and stories generated daily. Perfect for a quick laugh with your morning cereal.</p>
          </motion.div>
          <motion.div className="flex-1 bg-[hsl(var(--bread-tan))] border-4 border-black p-8 shadow-[8px_8px_0_0_#000]" whileHover={{ scale: 1.02 }}>
            <h3 className="text-3xl font-black uppercase mb-4 text-black">PB&J Series</h3>
            <p className="text-lg font-bold text-black">Follow the continuing narrative of Peanut Butter and Jelly. Use the archive to binge-read their epic saga from episode one.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ComicsGameModes;
