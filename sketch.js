const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,fly,hero,monsterImg;
var monster;


function preload() {
background = loadImage("images/GamingBackground.png");
monsterImg = loadImage("images/Monster-01");

}

function setup() {
  createCanvas(3000, 800);

  monster = createSprite(400,700);
  monster.addImage(monsterImg);

  hero = new Hero(200,400);
  ground = new Ground(250,400);

}

function draw() {
  background(0);

  monster.display;
  hero.display;

}

