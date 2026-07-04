
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightLeft, 
  ArrowDownUp, 
  Copy, 
  Check, 
  X, 
  Loader2,
  AlertCircle,
  Volume2
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { useTranslator } from '@/hooks/useTranslator.js';
import { languages } from '@/data/languages.js';
import { cn } from '@/lib/utils.js';
import { useToast } from '@/hooks/use-toast.js';

export default function TranslatorApp() {
  const [sourceLang, setSourceLang] = useState('te');
  const [targetLang, setTargetLang] = useState('en');
  const [sourceText, setSourceText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  const { translatedText, isLoading, error } = useTranslator(sourceText, sourceLang, targetLang);

  // Derive target languages specifically (exclude Autodetect)
  const targetLanguages = languages.filter(lang => lang.code !== 'Autodetect');

  const handleSwap = () => {
    const newTarget = sourceLang === 'Autodetect' ? 'en' : sourceLang;
    setSourceLang(targetLang);
    setTargetLang(newTarget);
    
    if (translatedText && !error) {
      setSourceText(translatedText);
    }
  };

  const handleCopy = async () => {
    if (!translatedText) return;
    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      toast({
        description: "Translation copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Failed to copy text",
      });
    }
  };

  const handleClear = () => {
    setSourceText('');
  };

  const handleTextChange = (e) => {
    setSourceText(e.target.value);
  };

  const handleSpeak = (text, lang) => {
    if (!window.speechSynthesis) {
      toast({
        variant: "destructive",
        description: "Text-to-speech is not supported in this browser.",
      });
      return;
    }
    
    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'Autodetect' ? 'en-US' : lang;
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full flex flex-col rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[450px]">
        
        {/* Swap Button (Desktop) */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 z-10 hidden md:flex">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleSwap}
            className="rounded-full w-10 h-10 shadow-sm border-border bg-background hover:bg-accent text-foreground hover:text-primary transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Swap languages"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* --- Source Section --- */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-border bg-card">
          <div className="h-16 flex items-center px-4 border-b border-border/50 bg-muted/20">
            <Select value={sourceLang} onValueChange={setSourceLang}>
              <SelectTrigger className="w-full sm:w-[220px] bg-transparent border-transparent shadow-none hover:bg-muted/50 font-medium text-base focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Select source language" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name} <span className="text-muted-foreground text-xs ml-1">({lang.nativeName})</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 relative p-4 pb-14">
            <textarea
              value={sourceText}
              onChange={handleTextChange}
              placeholder="Enter text to translate..."
              className="w-full h-full min-h-[220px] resize-none bg-transparent border-none focus:ring-0 focus:outline-none text-lg md:text-xl text-card-foreground placeholder:text-muted-foreground/60 leading-relaxed"
              spellCheck={false}
              aria-label="Source text input"
            />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-1">
                {sourceText.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleSpeak(sourceText, sourceLang)}
                    disabled={isSpeaking}
                    className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Listen to source text"
                    title="Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                )}
                {sourceText.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClear}
                    className="h-8 px-2 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Clear source text"
                  >
                    <X className="w-4 h-4 mr-1.5" />
                    Clear
                  </Button>
                )}
              </div>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {sourceText.length} character{sourceText.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* --- Mobile Swap Button --- */}
        <div className="flex md:hidden justify-center items-center py-2 bg-muted/30 border-b border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleSwap}
            className="text-muted-foreground hover:text-foreground rounded-full"
            aria-label="Swap languages"
          >
            <ArrowDownUp className="w-4 h-4 mr-2" /> 
            Swap Languages
          </Button>
        </div>

        {/* --- Target Section --- */}
        <div className="flex flex-col bg-muted/10">
          <div className="h-16 flex items-center px-4 border-b border-border/50 bg-muted/20 md:pl-10">
            <Select value={targetLang} onValueChange={setTargetLang}>
              <SelectTrigger className="w-full sm:w-[220px] bg-transparent border-transparent shadow-none hover:bg-muted/50 font-medium text-base focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {targetLanguages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name} <span className="text-muted-foreground text-xs ml-1">({lang.nativeName})</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 relative p-4 md:pl-10 pb-14">
            <div className="w-full h-full min-h-[220px] text-lg md:text-xl leading-relaxed text-card-foreground">
              {error ? (
                <div className="flex items-start text-destructive p-4 bg-destructive/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              ) : !sourceText.trim() ? (
                <span className="text-muted-foreground/40 italic">
                  Translation will appear here...
                </span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={translatedText || 'loading'}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "whitespace-pre-wrap break-words",
                      isLoading && "opacity-50 blur-[1px] transition-all"
                    )}
                  >
                    {translatedText}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {isLoading && (
              <div className="absolute top-4 right-4 flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-border">
                <Loader2 className="w-4 h-4 animate-spin text-primary mr-2" />
                <span className="text-xs font-medium text-muted-foreground">Translating...</span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 md:left-10 right-4 flex items-center justify-between">
              <div>
                {translatedText && !error && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleSpeak(translatedText, targetLang)}
                    disabled={isSpeaking || isLoading}
                    className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Listen to translation"
                    title="Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopy}
                disabled={!translatedText || isLoading || error}
                className={cn(
                  "h-8 transition-all duration-200",
                  copied 
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                    : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
