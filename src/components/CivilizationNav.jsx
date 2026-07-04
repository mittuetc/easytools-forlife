
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import { cn } from '@/lib/utils.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CivilizationNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const civilizations = timeTravelersData.civilizations;

  const currentPath = location.pathname.split('/').pop();
  const currentIndex = civilizations.findIndex(c => c.id === currentPath);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/time-travelers/${civilizations[currentIndex - 1].id}`);
    } else {
      navigate(`/time-travelers/${civilizations[civilizations.length - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < civilizations.length - 1) {
      navigate(`/time-travelers/${civilizations[currentIndex + 1].id}`);
    } else {
      navigate(`/time-travelers/${civilizations[0].id}`);
    }
  };

  return (
    <div className="w-full bg-parchment-pattern border-y border-gold/30 py-4 shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Navigation (Prev/Next + Current) */}
        <div className="flex md:hidden items-center justify-between">
          <button 
            onClick={handlePrevious}
            className="p-2 text-ancient-brown hover:text-gold transition-colors"
            aria-label="Previous civilization"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 font-bold text-lg text-ancient-brown">
            {currentIndex >= 0 && (
              <>
                {React.createElement(civilizations[currentIndex].icon, { className: "w-5 h-5", style: { color: civilizations[currentIndex].color } })}
                {civilizations[currentIndex].name}
              </>
            )}
            {currentIndex === -1 && "Time Travelers"}
          </div>

          <button 
            onClick={handleNext}
            className="p-2 text-ancient-brown hover:text-gold transition-colors"
            aria-label="Next civilization"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Tab Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-6">
          {civilizations.map((civ) => {
            const Icon = civ.icon;
            const isActive = currentPath === civ.id;
            
            return (
              <button
                key={civ.id}
                onClick={() => navigate(`/time-travelers/${civ.id}`)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold border-2 text-lg",
                  isActive 
                    ? "bg-white/50 shadow-sm transform scale-105" 
                    : "border-transparent text-ancient-brown/70 hover:bg-white/30 hover:text-ancient-brown"
                )}
                style={{
                  borderColor: isActive ? civ.color : 'transparent',
                  color: isActive ? civ.color : undefined
                }}
              >
                <Icon className={cn("w-5 h-5 transition-transform duration-300", isActive && "scale-110")} />
                {civ.name}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
