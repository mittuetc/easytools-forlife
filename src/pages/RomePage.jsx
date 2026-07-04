
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import CivilizationNav from '@/components/CivilizationNav.jsx';
import FactCard from '@/components/FactCard.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Search, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function RomePage() {
  const civilization = timeTravelersData.civilizations.find(c => c.id === 'rome');
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
        <title>Ancient Rome for Kids — Emperors, Gladiators & the Roman Empire</title>
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
          <div className="absolute inset-0 bg-[hsl(var(--rome-accent))]/10 mix-blend-overlay" />
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
            <p className="text-ancient-brown/70">Try searching for something else like "Gladiator" or "Aqueduct".</p>
          </div>
        )}
      </main>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm border-t border-gold/20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-8 tracking-wide">
            Ancient Rome for Kids — Emperors, Gladiators & the Roman Empire
          </h1>
          
          <div className="prose prose-lg max-w-none text-ancient-brown/80 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to the magnificent world of Ancient Rome! Discover one of history's greatest civilizations that built a vast empire spanning three continents. From powerful emperors and fearless gladiators to incredible engineering and military might, Ancient Rome shaped the world we live in today. Explore the grandeur of the Colosseum, the strength of the Roman Army, and the innovations that made Rome the center of the ancient world.
            </p>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">What You'll Learn About Ancient Rome:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">👑</span>
                  <span><strong>Roman Emperors</strong> — Powerful rulers like Julius Caesar, Augustus, and Nero who controlled the empire and made important decisions</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏛️</span>
                  <span><strong>The Colosseum</strong> — A massive arena where gladiators fought and thousands of people gathered for entertainment</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">⚔️</span>
                  <span><strong>The Roman Army</strong> — One of the most disciplined and powerful military forces in history that conquered vast territories</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏠</span>
                  <span><strong>Roman Daily Life</strong> — How ordinary Romans lived, worked, ate, and spent their time in cities and the countryside</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">💡</span>
                  <span><strong>Roman Inventions</strong> — Aqueducts, concrete, roads, and other engineering marvels that changed civilization</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">Fun Facts About Ancient Rome:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The Romans built the first shopping mall! It was called Trajan's Market and had over 150 shops where people could buy everything they needed.</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The word "salary" comes from the Roman word "salarium," which was the salt money given to Roman soldiers. Salt was very valuable!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The Romans built over 250,000 miles of roads to connect their empire. Many of these ancient roads still exist today!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>Gladiators were not always slaves or criminals — some were free men who chose to fight for fame and fortune in the arena.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Ancient Rome's influence is everywhere! The Romans gave us democracy, law and order, amazing architecture, and engineering that still inspires us today. Their language, Latin, influenced many modern languages. Their ideas about government and justice shaped how countries are run. Rome reminds us that great civilizations are built through hard work, innovation, and the courage of ordinary people doing extraordinary things.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
