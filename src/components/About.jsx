
import React, { memo } from 'react';

const About = memo(function About({ type = 'unscrambler' }) {
  const isUnscrambler = type === 'unscrambler';

  if (!isUnscrambler) {
    return (
      <section id="about" className="py-20 bg-muted/20 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Free Language Translator for Kids — Translate Words & Sentences Easily</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-center text-balance mb-8">
              Our Language Translator is designed to make learning new languages fun and easy for kids. Whether you're translating a single word or an entire sentence, our tool provides instant, accurate translations across more than 60 languages. No complicated setup, no sign-ups—just pure, simple translation right in your browser!
            </p>

            <div className="max-w-2xl mx-auto space-y-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">How to Use Our Translator</h3>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Type or paste the word or sentence you want to translate into the input box.</li>
                  <li>Select the language you're translating from (or let it auto-detect).</li>
                  <li>Choose the language you want to translate to.</li>
                  <li>Click "Translate" and get your instant result!</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Why Learning Languages is Great for Kids</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Boosts Brain Power:</strong> Learning languages improves memory, focus, and problem-solving skills.</li>
                  <li><strong>Opens Doors:</strong> Speaking multiple languages opens up opportunities for travel, friendships, and future careers.</li>
                  <li><strong>Fun and Engaging:</strong> Our translator makes language learning interactive and enjoyable, not boring.</li>
                  <li><strong>Builds Confidence:</strong> Master new words and phrases at your own pace and celebrate your progress!</li>
                </ul>
              </div>
            </div>

            <p className="pt-4 text-center">
              Have questions or feedback? <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-primary hover:underline font-medium">Contact Us</a>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-muted/20 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About Word Unscrambler</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-center text-balance mb-8">
            Word Unscrambler was built with a simple mission: to provide the fastest, most reliable anagram solver on the web. It's a fun, safe, and easy-to-use tool designed to help kids discover new words, improve their spelling, and expand their vocabulary!
          </p>

          <div className="max-w-2xl mx-auto space-y-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Why Kids Love Our Word Unscrambler</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Fast and Fun:</strong> Get answers in seconds so you can keep playing and learning.</li>
                <li><strong>Easy to Use:</strong> A simple, kid-friendly design with no confusing buttons or ads.</li>
                <li><strong>Completely Free:</strong> No sign-ups, no paywalls, and no downloads required. Just type and learn!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">How to Use the Word Unscrambler</h3>
              <ul className="list-decimal list-inside space-y-2">
                <li>Type your scrambled letters into the search box.</li>
                <li>Click the "Unscramble" button.</li>
                <li>Discover all the amazing words you can spell, sorted perfectly by length!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Great For:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Solving tricky word jumbles and anagram puzzles.</li>
                <li>Finding words to maximize points in family board games.</li>
                <li>Learning new vocabulary and improving spelling skills for school.</li>
              </ul>
            </div>
          </div>

          <p className="pt-4 text-center">
            Have questions or feedback? <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-primary hover:underline font-medium">Contact Us</a>.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
