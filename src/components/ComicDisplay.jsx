
import React from 'react';
import { motion } from 'framer-motion';

const ANIME_IMAGES = {
  pb: [
    'https://images.unsplash.com/photo-1643255083197-18721220670e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1681907280934-c0a40a98061c?auto=format&fit=crop&w=800&q=80'
  ],
  j: [
    'https://images.unsplash.com/photo-1482800563307-264928b8d772?auto=format&fit=crop&w=800&q=80'
  ],
  adventure: [
    'https://images.unsplash.com/photo-1690681235201-ba21100ef57c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1677862314475-88095a1c53ea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1695241189294-e405ed91553c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1695199089309-bf47592147ac?auto=format&fit=crop&w=800&q=80'
  ]
};

const ALL_IMAGES = [
  ...ANIME_IMAGES.pb,
  ...ANIME_IMAGES.j,
  ...ANIME_IMAGES.adventure
];

function getPanelImage(panel, index) {
  const content = `${panel.description || ''} ${panel.text || ''} ${panel.dialogue || ''}`.toLowerCase();
  
  if (content.includes('pb') || content.includes('peanut') || content.includes('butter')) {
    return ANIME_IMAGES.pb[index % ANIME_IMAGES.pb.length];
  }
  if (content.includes('j ') || content.includes('jelly') || content.includes('jam')) {
    return ANIME_IMAGES.j[index % ANIME_IMAGES.j.length];
  }
  if (content.includes('run') || content.includes('jump') || content.includes('explore') || content.includes('adventure')) {
    return ANIME_IMAGES.adventure[index % ANIME_IMAGES.adventure.length];
  }
  
  // Fallback to cycling through all available images
  return ALL_IMAGES[index % ALL_IMAGES.length];
}

export default function ComicDisplay({ comic }) {
  if (!comic) return null;
  
  // Support both legacy schema (comic_panels) and new schema (panels)
  const rawPanels = Array.isArray(comic.panels) ? comic.panels : (comic.comic_panels || []);
  const panels = rawPanels.length > 0 ? rawPanels : [];

  const formattedDate = comic.date ? new Date(comic.date).toLocaleDateString(undefined, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : 'Today';

  const title = comic.title || comic.comic_title || "Today's Comic";

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-[hsl(var(--comic-yellow,48_96%_65%))] comic-panel mb-16 border-4 border-black shadow-[8px_8px_0_0_#000]">
      {/* Header Section */}
      <div className="text-center mb-10 relative">
        <div className="inline-block relative z-10 mb-4">
          <h2 className="text-5xl md:text-7xl comic-font text-black uppercase drop-shadow-[3px_3px_0_rgba(255,255,255,1)]">
            {title}
          </h2>
        </div>
        
        {comic.story && (
          <div className="max-w-3xl mx-auto bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000] mb-6 rounded-xl">
            <p className="text-lg md:text-xl font-bold text-black text-balance">
              {comic.story}
            </p>
          </div>
        )}

        <div className="mt-2 flex justify-center">
          <p className="text-lg md:text-xl font-bold bg-white text-black px-6 py-2 border-4 border-black -rotate-2 shadow-[6px_6px_0_0_#000]">
            {formattedDate}
          </p>
        </div>
      </div>

      {/* Comic Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 md:p-6 border-4 border-black shadow-inner">
        {panels.map((panel, i) => {
          const finalImageUrl = panel.image_url || getPanelImage(panel, i);
          const isWide = panels.length % 2 !== 0 && i === panels.length - 1;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`relative flex flex-col p-6 comic-panel-bg overflow-hidden border-4 border-black group text-center items-center justify-center ${
                isWide ? 'md:col-span-2 aspect-[2/1] md:aspect-[3/1]' : 'aspect-square'
              }`}
              style={{ backgroundImage: `url(${finalImageUrl})` }}
            >
              {/* Optional overlay for better text contrast if not using speech bubbles exclusively */}
              <div className="panel-overlay"></div>

              {/* Panel Number Badge */}
              <div className="absolute top-3 left-3 bg-white border-2 border-black font-bold text-black px-3 py-1 text-sm shadow-[2px_2px_0_0_#000] z-20">
                #{i + 1}
              </div>

              {/* Mood Badge */}
              {panel.mood && (
                <div className="absolute top-3 right-3 bg-[hsl(var(--comic-blue,200_95%_50%))] text-white border-2 border-black font-bold px-3 py-1 text-xs shadow-[2px_2px_0_0_#000] z-20 rotate-6">
                  {panel.mood}
                </div>
              )}

              {/* Sound Effect (Legacy) */}
              {panel.sound_effects && (
                <div className="absolute top-4 right-4 z-20 rotate-12 scale-110 group-hover:scale-125 transition-transform">
                  <span className="sound-effect text-3xl md:text-4xl text-[hsl(var(--comic-red,350_85%_55%))] drop-shadow-[2px_2px_0_#000]">
                    {panel.sound_effects}
                  </span>
                </div>
              )}

              {/* Speech Bubble / Text */}
              {(panel.text || panel.dialogue) && (
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="speech-bubble text-sm md:text-base font-bold">
                    {panel.text || panel.dialogue}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
        {panels.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-bold italic border-4 border-dashed border-muted-foreground/30">
            No illustrations or panels available for this comic.
          </div>
        )}
      </div>
    </div>
  );
}
