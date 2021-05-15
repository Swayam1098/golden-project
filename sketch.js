var Swayam,swayamImage;
var monster1, monster2, monster3, monster4,monster5,monster6,monster7,monster8,monster9,monster10,monster11,monster12,monster13,monster14,monster15
var monster1Image,monster2Image,monster3Image,monster4Image,monsterGroup
var apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12,apple13,apple14,apple15,apple16,apple17,apple18,apple19,apple20,apple21,apple22,apple23,apple24,apple25,apple26,appl27,apple28,apple29,apple30,apple31,apple32,apple33
var appleImage,appleGroup
var wallGroup
var door,doorImg
var Score = 0
var gameOver,gameOverImage
var GameState=1
var restart,restartImage

function preload(){
swayamImage=loadImage("images/boy.png")
appleImage=loadImage("images/apple2.png")
monster1Image=loadImage("images/monster1.png")
monster2Image=loadImage("images/monster2.png")
monster3Image=loadImage("images/monster3.png")
monster4Image=loadImage("images/monster4.png")
doorImg=loadImage("images/door.png")
gameOverImage=loadImage("images/gameover.jpg")
restartImage=loadImage("images/restart.png")
}

function setup(){
createCanvas(800,600)


Swayam = createSprite(280,200,10,10)
Swayam.addImage(swayamImage)
Swayam.scale=0.2
Swayam.debug=true
Swayam.setCollider("rectangle",0,0,100,150)


wallGroup=new Group()

wall1=createSprite(5,300,15,600)
wallGroup.add(wall1)
wall2=createSprite(600,300,15,600)
wallGroup.add(wall2)
wall3=createSprite(300,0,600,15)
wallGroup.add(wall3)
wall4=createSprite(300,600,600,15)
wallGroup.add(wall4)
wall5=createSprite(300,15,15,50)
wallGroup.add(wall5)
wall6=createSprite(200,50,50,15)
wallGroup.add(wall6)
wall7=createSprite(100,50,50,15)
wallGroup.add(wall7)
wall8=createSprite(30,50,40,15)
wallGroup.add(wall8)
wall9=createSprite(350,50,50,15)
wallGroup.add(wall9)
wall10=createSprite(450,50,50,15)
wallGroup.add(wall10)
wall11=createSprite(520,50,40,15)
wallGroup.add(wall11)
wall12=createSprite(30,100,40,15)
wallGroup.add(wall12)
wall13=createSprite(520,100,40,15)
wallGroup.add(wall13)
wall14=createSprite(300,100,200,15)
wallGroup.add(wall14)

wall15=createSprite(120,200,15,150)
wallGroup.add(wall15)
wall16=createSprite(200,190,150,15)
wallGroup.add(wall16)
wall17=createSprite(470,200,15,150)
wallGroup.add(wall17)
wall18=createSprite(400,190,150,15)
wallGroup.add(wall18)
wall19=createSprite(60,200,15,100)
wallGroup.add(wall19)
wall20=createSprite(530,200,15,100)
wallGroup.add(wall20)
wall21=createSprite(130,320,260,15)
wallGroup.add(wall21)
wall22=createSprite(480,320,260,15)
wallGroup.add(wall22)

wall23=createSprite(180,250,15,50)
wallGroup.add(wall23)
wall24=createSprite(250,250,15,50)
wallGroup.add(wall24)
wall25=createSprite(350,250,15,50)
wallGroup.add(wall25)
wall26=createSprite(420,250,15,50)
wallGroup.add(wall26)
//wall27=createSprite(300,250,50,15)


wall28=createSprite(300,585,15,50)
wallGroup.add(wall28)

wall29=createSprite(200,550,50,15)
wallGroup.add(wall29)
wall30=createSprite(100,550,50,15)
wallGroup.add(wall30)
wall31=createSprite(30,550,40,15)
wallGroup.add(wall31)
wall32=createSprite(350,550,50,15)
wallGroup.add(wall32)
wall33=createSprite(450,550,50,15)
wallGroup.add(wall33)
wall34=createSprite(520,550,40,15)
wallGroup.add(wall34)

wall35=createSprite(30,485,40,15)
wallGroup.add(wall35)
wall36=createSprite(520,485,40,15)
wallGroup.add(wall36)
wall37=createSprite(300,485,250,15)
wallGroup.add(wall37)
wall38=createSprite(120,430,15,150)
wallGroup.add(wall38)
wall39=createSprite(200,400,150,15)
wallGroup.add(wall39)
wall40=createSprite(470,430,15,150)
wallGroup.add(wall40)
wall41=createSprite(400,400,150,15)
wallGroup.add(wall41)
wall42=createSprite(60,400,15,100)
wallGroup.add(wall42)
wall43=createSprite(530,400,15,100)
wallGroup.add(wall43)

appleGroup = new Group()
apple1 = createSprite(30,30,10,10)
apple1.addImage(appleImage)
apple1.scale=0.5
appleGroup.add(apple1)

apple2= createSprite(250,30,10,10)
apple2.addImage(appleImage)
apple2.scale=0.5
appleGroup.add(apple2)

apple3= createSprite(350,30,10,10)
apple3.addImage(appleImage)
apple3.scale=0.5
appleGroup.add(apple3)

apple4= createSprite(570,30,10,10)
apple4.addImage(appleImage)
apple4.scale=0.5
appleGroup.add(apple4)

apple5 = createSprite(100,80,10,10)
apple5.addImage(appleImage)
apple5.scale=0.5
appleGroup.add(apple5)

apple6 = createSprite(480,80,10,10)
apple6.addImage(appleImage)
apple6.scale=0.5
appleGroup.add(apple6)

apple7 = createSprite(300,80,10,10)
apple7.addImage(appleImage)
apple7.scale=0.5
appleGroup.add(apple7)

apple8 = createSprite(150,170,10,10)
apple8.addImage(appleImage)
apple8.scale=0.5
appleGroup.add(apple8)

apple9 = createSprite(450,170,10,10)
apple9.addImage(appleImage)
apple9.scale=0.5
appleGroup.add(apple9)

apple10 = createSprite(300,130,10,10)
apple10.addImage(appleImage)
apple10.scale=0.5
appleGroup.add(apple10)

apple11 = createSprite(30,200,10,10)
apple11.addImage(appleImage)
apple11.scale=0.5
appleGroup.add(apple11)

apple12 = createSprite(570,200,10,10)
apple12.addImage(appleImage)
apple12.scale=0.5
appleGroup.add(apple12)

apple13 = createSprite(150,250,10,10)
apple13.addImage(appleImage)
apple13.scale=0.5
appleGroup.add(apple13)

apple14 = createSprite(450,250,10,10)
apple14.addImage(appleImage)
apple14.scale=0.5
appleGroup.add(apple14)

apple15 = createSprite(100,300,10,10)
apple15.addImage(appleImage)
apple15.scale=0.5
appleGroup.add(apple15)

apple16 = createSprite(500,300,10,10)
apple16.addImage(appleImage)
apple16.scale=0.5
appleGroup.add(apple16)

apple17 = createSprite(300,250,10,10)
apple17.addImage(appleImage)
apple17.scale=0.5
appleGroup.add(apple17)

apple18 = createSprite(30,570,10,10)
apple18.addImage(appleImage)
apple18.scale=0.5
appleGroup.add(apple18)

apple19 = createSprite(250,570,10,10)
apple19.addImage(appleImage)
apple19.scale=0.5
appleGroup.add(apple19)

apple20 = createSprite(350,570,10,10)
apple20.addImage(appleImage)
apple20.scale=0.5
appleGroup.add(apple20)

//apple21 = createSprite(570,570,10,10)
//apple21.addImage(appleImage)
//apple21.scale=0.5
//appleGroup.add(apple21)

apple22 = createSprite(100,530,10,10)
apple22.addImage(appleImage)
apple22.scale=0.5
appleGroup.add(apple22)

apple23 = createSprite(480,530,10,10)
apple23.addImage(appleImage)
apple23.scale=0.5
appleGroup.add(apple23)

apple24 = createSprite(300,510,10,10)
apple24.addImage(appleImage)
apple24.scale=0.5
appleGroup.add(apple24)

apple25 = createSprite(150,420,10,10)
apple25.addImage(appleImage)
apple25.scale=0.5
appleGroup.add(apple25)

apple26 = createSprite(450,420,10,10)
apple26.addImage(appleImage)
apple26.scale=0.5
appleGroup.add(apple26)

apple27 = createSprite(300,460,10,10)
apple27.addImage(appleImage)
apple27.scale=0.5
appleGroup.add(apple27)

apple28 = createSprite(100,340,10,10)
apple28.addImage(appleImage)
apple28.scale=0.5
appleGroup.add(apple28)

apple29 = createSprite(500,340,10,10)
apple29.addImage(appleImage)
apple29.scale=0.5
appleGroup.add(apple29)

apple30 = createSprite(30,400,10,10)
apple30.addImage(appleImage)
apple30.scale=0.5
appleGroup.add(apple30)

apple31 = createSprite(570,400,10,10)
apple31.addImage(appleImage)
apple31.scale=0.5
appleGroup.add(apple31)

apple32 = createSprite(150,380,10,10)
apple32.addImage(appleImage)
apple32.scale=0.5
appleGroup.add(apple32)

apple33 = createSprite(450,380,10,10)
apple33.addImage(appleImage)
apple33.scale=0.5
appleGroup.add(apple33)

door = createSprite(570,570,20,10)
door.addImage(doorImg)
door.scale=0.1


monsterGroup= new Group();

monster1=createSprite(50,300,10,10)
monster1.addImage(monster1Image)
monster1.scale=0.3
monster1.shapeColor="blue"
monster1.velocityX=2
monsterGroup.add(monster1)

monster2=createSprite(50,30,10,10)
monster2.addImage(monster1Image)
monster2.scale=0.3
monster2.shapeColor="blue"
monster2.velocityX=2
monsterGroup.add(monster2)

monster3=createSprite(500,30,10,10)
monster3.addImage(monster1Image)
monster3.scale=0.3
monster3.shapeColor="blue"
monster3.velocityX=2
monsterGroup.add(monster3)

monster4=createSprite(300,70,10,10)
monster4.addImage(monster2Image)
monster4.scale=0.1
monster4.shapeColor="blue"
monster4.velocityX=2
monsterGroup.add(monster4)

monster5=createSprite(300,150,10,10)
monster5.addImage(monster2Image)
monster5.scale=0.1
monster5.shapeColor="blue"
monster5.velocityX=2
monsterGroup.add(monster5)

monster6=createSprite(90,200,10,10)
monster6.addImage(monster2Image)
monster6.scale=0.1
monster6.shapeColor="blue"
monster6.velocityY=2
monsterGroup.add(monster6)

monster7=createSprite(500,200,10,10)
monster7.addImage(monster2Image)
monster7.scale=0.1
monster7.shapeColor="blue"
monster7.velocityY=2
monsterGroup.add(monster7)

monster8=createSprite(30,580,10,10)
monster8.addImage(monster3Image)
monster8.scale=0.2
monster8.shapeColor="blue"
monster8.velocityX=2
monsterGroup.add(monster8)

monster9=createSprite(500,580,10,10)
monster9.addImage(monster3Image)
monster9.scale=0.2
monster9.shapeColor="blue"
monster9.velocityX=2
monsterGroup.add(monster9)

monster10=createSprite(300,530,10,10)
monster10.addImage(monster1Image)
monster10.scale=0.3
monster10.shapeColor="blue"
monster10.velocityX=2
monsterGroup.add(monster10)

monster11=createSprite(90,400,10,10)
monster11.addImage(monster4Image)
monster11.scale=0.2
monster11.shapeColor="blue"
monster11.velocityY=2
monsterGroup.add(monster11)

monster12=createSprite(500,400,10,10)
monster12.addImage(monster4Image)
monster12.scale=0.2
monster12.shapeColor="blue"
monster12.velocityY=2
monsterGroup.add(monster12)

monster13=createSprite(300,430,10,10)
monster13.addImage(monster4Image)
monster13.scale=0.1
monster13.shapeColor="blue"
monster13.velocityX=2
monsterGroup.add(monster13)

gameOver=createSprite(400,200,10,10)
gameOver.addImage(gameOverImage)
gameOver.scale=3
gameOver.visible=false

restart=createSprite(700,500,50,50)
restart.addImage(restartImage)
restart.visible=false

}

function draw(){
background("black")

drawSprites()

textSize(30)
text("Score:"+ Score, 650,100)


   
   for(var i = 0; i<appleGroup.length;i++){
       if(appleGroup.get(i).isTouching(Swayam)){
           appleGroup.get(i).destroy()
           Score = Score+10
       }
   }





Swayam.collide(wall1)
Swayam.collide(wall2)
Swayam.collide(wall3)
Swayam.collide(wall4)
Swayam.collide(wall5)
Swayam.collide(wall6)
Swayam.collide(wall7)
Swayam.collide(wall8)
Swayam.collide(wall9)
Swayam.collide(wall10)
Swayam.collide(wall11)
Swayam.collide(wall12)
Swayam.collide(wall13)
Swayam.collide(wall14)
Swayam.collide(wall15)
Swayam.collide(wall16)
Swayam.collide(wall17)
Swayam.collide(wall18)
Swayam.collide(wall19)
Swayam.collide(wall20)
Swayam.collide(wall21)
Swayam.collide(wall22)
Swayam.collide(wall22)
Swayam.collide(wall23)
Swayam.collide(wall24)
Swayam.collide(wall25)
Swayam.collide(wall26)
Swayam.collide(wall26)
//Swayam.collide(wall27)
Swayam.collide(wall28)
Swayam.collide(wall29)
Swayam.collide(wall30)
Swayam.collide(wall31)
Swayam.collide(wall32)
Swayam.collide(wall33)
Swayam.collide(wall34)
Swayam.collide(wall35)
Swayam.collide(wall36)
Swayam.collide(wall37)
Swayam.collide(wall38)
Swayam.collide(wall39)
Swayam.collide(wall40)
Swayam.collide(wall41)
Swayam.collide(wall42)
Swayam.collide(wall43)

monster1.bounceOff(wall1)
monster1.bounceOff(wall2)

monster2.bounceOff(wall1)
monster2.bounceOff(wall5)

monster3.bounceOff(wall2)
monster3.bounceOff(wall5)

monster4.bounceOff(wall2)
monster4.bounceOff(wall1)

monster5.bounceOff(wall15)
monster5.bounceOff(wall17)

monster6.bounceOff(wall7)
monster6.bounceOff(wall21)

monster7.bounceOff(wall13)
monster7.bounceOff(wall22)

monster8.bounceOff(wall1)
monster8.bounceOff(wall28)

monster9.bounceOff(wall2)
monster9.bounceOff(wall28)

monster10.bounceOff(wall1)
monster10.bounceOff(wall2)

monster11.bounceOff(wall21)
monster11.bounceOff(wall30)

monster12.bounceOff(wall22)
monster12.bounceOff(wall36)

monster13.bounceOff(wall38)
monster13.bounceOff(wall40)



if(keyDown(UP_ARROW)){
    Swayam.y=Swayam.y-2

}

if(keyDown(DOWN_ARROW)){
    Swayam.y=Swayam.y+2

}

if(keyDown(RIGHT_ARROW)){
    Swayam.x=Swayam.x+2

}

if(keyDown(LEFT_ARROW)){
    Swayam.x=Swayam.x-2


}

if(Swayam.isTouching(monsterGroup)){
    clear()
    GameState=0
    gameOver.visible=true
    //restart.visible=true
    monsterGroup.setVelocityXEach(0)
    monsterGroup.setVelocityYEach(0)
}

if(Swayam.isTouching(door)){
    clear()
    appleGroup.destroyEach()
    monsterGroup.destroyEach()
    wallGroup.destroyEach()
    background("blue")
    Swayam.x=100
    Swayam.y=100
    //door.destroy()
}



}

