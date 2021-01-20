
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;
  
   stand1 = new Stand(800,500,200,20);
   stand2 = new Stand(1300,200,100,20);
   box1 = new Box(730,480,20,50);
   box2 = new Box(750,480,20,50);
   box3 = new Box(770,480,20,50);
   box4 = new Box(790,480,20,50);
   box5 = new Box(810,480,20,50);
   box6 = new Box(830,480,20,50);
   box7 = new Box(850,480,20,50);
   box8 = new Box(870,480,20,50);
   box9 = new Box(750,440,20,50);
   box10 = new Box(770,440,20,50);
   box11 = new Box(790,440,20,50);
   box12 = new Box(810,440,20,50);
   box13 = new Box(830,440,20,50);
   box14 = new Box(850,440,20,50);
   box15 = new Box(770,400,20,50);
   box16 = new Box(790,400,20,50);
   box17 = new Box(810,400,20,50);
   box18 = new Box(830,400,20,50);
   box19 = new Box(790,360,20,50);
   box20 = new Box(810,360,20,50);
 box21 = new Box(1280,180,20,50);
 box22 = new Box(1300,180,20,50);
 box23 = new Box(1320,180,20,50);
 box24 = new Box(1290,140,20,50);
 box25 = new Box(1310,140,20,50);
 box26 = new Box(1300,100,20,50);
 polygon = new Polygon(300,400,50);
 slingshot = new Slingshot(polygon.body,{x:300,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);
  fill("yellow");
  textSize(30);
  text("Press space key to get another chance",600,150);
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  polygon.display();
  slingshot.display();

  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x:300,y:400});
		slingshot.attach(polygon.body);
	}
}