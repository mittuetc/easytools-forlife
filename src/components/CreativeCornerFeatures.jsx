
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const features = [
  { emoji: '🎨', title: 'Daily Drawing Tips', desc: 'Learn to draw cute animals and objects step-by-step.', color: 'text-rainbow-orange' },
  { emoji: '📖', title: 'Story Starters', desc: 'Fun prompts to kickstart your imagination.', color: 'text-rainbow-purple' },
  { emoji: '✂️', title: 'Fun Crafts', desc: 'Easy projects using household items.', color: 'text-rainbow-pink' },
  { emoji: '📅', title: 'Daily Updates', desc: 'New content every single day!', color: 'text-rainbow-blue' },
  { emoji: '😊', title: 'Kid-Friendly', desc: 'Safe, positive, and encouraging environment.', color: 'text-rainbow-green' },
  { emoji: '📱', title: 'Easy to Read', desc: 'Big text and clear instructions.', color: 'text-rainbow-red' }
];

const CreativeCornerFeatures = memo(function CreativeCornerFeatures() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bangers text-center text-slate-800 mb-16 tracking-wide">Awesome Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 flex items-center gap-4" whileHover={{ y: -5 }}>
              <div className="text-4xl bg-slate-50 p-3 rounded-2xl border border-slate-100">{feat.emoji}</div>
              <div>
                <h3 className={`text-xl font-bold mb-1 ${feat.color}`}>{feat.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerFeatures;
