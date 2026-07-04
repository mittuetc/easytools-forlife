
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx';
import ComicSeriesDisplay from './ComicSeriesDisplay.jsx';

export default function ComicSeriesArchive({ episodes, isLoading }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-64 w-full neo-brutal rounded-md" />
        ))}
      </div>
    );
  }

  if (!episodes || episodes.length === 0) {
    return (
      <div className="mt-20 text-center p-12 bg-muted neo-brutal">
        <h3 className="text-2xl font-bold text-muted-foreground">No episodes yet!</h3>
        <p className="mt-2">Check back later for more PB & J Adventures.</p>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="mb-10 text-center">
        <h3 className="text-4xl md:text-5xl comic-font text-foreground inline-block relative">
          Previous Episodes
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-[hsl(var(--jelly-purple))] -z-10 -rotate-1"></span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {episodes.map((ep, idx) => {
          const firstPanel = Array.isArray(ep.comic_panels) && ep.comic_panels.length > 0
            ? ep.comic_panels[0]
            : null;

          return (
            <Dialog key={ep.id || idx}>
              <DialogTrigger asChild>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedEpisode(ep)}
                  className="bg-white p-3 neo-brutal neo-brutal-hover cursor-pointer group flex flex-col h-full"
                >
                  <div className={`relative w-full aspect-square border-4 border-black overflow-hidden mb-4 ${firstPanel?.bg_color || 'bg-[hsl(var(--butter-yellow))]'} flex items-center justify-center p-4 text-center`}>
                    {firstPanel ? (
                      <p className="font-bold text-black bg-white/80 p-2 border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000] text-sm line-clamp-3">
                        {firstPanel.action}
                      </p>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-muted-foreground text-center px-4">
                        Preview unavailable
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-[hsl(var(--jelly-purple))] text-white border-2 border-black px-2 py-0.5 text-xs font-black shadow-[2px_2px_0_0_#000] -rotate-3">
                      Ep #{ep.episode_number || '?'}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <h4 className="font-bold text-lg comic-font text-foreground leading-tight mb-2 group-hover:text-[hsl(var(--pb-brown))] transition-colors">
                      {ep.episode_title || 'Untitled Episode'}
                    </h4>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {ep.date}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
                <DialogTitle className="sr-only">Episode {ep.episode_number}</DialogTitle>
                <div className="bg-background pt-8 pb-4 px-4 sm:px-8 rounded-xl neo-brutal mt-8 relative">
                  <ComicSeriesDisplay episode={selectedEpisode} isLoading={false} />
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
