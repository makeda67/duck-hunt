'use strict';

function Duck(canvas, randomY, side) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.y = randomY;
  this.velocity = 3;
  this.color = "red";
  this.width = 40;
  this.height = 40;
  if (side === "left") {
    this.direction = 1;
    this.x = 0;
  } else {
    this.direction = -1;
    this.x = this.canvas.width;
  }
}

Duck.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Duck.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
