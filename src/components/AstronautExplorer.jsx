
import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { astronauts } from '@/lib/SpaceContent.js';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils.js';

const AstronautExplorer = memo(function AstronautExplorer({ dailyAstronaut }) {
  const [selectedId, setSelectedId] = useState(dailyAstronaut.id);

  const selectedAstronaut = astronauts.find(a => a.id === selectedId);

  return (
    <div className="w-full bg-space-blue/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border-2 border-space-light-blue/30 shadow-[0_0_30px_rgba(var(--space-light-blue-rgb),0.15)]">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Rocket className="w-10 h-10 text-space-accent animate-bounce-slow" />
        <h2 className="text-3xl md:text-4xl font-black text-white glow-text">
          Space Heroes 👨‍🚀
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* List of Astronauts */}
        <div className="flex-1 flex flex-col gap-3">
          {astronauts.map((astro) => (
            <motion.button
              key={astro.id}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedId(astro.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-300",
                selectedId === astro.id
                  ? "bg-space-accent/20 border-space-accent text-white shadow-[0_0_15px_rgba(var(--space-accent-rgb),0.3)]"
                  : "bg-black/30 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <span className="text-3xl">{astro.emoji}</span>
              <span className="font-bold text-lg">{astro.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Astronaut Details */}
        <div className="flex-[2] bg-black/40 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAstronaut.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-space-accent/20 rounded-full flex items-center justify-center text-4xl border-2 border-space-accent">
                  {selectedAstronaut.emoji}
                </div>
                <h3 className="text-3xl font-black text-space-accent">
                  {selectedAstronaut.name}
                </h3>
              </div>
              <div className="bg-space-dark-purple/50 p-6 rounded-xl border border-space-glow/20">
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  {selectedAstronaut.fact}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

export default AstronautExplorer;
