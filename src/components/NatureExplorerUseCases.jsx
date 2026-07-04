
import React, { memo } from 'react';
import { Home, School, BookOpenCheck, UserCircle } from 'lucide-react';

const NatureExplorerUseCases = memo(function NatureExplorerUseCases() {
  const cases = [
    {
      icon: <Home className="w-8 h-8" aria-hidden="true" />,
      title: "Parents - Home Learning",
      desc: "Start your morning routine with a fun daily fact. It's a great screen-time alternative that sparks family conversations over breakfast.",
      bg: "bg-[hsl(var(--nature-blue)/0.1)] text-nature-blue border-nature-blue/20"
    },
    {
      icon: <School className="w-8 h-8" aria-hidden="true" />,
      title: "Teachers - Classroom Activity",
      desc: "Use Nature Explorer as a daily 'warm-up' activity on the smartboard to settle the class and introduce a quick science concept.",
      bg: "bg-[hsl(var(--nature-green)/0.1)] text-nature-green border-nature-green/20"
    },
    {
      icon: <BookOpenCheck className="w-8 h-8" aria-hidden="true" />,
      title: "Homeschooling Support",
      desc: "Supplement your science curriculum with engaging, bite-sized daily quizzes that keep children engaged without overwhelming them.",
      bg: "bg-[hsl(var(--nature-orange)/0.1)] text-nature-orange border-nature-orange/20"
    },
    {
      icon: <UserCircle className="w-8 h-8" aria-hidden="true" />,
      title: "Independent Learning",
      desc: "The kid-friendly interface allows early readers to navigate, read facts, and answer quizzes completely on their own, building confidence.",
      bg: "bg-muted text-muted-foreground border-border/60"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-nature-light-bg/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Ways to Explore
          </h2>
          <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto">
            Whether at home, in the classroom, or on the go, Nature Explorer is designed to fit seamlessly into any learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className={`rounded-[var(--radius)] p-8 shadow-sm flex flex-col h-full border-2 bg-card`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerUseCases;
