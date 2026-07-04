
import React, { memo } from 'react';

const CreativeCornerAbout = memo(function CreativeCornerAbout() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bangers text-slate-800 mb-8 tracking-wide text-center">
          Creative Corner for Kids — Art, Writing & Imagination Activities
        </h1>
        
        <div className="space-y-12 text-slate-600">
          <div>
            <h3 className="text-2xl font-bangers text-slate-800 mb-4">What's in Creative Corner?</h3>
            <ul className="list-disc list-inside space-y-2 text-lg font-medium">
              <li>Drawing & Painting — Create colorful artwork with guided prompts and inspiration</li>
              <li>Story Writing — Craft exciting tales with character builders and plot starters</li>
              <li>Crafting Projects — Make fun DIY projects using everyday materials</li>
              <li>Poetry & Rhymes — Explore creative writing through poems and rhyming games</li>
              <li>Collage & Mixed Media — Combine different materials to express your unique style</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bangers text-slate-800 mb-4">Why Creativity Matters</h3>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Creative Corner was designed to provide a safe, encouraging space for kids to practice art, writing, and crafting without the pressure of perfection. Creativity helps children express themselves, build confidence, and develop problem-solving skills.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Our 3-step approach breaks down overwhelming tasks into bite-sized fun, ensuring that every child ends their session with a completed project and a big smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CreativeCornerAbout;
