window.addEventListener("scroll", function() {
  let footer = document.getElementById("footer");

  let scrollTop = window.scrollY;
  let hauteurTotale = document.documentElement.scrollHeight - window.innerHeight;
  let pourcentage = (scrollTop / hauteurTotale) * 100;

  let rouge = Math.min(255, Math.floor((pourcentage / 100) * 255));
  footer.style.backgroundColor = `rgb(${rouge}, 0, 0)`;
});