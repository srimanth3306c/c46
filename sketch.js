var p1,p2,astroid1,astroid2,astroid3;
var blast,blastimg,space,spaceimg;
var spaceship,spaceimg,laserimg;
var shoot = 0;
var score = 0;
var space,astroidGroup,laserGroup;
var explosionsound,lasersound,explosionImage;

function preload(){
  spaceimg = loadImage("space.png");
  spaceshipimg = loadImage("spaceship.png")  
  laserimg  = loadImage("laser.png");
  explosionImage  = loadImage("blast.png");
  blastimg  = loadImage("blast.png");
  astroid1  = loadImage("as1.png");
  astroid2  = loadImage("as2.png");
  astroid3  = loadImage("as3.png");

  explosionsound = loadSound("explosion.mp3");
  lasersound = loadSound("laser sound.mp3");
}

function setup(){
canvas = createCanvas(1000,700);

space = creatSprite(250,350,30,20);
space.addImage(spaceimg);
space.velocityY = (5+score/10);


spaceship = creatSprite(250,600);
spaceship.addImage(spaceshipimg);
spaceship.scale = 0.6;


p1 = creatSprite(250,600);
p1.setCollider("rectangle",70,-27,5,265);
p1.visible = false;

p2 = creatSprite(250,600);
p2.setCollider("rectangle",70,-24,5,265);
p2.visible = false;



}

function draw(){
background(0);

if(keyDown("space") && shoot<460){
 laser = createsprite(spaceship.x,spaceship.y);
laser.addImage(laserimg);
laser.velocityY = -8;
laser.sound.play();
}

if(keyDown("right") && spaceship.x<1400){
    spaceShip.x = spaceShip.x + 10;
    p1.x = p1.x + 10;
    p2.x = p2.x + 10;

}
    if(keyDown("right") && spaceship.x<1400){
        spaceShip.x = spaceShip.x + 10;
        p1.x = p1.x - 10;
        p2.x = p2.x - 10;
    }    


















}







