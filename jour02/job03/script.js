function addOne() {
  let compteur = document.getElementById("compteur");
  let valeur = parseInt(compteur.textContent);
  valeur++;
  compteur.textContent = valeur;
}

let button = document.getElementById("button");
button.addEventListener("click", addOne);