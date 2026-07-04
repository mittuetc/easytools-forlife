
import React, { memo } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BreadcrumbNav = memo(function BreadcrumbNav() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Word Unscrambler",
        "item": window.location.href
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <a href="/" className="flex items-center hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 opacity-50" aria-hidden="true" />
          </li>
          <li>
            <span className="font-medium text-foreground" aria-current="page">
              Word Unscrambler
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
});

export default BreadcrumbNav;
