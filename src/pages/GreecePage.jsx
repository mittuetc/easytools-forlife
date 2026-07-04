
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import CivilizationNav from '@/components/CivilizationNav.jsx';
import FactCard from '@/components/FactCard.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Search, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function GreecePage() {
  const civilization = timeTravelersData.civilizations.find(c => c.id === 'greece');
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
          <div className="absolute inset-0 bg-[hsl(var(--greece-accent))]/10 mix-blend-overlay" />
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
            <p className="text-ancient-brown/70">Try searching for something else like "Sparta" or "Olympics".</p>
          </div>
        )}
      </main>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm border-t border-gold/20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-8 tracking-wide">
            Ancient Greece for Kids — Gods, Olympics & Great Philosophers
          </h1>
          
          <div className="prose prose-lg max-w-none text-ancient-brown/80 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to the amazing world of Ancient Greece! Discover the birthplace of Western civilization, where brilliant minds created democracy, philosophy, and incredible works of art and architecture. From the mighty gods on Mount Olympus to the athletic competitions of the Olympics, Ancient Greece shaped the world we live in today.
            </p>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">What You'll Learn About Ancient Greece:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">⚖️</span>
                  <span><strong>Democracy</strong> — How ancient Greeks invented democracy and gave citizens a voice in government</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🧠</span>
                  <span><strong>Philosophy</strong> — The great thinkers like Socrates, Plato, and Aristotle who asked big questions about life</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏅</span>
                  <span><strong>The Olympics</strong> — Ancient athletic games held to honor the gods and celebrate human achievement</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">⚡</span>
                  <span><strong>Gods & Goddesses</strong> — The powerful deities like Zeus, Athena, and Poseidon who ruled from Mount Olympus</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏛️</span>
                  <span><strong>Architecture & Art</strong> — Beautiful temples, sculptures, and buildings that inspired the world</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">Fun Facts About Ancient Greece:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The ancient Olympic Games were held every four years and athletes competed completely naked!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>Ancient Greeks invented the word "idiot" to describe someone who didn't participate in politics or public life.</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>The Parthenon, a famous temple in Athens, was built without a single nail — only stone blocks fitted together perfectly!</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3">✨</span>
                  <span>Ancient Greeks created the first vending machine — it dispensed holy water in temples when you dropped in a coin!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
