
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NatureExplorerFooter = memo(function NatureExplorerFooter() {
  return (
    <footer className="border-t border-green-200 bg-[#F0FDF4] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-green-950">
          <div className="lg:col-span-1">
            <span className="text-xl font-black tracking-tight block mb-4 text-green-800">
              Nature Explorer
            </span>
            <p className="text-sm text-green-800/80 leading-relaxed mb-6 font-medium">
              A fun daily learning experience for kids to explore fascinating facts about animals, plants, and the weather. Let's learn something new every day!
            </p>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-green-800">Apps</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="text-green-800/80 hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link to="/nature-explorer" className="text-green-800/80 hover:text-green-600 transition-colors">Nature Explorer</Link></li>
              <li><Link to="/space-adventure" className="text-green-800/80 hover:text-green-600 transition-colors">Space Adventure</Link></li>
              <li><Link to="/creative-corner" className="text-green-800/80 hover:text-green-600 transition-colors">Creative Corner</Link></li>
              <li><Link to="/comics" className="text-green-800/80 hover:text-green-600 transition-colors">Comics</Link></li>
              <li><Link to="/translator" className="text-green-800/80 hover:text-green-600 transition-colors">Translator</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-green-800">Resources</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="text-green-800/80 hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-green-800/80 hover:text-green-600 transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-green-800/80 hover:text-green-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold block mb-4 text-green-800">Legal</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy" className="text-green-800/80 hover:text-green-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-green-800/80 hover:text-green-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-800/70 font-medium">
            &copy; {new Date().getFullYear()} Easy Tools For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default NatureExplorerFooter;
