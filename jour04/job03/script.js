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
            </div>
            <hr>
          `;
        });
      }
    })
    .catch(function (error) {
      resultDiv.innerHTML = "<p>Erreur lors du chargement du fichier JSON</p>";
      console.error(error);
    });
});