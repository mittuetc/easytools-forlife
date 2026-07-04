
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Type, Globe, ArrowRight, Rocket, Palette, BookOpen, Leaf, Waves, Hourglass } from 'lucide-react';

export default function AppCardsSection() {
  const navigate = useNavigate();

  const apps = [
    {
      id: 'unscrambler',
      title: 'Word Unscrambler',
      description: 'Unscramble letters to find valid words with advanced filtering. Perfect for Scrabble and anagrams.',
      icon: Type,
      route: '/unscrambler',
      colorClass: 'text-primary bg-primary/10',
    },
    {
      id: 'translator',
      title: 'Language Translator',
      description: 'Translate text between multiple languages instantly. Support for over 50+ languages.',
      icon: Globe,
      route: '/translator',
      colorClass: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
    },
    {
      id: 'nature-explorer',
      title: 'Nature Explorer',
      description: 'Discover fascinating facts about animals, plants, and ecosystems around the world.',
      icon: Leaf,
      route: '/nature-explorer',
      colorClass: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
    },
    {
      id: 'space-adventure',
      title: 'Space Adventure',
      description: 'Explore planets, stars, and astronauts with daily facts. Target age: 7-12 years.',
      icon: Rocket,
      route: '/space-adventure',
      colorClass: 'text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30',
    },
    {
      id: 'ocean-explorer',
      title: 'Ocean Explorer',
      description: 'Dive deep into the ocean to learn about marine life and underwater mysteries.',
      icon: Waves,
      route: '/ocean-explorer',
      colorClass: 'text-cyan-600 bg-cyan-100 dark:text-cyan-400 dark:bg-cyan-900/30',
    },
    {
      id: 'time-travelers',
      title: 'Time Travelers',
      description: 'Journey through history to explore ancient civilizations and historical events.',
      icon: Hourglass,
      route: '/time-travelers',
      colorClass: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30',
    },
    {
      id: 'creative-corner',
      title: 'Creative Corner',
      description: 'Drawing tips, story starters, and fun craft ideas. Target age: 5-9 years.',
      icon: Palette,
      route: '/creative-corner',
      colorClass: 'text-pink-600 bg-pink-100 dark:text-pink-400 dark:bg-pink-900/30',
    },
    {
      id: 'comics',
      title: 'Comics',
      description: 'Interactive comic stories and characters.',
      icon: BookOpen,
      route: '/comics',
      colorClass: 'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30',
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const Icon = app.icon;
          
          return (
            <Card 
              key={app.id}
              onClick={() => navigate(app.route)}
              className="card-interactive cursor-pointer border border-border group overflow-hidden relative flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/50 pointer-events-none" />
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${app.colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold tracking-tight mb-1">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {app.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4 flex justify-end items-center text-sm font-medium text-primary mt-auto">
                <span className="flex items-center gap-1 group-hover:underline">
                  Explore <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
