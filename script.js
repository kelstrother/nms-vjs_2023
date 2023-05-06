const ogGlyphsContainer = document.querySelector(".og-glyphs-container");
const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const chosenGlyphContainer = document.querySelector(".chosen-glyphs-container");
const addBtn = document.querySelector(".add-btn");
const storedAddresses = document.querySelector(".stored-addresses");
const displayBtn = document.querySelector(".display-btn");
const modal = document.querySelector(".modal");
const okBtn = document.querySelector(".ok");
const systemName = document.getElementById("system-name");
const selectClassification = document.querySelector("#system-classification");
const form = document.querySelector(".create-entry");
const starCount = document.querySelector("#stars");
const economyType = document.querySelector("#economy-type");
const economyStrength = document.querySelectorAll("input[name=strength]");
const dominantSpecies = document.querySelectorAll("input[name=race]");
const container = document.querySelector(".journal-container");
const addNew = document.querySelector(".create-container");
const newChildren = addNew.querySelectorAll("p");
const plus = document.querySelector(".plus-icon");
const notes = document.querySelector("#journal-notes");

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

let index = 0;
const portalGlyphs = document.querySelectorAll(".glyph-img");
function chooseGlyph(e) {
  const clickedGlyph = e.target;
  const glyphSrc = e.target.src;
  if (portalAddress.length < 12) {
    index++;
    const newGlyph = new Image();
    portalAddress.push({ src: clickedGlyph.src, alt: clickedGlyph.alt });
    newGlyph.src = glyphSrc;
    newGlyph.classList.add("selected");
    chosenGlyphContainer.appendChild(newGlyph);
  }
  if (index === 12) {
    index--;
    clickedGlyph.style.cursor = "not-allowed";
    document.querySelector(".chosen-inside").style.display = "block";
  }
  return portalAddress;
}

let portalAddress = [];

//~ /////////////////////////////////////
//!         get from storage          \\
//~ /////////////////////////////////////
function getStoredEntries() {
  let journalEntries;
  if (localStorage.getItem("journalEntries") === null) {
    journalEntries = [];
  } else {
    journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
  }
  return journalEntries;
}
//~ /////////////////////////////////////
//!         get from storage add to DOM          \\
//~ /////////////////////////////////////
function displayFiveEntries() {
  const storedEntries = getStoredEntries();
  storedEntries.forEach((entry) => {
    // console.log(entry.systemAddress);
    // storedGlyphs = entry.systemAddress;
    // storedGlyphs.forEach((glyph) => {});
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("stored-entries");
    entryDiv.innerHTML = `
          <div class='stored-system-address'>
            <img class='stored-glyph' src="${entry.systemAddress[0].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[1].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[2].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[3].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[4].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[5].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[6].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[7].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[8].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[9].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[10].src}" alt="" />
            <img class='stored-glyph' src="${entry.systemAddress[11].src}" alt="" />
          </div>
          <p>${entry.systemName}</p>
          <p>${entry.classification}</p>
          <p>${entry.stars}</p>
          <p>${entry.economy}</p>
          <p>${entry.strength}</p>
          <p>${entry.species}</p>
          <p>${entry.notes}</p>
      `;
    storedAddresses.appendChild(entryDiv);
  });
}
// function displayExploredDestinations() {
//   const storedDestinations = getStoredDestinations();
//   storedDestinations.forEach((destination, index) => {
//     const exploredDiv = document.createElement("div");
//     exploredDiv.classList.add("explored-destination");
//     for (let i = 0; i < destination.length; i++) {
//       const exploredPortalAddress = new Image();
//       exploredPortalAddress.classList.add("explored-img");
//       exploredPortalAddress.src = destination[i].src;
//       exploredPortalAddress.alt = destination[i].alt;
//       exploredDiv.appendChild(exploredPortalAddress);
//     }
//     if (index < 10) {
//       storedAddresses.appendChild(exploredDiv);
//       storedAddresses.style.display = "flex";
//       document.querySelector(".stored-h2").style.display = "block";
//     }
//   });
// }

//~ /////////////////////////////////////
//!         FORM INPUT FIELDS         \\
//~ /////////////////////////////////////

function getStrengthValue() {
  for (let i = 0; i < economyStrength.length; i++) {
    return economyStrength[i].value;
  }
}

function getSpeciesValue() {
  for (let i = 0; i < dominantSpecies.length; i++) {
    return dominantSpecies[i].value;
  }
}

//~ /////////////////////////////////////
//!         CLEARING FIELDS         \\
//~ /////////////////////////////////////
function clearUI() {
  if (handleSubmit) {
    const selected = document.querySelectorAll(".selected");
    selected.forEach((img) => img.remove());
    chosenGlyphContainer.style.setProperty("--none", "none");
    form.reset();
  }
}

//~ /////////////////////////////////////
//!         SUBMITTING TO STORAGE         \\
//~ /////////////////////////////////////
function handleSubmit(e) {
  e.preventDefault();
  const strength = getStrengthValue();
  const species = getSpeciesValue();

  const newEntry = {
    systemName: systemName.value,
    systemAddress: portalAddress,
    classification: selectClassification.value,
    stars: starCount.value,
    economy: economyType.value,
    strength: strength,
    species: species,
    notes: notes.value,
  };

  const storedEntries = getStoredEntries();

  if (!systemName.value || portalAddress.length !== 12) {
    alert("Please provide all required information.");
  } else {
    storedEntries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(storedEntries));
    modal.style.display = "flex";
    container.style.display = "none";
    clearUI();
  }
}

//~ /////////////////////////////////////
//!         EVENT LISTENERS         \\
//~ /////////////////////////////////////
portalGlyphs.forEach((glyph) => glyph.addEventListener("click", chooseGlyph));

addBtn.addEventListener("click", handleSubmit);

okBtn.addEventListener("click", () => {
  storedAddresses.style.display = 'flex';
  modal.style.display = "none";
});

document
  .querySelector(".close-form")
  .addEventListener("click", () => (container.style.display = "none"));

newChildren.forEach((child) => {
  child.addEventListener("click", () => {
    container.style.display = "flex";
    storedAddresses.style.display = 'none';

  });
});

document
  .querySelector(".see-entries")
  .addEventListener("click", displayFiveEntries);

  // window.addEventListener('DOMContentLoaded', displayFiveEntries)
