
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var land;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(20, 50, 50);
	land = new Ground(600,height,1200,20);

	
	Engine.run(engine);
  
}


function draw() {
 
  background(140, 20, 20);
  Engine.update(engine);
  ball.display();
  land.display();

  
 
}



