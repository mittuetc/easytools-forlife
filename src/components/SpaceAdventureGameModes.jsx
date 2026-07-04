
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const SpaceAdventureGameModes = memo(function SpaceAdventureGameModes() {
  return (
    <section className="py-24 bg-space-dark-purple relative overflow-hidden border-y border-space-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 tracking-tight glow-text">Learning Modes</h2>
        
        <div className="space-y-12">
          {/* Mode 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div className="w-full md:w-1/2 aspect-video bg-black/50 border border-space-blue/30 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-blue/20 to-transparent"></div>
              <div className="text-6xl z-10">🪐</div>
            </motion.div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Interactive Planet Exploration</h3>
              <p className="text-space-light-blue text-lg leading-relaxed">Navigate through our solar system. Click on different planets to reveal their unique atmospheric conditions, size, and distance from the Sun.</p>
            </div>
          </div>

          {/* Mode 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <motion.div className="w-full md:w-1/2 aspect-video bg-black/50 border border-space-glow/30 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-glow/20 to-transparent"></div>
              <div className="text-6xl z-10">✨</div>
            </motion.div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Star Facts Discovery</h3>
              <p className="text-space-light-blue text-lg leading-relaxed">Journey beyond our immediate neighbors to learn about distant stars, supernovas, and constellations that light up the night sky.</p>
            </div>
          </div>

          {/* Mode 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div className="w-full md:w-1/2 aspect-video bg-black/50 border border-space-accent/30 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-accent/20 to-transparent"></div>
              <div className="text-6xl z-10">👩‍🚀</div>
            </motion.div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Astronaut Learning</h3>
              <p className="text-space-light-blue text-lg leading-relaxed">Meet the pioneers of space travel. Discover their missions, the spacecraft they flew, and what it takes to live in zero gravity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureGameModes;
