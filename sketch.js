const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,top
var ball
var btn1

function preload(){
  ball = Bodies.circle(200,200,20,options)
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
ground = new Ground(200,390,400,20)
left = new Ground(10,200,20,400)
right = new Ground(390,200,20,400)
top_wall = new Ground(200,10,400,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  var ball_ops = {
    restitution:0.5
    }



    World.add(world,ball)

btn1 = createImg("push.png")
btn1.position(50,50)
btn1.size(30,30)
btn1.mouseClicked(hforce)

  }

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  left.show()
  right.show()
  top_wall.show()

  ellipse(ball.position.x,ball.position.y,20)
  
}
function hforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}