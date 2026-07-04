
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MousePointerClick, Cat, Leaf, CloudLightning, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { cn } from '@/lib/utils.js';

const NatureExplorerFeatures = memo(function NatureExplorerFeatures() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" aria-hidden="true" />,
      title: "Daily Nature Facts",
      desc: "Every single day brings a new set of facts. Check back tomorrow for brand new animals, plants, and weather phenomena to learn about!",
      className: "md:col-span-2 bg-[hsl(var(--nature-green)/0.1)] border-nature-green/30",
      iconClass: "text-nature-green bg-white shadow-sm"
    },
    {
      icon: <MousePointerClick className="w-6 h-6" aria-hidden="true" />,
      title: "Interactive Quizzes",
      desc: "Test your knowledge immediately with multiple-choice questions right after reading the fun facts.",
      className: "md:col-span-1 bg-card",
      iconClass: "text-nature-blue bg-nature-blue/10"
    },
    {
      icon: <Cat className="w-6 h-6" aria-hidden="true" />,
      title: "Animals Section",
      desc: "Discover amazing creatures from tiny ants to giant blue whales, their habits, and habitats.",
      className: "md:col-span-1 bg-card",
      iconClass: "text-nature-orange bg-nature-orange/10"
    },
    {
      icon: <Leaf className="w-6 h-6" aria-hidden="true" />,
      title: "Plants Section",
      desc: "Learn how the green world works, from giant oak trees to meat-eating Venus flytraps.",
      className: "md:col-span-1 bg-card",
      iconClass: "text-nature-green bg-nature-green/10"
    },
    {
      icon: <CloudLightning className="w-6 h-6" aria-hidden="true" />,
      title: "Weather Section",
      desc: "Understand the skies above us! Learn about sunshine, blizzards, tornadoes, and colorful rainbows.",
      className: "md:col-span-1 bg-card",
      iconClass: "text-nature-blue bg-nature-blue/10"
    },
    {
      icon: <Sparkles className="w-8 h-8" aria-hidden="true" />,
      title: "Kid-Friendly Design",
      desc: "Large text, bright colors, and big buttons make learning accessible and highly engaging for young minds.",
      className: "md:col-span-2 bg-[hsl(var(--nature-blue)/0.1)] border-nature-blue/30",
      iconClass: "text-nature-blue bg-white shadow-sm"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Explore Incredible Features
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Designed specifically for curious kids, our app is packed with exciting ways to discover the natural world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={feature.className}
            >
              <Card className={cn("h-full border-2 shadow-sm contain-paint", feature.className)}>
                <CardContent className="p-8 flex flex-col h-full justify-center">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feature.iconClass)}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerFeatures;
