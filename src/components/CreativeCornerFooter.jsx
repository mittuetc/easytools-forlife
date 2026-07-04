
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const CreativeCornerFooter = memo(function CreativeCornerFooter() {
  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden border-t-4 border-slate-100 mt-auto">
      {/* Decorative Rainbow Bar at Top */}
      <div className="absolute top-0 left-0 right-0 h-3 flex">
        <div className="flex-1 bg-rainbow-red"></div>
        <div className="flex-1 bg-rainbow-orange"></div>
        <div className="flex-1 bg-rainbow-yellow"></div>
        <div className="flex-1 bg-rainbow-green"></div>
        <div className="flex-1 bg-rainbow-blue"></div>
        <div className="flex-1 bg-rainbow-purple"></div>
        <div className="flex-1 bg-rainbow-pink"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Playful CTA Block */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-sm border-2 border-slate-100 mb-16 relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl drop-shadow-md">
            🎨
          </div>
          <h2 className="text-4xl font-bangers text-slate-800 tracking-wide mt-4 mb-4">
            Keep Creating Every Day!
          </h2>
          <p className="text-lg font-medium text-slate-600 mb-8 max-w-lg mx-auto">
            Check back tomorrow for brand new drawing tips, story ideas, and craft projects. Your imagination is your superpower! 🦸‍♂️✨
          </p>
          
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-rainbow-blue text-white rounded-full font-bangers text-xl tracking-wide shadow-lg shadow-rainbow-blue/30 hover:bg-rainbow-blue/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Structured Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          <div className="lg:col-span-1">
            <span className="text-2xl font-bangers tracking-wide block mb-4 text-slate-800">
              Creative Corner
            </span>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              A safe, colorful space designed for kids to explore drawing, storytelling, and crafting every single day.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-slate-800">Apps</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="text-slate-600 hover:text-rainbow-blue transition-colors">Home</Link></li>
              <li><Link to="/nature-explorer" className="text-slate-600 hover:text-rainbow-green transition-colors">Nature Explorer</Link></li>
              <li><Link to="/space-adventure" className="text-slate-600 hover:text-rainbow-purple transition-colors">Space Adventure</Link></li>
              <li><Link to="/creative-corner" className="text-slate-600 hover:text-rainbow-pink transition-colors">Creative Corner</Link></li>
              <li><Link to="/comics" className="text-slate-600 hover:text-rainbow-orange transition-colors">Comics</Link></li>
              <li><Link to="/translator" className="text-slate-600 hover:text-rainbow-blue transition-colors">Translator</Link></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-bold block mb-4 text-slate-800">Resources</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="text-slate-600 hover:text-rainbow-blue transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-slate-600 hover:text-rainbow-blue transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-slate-600 hover:text-rainbow-blue transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-bold block mb-4 text-slate-800">Legal</span>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy" className="text-slate-600 hover:text-rainbow-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-rainbow-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-slate-100 flex flex-col items-center justify-center">
          <p className="text-slate-400 font-medium text-sm text-center">
            &copy; {new Date().getFullYear()} Easy Tools For Life. Made with ❤️ for creative kids everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default CreativeCornerFooter;
