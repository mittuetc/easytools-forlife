
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const UnscramblerFooter = memo(function UnscramblerFooter() {
  return (
    <footer className="border-t border-border bg-card mt-auto" aria-labelledby="unscrambler-footer-heading">
      <h2 id="unscrambler-footer-heading" className="sr-only">Word Unscrambler Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <span className="text-xl font-bold tracking-tight text-foreground block mb-4">
              Word Unscrambler
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The fastest free online tool to unscramble letters, solve anagrams, and discover valid dictionary words for your favorite puzzles and games.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how-it-works" className="footer-link" aria-label="Learn how to use the Unscrambler">
                  How to use the Unscrambler
                </a>
              </li>
              <li>
                <a href="#tips" className="footer-link" aria-label="Read tips for finding words">
                  Tips for finding words
                </a>
              </li>
              <li>
                <Link to="/" className="footer-link" aria-label="Go back to Home page">
                  Back to Home
                </Link>
              </li>
              <li>
                <Link to="/translator" className="footer-link" aria-label="Try our Language Translator tool">
                  Language Translator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Features / Benefits */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features & Benefits</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Lightning fast results</li>
              <li>Comprehensive dictionary</li>
              <li>Advanced filtering options</li>
              <li>Mobile-friendly design</li>
            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:easytoolsforlife@easytools-forlife.com" className="footer-link" aria-label="Email support">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link" aria-label="View Frequently Asked Questions">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="footer-link" aria-label="Read our Privacy Policy">
                  Privacy Policy
                </a>
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

export default UnscramblerFooter;
