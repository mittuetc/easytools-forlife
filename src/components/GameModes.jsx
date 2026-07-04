
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileOutput } from 'lucide-react';

const GameModes = memo(function GameModes({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  return (
    <section id={isUnscrambler ? "game-modes" : "translation-modes"} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
          <div className="w-full md:w-1/2">
            {isUnscrambler ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square sm:aspect-video md:aspect-square bg-secondary rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border border-border/50"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
                <div className="grid grid-cols-2 gap-4 z-10">
                  {['T', 'O', 'R', 'S'].map((l, i) => (
                    <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 bg-background shadow-lg rounded-xl flex items-center justify-center text-3xl font-bold text-primary">
                      {l}
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square sm:aspect-video md:aspect-square bg-secondary rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border border-border/50"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
                <div className="flex flex-col gap-6 z-10 w-full max-w-xs">
                  <div className="bg-background p-4 rounded-xl shadow-sm rounded-bl-none text-muted-foreground self-start">
                    Hello, how are you today?
                  </div>
                  <div className="bg-primary p-4 rounded-xl shadow-sm rounded-br-none text-primary-foreground self-end">
                    Hola, ¿cómo estás hoy?
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="seo-heading mb-6">
              {isUnscrambler ? "Word jumble solver" : "Text & Voice translation"}
            </h2>
            <p className="seo-body mb-6">
              {isUnscrambler 
                ? "Stuck on a tricky anagram or a daily newspaper jumble? Our tool works flawlessly as a word jumble solver. Just input the scrambled string, and we will present you with all the viable words, sorted conveniently by length."
                : "Easily translate written text by typing or pasting it into the input field. For added convenience, leverage your device's voice-to-text dictation to speak naturally and let the tool translate your voice into another language instantly."
              }
            </p>
            <ul className="space-y-3">
              {isUnscrambler ? (
                <>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Helps solve crossword anagram clues</li>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Decodes text-based puzzle games</li>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Sorts results starting from the longest words</li>
                </>
              ) : (
                <>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Instant text-to-text conversion</li>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Compatible with native voice dictation</li>
                  <li className="flex gap-3 text-muted-foreground"><span className="text-primary font-bold">✓</span> Ideal for quick, real-time conversations</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            {isUnscrambler ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square sm:aspect-video md:aspect-square bg-muted rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border border-border/50"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
                <div className="flex flex-col gap-4 w-full max-w-sm z-10">
                  <div className="h-12 bg-background rounded-lg shadow-sm border border-border flex items-center px-4 font-mono text-lg text-muted-foreground line-through decoration-destructive/50">JUMBLE</div>
                  <div className="h-12 bg-primary/10 rounded-lg shadow-sm border border-primary/30 flex items-center px-4 font-mono text-lg text-primary font-bold tracking-widest">LUMBER</div>
                  <div className="h-12 bg-primary/10 rounded-lg shadow-sm border border-primary/30 flex items-center px-4 font-mono text-lg text-primary font-bold tracking-widest">RUMBLE</div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square sm:aspect-video md:aspect-square bg-muted rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border border-border/50"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm z-10">
                  <div className="bg-background p-6 rounded-xl shadow-sm border border-border flex items-center justify-center text-center">
                    <FileOutput className="w-8 h-8 text-muted-foreground mb-2 mx-auto" />
                    <span className="text-sm font-medium">Docs</span>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl shadow-sm border border-primary/30 flex items-center justify-center text-center">
                    <MessageSquare className="w-8 h-8 text-primary mb-2 mx-auto" />
                    <span className="text-sm font-medium text-primary">Chat</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="seo-heading mb-6">
              {isUnscrambler ? "Words with Friends & Scrabble helper" : "Document & Continuous translation"}
            </h2>
            <p className="seo-body mb-6">
              {isUnscrambler
                ? "When you're staring at a rack of awkward consonants and vowels, an anagram solver is your best asset. Enter your board letters along with a blank tile representation, and discover the highest-scoring moves."
                : "Don't let language barriers slow down your work. Paste large paragraphs, emails, or entire document contents into the interface to read them in your native tongue."
              }
            </p>
            <p className="seo-body mb-6">
              {isUnscrambler
                ? "While we encourage fair play, a word finder is an excellent post-game study tool to see what high-scoring words you might have missed during your matches."
                : "Whether it is an international business contract or a casual chat log, our translation engine adapts to the context, maintaining formatting and tone as accurately as possible."
              }
            </p>
          </div>
        </div>

      </div>
    </section>
  );
});

export default GameModes;
