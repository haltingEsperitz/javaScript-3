let confetti = [];

function setup(){
  createCanvas(1920, 963);

  noStroke();
}

function draw(){
  background('white');
  let t = frameCount / 60;

  for (let i = 0; i < random(5); i++){
    confetti.push(new Flake());
  }
  
  for (let flake of confetti) {
    flake.update(t);
    flake.display();
  }
}

class Flake {

  constructor(){
    this.posX = 0;
    this.posY = random(-50, 0)
    this.initialangle = random(0, 2 * PI);
    this.size = random (2, 10);
    this.radius = sqrt(random(pow(width / 2, 2,)));
    this.color = color(random(255), random(255), random(255));
  }
};
update(time) {
  let w = 0.6;
  let angle = w * time + this.initialangle;
  this.posX = width / 2 + this.radius * sin(angle);

  this.posY += pow(this.size, 0.5);
  if(this.posY > height) {
    let index = flakes.indexOf(this);
    confetti.splice(index, 1);
    flakes.splice(index, 1);
  }
};
