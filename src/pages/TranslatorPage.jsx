
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
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

// Lazy load the native Translator app for code splitting
const TranslatorApp = lazy(() => import('@/components/TranslatorIframe.jsx'));

export default function TranslatorPage() {
  const pageUrl = "https://easytoolsforlife.com/translator";
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Translator - Learn Languages & Translate Text Online",
    "description": "Learn new languages with our interactive Translator tool. Translate text, practice pronunciation, and improve language skills across multiple languages.",
    "url": pageUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "audience": {
      "@type": "Audience",
      "audienceType": "General"
    },
    "educationalUse": "Language Learning",
    "isFamilyFriendly": true
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://easytoolsforlife.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Language Translator",
        "item": pageUrl
      }
    ]
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Translator - Learn Languages & Translate Text Online</title>
        <meta name="description" content="Learn new languages with our interactive Translator tool. Translate text, practice pronunciation, and improve language skills across multiple languages." />
        <meta name="keywords" content="language translator, language learning, translation tool, multilingual, language education, vocabulary learning, pronunciation practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Translator - Learn Languages & Translate Text Online" />
        <meta property="og:description" content="Learn new languages with our interactive Translator tool. Translate text, practice pronunciation, and improve language skills across multiple languages." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Translator - Learn Languages & Translate Text Online" />
        <meta name="twitter:description" content="Learn new languages with our interactive Translator tool. Translate text, practice pronunciation, and improve language skills across multiple languages." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="flex-1 w-full pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Language Translator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Break down language barriers instantly. Translate text seamlessly across more than 60 supported languages with high accuracy.
            </p>
          </header>

          {/* Native Translator App Container */}
          <div className="w-full relative mb-16 max-w-5xl mx-auto">
            <ErrorBoundary>
              <Suspense fallback={
                <div className="w-full min-h-[450px] flex flex-col items-center justify-center bg-card rounded-2xl border border-border shadow-sm">
                  <LoadingSpinner />
                  <p className="mt-4 text-sm font-medium text-muted-foreground animate-pulse">Loading translation engine...</p>
                </div>
              }>
                <TranslatorApp />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        {/* SEO Sections Integration */}
        <div className="bg-background">
          <HowItWorks type="translator" />
          <Features type="translator" />
          <GameModes type="translator" />
          <DifficultyLevels type="translator" />
          <UseCases type="translator" />
          <LanguagesSupported type="translator" />
          <FAQSection type="translator" />
          <About type="translator" />
        </div>
      </main>
    </div>
  );
}
