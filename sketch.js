
var sword, swordImg, fruitGroup, enemyGroup, appleFruit, pearFruit, enemy1, enemy2, randomDisplay, orangeFruit, bananaFruit;

var orangeImg, appleImg,pearImg, bananaImg, enemy1Img, enemy2Img;

var score = 0, gameOver, gameOverImg;

var PLAY=1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  swordImg= loadAnimation("sword.png");
  
  orangeImg = loadAnimation("fruit1.png");
  
  appleImg = loadAnimation("fruit2.png");
  
  pearImg = loadAnimation("fruit3.png");
  
  bananaImg = loadAnimation("fruit4.png");
  
  enemy1Img = loadAnimation("alien1.png");
  
  enemy2Img = loadAnimation("alien2.png");
  
  gameOverImg = loadAnimation("gameover.png");                          
}

function setup(){
  
  createCanvas (windowWidth,windowHeight);
  
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  //sword is created
  sword = createSprite(200,100,10,10);
  sword.setCollider("rectangle", 25,-30, 50,50, 35);
  sword.scale = 0.5;
  sword.addAnimation("sword", swordImg);
  
  gameOver = createSprite(width/2,height-400,20,20); 
   gameOver.addAnimation("over", gameOverImg);

  
}

function draw(){
  background("pink");
 
  
  if(gameState === PLAY){ 
    sword.y = mouseY;
    sword.x = mouseX;
    fruit(); 
    enemies();
    gameOver.visible=false;
    
    if (sword.isTouching(fruitGroup)){
      score ++; 
      fruitGroup.destroyEach();
      
      
      
    }
    
    if (sword.isTouching(enemyGroup)){
      gameState = END; 
    }
        
   if(keyDown("R")&&gameState===END){
      gameState=PLAY;
      score=0;
      
     
    }
  }
  
  if (gameState === END){
    fruitGroup.destroyEach(); 
    enemyGroup.destroyEach();
    
    gameOver.visible=true;
    
}
  
  drawSprites();
  
  
  fill("black");
  textSize(20);
  text("Score: " + score, width/3,height-780);  
  
  randomDisplay = Math.round(random(30,370));
  var position = Math.round(random(1,2));
  
  function orange(){ 

    orangeFruit = createSprite(randomDisplay,420,100,2);
    orangeFruit.scale = 0.2;
    orangeFruit.velocityY = -(8+score/100);
    orangeFruit.addAnimation("orange", orangeImg); 
    orangeFruit.lifetime = 220; 
    
    if (position === 1){
      orangeFruit.x = 400;
      orangeFruit.velocityY = -(7+score/4);
    }
    
    fruitGroup.add(orangeFruit); 
  }
  
  function apple(){  
 
    appleFruit = createSprite(randomDisplay,420,10,10);
    appleFruit.scale = 0.2;
    appleFruit.addAnimation("apple", appleImg);
    appleFruit.velocityY = -(8+score/100);
    appleFruit.lifetime = 220;
    fruitGroup.add(appleFruit);
    
  }
  
  function pear(){ 
   
    pearFruit = createSprite(randomDisplay,420,10,10);
    pearFruit.scale = 0.2;
    pearFruit.addAnimation("pear", pearImg);
    pearFruit.velocityY = -(8+score/100);
    pearFruit.lifetime = 220;
    fruitGroup.add(pearFruit);
    
  }
  
  function banana(){  

    bananaFruit = createSprite(randomDisplay,420,10,10);
    bananaFruit.scale = 0.18;
    bananaFruit.addAnimation("banana", bananaImg);
    bananaFruit.velocityY = -(8+score/100);
    bananaFruit.lifetime = 220;
    fruitGroup.add(bananaFruit);
    
  }
  
  function enemy_1(){ 
    
    enemy1 = createSprite(randomDisplay,420,10,10);
    enemy1.addAnimation("enemy1", enemy1Img);
    enemy1.velocityY = -(8+score/100);
    enemy1.lifetime = 220;
    enemyGroup.add(enemy1); 
    
  }
  
  function enemy_2(){ 

    enemy2 = createSprite(randomDisplay,420,10,10);
    enemy2.addAnimation("enemy2", enemy2Img);
    enemy2.velocityY = -(8+score/100);
    enemy2.lifetime = 220;
    enemyGroup.add(enemy2);
    
  }
  
  function fruit(){ 
    
    if (frameCount % 40 ===0){
      var select_fruit = Math.round(random(1,4));
      switch(select_fruit){
        case 1: orange();
                break;
        case 2: apple()
                break;
        case 3: pear();
                break;
        case 4: banana();
                break;
        default: break;
        
      }
    
    }
     
  }
  
  function enemies(){ 
    
    if (frameCount%100 === 0){
      var select_enemy = Math.round(random(1,2));
      switch(select_enemy){
        case 1: enemy_1();
                break;
        case 2: enemy_2();
                break;
        default: break;
        
      }
                
    }
    
  }
    
}