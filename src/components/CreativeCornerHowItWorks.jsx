
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Scissors, Sparkles } from 'lucide-react';

const steps = [
  { title: 'Pick an Activity', desc: 'Choose from Drawing, Stories, or Crafts.', icon: Palette },
  { title: 'Gather Supplies', desc: 'Grab your pencils, paper, or craft materials.', icon: Scissors },
  { title: 'Follow the Steps', desc: 'Read our easy 3-step guides with cartoon friends.', icon: BookOpen },
  { title: 'Be Creative!', desc: 'Add your own magic touch to make it unique!', icon: Sparkles }
];

const CreativeCornerHowItWorks = memo(function CreativeCornerHowItWorks() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bangers text-slate-800 mb-4 tracking-wide">How It Works</h2>
          <p className="text-xl text-slate-600 font-medium">Four easy steps to daily fun!</p>
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
                className="bg-slate-50 border-2 border-slate-100 p-8 rounded-3xl text-center hover:border-rainbow-pink/50 transition-colors shadow-sm"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border-2 border-slate-100 text-rainbow-purple">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerHowItWorks;
