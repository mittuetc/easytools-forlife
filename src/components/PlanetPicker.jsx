
import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { planets } from '@/lib/SpaceContent.js';
import { cn } from '@/lib/utils.js';

const PlanetPicker = memo(function PlanetPicker({ dailyPlanet }) {
  const [selectedPlanet, setSelectedPlanet] = useState(dailyPlanet);

  return (
    <div className="w-full bg-space-dark-purple/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border-2 border-space-blue/30 shadow-[0_0_30px_rgba(var(--space-blue-rgb),0.2)]">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center glow-text">
        Explore the Planets 🪐
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {planets.map((planet) => (
          <motion.button
            key={planet.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPlanet(planet)}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300",
              selectedPlanet.id === planet.id 
                ? "bg-space-blue/40 border-space-light-blue shadow-[0_0_15px_rgba(var(--space-light-blue-rgb),0.5)]" 
                : "bg-black/40 border-space-blue/20 hover:border-space-blue/50 hover:bg-space-blue/20"
            )}
          >
            <span className="text-4xl mb-2" role="img" aria-label={planet.name}>{planet.emoji}</span>
            <span className="text-white font-bold">{planet.name}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPlanet.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "p-6 rounded-2xl border-2 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6",
            selectedPlanet.bg,
            "border-white/20"
          )}
        >
          <div className="text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {selectedPlanet.emoji}
          </div>
          <div>
            <h3 className={cn("text-2xl font-black mb-2", selectedPlanet.color)}>
              {selectedPlanet.name}
            </h3>
            <p className="text-lg text-white/90 font-medium leading-relaxed">
              <span className="font-bold text-space-accent mr-2">Did You Know?</span>
              {selectedPlanet.fact}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default PlanetPicker;
