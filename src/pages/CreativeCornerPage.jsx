
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { getDailyContent } from '@/lib/CreativeCornerData.js';
import { reportWebVitals } from '@/lib/webVitals.js';

// Lazy load the heavy section component for code splitting
const CreativeSection = lazy(() => import('@/components/CreativeSection.jsx'));
const CreativeCornerHowItWorks = lazy(() => import('@/components/CreativeCornerHowItWorks.jsx'));
const CreativeCornerFeatures = lazy(() => import('@/components/CreativeCornerFeatures.jsx'));
const CreativeCornerGameModes = lazy(() => import('@/components/CreativeCornerGameModes.jsx'));
const CreativeCornerDifficultyLevels = lazy(() => import('@/components/CreativeCornerDifficultyLevels.jsx'));
const CreativeCornerUseCases = lazy(() => import('@/components/CreativeCornerUseCases.jsx'));
const CreativeCornerLanguagesSupported = lazy(() => import('@/components/CreativeCornerLanguagesSupported.jsx'));
const CreativeCornerFAQSection = lazy(() => import('@/components/CreativeCornerFAQSection.jsx'));
const CreativeCornerAbout = lazy(() => import('@/components/CreativeCornerAbout.jsx'));

const CACHE_KEY = 'creative_corner_daily_content';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export default function CreativeCornerPage() {
  const [dailyContent, setDailyContent] = useState(null);

  useEffect(() => {
    reportWebVitals(console.log);
    const fetchContent = () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            setDailyContent(data);
            return;
          }
        }
        const freshData = getDailyContent();
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: freshData, timestamp: Date.now() }));
        setDailyContent(freshData);
      } catch (error) {
        console.error("Error loading daily content:", error);
        setDailyContent(getDailyContent()); 
      }
    };
    fetchContent();
  }, []);

  if (!dailyContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <LoadingSpinner />
      </div>
    );
  }

  const pageUrl = "https://easytoolsforlife.com/creative-corner";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Creative Corner - Drawing Tips, Story Starters & Craft Ideas",
    "description": "Unlock your creativity with Creative Corner. Get daily drawing tips, story starters, and craft ideas to inspire your imagination and artistic skills.",
    "url": pageUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "audience": { 
      "@type": "Audience", 
      "audienceType": "Children" 
    },
    "educationalUse": "Creative Activity",
    "isFamilyFriendly": true,
    "about": [
      { "@type": "Thing", "name": "Drawing" },
      { "@type": "Thing", "name": "Creative Writing" },
      { "@type": "Thing", "name": "Crafts" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col font-outfit bg-slate-50 selection:bg-rainbow-yellow/30 selection:text-slate-900">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Creative Corner - Drawing Tips, Story Starters & Craft Ideas</title>
        <meta name="description" content="Unlock your creativity with Creative Corner. Get daily drawing tips, story starters, and craft ideas to inspire your imagination and artistic skills." />
        <meta name="keywords" content="creative writing, drawing tips, craft ideas, story starters, creative learning, art education, imagination" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Creative Corner - Drawing Tips, Story Starters & Craft Ideas" />
        <meta property="og:description" content="Unlock your creativity with Creative Corner. Get daily drawing tips, story starters, and craft ideas to inspire your imagination and artistic skills." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Creative Corner - Drawing Tips, Story Starters & Craft Ideas" />
        <meta name="twitter:description" content="Unlock your creativity with Creative Corner. Get daily drawing tips, story starters, and craft ideas to inspire your imagination and artistic skills." />
        
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-rainbow-blue focus:rounded-md focus:shadow-md">
        Skip to main content
      </a>

      <main id="main-content" className="flex-1 w-full">
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-4 overflow-hidden bg-white contain-paint">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden="true"></div>
          <header className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="inline-block mb-6 will-change-transform-opacity">
              <span className="px-6 py-2 bg-rainbow-yellow/20 text-rainbow-orange font-bold rounded-full text-sm md:text-base tracking-widest uppercase border border-rainbow-yellow/30 shadow-sm">
                New Ideas Every Day! <span aria-hidden="true">🌟</span>
              </span>
            </motion.div>
            <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5, duration: 0.8 }} className="text-6xl md:text-8xl font-bangers tracking-wider text-slate-800 mb-6 drop-shadow-sm will-change-transform-opacity">
              <span className="text-rainbow-red">C</span><span className="text-rainbow-orange">r</span><span className="text-rainbow-yellow">e</span><span className="text-rainbow-green">a</span><span className="text-rainbow-blue">t</span><span className="text-rainbow-purple">i</span><span className="text-rainbow-pink">v</span><span className="text-rainbow-red">e</span><span> </span><span className="text-rainbow-blue">C</span><span className="text-rainbow-purple">o</span><span className="text-rainbow-pink">r</span><span className="text-rainbow-red">n</span><span className="text-rainbow-orange">e</span><span className="text-rainbow-yellow">r</span>
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed will-change-transform-opacity">
              Grab your pencils, your imagination, and your scissors! Let's make something amazing today. Scroll down to start your adventure.
            </motion.p>
          </header>
          <div className="absolute top-1/4 left-10 text-5xl animate-float" style={{ animationDelay: '0s' }} aria-hidden="true">🖍️</div>
          <div className="absolute bottom-1/4 right-10 text-5xl animate-float" style={{ animationDelay: '1s' }} aria-hidden="true">✂️</div>
          <div className="absolute top-1/3 right-20 text-4xl animate-bounce-playful" style={{ animationDelay: '0.5s' }} aria-hidden="true">💡</div>
          <div className="absolute bottom-1/3 left-20 text-4xl animate-float" style={{ animationDelay: '1.5s' }} aria-hidden="true">📓</div>
        </section>

        <Suspense fallback={<div className="py-24 flex justify-center"><LoadingSpinner /></div>}>
          <CreativeSection title="Drawing Tips" subtitle="Grab a pencil" data={dailyContent.tip} characterType="drawing" themeColor="text-rainbow-orange" badgeColor="bg-rainbow-orange" backgroundClass="bg-rainbow-orange/5 border-t border-rainbow-orange/10" />
          <CreativeSection title="Story Starters" subtitle="Once upon a time..." data={dailyContent.starter} characterType="story" themeColor="text-rainbow-purple" badgeColor="bg-rainbow-purple" reverseLayout={true} backgroundClass="bg-white border-y border-slate-100" />
          <CreativeSection title="Fun Crafts" subtitle="Time to build" data={dailyContent.craft} characterType="craft" themeColor="text-rainbow-pink" badgeColor="bg-rainbow-pink" backgroundClass="bg-rainbow-pink/5 border-t border-rainbow-pink/10" />
          
          <CreativeCornerHowItWorks />
          <CreativeCornerFeatures />
          <CreativeCornerGameModes />
          <CreativeCornerDifficultyLevels />
          <CreativeCornerUseCases />
          <CreativeCornerLanguagesSupported />
          <CreativeCornerFAQSection />
          <CreativeCornerAbout />
        </Suspense>
      </main>
    </div>
  );
}
