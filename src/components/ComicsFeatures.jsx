
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Daily Strips", desc: "A standalone gag every 24 hours.", color: "bg-[hsl(var(--comic-red,350_85%_55%))]" },
  { title: "Serial Stories", desc: "Follow the PB&J gang across ongoing episodes.", color: "bg-[hsl(var(--comic-blue,200_95%_50%))]" },
  { title: "Vibrant Art", desc: "Thick lines and bold colors, true comic style.", color: "bg-[hsl(var(--comic-yellow,48_96%_65%))]" },
  { title: "Archived Past", desc: "Missed a day? Read previous comics easily.", color: "bg-[hsl(var(--comic-green,140_70%_50%))]" }
];

const ComicsFeatures = memo(function ComicsFeatures() {
  return (
    <section className="py-24 bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black comic-font uppercase text-white drop-shadow-[4px_4px_0_#000] text-center mb-16" style={{ WebkitTextStroke: '2px black' }}>Comic Features!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <motion.div key={idx} className={`${feat.color} border-4 border-black p-6 shadow-[6px_6px_0_0_#000]`} whileHover={{ y: -5, x: -5, boxShadow: '10px 10px 0 0 #000' }}>
              <h3 className="text-2xl font-black uppercase text-white drop-shadow-[2px_2px_0_#000] mb-2">{feat.title}</h3>
              <p className="text-white font-bold text-lg drop-shadow-[1px_1px_0_#000]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ComicsFeatures;
