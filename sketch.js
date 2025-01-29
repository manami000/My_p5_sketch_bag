let size1 = 150;
let size2 = 2428/2;
let size3 = 1500/2;
let counter = 1;



function preload()
{
  alien1 = loadImage("alien3.png");
  bag = loadImage("bag.png");
}


function setup() {
  createCanvas(2428/2, 1500/2);
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
  
  
