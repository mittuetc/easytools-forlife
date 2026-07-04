
import React, { memo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.jsx";

const faqs = [
  { q: "Are the crafts messy?", a: "Most crafts use basic household items like paper, glue, and crayons. We try to keep the glitter to a minimum!" },
  { q: "Do I need to buy special art supplies?", a: "No! A standard pencil, some paper, and basic school supplies are all you need for all of our activities." },
  { q: "How often do the activities change?", a: "Every single day! Midnight local time brings a new drawing, story, and craft." }
];

const CreativeCornerFAQSection = memo(function CreativeCornerFAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bangers text-center text-slate-800 mb-12 tracking-wide">Questions? (FAQ)</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-slate-100">
              <AccordionTrigger className="text-lg font-bold text-slate-700 hover:text-rainbow-purple py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-slate-600 font-medium text-base pb-6">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

export default CreativeCornerFAQSection;
