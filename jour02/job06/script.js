let konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let userInput = [];

document.addEventListener("keydown", function(event) {
  userInput.push(event.key);

  if (userInput.length > konamiCode.length) {
    userInput.shift();
  }

  if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
    document.body.style.backgroundColor = "#003366";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.innerHTML = "<h1>La Plateforme_</h1>";
  }
});