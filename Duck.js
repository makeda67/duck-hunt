'use strict';

function Duck(canvas, randomY, side, level) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.y = randomY - 200;
  this.velocity = 5;
  this.color = "red";
  this.width = 70;
  this.height = 50;
  this.level = level;
  this.isShot = false;
  this.img = new Image();
  if (side === "left") {
    this.direction = 1;
    this.x = 0;
    this.img.src = "images/left-to-right-spray.png";
  } else if(side === "right"){
    this.direction = -1;
    this.x = this.canvas.width;
    this.img.src = "images/right-to-left-spray.png";
  } else if(side === "down") {
    this.x = this.canvas.width;
    this.img.src = "images/fall.png";
  }
  
}

Duck.prototype.move = function() {
  this.x = this.x + this.direction * (this.velocity + this.level);
  if(this.isShot){
    this.y += 7
    //this.direction = 0;
    this.img.src = "images/fall.png";
  }
};

Duck.prototype.draw = function(tempo) {
  // this.ctx.fillStyle = this.color;
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  if(!this.isShot){
    var newTempo = tempo;
    while(newTempo > 30){
      newTempo -= 29;
    }
      if(newTempo <= 15){
        this.ctx.drawImage(this.img, 130,0,150,100,this.x, this.y, this.width, this.height);
      }else{
        this.ctx.drawImage(this.img, 0,0,130,100,this.x, this.y, this.width, this.height);
      }
  } else {
    this.ctx.drawImage(this.img, this.x, this.y, this.width - 30, this.height);
  }
};
