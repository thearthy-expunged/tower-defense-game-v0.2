var archerAni, florestaimg, boardimg, arrowimg,archerimg,money_coinimg;
var archer, floresta, arrow,money_coin;
var archers = [],
  arrows = [];
var shootingSpeed = 100;
var money = 50;
function preload() {
  archerAni = loadAnimation(
    "archer0.png",
    "archer1.png",
    "archer2.png",
    "archer3.png"
  );
  florestaimg = loadImage("floresta.png");
  boardimg = loadImage("board.png");
  arrowimg = loadImage("arrow-1.png");
  money_coinimg = loadImage("money_coin.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  floresta = createSprite(width / 2, height / 20 - height / 6, width, height);
  floresta.addImage(florestaimg);
  floresta.scale = 3;
  archer = createSprite(width / 5, height / 5);
  archer.addAnimation("archerANI", archerAni);
  archer.scale = 2;
  archers.push(archer)
  archerimg = createImg("archer0.png")
  archerimg.size(90,90)
  archerimg.position(width/2.6,height/2.5)
  archerimg.mouseClicked(place1)
  imageMode(CENTER);
}

function draw() {
  background(0, 255, 255);
  image(boardimg, width / 2, height / 1.35 + height / 20, width);
  //image(archerimg,width/2.6,height/2.5)
  drawSprites();
  if (frameCount % shootingSpeed == 0) {
    shooting();
    shootingSpeed -= 1;
  }
  if(frameCount%150 == 0){
    money_coin = createSprite(random(width-100,-width+100),height/20)
    money_coin.addImage(money_coinimg)
    money_coin.velocityY = 2 
    money_coin.scale = 2
  }
  for (var i = 0; i < arrows.length; i++) {
    if (arrows[i] >= width) {
      arrows[i].destroy;
    }
  }
  if (shootingSpeed <= 0) {
    shootingSpeed += 100;
  }
  textSize(50);
  text("money:" + money, 150, 150);
}
/*function mouseDragged() {
  archer.x = mouseX;
  archer.y = mouseY;
}*/
function shooting() {
  for(i = 0; i < archers.length; i++){
   arrow = createSprite(archers[i].x, archers[i].y);
  arrow.addImage(arrowimg);
  arrow.scale = 2;
  arrow.velocityX += 5;
  arrows.push(arrow); 
  }
  
}
/*function mouseClicked() {
  if (money > 0) {
    money -= 1;
    shooting();
  }
}*/
function getmoney() {

}
function place1() {
if(money >= 50){
  money-=50
  setTimeout(() => {
  archer = createSprite(mouseX,mouseY)
archer.addAnimation("archerAni",archerAni)
archer.scale = 2
archers.push(archer)
}, 3000);
}
  
}