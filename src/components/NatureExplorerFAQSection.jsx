
import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

const faqs = [
  {
    q: "How often is content updated?",
    a: "Our content updates daily! We have a rotating library of fun facts and quizzes, meaning every day your child logs in, they will see a new animal, plant, and weather fact."
  },
  {
    q: "Is Nature Explorer free?",
    a: "Yes! Nature Explorer is completely free to use. There are no hidden fees, paywalls, or mandatory accounts required to learn and play."
  },
  {
    q: "What age group is this intended for?",
    a: "The content is primarily designed for kids aged 4 to 10. The interface uses large text, bright colors, and simple multiple-choice questions that are perfect for early and intermediate readers."
  },
  {
    q: "How long do the quiz sessions take?",
    a: "Each daily section (Animals, Plants, Weather) takes about 1-2 minutes to read and answer. It's designed to be a quick, impactful 'snack' of learning rather than a long, exhausting test."
  },
  {
    q: "Can parents or teachers track progress?",
    a: "Currently, Nature Explorer is designed for frictionless, anonymous daily play. We don't require logins, so progress is meant to be celebrated in the moment rather than tracked via dashboards."
  },
  {
    q: "Is an internet connection required?",
    a: "Yes, you need an internet connection to load the app, but the daily content is cached in your browser. This means it loads instantly and works smoothly even on slower connections."
  },
  {
    q: "How many topics are available?",
    a: "Right now, we cover three main categories every day: Animals, Plants, and Weather. We are always looking to expand our curriculum with more exciting science topics!"
  }
];

const NatureExplorerFAQSection = memo(function NatureExplorerFAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl font-medium text-muted-foreground mx-auto">
            Everything you need to know about our daily learning platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/60 border-b-2">
              <AccordionTrigger className="text-left text-xl font-bold hover:text-nature-green hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg font-medium text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

export default NatureExplorerFAQSection;
