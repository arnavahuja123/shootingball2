const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	Image.upload;
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,200, 20);
	ground1 = new Ground(200,330,10,10);
	dustbin1 = new Dustbin(240,280,50,150);
	dustbin2 = new Dustbin(288,305,150,50);
	dustbin3 = new Dustbin(320,280,50,150);
	Engine.run(engine);
  keypressed();
}


function draw() {
  background(0);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-60});
	}
}



