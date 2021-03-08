//collision detection algorithm
/*var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2=createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3=createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4=createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";


}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.y - fixedRect.y);

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor="blue";
    gameObject3.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="yellow";
    gameObject3.shapeColor="yellow";
  }

  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x <  object2.width/2 + object1.width/2 
    && object2.x - object1.x <  object2.width/2 + object1.width/2
    && object1.y - object2.y <  object2.height/2 + object1.height/2 
    && object2.y - object1.y <  object2.height/2 + object1.height/2){
     return true;
  }
  else{
    return false;
  }
}*/

//bouceOff algorithm
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background("black");  
  console.log(movingRect.y - fixedRect.y);

  bounceOff(movingRect,fixedRect);
  drawSprites();
}