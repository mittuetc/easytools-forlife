
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import CivilizationNav from '@/components/CivilizationNav.jsx';
import FactCard from '@/components/FactCard.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Search, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function ChinaPage() {
  const civilization = timeTravelersData.civilizations.find(c => c.id === 'china');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFacts = useMemo(() => {
    if (!searchQuery) return civilization.facts;
    const lowerQuery = searchQuery.toLowerCase();
    return civilization.facts.filter(fact => 
      fact.title.toLowerCase().includes(lowerQuery) || 
      fact.description.toLowerCase().includes(lowerQuery) ||
      fact.coolDiscovery.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, civilization.facts]);

  const Icon = civilization.icon;

  return (
    <div className="min-h-screen bg-parchment-pattern">
      <Helmet>
        <title>{`${civilization.name} | Time Travelers | Easy Tools For Life`}</title>
        <meta name="description" content={civilization.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b-4 border-gold/40">
        <div className="absolute inset-0 z-0">
          <img 
            src={civilization.heroImage} 
            alt={civilization.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--parchment))] via-transparent to-ancient-brown/60" />
          <div className="absolute inset-0 bg-[hsl(var(--china-accent))]/10 mix-blend-overlay" />
        </div>
        
        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/90 backdrop-blur rounded-full mb-6 border-4 border-gold shadow-xl shadow-gold/20">
            <Icon className="w-12 h-12" style={{ color: civilization.color }} />
          </div>
          <h1 className="font-bangers text-6xl md:text-8xl text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wide">
            {civilization.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-medium drop-shadow-md">
            {civilization.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-ancient-brown/80 backdrop-blur text-white px-6 py-3 rounded-2xl font-bold border border-gold/30">
              <Clock className="w-5 h-5 text-gold" />
              {civilization.timeline}
            </div>
            <div className="flex items-center gap-2 bg-ancient-brown/80 backdrop-blur text-white px-6 py-3 rounded-2xl font-bold border border-gold/30">
              <MapPin className="w-5 h-5 text-gold" />
              {civilization.location}
            </div>
          </div>
        </div>
      </section>

      <CivilizationNav />

      <main className="container max-w-7xl mx-auto px-4 py-16">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-ancient-brown/50" />
          </div>
          <Input
            type="text"
            placeholder={`Search ${civilization.name} facts...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 bg-white/70 border-2 border-gold/40 text-lg text-ancient-brown placeholder:text-ancient-brown/40 rounded-2xl shadow-inner focus-visible:ring-gold focus-visible:border-gold"
          />
        </div>

        {/* Facts Grid */}
        {filteredFacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredFacts.map((fact) => (
              <FactCard key={fact.id} fact={fact} civilization={civilization} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/40 rounded-3xl border-2 border-dashed border-gold/40">
            <Search className="w-16 h-16 mx-auto text-ancient-brown/30 mb-4" />
            <h3 className="text-2xl font-bold text-ancient-brown mb-2">No facts found</h3>
            <p className="text-ancient-brown/70">Try searching for something else like "Wall" or "Paper".</p>
          </div>
        )}
      </main>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm border-t border-gold/20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-8 tracking-wide">
            Ancient China for Kids — The Great Wall, Silk Road & Amazing Inventions
          </h1>
          
          <div className="prose prose-lg max-w-none text-ancient-brown/80 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to the incredible world of Ancient China! Discover one of the world's oldest and most advanced civilizations that flourished for thousands of years. From the magnificent Great Wall to the bustling Silk Road, Ancient China was a center of innovation, art, and wisdom that shaped the entire world.
            </p>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">What You'll Learn About Ancient China:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🧱</span>
                  <span><strong>The Great Wall</strong> — A massive defensive structure built to protect China from invasions, stretching thousands of miles</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🛣️</span>
                  <span><strong>The Silk Road</strong> — Ancient trade routes connecting China to the rest of the world, spreading goods and ideas</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">💡</span>
                  <span><strong>Amazing Inventions</strong> — Gunpowder, paper, printing, and the compass were all invented in Ancient China</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">👑</span>
                  <span><strong>Dynasties</strong> — Powerful ruling families like the Han, Tang, and Ming who governed China for centuries</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🧘</span>
                  <span><strong>Philosophy & Wisdom</strong> — Ancient teachings like Confucianism and Taoism that guided Chinese life and thought</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">Fun Facts About Ancient China:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The Great Wall of China is so long that it would take months to walk its entire length!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>Silk was so valuable in ancient times that it was worth more than gold, and only China knew how to make it!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The Terracotta Army — thousands of life-sized clay soldiers buried with a emperor to protect him in the afterlife.</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>Ancient Chinese people invented toothbrushes, noodles, and even early forms of ice cream!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
