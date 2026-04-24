document.getElementById("filter").addEventListener("click", function () {
  let id = document.getElementById("id").value.trim();
  let name = document.getElementById("name").value.trim().toLowerCase();
  let type = document.getElementById("type").value;
  let resultDiv = document.getElementById("result");

  fetch("pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let resultats = data.filter(function (pokemon) {
        let matchId = id === "" || pokemon.id == id;
        let matchName = name === "" || pokemon.name.french.toLowerCase().includes(name);
        let matchType = type === "" || pokemon.type.includes(type);

        return matchId && matchName && matchType;
      });

      resultDiv.innerHTML = "";

      if (resultats.length === 0) {
        resultDiv.innerHTML = "<p>Aucun Pokémon trouvé</p>";
      } else {
        resultats.forEach(function (pokemon) {
          resultDiv.innerHTML += `
            <div>
              <p><strong>ID :</strong> ${pokemon.id}</p>
              <p><strong>Nom :</strong> ${pokemon.name.french}</p>
              <p><strong>Type :</strong> ${pokemon.type.join(", ")}</p>
              <p><strong>HP :</strong> ${pokemon.base.HP}</p>
              <p><strong>Attack :</strong> ${pokemon.base.Attack}</p>
              <p><strong>Defense :</strong> ${pokemon.base.Defense}</p>
              <p><strong>Sp. Attack :</strong> ${pokemon.base["Sp. Attack"]}</p>
              <p><strong>Sp. Defense :</strong> ${pokemon.base["Sp. Defense"]}</p>
              <p><strong>Speed :</strong> ${pokemon.base.Speed}</p>
            </div>
            <hr>
          `;
        });
      }
    })
    .catch(function (error) {
      console.error("Erreur :", error);
      resultDiv.innerHTML = "<p>Erreur lors du chargement du fichier JSON.</p>";
    });
});