
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Volume2, VolumeX, Heart, Share2, Droplets, Info, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx';
import { soundManager } from '@/lib/soundManager.js';
import { oceanCreatures, categories, filterCreatures } from '@/data/oceanCreatures.js';
import { cn } from '@/lib/utils.js';
import { toast } from 'sonner';

export default function OceanExplorerPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState(null);
  const [randomCreature, setRandomCreature] = useState(null);

  // Daily Refresh & LocalStorage Init Logic
  useEffect(() => {
    const savedFavs = localStorage.getItem('oceanFavorites');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));

    const storedTimestamp = localStorage.getItem('oceanExplorerLastRefresh');
    const now = Date.now();
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

    if (!storedTimestamp || (now - parseInt(storedTimestamp, 10)) > ONE_DAY_MS) {
      // 24 hours passed, reset state and update timestamp
      localStorage.setItem('oceanExplorerLastRefresh', now.toString());
      setActiveTab('All');
      setSearchQuery('');
    }
  }, []);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    soundManager.playPop();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('oceanFavorites', JSON.stringify(newFavs));
    toast(favorites.includes(id) ? "Removed from favorites" : "Added to favorites!");
  };

  const handleTabChange = (tab) => {
    soundManager.playBubble();
    setActiveTab(tab);
  };

  const handleRandom = () => {
    soundManager.playSplash();
    const random = oceanCreatures[Math.floor(Math.random() * oceanCreatures.length)];
    setRandomCreature(random);
  };

  const filteredCreatures = useMemo(() => {
    return filterCreatures(searchQuery, activeTab, 'All', 'All');
  }, [searchQuery, activeTab]);

  // Related creatures for internal linking inside the detail modal
  const relatedCreatures = useMemo(() => {
    if (!selectedCreature) return [];
    return oceanCreatures
      .filter(c => c.category === selectedCreature.category && c.id !== selectedCreature.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [selectedCreature]);

  // JSON-LD structured data for comprehensive SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ocean Explorer - Discover Marine Life & Ocean Creatures",
    "description": "Explore interactive ocean creatures, learn about marine life, and discover the wonders of the ocean with Ocean Explorer.",
    "url": "https://easytoolsforlife.com/ocean-explorer"
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F8FF]">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Ocean Explorer - Discover Marine Life & Ocean Creatures</title>
        <meta name="description" content="Explore interactive ocean creatures, learn about marine life, and discover the wonders of the ocean with Ocean Explorer." />
        <meta name="keywords" content="ocean explorer, marine life, sea creatures, ocean education, interactive learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://easytoolsforlife.com/ocean-explorer" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Ocean Explorer - Discover Marine Life & Ocean Creatures" />
        <meta property="og:description" content="Explore interactive ocean creatures, learn about marine life, and discover the wonders of the ocean with Ocean Explorer." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easytoolsforlife.com/ocean-explorer" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ocean Explorer - Discover Marine Life & Ocean Creatures" />
        <meta name="twitter:description" content="Explore interactive ocean creatures, learn about marine life, and discover the wonders of the ocean with Ocean Explorer." />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb Navigation for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-[#00A8E8] transition-colors">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-[#001F3F] font-medium" aria-current="page">Ocean Explorer</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bangers text-[#0077BE] tracking-wide">
              Discover the Wonders of the Ocean <span className="inline-block animate-bounce-slow" aria-hidden="true">🌊</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8]/10"
              onClick={() => {
                const isEnabled = soundManager.toggle();
                setSoundEnabled(isEnabled);
              }}
              aria-label={soundEnabled ? "Mute sounds" : "Unmute sounds"}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>
            <Button 
              onClick={handleRandom}
              className="bg-[#00A8E8] hover:bg-[#0077BE] text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Droplets className="w-4 h-4 mr-2" aria-hidden="true" />
              Random Creature
            </Button>
          </div>
        </header>

        {/* Controls Section */}
        <section aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="sr-only">How It Works</h2>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8E8] w-6 h-6" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Search for sea creatures..."
                aria-label="Search for sea creatures"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-6 text-lg rounded-full border-2 border-[#00A8E8]/30 focus-visible:ring-[#00A8E8] shadow-sm text-[#001F3F]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#00A8E8]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide snap-x" role="tablist" aria-label="Categories">
            {categories.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "snap-start whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300",
                  activeTab === tab 
                    ? "bg-[#00A8E8] text-white shadow-md scale-105" 
                    : "bg-white text-[#0077BE] border border-[#00A8E8]/20 hover:bg-[#00A8E8]/10"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div aria-live="polite" className="mb-6 text-[#0077BE] font-medium">
            Showing {filteredCreatures.length} of {oceanCreatures.length} creatures
          </div>
        </section>

        {/* Grid */}
        <section aria-labelledby="featured-creatures-heading" className="flex-1">
          <h2 id="featured-creatures-heading" className="sr-only">Featured Creatures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            <AnimatePresence mode="popLayout">
              {filteredCreatures.map((creature, index) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  key={creature.id}
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedCreature(creature);
                  }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border-2 border-transparent hover:border-[#00A8E8]/30 transition-all cursor-pointer group flex flex-col h-full"
                  aria-labelledby={`heading-${creature.id}`}
                >
                  <figure className="relative h-48 overflow-hidden bg-[#E0F7FA] m-0">
                    <img 
                      src={creature.illustration} 
                      alt={`Colorful illustration of ${creature.name}, a fascinating ${creature.category} living in the ${creature.habitat}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <figcaption className="sr-only">{creature.name} - {creature.category}</figcaption>
                    <button 
                      onClick={(e) => toggleFavorite(creature.id, e)}
                      aria-label={`${favorites.includes(creature.id) ? 'Remove' : 'Add'} ${creature.name} to favorites`}
                      className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
                    >
                      <Heart className={cn("w-5 h-5", favorites.includes(creature.id) ? "fill-red-500 text-red-500" : "text-gray-500")} aria-hidden="true" />
                    </button>
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs font-bold rounded-full">
                      {creature.category}
                    </div>
                  </figure>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 id={`heading-${creature.id}`} className="text-xl font-bold text-[#001F3F] mb-2 font-bangers tracking-wide">
                      {creature.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                      {creature.funFact}
                    </p>
                    <div className="flex items-center text-xs text-[#0077BE] font-medium mt-auto" aria-hidden="true">
                      <Info className="w-4 h-4 mr-1" /> Click to learn more
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
            
            {filteredCreatures.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="text-6xl mb-4" aria-hidden="true">🐠</div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-2">No creatures found!</h3>
                <p className="text-muted-foreground">Try searching for something else or changing categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="mt-8 mb-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#00A8E8]/20">
          <h1 className="text-3xl md:text-4xl font-bangers text-[#001F3F] mb-6 tracking-wide">
            Ocean Explorer for Kids — Dive Into the Deep Sea & Discover Marine Life
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Welcome to Ocean Explorer, the ultimate interactive learning experience for kids! Dive deep into the ocean and discover fascinating marine life, from colorful coral reefs to the mysterious deep sea.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0077BE] mt-8 mb-4">What You'll Discover in Ocean Explorer</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Interactive profiles of your favorite sea creatures.</li>
              <li>Beautiful illustrations of marine life in their natural habitats.</li>
              <li>Fun facts and educational information about ocean ecosystems.</li>
              <li>Easy-to-use search and category filters to find specific animals.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0077BE] mt-8 mb-4">Amazing Ocean Facts for Kids</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The ocean covers more than 70% of the Earth's surface.</li>
              <li>There are thousands of marine species yet to be discovered.</li>
              <li>Coral reefs are home to 25% of all marine life.</li>
              <li>The blue whale is the largest animal ever known to have lived on Earth.</li>
            </ul>
          </div>
        </section>

      </main>

      {/* Detail Modal */}
      <Dialog open={!!selectedCreature} onOpenChange={(open) => !open && setSelectedCreature(null)}>
        <DialogContent className="sm:max-w-md rounded-3xl overflow-hidden p-0 border-0" aria-describedby="dialog-desc">
          {selectedCreature && (
            <article className="flex flex-col">
              <figure className="relative h-64 w-full m-0">
                <img 
                  src={selectedCreature.illustration} 
                  alt={`Detailed majestic view of ${selectedCreature.name} in its natural ocean habitat`} 
                  loading="lazy"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-6 text-3xl font-bangers text-white tracking-wide">
                  {selectedCreature.name}
                </figcaption>
              </figure>
              <div className="p-6 bg-white" id="dialog-desc">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00A8E8]/10 text-[#0077BE] text-xs font-bold rounded-full">
                    {selectedCreature.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {selectedCreature.size}
                  </span>
                </div>
                <div className="space-y-4">
                  <section>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Ocean Facts</h3>
                    <p className="text-[#001F3F] leading-relaxed">{selectedCreature.funFact}</p>
                  </section>
                  <section>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Habitat</h3>
                    <p className="text-[#001F3F] font-medium">{selectedCreature.habitat}</p>
                  </section>
                  
                  {/* Internal Linking for Related Creatures */}
                  {relatedCreatures.length > 0 && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Related Creatures</h3>
                      <div className="flex flex-wrap gap-2">
                        {relatedCreatures.map(rel => (
                          <button 
                            key={rel.id}
                            onClick={() => setSelectedCreature(rel)}
                            className="flex items-center text-xs font-medium bg-gray-50 hover:bg-[#00A8E8]/10 text-gray-700 hover:text-[#0077BE] py-1 px-3 rounded-full transition-colors"
                          >
                            {rel.name} <ExternalLink className="ml-1 w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button 
                    className="flex-1 bg-[#00A8E8] hover:bg-[#0077BE] text-white rounded-full"
                    onClick={() => {
                      navigator.clipboard.writeText(`Did you know? ${selectedCreature.funFact} - Learn more at Easy Tools For Life!`);
                      toast("Fact copied to clipboard!");
                    }}
                  >
                    <Share2 className="w-4 h-4 mr-2" aria-hidden="true" /> Share Fact
                  </Button>
                </div>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>

      {/* Random Creature Modal */}
      <Dialog open={!!randomCreature} onOpenChange={(open) => !open && setRandomCreature(null)}>
        <DialogContent className="sm:max-w-md rounded-3xl overflow-hidden p-0 border-4 border-[#00A8E8]">
          {randomCreature && (
            <article className="flex flex-col bg-gradient-to-b from-[#E0F7FA] to-white">
              <header className="p-6 text-center pb-0">
                <h2 className="text-2xl font-bold text-[#0077BE] mb-4">You discovered a...</h2>
              </header>
              <figure className="relative h-56 w-full px-6 m-0">
                <img 
                  src={randomCreature.illustration} 
                  alt={`Vibrant discovery illustration of ${randomCreature.name}`} 
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl shadow-md" 
                />
              </figure>
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bangers text-[#001F3F] mb-2 tracking-wide">{randomCreature.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{randomCreature.funFact}</p>
                <Button 
                  className="w-full bg-[#00A8E8] hover:bg-[#0077BE] text-white rounded-full py-6 text-lg font-bold"
                  onClick={handleRandom}
                >
                  <Droplets className="w-5 h-5 mr-2" aria-hidden="true" /> Find Another!
                </Button>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
