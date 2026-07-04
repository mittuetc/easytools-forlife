
import React, { memo } from 'react';

const NatureExplorerAbout = memo(function NatureExplorerAbout() {
  return (
    <section id="about" className="py-24 bg-nature-green/5 border-t-2 border-nature-green/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight text-center">
          Nature Explorer for Kids — Discover Animals, Plants & Ecosystems
        </h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-center text-balance text-lg">
            Nature Explorer is your gateway to discovering the incredible diversity of life on Earth. From tiny insects to majestic mammals, from rainforests to coral reefs, explore fascinating facts about animals, plants, and ecosystems in a fun, interactive way designed just for kids.
          </p>

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What You Can Discover in Nature Explorer</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li><strong>Amazing Animals:</strong> Learn about creatures from every corner of the planet—their habitats, behaviors, diets, and special abilities.</li>
                <li><strong>Incredible Plants:</strong> Discover how plants grow, adapt to their environments, and support all life on Earth.</li>
                <li><strong>Thriving Ecosystems:</strong> Understand how different environments work together and why biodiversity matters.</li>
                <li><strong>Fun Facts:</strong> Uncover surprising and mind-blowing facts that will make you see nature in a whole new way.</li>
                <li><strong>Interactive Quizzes:</strong> Test your knowledge and challenge yourself to become a nature expert!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Nature Education Matters</h3>
              <p className="mb-4">
                Understanding nature isn't just about learning facts—it's about developing a deep connection to the world around you. When kids learn about animals, plants, and ecosystems, they:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Build curiosity and critical thinking skills through exploration and discovery.</li>
                <li>Develop empathy and respect for all living things.</li>
                <li>Learn why protecting our planet is everyone's responsibility.</li>
                <li>Gain confidence in their ability to understand complex scientific concepts.</li>
              </ul>
            </div>
          </div>

          <p className="pt-4 text-center">
            Have questions or want to share your favorite nature fact? <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-nature-green hover:underline font-semibold">Contact us</a>—we'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
});

export default NatureExplorerAbout;
