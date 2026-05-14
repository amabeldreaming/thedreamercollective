const THEME_STORAGE_KEY = "dreamer-theme";
const THEME_LABELS = {
  daydream: "Daydream",
  nightdream: "Nightdream"
};

function getSavedTheme() {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    savedTheme = null;
  }

  return savedTheme === "daydream" || savedTheme === "nightdream" ? savedTheme : "nightdream";
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    return;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const nextTheme = theme === "daydream" ? "nightdream" : "daydream";
  toggle.textContent = THEME_LABELS[theme];
  toggle.setAttribute("aria-label", `Switch to ${THEME_LABELS[nextTheme]} theme`);
  toggle.setAttribute("aria-pressed", String(theme === "daydream"));
}

function initializeThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  applyTheme(getSavedTheme());

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "daydream" ? "daydream" : "nightdream";
    const nextTheme = currentTheme === "daydream" ? "nightdream" : "daydream";

    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });
}

const themeData = {
  themes: [
    "Moonlit greenhouse", "Neon fairy market", "Forgotten sky temple", "Haunted bakery", "Celestial library",
    "Underwater ballroom", "Robot tea party", "Dragon cloud parade", "Midnight garden party", "Alien flower shop",
    "Velvet storm palace", "Dreamcatcher forest", "Floating castle", "Candy-colored apocalypse", "Crystal train station",
    "Ghost-lit carnival", "Starfall picnic", "Witchy laundromat", "Mermaid observatory", "Lost kingdom arcade",
    "Portal in a flower shop", "Library at the end of the world", "Rainy rooftop shrine", "Cosmic cat café", "Enchanted subway station"
  ],
  moods: [
    "soft wonder", "playful chaos", "quiet mystery", "dreamy nostalgia", "cinematic tension",
    "gentle magic", "strange comfort", "elegant drama", "eerie sweetness", "hopeful melancholy",
    "warm absurdity", "secretive joy", "moonlit calm", "sparkling unease", "whimsical suspense"
  ],
  settings: [
    "abandoned glass palace", "midnight city rooftop", "glowing forest path", "floating island village", "overgrown train platform",
    "underwater throne room", "tiny room inside a star", "cloud-filled castle balcony", "hidden market alley", "cosmic greenhouse",
    "old library with moving walls", "neon-lit garden", "dreamlike desert temple", "rainy mansion entrance",
    "crystal cave ballroom", "magical laundromat", "moonlit carnival street"
  ],
  keyDetails: [
    "floating silver butterflies", "tiny glowing doors", "ribbons made of starlight", "a cracked moon mirror",
    "lanterns shaped like fruit", "clouds spilling over the floor", "a crown made of candy wrappers",
    "flowers growing from books", "a dragon-shaped shadow", "glowing fish in the air", "a teacup full of galaxies",
    "lace-like constellations", "a staircase made of clouds", "feathers turning into stars",
    "a map drawn in moonlight", "pearls floating like planets"
  ],
  styleDirections: [
    "dreamy cinematic fantasy", "glossy illustrated fantasy", "soft editorial portrait", "whimsical neon fantasy",
    "storybook surrealism", "magical fashion editorial", "cozy fantasy scene", "celestial poster art",
    "vibrant anime-inspired illustration", "polished game concept art", "dreamy semi-realistic illustration",
    "luminous fantasy card art", "playful surreal pop fantasy"
  ],
  styleMixes: [
    "Pastoral + sci-fi", "Gothic + candycore", "Renaissance + cyberpunk", "Fairytale + industrial",
    "Dreamy editorial + ancient ruins", "Kawaii + soft horror", "Royal portrait + glitch art",
    "Cozy cottagecore + cosmic magic", "Mermaidcore + noir detective", "Angelic + streetwear",
    "Fairy tale + brutalist architecture", "Vintage circus + moon temple", "Botanical + Roman empire",
    "Haunted mansion + bubblegum pop", "Space opera + tea party"
  ],
  collabThemes: [
    "Same theme, different color palette", "Opposite twins", "One prompt, many worlds", "Reimagined fairytale",
    "Dream creature parade", "Portal challenge", "Light version / dark version", "Same character, different universe",
    "Seasonal magic", "Tiny world inside an object", "Mythology remix", "Fantasy fashion house",
    "Two aesthetics collide", "Haunted but cute", "Celestial creatures", "The forbidden room",
    "Dream market", "Elemental royalty", "Magic shop window", "Lost festival"
  ],
  collabRules: [
    "Everyone uses the same core theme", "Everyone includes one crescent moon", "Everyone includes a hidden door",
    "Everyone uses the same two colors", "Everyone creates a character from the same world",
    "Everyone includes a creature companion", "Everyone makes a light and dark version",
    "Everyone includes a floating object", "Everyone uses the same setting", "Everyone adds one surreal detail"
  ],
  optionalTwists: [
    "Add a tiny skull somewhere", "No flowers allowed", "Include one impossible shadow", "Make it feel like a movie poster",
    "Add one object that does not belong", "Include a secret symbol", "Use only soft lighting", "Add a strange snack",
    "Include a hidden animal shape", "Make it elegant but weird"
  ],
  paletteSets: [
    {
      name: "Moonlit Candy",
      colors: [
        { name: "Midnight Navy", hex: "#070718" },
        { name: "Electric Cyan", hex: "#35E7FF" },
        { name: "Dream Pink", hex: "#FF5CCF" },
        { name: "Soft Violet", hex: "#9D72FF" },
        { name: "Moon Cream", hex: "#FFF3C4" }
      ]
    },
    {
      name: "Dragon Glow",
      colors: [
        { name: "Deep Indigo", hex: "#090B2F" },
        { name: "Azure Flame", hex: "#1FA7FF" },
        { name: "Neon Magenta", hex: "#FF3FA4" },
        { name: "Aqua Mist", hex: "#62FFE3" },
        { name: "Star Gold", hex: "#FFE58A" }
      ]
    },
    {
      name: "Cloud Palace",
      colors: [
        { name: "Night Blue", hex: "#0C102A" },
        { name: "Lavender Cloud", hex: "#B78CFF" },
        { name: "Peach Glow", hex: "#FF9BCB" },
        { name: "Sky Cyan", hex: "#66D9FF" },
        { name: "Warm Ivory", hex: "#FFF2DA" }
      ]
    },
    {
      name: "Star Garden",
      colors: [
        { name: "Black Plum", hex: "#100015" },
        { name: "Orchid Pink", hex: "#E85DFF" },
        { name: "Leaf Aqua", hex: "#4FFFD7" },
        { name: "Cosmic Blue", hex: "#2457FF" },
        { name: "Pale Gold", hex: "#FFECA6" }
      ]
    },
    {
      name: "Velvet Nebula",
      colors: [
        { name: "Ink Black", hex: "#03020A" },
        { name: "Velvet Purple", hex: "#4C1D95" },
        { name: "Hot Pink", hex: "#FF2E88" },
        { name: "Ice Blue", hex: "#7DD3FC" },
        { name: "Pearl White", hex: "#F8F0FF" }
      ]
    },
    {
      name: "Dreamcatcher Night",
      colors: [
        { name: "Dark Navy", hex: "#050A1F" },
        { name: "Mystic Violet", hex: "#7C3AED" },
        { name: "Soft Rose", hex: "#FB7185" },
        { name: "Turquoise Glow", hex: "#2DD4BF" },
        { name: "Star Cream", hex: "#FEF3C7" }
      ]
    },
    {
      name: "Carnival Moon",
      colors: [
        { name: "Deep Space", hex: "#09090F" },
        { name: "Coral Pink", hex: "#FB7185" },
        { name: "Blue Glow", hex: "#38BDF8" },
        { name: "Lemon Star", hex: "#FDE68A" },
        { name: "Purple Haze", hex: "#A78BFA" }
      ]
    },
    {
      name: "Ghost Library",
      colors: [
        { name: "Almost Black", hex: "#08070D" },
        { name: "Dusty Lavender", hex: "#A78BFA" },
        { name: "Spectral Blue", hex: "#93C5FD" },
        { name: "Candle Gold", hex: "#FCD34D" },
        { name: "Pale Mist", hex: "#E0F2FE" }
      ]
    }
  ]
};

const dreamersData = [
  {
    name: "Lumi Vale (Placeholder)",
    handle: "@lumivale",
    vibe: "Dreamy fantasy portraits and moonlit color stories.",
    tags: ["Fantasy", "Portraits", "Color"],
    instagramUrl: "https://instagram.com/lumivale",
    avatar: ""
  },
  {
    name: "Nova Fern (Placeholder)",
    handle: "@novafern.art",
    vibe: "Playful creature concepts, soft surreal vibes, and glowing scenes.",
    tags: ["Creatures", "Surreal", "Glow"],
    instagramUrl: "https://instagram.com/novafern.art",
    avatar: ""
  },
  {
    name: "Mira Sol (Placeholder)",
    handle: "@mirasol.images",
    vibe: "Fashion-inspired fantasy characters with dramatic lighting.",
    tags: ["Fashion", "Characters", "Editorial"],
    instagramUrl: "https://instagram.com/mirasol.images",
    avatar: ""
  },
  {
    name: "Echo Rue (Placeholder)",
    handle: "@echorue",
    vibe: "Cozy magical spaces, rainy scenes, and storybook details.",
    tags: ["Environment", "Cozy", "Storybook"],
    instagramUrl: "https://instagram.com/echorue",
    avatar: ""
  },
  {
    name: "Kael Orion (Placeholder)",
    handle: "@kaelorion",
    vibe: "Sci-fantasy collages and cinematic worldbuilding concepts.",
    tags: ["Sci-Fantasy", "Worldbuilding", "Cinematic"],
    instagramUrl: "https://instagram.com/kaelorion",
    avatar: ""
  },
  {
    name: "Sable Wren (Placeholder)",
    handle: "@sablewren",
    vibe: "Whimsical weirdcore ideas with elegant color harmonies.",
    tags: ["Whimsical", "Weirdcore", "Palette"],
    instagramUrl: "https://instagram.com/sablewren",
    avatar: ""
  }
];

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function setText(id, value) {
  const target = document.getElementById(id);
  if (target) {
    target.textContent = value;
  }
}

function renderTheme() {
  setText("theme-output", pickRandom(themeData.themes));
}

function renderPromptSpark() {
  const output = [
    `Theme: ${pickRandom(themeData.themes)}`,
    `Mood: ${pickRandom(themeData.moods)}`,
    `Setting: ${pickRandom(themeData.settings)}`,
    `Key visual detail: ${pickRandom(themeData.keyDetails)}`,
    `Style direction: ${pickRandom(themeData.styleDirections)}`
  ].join("\n");

  setText("prompt-output", output);
}

function renderPalette() {
  const palette = pickRandom(themeData.paletteSets);
  const paletteText = [
    `Palette: ${palette.name}`,
    ...palette.colors.map((color) => `- ${color.name} ${color.hex}`)
  ].join("\n");

  setText("palette-output", paletteText);

  const swatchWrap = document.getElementById("palette-swatches");
  if (!swatchWrap) return;

  swatchWrap.innerHTML = "";
  palette.colors.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.backgroundColor = color.hex;
    swatch.title = `${color.name} (${color.hex})`;
    swatch.setAttribute("aria-label", `${color.name} ${color.hex}`);
    swatchWrap.appendChild(swatch);
  });
}

function renderStyleMix() {
  const styleMix = pickRandom(themeData.styleMixes);
  const direction = `${pickRandom(themeData.moods)} with ${pickRandom(themeData.settings)} and ${pickRandom(themeData.keyDetails)}.`;
  setText("style-output", `Style mix: ${styleMix}\nPossible direction: ${direction}`);
}

function renderCollab() {
  const output = [
    `Collab theme: ${pickRandom(themeData.collabThemes)}`,
    `Shared rule: ${pickRandom(themeData.collabRules)}`,
    `Optional twist: ${pickRandom(themeData.optionalTwists)}`
  ].join("\n");

  setText("collab-output", output);
}

async function copyFromTarget(targetId, button) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    await navigator.clipboard.writeText(target.textContent.trim());
    const originalText = button.textContent;
    button.textContent = "Copied ✨";
    setTimeout(() => {
      button.textContent = originalText;
    }, 1400);
  } catch {
    button.textContent = "Copy failed";
    setTimeout(() => {
      button.textContent = "Copy spark";
    }, 1400);
  }
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function renderDreamers(list) {
  const grid = document.getElementById("dreamers-grid");
  const count = document.getElementById("dreamer-count");
  if (!grid || !count) return;

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<article class="card"><p>No matches yet. Try another word spark.</p></article>`;
    count.textContent = "0 Dreamers shown";
    return;
  }

  list.forEach((dreamer) => {
    const article = document.createElement("article");
    article.className = "card member-card";

    const avatarMarkup = dreamer.avatar
      ? `<img class="avatar" src="${dreamer.avatar}" alt="${dreamer.name} avatar">`
      : `<div class="avatar" aria-hidden="true">${getInitials(dreamer.name)}</div>`;

    article.innerHTML = `
      <div class="member-top">
        ${avatarMarkup}
        <div>
          <h2>${dreamer.name}</h2>
          <p class="muted">${dreamer.handle}</p>
        </div>
      </div>
      <p>${dreamer.vibe}</p>
      <div class="tags">${dreamer.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <a class="button button-secondary" href="${dreamer.instagramUrl}" target="_blank" rel="noopener noreferrer">Open Instagram profile</a>
    `;

    grid.appendChild(article);
  });

  count.textContent = `${list.length} Dreamer${list.length > 1 ? "s" : ""} shown`;
}

function initializeToolPage() {
  const generateButtons = document.querySelectorAll(".generate-btn");
  const copyButtons = document.querySelectorAll(".copy-btn");

  generateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "theme") renderTheme();
      if (action === "prompt") renderPromptSpark();
      if (action === "palette") renderPalette();
      if (action === "style") renderStyleMix();
      if (action === "collab") renderCollab();
    });
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      copyFromTarget(button.dataset.copyTarget, button);
    });
  });

  renderTheme();
  renderPromptSpark();
  renderPalette();
  renderStyleMix();
  renderCollab();
}

function initializeDreamersPage() {
  renderDreamers(dreamersData);

  const input = document.getElementById("dreamer-search");
  if (!input) return;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();
    const filtered = dreamersData.filter((dreamer) => {
      const tags = dreamer.tags.join(" ").toLowerCase();
      return [dreamer.name, dreamer.handle, dreamer.vibe, tags]
        .join(" ")
        .toLowerCase()
        .includes(value);
    });

    renderDreamers(filtered);
  });
}


const dreamBuilderState = {
  count: null,
  spice: null,
  vibe: null,
  palette: [],
  hasRevealedPalette: false,
  soundEnabled: true,
  audioContext: null
};

const paletteRoles = [
  {
    key: "base",
    label: "base color",
    saturation: [22, 82],
    lightness: [12, 54]
  },
  {
    key: "support",
    label: "soft/support color",
    saturation: [8, 62],
    lightness: [58, 92]
  },
  {
    key: "accent",
    label: "accent color",
    saturation: [52, 100],
    lightness: [36, 78]
  }
];

// Hidden dream ingredient color influences. Adjust these hue/saturation/lightness
// ranges later to tune how each ingredient steers generated palettes.
const ingredientColorInfluences = {
  Sheep: { hues: [[32, 58], [252, 286]], saturation: [18, 48], lightness: [62, 84] },
  Stars: { hues: [[42, 66], [206, 236]], saturation: [42, 86], lightness: [54, 82] },
  Moths: { hues: [[24, 50], [272, 318]], saturation: [26, 62], lightness: [36, 72] },
  Candles: { hues: [[28, 52], [4, 18]], saturation: [58, 92], lightness: [44, 74] },
  Keys: { hues: [[38, 54], [188, 216]], saturation: [36, 78], lightness: [34, 68] },
  Clouds: { hues: [[192, 220], [260, 288]], saturation: [18, 48], lightness: [68, 90] },
  "Tiny Ghosts": { hues: [[176, 204], [238, 270]], saturation: [16, 46], lightness: [58, 88] },
  "Paper Cranes": { hues: [[340, 18], [198, 226]], saturation: [28, 64], lightness: [58, 86] },
  "Moon Sugar": { hues: [[42, 66], [286, 318]], saturation: [48, 88], lightness: [62, 88] },
  "Dragon Ash": { hues: [[0, 18], [260, 292]], saturation: [42, 82], lightness: [22, 56] },
  "Fairy Salt": { hues: [[150, 188], [282, 316]], saturation: [36, 76], lightness: [66, 90] },
  "Rose Dust": { hues: [[334, 358], [0, 12]], saturation: [44, 82], lightness: [56, 82] },
  "Silver Honey": { hues: [[36, 58], [204, 228]], saturation: [28, 66], lightness: [54, 82] },
  Glowberries: { hues: [[304, 334], [194, 214]], saturation: [58, 94], lightness: [42, 72] },
  "Midnight Vanilla": { hues: [[232, 270], [36, 54]], saturation: [30, 72], lightness: [24, 62] },
  "Bottled Starlight": { hues: [[190, 214], [48, 68]], saturation: [50, 94], lightness: [54, 84] },
  Cozy: { hues: [[18, 42], [344, 8]], saturation: [40, 74], lightness: [42, 74] },
  Haunted: { hues: [[226, 264], [110, 146]], saturation: [24, 62], lightness: [24, 62] },
  Royal: { hues: [[248, 286], [36, 54]], saturation: [48, 88], lightness: [30, 66] },
  Romantic: { hues: [[330, 358], [0, 12]], saturation: [42, 84], lightness: [52, 82] },
  Stormy: { hues: [[206, 232], [250, 276]], saturation: [30, 70], lightness: [24, 58] },
  Forest: { hues: [[92, 146], [34, 52]], saturation: [34, 76], lightness: [28, 62] },
  Candy: { hues: [[300, 336], [176, 202]], saturation: [58, 96], lightness: [58, 84] },
  Celestial: { hues: [[214, 246], [270, 306]], saturation: [46, 88], lightness: [42, 76] }
};

const namedDreamColors = (window.dreamNamedColors || []).map((color) => {
  const rgb = hexToRgb(color.hex);
  return {
    ...color,
    hex: color.hex.toUpperCase(),
    rgb,
    hsl: rgbToHsl(rgb)
  };
});

const recentDreamColorHexes = [];
const recentDreamColorLimit = 18;


function getDreamAudioContext() {
  if (!dreamBuilderState.soundEnabled) return null;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  if (!dreamBuilderState.audioContext) {
    dreamBuilderState.audioContext = new AudioContextClass();
  }

  if (dreamBuilderState.audioContext.state === "suspended") {
    dreamBuilderState.audioContext.resume();
  }

  return dreamBuilderState.audioContext;
}

function playTone(context, { frequency, start = 0, duration = 0.08, type = "sine", gain = 0.05 }) {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const startAt = context.currentTime + start;
  const endAt = startAt + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gainNode.gain.setValueAtTime(0.0001, startAt);
  gainNode.gain.exponentialRampToValueAtTime(gain, startAt + 0.015);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, endAt);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(endAt + 0.02);
}

function playDreamSound(soundName) {
  const context = getDreamAudioContext();
  if (!context) return;

  const sounds = {
    ingredient: [
      { frequency: 660, duration: 0.045, type: "triangle", gain: 0.025 },
      { frequency: 990, start: 0.035, duration: 0.07, type: "sine", gain: 0.018 }
    ],
    firstReveal: [
      { frequency: 523.25, duration: 0.13, type: "sine", gain: 0.026 },
      { frequency: 783.99, start: 0.08, duration: 0.16, type: "triangle", gain: 0.03 },
      { frequency: 1174.66, start: 0.17, duration: 0.2, type: "sine", gain: 0.022 }
    ],
    update: [
      { frequency: 587.33, duration: 0.11, type: "sine", gain: 0.015 },
      { frequency: 880, start: 0.08, duration: 0.15, type: "triangle", gain: 0.017 }
    ],
    colorReroll: [
      { frequency: 740, duration: 0.055, type: "triangle", gain: 0.03 },
      { frequency: 440, start: 0.045, duration: 0.075, type: "sine", gain: 0.02 }
    ],
    paletteReroll: [
      { frequency: 493.88, duration: 0.1, type: "sine", gain: 0.022 },
      { frequency: 739.99, start: 0.07, duration: 0.14, type: "triangle", gain: 0.026 },
      { frequency: 987.77, start: 0.15, duration: 0.18, type: "sine", gain: 0.02 }
    ]
  };

  sounds[soundName]?.forEach((tone) => playTone(context, tone));
}

function setSoundEnabled(enabled) {
  dreamBuilderState.soundEnabled = enabled;
  const soundToggle = document.getElementById("sound-toggle");
  if (soundToggle) {
    soundToggle.textContent = enabled ? "Sound on" : "Sound off";
    soundToggle.setAttribute("aria-pressed", String(enabled));
  }
}

function createIngredientSparkles(button) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sparkleCount = 5;
  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "ingredient-sparkle";
    sparkle.style.setProperty("--spark-x", `${38 + Math.random() * 24}%`);
    sparkle.style.setProperty("--spark-y", `${34 + Math.random() * 30}%`);
    sparkle.style.setProperty("--spark-dx", `${(Math.random() - 0.5) * 54}px`);
    sparkle.style.setProperty("--spark-dy", `${-18 - Math.random() * 30}px`);
    button.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }
}

function restartClassAnimation(element, className) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  element.addEventListener("animationend", () => element.classList.remove(className), { once: true });
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the textarea copy path for older/insecure browsers.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  if (!copied) throw new Error("Clipboard copy failed");
  return copied;
}

function showCopyStatus(message) {
  const status = document.getElementById("copy-status");
  if (!status) return;

  window.clearTimeout(status.dataset.timeoutId);
  status.textContent = message;
  status.classList.add("is-visible");
  const timeoutId = window.setTimeout(() => {
    status.classList.remove("is-visible");
  }, 1300);
  status.dataset.timeoutId = String(timeoutId);
}

async function copyPaletteValue(button) {
  const value = button.textContent.trim();
  const copyKind = button.dataset.copyKind;

  try {
    await copyTextToClipboard(value);
    showCopyStatus(copyKind === "hex" ? "HEX copied" : "Copied");
  } catch (error) {
    showCopyStatus("Copy failed");
  }
}

function hasDreamIngredient() {
  return Object.values(dreamBuilderState).some((value) => typeof value === "string" && value.length > 0);
}

function getSelectedDreamIngredients() {
  return [dreamBuilderState.count, dreamBuilderState.spice, dreamBuilderState.vibe].filter(Boolean);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeHue(hue) {
  return ((hue % 360) + 360) % 360;
}

function getSelectedInfluences() {
  return getSelectedDreamIngredients()
    .map((ingredient) => ingredientColorInfluences[ingredient])
    .filter(Boolean);
}

function hueDistance(hueA, hueB) {
  const distance = Math.abs(normalizeHue(hueA) - normalizeHue(hueB));
  return Math.min(distance, 360 - distance);
}

function hueDistanceToRange(hue, [start, end]) {
  const normalizedHue = normalizeHue(hue);
  const normalizedStart = normalizeHue(start);
  const normalizedEnd = normalizeHue(end);
  const isInsideRange = normalizedStart <= normalizedEnd
    ? normalizedHue >= normalizedStart && normalizedHue <= normalizedEnd
    : normalizedHue >= normalizedStart || normalizedHue <= normalizedEnd;

  if (isInsideRange) return 0;
  return Math.min(hueDistance(normalizedHue, normalizedStart), hueDistance(normalizedHue, normalizedEnd));
}

function rangeScore(value, [min, max], falloff = 35) {
  if (value >= min && value <= max) return 1;
  const distance = value < min ? min - value : value - max;
  return clamp(1 - (distance / falloff), 0, 1);
}

function hueRangeScore(hue, ranges) {
  const closestDistance = Math.min(...ranges.map((range) => hueDistanceToRange(hue, range)));
  return clamp(1 - (closestDistance / 90), 0, 1);
}

function scoreColorForInfluence(color, influence) {
  const hueScore = hueRangeScore(color.hsl.hue, influence.hues);
  const saturationScore = rangeScore(color.hsl.saturation, influence.saturation, 38);
  const lightnessScore = rangeScore(color.hsl.lightness, influence.lightness, 42);

  return (hueScore * 0.56) + (saturationScore * 0.2) + (lightnessScore * 0.24);
}

function scoreColorForRole(color, role) {
  const lightnessScore = rangeScore(color.hsl.lightness, role.lightness, 32);
  const saturationScore = rangeScore(color.hsl.saturation, role.saturation, 34);
  return (lightnessScore * 0.62) + (saturationScore * 0.38);
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * (((blue - red) / delta) + 2);
    else hue = 60 * (((red - green) / delta) + 4);
  }

  const lightness = (max + min) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs((2 * lightness) - 1));

  return {
    hue: normalizeHue(hue),
    saturation: saturation * 100,
    lightness: lightness * 100
  };
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}


function readableTextColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return luminance > 150 ? "#1D1230" : "#F8F0FF";
}

function rememberDreamColors(colors) {
  colors.forEach((color) => {
    if (!color?.hex) return;
    recentDreamColorHexes.unshift(color.hex);
  });

  const uniqueRecentHexes = [...new Set(recentDreamColorHexes)];
  recentDreamColorHexes.splice(0, recentDreamColorHexes.length, ...uniqueRecentHexes.slice(0, recentDreamColorLimit));
}

function scoreNamedColor(color, role, selectedInfluences) {
  const ingredientScore = selectedInfluences.length
    ? selectedInfluences.reduce((sum, influence) => sum + scoreColorForInfluence(color, influence), 0) / selectedInfluences.length
    : 0.5;
  const roleScore = scoreColorForRole(color, role);
  const recentPenalty = recentDreamColorHexes.includes(color.hex) ? 0.18 : 0;

  return (ingredientScore * 0.62) + (roleScore * 0.38) - recentPenalty;
}

function pickScoredColor(scoredColors) {
  const topPool = scoredColors.slice(0, Math.min(44, scoredColors.length));
  const weightedPool = topPool.map((entry, index) => ({
    ...entry,
    weight: Math.max(0.08, entry.score + ((topPool.length - index) / topPool.length * 0.22))
  }));
  const totalWeight = weightedPool.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * totalWeight;

  return weightedPool.find((entry) => {
    cursor -= entry.weight;
    return cursor <= 0;
  })?.color || weightedPool[0]?.color;
}

function generatePaletteColor(role, usedHexes = new Set()) {
  const selectedInfluences = getSelectedInfluences();
  if (!selectedInfluences.length || !namedDreamColors.length) return null;

  // The engine now chooses directly from real named-color dataset rows. It does
  // not generate arbitrary HSL colors or snap them to a nearest CSS color name.
  const scoredColors = namedDreamColors
    .filter((color) => !usedHexes.has(color.hex))
    .map((color) => ({ color, score: scoreNamedColor(color, role, selectedInfluences) + randomBetween(0, 0.08) }))
    .sort((a, b) => b.score - a.score);
  const selectedColor = pickScoredColor(scoredColors);
  if (!selectedColor) return null;

  return {
    role: role.key,
    roleLabel: role.label,
    name: selectedColor.name,
    displayName: selectedColor.name,
    hex: selectedColor.hex,
    text: readableTextColor(selectedColor.hex)
  };
}


function generateDreamPalette() {
  const usedHexes = new Set();
  dreamBuilderState.palette = paletteRoles.map((role) => {
    const color = generatePaletteColor(role, usedHexes);
    if (color) usedHexes.add(color.hex);
    return color;
  }).filter(Boolean);
  rememberDreamColors(dreamBuilderState.palette);
}

function rerollDreamPalette() {
  generateDreamPalette();
  renderDreamPalette({ reveal: true });
  playDreamSound("paletteReroll");
}

function rerollDreamPaletteColor(index) {
  const role = paletteRoles[index];
  if (!role || !hasDreamIngredient()) return;

  const usedHexes = new Set();
  dreamBuilderState.palette
    .filter((_, colorIndex) => colorIndex !== index)
    .forEach((color) => {
      usedHexes.add(color.hex);
    });
  const color = generatePaletteColor(role, usedHexes);
  if (!color) return;

  dreamBuilderState.palette[index] = color;
  rememberDreamColors([color]);
  renderDreamPalette();
  playDreamSound("colorReroll");
}

function renderSelectedIngredients() {
  const selectedWrap = document.getElementById("selected-ingredients");
  if (!selectedWrap) return;

  selectedWrap.innerHTML = "";
  getSelectedDreamIngredients().forEach((ingredient) => {
    const selectedChip = document.createElement("span");
    selectedChip.textContent = ingredient;
    selectedWrap.appendChild(selectedChip);
  });
}

function renderDreamPalette(options = {}) {
  const paletteWrap = document.getElementById("dream-palette");
  if (!paletteWrap) return;

  const shouldShowPalette = hasDreamIngredient();
  paletteWrap.hidden = !shouldShowPalette;
  renderSelectedIngredients();

  if (!shouldShowPalette) return;
  if (dreamBuilderState.palette.length !== paletteRoles.length) {
    generateDreamPalette();
  }

  const cards = paletteWrap.querySelectorAll(".palette-card");
  cards.forEach((card, index) => {
    const color = dreamBuilderState.palette[index];
    if (!color) return;

    card.style.setProperty("--palette-color", color.hex);
    card.style.setProperty("--palette-text", color.text);
    card.querySelector(".palette-copy-name").textContent = color.displayName;
    card.querySelector(".palette-copy-name").setAttribute("aria-label", `Copy color name ${color.displayName}`);
    card.querySelector(".palette-copy-hex").textContent = color.hex;
    card.querySelector(".palette-copy-hex").setAttribute("aria-label", `Copy HEX code ${color.hex}`);
    card.querySelector(".card-reroll").setAttribute("aria-label", `Reroll ${color.roleLabel}: ${color.displayName}`);
  });

  if (options.reveal) {
    restartClassAnimation(paletteWrap, "is-revealing");
  }
}

function selectDreamIngredient(button) {
  const section = button.dataset.section;
  const ingredient = button.dataset.ingredient;
  const isSelected = button.classList.contains("is-selected");
  const hadIngredient = hasDreamIngredient();

  restartClassAnimation(button, "is-tapped");
  playDreamSound("ingredient");

  dreamBuilderState[section] = isSelected ? null : ingredient;
  dreamBuilderState.palette = [];

  document.querySelectorAll(`.ingredient-card[data-section="${section}"]`).forEach((sectionButton) => {
    const selected = sectionButton.dataset.ingredient === dreamBuilderState[section];
    sectionButton.classList.toggle("is-selected", selected);
    sectionButton.setAttribute("aria-pressed", String(selected));
  });

  if (!isSelected) createIngredientSparkles(button);

  const hasIngredientNow = hasDreamIngredient();
  const isFirstReveal = hasIngredientNow && !dreamBuilderState.hasRevealedPalette;
  renderDreamPalette({ reveal: isFirstReveal || (hadIngredient && hasIngredientNow) });

  if (isFirstReveal) {
    dreamBuilderState.hasRevealedPalette = true;
    playDreamSound("firstReveal");
  } else if (hadIngredient && hasIngredientNow) {
    playDreamSound("update");
  }
}

function clearDreamBuilder() {
  Object.keys(dreamBuilderState).forEach((key) => {
    if (key === "soundEnabled") return;
    if (key === "audioContext") return;
    if (key === "hasRevealedPalette") {
      dreamBuilderState[key] = false;
      return;
    }
    dreamBuilderState[key] = Array.isArray(dreamBuilderState[key]) ? [] : null;
  });

  document.querySelectorAll(".ingredient-card").forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  renderDreamPalette();
}

function initializeDreamBuilder() {
  const builder = document.getElementById("dream-builder-form");
  if (!builder) return;

  document.querySelectorAll(".ingredient-card").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectDreamIngredient(button));
  });

  document.getElementById("reroll-palette")?.addEventListener("click", rerollDreamPalette);
  document.querySelectorAll(".card-reroll").forEach((button, index) => {
    button.addEventListener("click", () => rerollDreamPaletteColor(index));
  });
  document.querySelectorAll(".palette-copy").forEach((button) => {
    button.addEventListener("click", () => copyPaletteValue(button));
  });
  document.getElementById("sound-toggle")?.addEventListener("click", () => {
    setSoundEnabled(!dreamBuilderState.soundEnabled);
  });
  document.getElementById("clear-dream")?.addEventListener("click", clearDreamBuilder);

  setSoundEnabled(dreamBuilderState.soundEnabled);

  renderDreamPalette();
}

function initializeMobileNav() {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open", !expanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function initializePage() {
  initializeThemeToggle();
  initializeMobileNav();

  if (document.querySelector(".tool-grid")) {
    initializeToolPage();
  }

  if (document.getElementById("dreamers-grid")) {
    initializeDreamersPage();
  }

  initializeDreamBuilder();
}

document.addEventListener("DOMContentLoaded", initializePage);
