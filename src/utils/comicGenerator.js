
// Deterministic random number generator based on a seed string
function seededRandom(seedStr) {
  let h = 0xdeadbeef;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 2654435761);
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

const CHARACTERS = ['Banana', 'Apple', 'Cheese Slice', 'Milk Carton', 'Donut', 'Pizza Slice', 'Broccoli'];
const LOCATIONS = ['The Kitchen Counter', 'The Picnic Basket', 'The Fridge Shelf', 'The Lunchbox', 'The Pantry'];
const SOUND_EFFECTS = ['POW!', 'ZAP!', 'BOING!', 'SPLAT!', 'CRUNCH!', 'SQUISH!', 'BAM!', 'WHOOSH!'];

const SCENARIOS = [
  {
    title: "The Great Escape",
    panels: [
      (char) => ({ action: `PB and J are stuck in ${LOCATIONS[0]}.`, dialogue: "We need to get out of here, J!", sound: "" }),
      (char) => ({ action: `They meet ${char} who offers help.`, dialogue: `I know a secret way out!`, sound: "PSST!" }),
      (char) => ({ action: `They all jump together.`, dialogue: "One, two, three... JUMP!", sound: "BOING!" }),
      (char) => ({ action: `They land safely in ${LOCATIONS[1]}.`, dialogue: "We made it! Thanks, " + char + "!", sound: "SPLAT!" })
    ]
  },
  {
    title: "The Missing Crust",
    panels: [
      (char) => ({ action: `PB notices something is wrong.`, dialogue: "J, have you seen my crust?", sound: "GASP!" }),
      (char) => ({ action: `They ask ${char} for clues.`, dialogue: `I saw a bird fly away with something brown!`, sound: "" }),
      (char) => ({ action: `They chase the bird.`, dialogue: "Come back here with my crust!", sound: "WHOOSH!" }),
      (char) => ({ action: `They find it was just a brown leaf.`, dialogue: "Oh, my crust was just folded under me.", sound: "SIGH." })
    ]
  },
  {
    title: "A Sticky Situation",
    panels: [
      (char) => ({ action: `J spills some jelly on the floor.`, dialogue: "Oops, I'm leaking a bit.", sound: "SQUISH!" }),
      (char) => ({ action: `${char} slips on the jelly.`, dialogue: `Whoa! It's slippery here!`, sound: "WHOOPS!" }),
      (char) => ({ action: `PB tries to help but gets stuck too.`, dialogue: "Hold on, I'll pull you... oh no!", sound: "STUCK!" }),
      (char) => ({ action: `They all laugh it off.`, dialogue: "Well, I guess we're hanging out here today.", sound: "HAHA!" })
    ]
  }
];

export function generateEpisodeForDate(dateStr, episodeNumber) {
  const rand = seededRandom(dateStr);
  
  // Pick random elements based on seed
  const scenarioIdx = rand() % SCENARIOS.length;
  const charIdx = rand() % CHARACTERS.length;
  
  const scenario = SCENARIOS[scenarioIdx];
  const character = CHARACTERS[charIdx];
  
  const panels = scenario.panels.map((panelGen, idx) => {
    const p = panelGen(character);
    // Randomly assign a background color class for the panel
    const bgColors = ['bg-[hsl(var(--pb-brown))]', 'bg-[hsl(var(--jelly-purple))]', 'bg-[hsl(var(--bread-tan))]', 'bg-[hsl(var(--butter-yellow))]', 'bg-[hsl(var(--comic-blue))]'];
    const bgColor = bgColors[(rand() + idx) % bgColors.length];
    
    return {
      action: p.action,
      dialogue: p.dialogue,
      sound_effects: p.sound || SOUND_EFFECTS[(rand() + idx) % SOUND_EFFECTS.length],
      bg_color: bgColor
    };
  });

  return {
    episode_number: episodeNumber,
    episode_title: scenario.title,
    date: dateStr,
    comic_panels: panels
  };
}
