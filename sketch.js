let size1 = 100;
let counter = 1;
let alien1, bag;

function preload() {
  alien1 = loadImage("alien3.png");
  bag = loadImage("bag.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Make canvas fit the iframe size
  background(bag);
  
  alien1.resize(size1, size1);
  bag.resize(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  if (counter == 1) {
    image(alien1, mouseX - size1 / 2, mouseY - size1 / 2);
  }
}

function mouseClicked() {
  clear();
  background(255);
  
  if (counter == 1) {
    counter = 1;
    background(bag);
  }
}

// Resize canvas when the window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bag);
}
