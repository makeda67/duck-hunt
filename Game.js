"use strict";

function Game(canvas) {
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
  this.contDucks = 0;
  this.coordinatesMouse = null;
}

Game.prototype.startGame = function() {

  this.player = new Player(this.canvas)
  var loop = () => {
      this.contDucks ++;
    if (this.contDucks > 60) {
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

Game.prototype.checkShot = function(mouseX, mouseY) {
  var isCollision = false;
  this.enemies.forEach((enemy, index) => {
    
    var leftCheck = mouseX >= enemy.x;
    var rightCheck = mouseX <= enemy.x + enemy.width
    var topCheck = mouseY >= enemy.y;
    var bottomCheck = mouseY <= enemy.y + enemy.height;
   
    
    if(leftCheck && rightCheck && topCheck && bottomCheck) {
      //setTimeout(function(){document.body.style.color="white"}, 300);
      this.enemies.splice(index, 1);
      this.player.score += 100;
      var score = document.querySelector('span'); 
      
      score.innerText = this.player.score;  
      isCollision = true;
    }
    
  })
  if(!isCollision){
    this.player.lives--;
    this.player.score -= 300;
    console.log(`Fallado, vidas restantes ${this.player.lives}`)
    if(this.player.lives === 0) {
      this.isGameOver = true; 
    }
  }
  
}


Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
}
