var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    b= width/2-100 ;
	b1s=createSprite (b,600,20,100)
	b1s.shapeColor="red";
    
   b1Body=Bodies.rectangle(b+20,600,20,100,{isStatic:true});
   World.add(world,b1Body);

   b2s=createSprite (b+200,600,20,100)
   b2s.shapeColor="red";
   
  b2Body=Bodies.rectangle(b+200-20,600,20,100,{isStatic:true});
  World.add(world,b2Body);

  b3s=createSprite (b+100,640,200,20);
	b3s.shapeColor="red";
    
   b3Body=Bodies.rectangle(b+100,620,200,20,{isStatic:true});
   World.add(world,b3Body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
 else if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   helicopterSprite.x=helicopterSprite.x-20
	Matter.Body.translate(packageBody,{x:-20,y:0});
     }

	 else if (keyCode === RIGHT_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   helicopterSprite.x=helicopterSprite.x+20
		Matter.Body.translate(packageBody,{x:+20,y:0});
		 }	 
}



