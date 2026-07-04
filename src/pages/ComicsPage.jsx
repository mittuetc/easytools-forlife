
import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { BookOpen, Layers } from 'lucide-react';
import ComicDisplay from '@/components/ComicDisplay.jsx';
import ComicArchive from '@/components/ComicArchive.jsx';
import ComicSeriesDisplay from '@/components/ComicSeriesDisplay.jsx';
import ComicSeriesArchive from '@/components/ComicSeriesArchive.jsx';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { useComicGeneration } from '@/hooks/useComicGeneration.js';
import { useComicSeriesGeneration } from '@/hooks/useComicSeriesGeneration.js';
import { Button } from '@/components/ui/button.jsx';

const ComicsHowItWorks = lazy(() => import('@/components/ComicsHowItWorks.jsx'));
const ComicsFeatures = lazy(() => import('@/components/ComicsFeatures.jsx'));
const ComicsGameModes = lazy(() => import('@/components/ComicsGameModes.jsx'));
const ComicsDifficultyLevels = lazy(() => import('@/components/ComicsDifficultyLevels.jsx'));
const ComicsUseCases = lazy(() => import('@/components/ComicsUseCases.jsx'));
const ComicsLanguagesSupported = lazy(() => import('@/components/ComicsLanguagesSupported.jsx'));
const ComicsFAQSection = lazy(() => import('@/components/ComicsFAQSection.jsx'));
const ComicsAbout = lazy(() => import('@/components/ComicsAbout.jsx'));

export default function ComicsPage() {
  const [activeTab, setActiveTab] = useState('daily');
  const { comic: dailyComic } = useComicGeneration();
  const [selectedArchiveComic, setSelectedArchiveComic] = useState(null);
  const displayDailyComic = selectedArchiveComic || dailyComic;
  const { currentEpisode: pbjEpisode, allEpisodes: pbjAllEpisodes, isLoading: pbjLoading } = useComicSeriesGeneration();
  const pbjArchiveEpisodes = pbjAllEpisodes.filter(ep => ep.id !== pbjEpisode?.id);

  const pageUrl = "https://easytoolsforlife.com/comics";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Comics - AI-Generated Daily Comics & Comic Series",
    "description": "Enjoy AI-generated daily comics and create your own comic series. Interactive storytelling with visual narratives and creative comic generation.",
    "url": pageUrl,
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Any",
    "audience": {
      "@type": "Audience",
      "audienceType": "General"
    },
    "educationalUse": "Creative Storytelling",
    "isFamilyFriendly": true
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#fdfbf7] text-foreground selection:bg-[hsl(var(--comic-yellow,48_96%_65%))]/40">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Comics - AI-Generated Daily Comics & Comic Series</title>
        <meta name="description" content="Enjoy AI-generated daily comics and create your own comic series. Interactive storytelling with visual narratives and creative comic generation." />
        <meta name="keywords" content="comics, comic series, AI comics, storytelling, visual stories, creative comics, daily comics, comic generation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Comics - AI-Generated Daily Comics & Comic Series" />
        <meta property="og:description" content="Enjoy AI-generated daily comics and create your own comic series. Interactive storytelling with visual narratives and creative comic generation." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Comics - AI-Generated Daily Comics & Comic Series" />
        <meta name="twitter:description" content="Enjoy AI-generated daily comics and create your own comic series. Interactive storytelling with visual narratives and creative comic generation." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 relative z-10 pb-24 border-b-8 border-black">
          <header className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black comic-font text-white drop-shadow-[5px_5px_0_#000] tracking-widest uppercase mb-8" style={{ WebkitTextStroke: '2px black' }}>
              Comics Hub
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
              <Button onClick={() => { setActiveTab('daily'); setSelectedArchiveComic(null); }} className={`text-lg md:text-xl font-bold px-8 py-6 h-auto neo-brutal transition-all ${activeTab === 'daily' ? 'bg-[hsl(var(--comic-yellow,48_96%_65%))] text-black shadow-[6px_6px_0_0_#000] -translate-y-1' : 'bg-white text-black hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]'}`}>
                <BookOpen className="w-6 h-6 mr-2" aria-hidden="true" /> Daily Comic
              </Button>
              <Button onClick={() => setActiveTab('pbj')} className={`text-lg md:text-xl font-bold px-8 py-6 h-auto neo-brutal transition-all ${activeTab === 'pbj' ? 'bg-[hsl(var(--jelly-purple))] text-white shadow-[6px_6px_0_0_#000] -translate-y-1' : 'bg-white text-black hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]'}`}>
                <Layers className="w-6 h-6 mr-2" aria-hidden="true" /> PB & J Series
              </Button>
            </div>
          </header>

          {activeTab === 'daily' && (
            <section aria-labelledby="daily-comic-heading">
              <h2 id="daily-comic-heading" className="sr-only">Daily Comic Strip</h2>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {selectedArchiveComic && (
                  <div className="mb-6 flex justify-center">
                    <Button onClick={() => setSelectedArchiveComic(null)} variant="outline" className="border-4 border-black font-bold shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-y-1 transition-all bg-white text-black">&larr; Back to Today's Comic</Button>
                  </div>
                )}
                <ComicDisplay comic={displayDailyComic} />
                <ComicArchive onSelectComic={setSelectedArchiveComic} />
              </div>
            </section>
          )}

          {activeTab === 'pbj' && (
            <section aria-labelledby="pbj-series-heading">
              <h2 id="pbj-series-heading" className="sr-only">PB & J Comic Series</h2>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ComicSeriesDisplay episode={pbjEpisode} isLoading={pbjLoading} />
                <ComicSeriesArchive episodes={pbjArchiveEpisodes} isLoading={pbjLoading} />
              </div>
            </section>
          )}
        </div>

        <Suspense fallback={<div className="py-24 flex justify-center"><LoadingSpinner /></div>}>
          <ComicsHowItWorks />
          <ComicsFeatures />
          <ComicsGameModes />
          <ComicsDifficultyLevels />
          <ComicsUseCases />
          <ComicsLanguagesSupported />
          <ComicsFAQSection />
          <ComicsAbout />
        </Suspense>

        {/* About Section */}
        <section className="py-20 md:py-28 bg-white/60 backdrop-blur-sm border-t-8 border-black rounded-3xl my-12 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black comic-font text-black drop-shadow-[3px_3px_0_#ffd700] tracking-wide mb-8 text-center">
              Free Kids Comics — Funny & Educational Comic Stories for Children
            </h1>
            
            <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 text-center font-medium">
              Welcome to our Comics section, where imagination comes to life through colorful panels and engaging stories! Our collection of AI-generated comics is designed specifically for children, combining entertainment with learning. Reading comics helps kids develop their imagination, improve reading comprehension, and discover new worlds of adventure and humor. Whether your child loves action-packed adventures, laugh-out-loud funny stories, or educational tales that teach valuable lessons, we have something for everyone!
            </p>

            <div className="bg-[hsl(var(--comic-yellow,48_96%_65%))] border-4 border-black rounded-2xl p-8 md:p-10 shadow-[6px_6px_0_0_#000] mb-8">
              <h3 className="text-2xl md:text-3xl font-black comic-font text-black mb-6 tracking-wide">
                What Kind of Comics Will You Find Here?
              </h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start text-lg font-bold text-black">
                  <span className="mr-4 text-2xl">🚀</span>
                  <span><strong>Adventure Comics</strong> — Exciting tales of heroes, quests, and thrilling journeys across magical worlds</span>
                </li>
                <li className="flex items-start text-lg font-bold text-black">
                  <span className="mr-4 text-2xl">😄</span>
                  <span><strong>Funny Comics</strong> — Hilarious stories filled with jokes, silly characters, and laugh-out-loud moments</span>
                </li>
                <li className="flex items-start text-lg font-bold text-black">
                  <span className="mr-4 text-2xl">🧠</span>
                  <span><strong>Educational Comics</strong> — Learn while you laugh with stories that teach science, history, and important life lessons</span>
                </li>
                <li className="flex items-start text-lg font-bold text-black">
                  <span className="mr-4 text-2xl">📅</span>
                  <span><strong>Daily Comics</strong> — Fresh new stories every day to keep your comic collection growing and your imagination inspired</span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl text-black/80 leading-relaxed text-center font-medium">
              Perfect for children ages 5 and up, our comics are designed to be enjoyed in just a few minutes, making them ideal for bedtime stories, lunch breaks, or anytime your child needs a dose of fun and creativity. Start exploring today and discover your new favorite comic series!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
