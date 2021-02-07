const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var GamingBackground, Monster1, Monster2, Superhero1, Superhero2, fly;

function preload() {
//preload the images here
GamingBackground = addImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  GamingBackground.loadImage("backgroundImg", GamingBackground);
  ground = new Ground(600,height,1200,20);
  Superhero1 = new Hero(500,500,20);
  fly = new Fly(Superhero1, fly);

}

function draw() {
  background(0);

  mouseDragged();
  
  Superhero1.display();
  fly.display();
  ground.display();
}

function mouseDragged() {
    Matter.Body.setPosition(Superhero1.body, {x: mouseX, y: mouseY});
  }