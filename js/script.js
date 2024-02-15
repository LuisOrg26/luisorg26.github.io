function changeColor() {
  let button = document.getElementById("btn");
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
}