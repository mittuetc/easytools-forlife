
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const CreativeCornerGameModes = memo(function CreativeCornerGameModes() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bangers text-center text-slate-800 mb-16 tracking-wide">Creative Modes</h2>
        <div className="space-y-8">
          <motion.div className="bg-rainbow-orange/10 border-2 border-rainbow-orange/30 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8" whileHover={{ scale: 1.01 }}>
            <div className="text-7xl bg-white p-6 rounded-full shadow-sm border-4 border-rainbow-orange/20">✏️</div>
            <div>
              <h3 className="text-3xl font-bangers text-rainbow-orange mb-3 tracking-wide">Draw & Doodle</h3>
              <p className="text-lg text-slate-700 font-medium">Follow Pencil Pete's easy 3-step guides to draw animals, monsters, and more. Perfect for building fine motor skills and artistic confidence.</p>
            </div>
          </motion.div>
          <motion.div className="bg-rainbow-purple/10 border-2 border-rainbow-purple/30 p-8 rounded-3xl flex flex-col md:flex-row-reverse items-center gap-8" whileHover={{ scale: 1.01 }}>
            <div className="text-7xl bg-white p-6 rounded-full shadow-sm border-4 border-rainbow-purple/20">📖</div>
            <div className="text-right">
              <h3 className="text-3xl font-bangers text-rainbow-purple mb-3 tracking-wide">Write & Tell</h3>
              <p className="text-lg text-slate-700 font-medium">Join Story Stella to build wild tales. We provide the setting and characters, you provide the imagination!</p>
            </div>
          </motion.div>
          <motion.div className="bg-rainbow-pink/10 border-2 border-rainbow-pink/30 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8" whileHover={{ scale: 1.01 }}>
            <div className="text-7xl bg-white p-6 rounded-full shadow-sm border-4 border-rainbow-pink/20">✂️</div>
            <div>
              <h3 className="text-3xl font-bangers text-rainbow-pink mb-3 tracking-wide">Build & Craft</h3>
              <p className="text-lg text-slate-700 font-medium">Craft Cathy shares fun, mess-friendly projects using simple items like paper plates and cardboard tubes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerGameModes;
