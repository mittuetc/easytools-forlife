
import React, { memo } from 'react';
import { GraduationCap, Users, UserPlus, Gamepad2, Brain, Coffee, Plane, Briefcase, BookOpen, Globe2, FileText, MessageCircle } from 'lucide-react';

const UseCases = memo(function UseCases({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  const unscramblerCases = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "For the classroom",
      desc: "Teachers use our unscrambler to generate lesson plans, vocabulary exercises, and engaging spelling activities.",
      bg: "bg-primary text-primary-foreground",
      textClass: "text-primary-foreground/90"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "For ESL learners",
      desc: "Expand your English vocabulary. Unscramble letters and click for definitions to learn new words in context.",
      bg: "bg-secondary text-secondary-foreground",
      textClass: "text-secondary-foreground/80"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "For board gamers",
      desc: "Whether it's Scrabble, Words with Friends, or Boggle, analyze your letters to find optimal scoring words.",
      bg: "bg-accent text-accent-foreground",
      textClass: "text-accent-foreground/80"
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "For kids",
      desc: "A fun way to practice spelling. Turn messy letters into words they can recognize and memorize.",
      bg: "bg-card text-card-foreground border border-border/60",
      textClass: "text-muted-foreground"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "For cognitive training",
      desc: "Keep your mind sharp by solving anagrams and verifying your answers against our dictionary.",
      bg: "bg-muted text-muted-foreground",
      textClass: "text-muted-foreground/80"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "For casual puzzlers",
      desc: "Stuck on the morning newspaper jumble? Get a quick hint without ruining the rest of your crossword.",
      bg: "bg-card text-card-foreground border border-border/60",
      textClass: "text-muted-foreground"
    }
  ];

  const translatorCases = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel communication",
      desc: "Navigate foreign cities, order food, and interact with locals seamlessly without speaking the native tongue.",
      bg: "bg-primary text-primary-foreground",
      textClass: "text-primary-foreground/90"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business translation",
      desc: "Close international deals and communicate with overseas clients professionally and accurately.",
      bg: "bg-secondary text-secondary-foreground",
      textClass: "text-secondary-foreground/80"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Language learning",
      desc: "Check your grammar, discover new vocabulary, and verify your sentence structure while studying.",
      bg: "bg-accent text-accent-foreground",
      textClass: "text-accent-foreground/80"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "International connection",
      desc: "Stay in touch with friends and family around the world, breaking down long-distance barriers.",
      bg: "bg-card text-card-foreground border border-border/60",
      textClass: "text-muted-foreground"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document translation",
      desc: "Quickly read foreign articles, news, or technical manuals by pasting them into the translator.",
      bg: "bg-muted text-muted-foreground",
      textClass: "text-muted-foreground/80"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Online chats",
      desc: "Communicate in multilingual online communities, gaming servers, or support forums effortlessly.",
      bg: "bg-card text-card-foreground border border-border/60",
      textClass: "text-muted-foreground"
    }
  ];

  const cases = isUnscrambler ? unscramblerCases : translatorCases;
  const headerText = isUnscrambler ? "Ways to use our word finder" : "Who uses our translator?";
  const subText = isUnscrambler 
    ? "Millions of words are unscrambled every day for learning, playing, and teaching."
    : "From backpackers to boardroom executives, fast translation empowers everyone.";

  return (
    <section id="use-cases" className="py-20 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="seo-heading mb-4">{headerText}</h2>
          <p className="seo-body">{subText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className={`rounded-2xl p-8 shadow-sm flex flex-col h-full ${item.bg}`}>
              <div className="mb-4 opacity-80">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className={`text-sm leading-relaxed ${item.textClass}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default UseCases;
