
import React, { useState, useEffect, useRef, useMemo, useCallback, lazy, Suspense, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, X, ArrowRight, ChevronDown, ListFilter } from 'lucide-react';
import { useWordUnscrambler } from '@/hooks/useWordUnscrambler.js';
import { useDebounce } from '@/hooks/useDebounce.js';
import FilterPanel, { defaultFilters } from './FilterPanel.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

const ResultsDisplay = lazy(() => import('./ResultsDisplay.jsx'));

const WordUnscrambler = memo(function WordUnscrambler() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const debouncedFilters = useDebounce(filters, 300);
  
  const inputRef = useRef(null);
  const { unscramble, loading, error } = useWordUnscrambler();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const val = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (val.length <= 15) {
      setInput(val);
    }
  }, []);

  const handleUnscramble = useCallback(async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    
    setResults(null);
    const unscrambledResults = await unscramble(input);
    
    if (unscrambledResults !== null) {
      setResults(unscrambledResults);
    }
  }, [input, unscramble]);

  const handleClear = useCallback(() => {
    setInput('');
    setResults(null);
    setFilters(defaultFilters);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleToggleFilters = useCallback(() => {
    setIsFiltersOpen(prev => !prev);
  }, []);

  const { filteredGroups, totalUnscrambledWords, filteredWordsCount } = useMemo(() => {
    const totalUnscrambled = results?.reduce((sum, group) => sum + group.words.length, 0) || 0;
    
    if (!results) return { filteredGroups: null, totalUnscrambledWords: 0, filteredWordsCount: 0 };

    let filteredCount = 0;
    const groups = results.map(group => {
      const wList = group.words.filter(w => {
        const lowerW = w.toLowerCase();
        if (debouncedFilters.startsWith && !lowerW.startsWith(debouncedFilters.startsWith.toLowerCase())) return false;
        if (debouncedFilters.endsWith && !lowerW.endsWith(debouncedFilters.endsWith.toLowerCase())) return false;
        if (debouncedFilters.contains && !lowerW.includes(debouncedFilters.contains.toLowerCase())) return false;
        if (debouncedFilters.includesLetter) {
          const requiredLetters = debouncedFilters.includesLetter.toLowerCase().split('');
          if (!requiredLetters.every(char => lowerW.includes(char))) return false;
        }
        if (debouncedFilters.minLength && w.length < parseInt(debouncedFilters.minLength, 10)) return false;
        if (debouncedFilters.maxLength && w.length > parseInt(debouncedFilters.maxLength, 10)) return false;
        return true;
      });

      filteredCount += wList.length;
      return { length: group.length, words: wList };
    }).filter(group => group.words.length > 0);

    return { 
      filteredGroups: groups, 
      totalUnscrambledWords: totalUnscrambled, 
      filteredWordsCount: filteredCount 
    };
  }, [results, debouncedFilters]);

  return (
    <section aria-labelledby="unscrambler-heading" className="w-full max-w-3xl mx-auto pt-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10"
      >
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
          <img 
            src="https://horizons-cdn.hostinger.com/ea2c2799-2d38-4356-964d-505717abe857/e1ed4c4f7f495f3daff36b1a028eb0b5.png"
            alt="Book icon"
            className="w-4 h-4 object-contain mr-2"
            loading="eager"
            width="16"
            height="16"
          />
          Free Word Unscrambler & Anagram Solver
        </div>
        <h1 id="unscrambler-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight text-balance text-foreground" style={{letterSpacing: '-0.02em'}}>
          Unscramble words instantly
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Enter up to 15 scrambled letters to discover every valid English word hiding inside. Perfect for word jumbles and anagrams.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="shadow-lg border-border/50 mb-10 overflow-hidden bg-card">
          <CardContent className="p-5 sm:p-8">
            <form onSubmit={handleUnscramble} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="letters-input" className="text-sm font-medium text-foreground ml-1">
                  Enter scrambled letters to solve
                </label>
                <div className="relative">
                  <Input
                    ref={inputRef}
                    id="letters-input"
                    type="text"
                    placeholder="e.g. SCRAMBLE"
                    value={input}
                    onChange={handleInputChange}
                    className="text-xl sm:text-2xl md:text-3xl h-16 sm:h-20 px-4 sm:px-6 font-bold tracking-widest uppercase placeholder:text-muted-foreground/50 placeholder:font-normal placeholder:tracking-normal bg-muted/20 text-foreground"
                    disabled={loading}
                    autoComplete="off"
                    spellCheck="false"
                    aria-label="Scrambled letters input field"
                  />
                  {input && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                      aria-label="Clear input letters"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center px-1">
                  <p className="text-xs text-muted-foreground">
                    {input.length}/15 letters allowed
                  </p>
                  <p className="text-xs text-muted-foreground">
                    A-Z only
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleToggleFilters}
                  className="flex items-center justify-between w-full py-3 sm:py-2 px-1 text-sm font-medium text-foreground hover:text-primary transition-colors group min-h-[44px]"
                  aria-expanded={isFiltersOpen}
                  aria-controls="advanced-filters-panel"
                >
                  <span className="flex items-center gap-2">
                    <ListFilter className="w-4 h-4 text-primary" />
                    Advanced Filters (Word Length, Letters)
                  </span>
                  <ChevronDown className={`filter-arrow text-muted-foreground group-hover:text-primary w-5 h-5 sm:w-4 sm:h-4 ${isFiltersOpen ? 'open' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isFiltersOpen && (
                    <motion.div
                      id="advanced-filters-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3">
                        <FilterPanel 
                          filters={filters} 
                          setFilters={setFilters} 
                          onReset={() => setFilters(defaultFilters)} 
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium mt-2">
                      <AlertCircle className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <p>{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 h-14 sm:h-16 text-base sm:text-lg font-medium transition-all active:scale-[0.98]"
                  disabled={loading || !input.trim()}
                  aria-label="Unscramble letters now"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Unscrambling words...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Unscramble Letters Now
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <Skeleton className="h-10 w-48 rounded-lg" />
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </motion.div>
      )}

      {!loading && results !== null && (
        <Suspense fallback={<LoadingSpinner />}>
          <ResultsDisplay 
            results={filteredGroups} 
            totalUnscrambledWords={totalUnscrambledWords} 
            filteredWordsCount={filteredWordsCount} 
          />
        </Suspense>
      )}
    </section>
  );
});

export default WordUnscrambler;
