'use strict';
function main() {
    var mainElement = document.querySelector('#site-main');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    };
    
    function createSplashScreen () {
        var splashScreen = buildDom(`
            <section>
                <h1>Shoot the ShitHead</h1>
                <button>Start</button>
            </section>
        `);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', createGameScreen);
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
    function createGameScreen () {
        var gameScreen = buildDom(`
        <section>
            <canvas width="700" height="400"></canvas>
        </section>
        `);

        var canvas = document.querySelector('canvas');

        var game = new Game(canvas);
        
       //game.gameOverCallback(createGameOverScreen);
        
       game.startGame();
        
       

        

    };
    
    
    function createGameOverScreen () {
        var gameOverScreen = buildDom(`
        <section>
        <h1>Game Over</h1>
        <button>Restart</button>
        </section>
        `);
        var buttonRestart = gameOverScreen.querySelector('button');
        buttonRestart.addEventListener('click', createGameScreen);
    };
    
    createSplashScreen();
};

window.addEventListener('load',main);