
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import InteractiveWorldMap from '@/components/InteractiveWorldMap.jsx';
import TimeMachineGenerator from '@/components/TimeMachineGenerator.jsx';
import { timeTravelersData } from '@/data/timeTravelersData.js';
import { cn } from '@/lib/utils.js';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';

export default function TimeTravelersPage() {
  const navigate = useNavigate();
  const civilizations = timeTravelersData.civilizations;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Time Travelers - Explore Historical Civilizations | Educational Adventure",
    "description": "Journey through time and explore ancient civilizations. Learn fascinating facts about Egypt, Rome, Greece, China, and the Aztec-Maya civilizations with interactive maps and generators.",
    "url": "https://easytoolsforlife.com/time-travelers"
  };

  return (
    <div className="min-h-screen bg-parchment-pattern">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Time Travelers - Explore Historical Civilizations | Educational Adventure</title>
        <meta name="description" content="Journey through time and explore ancient civilizations. Learn fascinating facts about Egypt, Rome, Greece, China, and the Aztec-Maya civilizations with interactive maps and generators." />
        <meta name="keywords" content="time travel, history education, ancient civilizations, historical facts, interactive learning" />
        <meta property="og:title" content="Time Travelers - Explore Historical Civilizations | Educational Adventure" />
        <meta property="og:description" content="Journey through time and explore ancient civilizations. Learn fascinating facts about Egypt, Rome, Greece, China, and the Aztec-Maya civilizations with interactive maps and generators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easytoolsforlife.com/time-travelers" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b-4 border-gold/40">
        <div className="absolute inset-0 bg-gradient-to-br from-ancient-brown/10 to-transparent pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-4 bg-white/60 border border-gold/50 backdrop-blur rounded-full mb-6 shadow-md"
          >
            <Compass className="w-10 h-10 text-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bangers text-5xl md:text-7xl lg:text-8xl text-ancient-brown mb-6 drop-shadow-sm tracking-wide uppercase"
          >
            Explore Historical Civilizations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-ancient-brown/80 max-w-3xl mx-auto mb-12 font-medium"
          >
            Journey back thousands of years. Uncover the secrets, inventions, and amazing daily lives of the world's most incredible ancient civilizations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="sr-only">Time Machine Generator</h2>
            <TimeMachineGenerator className="mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 border-b border-gold/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-4">Interactive World Map</h2>
            <p className="text-lg text-ancient-brown/70 max-w-2xl mx-auto">Select a civilization on the map to begin your journey through time.</p>
          </div>
          <InteractiveWorldMap />
        </div>
      </section>

      {/* Civilizations Bento Grid */}
      <section className="py-24 bg-white/30 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-4">Choose Your Destination</h2>
            <p className="text-lg text-ancient-brown/70 max-w-2xl mx-auto">Where would you like to travel first?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {civilizations.map((civ, index) => {
              const Icon = civ.icon;
              // Make first two items span wider on large screens for a bento effect
              const isLarge = index === 0 || index === 1;
              
              return (
                <div 
                  key={civ.id}
                  onClick={() => navigate(`/time-travelers/${civ.id}`)}
                  className={cn(
                    "group cursor-pointer relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col",
                    isLarge ? "lg:col-span-2 xl:col-span-1" : ""
                  )}
                >
                  <div className="h-48 md:h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-ancient-brown/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={civ.heroImage} 
                      alt={`Historical representation of the ${civ.name} civilization`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm border border-gold/20">
                      <Icon className="w-6 h-6" style={{ color: civ.color }} />
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="font-bangers text-3xl text-ancient-brown mb-2 tracking-wide group-hover:text-gold transition-colors">{civ.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-ancient-brown/50 mb-4">{civ.timeline}</p>
                    <p className="text-ancient-brown/80 mb-8 flex-grow leading-relaxed">
                      {civ.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Button 
                        className="w-full bg-ancient-brown text-white hover:bg-gold transition-colors font-bold rounded-xl h-12"
                      >
                        Explore {civ.name} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm border-t border-gold/20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-bangers text-4xl md:text-5xl text-ancient-brown mb-8 tracking-wide">
            Time Travelers for Kids — Explore Ancient Civilizations & History
          </h1>
          
          <div className="prose prose-lg max-w-none text-ancient-brown/80 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to Time Travelers, the ultimate interactive journey through history! Step into the shoes of explorers and historians as you discover the remarkable achievements, daily lives, and fascinating stories of the world's greatest ancient civilizations.
            </p>

            <div>
              <h3 className="font-bangers text-2xl text-ancient-brown mb-4 tracking-wide">Choose Your Destination:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏺</span>
                  <span>Ancient Egypt — Discover the pyramids, pharaohs, and the mysteries of the Nile River</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🏛️</span>
                  <span>Ancient Greece — Explore democracy, philosophy, and the birthplace of Western civilization</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🐉</span>
                  <span>Ancient China — Uncover the Great Wall, silk roads, and ancient dynasties</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">🌽</span>
                  <span>Aztec & Maya — Learn about advanced civilizations in Mesoamerica</span>
                </li>
                <li className="flex items-start text-lg">
                  <span className="mr-3 text-2xl">⚔️</span>
                  <span>Ancient Rome — Experience the power, engineering, and legacy of the Roman Empire</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Each civilization offers unique insights into how ancient peoples lived, built incredible structures, developed writing systems, and created lasting cultural traditions that still influence our world today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
