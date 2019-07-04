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
//this.y = this.y + this.direction * this.velocity;

  if(this.y >= this.canvas.height - 150 && this.upMove === true) {
    this.y = this.y + this.direction * this.velocity;
      } else {
    this.y = this.y +1 * this.velocity;
    console.log('going down')
        if(this.y > this.canvas.height - 100){
            console.log('going down')
            this.y = this.y + this.direction * this.velocity;
        }else if(this.y >= this.canvas.height - 100) {
            this.y = this.y + this.direction * this.velocity;
        }
    this.upMove = false;


  }

//   for(var i = 0; i < 4; i++) {
//     if(this.y >= this.canvas.height - 50) {
//         this.y = this.y + this.direction * this.velocity;
        
//         console.log('Up');
//       } else if (this.y <= this.canvas.height - 50){
//         this.y = this.y + this.direction * this.velocity;
//         console.log('Down');
//         console.log(this.direction);
//         this.upMove = false;
//       }
//   }

//   setInterval(function(){
//     this.y = this.y - this.direction * this.velocity;
//   })
}
Dog.prototype.draw = function() {
        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        var ctx = this.ctx;
        ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
}