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
  initializeMobileNav();

  if (document.querySelector(".tool-grid")) {
    initializeToolPage();
  }

  if (document.getElementById("dreamers-grid")) {
    initializeDreamersPage();
  }
}

document.addEventListener("DOMContentLoaded", initializePage);
