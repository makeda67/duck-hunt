'use strict';

function Grass(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.velocity = 0;
    this.color = "red";
    this.width = canvas.width;
    this.height = 350;
    this.y = canvas.height + (canvas.height/5) - this.height;
    this.x = 0;
    this.img = new Image();
    this.img.src= 'images/floor.png';
}


Grass.prototype.draw = function() {
        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        var ctx = this.ctx;
        ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
}