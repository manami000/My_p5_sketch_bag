let size1 = 150;
let size2 = 1214;
let size3 = 750;
let counter = 1;



function preload()
{
  alien1 = loadImage("alien3.png");
  bag = loadImage("bag.png");
}


function setup() {
  createCanvas(1214, 750);
  background(bag);
  alien1.resize(size1, size1);
  bag.resize(size2, size3);

  noCursor();
  
}

function draw() {
  
  // background(bag,5);
  if (counter == 1)
    {
      image(alien1, mouseX-size1/2, mouseY-size1/2)
    }


  
    
  
}

function mouseClicked()
{
  clear();
  background(255);
  if (counter == 1)
  
  {
      counter = 1;
    background(bag);
    }
  
}
  
  
