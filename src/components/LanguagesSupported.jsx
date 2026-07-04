
import React, { memo } from 'react';
import { Globe } from 'lucide-react';

const LanguagesSupported = memo(function LanguagesSupported({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  return (
    <section id="languages" className="py-16 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mx-auto md:mx-0">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {isUnscrambler ? "Global dictionary support" : "100+ global languages"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isUnscrambler 
                ? "Currently optimized for standard US and UK English."
                : "Translate between Spanish, French, Mandarin, Arabic, and dozens more."
              }
            </p>
          </div>
        </div>
        
        {isUnscrambler ? (
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">English (US)</span>
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">English (UK)</span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">Spanish</span>
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">French</span>
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">German</span>
            <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">Mandarin</span>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">+ 96 more</span>
          </div>
        )}
      </div>
    </section>
  );
});

export default LanguagesSupported;
