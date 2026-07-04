
import React, { memo } from 'react';
import { Globe2 } from 'lucide-react';

const SpaceAdventureLanguagesSupported = memo(function SpaceAdventureLanguagesSupported() {
  return (
    <section className="py-16 bg-black/90 relative border-y border-space-blue/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Globe2 className="w-12 h-12 text-space-light-blue mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 glow-text">Supported Languages</h2>
        <p className="text-lg text-space-light-blue/80 mb-8">Currently broadcasting transmissions across the galaxy in:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-6 py-2 bg-space-blue/20 border border-space-blue/40 text-white rounded-full font-medium">English (US)</span>
          <span className="px-6 py-2 bg-space-blue/20 border border-space-blue/40 text-white rounded-full font-medium">English (UK)</span>
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureLanguagesSupported;
