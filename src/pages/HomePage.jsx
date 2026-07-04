
import React from 'react';
import { Helmet } from 'react-helmet';
import AppCardsSection from '@/components/AppCardsSection.jsx';
import AboutUsSection from '@/components/AboutUsSection.jsx';
import HeroSection from '@/components/HeroSection.jsx';

export default function HomePage() {
  const pageUrl = "https://easytoolsforlife.com";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Horizons Educational Games",
    "url": pageUrl,
    "logo": "https://horizons-cdn.hostinger.com/ea2c2799-2d38-4356-964d-505717abe857/196977541dec72c13155add7d64e66e7.png",
    "description": "Interactive educational games and learning apps for kids including word games, language learning, comics, nature explorer, space adventure, and creative activities."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Horizons Educational Games",
    "url": pageUrl,
    "description": "Explore interactive educational games including word unscrambler, translator, comics, nature explorer, space adventure, and creative corner. Fun learning for all ages.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${pageUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-primary/20 selection:text-primary relative">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Educational Games & Learning Apps for Kids | Horizons</title>
        <meta 
          name="description" 
          content="Explore interactive educational games including word unscrambler, translator, comics, nature explorer, space adventure, and creative corner. Fun learning for all ages." 
        />
        <meta name="keywords" content="educational games, learning apps, kids games, interactive learning, word games, language learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Educational Games & Learning Apps for Kids | Horizons" />
        <meta property="og:description" content="Explore interactive educational games including word unscrambler, translator, comics, nature explorer, space adventure, and creative corner. Fun learning for all ages." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/ea2c2799-2d38-4356-964d-505717abe857/196977541dec72c13155add7d64e66e7.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Educational Games & Learning Apps for Kids | Horizons" />
        <meta name="twitter:description" content="Explore interactive educational games including word unscrambler, translator, comics, nature explorer, space adventure, and creative corner. Fun learning for all ages." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/ea2c2799-2d38-4356-964d-505717abe857/196977541dec72c13155add7d64e66e7.png" />
        
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
        Skip to main content
      </a>

      <main id="main-content" className="flex-1 w-full flex flex-col justify-center pt-12 md:pt-24">
        <header className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Educational Games & Learning Apps
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Select a tool below to get started. Whether you need to unscramble letters for a word game or translate text into another language, we have you covered.
          </p>
        </header>

        {/* Tool Launcher Cards Grid */}
        <AppCardsSection />
        
        {/* New Hero Section */}
        <HeroSection />

        {/* About Us Section */}
        <AboutUsSection />
      </main>
    </div>
  );
}
