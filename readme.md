======= Project's name =======
Shoot the Shithead



======= Description =======

"Shoot the Shithead" is a game like Duck Hunt, but with Maqueda Flying instead. You will have to shoot Maqueda's face that will appear flying on the screen. You will have 5 bullets(lives), if you hit Maqueda, you won't waste a bullet and you get 5 points, if you fail, you will lose a bullet and get no points.
Try to shoot the idiot and have fun.



======= MVP (DOM - CANVAS) =======

4 Screens:

Main Screen
On the main screen you will be able to click 2 buttons, the first one to start the game and the second one to go to the instructions of "How to play".
It's made with a title and 2 buttons.

Instruction Screen (How to play)
A screen that shows you how to play and what are the different elements of the game. You will be able to return to the main screen pressing Return button.
It's made with a title, some text and one button.

Game Screen
A screen that you will be on the wild with some shitheads flying around. You have to shoot those shitheads to get points, if you fail 5 times, you will be redirected to the Game Over Screen.
It's made with a Canvas, enemies random spawning on the sides and 2 counters of score and lives at the bottom.

GameOver Screen
The end of the game, you will se your score and you will be able to return to the main menu with one button.
Is made with a title and text that will show you your score and a button to return to the main menu.



======= Backlog =======
-> Image of the player down on the floor (like a character).
-> Music and sounds.
-> More levels and difficulty.
-> Different backgrounds.
-> Shoot Animation.



======= Data structure =======

Enemy properties:
Direction, Position, Velocity, Size, Canvas

Enemy Methods:
Movement, Draw

Game properties:
Player, Enemies, GameOverScreen(false), Canvas

Game methods:
StartGame, Update, Clear, Draw, GameOverCall

Main methods:
Main, SplashScreen, ButtonStart, GameOverScreen, ButtonRestart, ButtonInformation

Player methods:
Canvas, clickCheck, updateMousePosition, lives



======= States y States Transitions =======

splashScreen --> 2 buttons: 1 to Start Game, 1 to HowToPlay
gameScreen --> Counter of lives to 0
gameoverScreen --> Return to main menu button
instructionsScreen --> Return to main menu button



======= Task =======

BackLog:
-> Music and sound effects
-> Different levels & difficulty
-> Different backgrounds
-> Character icon
-> Shoot animations



======= Links =======

=== Trello ===

Link:
https://trello.com/b/NtJiLT69/duck-hunt


=== Git ===

GitHub link:
https://github.com/makeda67/duck-hunt


=== Slides ===

URls for the project presentation (slides) Link Slides.com