const ogGlyphsContainer = document.querySelector(".og-glyphs-container");
const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const images = document.querySelectorAll("img");
const addressContainer = document.querySelector(".selected-glyphs-container");
const addBtn = document.querySelector('.add-btn');

// const originalGlyphs = [
//   "./assets/the-star-above-water.png",
//   "./assets/the-hunter.png",
//   "./assets/the-reflection.png",
//   "./assets/the-ancient-giant.png",
//   "./assets/the-obscured-companion.png",
//   "./assets/the-ascending-orb.png",
//   "./assets/the-sailor.png",
//   "./assets/the-lowly-insect.png",
//   "./assets/the-dragonfly.png",
//   "./assets/the-spiral-of-reality.png",
//   "./assets/the-anomaly.png",
//   "./assets/the-ocean-king.png",
//   "./assets/the-hut.png",
//   "./assets/the-vessel-to-beyond.png",
//   "./assets/the-path-of-the-tree.png",
//   "./assets/the-universe-triangle.png",
// ];
// originalGlyphs.forEach((glyph, index) => {
//   let fileName = `${glyph}`;
//   let nameExtract = fileName.slice(9, -4);
//   let alt = nameExtract.replace(/-/g, " ");
//   let glyphText = "glyph";
//   let finalAlt = alt.concat(" ", glyphText);

//   const div = document.createElement("div");
//   div.classList.add("glyph");
//   div.innerHTML = `<img class='glyph-img' src='${glyph}' alt='${finalAlt}'>`;
//   if (index <= 7) {
//     row1.appendChild(div);
//   } else {
//     row2.appendChild(div);
//   }
// });

const glyphObj = [
  { name: "The Star Above Water", src: "./assets/the-star-above-water.png" },
  { name: "The Hunter", src: "./assets/the-hunter.png" },
  { name: "The Reflection", src: "./assets/the-reflection.png" },
  { name: "The Ancient Giant", src: "./assets/the-ancient-giant.png" },
  {
    name: "The Obscured Companion",
    src: "./assets/the-obscured-companion.png",
  },
  { name: "The Ascending Orb", src: "./assets/the-ascending-orb.png" },
  { name: "The Sailor", src: "./assets/the-sailor.png" },
  { name: "The Lowly Insect", src: "./assets/the-lowly-insect.png" },
  { name: "The Dragonfly", src: "./assets/the-dragonfly.png" },
  { name: "The Spiral Of Reality", src: "./assets/the-spiral-of-reality.png" },
  { name: "The Anomaly", src: "./assets/the-anomaly.png" },
  { name: "The Ocean King", src: "./assets/the-ocean-king.png" },
  { name: "The Hut", src: "./assets/the-hut.png" },
  { name: "The Vessel To Beyond", src: "./assets/the-vessel-to-beyond.png" },
  { name: "The Path Of The Tree", src: "./assets/the-path-of-the-tree.png" },
  { name: "The Universe Triangle", src: "./assets/the-universe-triangle.png" },
];
const ogGlyphs = Object.entries(glyphObj);
glyphObj.forEach((glyph, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<img class='glyph-img' src='${glyph.src}' alt='${glyph.name} Glyph'>`;
  if (index <= 7) {
    row1.appendChild(div);
  } else {
    row2.appendChild(div);
  }
});


const glyphs = document.querySelectorAll(".glyph-img");

let selectedGlyphs = [];

glyphs.forEach((glyph, index) => {
  glyph.addEventListener("click", (e) => {
    const clickedGlyph = e.target;
    const glyphSrc = e.target.src;
    if (selectedGlyphs.length !== 12) {
      selectedGlyphs.push(clickedGlyph);
      const portalAddress = document.createElement("div");
      portalAddress.classList.add("selected-row");
      portalAddress.innerHTML = `<img class='selected' src='${glyphSrc}'>`;
      addressContainer.appendChild(portalAddress);
    } else {
      clickedGlyph.style.cursor = "not-allowed";
      addressContainer.style.setProperty('--none', 'block')
    }
  });
});

function storePortalAddress(address) {
  const portalAddresses = getPortalAddresses();

  portalAddresses.push(address);

  localStorage.setItem('addresses', JSON.stringify(portalAddresses))
}

function getPortalAddresses() {
  selectedGlyphs = portalAddresses;
  if(localStorage.getItem('addresses') === null) {
    portalAddresses = [];
  } else {
    portalAddresses = JSON.parse(localStorage.getItem('addresses'));
  }
  return portalAddresses;
}

addBtn.addEventListener('click', storePortalAddress)