//class name has to be Capitalized Puck not puck (just to remind myself)
var leftScore = 0;
var rightScore = 0

class Puck {
  constructor(xspeed, yspeed) {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.radius = 26;
  }

  // change ball direction when it hit paddles
  checkPaddleR(paddleR) {
    this.pR = paddleR;
    if (this.x + this.radius > this.pR.x && this.y < this.pR.y + this.pR.h / 2 && this.y > this.pR.y - this.pR.h / 2) {
      this.xspeed *= -1;
    }
  }
  checkPaddleL(paddleL) {
    this.pL = paddleL;
    if (this.x - this.radius < this.pL.x && this.y < this.pL.y + this.pL.h / 2 && this.y > this.pL.y - this.pL.h / 2) {
      this.xspeed *= -1;
    }
  }
  // move the puck
  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  // bringt the puck back to orgin when it exceed the left or right boarder
  reset() {
    this.x = width / 2;
    this.y = height / 2;
  }

  bounce() {
    // collided when puck hit the top and botttom edges
    if (this.y < 0 || this.y > height) {
      this.yspeed = -this.yspeed;
    }
  }

  checkRoundEnd() {
    if ((rightScore == 10) || (leftScore == 10)) {
      noLoop();
      textSize(36);
      var round = text('Game Ended', width / 2 - 180, height / 2 - 100);
      this.newRound()
      this.oneMoreGame();
    }
  }

  newRound() {
    const seaY = 65;
    const seaR = 25;
    strokeWeight(1);
    if (rightScore == 10) {
      ellipse(40, seaY, seaR);
    } else if (leftScore == 10) {
      ellipse(width - 150, seaY, seaR);
    }
    // loop();
  }

  // count two player's score seperated
  // through define two x-axis boarders
  checkScore() {
    if (this.x < 10) {
      leftScore++;
      this.reset();
    } else if (this.x > width - 10) {
      rightScore++;
      this.reset();
    }
  }
  // draw puck
  show() {
    noStroke();
    fill(196, 55, 95);
    ellipse(this.x, this.y, this.radius, this.radius);
    fill(237, 142, 161);
    ellipse(this.x, this.y, this.radius * 0.8, this.radius * 0.8);
  }
}
