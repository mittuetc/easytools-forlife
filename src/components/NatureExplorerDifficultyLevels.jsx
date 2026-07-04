
import React, { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const NatureExplorerDifficultyLevels = memo(function NatureExplorerDifficultyLevels() {
  const levels = [
    {
      title: "Beginner (Ages 4-6)",
      desc: "Simple, easy-to-read sentences focused on widely known animals, common weather patterns, and basic plant parts. Perfect for early readers and parent-guided learning.",
      stars: "⭐"
    },
    {
      title: "Intermediate (Ages 7-8)",
      desc: "More detailed facts introducing light scientific concepts like habitats, diets, and seasons. Great for independent reading and sparking natural curiosity.",
      stars: "⭐⭐"
    },
    {
      title: "Advanced (Ages 9-10+)",
      desc: "Engaging vocabulary and deeper insights into animal adaptations, weather phenomena, and plant biology. Challenges older kids to think critically about the environment.",
      stars: "⭐⭐⭐"
    }
  ];

  return (
    <section id="difficulty-levels" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Grows With Your Child
          </h2>
          <p className="text-lg md:text-xl font-medium text-muted-foreground mx-auto">
            Our daily content naturally rotates through varying reading levels, ensuring there's something exciting for every young explorer aged 4 to 10.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {levels.map((level, i) => (
            <Card key={i} className="border-2 border-border/50 bg-card shadow-sm hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-2xl flex items-center justify-center text-3xl font-black text-primary/80 border-2 border-primary/10">
                  {level.stars}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{level.title}</h3>
                  <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                    {level.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerDifficultyLevels;
