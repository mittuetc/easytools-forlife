
import { useState, useEffect } from 'react';

// In-memory cache to prevent duplicate API calls for the same word with TTL
const definitionCache = new Map();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export function clearDefinitionCache() {
  definitionCache.clear();
}

export function useDefinitionFetcher(word) {
  const [data, setData] = useState({
    definition: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    // If no word is provided, just stop loading but keep the previous definition
    if (!word) {
      setData((prev) => ({ ...prev, loading: false }));
      return;
    }

    const lowerWord = word.toLowerCase();
    const now = Date.now();

    // Check cache first and verify it's not expired
    if (definitionCache.has(lowerWord)) {
      const cached = definitionCache.get(lowerWord);
      if (now - cached.timestamp < CACHE_TTL_MS) {
        setData({
          definition: cached.data,
          loading: false,
          error: null,
        });
        return;
      } else {
        // Clear expired cache entry
        definitionCache.delete(lowerWord);
      }
    }

    let isMounted = true;
    setData((prev) => ({ ...prev, loading: true, error: null }));

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${lowerWord}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('No definition found for this word.');
        }
        return res.json();
      })
      .then((json) => {
        if (!isMounted) return;
        const def = json[0]; // grab the first dictionary entry
        
        // Save to cache with timestamp
        definitionCache.set(lowerWord, {
          data: def,
          timestamp: Date.now()
        });
        
        setData({ definition: def, loading: false, error: null });
      })
      .catch((err) => {
        if (!isMounted) return;
        setData({ definition: null, loading: false, error: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [word]);

  return data;
}
