var color = [
  "red",
  "green",
  "cyan",
  "black",
  "voilet",
  "blue",
  "yellow",
  "purple",
  "orange",
  "lightgreen",
  "lemon",
];
var index = 0;
var isTriangle = false;

var Shape = document.getElementById("changeshape");
var Colour = document.getElementById("changecolor");

Shape.addEventListener("click", changeShape);
Colour.addEventListener("click", changeColor);

function changeColor() {
  if (index === color.length) {
    index = 0;
  }
  document.getElementById("circle").style.backgroundColor = color[index];
  index++;
}

function changeShape() {
  if (!isTriangle) {
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle";
    isTriangle = true;
  } else {
    var i = document.getElementsByClassName("triangle")[0];
    i.className = "inner";
    isTriangle = false;
  }
}
