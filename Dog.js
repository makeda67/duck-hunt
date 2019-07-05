'use strict';
function Dog(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.velocity = 3;
    this.direction = -1;
    this.color = "red";
    this.width = 80;
    this.height = 80;
    this.y = canvas.height + 150;
    this.x = canvas.width / 2;
    this.img = new Image();
    this.img.src= 'images/doggo.png';
    this.upMove = true;
}

Dog.prototype.move = function() {
    if(this.y >= this.canvas.height - 180 && this.upMove === true) {
      this.y = this.y + this.direction * this.velocity;
    } else {
      this.y = this.y +1 * this.velocity;
      this.upMove = false;
      if(this.y > this.canvas.height - 160){
        this.y = this.canvas.height - 160
        this.upMove = true
      }
    }
  }
Dog.prototype.draw = function() {
  var ctx = this.ctx;
  ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
}