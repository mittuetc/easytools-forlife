
import { useState, useEffect, useRef } from 'react';

export function useTranslator(sourceText, sourceLang, targetLang) {
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Use a ref to persist cache across re-renders without triggering them
  const cache = useRef(new Map());

  useEffect(() => {
    const trimmedText = sourceText.trim();
    
    // Edge case: Empty input
    if (!trimmedText) {
      setTranslatedText('');
      setError(null);
      setIsLoading(false);
      return;
    }

    // Edge case: Same language selected (and not auto-detecting)
    if (sourceLang === targetLang && sourceLang !== 'Autodetect') {
      setTranslatedText(trimmedText);
      setIsLoading(false);
      return;
    }

    const cacheKey = `${sourceLang}|${targetLang}|${trimmedText}`;

    // Check cache first
    if (cache.current.has(cacheKey)) {
      setTranslatedText(cache.current.get(cacheKey));
      setError(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Debounce the API call with 300ms
    const timeoutId = setTimeout(async () => {
      try {
        // encodeURIComponent safely handles non-Latin scripts (Telugu, Hindi, etc.)
        const textParam = encodeURIComponent(trimmedText);
        // Using an email parameter is polite and often increases the free usage quota on MyMemory
        const emailParam = encodeURIComponent('easytoolsforlife@easytools-forlife.com');
        const apiUrl = `https://api.mymemory.translated.net/get?q=${textParam}&langpair=${sourceLang}|${targetLang}&de=${emailParam}`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.responseStatus === 200) {
          // Extract result cleanly
          const result = data.responseData.translatedText;
          // Store in cache
          cache.current.set(cacheKey, result);
          setTranslatedText(result);
        } else {
          // Handle API-level errors or quota limits
          throw new Error(data.responseDetails || 'Translation failed');
        }
      } catch (err) {
        console.error('Translation error:', err);
        setError('Unable to translate at this time. Please check your connection or try again later.');
      } finally {
        setIsLoading(false);
      }
    }, 300);

    // Cleanup timeout on unmount or input change
    return () => clearTimeout(timeoutId);
  }, [sourceText, sourceLang, targetLang]);

  return { translatedText, isLoading, error };
}
