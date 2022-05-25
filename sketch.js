var canvas;
var backgroundImage, bgImg, carroimg1, carroimg2, estradaimg;
var database, gameState;
var form, player, playerCount;
var allPlayers, carro1, carro2;
var carros = [];
var playerIndice;
var moeda, moedaGrupo;
function preload() {
  backgroundImage = loadImage("planodefundo.png");
  
  carroimg1 = loadImage("car1.png");
  carroimg2 = loadImage("car2.png");
  estradaimg = loadImage("pista.png");
  moeda = loadImage("moeda.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 
  background(backgroundImage);
  
  
  if(playerCount ==2){
    game.update(1);
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
