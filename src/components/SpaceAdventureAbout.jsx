
import React, { memo } from 'react';

const SpaceAdventureAbout = memo(function SpaceAdventureAbout() {
  return (
    <section className="py-24 bg-black/95 relative border-t border-space-blue/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight text-center">
          Space Adventure for Kids — Explore Planets, Stars & the Universe
        </h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-center text-balance text-lg text-space-light-blue/90">
            Blast off on an incredible journey through the cosmos! Space Adventure is your ticket to exploring the wonders of our universe—from the rocky planets in our solar system to distant galaxies billions of light-years away. Discover the mysteries of space, learn about the brave astronauts who ventured beyond Earth, and uncover the science that makes space exploration possible.
          </p>

          <p className="text-center text-balance text-lg text-space-light-blue/90">
            Whether you're curious about what's beyond the stars or fascinated by the technology that takes us to space, Space Adventure makes learning about the cosmos fun, interactive, and absolutely mind-blowing.
          </p>

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What You'll Explore in Space Adventure</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-space-light-blue/90">
                <li><strong>The Solar System:</strong> Learn about the eight planets, moons, asteroids, and comets that orbit our Sun.</li>
                <li><strong>Stars & Constellations:</strong> Discover the brightest stars, ancient constellations, and the stories they tell.</li>
                <li><strong>Black Holes & Galaxies:</strong> Explore the most extreme and mysterious objects in the universe.</li>
                <li><strong>Space Missions:</strong> Follow the incredible journeys of astronauts and spacecraft exploring the final frontier.</li>
                <li><strong>Fun Space Facts:</strong> Uncover surprising facts that will make you see the universe in a whole new way.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Did You Know?</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-space-light-blue/90">
                <li>A day on Venus is longer than a year on Venus—it takes Venus 243 Earth days to rotate once, but only 225 days to orbit the Sun!</li>
                <li>If you could somehow stand on the Sun, you would weigh 28 times more than you do on Earth because of its massive gravity.</li>
                <li>Light from the Sun takes about 8 minutes and 20 seconds to reach Earth, which means we always see the Sun as it was 8 minutes ago!</li>
              </ul>
            </div>
          </div>

          <p className="pt-4 text-center text-space-light-blue/90">
            Space Adventure is designed to spark curiosity and inspire the next generation of astronomers, engineers, and space explorers. Every day brings a new discovery—are you ready to explore?
          </p>
        </div>
      </div>
    </section>
  );
});

export default SpaceAdventureAbout;
