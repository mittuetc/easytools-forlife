
export const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    emoji: '🌑',
    fact: 'Mercury is the closest planet to the Sun, but it is not the hottest! It has no atmosphere to trap heat.',
    color: 'text-gray-400',
    bg: 'bg-gray-400/20'
  },
  {
    id: 'venus',
    name: 'Venus',
    emoji: '🌕',
    fact: 'Venus is the hottest planet in our solar system. It spins backwards compared to most other planets!',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/20'
  },
  {
    id: 'earth',
    name: 'Earth',
    emoji: '🌍',
    fact: 'Earth is the only planet we know of that has liquid water on its surface and supports life.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/20'
  },
  {
    id: 'mars',
    name: 'Mars',
    emoji: '🔴',
    fact: 'Mars is known as the Red Planet because of rusty iron in the ground. It has the largest volcano in the solar system!',
    color: 'text-red-500',
    bg: 'bg-red-500/20'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    emoji: '🪐',
    fact: 'Jupiter is the largest planet. Its Great Red Spot is a giant storm that has been raging for hundreds of years!',
    color: 'text-orange-400',
    bg: 'bg-orange-400/20'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    emoji: '🪐',
    fact: 'Saturn is famous for its beautiful rings, which are made mostly of chunks of ice and rock.',
    color: 'text-yellow-200',
    bg: 'bg-yellow-200/20'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    emoji: '🔵',
    fact: 'Uranus rolls on its side! It is an ice giant and has a pale blue color due to methane gas.',
    color: 'text-cyan-300',
    bg: 'bg-cyan-300/20'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    emoji: '🔵',
    fact: 'Neptune is the windiest planet. Winds whip through its clouds at more than 1,200 miles per hour!',
    color: 'text-blue-600',
    bg: 'bg-blue-600/20'
  }
];

export const stars = [
  {
    id: 'sun',
    name: 'The Sun',
    emoji: '☀️',
    fact: 'The Sun is actually a star! It is a yellow dwarf star and is the center of our solar system.'
  },
  {
    id: 'sirius',
    name: 'Sirius',
    emoji: '✨',
    fact: 'Sirius is the brightest star in the night sky. It is also known as the Dog Star.'
  },
  {
    id: 'polaris',
    name: 'Polaris',
    emoji: '🌟',
    fact: 'Polaris is the North Star. It stays almost perfectly still in the sky while other stars appear to rotate around it.'
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    emoji: '💫',
    fact: 'Betelgeuse is a red supergiant star. If it replaced the Sun, it would reach past the orbit of Mars!'
  },
  {
    id: 'rigel',
    name: 'Rigel',
    emoji: '✨',
    fact: 'Rigel is a blue supergiant star. It shines tens of thousands of times brighter than our Sun.'
  }
];

export const astronauts = [
  {
    id: 'neil',
    name: 'Neil Armstrong',
    emoji: '👨‍🚀',
    fact: 'Neil Armstrong was the first person to walk on the Moon in 1969. He said, "That\'s one small step for man, one giant leap for mankind."'
  },
  {
    id: 'sally',
    name: 'Sally Ride',
    emoji: '👩‍🚀',
    fact: 'Sally Ride became the first American woman in space in 1983. She flew on the space shuttle Challenger.'
  },
  {
    id: 'yuri',
    name: 'Yuri Gagarin',
    emoji: '👨‍🚀',
    fact: 'Yuri Gagarin was a Soviet cosmonaut and the first human to journey into outer space in 1961.'
  },
  {
    id: 'mae',
    name: 'Mae Jemison',
    emoji: '👩‍🚀',
    fact: 'Mae Jemison was the first African American woman to travel in space. She is also a doctor and an engineer!'
  },
  {
    id: 'chris',
    name: 'Chris Hadfield',
    emoji: '👨‍🚀',
    fact: 'Chris Hadfield was the first Canadian commander of the International Space Station. He even played guitar in space!'
  }
];

// Helper to get a deterministic index based on the current date
const getDailyIndex = (arrayLength) => {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  return daysSinceEpoch % arrayLength;
};

export const getPlanetOfDay = () => planets[getDailyIndex(planets.length)];
export const getStarOfDay = () => stars[getDailyIndex(stars.length)];
export const getAstronautOfDay = () => astronauts[getDailyIndex(astronauts.length)];
