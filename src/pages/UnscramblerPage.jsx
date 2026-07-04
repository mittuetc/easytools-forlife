
import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';

// SEO Sections
import HowItWorks from '@/components/HowItWorks.jsx';
import Features from '@/components/Features.jsx';
import GameModes from '@/components/GameModes.jsx';
import DifficultyLevels from '@/components/DifficultyLevels.jsx';
import UseCases from '@/components/UseCases.jsx';
import LanguagesSupported from '@/components/LanguagesSupported.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import About from '@/components/About.jsx';

const WordUnscrambler = lazy(() => import('@/components/WordUnscrambler.jsx'));

export default function UnscramblerPage() {
  const pageUrl = "https://easytoolsforlife.com/unscrambler";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Word Unscrambler - Solve Word Puzzles & Learn Vocabulary",
    "description": "Challenge yourself with Word Unscrambler. Unscramble letters to form words, improve vocabulary, and test your word-solving skills with difficulty levels.",
    "url": pageUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "audience": {
      "@type": "Audience",
      "audienceType": "General"
    },
    "educationalUse": "Vocabulary Building",
    "isFamilyFriendly": true
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Word Unscrambler - Solve Word Puzzles & Learn Vocabulary</title>
        <meta name="description" content="Challenge yourself with Word Unscrambler. Unscramble letters to form words, improve vocabulary, and test your word-solving skills with difficulty levels." />
        <meta name="keywords" content="word unscrambler, word puzzle, vocabulary builder, word game, educational game, letter puzzle, word solver" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Word Unscrambler - Solve Word Puzzles & Learn Vocabulary" />
        <meta property="og:description" content="Challenge yourself with Word Unscrambler. Unscramble letters to form words, improve vocabulary, and test your word-solving skills with difficulty levels." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Word Unscrambler - Solve Word Puzzles & Learn Vocabulary" />
        <meta name="twitter:description" content="Challenge yourself with Word Unscrambler. Unscramble letters to form words, improve vocabulary, and test your word-solving skills with difficulty levels." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="mb-8 text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
              Word Unscrambler
            </h1>
            <p className="text-muted-foreground text-lg">
              Enter your scrambled letters below to instantly uncover all valid words and anagrams.
            </p>
          </header>

          <Suspense fallback={<LoadingSpinner />}>
            <WordUnscrambler />
          </Suspense>
        </div>

        {/* SEO Sections Integration */}
        <HowItWorks type="unscrambler" />
        <Features type="unscrambler" />
        <GameModes type="unscrambler" />
        <DifficultyLevels type="unscrambler" />
        <UseCases type="unscrambler" />
        <LanguagesSupported type="unscrambler" />
        <FAQSection type="unscrambler" />
        <About type="unscrambler" />
      </main>
    </div>
  );
}
