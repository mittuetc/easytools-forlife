
// Compact data structures to securely provide 31 days of content
const animalData = [
  { n: "Lion", f: "Lions can sleep up to 20 hours a day!", q: "What do lions eat?", a: ["Plants", "Meat", "Bugs"], c: 1, i: "🦁" },
  { n: "Penguin", f: "Penguins can't fly, but they are amazing swimmers!", q: "Where do most penguins live?", a: ["Deserts", "Rainforests", "Cold places"], c: 2, i: "🐧" },
  { n: "Butterfly", f: "Butterflies taste with their feet!", q: "What do caterpillars turn into?", a: ["Bees", "Butterflies", "Birds"], c: 1, i: "🦋" },
  { n: "Elephant", f: "Elephants are the largest land animals in the world.", q: "What is an elephant's nose called?", a: ["Trunk", "Beak", "Snout"], c: 0, i: "🐘" },
  { n: "Giraffe", f: "A giraffe's tongue can be 20 inches long!", q: "What color is a giraffe's tongue?", a: ["Pink", "Blue-black", "Green"], c: 1, i: "🦒" },
  { n: "Dolphin", f: "Dolphins sleep with one eye open!", q: "Are dolphins fish or mammals?", a: ["Fish", "Mammals", "Birds"], c: 1, i: "🐬" },
  { n: "Kangaroo", f: "Kangaroos can't walk backwards.", q: "How do kangaroos move fast?", a: ["Flying", "Swimming", "Hopping"], c: 2, i: "🦘" },
  { n: "Cheetah", f: "Cheetahs are the fastest land animals.", q: "What pattern is on a cheetah's fur?", a: ["Stripes", "Spots", "Checkers"], c: 1, i: "🐆" },
  { n: "Owl", f: "Owls can turn their heads almost all the way around!", q: "When are most owls awake?", a: ["Daytime", "Nighttime", "Morning only"], c: 1, i: "🦉" },
  { n: "Sea Turtle", f: "Some sea turtles can live for over 100 years.", q: "Where do sea turtles lay their eggs?", a: ["In trees", "On the beach", "Under water"], c: 1, i: "🐢" },
  { n: "Monkey", f: "Monkeys peel their bananas just like we do!", q: "What do monkeys use to swing from trees?", a: ["Their tails", "Their ears", "Their noses"], c: 0, i: "🐒" },
  { n: "Zebra", f: "Every zebra has a completely unique stripe pattern.", q: "What colors are a zebra?", a: ["Brown & White", "Black & White", "Red & Black"], c: 1, i: "🦓" },
  { n: "Koala", f: "Baby koalas are called joeys.", q: "Where do baby koalas live?", a: ["In a nest", "In a pouch", "In a cave"], c: 1, i: "🐨" },
  { n: "Octopus", f: "An octopus has three hearts and blue blood!", q: "How many arms does an octopus have?", a: ["Six", "Eight", "Ten"], c: 1, i: "🐙" },
  { n: "Sloth", f: "Sloths sleep for up to 15 hours a day in trees.", q: "What do sloths love to eat?", a: ["Eucalyptus leaves", "Fish", "Berries"], c: 0, i: "🦥" },
  { n: "Tiger", f: "Tigers love to swim and play in the water.", q: "Are tigers good hunters?", a: ["Yes", "No", "Only in the morning"], c: 0, i: "🐅" },
  { n: "Rhino", f: "A rhino's horn is made of the same stuff as your hair!", q: "How many horns does an African rhino have?", a: ["One", "Two", "Three"], c: 1, i: "🦏" },
  { n: "Hippo", f: "Hippos secrete a red fluid that acts like sunscreen.", q: "Where do hippos spend most of their day?", a: ["In the water", "In trees", "On mountains"], c: 0, i: "🦛" },
  { n: "Camel", f: "Camels can drink 40 gallons of water in one go!", q: "What is on a camel's back?", a: ["A shell", "A hump", "A fin"], c: 1, i: "🐪" },
  { n: "Crocodile", f: "Crocodiles cannot stick their tongues out.", q: "Do crocodiles have sharp teeth?", a: ["No", "Yes", "They have no teeth"], c: 1, i: "🐊" },
  { n: "Frog", f: "Frogs absorb water through their skin so they don't have to drink.", q: "What are baby frogs called?", a: ["Cubs", "Tadpoles", "Kittens"], c: 1, i: "🐸" },
  { n: "Bat", f: "Bats are the only mammals that can actually fly.", q: "How do bats find food in the dark?", a: ["Echolocation", "Flashlights", "Smell"], c: 0, i: "🦇" },
  { n: "Bear", f: "Bears have an excellent sense of smell.", q: "What do some bears do in the winter?", a: ["Migrate", "Hibernate", "Fly"], c: 1, i: "🐻" },
  { n: "Wolf", f: "Wolves live and hunt in family groups called packs.", q: "How do wolves communicate over long distances?", a: ["Singing", "Howling", "Chirping"], c: 1, i: "🐺" },
  { n: "Fox", f: "Foxes use their bushy tails to keep warm.", q: "What is a baby fox called?", a: ["Kit", "Calf", "Foal"], c: 0, i: "🦊" },
  { n: "Peacock", f: "Only male peafowl are actually called peacocks.", q: "What is famous about a peacock?", a: ["Its loud roar", "Its colorful tail feathers", "Its long ears"], c: 1, i: "🦚" },
  { n: "Flamingo", f: "Flamingos eat with their heads upside down!", q: "Why are flamingos pink?", a: ["From painting themselves", "From the shrimp they eat", "They are born that way"], c: 1, i: "🦩" },
  { n: "Gorilla", f: "Gorillas can learn sign language to talk to humans.", q: "Where do gorillas live?", a: ["Forests", "Oceans", "Deserts"], c: 0, i: "🦍" },
  { n: "Whale", f: "The blue whale is the largest animal ever known to have lived on Earth.", q: "How do whales breathe?", a: ["Through gills", "Through a blowhole", "Through their skin"], c: 1, i: "🐳" },
  { n: "Shark", f: "Sharks do not have bones; their skeleton is made of cartilage.", q: "Do sharks ever stop swimming?", a: ["Yes, they sleep on the bottom", "No, most must keep moving", "Yes, they float on top"], c: 1, i: "🦈" },
  { n: "Ant", f: "Ants can lift up to 50 times their own body weight!", q: "Where do ants live?", a: ["In hives", "In colonies", "In nests in the sky"], c: 1, i: "🐜" }
];

const plantData = [
  { n: "Sunflower", f: "Sunflowers move their heads to face the sun!", q: "What color are sunflower petals?", a: ["Blue", "Yellow", "Purple"], c: 1, i: "🌻" },
  { n: "Oak Tree", f: "An oak tree can produce up to 10 million acorns in its lifetime.", q: "What grows into an oak tree?", a: ["A pinecone", "An acorn", "An apple"], c: 1, i: "🌳" },
  { n: "Cactus", f: "Cacti can store huge amounts of water to survive in the desert.", q: "What protects a cactus from animals?", a: ["Sharp spines", "Poisonous leaves", "Loud noises"], c: 0, i: "🌵" },
  { n: "Venus Flytrap", f: "The Venus Flytrap is a plant that eats bugs!", q: "How does the Venus Flytrap catch bugs?", a: ["With a net", "Snapping its leaves shut", "With sticky glue"], c: 1, i: "🪰" },
  { n: "Bamboo", f: "Bamboo is the fastest growing plant in the world.", q: "What animal loves to eat bamboo?", a: ["Panda", "Lion", "Shark"], c: 0, i: "🎍" },
  { n: "Rose", f: "Roses are one of the oldest flowers, growing for millions of years.", q: "What is on the stem of a rose?", a: ["Thorns", "Scales", "Fur"], c: 0, i: "🌹" },
  { n: "Pine Tree", f: "Pine trees keep their needles all year round.", q: "What drops from pine trees?", a: ["Acorns", "Pinecones", "Coconuts"], c: 1, i: "🌲" },
  { n: "Tulip", f: "Tulip bulbs were once more valuable than gold!", q: "In what season do tulips usually bloom?", a: ["Winter", "Spring", "Autumn"], c: 1, i: "🌷" },
  { n: "Apple Tree", f: "It takes about 4 to 5 years for an apple tree to produce its first fruit.", q: "What color can apples be?", a: ["Red, green, or yellow", "Only red", "Blue and purple"], c: 0, i: "🍎" },
  { n: "Strawberry", f: "Strawberries are the only fruit with seeds on the outside.", q: "Where do strawberries grow?", a: ["On tall trees", "On bushes", "On vines close to the ground"], c: 2, i: "🍓" },
  { n: "Daisy", f: "Daisies close their petals at night and open them in the morning.", q: "What color is the center of a daisy?", a: ["Yellow", "Black", "Pink"], c: 0, i: "🌼" },
  { n: "Maple Tree", f: "Maple syrup is made from the sap of maple trees.", q: "What happens to maple leaves in autumn?", a: ["They turn blue", "They change colors and fall", "They grow bigger"], c: 1, i: "🍁" },
  { n: "Watermelon", f: "Watermelons are 92% water!", q: "What is inside a watermelon?", a: ["Pits", "Black seeds", "Nuts"], c: 1, i: "🍉" },
  { n: "Pumpkin", f: "Pumpkins are actually a type of fruit, not a vegetable.", q: "What holiday do people carve pumpkins for?", a: ["Valentine's Day", "Halloween", "New Year's Eve"], c: 1, i: "🎃" },
  { n: "Carrot", f: "Carrots were originally purple, not orange!", q: "What part of the carrot plant do we eat?", a: ["The leaves", "The root", "The stem"], c: 1, i: "🥕" },
  { n: "Fern", f: "Ferns do not have seeds; they reproduce using spores.", q: "Where do ferns usually like to grow?", a: ["In the hot sun", "In shady, moist places", "In snow"], c: 1, i: "🌿" },
  { n: "Mushroom", f: "Mushrooms are not plants, they are fungi!", q: "Do mushrooms need sunlight to grow?", a: ["Yes, lots of it", "No, they can grow in the dark", "Only in the morning"], c: 1, i: "🍄" },
  { n: "Cherry Tree", f: "Cherry blossoms only bloom for a week or two every year.", q: "What color are cherry blossoms usually?", a: ["Pink or white", "Bright red", "Blue"], c: 0, i: "🍒" },
  { n: "Grapes", f: "Grapes can be dried in the sun to make raisins.", q: "How do grapes grow?", a: ["On vines", "Underground", "On bushes"], c: 0, i: "🍇" },
  { n: "Banana", f: "Bananas grow in bunches called 'hands'.", q: "What do monkeys do before eating a banana?", a: ["Wash it", "Peel it", "Cook it"], c: 1, i: "🍌" },
  { n: "Coconut Palm", f: "Coconuts can float and travel across oceans to grow on new islands.", q: "Where do coconuts grow?", a: ["On vines", "In the ground", "On tall palm trees"], c: 2, i: "🥥" },
  { n: "Tomato", f: "Botanically, tomatoes are fruits, but chefs treat them as vegetables.", q: "What color are most ripe tomatoes?", a: ["Green", "Red", "Purple"], c: 1, i: "🍅" },
  { n: "Corn", f: "An ear of corn always has an even number of rows.", q: "What do we call the yellow pieces on corn?", a: ["Kernels", "Beans", "Seeds"], c: 0, i: "🌽" },
  { n: "Potato", f: "Potatoes were the first food ever grown in space!", q: "Where do potatoes grow?", a: ["On vines", "Underground", "On trees"], c: 1, i: "🥔" },
  { n: "Onion", f: "Cutting onions releases a gas that makes your eyes water.", q: "What do onions have inside?", a: ["Layers", "Pits", "Bones"], c: 0, i: "🧅" },
  { n: "Lemon", f: "Lemons contain a lot of citric acid, which makes them very sour.", q: "What color is a ripe lemon?", a: ["Green", "Yellow", "Orange"], c: 1, i: "🍋" },
  { n: "Orange", f: "Oranges are packed with Vitamin C, which helps keep you healthy.", q: "What is the skin of an orange called?", a: ["Bark", "Peel", "Crust"], c: 1, i: "🍊" },
  { n: "Pineapple", f: "Pineapples are made of many berries fused together.", q: "What does the outside of a pineapple look like?", a: ["Smooth and shiny", "Spiky and rough", "Soft and fuzzy"], c: 1, i: "🍍" },
  { n: "Avocado", f: "Avocados grow on trees and are actually a single-seeded berry.", q: "What is inside the center of an avocado?", a: ["Many small seeds", "A large pit", "Nothing"], c: 1, i: "🥑" },
  { n: "Blueberry", f: "Blueberries are one of the only naturally blue foods.", q: "What color is blueberry juice?", a: ["Blue", "Purple-red", "Green"], c: 1, i: "🫐" },
  { n: "Broccoli", f: "Broccoli looks like a tiny green tree!", q: "What part of the broccoli do we usually eat?", a: ["The roots", "The flower buds", "The seeds"], c: 1, i: "🥦" }
];

const weatherData = [
  { n: "Sunshine", f: "Sunlight takes about 8 minutes to travel from the Sun to Earth.", q: "What do we wear to protect our eyes from the sun?", a: ["Mittens", "Sunglasses", "Scarves"], c: 1, i: "☀️" },
  { n: "Rain", f: "Raindrops are shaped more like hamburger buns than teardrops!", q: "What do you use to stay dry in the rain?", a: ["An umbrella", "A towel", "A fan"], c: 0, i: "🌧️" },
  { n: "Snow", f: "Every snowflake has six sides and is completely unique.", q: "What can you build with snow?", a: ["A sandcastle", "A snowman", "A campfire"], c: 1, i: "❄️" },
  { n: "Wind", f: "Wind is just moving air caused by differences in air pressure.", q: "What toy needs wind to fly?", a: ["A kite", "A yo-yo", "A doll"], c: 0, i: "💨" },
  { n: "Cloud", f: "Clouds are made of millions of tiny water droplets or ice crystals.", q: "What color are clouds when they are full of rain?", a: ["Pink", "Dark gray", "Bright white"], c: 1, i: "☁️" },
  { n: "Lightning", f: "A bolt of lightning is five times hotter than the surface of the sun!", q: "What sound comes after lightning?", a: ["Rain", "Thunder", "Wind"], c: 1, i: "⚡" },
  { n: "Rainbow", f: "Rainbows form when sunlight shines through raindrops in the air.", q: "What shape is a rainbow?", a: ["A square", "An arc or circle", "A triangle"], c: 1, i: "🌈" },
  { n: "Fog", f: "Fog is basically a cloud that forms down on the ground.", q: "Is it hard to see when it's foggy?", a: ["Yes", "No", "Only at night"], c: 0, i: "🌫️" },
  { n: "Tornado", f: "Tornadoes are spinning tubes of air that touch the ground.", q: "What shape does a tornado usually have?", a: ["A square", "A funnel", "A straight line"], c: 1, i: "🌪️" },
  { n: "Thunder", f: "Thunder is the sound caused by lightning expanding the air rapidly.", q: "Can you hear thunder before you see lightning?", a: ["Yes", "No, light travels faster", "They happen at the same time"], c: 1, i: "🔊" },
  { n: "Hail", f: "Hailstones are balls of ice that fall from thunderstorm clouds.", q: "What does hail look like?", a: ["Fluffy snow", "Ice balls", "Drops of water"], c: 1, i: "🧊" },
  { n: "Hurricane", f: "Hurricanes are massive storms that form over warm ocean waters.", q: "What is the calm center of a hurricane called?", a: ["The mouth", "The eye", "The nose"], c: 1, i: "🌀" },
  { n: "Dew", f: "Dew forms on grass when the air cools down at night.", q: "When do you usually see dew on the grass?", a: ["At noon", "In the early morning", "During a storm"], c: 1, i: "💧" },
  { n: "Frost", f: "Frost forms when dew freezes into tiny ice crystals.", q: "What season has the most frost?", a: ["Summer", "Winter", "Spring"], c: 1, i: "🥶" },
  { n: "Breeze", f: "A breeze is a gentle and light wind.", q: "Is a breeze dangerous?", a: ["Yes, very dangerous", "No, it is gentle", "Only to fish"], c: 1, i: "🍃" },
  { n: "Blizzard", f: "A blizzard is a severe snowstorm with strong winds.", q: "What should you do during a blizzard?", a: ["Go swimming", "Stay warm inside", "Have a picnic"], c: 1, i: "🌨️" },
  { n: "Heatwave", f: "A heatwave is a period of excessively hot weather.", q: "What is important to do during a heatwave?", a: ["Drink lots of water", "Wear heavy coats", "Run outside all day"], c: 0, i: "🔥" },
  { n: "Drizzle", f: "Drizzle is very light rain with tiny water droplets.", q: "Do you need a heavy winter coat for a drizzle?", a: ["Yes", "No, just a raincoat", "Yes, and snow boots"], c: 1, i: "🌦️" },
  { n: "Sleet", f: "Sleet is rain that freezes into ice pellets before hitting the ground.", q: "Is sleet wet or icy?", a: ["Dry", "Icy", "Hot"], c: 1, i: "🌨️" },
  { n: "Overcast", f: "Overcast weather means the sky is completely covered by clouds.", q: "Can you see the sun clearly on an overcast day?", a: ["Yes", "No", "Only at noon"], c: 1, i: "🌥️" },
  { n: "Humidity", f: "Humidity is the amount of water vapor in the air.", q: "How does high humidity make you feel in the summer?", a: ["Very cold", "Sticky and hot", "Dry"], c: 1, i: "💦" },
  { n: "Partly Cloudy", f: "Partly cloudy means there is a mix of sun and clouds in the sky.", q: "Will it definitely rain if it's partly cloudy?", a: ["Yes", "No, not always", "It will snow"], c: 1, i: "⛅" },
  { n: "Sunrise", f: "The sun always rises in the east.", q: "What time of day is sunrise?", a: ["Evening", "Morning", "Night"], c: 1, i: "🌅" },
  { n: "Sunset", f: "The sun always sets in the west.", q: "What comes after sunset?", a: ["Morning", "Afternoon", "Night"], c: 2, i: "🌇" },
  { n: "Monsoon", f: "A monsoon is a seasonal wind that brings heavy rains.", q: "What do monsoons bring a lot of?", a: ["Snow", "Rain", "Sand"], c: 1, i: "🌧️" },
  { n: "Drought", f: "A drought is a long period with very little or no rain.", q: "What happens to plants during a drought?", a: ["They grow faster", "They dry up", "They turn into ice"], c: 1, i: "🏜️" },
  { n: "Aurora", f: "Aurora is the scientific name for a rainbow or light display in the sky.", q: "What is the famous northern light display called?", a: ["Aurora Borealis", "Lightning", "Thunder"], c: 0, i: "🌌" },
  { n: "Ice Storm", f: "Ice storms coat everything outside in a heavy layer of ice.", q: "Are roads safe to drive on during an ice storm?", a: ["Yes", "No, they are very slippery", "Only for bicycles"], c: 1, i: "⛸️" },
  { n: "Puddle", f: "Puddles are small pools of liquid, usually rain on the ground.", q: "What do kids love to do in puddles?", a: ["Drink them", "Jump and splash in them", "Sleep in them"], c: 1, i: "👢" },
  { n: "Sandstorm", f: "Sandstorms happen in dry areas when strong winds blow sand into the air.", q: "Where do sandstorms usually happen?", a: ["In the ocean", "In the desert", "In the rainforest"], c: 1, i: "🐪" },
  { n: "Clear Sky", f: "A clear night sky is the best time to see stars and the moon.", q: "Are there many clouds in a clear sky?", a: ["Yes, lots", "No, barely any", "Only gray ones"], c: 1, i: "✨" }
];

function mapData(arr) {
  return arr.map(item => ({
    name: item.n,
    funFact: item.f,
    quizQuestion: item.q,
    answers: item.a,
    correctAnswerIndex: item.c,
    iconUrl: item.i
  }));
}

export const animals = mapData(animalData);
export const plants = mapData(plantData);
export const weather = mapData(weatherData);

// Caching strategy for daily content (24 hours)
const getCachedDailyContent = (key, dataArray) => {
  try {
    const today = new Date().toDateString();
    const cached = localStorage.getItem(key);
    
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.date === today) {
        return parsed.data;
      }
    }
    
    const day = new Date().getDate();
    const data = dataArray[(day - 1) % dataArray.length];
    
    localStorage.setItem(key, JSON.stringify({ date: today, data }));
    return data;
  } catch (e) {
    // Fallback if localStorage is unavailable
    const day = new Date().getDate();
    return dataArray[(day - 1) % dataArray.length];
  }
};

export function getAnimalOfDay() {
  return getCachedDailyContent('nature_explorer_animal', animals);
}

export function getPlantOfDay() {
  return getCachedDailyContent('nature_explorer_plant', plants);
}

export function getWeatherOfDay() {
  return getCachedDailyContent('nature_explorer_weather', weather);
}
