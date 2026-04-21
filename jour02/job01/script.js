function citation() {
  let article = document.getElementById("citation");
  console.log(article.textContent);
}

let button = document.getElementById("button");
button.addEventListener("click", citation);