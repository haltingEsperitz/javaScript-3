let a = 0;

function setup() {
  background(255);
  noStroke();
  fill(102);
}

function draw() {
  rect(a++ % width, 10, 2, 80);
}