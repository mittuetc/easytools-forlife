
import React, { useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SearchX, FilterX } from 'lucide-react';

import { useDefinitionFetcher } from '@/hooks/useDefinitionFetcher.js';
import DefinitionTooltip from '@/components/DefinitionTooltip.jsx';
import { useIsMobile } from '@/hooks/use-mobile.jsx';

const ResultsDisplay = memo(function ResultsDisplay({ results, totalUnscrambledWords, filteredWordsCount }) {
  const isMobile = useIsMobile();
  const [activeWord, setActiveWord] = useState(null);
  
  const { definition, loading, error } = useDefinitionFetcher(activeWord);

  const emptyStateContent = useMemo(() => {
    if (!results || totalUnscrambledWords === 0) {
      return (
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16 px-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4">
            <SearchX className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">No unscrambled words found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn't find any valid dictionary words using those exact letters. Try a different combination.
          </p>
        </motion.div>
      );
    }

    if (filteredWordsCount === 0) {
      return (
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16 px-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4">
            <FilterX className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">No words match your filters</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try adjusting or clearing your filters to see all {totalUnscrambledWords} words we found.
          </p>
        </motion.div>
      );
    }
    
    return null;
  }, [results, totalUnscrambledWords, filteredWordsCount]);

  if (emptyStateContent) return emptyStateContent;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 relative"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
        <motion.div layout="position">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Found {filteredWordsCount} words from your letters
          </h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Tap or hover words for definitions. Showing {filteredWordsCount} of {totalUnscrambledWords} valid words.
          </p>
        </motion.div>
      </div>

      <motion.div layout className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {results.map((group, index) => (
            <motion.div
              key={`group-${group.length}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            >
              <Card className="overflow-visible border-border/50 shadow-sm bg-card relative z-10">
                <CardHeader className="bg-muted/30 pb-4 border-b border-border/30">
                  <CardTitle className="text-base sm:text-lg font-medium flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">
                      {group.length}
                    </span>
                    <span className="text-card-foreground">{group.length}-letter words</span>
                    <Badge variant="secondary" className="ml-auto font-normal">
                      {group.words.length} words
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5 overflow-visible">
                  <motion.div layout className="flex flex-wrap gap-2.5">
                    <AnimatePresence mode="popLayout">
                      {group.words.map((word) => (
                        <motion.div
                          key={word}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="relative inline-flex z-20"
                          onMouseEnter={() => !isMobile && setActiveWord(word)}
                          onMouseLeave={() => !isMobile && setActiveWord(null)}
                          onClick={(e) => {
                            if (isMobile) {
                              e.stopPropagation();
                              setActiveWord(activeWord === word ? null : word);
                            }
                          }}
                        >
                          <Badge 
                            variant="outline" 
                            className="word-badge-interactive text-sm px-3.5 py-2 sm:py-1.5 font-medium bg-background text-foreground"
                            aria-label={`Unscrambled word: ${word}`}
                          >
                            {word}
                          </Badge>
                          
                          <AnimatePresence>
                            {!isMobile && activeWord === word && (
                              <DefinitionTooltip
                                word={activeWord}
                                definition={definition}
                                loading={loading}
                                error={error}
                                isMobile={false}
                              />
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isMobile && activeWord && (
          <DefinitionTooltip
            word={activeWord}
            definition={definition}
            loading={loading}
            error={error}
            isMobile={true}
            onDismiss={() => setActiveWord(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export default ResultsDisplay;
