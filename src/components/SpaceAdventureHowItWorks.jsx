
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Users, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Select a Planet',
    desc: 'Use the interactive planet picker to zoom in on any planet in our solar system and discover fascinating facts.',
    icon: Rocket
  },
  {
    title: 'Explore the Stars',
    desc: 'Learn about different types of stars, from yellow dwarfs like our Sun to massive blue supergiants.',
    icon: Star
  },
  {
    title: 'Meet the Astronauts',
    desc: 'Read about the brave men and women who have explored space and the incredible missions they completed.',
    icon: Users
  },
  {
    title: 'Daily Discoveries',
    desc: 'Return every day for new facts, updated astronaut profiles, and fresh cosmic mysteries to solve.',
    icon: Zap
  }
];

const SpaceAdventureHowItWorks = memo(function SpaceAdventureHowItWorks() {
  return (
    <section className="py-24 bg-space-dark-purple relative border-t border-space-blue/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-space-blue/10 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight glow-text">How to Explore Space</h2>
          <p className="text-lg text-space-light-blue max-w-2xl mx-auto">Launch your learning journey in four simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 border border-space-blue/30 p-8 rounded-2xl backdrop-blur-sm hover:border-space-glow/50 transition-colors"
              >
                <div className="w-14 h-14 bg-space-blue/20 rounded-xl flex items-center justify-center mb-6 text-space-glow">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-space-light-blue/80 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureHowItWorks;
