const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;



var gameState = 0;
var boy, boyFrontImg, boyFrontWalk;
var boyBackImg, boyBackWalk;

function preload() {
  backgroundImg = loadImage("./images/Texts/OpenTextBox.gif");
  openScreen = loadImage("images/Rooms/FarView.png");

    //textBoxData = loadJSON("images/Texts/OpenTextBox.json")
    textBoxImg = loadImage("./images/Texts/OpenTextBox.gif");

    doorRoom1 = loadImage("./images/Rooms/Door room -1.png");

    boyFrontImg = loadImage("./images/char/Char-1/front.png");
    boyBackImg = loadImage("./images/char/Char-1/back.png");
}

function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

    bgSprite = createSprite(windowWidth/2, windowHeight/2);
    bgSprite.addImage(openScreen);
    bgSprite.addImage("Door Room 1", doorRoom1);

    boy = createSprite(1275, 890, 50, 50);
    boy.addImage(boyFrontImg);
    boy.addImage("Back", boyBackImg);

    playButton = createButton("Play");
    playButton.position(width / 2 - 130, height / 2 + 95);
    playButton.class("customButton");

}

function draw() {
  background(0);
    Engine.update(engine); 

    drawSprites();

    if(gameState === 0){

        bgSprite.scale = 1.08;

        boy.visible = false;

        

        //text box here//
        //textBox = createSprite(width/2 - 50, height/2 + 50);
        //textBox.addImage(textBoxImg);
        //textBox.scale = 0.8;
        image(textBoxImg, width/2 - 50, height/2 + 50);

        /*textSize(30);
        stroke(212, 175, 55);
        fill(212, 175, 55);
        text("Solve the riddles to befriend the animals", width/2 - 310, height/2 - 65);
        text("and find the treasure", width/2 - 200, height/2 - 20);*/   

        playButton.mousePressed(() => {
            //textBox.visible = false;
            playButton.hide();
            gameState += 1;
        })
        //mousePressed.doorRoom1();
    }

    if (gameState === 1){

        bgSprite.changeImage("Door Room 1");
        bgSprite.scale = 2;
        playButton.hide();

        boy.visible = true;
        boy.changeImage("Back");
        boy.scale = 2;
    } 
}
