
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Zap, BookOpen, Smartphone, ShieldCheck, Layers, Globe, Mic, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = memo(function Features({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  const unscramblerData = {
    header: "Powerful features for word games",
    subtext: "Our letter unscrambler isn't just fast—it's packed with advanced tools to help you win at Scrabble, Words with Friends, and daily crosswords.",
    primary: {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant anagram solving",
      desc: "Process up to 15 letters in milliseconds. Our optimized algorithm cross-references a massive dictionary locally, meaning you get answers instantly without waiting for page reloads."
    },
    secondaries: [
      {
        icon: <BookOpen className="w-8 h-8 text-primary mb-4" />,
        title: "Built-in definitions",
        desc: "Click any word to see its meaning. Great for ESL learners and expanding your vocabulary."
      },
      {
        icon: <Layers className="w-8 h-8 text-primary mb-4" />,
        title: "Advanced filtering",
        desc: "Narrow down answers by length, starting letters, or contained letters easily."
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary mb-4" />,
        title: "Mobile friendly",
        desc: "Perfectly optimized for your phone so you can solve word scrambles while on the go."
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
        title: "No download required",
        desc: "Use the tool entirely in your browser. No apps to install and no registration necessary."
      }
    ]
  };

  const translatorData = {
    header: "Advanced translation capabilities",
    subtext: "Experience seamless communication with features designed for speed, accuracy, and universal accessibility.",
    primary: {
      icon: <Globe className="w-6 h-6" />,
      title: "100+ Languages supported",
      desc: "Break down global barriers. Translate instantly between English, Spanish, Mandarin, French, Arabic, Hindi, and over a hundred other languages with incredible precision."
    },
    secondaries: [
      {
        icon: <Zap className="w-8 h-8 text-primary mb-4" />,
        title: "Instant translation",
        desc: "Get real-time translations as you type. No waiting, no refreshing—just instant results."
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-primary mb-4" />,
        title: "High accuracy",
        desc: "Powered by advanced algorithms that understand context, grammar, and localized idioms."
      },
      {
        icon: <FileText className="w-8 h-8 text-primary mb-4" />,
        title: "Document ready",
        desc: "Easily paste large paragraphs or document text to translate entire pages in one click."
      },
      {
        icon: <Mic className="w-8 h-8 text-primary mb-4" />,
        title: "Voice input support",
        desc: "Use your device's native dictation to speak directly into the translator for hands-free use."
      }
    ]
  };

  const data = isUnscrambler ? unscramblerData : translatorData;

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:w-2/3">
          <h2 className="seo-heading mb-4">{data.header}</h2>
          <p className="seo-body">{data.subtext}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Primary Feature - Span 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 h-full"
          >
            <Card className="h-full border-primary/20 bg-primary/5 overflow-hidden relative shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <CardContent className="p-8 relative z-10 flex flex-col justify-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                  {data.primary.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{data.primary.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {data.primary.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {data.secondaries.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="md:col-span-1 h-full"
            >
              <Card className="h-full border-border/50 shadow-sm bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  {feature.icon}
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;
