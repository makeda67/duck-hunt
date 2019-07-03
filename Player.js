'use strict';
function Player(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.lives = 5;
    this.score = 0;
};