
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dImg;
function preload(){
 dImg=loadImage("d.png")
}

function setup() {
	createCanvas( 1380,400);


	engine = Engine.create();
	world = engine.world;
d=createSprite(700+500+100,height-100,20,20)
d.addImage(dImg)
d.scale=0.5
	//Create the Bodies Here.
downDustbin=new D(700+600+50,height-37,144,17)
lDustbin=new D(588+665-12,height-100,17,150)
rDustbin=new D(822+559,height-120,17,150)
extradustbin=new D(1370,200,1,500)
textraD=new D(700,-100,1400,1)
// ed=new D(2685-1500,700-30-800,70,20)
g=new Ground(1500,height-20,3000,15)
paper=new Paper(40,height-70,70)
	Engine.run(engine);
 // paper.addImage("paperImg")
 
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine)
  background(255);
  lDustbin.display();
  g.display();
  downDustbin.display();
  lDustbin.display();
  rDustbin.display();
  //ed.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-145})
  }
}



