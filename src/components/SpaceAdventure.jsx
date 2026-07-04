
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { getPlanetOfDay, getStarOfDay, getAstronautOfDay } from '@/lib/SpaceContent.js';
import PlanetPicker from './PlanetPicker.jsx';
import StarExplorer from './StarExplorer.jsx';
import AstronautExplorer from './AstronautExplorer.jsx';

const SpaceAdventure = memo(function SpaceAdventure() {
  const dailyPlanet = getPlanetOfDay();
  const dailyStar = getStarOfDay();
  const dailyAstronaut = getAstronautOfDay();

  return (
    <div className="relative min-h-screen bg-space-dark-purple overflow-hidden font-outfit">
      {/* Cosmic Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1569767255695-23b00b661133?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-space-dark-purple/80 via-space-dark-purple/50 to-black/90 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col gap-16">
        
        {/* Header */}
        <header className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight glow-text drop-shadow-[0_0_20px_rgba(var(--space-light-blue-rgb),0.8)]">
              Space Adventure 🚀
            </h1>
            <p className="text-xl md:text-2xl text-space-light-blue font-medium max-w-2xl mx-auto">
              Blast off into the cosmos! Discover amazing facts about planets, stars, and the heroes who explore them.
            </p>
          </motion.div>
        </header>

        {/* Interactive Sections */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PlanetPicker dailyPlanet={dailyPlanet} />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <StarExplorer dailyStar={dailyStar} />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <AstronautExplorer dailyAstronaut={dailyAstronaut} />
        </motion.section>

      </div>
    </div>
  );
});

export default SpaceAdventure;
