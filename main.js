'use strict';
function main() {

   

    var mainElement = document.querySelector('#site-main');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    };
    
    function createSplashScreen () {
        var gameSong = new Audio('sound/duck-hunt-music-title-theme.mp3');
        gameSong.play();
        var splashScreen = buildDom(`
            <section class="StartSection">
                <h1>Shoot the ShitHead</h1>
                <button class="button">Start</button>
            </section>
        `);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function() {
            createGameScreen(gameSong)
        });
        
        
    };
/*
    function createInstructionsScreen () {
        var createInstructionsScreen= buildDom(`
        <section>
            <h1>How to play </h1>
            <p>something around here</p>
            <button>Return</button>
        </section>
        `);
        var returnButton = createInstructionsScreen.querySelector('button');
        returnButton.addEventListener('clicker', createSplashScreen);
    }
*/
    function createGameScreen (gameSong) {
        gameSong.pause();
        // gameSong.currentTime = 0;
        gameSong = new Audio('sound/Duck Hunt Remix Collab 01.mp3');
        gameSong.play();
        
        // var gameSong = new Audio('sound/David Civera - Que La Detengan.mp3');
        // this.gameSong.play()
        
        var gameScreen = buildDom(`
        <section id="gameSection">
        <div class="topGame">
        <p>Score: <span></span></p>
        <p>Lives: <span id="lives"></span></p>
        </div>
            <canvas width="900" height="400"></canvas>
        <div class="bottomGame">
        </section>
        `);

        var canvas = document.querySelector('canvas');

        var game = new Game(canvas);
        
       game.gameOverCallback(function() {
           createGameOverScreen(gameSong);
       });
        
       game.startGame();
        
       function checkCoordinates(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        game.checkShot(x,y);
        }

       canvas.addEventListener('click', checkCoordinates);

        

    };
    
    
    function createGameOverScreen (gameSong) {
        console.log(gameSong)
        gameSong.pause();
        gameSong.currentTime = 0;
        gameSong = new Audio('sound/Game over.mp3');
        gameSong.play();
        var gameOverScreen = buildDom(`
        <section>
        <h1>Game Over</h1>
        <button>Restart</button>
        </section>
        `);
        var buttonRestart = gameOverScreen.querySelector('button');
        buttonRestart.addEventListener('click', function(){ createGameScreen(gameSong)});
    };
    
    createSplashScreen();
};

window.addEventListener('load',main);