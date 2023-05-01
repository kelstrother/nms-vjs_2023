const ogGlyphsContainer = document.querySelector(".og-glyphs-container");
const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
// const images = document.querySelectorAll("img");
const chosenGlyphContainer = document.querySelector(".chosen-glyphs-container");
const addBtn = document.querySelector(".add-btn");
const storedAddresses = document.querySelector(".stored-addresses");
const displayBtn = document.querySelector('.display-btn');
const modal = document.querySelector('.modal');
const okBtn = document.querySelector('.ok');

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

//~ /////////////////////////////////////
//!         create imgages from original object          \\
//~ /////////////////////////////////////
glyphObj.forEach((glyph, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<img class='glyph-img' src='${glyph.src}' alt='${glyph.name} Glyph'>`;
  if (index <= 7) {
    row1.appendChild(div);
  } else {
    row2.appendChild(div);
  }
});

const portalGlyphs = document.querySelectorAll(".glyph-img");
function chooseGlyph(e) {
  const clickedGlyph = e.target;
  const glyphSrc = e.target.src;
  if (portalAddress.length < 12) {
    const newGlyph = new Image();
    newGlyph.src = glyphSrc;
    newGlyph.classList.add("selected");
    chosenGlyphContainer.appendChild(newGlyph);
    portalAddress.push({ src: clickedGlyph.src, alt: clickedGlyph.alt });
  } else {
    clickedGlyph.style.cursor = "not-allowed";
    chosenGlyphContainer.style.setProperty("--none", "block");
  }
  return portalAddress;
}

let portalAddress = [];

function closeModal() {

}
//~ /////////////////////////////////////
//!         add to storage          \\
//~ /////////////////////////////////////
function storePortalAddress(e) {
  e.preventDefault();

  const storedDestinations = getStoredDestinations();
  if (portalAddress.length === 12) {
    storedDestinations.push(portalAddress);
    localStorage.setItem(
      "exploredDestinations",
      JSON.stringify(storedDestinations)
    );

    clearUI();
    modal.style.display = 'flex';
  } else {
    alert("Portal address needs 12 glyphs.");
  }
  return storedDestinations;
}

//~ /////////////////////////////////////
//!         get from storage          \\
//~ /////////////////////////////////////
function getStoredDestinations() {
  let portalAddress;
  if (localStorage.getItem("exploredDestinations") === null) {
    portalAddress = [];
  } else {
    portalAddress = JSON.parse(localStorage.getItem("exploredDestinations"));
  }
  return portalAddress;
}
//~ /////////////////////////////////////
//!         get from storage add to DOM          \\
//~ /////////////////////////////////////
function displayExploredDestinations() {
  const storedDestinations = getStoredDestinations();
  storedDestinations.forEach((destination, index) => {
    const exploredDiv = document.createElement("div");
    exploredDiv.classList.add("explored-destination");
    for (let i = 0; i < destination.length; i++) {
      const exploredPortalAddress = new Image();
      exploredPortalAddress.classList.add("explored-img");
      exploredPortalAddress.src = destination[i].src;
      exploredPortalAddress.alt = destination[i].alt;
      exploredDiv.appendChild(exploredPortalAddress);
    }
    if (index < 10) {
      storedAddresses.appendChild(exploredDiv);
      storedAddresses.style.display = 'flex';
      document.querySelector('.stored-h2').style.display = 'block';
    }
  });
}
//~ /////////////////////////////////////
//!         CLEARING FIELDS         \\
//~ /////////////////////////////////////
function clearUI() {
  if (storePortalAddress) {
    const selected = document.querySelectorAll(".selected");
    selected.forEach((img) => img.remove());
    chosenGlyphContainer.style.setProperty("--none", "none");
  }
}

//~ /////////////////////////////////////
//!         EVENT LISTENERS         \\
//~ /////////////////////////////////////

portalGlyphs.forEach((glyph) => glyph.addEventListener("click", chooseGlyph));
addBtn.addEventListener("click", storePortalAddress);
displayBtn.addEventListener('click', displayExploredDestinations)
okBtn.addEventListener('click', () => modal.style.display = 'none')
// window.addEventListener("DOMContentLoaded", displayExploredDestinations);
