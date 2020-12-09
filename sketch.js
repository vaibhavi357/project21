var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 200, 50);
 bullet.shapeColor = "white";
  bullet.velocityX = 3;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  height = random(55, 90);
  weight = random(30, 52);
  thickness = random(22, 83);
  
}

function draw() {
  background(25);

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  }

  if (damage > 10) {
    bullet.shapeColor = color(255, 0, 0);
  }

  if (damage < 10) {
    bullet.shapeColor = color(0, 255, 0);
  }

  drawSprites();
  hasCollided();

}

function hasCollided(bullet, wall) {
    bulletRightEdge = bullet.x + bullet.weight;
    wallLeftEdge = wall.x;

    if (bulletRightEdge >= wallLeftEdge) {
      return true
    }else {
      return false;
    }
}