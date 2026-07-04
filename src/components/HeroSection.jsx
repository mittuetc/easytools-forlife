
import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trees, Rocket, Fish, Hourglass, Palette, BookOpen, Sparkles } from 'lucide-react';

const tools = [
  { 
    name: 'Word Tools', 
    description: 'A word unscrambler and translator that build vocabulary and language skills',
    icon: Pencil, 
    color: 'text-orange-600', 
    bg: 'bg-orange-100', 
    border: 'border-orange-200',
    bentoSpan: 'md:col-span-2 lg:col-span-2' // Breaks the generic 3-column layout symmetry
  },
  { 
    name: 'Nature Explorer', 
    description: 'Discover wildlife, plants, and ecosystems from around the world',
    icon: Trees, 
    color: 'text-green-600', 
    bg: 'bg-green-100', 
    border: 'border-green-200',
    bentoSpan: 'col-span-1'
  },
  { 
    name: 'Space Adventure', 
    description: 'Journey through planets, stars, and galaxies',
    icon: Rocket, 
    color: 'text-purple-600', 
    bg: 'bg-purple-100', 
    border: 'border-purple-200',
    bentoSpan: 'col-span-1'
  },
  { 
    name: 'Ocean Explorer', 
    description: 'Dive deep into the mysteries of the sea',
    icon: Fish, 
    color: 'text-blue-600', 
    bg: 'bg-blue-100', 
    border: 'border-blue-200',
    bentoSpan: 'col-span-1'
  },
  { 
    name: 'Time Travelers', 
    description: 'Visit ancient Egypt, Greece, China, Rome, and the Aztec & Maya civilizations',
    icon: Hourglass, 
    color: 'text-amber-700', 
    bg: 'bg-amber-100', 
    border: 'border-amber-200',
    bentoSpan: 'md:col-span-2 lg:col-span-1'
  },
  { 
    name: 'Creative Corner', 
    description: 'Express yourself through fun creative activities',
    icon: Palette, 
    color: 'text-pink-600', 
    bg: 'bg-pink-100', 
    border: 'border-pink-200',
    bentoSpan: 'col-span-1'
  },
  { 
    name: 'Comics', 
    description: 'Daily comics and comic series made just for kids',
    icon: BookOpen, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-100', 
    border: 'border-cyan-200',
    bentoSpan: 'md:col-span-2 lg:col-span-2'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" aria-labelledby="hero-heading">
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50 rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-14 lg:p-16 border border-indigo-100 shadow-xl shadow-indigo-900/5 relative overflow-hidden">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 font-bold text-sm sm:text-base uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Welcome to EasyTools For Life</span>
          </motion.div>

          <header className="text-center max-w-4xl mx-auto mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight text-balance leading-[1.1]"
            >
              Free Word Tools & Fun Learning Adventures for Kids
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed text-balance"
            >
              Welcome to EasyTools For Life — a free, safe, and fun place for kids to learn, explore, and create! Whether your child wants to unscramble tricky words, translate sentences into another language, discover amazing animals, blast off into space, or travel back in time to ancient civilizations, we have something magical waiting for them. Our tools are designed to make learning feel like play. Every activity on this site is carefully crafted for young learners, keeping things simple, colorful, and exciting. Parents and teachers love EasyTools For Life because it combines education with imagination — so kids don't even realize they're learning!
            </motion.p>
          </header>

          <div className="w-full bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white shadow-sm">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-8 text-center"
            >
              What You'll Find Here
            </motion.h2>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {tools.map((tool) => (
                <motion.li 
                  key={tool.name}
                  variants={itemVariants}
                  className={`flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white border ${tool.border} shadow-sm hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-indigo-500/10 transition-all duration-300 ${tool.bentoSpan}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl ${tool.bg} ${tool.color} shadow-inner flex-shrink-0`} aria-hidden="true">
                      <tool.icon className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-slate-800 tracking-tight">{tool.name}</span>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-auto pt-2">
                    {tool.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <span className="inline-block px-8 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg sm:text-xl shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer border-2 border-indigo-400/20">
              Everything is completely free. No sign-up needed. Just click and start exploring!
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
