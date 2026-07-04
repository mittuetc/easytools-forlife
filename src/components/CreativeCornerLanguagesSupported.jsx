
import React, { memo } from 'react';

const CreativeCornerLanguagesSupported = memo(function CreativeCornerLanguagesSupported() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bangers text-slate-800 mb-4 tracking-wide">Languages</h2>
        <p className="text-lg text-slate-600 font-medium mb-6">Our cartoons and instructions speak:</p>
        <span className="inline-block px-6 py-2 bg-white border-2 border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">English (US/UK)</span>
      </div>
    </section>
  );
});

export default CreativeCornerLanguagesSupported;
