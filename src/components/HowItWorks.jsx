
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const HowItWorks = memo(function HowItWorks({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  const unscramblerSteps = [
    {
      title: "Enter your scrambled letters",
      desc: "Type up to 15 letters into the input field. Include any combination of vowels and consonants you want to solve."
    },
    {
      title: "Click the unscramble button",
      desc: "Our engine instantly scans a massive dictionary to find every possible English word that can be made from your letters."
    },
    {
      title: "Filter and sort results",
      desc: "Use advanced filters like 'starts with', 'ends with', or word length to find the exact word jumble solution you need."
    },
    {
      title: "View definitions",
      desc: "Tap on any resulting word to reveal its definition and part of speech, perfect for learning new vocabulary."
    }
  ];

  const translatorSteps = [
    {
      title: "Enter your text",
      desc: "Type or paste the phrase, sentence, or document you want to translate directly into the primary input box."
    },
    {
      title: "Select languages",
      desc: "Choose your source language (or let it auto-detect) and select the target language from over 100 available options."
    },
    {
      title: "Click translate",
      desc: "The engine instantly processes your text using advanced machine learning to provide an accurate, contextual translation."
    },
    {
      title: "Copy and communicate",
      desc: "Copy the translated text to your clipboard with a single click and use it in your emails, chats, or documents."
    }
  ];

  const steps = isUnscrambler ? unscramblerSteps : translatorSteps;
  const headerText = isUnscrambler ? "How to unscramble words" : "How to use the translator";
  const subText = isUnscrambler 
    ? "Solve anagrams and decode letter jumbles in four simple steps using our free online tool."
    : "Communicate globally in four simple steps using our seamless translation interface.";

  return (
    <section id="how-it-works" className="py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="seo-heading mb-4">{headerText}</h2>
          <p className="seo-body mx-auto">{subText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary/15 leading-none select-none tabular-nums" style={{ letterSpacing: '-0.05em' }}>
                {index + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;
