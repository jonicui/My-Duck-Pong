/*
Assignment:pong
Student: *Hongyu Cui* I code all by myself
Pasadena City College, Spring 2020
Prof. Masood Kamandy
Project Description: This program is a recreation of
game pong with code.
Concept: My pong game is based on the kid's bath time. I intend to
make the game cute and fun through add fun elements in its UI, such
as sea stars and shells.The canvas is in dark blue to indicate the
water and by lighten the paddle and use complementary color yellow
for the texts and the duck

Last Modified: Jun 1, 2020

Reference:
*coding train coding challenge #67: Pong -- Danniel Shiffman
(use to clone the Pong)
*9.10: Reset a Sketch with Button Click -- Danniel Shiffman
(use to create a button to  reset the game)
*3.4: Boolean Variables -- Danniel Shiffman
(use to create a switch to turn on the seaFood)
"State machine"
*/

//imgs
var bDuck;

var textY = 40;
var gameScoreL;
var gameScoreR;

//ball speed
var xspeed;
var yspeed;

// posX of paddles
var pLx = 15;
var pRx = 1200 - 15;


// preload duck img
function preload() {
  bDuck = loadImage('img/duck.svg');
}

function setup() {
  createCanvas(1200, 800);

  //  reset button
  resetSketch(); // click bring everything back to the orgin
  var reset = createButton("Reset");
  reset.mouseClicked(resetSketch);
  reset.position(280, 60);
  reset.size(100, 50);
}


// 自己新建一个 function
function resetSketch() {
  //  draw duck, ball and paddles
  xspeed = random(-20, 20);
  yspeed = random(-3, 3);
  bgDuck = new BgDuck();
  puck = new Puck(xspeed, yspeed);
  left = new Paddle(pLx);
  right = new Paddle(pRx);
  rightScore = 0;
  leftScore = 0;
}

function draw() {
  background(0, 55, 125);
  //  duck move
  bgDuck.update();
  bgDuck.show(bDuck);

  // ball collide
  puck.checkPaddleL(left);
  puck.checkPaddleR(right);
  puck.update();
  puck.bounce();

  // draw scores
  // the scores gain are reverse to the edges
  textFont('Fredoka One'); // set font family
  fill(200, 200, 0);
  textSize(22);
   gameScoreL = text('Left Score: ' + rightScore, 33, textY);
   gameScoreR = text('Right Score: ' + leftScore, width - 180, textY);
  // game stage
  puck.checkRoundEnd();
  puck.checkScore();
  puck.newRound();
  puck.show();

  // move paddles
  left.show();
  right.show();
  left.update();
  right.update();
}

//  老师的指导
// Write if statement that tests is if endGame is true/false.
// Write if statement that checks what the score is,
// OR just pass the score number into the score class.

// the movement stop when you release the key
function keyReleased() {
  left.move(0);
  right.move(0);
}

// the paddle will keep moving until you release it
function keyPressed() {
  // left player control keys
  if (key == 'w') {
    left.move(-10);
  } else if (key == 's') {
    left.move(10);
  }
  // right player control keys
  if (keyCode == UP_ARROW) {
    right.move(-10);
  } else if (keyCode == DOWN_ARROW) {
    right.move(10);
  }
}
