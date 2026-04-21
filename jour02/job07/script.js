let darkMode = false;

function changeTheme() {
  if (darkMode === false) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkMode = false;
  }
}

let button = document.getElementById("toggle-theme");
button.addEventListener("click", changeTheme);