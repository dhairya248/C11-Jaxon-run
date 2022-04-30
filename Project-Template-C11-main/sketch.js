var path,boy,coin,bomb,energy,leftBoundary,rightBoundary;
var pathImg,boyImg,coinImg,bombImg,energyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadAnimation("coin.png");
  bombImg = loadAnimation("bomb.png");
  energyImg = loadAnimation("energyDrink.png")
}

function setup()
{  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,250);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating bomb
/*bomb=createSprite(200,200);
bomb=createSprite(200,200);
bomb.scale=0.1;
bomb.addAnimation(bombImg);

//create coin
coin=createSprite(200,200);
coin.scale=0.1;
coin.addAnimation(coinImg);*/

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);


leftBoundary=createSprite(10,10,100,800);
rightBoundary=createSprite(390,10,100,800);
rightBoundary.visible = false;
leftBoundary.visible = false;
}

function draw() 
{
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[1]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ) 
  {
    path.y = height/2;
  }

  if(path.y > 400 )
  { 
  path.y = height/2;
  }

  if(path.y > 400 )
  {
path.y = height/2;
}

if(path.y > 400 )
{
  path.y = height/2;
}
  
  drawSprites();
}
