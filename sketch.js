var wall;
var bullet;

var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(30,70);
  weight=random(10,30);
  thickness=random(40,80);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet=createSprite(50,200,40,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  
}

function draw() {
  background(0,0,0); 

  if (isTouching(wall,bullet))  {
      
    bullet.velocityX=0;

    var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;

    if(damage>10){

      bullet.shapeColor=color(255,0,0);
    }

    if(damage<10 ){

      bullet.shapeColor=color(0,255,0);
    }


  }

  drawSprites();
}


function isTouching(wall,bullet){

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2
      && bullet.x - wall.x < bullet.width/2 + wall.width/2
      && wall.y - bullet.y < bullet.height/2 + wall.height/2
      && bullet.y - wall.y < bullet.height/2 + wall.height/2){

          return true;
  }
  
   else{
      return false;
   }

}
