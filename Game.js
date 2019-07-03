"use strict";

function Game(canvas) {
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
  this.contDucks = 0;
  
}

Game.prototype.startGame = function() {
  var loop = () => {
      this.contDucks ++;
    if (this.contDucks > 120) {
      var randomY = Math.random() * this.canvas.height;
      this.contDucks = 0;
      if (Math.random() >= 0.5) {
        var newDuck = new Duck(this.canvas, randomY, "left");
      } else {
        var newDuck = new Duck(this.canvas, randomY, "right");
      }
      this.enemies.push(newDuck);
      
      this.contDucks = 0;
    }

    this.update();

    this.clear();

    this.draw();

    
    

    if (!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  };
  loop();
};

Game.prototype.update = function() {
    this.enemies.forEach(function(Duck) {

        Duck.move();
    })
}
 
Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.enemies.forEach(function(Duck) {
        Duck.draw();
    })
}
/*
// AQUIIIIIII
Game.prototype.checkShot = function() {
  this.enemies.forEach((enemy, index) => {
    var clickEmpty = 0;
    var clickEnemy = 1; 

      if(MouseEvent, clickEnemy) {
          this.enemies.splice(index, 1);
          
        } else if (MouseEvent, clickEmpty) {
        this.player.lives --;
          if(this.player.lives === 0) {
          this.isGameOver = true; 
          }
        }
  })
}
*/
/*
Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
}*/
