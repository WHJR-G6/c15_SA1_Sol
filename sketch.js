var piggyBank,piggyBankImg;
var coin,coinImg,coin2Img;
const PLAY = 1;
const END =0;
var gameState=PLAY;
var count = 0;

function preload(){
  piggyBankImg=loadImage("pbank.png");
  coinImg=loadImage("coin.png");
  coin2Img = loadImage("coin2.png");
  restart = loadImage("goldcoin.png");
}
function setup() {
  createCanvas(400, 400);

  coin = createSprite(200,100);
  coin.addImage(coinImg);
  coin.scale=0.5;
  
  piggyBank = createSprite(200,300,50,20);
  piggyBank.addImage(piggyBankImg)
  piggyBank.scale =0.5;

  chance=createSprite(330,100,40,40);
  chance.addImage(restart);
  chance.scale=0.1;
  chance.visible = false;

}


function draw() {
  background("lightblue");

 
    chance.visible =false;
    if(mousePressedOver(coin)){
      coin.addImage(coin2Img);
      coin.scale=0.03;
      coin.velocityY = 5;
      count = count +1
      gameState = END;
    }
  

   
 
  drawSprites();
  
}
function reset(){
  
  coin.addImage(coinImg);
  coin.scale=0.5;
  coin.x=200;
  coin.y=100;
  coin.velocityY = 0;
  gameState=PLAY;
}