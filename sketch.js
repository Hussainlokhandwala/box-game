var box

function setup() {
 createCanvas(400,400);

 box = createSprite(200,200,40,40);

}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x +3
  
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y -3
  }

  background(30)
  drawSprites()
 

}




