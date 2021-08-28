
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground1
var leftside
var rightside
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStartingisStatic:false, 
	restitution:0.3, 
	friction:0,
	density:1.2
}
var ground_options={
	isStatic:true
}
ball=Bodies.circle(260,100,30,ball_options)
ground1=Bodies.rectangle(width/2,670,width,20,ground_options)
leftside=Bodies.rectangle(1100,600,20,120,ground_options)
rightside=Bodies.rectangle(1350,600,20,120,ground_options)
World.add(world,ball)
World.add(world,ground1)
World.add(world,leftside)
World.add(world,rightside)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse (ball.position.x,ball.position.y,30)
  rect (ground1.position.x,ground1.position.y,width,20)
  rect (leftside.position.x,leftside.position.y,20,120)
  rect (rightside.position.x,rightside.position.y,20,120)
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) 
	 { Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }


