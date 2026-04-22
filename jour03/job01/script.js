$(document).ready(function() {
  $("#show-text").on("click", function() {
    $("#citation").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.").show();
  });

  $("#hide-text").on("click", function() {
    $("#citation").hide();
  });
});