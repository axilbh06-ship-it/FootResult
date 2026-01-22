// Exemple de résultats fictifs
const matches = [
  { equipe1: "Real Madrid", equipe2: "Barcelone", score: "2 - 1" },
  { equipe1: "PSG", equipe2: "OM", score: "3 - 0" },
  { equipe1: "Liverpool", equipe2: "Chelsea", score: "1 - 1" }
];

const resultsDiv = document.getElementById("results");

matches.forEach(match => {
  const p = document.createElement("p");
  p.textContent = `${match.equipe1} vs ${match.equipe2} → ${match.score}`;
  resultsDiv.appendChild(p);
});
