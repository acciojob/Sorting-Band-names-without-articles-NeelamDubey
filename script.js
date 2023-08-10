//your code here
const bandNames = [
  "The Beatles", "Aerosmith", "Led Zeppelin", "The Rolling Stones",
  "Anthrax", "Nirvana", "The Who", "The Eagles", "Metallica"
];

function sortBands(bands) {
  const articles = ["The", "A", "An"];
  
  return bands.sort((a, b) => {
    const nameA = a.replace(new RegExp(`^(${articles.join('|')})\\s+`, 'i'), '');
    const nameB = b.replace(new RegExp(`^(${articles.join('|')})\\s+`, 'i'), '');
    return nameA.localeCompare(nameB);
  });
}

function displayBands(bands) {
  const sortedBands = sortBands(bands);
  const ul = document.createElement("ul");
  ul.id = "band";

  sortedBands.forEach(band => {
    const li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

displayBands(bandNames);

