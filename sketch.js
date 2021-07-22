const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var r1;
var r2;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var con1;
var con2;
var con3;
var con4;
var con5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(362.5,100,240,20,roof_options);
    World.add(world,roof);
	r1 = Bodies.rectangle(257.5,0,20,200,roof_options);
    World.add(world,r1);
	r2 = Bodies.rectangle(467.5,0,20,200,roof_options);
    World.add(world,r2);

	var ball_options = {
		restitution: 0.8,
		density:0.2,
		friction:0.01
	  }

		ball1 = Bodies.circle(280,150,20,ball_options);
		ellipseMode(RADIUS);
		World.add(world,ball1);

		con1 = Matter.Constraint.create({
			pointA:{x:280,y:100},
			bodyB:ball1,
			pointB:{x:0,y:0},
			length:150,
			stiffness:0.1
		});
		World.add(world,con1);





		ball2 = Bodies.circle(320,150,20,ball_options);
		ellipseMode(RADIUS);
		World.add(world,ball2);

		con2 = Matter.Constraint.create({
			pointA:{x:320,y:100},
			bodyB:ball2,
			pointB:{x:0,y:0},
			length:150,
			stiffness:0.1
		});
		World.add(world,con2);



		ball3 = Bodies.circle(360,150,20,ball_options);
		ellipseMode(RADIUS);
		World.add(world,ball3);

		con3 = Matter.Constraint.create({
			pointA:{x:360,y:100},
			bodyB:ball3,
			pointB:{x:0,y:0},
			length:150,
			stiffness:0.1
		});
		World.add(world,con3);



		

		ball4 = Bodies.circle(400,150,20,ball_options);
		ellipseMode(RADIUS);
		World.add(world,ball4);

		con4 = Matter.Constraint.create({
			pointA:{x:400,y:100},
			bodyB:ball4,
			pointB:{x:0,y:0},
			length:150,
			stiffness:0.1
		});
		World.add(world,con4);


		ball5 = Bodies.circle(440,150,20,ball_options);
		ellipseMode(RADIUS);
		World.add(world,ball5);

		con5 = Matter.Constraint.create({
			pointA:{x:440,y:100},
			bodyB:ball5,
			pointB:{x:0,y:0},
			length:150,
			stiffness:0.1
		});
		World.add(world,con5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("orange");

  rect(roof.position.x,roof.position.y,230,20);
  rect(r1.position.x,r1.position.y,20,200);
  rect(r2.position.x,r2.position.y,20,200);
  ellipse(ball1.position.x,ball1.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20)
  ellipse(ball3.position.x,ball3.position.y,20)
  ellipse(ball4.position.x,ball4.position.y,20)
  ellipse(ball5.position.x,ball5.position.y,20)
  

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y)
  pop();
  
  //create ellipse shape for multiple bobs here

 
}
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:-5,y:0});
    }
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
