
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ComicsFooter from '@/components/ComicsFooter.jsx';
import ComicDisplay from '@/components/ComicDisplay.jsx';
import ComicArchive from '@/components/ComicArchive.jsx';
import { useComicGeneration } from '@/hooks/useComicGeneration.js';
import { Button } from '@/components/ui/button.jsx';

export default function DailyComicPage() {
  const { comic } = useComicGeneration();
  const [selectedArchiveComic, setSelectedArchiveComic] = useState(null);

  const displayComic = selectedArchiveComic || comic;
  const todayStr = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-[hsl(var(--comic-yellow,48_96%_65%))]/40 selection:text-foreground">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Daily Comic | Kids Cartoons & Adventures</title>
        <meta name="description" content="View the fun, family-friendly daily comic strip! Bright illustrations, engaging stories, and colorful adventures for kids." />
      </Helmet>
      
      <main className="flex-1 w-full pt-10 pb-24 border-t-8 border-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold comic-font text-primary drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-widest uppercase mb-4 text-white">
              The Daily Comic
            </h1>
            <p className="text-xl md:text-2xl font-bold text-foreground bg-[hsl(var(--comic-yellow,48_96%_65%))] inline-block px-6 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] -rotate-1">
              {todayStr}
            </p>
          </div>

          {/* Main Comic Display Area */}
          {displayComic && (
            <div>
              {selectedArchiveComic && (
                <div className="mb-6 flex justify-center">
                  <Button 
                    onClick={() => setSelectedArchiveComic(null)}
                    variant="outline"
                    className="border-4 border-black font-bold shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-y-1 transition-all"
                  >
                    &larr; Back to Today's Comic
                  </Button>
                </div>
              )}
              <ComicDisplay comic={displayComic} />
            </div>
          )}

          {/* Archive Section */}
          <ComicArchive onSelectComic={setSelectedArchiveComic} />

        </div>
      </main>
      
      <ComicsFooter />
    </div>
  );
}
