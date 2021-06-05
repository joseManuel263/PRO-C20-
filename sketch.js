var canvas;
var ground;
var gato, gatoImg, gatoImg1, gatoImg2;
var raton, ratonImg, ratonImg1, ratonImg2;

function preload() {
    //Carga aqui las imagenes
    ground=loadImage("images/garden.png");
    gatoImg = loadAnimation("images/tomOne.png");
    gatoImg1 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    gatoImg2 = loadAnimation("images/tomFour.png");
    ratonImg = loadAnimation("images/jerryOne.png");
    ratonImg1 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    ratonImg2 = loadAnimation("images/jerryFour.png");

}
function setup(){
    canvas = createCanvas(1000,800);
    //Crea aqui los sprites de tom y jerry
    gato = createSprite(870, 600);
    gato.addAnimation("gatoImg",gatoImg);
    gato.scale = 0.2;

    raton = createSprite(200, 600);
    raton.addAnimation("ratonImg",ratonImg);
    raton.scale = 0.15;
}
function draw() {
    background(ground);
    //Escribe aqui la condicion para evaluar si tom y jerry chocan
    if(gato,x - raton.x < (gato.width - raton.width)/2){
        gato.addAnimation("gatoImg2",gatoImg2);
        gato.changeAnimation("gatoImg2")
        gato.scale=0.2;
        gato.velocityX=0;
        gato.x=300;
        raton.addAnimation("ratonImg2",ratonImg2);
        raton.changeAnimation("ratonImg2");
        raton.scale=0.15;
    }
    keyPressed();
    drawSprites();
}
function keyPressed(){
    //Escribe aqui el codigo para la animacion de movimiento y cambio
    if(keyCode==LEFT_ARROW){
        raton.addAnimation("ratonmg1",ratonImg1);
        raton.changeAnimation("ratonmg1");
        raton.frameDelay = 25;
        gato.addAnimation("gatoImg1",gatoImg1);
        gato.changeAnimation("gatoImg1");
    }
}