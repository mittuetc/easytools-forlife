
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const TEMPLATES = [
  {
    title: "The Great Space Race",
    story: "Two astronauts compete to reach the cheese moon first in an epic galaxy dash.",
    panels: [
      { text: "Ready, set, go!", description: "Two colorful rockets launching from a dusty crater", mood: "Excited" },
      { text: "I'm pulling ahead!", description: "Red rocket zooming rapidly past a glowing asteroid", mood: "Competitive" },
      { text: "Oh no, a meteor shower!", description: "Blue rocket expertly dodging purple space rocks", mood: "Nervous" },
      { text: "We both win if we share!", description: "Both astronauts happily eating a giant slice of cheese moon", mood: "Happy" }
    ]
  },
  {
    title: "The Mystery of the Missing Sock",
    story: "Detective Dog is on the case of the vanished left sock. Where could it be?",
    panels: [
      { text: "Where did it go?", description: "Dog in a small trench coat looking at an empty sock drawer", mood: "Confused" },
      { text: "Aha! A clue!", description: "A magnifying glass hovering over glowing pink lint", mood: "Curious" },
      { text: "Follow the trail...", description: "Colorful paw prints leading sneakily out the door", mood: "Determined" },
      { text: "The washing machine strikes again!", description: "A striped sock peeking playfully out of a rumbling washing machine", mood: "Triumphant" }
    ]
  },
  {
    title: "Kitchen Commotion",
    story: "When the lights go out, the kitchen appliances come alive for a midnight party.",
    panels: [
      { text: "Time to party!", description: "A shiny silver toaster wearing cool sunglasses", mood: "Festive" },
      { text: "Turn up the heat!", description: "An oven cheerfully dancing with a wooden spatula", mood: "Energetic" },
      { text: "Ice ice baby...", description: "A sleek fridge beatboxing alongside bouncing ice cubes", mood: "Cool" },
      { text: "Uh oh, the humans are awake!", description: "All appliances instantly frozen in place, looking innocent", mood: "Panicked" }
    ]
  },
  {
    title: "The Lazy Sunday",
    story: "A masterclass in doing absolutely nothing, taught by Professor Orange Cat.",
    panels: [
      { text: "Step 1: Find a sunbeam.", description: "A fluffy orange cat lying blissfully in a warm square of sunlight", mood: "Relaxed" },
      { text: "Step 2: Stretch.", description: "The cat stretching its paws out incredibly long across the rug", mood: "Peaceful" },
      { text: "Step 3: Yawn.", description: "A giant, dramatic cat yawn showing tiny teeth", mood: "Sleepy" },
      { text: "Step 4: Repeat.", description: "The cat sleeping tightly curled up in a perfect orange ball", mood: "Content" }
    ]
  }
];

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function generateLocalComic(dateStr) {
  const hash = hashCode(dateStr);
  const template = TEMPLATES[hash % TEMPLATES.length];
  
  return {
    title: template.title,
    story: template.story,
    panels: template.panels,
    imageUrl: null,
    date: dateStr
  };
}

export function useComicGeneration() {
  const todayDate = new Date().toISOString().split('T')[0] + " 00:00:00.000Z";
  
  // Set the comic state synchronously so it renders instantly
  const [comic, setComic] = useState(() => generateLocalComic(todayDate));

  useEffect(() => {
    const syncComicWithDatabase = async () => {
      try {
        // Prepare exact format for creation
        const dbPayload = {
          date: todayDate,
          title: comic.title,
          story: comic.story,
          panels: comic.panels,
          imageUrl: ""
        };

        // If the user is authenticated, we can interact safely with the daily_comics table.
        if (pb.authStore.isValid) {
          try {
             const startOfDay = new Date().toISOString().split('T')[0];
             const existing = await pb.collection('daily_comics').getFirstListItem(`date >= "${startOfDay}"`, { $autoCancel: false });
             
             // If found, update our local state to reflect the authoritative DB record
             setComic(existing);
          } catch (e) {
             // If not found (404), create it and set state
             const saved = await pb.collection('daily_comics').create(dbPayload, { $autoCancel: false });
             setComic(saved);
          }
        }
      } catch (err) {
        // If save fails (permissions, offline, etc.), it silently falls back and displays the local state
        console.warn("Could not sync generated comic with database. Continuing with local version.");
      }
    };

    syncComicWithDatabase();
  }, []);

  return { 
    comic, 
    isLoading: false, 
    error: null,
    hasGeneratedToday: true
  };
}
