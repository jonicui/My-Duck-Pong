class BgDuck {
  constructor() {
    this.x = width/2;
    this.y = 0;
    this.angle = 0.0;
    this.speed = 0.01;
    // bounce range
    this.scalar = 350;
    //  set the middle position as orign
    this.offset = 400;
  }

// move the duck back forth in the y-axis
  update() {
    this.yspeed = sin(this.angle) * this.scalar;
    this.y = this.offset + this.yspeed;
    this.angle += this.speed;
  }

// draw the duck in the middle
  show(img) {
    // plz ignore the 4 lines below
      // this.r = 125;
      // rectMode(CENTER);
      // fill(255, 255, 0);
      // rect(this.x + 20, this.y + 10,this.r,this.r);
    this.img = img;
    image(img, this.x - 120, this.y);
  }
}
