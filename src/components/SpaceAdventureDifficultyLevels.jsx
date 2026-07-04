
import React, { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const levels = [
  { age: "Ages 7-8", title: "Space Cadets", desc: "Basic planetary facts, learning the order of the planets, and understanding gravity in simple terms." },
  { age: "Ages 9-10", title: "Star Navigators", desc: "Deeper dives into star life cycles, moon phases, and the history of space exploration missions." },
  { age: "Ages 11-12", title: "Galactic Commanders", desc: "Advanced concepts like light-years, atmospheric compositions, and the physics of rocket launches." }
];

const SpaceAdventureDifficultyLevels = memo(function SpaceAdventureDifficultyLevels() {
  return (
    <section className="py-24 bg-black/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight glow-text">Age-Appropriate Learning</h2>
          <p className="text-lg text-space-light-blue max-w-2xl mx-auto">Content designed to grow with your child's curiosity (Ages 7-12).</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <Card key={idx} className="bg-space-dark-purple/40 border-space-blue/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <span className="inline-block px-4 py-1 bg-space-blue/20 text-space-light-blue rounded-full text-sm font-bold mb-4 border border-space-blue/30">{level.age}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{level.title}</h3>
                <p className="text-space-light-blue/80 leading-relaxed">{level.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureDifficultyLevels;
