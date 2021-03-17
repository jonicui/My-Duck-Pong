class Paddle {
  constructor(x_) {
    this.x = x_;
    this.y = height / 2;
    this.w = 20;
    this.h = 150;

    this.ychange = 0;
    this.xchange = 0;
  }

  update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  move(steps) {
    this.steps = steps;
    this.ychange = this.steps;
  }

  show() {
    strokeWeight(5);
    stroke(0, 0, 120);
    fill(15, 255, 255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h,20);
  }

}
