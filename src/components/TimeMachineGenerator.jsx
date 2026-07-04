
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, X, ArrowRight } from 'lucide-react';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import FactCard from './FactCard.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';

export default function TimeMachineGenerator({ className }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [randomFact, setRandomFact] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Flatten all facts into a single array with civilization context attached
  const allFacts = timeTravelersData.civilizations.flatMap(civ => 
    civ.facts.map(fact => ({ fact, civ }))
  );

  const generateFact = () => {
    setIsGenerating(true);
    // Fake loading delay for dramatic effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allFacts.length);
      setRandomFact(allFacts[randomIndex]);
      setIsGenerating(false);
    }, 600);
  };

  const handleOpen = () => {
    generateFact();
    setIsOpen(true);
  };

  const navigateToCiv = () => {
    if (randomFact) {
      setIsOpen(false);
      navigate(`/time-travelers/${randomFact.civ.id}`);
    }
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--ancient-brown))] p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="bg-parchment-pattern h-full w-full rounded-xl px-6 py-4 flex items-center justify-center gap-3 border-2 border-transparent group-hover:border-white/20 transition-colors">
          <div className="bg-[hsl(var(--gold))] text-white p-2 rounded-full shadow-inner animate-pulse-slow">
            <Zap className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="font-bangers tracking-wider text-xl text-ancient-brown">Time Machine</div>
            <div className="text-xs font-bold uppercase tracking-wider text-ancient-brown/70">Generate Random Fact</div>
          </div>
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl bg-parchment-pattern border-4 border-gold shadow-2xl p-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--egypt-accent))] via-[hsl(var(--china-accent))] to-[hsl(var(--rome-accent))]" />
          
          <DialogHeader className="p-6 pb-2 border-b border-gold/20">
            <DialogTitle className="font-bangers text-3xl tracking-wide text-ancient-brown flex items-center gap-2">
              <Zap className="w-6 h-6 text-gold fill-gold" />
              Time Jump Successful!
            </DialogTitle>
          </DialogHeader>

          <div className="p-6 min-h-[300px] flex items-center justify-center relative">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center text-ancient-brown/60 space-y-4">
                <Zap className="w-12 h-12 animate-spin text-gold" />
                <p className="font-bold uppercase tracking-widest animate-pulse">Traveling through time...</p>
              </div>
            ) : randomFact ? (
              <div className="w-full animate-in fade-in zoom-in duration-500">
                <FactCard fact={randomFact.fact} civilization={randomFact.civ} />
              </div>
            ) : null}
          </div>

          <div className="p-6 pt-4 bg-white/40 border-t border-gold/20 flex flex-col sm:flex-row justify-between gap-4">
            <Button 
              variant="outline" 
              onClick={generateFact}
              disabled={isGenerating}
              className="border-gold text-ancient-brown hover:bg-gold/10 font-bold tracking-wide"
            >
              <Zap className="w-4 h-4 mr-2" /> Jump Again
            </Button>
            
            {randomFact && (
              <Button 
                onClick={navigateToCiv}
                className="bg-ancient-brown text-white hover:bg-ancient-brown/90 font-bold tracking-wide shadow-md"
              >
                Explore {randomFact.civ.name} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
