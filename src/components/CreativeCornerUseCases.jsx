
import React, { memo } from 'react';

const CreativeCornerUseCases = memo(function CreativeCornerUseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bangers text-slate-800 mb-12 tracking-wide">When to use Creative Corner?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Rainy Afternoons 🌧️", "After-School Wind Down 🎒", "Weekend Craft Time 🎨", "Screen-Free Alternatives 📵", "Family Bonding Time 👨‍👩‍👧‍👦"].map((useCase, idx) => (
            <div key={idx} className="px-8 py-4 bg-slate-50 border-2 border-slate-100 rounded-full shadow-sm text-xl font-medium text-slate-700 hover:bg-rainbow-yellow/10 hover:border-rainbow-yellow/30 transition-colors">
              {useCase}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerUseCases;
