
import React, { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DifficultyLevels = memo(function DifficultyLevels({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  const unscramblerLevels = [
    {
      title: "4-Letter Words",
      desc: "Perfect for quick games and beginners. Find fast answers for short anagrams.",
      examples: "ACTS, CATS, CAST"
    },
    {
      title: "5-Letter Words",
      desc: "Great for Wordle enthusiasts and standard puzzle formats. Unscramble medium-length jumbles.",
      examples: "REACT, TRACE, CATER"
    },
    {
      title: "6-Letter Words",
      desc: "Standard difficulty for experienced Scrabble players looking for solid mid-board plays.",
      examples: "CASTER, CRATES, REACTS"
    },
    {
      title: "7+ Letter Words",
      desc: "Find bingos! Use our tool to clear your entire tile rack and score massive points.",
      examples: "SCRAMBLE, MACRAMES"
    }
  ];

  const translatorLevels = [
    {
      title: "Beginner",
      desc: "Translate basic phrases, greetings, and simple sentences for everyday casual use.",
      examples: "Hello, Thank you, How are you?"
    },
    {
      title: "Intermediate",
      desc: "Perfect for conversational language, travel directions, and navigating daily interactions.",
      examples: "Where is the train station?"
    },
    {
      title: "Advanced",
      desc: "Translate complex paragraphs, articles, and detailed cultural contexts accurately.",
      examples: "Nuanced articles, Literature"
    },
    {
      title: "Professional",
      desc: "Ideal for technical, medical, legal, or business documents requiring high precision.",
      examples: "Contracts, Technical manuals"
    }
  ];

  const levels = isUnscrambler ? unscramblerLevels : translatorLevels;
  const header = isUnscrambler ? "Unscramble words of any length" : "Translation for every proficiency level";
  const subtext = isUnscrambler 
    ? "From short daily puzzles to complex multi-syllable anagrams, our solver handles it all."
    : "Whether you need a quick greeting or a complex technical translation, we have you covered.";

  return (
    <section id="difficulty-levels" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="seo-heading mb-4">{header}</h2>
          <p className="seo-body mx-auto">{subtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, i) => (
            <Card key={i} className="border-border/50 bg-card shadow-sm hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{level.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{level.desc}</p>
                <div className="text-xs font-mono bg-muted p-2 rounded text-muted-foreground">
                  e.g., {level.examples}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default DifficultyLevels;
