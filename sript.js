// b431353da498f660c1a7996d82aba1a8
const API_KEY = "TA_CLE_API";
const url = "https://v3.football.api-sports.io/fixtures?live=all";

async function getLiveScores() {
  try {
    const response = await fetch(url, {
      headers: {
        "x-apisports-key": API_KEY
      }
    });
    const data = await response.json();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Nettoyer avant d'afficher

    data.response.forEach(match => {
      const home = match.teams.home.name;
      const away = match.teams.away.name;
      const score = `${match.goals.home} - ${match.goals.away}`;

      const p = document.createElement("p");
      p.textContent = `${home} vs ${away} → ${score}`;
      resultsDiv.appendChild(p);
    });
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// Appel initial
getLiveScores();

// Mise à jour toutes les 60 secondes
setInterval(getLiveScores, 60000);
