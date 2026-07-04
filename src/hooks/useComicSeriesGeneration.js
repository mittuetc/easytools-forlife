
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { generateEpisodeForDate } from '@/utils/comicGenerator.js';

export function useComicSeriesGeneration() {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Format YYYY-MM-DD
  const todayDate = new Date().toISOString().split('T')[0];

  const fetchEpisodes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const records = await pb.collection('comic_series').getFullList({
        sort: '-date',
        $autoCancel: false
      });
      setAllEpisodes(records);

      const todayEp = records.find(r => r.date === todayDate);
      if (todayEp) {
        setCurrentEpisode(todayEp);
        setIsLoading(false);
      } else {
        // Generate locally if not found
        const nextNum = records.length > 0 ? Math.max(...records.map(e => e.episode_number)) + 1 : 1;
        const newEpisodeData = generateEpisodeForDate(todayDate, nextNum);
        
        try {
          // Attempt to save to PocketBase (requires auth based on rules)
          if (pb.authStore.isValid) {
            const saved = await pb.collection('comic_series').create(newEpisodeData, { $autoCancel: false });
            setCurrentEpisode(saved);
            setAllEpisodes(prev => [saved, ...prev]);
          } else {
            // If not authenticated, just show the generated episode without saving
            setCurrentEpisode(newEpisodeData);
            // We don't add it to allEpisodes so it doesn't show in archive until saved
          }
        } catch (saveErr) {
          console.error("Failed to save episode to PB:", saveErr);
          // Fallback to showing it anyway
          setCurrentEpisode(newEpisodeData);
        }
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to load comic series.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retry = () => {
    fetchEpisodes();
  };

  return { 
    currentEpisode, 
    allEpisodes,
    isLoading, 
    error, 
    retry
  };
}
