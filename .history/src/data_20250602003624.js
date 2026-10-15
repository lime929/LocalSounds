import mikeharold from "./assets/mikeharold.jpg";
import ariaNova from "./assets/arianova.jpg";
import djEcho from "./assets/djecho.jpg";
import southSideBoyz from "./assets/southsideboyz.jpg";
import sofiaDelgado from "../assets/artists/sofia-delgado.jpg";
import marcusLee from "../assets/artists/marcus-lee.jpg";
import jasmineTorres from "../assets/artists/jasmine-torres.jpg";
import evanParker from "../assets/artists/evan-parker.jpg";
import natalieRivers from "../assets/artists/natalie-rivers.jpg";
import jazz from "./assets/jazz.jpg";
import indie from "./assets/indie.jpg";
import house from "./assets/house.jpg";
import openMic from "./assets/openmic.jpg";
// Note these images aren't actual pictures of these venues
// I used royality free images but used the names for organization purposes
export const latestEvents = [
  {
    title: "Jazz Night at Green Mill",
    date: "June 10, 2025",
    location: "Green Mill Cocktail Lounge",
    image: jazz,
    description:
      "Experience a sultry evening of classic and contemporary jazz at Chicago’s legendary Green Mill Cocktail Lounge, where seasoned musicians and surprise guest artists take the stage. This intimate setting has hosted jazz icons for decades and continues to celebrate the city’s storied jazz heritage.",
  },
  {
    title: "Indie Showcase at Subterranean",
    date: "June 14, 2025",
    location: "Subterranean, Wicker Park",
    image: indie,
    description:
      "Catch a curated lineup of emerging indie bands at Subterranean, one of Wicker Park’s most vibrant music venues. From jangly guitar riffs to experimental electronic sounds, this showcase highlights the most exciting local talent pushing genre boundaries.",
  },
  {
    title: "House Grooves at Smart Bar",
    date: "June 2, 2025",
    location: "Smart Bar, Lakeview",
    image: house,
    description:
      "Get ready to dance the night away at Smart Bar, Chicago’s premier house music club, featuring deep grooves spun by top local and international DJs. With state-of-the-art sound systems and a dedicated dance floor, it’s the ultimate destination for house music aficionados.",
  },
  {
    title: "Open Mic at Reggie's Rock Club",
    date: "June 3, 2025",
    location: "Reggie's Rock Club, South Loop",
    image: openMic,
    description:
      "Step into the spotlight at Reggie’s Rock Club’s weekly Open Mic night, where singer-songwriters, poets, and acoustic acts share raw performances in a casual, supportive atmosphere. Whether you’re a first-timer or a seasoned performer, this event is the perfect place to test new material and connect with fellow creatives.",
  },
];

export const topArtists = [
  {
    name: "Aria Nova",
    genre: "Indie Pop",
    image: ariaNova,
    description:
      "Aria Nova combines dreamy melodies with introspective lyrics, having a fresh take on indie pop that resonates with the youth in Chicago's music scene. Her recent singles have been praised for their heartfelt storytelling and beautiful melodys.",
  },
  {
    name: "DJ Echo",
    genre: "Electronic",
    image: djEcho,
    description:
      "Known for pulsating beats and seamless transitions, DJ Echo has become a staple of Chicago's underground electronic scene. Her sets blend classic house, techno, and newer soundscapes, keeping dance floors packed until dawn.",
  },
  {
    name: "The South Side Boyz",
    genre: "Hip-Hop",
    image: southSideBoyz,
    description:
      "From Chicago's South Side, this trio combines real lyrics about life in the city with soulful sampling to create an authentic, hip-hop experience. Their energetic live shows and thought provoking lyrics have earned them a loyal local following.",
  },
  {
    name: "Mike Harold",
    genre: "Indie Rock",
    image: mikeharold,
    description:
      "Mike Harold's love for guitar and raw vocal delivery capture the essence of Chicago's indie rock scene. Known for his heartfelt performances, he's quickly gaining traction with fans who appreciate honest songwriting and powerful riffs.",
  },
];

export const artists = [
  {
    id: 1,
    name: "Aria Nova",
    age: 24,
    genre: "Indie Pop",
    image: ariaNova,
    bio: "Aria Nova combines dreamy melodies with introspective lyrics, crafting a fresh take on indie pop that resonates with Chicago's music scene. Since launching her first EP in 2023, she's performed sold-out basement shows across Logan Square.",
    songs: [
      { title: "City Lights", url: "/audio/city-lights.mp3" },
      { title: "Echoes of You", url: "/audio/echoes-of-you.mp3" },
    ],
  },
  {
    id: 2,
    name: "DJ Echo",
    age: 29,
    genre: "Electronic",
    image: djEcho,
    bio: "Known for pulsating beats and seamless transitions, DJ Echo has become a staple of Chicago's underground electronic circuit. His 2024 remix of a classic house track drew rave reviews from local DJs and dance-floor regulars.",
    songs: [
      { title: "Neon Waves", url: "/audio/neon-waves.mp3" },
      { title: "Night Pulse", url: "/audio/night-pulse.mp3" },
    ],
  },
  {
    id: 3,
    name: "The South Side Boyz",
    age: 26,
    genre: "Hip-Hop",
    image: southSideBoyz,
    bio: "From Chicago's South Side, this dynamic duo combines gritty lyrics with soulful sampling to create an authentic, hard-hitting hip-hop experience. Their 2025 mixtape topped local charts for three consecutive weeks.",
    songs: [
      { title: "Corner Chronicles", url: "/audio/corner-chronicles.mp3" },
      { title: "Soul of the City", url: "/audio/soul-of-the-city.mp3" },
    ],
  },
  {
    id: 4,
    name: "Mike Harold",
    age: 27,
    genre: "Indie Rock",
    image: mikeHarold,
    bio: "Mike Harold's guitar-driven anthems and raw vocal delivery capture the essence of Chicago's indie rock spirit. He has opened for several midwestern tours and recently headlined a show at Subterranean that sold out within days.",
    songs: [
      { title: "Shoreline Memories", url: "/audio/shoreline-memories.mp3" },
      { title: "Midnight Run", url: "/audio/midnight-run.mp3" },
    ],
  },
  {
    id: 5,
    name: "Sofia Delgado",
    age: 23,
    genre: "Folk Singer-Songwriter",
    image: sofiaDelgado,
    bio: "Sofia Delgado brings a fresh voice to Chicago's folk scene with her heartfelt acoustic ballads and poetic songwriting. She gained local attention after performing her debut single at the annual Lincoln Park Folk Festival in 2024.",
    songs: [
      { title: "Rust & Roses", url: "/audio/rust-and-roses.mp3" },
      { title: "Midnight Campfire", url: "/audio/midnight-campfire.mp3" },
    ],
  },
  {
    id: 6,
    name: "Marcus Lee",
    age: 30,
    genre: "Alternative Rock",
    image: marcusLee,
    bio: "Marcus Lee's powerful vocals and gritty guitar riffs have made him a fast-rising name in Chicago's alternative rock circuit. His band's 2025 single “Broken Skyline” climbed local charts and secured them gigs at top venues like Metro.",
    songs: [
      { title: "Broken Skyline", url: "/audio/broken-skyline.mp3" },
      { title: "Echo Chamber", url: "/audio/echo-chamber.mp3" },
    ],
  },
  {
    id: 7,
    name: "Jasmine Torres",
    age: 28,
    genre: "R&B / Soul",
    image: jasmineTorres,
    bio: "With her smooth vocal runs and soulful melodies, Jasmine Torres has become a staple at Chicago's soul and R&B showcases. Her 2023 EP “Night Serenade” received widespread praise and led to a residency at a popular Wicker Park lounge.",
    songs: [
      { title: "Moonlit Drive", url: "/audio/moonlit-drive.mp3" },
      { title: "Heart on Fire", url: "/audio/heart-on-fire.mp3" },
    ],
  },
  {
    id: 8,
    name: "Evan Parker",
    age: 31,
    genre: "Bluegrass / Americana",
    image: evanParker,
    bio: "Evan Parker and his band Steel Strings have revitalized Chicago's bluegrass and Americana scene with their tight harmonies and virtuosic banjo playing. They've headlined at the Chicago Bluegrass Festival for two consecutive years.",
    songs: [
      { title: "Riverbend Road", url: "/audio/riverbend-road.mp3" },
      { title: "Harvest Moon", url: "/audio/harvest-moon.mp3" },
    ],
  },
  {
    id: 9,
    name: "Natalie Rivers",
    age: 25,
    genre: "Synthwave",
    image: natalieRivers,
    bio: "Natalie Rivers brings a nostalgic '80s vibe to Chicago's synthwave community with her lush, neon-infused soundscapes. Her track “Digital Mirage” became a viral hit on local streaming platforms in late 2024.",
    songs: [
      { title: "Digital Mirage", url: "/audio/digital-mirage.mp3" },
      { title: "Neon Dreams", url: "/audio/neon-dreams.mp3" },
    ],
  },
];
