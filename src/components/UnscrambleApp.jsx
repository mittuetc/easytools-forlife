
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Shuffle, AlertCircle, CheckCircle2, BookOpen, RefreshCcw } from 'lucide-react';
import { useWordUnscrambler } from '@/hooks/useWordUnscrambler.js';
import ResultsDisplay from '@/components/ResultsDisplay.jsx';

export default function UnscrambleApp() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  
  const { 
    unscramble, 
    loading, 
    error, 
    resetError 
  } = useWordUnscrambler();

  // Clear errors when user types a new word
  useEffect(() => {
    if (error && !loading) {
      resetError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const handleUnscramble = async () => {
    if (!input.trim()) return;
    
    setResults(null);
    const unscrambledResults = await unscramble(input);
    
    if (unscrambledResults !== null) {
      setResults(unscrambledResults);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleUnscramble();
  };

  const totalWords = results?.reduce((sum, group) => sum + group.words.length, 0) || 0;

  return (
    <>
      <Helmet>
        <title>Word Unscrambler - Strict Dictionary Validation</title>
        <meta 
          name="description" 
          content="Unscramble letters to find valid English words verified against a real dictionary API. Enter your letters and discover verified combinations." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Word Unscrambler
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find valid English words hidden in your letters, strictly verified against the Free Dictionary API.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-lg mb-8 border-border">
              <CardContent className="pt-6">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="letters-input" className="block text-sm font-medium mb-2 text-foreground">
                      Enter your letters
                    </label>
                    <Input
                      id="letters-input"
                      type="text"
                      placeholder="e.g., scramble, puzzle, letters..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="text-lg h-12 text-foreground placeholder:text-muted-foreground"
                      disabled={loading}
                      maxLength={8}
                      autoComplete="off"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-muted-foreground">
                        Max 8 letters recommended (special characters ignored)
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        <span>Strict API Validation</span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{error}</span>
                          </div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            onClick={handleUnscramble}
                            className="w-full sm:w-auto bg-background/50 hover:bg-background border-destructive/30 hover:text-destructive flex-shrink-0"
                          >
                            <RefreshCcw className="w-3.5 h-3.5 mr-1.5" />
                            Retry Validation
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full transition-all duration-200 active:scale-[0.98]"
                    disabled={loading || !input.trim() || input.trim().length < 2}
                  >
                    {loading ? (
                      <>
                        <Shuffle className="w-4 h-4 mr-2 animate-spin" />
                        Validating against dictionary...
                      </>
                    ) : (
                      <>
                        <Shuffle className="w-4 h-4 mr-2" />
                        Unscramble and Validate
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          {loading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-3 text-muted-foreground mb-8">
                <Shuffle className="w-5 h-5 animate-spin text-primary" />
                <span className="text-sm font-medium animate-pulse">Running dictionary verification...</span>
              </div>
              <Skeleton className="h-12 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-2xl" />
              <Skeleton className="h-32 w-full rounded-2xl" />
            </motion.div>
          )}

          {!loading && results !== null && (
            <div className="space-y-6">
              <ResultsDisplay results={results} totalWords={totalWords} />
            </div>
          )}

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground"
          >
            <p>© 2026 Word Unscrambler. Validations powered by the Free Dictionary API.</p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
}
