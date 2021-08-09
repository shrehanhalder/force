
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

	//Create the Bodies Here.
    var ball_options = {
		restitution:0.3
	}
    ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw(){
  background(0);
  ellipse(ball.position.x,ball.position.Body,20);
  groundObj.display();
  Engine.update(engine);
}



