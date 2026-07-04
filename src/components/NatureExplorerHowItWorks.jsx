
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Lightbulb, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils.js';

const steps = [
  {
    title: 'Open the App',
    desc: 'Jump right into Nature Explorer every day to see what exciting new facts are waiting for you.',
    icon: Compass,
    color: 'text-nature-blue',
    bg: 'bg-nature-blue/10'
  },
  {
    title: 'Pick a Topic',
    desc: 'Choose from three fascinating categories: Animal Friends, Amazing Plants, or Wild Weather.',
    icon: BookOpen,
    color: 'text-nature-green',
    bg: 'bg-nature-green/10'
  },
  {
    title: 'Learn & Quiz',
    desc: 'Read the fun fact of the day and answer the interactive multiple-choice question.',
    icon: Lightbulb,
    color: 'text-nature-orange',
    bg: 'bg-nature-orange/10'
  },
  {
    title: 'Earn Knowledge',
    desc: 'Celebrate correct answers and build a streak of nature wisdom day after day!',
    icon: Trophy,
    color: 'text-primary',
    bg: 'bg-primary/10'
  }
];

const NatureExplorerHowItWorks = memo(function NatureExplorerHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-nature-light-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance tracking-tight">
            How Nature Explorer Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Ready to become a nature expert? Follow these four simple steps to start your daily learning adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-card p-6 md:p-8 rounded-[var(--radius)] shadow-sm border-2 border-border/50 hover:border-nature-green/30 transition-colors"
              >
                <div className={cn("flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center", step.bg, step.color)}>
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="text-sm font-black px-3 py-1 bg-muted rounded-full text-muted-foreground uppercase tracking-widest">
                      STEP {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerHowItWorks;
