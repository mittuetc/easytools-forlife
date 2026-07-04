
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { reportWebVitals } from './lib/webVitals.js';

// Lazy load page components for code splitting and performance
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const UnscramblerPage = lazy(() => import('./pages/UnscramblerPage.jsx'));
const TranslatorPage = lazy(() => import('./pages/TranslatorPage.jsx'));
const NatureExplorerPage = lazy(() => import('./pages/NatureExplorerPage.jsx'));
const SpaceAdventurePage = lazy(() => import('./pages/SpaceAdventurePage.jsx'));
const CreativeCornerPage = lazy(() => import('./pages/CreativeCornerPage.jsx'));
const OceanExplorerPage = lazy(() => import('./pages/OceanExplorerPage.jsx'));

// Time Travelers Pages
const TimeTravelersPage = lazy(() => import('./pages/TimeTravelersPage.jsx'));
const EgyptPage = lazy(() => import('./pages/EgyptPage.jsx'));
const GreecePage = lazy(() => import('./pages/GreecePage.jsx'));
const ChinaPage = lazy(() => import('./pages/ChinaPage.jsx'));
const AztecMayaPage = lazy(() => import('./pages/AztecMayaPage.jsx'));
const RomePage = lazy(() => import('./pages/RomePage.jsx'));

// Comics Pages
const DailyComicPage = lazy(() => import('./pages/DailyComicPage.jsx'));
const ComicSeriesPage = lazy(() => import('./pages/ComicSeriesPage.jsx'));
const ComicsPage = lazy(() => import('./pages/ComicsPage.jsx'));

// Blog Pages
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage.jsx'));
const ArticlePage = lazy(() => import('./pages/ArticlePage.jsx'));

function App() {
  useEffect(() => {
    // Initialize Web Vitals tracking for performance monitoring
    reportWebVitals(console.log);

    // Dynamically inject Google AdSense script globally
    const scriptId = 'google-adsense-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8013763562291235";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Rendered ONCE here at the app root so it persists across all pages */}
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background" aria-label="Loading page content">
              <LoadingSpinner />
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unscrambler" element={<UnscramblerPage />} />
              <Route path="/translator" element={<TranslatorPage />} />
              <Route path="/nature-explorer" element={<NatureExplorerPage />} />
              <Route path="/space-adventure" element={<SpaceAdventurePage />} />
              <Route path="/creative-corner" element={<CreativeCornerPage />} />
              <Route path="/ocean-explorer" element={<OceanExplorerPage />} />
              
              {/* Time Travelers Routes */}
              <Route path="/time-travelers" element={<TimeTravelersPage />} />
              <Route path="/time-travelers/egypt" element={<EgyptPage />} />
              <Route path="/time-travelers/greece" element={<GreecePage />} />
              <Route path="/time-travelers/china" element={<ChinaPage />} />
              <Route path="/time-travelers/aztec-maya" element={<AztecMayaPage />} />
              <Route path="/time-travelers/rome" element={<RomePage />} />
              
              {/* Public Comic Routes */}
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/daily-comic" element={<DailyComicPage />} />
              <Route path="/comic-series" element={<ComicSeriesPage />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
              
              {/* Catch-all route to prevent 404s, renders homepage */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
