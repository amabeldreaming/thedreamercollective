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
  palette: []
};

const paletteRoles = [
  {
    key: "base",
    label: "base color",
    saturationShift: 8,
    lightnessShift: -18,
    hueShift: -10
  },
  {
    key: "support",
    label: "soft/support color",
    saturationShift: -18,
    lightnessShift: 18,
    hueShift: 18
  },
  {
    key: "accent",
    label: "accent color",
    saturationShift: 14,
    lightnessShift: 2,
    hueShift: 132
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

const cssNamedColors = [
  { name: "AliceBlue", hex: "#F0F8FF" }, { name: "AntiqueWhite", hex: "#FAEBD7" }, { name: "Aqua", hex: "#00FFFF" }, { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Azure", hex: "#F0FFFF" }, { name: "Beige", hex: "#F5F5DC" }, { name: "Bisque", hex: "#FFE4C4" }, { name: "Black", hex: "#000000" },
  { name: "BlanchedAlmond", hex: "#FFEBCD" }, { name: "Blue", hex: "#0000FF" }, { name: "BlueViolet", hex: "#8A2BE2" }, { name: "Brown", hex: "#A52A2A" },
  { name: "BurlyWood", hex: "#DEB887" }, { name: "CadetBlue", hex: "#5F9EA0" }, { name: "Chartreuse", hex: "#7FFF00" }, { name: "Chocolate", hex: "#D2691E" },
  { name: "Coral", hex: "#FF7F50" }, { name: "CornflowerBlue", hex: "#6495ED" }, { name: "Cornsilk", hex: "#FFF8DC" }, { name: "Crimson", hex: "#DC143C" },
  { name: "Cyan", hex: "#00FFFF" }, { name: "DarkBlue", hex: "#00008B" }, { name: "DarkCyan", hex: "#008B8B" }, { name: "DarkGoldenrod", hex: "#B8860B" },
  { name: "DarkGray", hex: "#A9A9A9" }, { name: "DarkGreen", hex: "#006400" }, { name: "DarkGrey", hex: "#A9A9A9" }, { name: "DarkKhaki", hex: "#BDB76B" },
  { name: "DarkMagenta", hex: "#8B008B" }, { name: "DarkOliveGreen", hex: "#556B2F" }, { name: "DarkOrange", hex: "#FF8C00" }, { name: "DarkOrchid", hex: "#9932CC" },
  { name: "DarkRed", hex: "#8B0000" }, { name: "DarkSalmon", hex: "#E9967A" }, { name: "DarkSeaGreen", hex: "#8FBC8F" }, { name: "DarkSlateBlue", hex: "#483D8B" },
  { name: "DarkSlateGray", hex: "#2F4F4F" }, { name: "DarkSlateGrey", hex: "#2F4F4F" }, { name: "DarkTurquoise", hex: "#00CED1" }, { name: "DarkViolet", hex: "#9400D3" },
  { name: "DeepPink", hex: "#FF1493" }, { name: "DeepSkyBlue", hex: "#00BFFF" }, { name: "DimGray", hex: "#696969" }, { name: "DimGrey", hex: "#696969" },
  { name: "DodgerBlue", hex: "#1E90FF" }, { name: "FireBrick", hex: "#B22222" }, { name: "FloralWhite", hex: "#FFFAF0" }, { name: "ForestGreen", hex: "#228B22" },
  { name: "Fuchsia", hex: "#FF00FF" }, { name: "Gainsboro", hex: "#DCDCDC" }, { name: "GhostWhite", hex: "#F8F8FF" }, { name: "Gold", hex: "#FFD700" },
  { name: "Goldenrod", hex: "#DAA520" }, { name: "Gray", hex: "#808080" }, { name: "Green", hex: "#008000" }, { name: "GreenYellow", hex: "#ADFF2F" },
  { name: "Grey", hex: "#808080" }, { name: "HoneyDew", hex: "#F0FFF0" }, { name: "HotPink", hex: "#FF69B4" }, { name: "IndianRed", hex: "#CD5C5C" },
  { name: "Indigo", hex: "#4B0082" }, { name: "Ivory", hex: "#FFFFF0" }, { name: "Khaki", hex: "#F0E68C" }, { name: "Lavender", hex: "#E6E6FA" },
  { name: "LavenderBlush", hex: "#FFF0F5" }, { name: "LawnGreen", hex: "#7CFC00" }, { name: "LemonChiffon", hex: "#FFFACD" }, { name: "LightBlue", hex: "#ADD8E6" },
  { name: "LightCoral", hex: "#F08080" }, { name: "LightCyan", hex: "#E0FFFF" }, { name: "LightGoldenrodYellow", hex: "#FAFAD2" }, { name: "LightGray", hex: "#D3D3D3" },
  { name: "LightGreen", hex: "#90EE90" }, { name: "LightGrey", hex: "#D3D3D3" }, { name: "LightPink", hex: "#FFB6C1" }, { name: "LightSalmon", hex: "#FFA07A" },
  { name: "LightSeaGreen", hex: "#20B2AA" }, { name: "LightSkyBlue", hex: "#87CEFA" }, { name: "LightSlateGray", hex: "#778899" }, { name: "LightSlateGrey", hex: "#778899" },
  { name: "LightSteelBlue", hex: "#B0C4DE" }, { name: "LightYellow", hex: "#FFFFE0" }, { name: "Lime", hex: "#00FF00" }, { name: "LimeGreen", hex: "#32CD32" },
  { name: "Linen", hex: "#FAF0E6" }, { name: "Magenta", hex: "#FF00FF" }, { name: "Maroon", hex: "#800000" }, { name: "MediumAquamarine", hex: "#66CDAA" },
  { name: "MediumBlue", hex: "#0000CD" }, { name: "MediumOrchid", hex: "#BA55D3" }, { name: "MediumPurple", hex: "#9370DB" }, { name: "MediumSeaGreen", hex: "#3CB371" },
  { name: "MediumSlateBlue", hex: "#7B68EE" }, { name: "MediumSpringGreen", hex: "#00FA9A" }, { name: "MediumTurquoise", hex: "#48D1CC" }, { name: "MediumVioletRed", hex: "#C71585" },
  { name: "MidnightBlue", hex: "#191970" }, { name: "MintCream", hex: "#F5FFFA" }, { name: "MistyRose", hex: "#FFE4E1" }, { name: "Moccasin", hex: "#FFE4B5" },
  { name: "NavajoWhite", hex: "#FFDEAD" }, { name: "Navy", hex: "#000080" }, { name: "OldLace", hex: "#FDF5E6" }, { name: "Olive", hex: "#808000" },
  { name: "OliveDrab", hex: "#6B8E23" }, { name: "Orange", hex: "#FFA500" }, { name: "OrangeRed", hex: "#FF4500" }, { name: "Orchid", hex: "#DA70D6" },
  { name: "PaleGoldenrod", hex: "#EEE8AA" }, { name: "PaleGreen", hex: "#98FB98" }, { name: "PaleTurquoise", hex: "#AFEEEE" }, { name: "PaleVioletRed", hex: "#DB7093" },
  { name: "PapayaWhip", hex: "#FFEFD5" }, { name: "PeachPuff", hex: "#FFDAB9" }, { name: "Peru", hex: "#CD853F" }, { name: "Pink", hex: "#FFC0CB" },
  { name: "Plum", hex: "#DDA0DD" }, { name: "PowderBlue", hex: "#B0E0E6" }, { name: "Purple", hex: "#800080" }, { name: "RebeccaPurple", hex: "#663399" },
  { name: "Red", hex: "#FF0000" }, { name: "RosyBrown", hex: "#BC8F8F" }, { name: "RoyalBlue", hex: "#4169E1" }, { name: "SaddleBrown", hex: "#8B4513" },
  { name: "Salmon", hex: "#FA8072" }, { name: "SandyBrown", hex: "#F4A460" }, { name: "SeaGreen", hex: "#2E8B57" }, { name: "SeaShell", hex: "#FFF5EE" },
  { name: "Sienna", hex: "#A0522D" }, { name: "Silver", hex: "#C0C0C0" }, { name: "SkyBlue", hex: "#87CEEB" }, { name: "SlateBlue", hex: "#6A5ACD" },
  { name: "SlateGray", hex: "#708090" }, { name: "SlateGrey", hex: "#708090" }, { name: "Snow", hex: "#FFFAFA" }, { name: "SpringGreen", hex: "#00FF7F" },
  { name: "SteelBlue", hex: "#4682B4" }, { name: "Tan", hex: "#D2B48C" }, { name: "Teal", hex: "#008080" }, { name: "Thistle", hex: "#D8BFD8" },
  { name: "Tomato", hex: "#FF6347" }, { name: "Turquoise", hex: "#40E0D0" }, { name: "Violet", hex: "#EE82EE" }, { name: "Wheat", hex: "#F5DEB3" },
  { name: "White", hex: "#FFFFFF" }, { name: "WhiteSmoke", hex: "#F5F5F5" }, { name: "Yellow", hex: "#FFFF00" }, { name: "YellowGreen", hex: "#9ACD32" }
].map((color) => ({ ...color, rgb: hexToRgb(color.hex) }));

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

function pickHueFromRange([start, end]) {
  if (start <= end) {
    return randomBetween(start, end);
  }

  const span = 360 - start + end;
  return normalizeHue(start + randomBetween(0, span));
}

function averageCircularHue(hues) {
  const vectors = hues.reduce((sum, hue) => {
    const radians = hue * Math.PI / 180;
    return {
      x: sum.x + Math.cos(radians),
      y: sum.y + Math.sin(radians)
    };
  }, { x: 0, y: 0 });

  return normalizeHue(Math.atan2(vectors.y, vectors.x) * 180 / Math.PI);
}

function getCombinedInfluence() {
  const selectedInfluences = getSelectedDreamIngredients()
    .map((ingredient) => ingredientColorInfluences[ingredient])
    .filter(Boolean);

  if (!selectedInfluences.length) return null;

  const sampledHues = selectedInfluences.map((influence) => pickHueFromRange(pickRandom(influence.hues)));
  const saturationMidpoints = selectedInfluences.map((influence) => (influence.saturation[0] + influence.saturation[1]) / 2);
  const lightnessMidpoints = selectedInfluences.map((influence) => (influence.lightness[0] + influence.lightness[1]) / 2);

  return {
    hue: averageCircularHue(sampledHues),
    saturation: saturationMidpoints.reduce((sum, value) => sum + value, 0) / saturationMidpoints.length,
    lightness: lightnessMidpoints.reduce((sum, value) => sum + value, 0) / lightnessMidpoints.length,
    saturationMin: Math.min(...selectedInfluences.map((influence) => influence.saturation[0])),
    saturationMax: Math.max(...selectedInfluences.map((influence) => influence.saturation[1])),
    lightnessMin: Math.min(...selectedInfluences.map((influence) => influence.lightness[0])),
    lightnessMax: Math.max(...selectedInfluences.map((influence) => influence.lightness[1]))
  };
}

function hslToRgb({ hue, saturation, lightness }) {
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hPrime = normalizeHue(hue) / 60;
  const x = c * (1 - Math.abs((hPrime % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (hPrime < 1) [r, g, b] = [c, x, 0];
  else if (hPrime < 2) [r, g, b] = [x, c, 0];
  else if (hPrime < 3) [r, g, b] = [0, c, x];
  else if (hPrime < 4) [r, g, b] = [0, x, c];
  else if (hPrime < 5) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
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

function colorDistance(rgbA, rgbB) {
  return Math.sqrt(
    ((rgbA.r - rgbB.r) ** 2 * 0.3) +
    ((rgbA.g - rgbB.g) ** 2 * 0.59) +
    ((rgbA.b - rgbB.b) ** 2 * 0.11)
  );
}

function nearestCssNamedColor(rgb, usedNames = new Set()) {
  const rankedColors = [...cssNamedColors].sort((a, b) => colorDistance(rgb, a.rgb) - colorDistance(rgb, b.rgb));
  return rankedColors.find((color) => !usedNames.has(color.name) && !usedNames.has(color.hex)) || rankedColors[0];
}

function formatCssColorName(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function readableTextColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return luminance > 150 ? "#1D1230" : "#F8F0FF";
}

function generatePaletteColor(role, usedNames = new Set()) {
  const influence = getCombinedInfluence();
  if (!influence) return null;

  const hsl = {
    hue: normalizeHue(influence.hue + role.hueShift + randomBetween(-16, 16)),
    saturation: clamp(influence.saturation + role.saturationShift + randomBetween(-10, 10), influence.saturationMin, influence.saturationMax),
    lightness: clamp(influence.lightness + role.lightnessShift + randomBetween(-8, 8), influence.lightnessMin, influence.lightnessMax)
  };
  const nearest = nearestCssNamedColor(hslToRgb(hsl), usedNames);

  return {
    role: role.key,
    roleLabel: role.label,
    name: nearest.name,
    displayName: formatCssColorName(nearest.name),
    hex: nearest.hex,
    text: readableTextColor(nearest.hex)
  };
}

function generateDreamPalette() {
  const usedNames = new Set();
  dreamBuilderState.palette = paletteRoles.map((role) => {
    const color = generatePaletteColor(role, usedNames);
    if (color) {
      usedNames.add(color.name);
      usedNames.add(color.hex);
    }
    return color;
  }).filter(Boolean);
}

function rerollDreamPalette() {
  generateDreamPalette();
  renderDreamPalette();
}

function rerollDreamPaletteColor(index) {
  const role = paletteRoles[index];
  if (!role || !hasDreamIngredient()) return;

  const usedNames = new Set();
  dreamBuilderState.palette
    .filter((_, colorIndex) => colorIndex !== index)
    .forEach((color) => {
      usedNames.add(color.name);
      usedNames.add(color.hex);
    });
  const color = generatePaletteColor(role, usedNames);
  if (!color) return;

  dreamBuilderState.palette[index] = color;
  renderDreamPalette();
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

function renderDreamPalette() {
  const paletteWrap = document.getElementById("dream-palette");
  if (!paletteWrap) return;

  paletteWrap.hidden = !hasDreamIngredient();
  renderSelectedIngredients();

  if (!hasDreamIngredient()) return;
  if (dreamBuilderState.palette.length !== paletteRoles.length) {
    generateDreamPalette();
  }

  const cards = paletteWrap.querySelectorAll(".palette-card");
  cards.forEach((card, index) => {
    const color = dreamBuilderState.palette[index];
    if (!color) return;

    card.style.setProperty("--palette-color", color.hex);
    card.style.setProperty("--palette-text", color.text);
    card.querySelector("h3").textContent = color.displayName;
    card.querySelector("p").textContent = color.hex;
    card.querySelector(".card-reroll").setAttribute("aria-label", `Reroll ${color.roleLabel}: ${color.displayName}`);
  });
}

function selectDreamIngredient(button) {
  const section = button.dataset.section;
  const ingredient = button.dataset.ingredient;
  const isSelected = button.classList.contains("is-selected");

  dreamBuilderState[section] = isSelected ? null : ingredient;
  dreamBuilderState.palette = [];

  document.querySelectorAll(`.ingredient-card[data-section="${section}"]`).forEach((sectionButton) => {
    const selected = sectionButton.dataset.ingredient === dreamBuilderState[section];
    sectionButton.classList.toggle("is-selected", selected);
    sectionButton.setAttribute("aria-pressed", String(selected));
  });

  renderDreamPalette();
}

function clearDreamBuilder() {
  Object.keys(dreamBuilderState).forEach((key) => {
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
  document.getElementById("clear-dream")?.addEventListener("click", clearDreamBuilder);

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
