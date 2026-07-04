
import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils.js';

const NatureCard = memo(function NatureCard({
  title,
  icon,
  data,
  themeClass,
  btnClass,
  resetKey
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Reset state when a new day/reset is triggered
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [resetKey, data]);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setIsCorrect(index === data.correctAnswerIndex);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative w-full rounded-[var(--radius)] p-6 md:p-8 shadow-lg border-4 border-black/5 overflow-hidden contain-paint",
        themeClass
      )}
      aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 text-[120px] opacity-10 pointer-events-none select-none" aria-hidden="true">
        {data.iconUrl}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Icon & Fact */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/50 p-3 rounded-2xl shadow-sm backdrop-blur-sm" aria-hidden="true">
              {icon}
            </div>
            <h2 
              id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
              className="text-3xl md:text-4xl font-black text-black/80 tracking-tight"
            >
              {title}
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border-2 border-white/50">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl" role="img" aria-label={`${data.name} icon`}>{data.iconUrl}</span>
              <h3 className="text-2xl font-bold text-foreground capitalize">
                {data.name}
              </h3>
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed mt-2">
              <span className="font-bold text-primary mr-2">Fun Fact!</span>
              {data.funFact}
            </p>
          </div>
        </div>

        {/* Right Column: Quiz */}
        <div className="flex-1 w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-sm border-2 border-white">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-balance">
            {data.quizQuestion}
          </h3>

          <div className="flex flex-col gap-3" role="radiogroup" aria-label={`Quiz for ${data.name}`}>
            {data.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isActuallyCorrect = index === data.correctAnswerIndex;
              const showCorrect = selectedAnswer !== null && isActuallyCorrect;
              const showWrong = isSelected && !isActuallyCorrect;

              return (
                <motion.button
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`${answer}${showCorrect ? ' - Correct Answer' : showWrong ? ' - Incorrect Answer' : ''}`}
                  className={cn(
                    "relative w-full text-left px-6 py-4 rounded-2xl text-lg font-bold border-4 transition-all duration-300 will-change-transform",
                    selectedAnswer === null 
                      ? `${btnClass} hover:shadow-md cursor-pointer border-transparent` 
                      : showCorrect
                        ? "bg-green-100 border-green-500 text-green-900 cursor-default"
                        : showWrong
                          ? "bg-red-100 border-red-500 text-red-900 cursor-default opacity-80"
                          : "bg-muted text-muted-foreground border-transparent cursor-default opacity-50"
                  )}
                >
                  <span className="flex items-center justify-between">
                    {answer}
                    {showCorrect && <Check className="w-6 h-6 text-green-600" aria-hidden="true" />}
                    {showWrong && <X className="w-6 h-6 text-red-600" aria-hidden="true" />}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Feedback Message */}
          <AnimatePresence>
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "mt-6 p-4 rounded-2xl text-center font-bold text-xl will-change-transform",
                  isCorrect ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                )}
                role="alert"
                aria-live="polite"
              >
                {isCorrect ? "🎉 Great job! You got it right!" : "Oops! Keep exploring, you'll get the next one!"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
});

export default NatureCard;
