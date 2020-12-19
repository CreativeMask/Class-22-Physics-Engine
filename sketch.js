const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var staticy ={
    isStatic : true
  }

  var bounce = {
    restitution : 1
  }
  
  ground = Bodies.rectangle(200,390, 1000, 50, staticy);

  World.add(world,ground)
  
  ball = Bodies.circle(200,100,30, bounce);
  World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x, ground.position.y, 1000,50);
  fill(255,0,0);
  ellipse(ball.position.x, ball.position.y, 30,30);
}