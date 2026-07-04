
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import CartoonCharacter from './CartoonCharacter.jsx';
import StepCard from './StepCard.jsx';

const CreativeSection = memo(function CreativeSection({ 
  title, 
  subtitle, 
  data, 
  characterType, 
  themeColor, 
  badgeColor,
  reverseLayout = false,
  backgroundClass = "bg-white"
}) {
  return (
    <section 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden contain-content ${backgroundClass}`}
      aria-labelledby={`section-heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block will-change-transform-opacity"
          >
            <h2 
              id={`section-heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
              className={`text-5xl md:text-7xl font-bangers tracking-wide ${themeColor} drop-shadow-sm mb-4`}
            >
              {title}
            </h2>
            <div className={`inline-block px-6 py-2 rounded-full ${badgeColor} text-white font-bold text-lg md:text-xl shadow-md transform -rotate-2`}>
              {subtitle} <span aria-hidden="true">{data.emoji}</span>
            </div>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Character & Info Block */}
          <motion.div 
            initial={{ x: reverseLayout ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full lg:w-1/3 flex flex-col items-center text-center gap-8 will-change-transform-opacity"
          >
            <CartoonCharacter type={characterType} />
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border-2 border-slate-100 w-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Today's Mission:</h3>
              <p className="text-xl font-bangers tracking-wider text-slate-600 mb-3">{data.title}</p>
              {data.description && <p className="text-slate-600 font-medium">{data.description}</p>}
              {data.encouragement && <p className="text-slate-600 font-medium italic">"{data.encouragement}"</p>}
              
              {data.materials && (
                <div className="mt-4 text-left bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-700 block mb-2">What you need:</span>
                  <ul className="list-disc list-inside text-slate-600 font-medium text-sm space-y-1" aria-label="Materials list">
                    {data.materials.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Steps Block */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6" role="list" aria-label="Instructions">
            {data.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="will-change-transform-opacity"
              >
                <StepCard 
                  number={idx + 1}
                  text={step.text}
                  emoji={step.emoji}
                  colorAccent={badgeColor}
                />
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-6 bg-rainbow-yellow/20 rounded-3xl border-2 border-rainbow-yellow border-dashed text-center will-change-transform-opacity"
            >
              <p className="font-bangers text-2xl text-slate-700 tracking-wide">
                You did it! Amazing job! 🎉
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

CreativeSection.displayName = 'CreativeSection';

export default CreativeSection;
