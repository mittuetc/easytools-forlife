
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const SpaceAdventureFooter = memo(function SpaceAdventureFooter() {
  return (
    <footer className="border-t border-space-blue/30 bg-space-dark-purple relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-space-blue/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="text-xl font-black tracking-tight block mb-4 text-white glow-text">
              Space Adventure
            </span>
            <p className="text-sm text-space-light-blue/80 leading-relaxed mb-6 font-medium">
              Blast off into the cosmos! Discover amazing facts about planets, stars, and the heroes who explore them in this interactive space adventure for kids.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-white">Apps</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Home</Link></li>
              <li><Link to="/nature-explorer" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Nature Explorer</Link></li>
              <li><Link to="/space-adventure" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Space Adventure</Link></li>
              <li><Link to="/creative-corner" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Creative Corner</Link></li>
              <li><Link to="/comics" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Comics</Link></li>
              <li><Link to="/translator" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Translator</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-white">Resources</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="text-space-light-blue/80 hover:text-space-glow transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-space-light-blue/80 hover:text-space-glow transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-space-light-blue/80 hover:text-space-glow transition-colors">
                  Contact Mission Control
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold block mb-4 text-white">Legal</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-space-light-blue/80 hover:text-space-glow transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-space-blue/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-space-light-blue/60 font-medium">
            &copy; {new Date().getFullYear()} Easy Tools For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default SpaceAdventureFooter;
