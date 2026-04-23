document.getElementById("button").addEventListener("click", function () {
  fetch("expression.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      let p = document.createElement("p");
      p.textContent = data;
      document.body.appendChild(p);
    });
});