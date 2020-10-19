const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon, polygon_img;
var sling;

function preload()
{
  polygon_img = loadImage("Images/polygon1.gif");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //creating polygons
  var options={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
 
  //polygon
  polygon = Bodies.circle(200, 300, 50, options);
  World.add(world, polygon);
  
  //ground
  ground = new Ground(400, 390, 800, 20);
  
  // stand
  stand = new Ground(500, 300, 180, 20);
  
  box1 = new Box(440, 270, 30, 50);
  box2 = new Box(470, 270, 30, 50);
  box3 = new Box(500, 270, 30, 50);
  box4 = new Box(530, 270, 30, 50);
  box5 = new Box(560, 270, 30, 50);
  box7 = new Box(455, 220, 30, 50);
  box8 = new Box(485, 220, 30, 50);
  box9 = new Box(515, 220, 30, 50);
  box10 = new Box(545, 220, 30, 50);
  box12 = new Box(470, 170, 30, 50);
  box13 = new Box(500, 170, 30, 50);
  box14 = new Box(530, 170, 30, 50);
  box16 = new Box(485, 120, 30, 50);
  box17 = new Box(515, 120, 30, 50);
  box18 = new Box(500, 70, 30, 50);
  
  sling = new SlingShot(polygon, {x:100, y:300});
}

function draw() {
  background(201, 222, 245);  
  Engine.update(engine);

  ground.display();

  stand.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box12.display();
  box13.display();
  box14.display();
  box16.display();
  box17.display();
  box18.display();

  image(polygon_img, polygon.position.x, polygon.position.y, 50, 50);

  sling.display();

  //drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
  sling.fly();
}