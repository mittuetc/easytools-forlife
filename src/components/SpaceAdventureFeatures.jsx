
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, MousePointerClick, RefreshCw, GraduationCap, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: Globe, title: 'Planet Picker', desc: 'Interactive 3D-like planetary selection tool.' },
  { icon: BookOpen, title: 'Daily Facts', desc: 'New astronomical information updated every 24 hours.' },
  { icon: MousePointerClick, title: 'Interactive Explorer', desc: 'Engaging UI elements that respond to your curiosity.' },
  { icon: RefreshCw, title: 'Real-time Updates', desc: 'Live data rotation ensures you always see something new.' },
  { icon: GraduationCap, title: 'Educational Content', desc: 'Science-backed facts vetted for young learners.' },
  { icon: LayoutDashboard, title: 'Multi-section Learning', desc: 'Divided into Planets, Stars, and Astronauts for structured reading.' }
];

const SpaceAdventureFeatures = memo(function SpaceAdventureFeatures() {
  return (
    <section className="py-24 bg-black/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight glow-text">Cosmic Features</h2>
          <p className="text-lg text-space-light-blue max-w-2xl mx-auto">Everything you need to become a junior astronomer.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-space-dark-purple/50 border border-space-blue/20 rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 bg-space-blue/20 rounded-lg text-space-light-blue shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-space-light-blue/70 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureFeatures;
