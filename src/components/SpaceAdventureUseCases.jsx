
import React, { memo } from 'react';
import { Home, School, BookOpen, Users, Rocket } from 'lucide-react';

const useCases = [
  { icon: Rocket, title: "Learning about Space", desc: "Satisfy daily curiosity about the universe." },
  { icon: BookOpen, title: "STEM Education", desc: "Introduce core science concepts early on." },
  { icon: School, title: "Classroom Use", desc: "Perfect for science teachers' daily warm-ups." },
  { icon: Home, title: "Homeschooling", desc: "A reliable daily module for science curriculums." },
  { icon: Users, title: "Family Learning", desc: "Spark dinnertime conversations about the cosmos." }
];

const SpaceAdventureUseCases = memo(function SpaceAdventureUseCases() {
  return (
    <section className="py-24 bg-space-dark-purple relative border-t border-space-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight glow-text">Who Uses Space Adventure?</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div key={idx} className="w-full md:w-[calc(33.333%-1rem)] bg-black/40 border border-space-blue/20 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-space-blue/10 transition-colors">
                <Icon className="w-10 h-10 text-space-glow mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{uc.title}</h3>
                <p className="text-space-light-blue/70 text-sm">{uc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureUseCases;
