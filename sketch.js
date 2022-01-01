var path,boy
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage("path",pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

}

function draw() {
  background(0);
  drawSprites();
  console.log(boy.mouseX)
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[1]);
  boy.collide(edges[0]);  
if(path.y > 400) {path.y = height/4};
  
  
}
