var img_fire
var img_coin 
var sprite_img
var edges
var img_treasure

function preload() {
  sprite_img = loadImage("assets/ball.png")
  img_fire = loadImage("assets/fire.png");
  img_coin = loadImage("assets/goldCoin.png")
  img_treasure = loadImage("assets/treasure.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boundry = createSprite(0,0,3400,100)
  block2 = createSprite(72,55,10,400)
  block3 = createSprite(270,253,400,10)
  boundry2 = createSprite(8,810,3400,100)
  block4 = createSprite(72,753,10,400)
  block5 = createSprite(423,681,700,10)
  block6 = createSprite(257,573,10,300)
  block7 = createSprite(467,399,10,300)
  block8 = createSprite(715,408,500,10)
  block10  = createSprite(966,402,600,20)
  block11 = createSprite(966,681,600,20)
  block12 = createSprite(1260,460,10,100)
  block13 = createSprite(1260,633,10,100)
  block14 = createSprite(1261,505,100,10)
  block15 = createSprite(1291,580,190,10)
  block16 = createSprite(1301,407,10,200)
  block17 = createSprite(1388,410,10,350)
  block18 = createSprite(1149,238,400,10)
  block19 = createSprite(1080,310,450,10)
  block20 = createSprite(850,220,10,200)
  block21 = createSprite(1102,115,570,10)
  block22 = createSprite(1486,151,10,400)
  block22.rotation-=70
  block23 = createSprite(1348,238,400,10)
  block24 = createSprite(1530,403,10,340)
  block25 = createSprite(1668,422,10,400)
  block26 = createSprite(1404,631,320,10)
  block26.rotation-=20
  block27 = createSprite(1525,680,350,10)
  block27.rotation-=23
  sprite = createSprite(26,88)
  sprite.addImage(sprite_img)
  sprite.scale = 0.244 
  obstacle1 = createSprite(727,662,20,20)
  obstacle1.velocityY-=10
  obstacle1.shapeColor="red"
  obstacle2 = createSprite(888,660,20,20)
  obstacle2.velocityY-=7
  obstacle2.shapeColor="red"
  obstacle3 = createSprite(1026,668,20,20)
  obstacle3.velocityY-=13
  obstacle3.shapeColor="red"
  treasure = createSprite(136,713)
  treasure.addImage("treasure",img_treasure)
  treasure.scale=0.27
}

function draw() {
background("white");
text(mouseX + ':' + mouseY, mouseX, mouseY)
  drawSprites();
  sprite.velocityX=0
  sprite.velocityY=0

  if(keyDown("W")){
    sprite.velocityY-=5
  }
  if(keyDown("S")){
    sprite.velocityY+=5
  }
  if(keyDown("A")){
    sprite.velocityX-=5
  }
  if(keyDown("D")){
    sprite.velocityX+=5
  }
  edges=createEdgeSprites()
  //createEdgeSprites()
  sprite.bounceOff(edges[0])
  sprite.bounceOff(edges[1])


  sprite.collide(block2);
  sprite.collide(block3);
  sprite.collide(block4);
  sprite.collide(block5);
  sprite.collide(block6);
  sprite.collide(block7);
  sprite.collide(block8);
  sprite.collide(boundry2);
  sprite.collide(block10);
  sprite.collide(block11);
  sprite.collide(block12);
  sprite.collide(block13);
  sprite.collide(block14);
  sprite.collide(block15);
  sprite.collide(block16);
  sprite.collide(block17);
  sprite.collide(block18);
  sprite.collide(block19);
  sprite.collide(block20);
  sprite.collide(block21);
  sprite.collide(block22);
  sprite.collide(block23);
  sprite.collide(block24);
  sprite.collide(block25);
  sprite.collide(block26);
  sprite.collide(block27);
  sprite.collide(boundry);
  obstacle1.bounceOff(block10)
  obstacle1.bounceOff(block11)
  obstacle2.bounceOff(block10)
  obstacle2.bounceOff(block11)
  obstacle3.bounceOff(block11)
  obstacle3.bounceOff(block10)
  if(sprite.isTouching(obstacle1)||sprite.isTouching(obstacle2)||sprite.isTouching(obstacle3)){
   sprite.x=26
   sprite.y=88
  }  

}



