
import React from 'react';
import { Helmet } from 'react-helmet';
import { RefreshCw, AlertCircle } from 'lucide-react';
import ComicsFooter from '@/components/ComicsFooter.jsx';
import ComicSeriesDisplay from '@/components/ComicSeriesDisplay.jsx';
import ComicSeriesArchive from '@/components/ComicSeriesArchive.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useComicSeriesGeneration } from '@/hooks/useComicSeriesGeneration.js';

export default function ComicSeriesPage() {
  const { currentEpisode, allEpisodes, isLoading, error, retry } = useComicSeriesGeneration();

  // Filter out the current episode from the archive display
  const archiveEpisodes = allEpisodes.filter(ep => ep.id !== currentEpisode?.id);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#fdfbf7] text-foreground selection:bg-[hsl(var(--pb-brown))]/40">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>PB & J Adventures | Daily Comic Series</title>
        <meta name="description" content="Follow the hilarious daily adventures of Peanut Butter and Jelly! A wholesome, vibrant comic series for kids." />
      </Helmet>
      
      <main className="flex-1 w-full pt-12 pb-24 border-t-8 border-black overflow-hidden relative">
        
        {/* Playful Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_#000_2px,_transparent_2px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black comic-font text-white drop-shadow-[5px_5px_0_#000] tracking-widest uppercase mb-4" style={{ WebkitTextStroke: '2px black' }}>
              PB & J <span className="text-[hsl(var(--pb-brown))]">Adventures</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black bg-[hsl(var(--butter-yellow))] inline-block px-6 py-2 neo-brutal rotate-1">
              A new episode every day!
            </p>
          </div>

          {error && !currentEpisode && (
            <div className="max-w-2xl mx-auto bg-white p-8 neo-brutal flex flex-col items-center justify-center text-center mb-12">
              <AlertCircle className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-2xl font-black text-foreground mb-2">Generation Interrupted</h3>
              <p className="text-muted-foreground font-medium mb-6">
                {error}
              </p>
              <Button 
                onClick={retry} 
                className="bg-[hsl(var(--jelly-purple))] hover:bg-[hsl(var(--jelly-purple))]/90 text-white font-bold text-lg px-8 py-6 h-auto neo-brutal neo-brutal-hover w-full sm:w-auto"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Generating Again
              </Button>
            </div>
          )}

          {/* Today's Episode Spotlight */}
          {!error && (
            <ComicSeriesDisplay episode={currentEpisode} isLoading={isLoading} />
          )}

          {/* Past Episodes Archive */}
          <ComicSeriesArchive episodes={archiveEpisodes} isLoading={isLoading} />

        </div>
      </main>
      
      <ComicsFooter />
    </div>
  );
}
