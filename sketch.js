var hypnoticBall, database;
var position;
var dog1img,dog2img;
var FoodS;

function preload(){

dog1img = loadImage("Dog.png");
dog2img = loadImage("happydog.png");

}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dog1img);
  dog.scale = 0.15;
  Foodstock = database.ref('Food');
  Foodstock.on+("value",readstock);

}

function draw(){
  background("white");
  
    if(keyWentDown(UP_ARROW)){
      writeStock(FoodS);

      dog.addImage(dog2img);

    }
    drawSprites();
    text("Food_Remaining"+ FoodS ,170,200);
  
}

function writeStock(x){

  if(x<=0){

    x = 0;

  }else {

    x=x-1;

  }

  database.ref('/').update({

    Food:x

  }) 
}

function readstock(data){

FoodS = data.val();

}
