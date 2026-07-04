
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Trees, Leaf, CloudSun, RotateCcw } from 'lucide-react';

// Components
import NatureCard from '@/components/NatureCard.jsx';
import { Button } from '@/components/ui/button.jsx';

// SEO & Informational Components
import NatureExplorerHowItWorks from '@/components/NatureExplorerHowItWorks.jsx';
import NatureExplorerFeatures from '@/components/NatureExplorerFeatures.jsx';
import NatureExplorerGameModes from '@/components/NatureExplorerGameModes.jsx';
import NatureExplorerDifficultyLevels from '@/components/NatureExplorerDifficultyLevels.jsx';
import NatureExplorerUseCases from '@/components/NatureExplorerUseCases.jsx';
import NatureExplorerLanguagesSupported from '@/components/NatureExplorerLanguagesSupported.jsx';
import NatureExplorerFAQSection from '@/components/NatureExplorerFAQSection.jsx';
import NatureExplorerAbout from '@/components/NatureExplorerAbout.jsx';

// Utilities
import { getAnimalOfDay, getPlantOfDay, getWeatherOfDay } from '@/lib/NatureContent.js';

export default function NatureExplorerPage() {
  const [resetKey, setResetKey] = useState(0);

  const animalData = getAnimalOfDay();
  const plantData = getPlantOfDay();
  const weatherData = getWeatherOfDay();

  const handleResetQuizzes = useCallback(() => {
    setResetKey(prev => prev + 1);
  }, []);

  const pageUrl = "https://easytoolsforlife.com/nature-explorer";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Nature Explorer - Interactive Wildlife & Plant Learning Game",
    "description": "Discover animals, plants, and weather facts with Nature Explorer. An interactive educational game to learn about nature and wildlife with daily content.",
    "url": pageUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "audience": {
      "@type": "Audience",
      "audienceType": "Children"
    },
    "about": [
      { "@type": "Thing", "name": "Animals" },
      { "@type": "Thing", "name": "Plants" },
      { "@type": "Thing", "name": "Weather" }
    ],
    "educationalUse": "Interactive Learning",
    "isFamilyFriendly": true
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col font-outfit">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Nature Explorer - Interactive Wildlife & Plant Learning Game</title>
        <meta name="description" content="Discover animals, plants, and weather facts with Nature Explorer. An interactive educational game to learn about nature and wildlife with daily content." />
        <meta name="keywords" content="nature learning, wildlife education, animal facts, plant facts, nature game, educational game" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Nature Explorer - Interactive Wildlife & Plant Learning Game" />
        <meta property="og:description" content="Discover animals, plants, and weather facts with Nature Explorer. An interactive educational game to learn about nature and wildlife with daily content." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Nature Explorer - Interactive Wildlife & Plant Learning Game" />
        <meta name="twitter:description" content="Discover animals, plants, and weather facts with Nature Explorer. An interactive educational game to learn about nature and wildlife with daily content." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex-1 w-full flex flex-col">
        {/* Interactive App Container */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col gap-12">
          
          {/* Page Header */}
          <header className="flex flex-col items-center text-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="bg-primary/10 p-6 rounded-full inline-flex"
              aria-hidden="true"
            >
              <Trees className="w-16 h-16 text-primary" />
            </motion.div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tight drop-shadow-sm text-balance"
              >
                Nature Explorer
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto"
              >
                Learn something new every day! Answer the questions below to test your nature knowledge.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button 
                onClick={handleResetQuizzes}
                variant="outline"
                size="lg"
                aria-label="Reset all quizzes"
                className="rounded-full font-bold text-lg px-8 border-2 hover:bg-primary/10 transition-transform active:scale-95"
              >
                <RotateCcw className="w-5 h-5 mr-2" aria-hidden="true" />
                Reset Quizzes
              </Button>
            </motion.div>
          </header>

          {/* Content Sections (The actual app experience) */}
          <section aria-labelledby="nature-content-heading">
            <h2 id="nature-content-heading" className="sr-only">Nature Learning Activities</h2>
            <div className="flex flex-col gap-10">
              <NatureCard
                title="Animal Friends"
                icon={<Trees className="w-8 h-8 text-green-700" aria-hidden="true" />}
                data={animalData}
                themeClass="bg-[hsl(120_100%_90%)]"
                btnClass="bg-white text-green-900 hover:bg-green-50"
                resetKey={resetKey}
              />

              <NatureCard
                title="Amazing Plants"
                icon={<Leaf className="w-8 h-8 text-yellow-700" aria-hidden="true" />}
                data={plantData}
                themeClass="bg-[hsl(45_100%_90%)]"
                btnClass="bg-white text-yellow-900 hover:bg-yellow-50"
                resetKey={resetKey}
              />

              <NatureCard
                title="Wild Weather"
                icon={<CloudSun className="w-8 h-8 text-blue-700" aria-hidden="true" />}
                data={weatherData}
                themeClass="bg-[hsl(200_100%_92%)]"
                btnClass="bg-white text-blue-900 hover:bg-blue-50"
                resetKey={resetKey}
              />
            </div>
          </section>
        </div>

        {/* SEO & Informational Content Sections */}
        <div className="w-full flex flex-col mt-16">
          <NatureExplorerHowItWorks />
          <NatureExplorerFeatures />
          <NatureExplorerGameModes />
          <NatureExplorerDifficultyLevels />
          <NatureExplorerUseCases />
          <NatureExplorerLanguagesSupported />
          <NatureExplorerFAQSection />
          <NatureExplorerAbout />
        </div>
      </main>
    </div>
  );
}
