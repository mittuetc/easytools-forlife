
import React, { memo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.jsx";

const faqs = [
  { q: "How often do the space facts update?", a: "Our cosmic database rotates daily! Come back every 24 hours for a new planet, star, and astronaut profile." },
  { q: "Is this suitable for my 7-year-old?", a: "Yes! The language is tailored specifically for children ages 7-12, keeping concepts accessible but scientifically accurate." },
  { q: "Do I need an account to use Space Adventure?", a: "No account required. Just launch the app and start exploring the universe instantly." },
  { q: "Are the astronaut facts real?", a: "Absolutely. All our astronaut profiles and planetary data are based on verified historical and scientific records." },
  { q: "Can teachers use this in the classroom?", a: "Teachers love using our daily facts as a fun science warm-up to start the school day." }
];

const SpaceAdventureFAQSection = memo(function SpaceAdventureFAQSection() {
  return (
    <section className="py-24 bg-space-dark-purple relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12 tracking-tight glow-text">Mission Briefing (FAQ)</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-space-blue/30 bg-black/40 px-6 rounded-xl">
              <AccordionTrigger className="text-white hover:text-space-light-blue text-left font-bold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-space-light-blue/80 text-base leading-relaxed pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

export default SpaceAdventureFAQSection;
