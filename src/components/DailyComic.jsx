
import React from 'react';
import { motion } from 'framer-motion';

export default function DailyComic({ comic }) {
  if (!comic) return null;
  
  // Extract panels. Fallback to imageUrl if panels array is missing.
  const panels = Array.isArray(comic.panels) && comic.panels.length > 0 
    ? comic.panels 
    : (comic.imageUrl ? [comic.imageUrl] : []);

  const formattedDate = new Date(comic.date).toLocaleDateString(undefined, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-[hsl(var(--comic-yellow))] comic-panel mb-12">
      {/* Header Section */}
      <div className="text-center mb-10 relative">
        <div className="inline-block relative z-10">
          <h2 className="text-5xl md:text-7xl comic-font text-foreground uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
            {comic.title || "Today's Comic"}
          </h2>
        </div>
        <div className="mt-4 flex justify-center">
          <p className="text-lg md:text-xl font-bold bg-white text-black px-6 py-2 border-4 border-black -rotate-2 shadow-[6px_6px_0_0_#000]">
            {formattedDate}
          </p>
        </div>
      </div>

      {/* Comic Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 md:p-6 border-4 border-black">
        {panels.map((imgUrl, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative comic-panel overflow-hidden bg-cover bg-center aspect-square border-4 border-black ${
              panels.length === 3 && i === 2 ? 'md:col-span-2 aspect-[2/1] md:aspect-[3/1]' : ''
            }`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            {/* Panel Number Badge */}
            <div className="absolute top-3 left-3 bg-white border-2 border-black font-bold text-black px-3 py-1 text-sm shadow-[2px_2px_0_0_#000]">
              #{i + 1}
            </div>
          </motion.div>
        ))}
        {panels.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-bold italic">
            No illustrations available for this comic.
          </div>
        )}
      </div>

      {/* Story / Text Section */}
      {comic.story && (
        <div className="mt-8 relative">
          <div className="bg-white p-6 md:p-8 border-4 border-black text-lg md:text-xl font-bold leading-relaxed text-black shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
            <p className="whitespace-pre-wrap">{comic.story}</p>
          </div>
        </div>
      )}
    </div>
  );
}
