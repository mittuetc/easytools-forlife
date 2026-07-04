
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { X, BookA } from 'lucide-react';

const DefinitionTooltip = memo(function DefinitionTooltip({ 
  word, 
  definition, 
  loading, 
  error, 
  onDismiss, 
  isMobile 
}) {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-3 mt-3">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-3.5 w-full rounded" />
          <Skeleton className="h-3.5 w-4/5 rounded" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="mt-3 text-sm text-muted-foreground flex items-start gap-2">
          <BookA className="w-4 h-4 mt-0.5 shrink-0 opacity-50" />
          <p>{error}</p>
        </div>
      );
    }

    if (definition && definition.meanings) {
      return (
        <div className="mt-3 space-y-4 max-h-[40vh] md:max-h-64 overflow-y-auto pr-1 pb-1 scrollbar-thin">
          {definition.meanings.slice(0, 2).map((meaning, mIdx) => (
            <div key={mIdx} className="space-y-1.5">
              <span className="text-xs font-medium italic text-primary/80 block">
                {meaning.partOfSpeech}
              </span>
              <ul className="space-y-1.5 pl-1 text-sm text-foreground/90 leading-relaxed">
                {meaning.definitions.slice(0, 3).map((def, dIdx) => (
                  <li key={dIdx} className="flex gap-2">
                    <span className="text-primary/40 select-none">•</span>
                    <span>{def.definition}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  if (isMobile) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm"
          onClick={onDismiss}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 pb-safe pointer-events-auto"
        >
          <Card className="shadow-2xl border-border/60">
            <CardContent className="p-5 relative">
              <button 
                onClick={onDismiss} 
                className="absolute right-4 top-4 p-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors"
                aria-label="Close definition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="font-bold text-lg text-foreground capitalize pr-10">
                {word}
              </div>
              {renderContent()}
            </CardContent>
          </Card>
        </motion.div>
      </>
    );
  }

  // Desktop Floating Tooltip
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 w-72 origin-bottom pointer-events-none"
    >
      <Card className="shadow-xl border-border/50 bg-popover text-popover-foreground relative overflow-visible">
        {/* Tooltip Arrow pointing down */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-popover border-b border-r border-border/50 rotate-45" />
        <CardContent className="p-4 relative z-10 text-left pointer-events-auto">
          <div className="font-bold text-base capitalize border-b border-border/30 pb-2">
            {word}
          </div>
          {renderContent()}
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default DefinitionTooltip;
