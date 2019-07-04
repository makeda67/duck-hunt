'use strict';

function Duck(canvas, randomY, side, level) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.y = randomY - 200;
  this.velocity = 3;
  this.color = "red";
  this.width = 60;
  this.height = 60;
  this.level = level;
  this.img = new Image();
  if (side === "left") {
    this.direction = 1;
    this.x = 0;
    this.img.src = "images/makeda-duck.gif";
  } else {
    this.direction = -1;
    this.x = this.canvas.width;
    this.img.src = "images/makeda-duck2.gif";
  }
}

Duck.prototype.move = function() {
  this.x = this.x + this.direction * (this.velocity + this.level);
};

Duck.prototype.draw = function() {
  // this.ctx.fillStyle = this.color;
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);

  var ctx = this.ctx;
  ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
};
