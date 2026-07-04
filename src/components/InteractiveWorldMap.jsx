
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { timeTravelersData } from '@/data/timeTravelersData.js';

export default function InteractiveWorldMap() {
  const navigate = useNavigate();
  const civilizations = timeTravelersData.civilizations;

  // Approximate coordinate percentages for the Unsplash world map image
  // Image: https://images.unsplash.com/photo-1698819337743-5f5361f6367c
  // Note: These are rough estimates and visual positioning for a generic world map representation.
  const markers = [
    { id: 'egypt', top: '48%', left: '54%', align: 'right' },
    { id: 'greece', top: '38%', left: '52%', align: 'right' },
    { id: 'china', top: '42%', left: '76%', align: 'left' },
    { id: 'aztec-maya', top: '50%', left: '22%', align: 'right' },
    { id: 'rome', top: '35%', left: '49%', align: 'left' }
  ];

  return (
    <div className="w-full relative rounded-3xl overflow-hidden border-4 border-gold/50 shadow-xl bg-[#c5d5cb]">
      {/* Decorative inner border */}
      <div className="absolute inset-2 border-2 border-dashed border-ancient-brown/20 rounded-2xl z-10 pointer-events-none" />
      
      {/* Map Image */}
      <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
        <img 
          src="https://images.unsplash.com/photo-1698819337743-5f5361f6367c?auto=format&fit=crop&w=2000&q=80" 
          alt="Vintage style world map" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
        />
        
        {/* Map Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ancient-brown/20" />

        {/* Markers */}
        {markers.map((marker) => {
          const civ = civilizations.find(c => c.id === marker.id);
          if (!civ) return null;
          const Icon = civ.icon;

          return (
            <div 
              key={civ.id}
              className="absolute z-20 group"
              style={{ top: marker.top, left: marker.left, transform: 'translate(-50%, -50%)' }}
            >
              {/* Pulsing ring background */}
              <div 
                className="absolute inset-0 rounded-full animate-ping opacity-50 w-full h-full scale-150"
                style={{ backgroundColor: civ.color }}
              />
              
              {/* Clickable Marker Button */}
              <button
                onClick={() => navigate(`/time-travelers/${civ.id}`)}
                className="relative bg-white border-2 rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-300 group-hover:z-30 focus:outline-none focus:ring-4 focus:ring-white/50"
                style={{ borderColor: civ.color }}
                aria-label={`Explore ${civ.name}`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: civ.color }} />
              </button>

              {/* Tooltip Label */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none drop-shadow-md whitespace-nowrap
                  ${marker.align === 'right' ? 'left-full ml-4 translate-x-2 group-hover:translate-x-0' : 'right-full mr-4 -translate-x-2 group-hover:translate-x-0'}
                `}
              >
                <div className="bg-parchment-pattern border-2 rounded-xl px-4 py-2 shadow-xl flex flex-col" style={{ borderColor: civ.color }}>
                  <span className="font-bold text-ancient-brown text-base md:text-lg leading-tight">{civ.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: civ.color }}>{civ.timeline}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
