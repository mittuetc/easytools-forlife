
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function FactCard({ fact, civilization }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('timeTravelerFavorites') || '[]');
    setIsFavorite(favorites.includes(fact.id));
  }, [fact.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('timeTravelerFavorites') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== fact.id);
    } else {
      newFavorites = [...favorites, fact.id];
    }
    
    localStorage.setItem('timeTravelerFavorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const Icon = civilization.icon;

  return (
    <div className="time-travel-card flex flex-col h-full group p-6">
      
      {/* Top Header Row */}
      <div className="flex justify-between items-start mb-4">
        <div 
          className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/60 border border-gold/20"
          style={{ color: civilization.color }}
        >
          <Icon className="w-4 h-4" />
          {fact.category}
        </div>
        
        <button 
          onClick={toggleFavorite}
          className="p-2 -m-2 rounded-full hover:bg-white/50 transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={cn("w-6 h-6 transition-all duration-300", isFavorite ? "fill-red-500 text-red-500 scale-110" : "text-ancient-brown/40 hover:text-red-400")} 
          />
        </button>
      </div>

      {/* Main Content */}
      <h3 className="text-2xl font-bold text-ancient-brown mb-3 leading-tight">
        {fact.title}
      </h3>
      
      <p className="text-ancient-brown/80 mb-6 flex-grow leading-relaxed">
        {fact.description}
      </p>

      {/* Metadata Footer */}
      <div className="mt-auto space-y-4">
        
        {/* Cool Discovery Callout */}
        <div className="bg-white/50 border border-gold/30 rounded-xl p-4 flex gap-3 items-start">
          <Sparkles className="w-5 h-5 shrink-0 mt-0.5" style={{ color: civilization.color }} />
          <p className="text-sm font-medium text-ancient-brown italic">
            <span className="font-bold non-italic mr-1" style={{ color: civilization.color }}>Cool Fact:</span> 
            {fact.coolDiscovery}
          </p>
        </div>

        {/* Location & Time Tags */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-gold/20">
          <div className="flex items-center gap-1.5 text-sm font-medium text-ancient-brown/70">
            <Clock className="w-4 h-4" />
            {fact.year}
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-ancient-brown/70">
            <MapPin className="w-4 h-4" />
            {fact.region}
          </div>
        </div>
        
      </div>
    </div>
  );
}
