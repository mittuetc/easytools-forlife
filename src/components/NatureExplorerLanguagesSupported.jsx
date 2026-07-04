
import React, { memo } from 'react';
import { Globe } from 'lucide-react';

const NatureExplorerLanguagesSupported = memo(function NatureExplorerLanguagesSupported() {
  return (
    <section id="languages" className="py-16 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 bg-nature-blue/10 rounded-full flex items-center justify-center text-nature-blue shrink-0 mx-auto md:mx-0">
            <Globe className="w-8 h-8" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Currently Available in English
            </h2>
            <p className="text-base font-medium text-muted-foreground max-w-md">
              Our daily nature facts and quizzes are currently written in easy-to-understand English (US/UK), perfect for native speakers and young ESL learners.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          <span className="px-6 py-3 bg-nature-green/10 border-2 border-nature-green text-nature-green rounded-full text-base font-bold">English (US)</span>
          <span className="px-6 py-3 bg-nature-green/10 border-2 border-nature-green text-nature-green rounded-full text-base font-bold">English (UK)</span>
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerLanguagesSupported;
