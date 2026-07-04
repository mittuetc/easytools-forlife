
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ComicsFooter = memo(function ComicsFooter() {
  return (
    <footer className="bg-[hsl(var(--bread-tan))] border-t-8 border-black mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="text-3xl font-black comic-font tracking-wide block mb-4 text-white drop-shadow-[2px_2px_0_#000]" style={{ WebkitTextStroke: '1px black' }}>
              Comics Hub
            </span>
            <p className="text-base text-black font-bold leading-relaxed mb-6">
              Daily laughs, colorful characters, and the epic ongoing saga of PB&J. Wholesome entertainment for the whole family!
            </p>
          </div>
          
          <div>
            <span className="text-xl font-black uppercase text-black block mb-4">Apps!</span>
            <ul className="space-y-3 text-base font-bold">
              <li><Link to="/" className="text-black hover:text-[hsl(var(--comic-blue,200_95%_50%))] transition-colors">Home</Link></li>
              <li><Link to="/nature-explorer" className="text-black hover:text-[hsl(var(--comic-green,140_70%_50%))] transition-colors">Nature Explorer</Link></li>
              <li><Link to="/space-adventure" className="text-black hover:text-[hsl(var(--jelly-purple))] transition-colors">Space Adventure</Link></li>
              <li><Link to="/creative-corner" className="text-black hover:text-[hsl(var(--comic-red,350_85%_55%))] transition-colors">Creative Corner</Link></li>
              <li><Link to="/comics" className="text-black hover:text-[hsl(var(--comic-yellow,48_96%_65%))] transition-colors">Comics</Link></li>
              <li><Link to="/translator" className="text-black hover:text-[hsl(var(--comic-blue,200_95%_50%))] transition-colors">Translator</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="text-xl font-black uppercase text-black block mb-4">Resources!</span>
            <ul className="space-y-3 text-base font-bold">
              <li><a href="#about" className="text-black hover:text-[hsl(var(--comic-red,350_85%_55%))] transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-black hover:text-[hsl(var(--comic-red,350_85%_55%))] transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-black hover:text-[hsl(var(--comic-red,350_85%_55%))] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xl font-black uppercase text-black block mb-4">Legal!</span>
            <ul className="space-y-3 text-base font-bold">
              <li><Link to="/privacy" className="text-black hover:text-[hsl(var(--jelly-purple))] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-black hover:text-[hsl(var(--jelly-purple))] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black font-black uppercase">
            &copy; {new Date().getFullYear()} Easy Tools For Life. All Rights Reserved!
          </p>
        </div>
      </div>
    </footer>
  );
});

export default ComicsFooter;
