var car, wall;

var speed, weight;


function setup() {
  createCanvas(800,800);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60, height/2)

  speed = random(55, 200)
  weight=random(400, 1500)
}

function draw() {
  background(255,255,255);  

car.velocityX=speed;

if(car.x/2 < wall.x/2){
  if( speed<100){
    car.shapeColor="green";
  }
  else if(speed>100 && speed<180){
    car.shapeColor="yellow"
  }
  else{
    car.shapeColor="red"
  }
}

  drawSprites();
}