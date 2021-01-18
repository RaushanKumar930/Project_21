var block1, block2, block3, block4;
var music;
var box;
var topEdge,bottomEdge,rightEdge,leftEdge
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
   
    //create 4 different surfaces
    block1=createSprite(90,590,175,20)
    block1.shapeColor="blue"
    block2=createSprite(290,590,175,20)
    block2.shapeColor="green"
    block3=createSprite(490,590,175,20)
    block3.shapeColor="yellow"
    block4=createSprite(690,590,175,20)
    block4.shapeColor="red"

    //create box sprite and give velocity
    box=createSprite(Math.round(random(20,750)),200,30,30)
    box.velocityX=-4
    box.velocityY=5
    box.shapeColor="aqua"
    topEdge=createSprite(400,0,800,5)
    bottomEdge=createSprite(400,600,800,5)
    leftEdge=createSprite(0,300,5,800)
    rightEdge=createSprite(800,300,5,800)
}

function draw() {
    background(120);
    //create edgeSprite
    box.bounceOff(topEdge)
    box.bounceOff(leftEdge)
    box.bounceOff(rightEdge)
    

    drawSprites()
    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box)&&box.bounceOff(block1)){
        box.shapeColor="blue"
    }
    if(block2.isTouching(box)&&box.bounceOff(block2)){
        box.shapeColor="green"
        box.velocityX=0
        box.velocityY=0
        music.stop()
    }
    if(block3.isTouching(box)&&box.bounceOff(block3)){
        box.shapeColor="yellow"
        music.play()
    }
    if(block4.isTouching(box)&&box.bounceOff(block4)){
        box.shapeColor="red"
    }

}
