 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 
 
function preload()
{
   //preload the images here
   fairyimg=loadImage("images/fairy1.png");
   backgroundimg=loadImage("images/starnight.png");
   starimg=loadImage("images/star.png");

}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world=engine.world;
  var star_option={
    restitution:1.0
  }

  starbackground=createSprite(400,375,20,20,star_option);
  starbackground.addImage(backgroundimg);
  starbackground.scale=0.5;
  World.add(world,starbackground);

  fairy=createSprite(50,650,20,20);
  fairy.addImage(fairyimg);
  fairy.scale=0.1;
  World.add(world,fairy);

  star=createSprite(600,50,20,20);
  star.addImage(starimg);
  star.scale=0.1;
  World.add(world,star);

  

}


function draw() {
  background("black");
  if(keyCode===RIGHT_ARROW){
    fairy.velocityX=5}

    if(keyCode===DOWN_ARROW){
      star.velocityY=5
      fairy.velocityX=0;}
    if(star.isTouching(fairy)){
      star.velocityY=0
    }

  
  drawSprites();
}
