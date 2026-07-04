
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = memo(function AboutUsSection() {
  return (
    <section 
      id="about-us" 
      className="py-20 md:py-28 border-y border-border/50 bg-muted/20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance mx-auto">
            Hi! We're Sarvani and Sanjana. We built this website because our goal is simple — to give everyone access to free, useful tools all in one place. No signups, no fees, no fuss. Just quick, helpful tools designed to improve your productivity and make everyday tasks easier and faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutUsSection;
