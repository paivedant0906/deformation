var car,wall;
var weight,speed;


function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 30, 30);
  wall=createSprite(750, 200, 40, height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  
  
  car.velocityX=speed;

  if(wall.x-car.x <= (car.width + wall.width)/2){
   car.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if(deformation>180){
     car.shapeColor = "red";
     car.velocityX=0;
   }
    if(deformation<180 && deformation>100){
    car.shapeColor = "yellow";
    car.velocityX=0;
  }
  if(deformation<100){
    car.shapeColor = "green";
    car.velocityX=0;
  }
  }
  drawSprites();
}