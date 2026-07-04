
import React, { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const CreativeCornerDifficultyLevels = memo(function CreativeCornerDifficultyLevels() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bangers text-slate-800 mb-6 tracking-wide">Perfect for Ages 5-9</h2>
        <p className="text-xl text-slate-600 font-medium mb-12">Activities designed for little hands and big imaginations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <Card className="rounded-3xl border-2 border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Early Learners (5-6)</h3>
              <p className="text-slate-600 font-medium">Simple shapes, easy cutting, and story prompts that parents can help read aloud.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-2 border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Independent Creators (7-9)</h3>
              <p className="text-slate-600 font-medium">Readers can follow the 3-step instructions on their own, encouraging independent play.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerDifficultyLevels;
