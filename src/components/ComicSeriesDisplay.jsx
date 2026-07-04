
import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton.jsx';

const CARTOON_IMAGES = [
  // Panel 1: PB & J meeting
  'https://images.unsplash.com/photo-1643255083197-18721220670e?auto=format&fit=crop&w=800&q=80',
  // Panel 2: Adventure begins
  'https://images.unsplash.com/photo-1700399366735-b23820fb18d7?auto=format&fit=crop&w=800&q=80',
  // Panel 3: Meeting other food characters
  'https://images.unsplash.com/photo-1596248219860-05e3961fcb25?auto=format&fit=crop&w=800&q=80',
  // Panel 4: Playful interaction
  'https://images.unsplash.com/photo-1677862314475-88095a1c53ea?auto=format&fit=crop&w=800&q=80',
  // Panel 5: Group adventure scene
  'https://images.unsplash.com/photo-1695241189294-e405ed91553c?auto=format&fit=crop&w=800&q=80',
  // Panel 6: Heartwarming conclusion
  'https://images.unsplash.com/photo-1688660119179-ba8d8e153033?auto=format&fit=crop&w=800&q=80'
];

export default function ComicSeriesDisplay({ episode, isLoading }) {
  if (isLoading) {
    return (
      <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-muted/30 neo-brutal mb-16 animate-pulse">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <Skeleton className="h-16 w-64 rounded" />
          <Skeleton className="h-8 w-40 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 neo-brutal">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="aspect-square w-full neo-brutal" />
          ))}
        </div>
      </div>
    );
  }

  if (!episode) {
    return (
      <div className="w-full max-w-3xl mx-auto p-12 bg-[hsl(var(--jelly-purple))] text-white text-center neo-brutal mb-16">
        <h2 className="text-4xl comic-font tracking-widest uppercase drop-shadow-[2px_2px_0_#000]">
          Coming Soon!
        </h2>
        <p className="mt-4 text-xl font-bold bg-white text-black inline-block px-4 py-2 border-2 border-black -rotate-2">
          Our illustrators are finishing the next episode.
        </p>
      </div>
    );
  }

  const panels = Array.isArray(episode.comic_panels) ? episode.comic_panels : [];
  const displayDate = new Date(episode.date).toLocaleDateString(undefined, { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-[hsl(var(--bread-tan))] neo-brutal mb-16">
      
      <div className="text-center mb-10 relative">
        <div className="inline-block bg-white text-black font-black uppercase text-xl px-4 py-1 border-4 border-black -rotate-2 mb-4 shadow-[4px_4px_0_0_#000]">
          Episode #{episode.episode_number || '?'}
        </div>
        <h2 className="text-5xl md:text-7xl comic-font text-foreground drop-shadow-[4px_4px_0_#fff] leading-tight">
          {episode.episode_title || 'Untitled Episode'}
        </h2>
        <div className="mt-4 text-foreground font-bold tracking-widest uppercase">
          {displayDate}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 md:p-6 neo-brutal">
        {panels.map((panel, i) => {
          const finalImageUrl = panel.image_url || CARTOON_IMAGES[i % CARTOON_IMAGES.length];
          const isWide = panels.length % 2 !== 0 && i === panels.length - 1;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative overflow-hidden comic-panel-bg aspect-square neo-brutal group flex flex-col items-center justify-center p-6 text-center ${
                isWide ? 'md:col-span-2 md:aspect-[2.5/1]' : ''
              }`}
              style={{ backgroundImage: `url(${finalImageUrl})` }}
            >
              {/* Dark overlay for contrast */}
              <div className="panel-overlay"></div>

              <div className="absolute top-2 left-2 bg-white neo-brutal font-bold text-black px-2 py-1 text-sm z-20">
                #{i + 1}
              </div>

              {panel.sound_effects && (
                <div className="absolute top-4 right-4 z-20 rotate-12 scale-110 group-hover:scale-125 transition-transform duration-300">
                  <span className="sound-effect text-3xl md:text-5xl text-[hsl(var(--comic-red))] drop-shadow-[3px_3px_0_#000]">
                    {panel.sound_effects}
                  </span>
                </div>
              )}

              {panel.action && (
                <div className="relative z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl border-2 border-black mb-4 shadow-[4px_4px_0_0_#000] max-w-[80%] transition-transform group-hover:scale-105">
                  <p className="font-bold text-lg leading-snug text-black">
                    {panel.action}
                  </p>
                </div>
              )}

              {panel.dialogue && (
                <div className="relative z-20 mt-auto w-full">
                  <div className="speech-bubble text-sm md:text-base leading-snug mx-auto max-w-[90%] transition-transform group-hover:-translate-y-1">
                    {panel.dialogue}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
        
        {panels.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-bold italic neo-brutal border-dashed">
            Art pending or failed to load...
          </div>
        )}
      </div>
    </div>
  );
}
