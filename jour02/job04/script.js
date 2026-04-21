let textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  let lettre = event.key;

  if (/^[a-z]$/i.test(lettre)) {
    if (document.activeElement === textarea) {
      textarea.value += lettre + lettre;
    } else {
      textarea.value += lettre;
    }
  }
});
Explication