const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState, engine, world, dustbin, paper;


function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	
	ground = new Ground(width-10, 10, width-20, 10);
	
  
}


function draw() {
	if (gameState === "start") {
		background("green");
		drawSprites();
		textSize(20);
		text("This is small game that will teach you the importance of throwing away your trash. \n");
		ground.display();

}



