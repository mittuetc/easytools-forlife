
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const StepCard = memo(function StepCard({ number, text, emoji, colorAccent }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -4, rotate: (number % 2 === 0) ? 1 : -1 }}
      className="relative flex items-start p-5 md:p-6 bg-white rounded-3xl shadow-sm border-2 border-slate-100 hover:border-slate-300 transition-colors w-full will-change-transform"
      role="listitem"
    >
      <div 
        className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bangers text-2xl md:text-3xl shadow-md ${colorAccent} z-10 -ml-2 -mt-2`}
        aria-label={`Step ${number}`}
      >
        {number}
      </div>
      
      <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-lg md:text-xl font-medium text-slate-700 leading-snug">
          {text}
        </p>
        {emoji && (
          <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-100" aria-hidden="true">
            <span>{emoji}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
});

StepCard.displayName = 'StepCard';

export default StepCard;
