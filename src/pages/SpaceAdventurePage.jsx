
import React from 'react';
import { Helmet } from 'react-helmet';
import SpaceAdventure from '@/components/SpaceAdventure.jsx';
import SpaceAdventureHowItWorks from '@/components/SpaceAdventureHowItWorks.jsx';
import SpaceAdventureFeatures from '@/components/SpaceAdventureFeatures.jsx';
import SpaceAdventureGameModes from '@/components/SpaceAdventureGameModes.jsx';
import SpaceAdventureDifficultyLevels from '@/components/SpaceAdventureDifficultyLevels.jsx';
import SpaceAdventureUseCases from '@/components/SpaceAdventureUseCases.jsx';
import SpaceAdventureLanguagesSupported from '@/components/SpaceAdventureLanguagesSupported.jsx';
import SpaceAdventureFAQSection from '@/components/SpaceAdventureFAQSection.jsx';
import SpaceAdventureAbout from '@/components/SpaceAdventureAbout.jsx';

export default function SpaceAdventurePage() {
  const pageUrl = "https://easytoolsforlife.com/space-adventure";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalWebApplication",
    "name": "Space Adventure - Explore Planets, Stars & Astronauts",
    "description": "Embark on a Space Adventure to explore planets, stars, and learn about astronauts. Interactive educational game with daily space facts and discoveries.",
    "url": pageUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "audience": {
      "@type": "Audience",
      "audienceType": "Children"
    },
    "about": [
      { "@type": "Thing", "name": "Planets" },
      { "@type": "Thing", "name": "Stars" },
      { "@type": "Thing", "name": "Astronauts" },
      { "@type": "Thing", "name": "Space Exploration" }
    ],
    "educationalUse": "Interactive Learning",
    "isFamilyFriendly": true
  };

  return (
    <div className="min-h-screen flex flex-col bg-space-dark-purple">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Space Adventure - Explore Planets, Stars & Astronauts</title>
        <meta name="description" content="Embark on a Space Adventure to explore planets, stars, and learn about astronauts. Interactive educational game with daily space facts and discoveries." />
        <meta name="keywords" content="space education, planets, stars, astronauts, space learning, astronomy game, educational game" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Space Adventure - Explore Planets, Stars & Astronauts" />
        <meta property="og:description" content="Embark on a Space Adventure to explore planets, stars, and learn about astronauts. Interactive educational game with daily space facts and discoveries." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Space Adventure - Explore Planets, Stars & Astronauts" />
        <meta name="twitter:description" content="Embark on a Space Adventure to explore planets, stars, and learn about astronauts. Interactive educational game with daily space facts and discoveries." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex-1 w-full">
        <SpaceAdventure />
        <SpaceAdventureHowItWorks />
        <SpaceAdventureFeatures />
        <SpaceAdventureGameModes />
        <SpaceAdventureDifficultyLevels />
        <SpaceAdventureUseCases />
        <SpaceAdventureLanguagesSupported />
        <SpaceAdventureFAQSection />
        <SpaceAdventureAbout />
      </main>
    </div>
  );
}
