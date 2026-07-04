
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { Loader2, Calendar } from 'lucide-react';

export default function ComicArchive({ onSelectComic }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArchive = async () => {
      try {
        const result = await pb.collection('comics').getList(1, 100, {
          sort: '-date',
          $autoCancel: false
        });
        setComics(result.items);
      } catch (err) {
        setError("Failed to load comic archive.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArchive();
  }, []);

  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center text-destructive font-bold">
        {error}
      </div>
    );
  }

  if (comics.length === 0) {
    return null;
  }

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4 mb-10 border-b-4 border-black pb-4">
        <Calendar className="w-10 h-10 text-[hsl(var(--comic-blue))]" />
        <h2 className="text-4xl md:text-5xl font-bold comic-font tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)]">
          Comic Archive
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {comics.map(comic => {
          const firstPanel = Array.isArray(comic.comic_panels) && comic.comic_panels.length > 0 
            ? comic.comic_panels[0].image_url 
            : null;

          return (
            <div 
              key={comic.id} 
              onClick={() => onSelectComic && onSelectComic(comic)}
              className="comic-panel bg-card p-3 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer group flex flex-col h-full"
            >
              <div className="relative w-full aspect-square border-4 border-black overflow-hidden mb-4 bg-muted">
                {firstPanel ? (
                  <img 
                    src={firstPanel} 
                    alt={comic.comic_title || `Comic from ${comic.date}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-bold text-muted-foreground comic-font text-xl">No Cover</span>
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-[hsl(var(--comic-yellow))] border-2 border-black px-2 py-1 text-xs font-bold shadow-[2px_2px_0_0_#000] rotate-3">
                  {comic.date}
                </div>
              </div>
              
              <h3 className="font-bold text-xl comic-font group-hover:text-[hsl(var(--comic-blue))] transition-colors line-clamp-2 leading-tight">
                {comic.comic_title || "Untitled Adventure"}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
