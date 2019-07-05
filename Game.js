"use strict";

function Game(canvas) {
  this.enemies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
  this.contDucks = 0;
  this.coordinatesMouse = null;
  this.level = 1;
  this.levelScore = 0;
  this.floor = null;
  this.doggo = null;
  this.tempo = 0;
}

Game.prototype.startGame = function() {

  this.player = new Player(this.canvas);
  this.floor = new Grass(this.canvas);
  this.doggo = new Dog(this.canvas);
  var loop = () => {
      this.contDucks ++;
    if (this.contDucks > 60) {
      var randomY = Math.random() * this.canvas.height;
      this.contDucks = 0;
      if (Math.random() >= 0.5) {
        var newDuck = new Duck(this.canvas, randomY, "left", this.level);
      } else {
        var newDuck = new Duck(this.canvas, randomY, "right", this.level);
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
    this.doggo.move();
    this.tempo++;
}
 
Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.enemies.forEach((Duck) =>{
        Duck.draw(this.tempo);
    })
    this.doggo.draw();
    this.floor.draw();
    
}

Game.prototype.checkShot = function(mouseX, mouseY) {
  var isCollision = false;
  this.enemies.forEach((enemy, index) => {
    
    var leftCheck = mouseX >= enemy.x;
    var rightCheck = mouseX <= enemy.x + enemy.width
    var topCheck = mouseY >= enemy.y;
    var bottomCheck = mouseY <= enemy.y + enemy.height;
   
    
    if(leftCheck && rightCheck && topCheck && bottomCheck) {
      var gameSong = new Audio('sound/quack.mp3');
      gameSong.play();
      this.enemies.splice(index, 1);
      this.player.score += 100;
      this.levelScore + 100;
      if(this.levelScore > 700) {
        this.level + 1;
        this.levelScore = 0;
      }
      var score = document.querySelector('span');
      score.innerText = this.player.score;  
      var shadow = document.querySelector('canvas');
      shadow.classList.add('shadow');  
      setTimeout( function() {
        shadow.classList.remove('shadow');
      }, 300);

      
      isCollision = true;
    }
    
  })
  if(!isCollision){
    this.player.lives--;
    this.player.score -= 300;
    console.log(`Fallado, vidas restantes ${this.player.lives}`);
    var lives = document.querySelector('#lives');
    lives.innerText = this.player.lives;
    if(this.player.lives === 0) {
      this.isGameOver = true; 
    }
  }
  
}

// Game.prototype.flash = function() {
//   let showFlash = true;
//   if(showFlash) {
//     this.ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
//   }
//   let isFlash = setInterval(() => {
//     showFlash = false;
//   }, 500);


// }

Game.prototype.gameOverCallback = function(callback) {
    this.onGameOver = callback;
}
