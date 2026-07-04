
import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stars } from '@/lib/SpaceContent.js';
import { Sparkles, ArrowRight } from 'lucide-react';

const StarExplorer = memo(function StarExplorer({ dailyStar }) {
  const [currentIndex, setCurrentIndex] = useState(stars.findIndex(s => s.id === dailyStar.id));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stars.length);
  };

  const currentStar = stars[currentIndex];

  return (
    <div className="w-full bg-gradient-to-br from-space-dark-purple to-black rounded-3xl p-6 md:p-8 border-2 border-space-glow/30 shadow-[0_0_40px_rgba(var(--space-glow-rgb),0.15)] relative overflow-hidden">
      {/* Twinkling background effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-space-light-blue rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-3 bg-space-glow/20 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-space-light-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 glow-text">
          Stellar Secrets ⭐
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStar.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-2xl mb-8"
          >
            <div className="text-6xl mb-4 animate-pulse-slow">{currentStar.emoji}</div>
            <h3 className="text-3xl font-bold text-space-light-blue mb-4">{currentStar.name}</h3>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
              {currentStar.fact}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="flex items-center gap-2 bg-space-glow text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-space-glow/80 transition-colors shadow-[0_0_15px_rgba(var(--space-glow-rgb),0.5)]"
        >
          Discover Another Star <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
});

export default StarExplorer;
