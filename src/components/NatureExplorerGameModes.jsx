
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldQuestion } from 'lucide-react';

const NatureExplorerGameModes = memo(function NatureExplorerGameModes() {
  return (
    <section id="game-modes" className="py-24 bg-nature-light-bg/40 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square sm:aspect-video md:aspect-square bg-nature-green/10 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border-2 border-nature-green/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--nature-green)/0.15)_0%,transparent_70%)]" />
              <div className="grid grid-cols-2 gap-4 z-10 w-full max-w-xs">
                <div className="bg-card p-4 rounded-xl shadow-sm border-2 border-border text-center font-bold text-muted-foreground flex flex-col items-center gap-2">
                  <span className="text-3xl">🦅</span> Birds
                </div>
                <div className="bg-nature-green/20 p-4 rounded-xl shadow-sm border-2 border-nature-green text-center font-bold text-nature-green flex flex-col items-center gap-2 transform scale-105">
                  <span className="text-3xl">🦁</span> Mammals
                  <CheckCircle2 className="w-5 h-5 absolute -top-2 -right-2 text-nature-green bg-white rounded-full" />
                </div>
                <div className="bg-card p-4 rounded-xl shadow-sm border-2 border-border text-center font-bold text-muted-foreground flex flex-col items-center gap-2">
                  <span className="text-3xl">🐍</span> Reptiles
                </div>
                <div className="bg-card p-4 rounded-xl shadow-sm border-2 border-border text-center font-bold text-muted-foreground flex flex-col items-center gap-2">
                  <span className="text-3xl">🐸</span> Amphibians
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight text-balance">
              Interactive Quiz Mode
            </h2>
            <p className="text-lg font-medium text-muted-foreground mb-6 leading-relaxed">
              Learning shouldn't be boring! That's why every daily fact comes with a fun, interactive multiple-choice question. It encourages kids to actively read and retain the information they just discovered.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start text-foreground font-medium">
                <ShieldQuestion className="w-6 h-6 text-nature-blue shrink-0" />
                <span>Read the daily 'Fun Fact!' out loud or independently.</span>
              </li>
              <li className="flex gap-4 items-start text-foreground font-medium">
                <ShieldQuestion className="w-6 h-6 text-nature-orange shrink-0" />
                <span>Choose the best answer from the colorful quiz options.</span>
              </li>
              <li className="flex gap-4 items-start text-foreground font-medium">
                <ShieldQuestion className="w-6 h-6 text-nature-green shrink-0" />
                <span>Get instant, positive feedback whether you answer correctly or need to try again!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square sm:aspect-video md:aspect-square bg-nature-blue/10 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border-2 border-nature-blue/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--nature-blue)/0.15)_0%,transparent_50%)]" />
              <div className="flex flex-col gap-6 w-full max-w-sm z-10">
                <div className="bg-card rounded-2xl p-6 shadow-sm border-2 border-border text-center">
                  <div className="text-5xl mb-4">🌟</div>
                  <h4 className="font-bold text-xl mb-2">Great Job!</h4>
                  <p className="text-muted-foreground text-sm font-medium">You got it right! Come back tomorrow for another fun fact.</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight text-balance">
              Rewarding Learning
            </h2>
            <p className="text-lg font-medium text-muted-foreground mb-6 leading-relaxed">
              We focus on positive reinforcement. When kids answer correctly, they are celebrated with fun emojis and encouraging messages. If they make a mistake, they are gently encouraged to try again and keep exploring.
            </p>
            <p className="text-lg font-medium text-muted-foreground mb-6 leading-relaxed">
              This zero-pressure environment ensures that children associate learning about science and nature with fun, discovery, and achievement rather than tests and scores.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
});

export default NatureExplorerGameModes;
