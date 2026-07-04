
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const TranslatorFooter = memo(function TranslatorFooter() {
  return (
    <footer className="border-t border-border bg-card mt-auto" aria-labelledby="translator-footer-heading">
      <h2 id="translator-footer-heading" className="sr-only">Language Translator Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <span className="text-xl font-bold tracking-tight text-foreground block mb-4">
              Language Translator
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Break down language barriers instantly. Translate text seamlessly across more than 50 supported languages with high accuracy.
            </p>
          </div>
          
          {/* Apps Links */}
          <div>
            <span className="text-lg font-bold text-foreground block mb-4">Apps</span>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/nature-explorer" className="text-muted-foreground hover:text-primary transition-colors">Nature Explorer</Link></li>
              <li><Link to="/space-adventure" className="text-muted-foreground hover:text-primary transition-colors">Space Adventure</Link></li>
              <li><Link to="/creative-corner" className="text-muted-foreground hover:text-primary transition-colors">Creative Corner</Link></li>
              <li><Link to="/comics" className="text-muted-foreground hover:text-primary transition-colors">Comics</Link></li>
              <li><Link to="/translator" className="text-muted-foreground hover:text-primary transition-colors">Translator</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <span className="text-lg font-bold text-foreground block mb-4">Resources</span>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Learn how to use the Translator">
                  How to use
                </a>
              </li>
              <li>
                <a href="#languages" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View supported languages">
                  Supported languages
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View Frequently Asked Questions">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email support">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-lg font-bold text-foreground block mb-4">Legal</span>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Read our Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Easy Tools For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default TranslatorFooter;
