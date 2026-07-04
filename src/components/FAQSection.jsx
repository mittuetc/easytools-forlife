
import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const unscramblerFaqs = [
  {
    q: "How does the unscrambler work?",
    a: "To unscramble a word, simply type your scrambled letters into our input box and click 'Unscramble Letters'. Our algorithm instantly reorganizes those letters and checks them against a comprehensive dictionary to find every valid word."
  },
  {
    q: "Can I use it for Scrabble or Words with Friends?",
    a: "Absolutely. Many players use our tool as a Scrabble word finder or Words with Friends solver to discover high-scoring words they might have missed. However, we recommend using it for practice and post-game analysis to keep gameplay fair."
  },
  {
    q: "What languages are supported?",
    a: "Currently, our primary unscrambler focuses on standard US and UK English dictionaries to provide the most accurate results for popular word games in English-speaking regions."
  },
  {
    q: "Is it free?",
    a: "Yes! Our letter unscrambler is completely free forever. There are no hidden fees, no daily limits, and you don't need to register or download anything to solve your anagrams."
  },
  {
    q: "How accurate are the results?",
    a: "Highly accurate. We cross-reference your letters against official tournament dictionaries, ensuring that the words you see are valid in almost all major word games and puzzles."
  },
  {
    q: "Need more help?",
    a: (
      <>
        If you have additional questions or need support, feel free to reach out to us at <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-primary hover:underline font-medium">easytoolsforlife@easytools-forlife.com</a>. We're here to help!
      </>
    )
  }
];

const translatorFaqs = [
  {
    q: "How accurate is the translation?",
    a: "Our translator uses advanced machine learning models to provide highly accurate translations. While no automated tool is perfect for deep literary nuance, it excels at conversational, business, and travel communication."
  },
  {
    q: "What languages are supported?",
    a: "We support over 100 languages, including Spanish, French, German, Mandarin, Japanese, Arabic, Hindi, and many more, covering the vast majority of the world's spoken languages."
  },
  {
    q: "Can I translate documents?",
    a: "Yes, you can paste large blocks of text directly into the translator. While direct file uploads are being developed, pasting text from PDFs or Word documents works instantly."
  },
  {
    q: "Is voice translation available?",
    a: "Voice translation features depend on your device's native dictation capabilities. You can use your mobile or desktop voice-to-text to input phrases directly into the translator box."
  },
  {
    q: "Is it free?",
    a: "Yes, our language translation tool is 100% free to use. There are no paywalls, hidden fees, or word count limits, ensuring everyone has access to seamless communication."
  },
  {
    q: "Need more help?",
    a: (
      <>
        If you have additional questions or need support, feel free to reach out to us at <a href="mailto:easytoolsforlife@easytools-forlife.com" className="text-primary hover:underline font-medium">easytoolsforlife@easytools-forlife.com</a>. We're here to help!
      </>
    )
  }
];

const FAQSection = memo(function FAQSection({ type = 'unscrambler' }) {
  const faqs = type === 'unscrambler' ? unscramblerFaqs : translatorFaqs;

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="seo-heading mb-4">Frequently asked questions</h2>
          <p className="seo-body mx-auto">
            Everything you need to know about our {type === 'unscrambler' ? 'word jumble solver' : 'translation tool'}.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});

export default FAQSection;
