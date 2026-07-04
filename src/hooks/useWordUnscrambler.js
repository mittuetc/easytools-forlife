
import { useState, useCallback } from 'react';
import { DICT_BY_LENGTH } from '../data/dictionary.js';

export function useWordUnscrambler() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const unscramble = useCallback(async (input) => {
    setLoading(true);
    setError(null);

    try {
      const cleanInput = input.trim().toLowerCase();
      
      if (!cleanInput) {
        throw new Error('Please enter some letters.');
      }
      
      if (!/^[a-z]+$/.test(cleanInput)) {
        throw new Error('Please enter only alphabetical characters (A-Z).');
      }

      if (cleanInput.length > 15) {
        throw new Error('Maximum 15 letters allowed.');
      }

      // Count frequencies of letters in the input
      const inputFreq = {};
      for (const char of cleanInput) {
        inputFreq[char] = (inputFreq[char] || 0) + 1;
      }

      // Simulate a brief processing delay for UX (deferred slightly for performance)
      await new Promise(resolve => setTimeout(resolve, 200));

      const validWords = [];

      // Iterate over lengths up to the input length using our optimized map
      for (let len = 2; len <= cleanInput.length; len++) {
        const wordsOfLength = DICT_BY_LENGTH[len];
        if (!wordsOfLength) continue;

        for (const dictItem of wordsOfLength) {
          let isValid = true;
          
          // Fast check using precomputed frequencies
          for (const char in dictItem.freq) {
            if (!inputFreq[char] || dictItem.freq[char] > inputFreq[char]) {
              isValid = false;
              break;
            }
          }

          if (isValid) {
            validWords.push(dictItem.word);
          }
        }
      }

      // Group by length (longest first)
      const grouped = validWords.reduce((acc, word) => {
        const len = word.length;
        if (!acc[len]) acc[len] = [];
        acc[len].push(word);
        return acc;
      }, {});

      // Sort each group alphabetically
      Object.keys(grouped).forEach(len => {
        grouped[len].sort();
      });

      const results = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a)
        .map(len => ({
          length: len,
          words: grouped[len]
        }));

      setLoading(false);
      return results;
      
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  }, []);

  return {
    unscramble,
    loading,
    error
  };
}
