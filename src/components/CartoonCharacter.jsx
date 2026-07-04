
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const characters = {
  drawing: {
    emoji: "✏️",
    face: "👀",
    name: "Pencil Pete",
    color: "bg-rainbow-yellow",
    shadow: "shadow-rainbow-yellow/40",
    border: "border-rainbow-orange"
  },
  story: {
    emoji: "📖",
    face: "🤩",
    name: "Story Stella",
    color: "bg-rainbow-purple",
    shadow: "shadow-rainbow-purple/40",
    border: "border-rainbow-pink"
  },
  craft: {
    emoji: "✂️",
    face: "😜",
    name: "Craft Cathy",
    color: "bg-rainbow-pink",
    shadow: "shadow-rainbow-pink/40",
    border: "border-rainbow-red"
  }
};

const CartoonCharacter = memo(function CartoonCharacter({ type = 'drawing', className = '' }) {
  const char = characters[type];

  return (
    <motion.div 
      className={`relative flex flex-col items-center justify-center will-change-transform ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      aria-label={`Cartoon character mascot: ${char.name}`}
      role="img"
    >
      <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border-4 ${char.border} ${char.color} ${char.shadow} shadow-xl flex items-center justify-center overflow-visible`}>
        {/* Main Icon */}
        <span className="text-6xl md:text-7xl absolute z-10" role="img" aria-hidden="true">
          {char.emoji}
        </span>
        
        {/* Floating Face/Eyes overlapping */}
        <motion.div 
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg border-2 border-slate-200 z-20 will-change-transform"
          animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-3xl" role="img" aria-hidden="true">{char.face}</span>
        </motion.div>
      </div>
      
      <div className="mt-4 bg-white/90 px-4 py-2 rounded-full shadow-sm border-2 border-slate-100 backdrop-blur-sm">
        <span className="font-bangers tracking-wider text-xl text-slate-800">
          {char.name}
        </span>
      </div>
    </motion.div>
  );
});

CartoonCharacter.displayName = 'CartoonCharacter';

export default CartoonCharacter;
