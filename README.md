# Fancy Pong
A FANCY PONG GAME
In this game you play against Harold (The computer), in an upscale pong game!
Your objective is to hit the other player with 6 tomatoes in order to get out of paying the tab, using plates supplied by the restaurant.
Use W to move up,
Use S to move down!

 Upscale Pong


# Instructions
-Enter your name and click on the "TOMATOES INBOUND" button to start the game
- Use W to move your plate up.
- Use S to move your plate down.
- Avoiding letting the tomato hit you by using your plate to deflect it back to Harold
- Hit Harold 6 times with the tomato to win the game!

# Technologies Used
- HTML Canvas
- JavaScript
- CSS
- DOM Manipulation

# Approach
The game utilizes HTML Canvas for rendering graphics and JavaScript for game logic. It features two players, one player-controlled and computer-controlled, and a tomato as the ball. 
(SIDENOTE: a lot of the functions have label "meatball" because that was original idea, but was scrapped for a tomato instead)


Utilize an eventListener to initially hide the canvas, and render it in once the player has entered and submitted their name in the provided field.
```js
startButton.addEventListener('click', startGameScreen);

function startGameScreen() {
    startScreen.style.opacity= '0';
    container.style.transitionDelay = '1s'
    container.style.opacity = '1';
    player1Element.textContent = playerInput.value;
    runGame = setInterval(gameLoop, 60);
    setTimeout(runGame, 2000);
   }
```


Utilize classes for the plates and tomato rendering.
```js
class Player {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image
        //this.color = color;
        this.width = width;
        this.height = height;
        

        this.render = function() {
          ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        //this.render = function(){
            //ctx.fillStyle = this.color;
            //ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
class Meatball {
    constructor(x, y, image, radius, vx, vy){
        this.x = x;
        this.y = y;
        this.image = image;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
    
    this.render = function(){
        //ctx.fillStyle = this.color
        ctx.drawImage(this.image, this.x, this.y, 40, 40)
        ctx.beginPath();
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations
        ctx.fill();
        }
    }
}
```
Set up movement functions one for player
```js

function movementHandler(e) {
    console.log('movement :', e.key);
    if (e.key === 'ArrowUp' || e.key === 'w'){
        plate2.y - 25 >= 0 ? (plate2.y -= 25) : null;
        
    } else if (e.key === 'ArrowDown' || e.key === 's'){
        plate2.y + 25 <= game.height - plate2.height ? (plate2.y += 25) : null;
    }
}
```
One for computer, which is tracked by tracking the balls location on the canvas compared to the center of the CPU plate.
```js
function moveCPUPlate() {
    const plateCenter = plate1.y + plate1.height / 2
    if (meatball.y < plateCenter){
        plate1.y - 7 >= 0 ? (plate1.y -= 7) : null;
        
    } else if (meatball.y > plateCenter){
        plate1.y + 7 <= game.height - plate1.height ? (plate1.y += 7) : null;
    }
}
```


Collision detection is implemented to detect hits between the tomato and the plates while each hit increases the velocity of the ball, making it more difficult to track. 

```js
function detectHit(meatball, plate1){
if (meatball.x + meatball.radius >= plate1.x &&
    meatball.y + meatball.radius >= plate1.y &&
    meatball.y <= plate1.y + plate1.height){
        console.log('hit here')
        meatball.vx = -meatball.vx * 1.25
        meatball.vy = -meatball.vy * 1.5
    }
}

function detectHit2(meatball, plate2){
   
    if (meatball.x - meatball.radius <= plate2.x  &&
        meatball.y + meatball.radius >= plate2.y &&
        meatball.y - meatball.radius <= plate2.y + plate2.height){
            console.log('hit here')
            meatball.vx = -meatball.vx * 1.25
            meatball.vy = -meatball.vy * 1.5
        }
    }
```

Resetting the ball after each score by checking the location of the balls x location compared to the canvas width. 

```js
function meatballReset(ball){
    if (ball.x + ball.radius < 0) {
        ball.x = game.width / 2;
        ball.y = game.height / 2;
        ball.vx = -10;
        ball.vy = -10;
        score2 ++
        score2Element.textContent = score2
        status.textContent = 'Harold scored...better step it up'
        //status.textContent = new Typed('Harold Scored..better step it up!')
    }
    else if (ball.x - ball.radius > game.width){
        ball.x = game.width / 2;
        ball.y = game.height / 2;
        ball.vx = 10;
        ball.vy = 10;
        score ++
        scoreElement.textContent = score
        status.textContent = player1Element.textContent + ' scored Keep it up'
       // status.textContent = new Typed(player1Element.textContent + ' scored! Keep it up!')
    }
    }
```

Generate a win message by using DOM manipulation to change the text housed within the index.html at specified ID.

```js
function showWinner(){
    if (score === 6) {
        winScreen.textContent = 'Congrats ' + player1Element.textContent + ', you won Play again?'
    } else if (score2 === 6){
        winScreen.textContent = 'Looks like you just lost 5000 Dollars...try again?'
    }
    startScreen.style.opacity = '1'
    startScreen.style.transitionDelay = '1s'


}
```
Build a reset function that puts ball back into center of canvas and set velocity as start of game, but only to be triggered after the "button" is clicked again.

```js
function gameReset(){
    score = 0;
    score2 = 0;
    scoreElement.textContent = score
    score2Element.textContent = score2

    meatball.x = game.width / 2
    meatball.y = game.height / 2
    meatball.vx = -10
    meatball.vy = -10

    status.textContent = 'Who is gonna pay the tab this time?'
}
```
MASTER GAME LOOP:

The gameloop that calls on all functions, and sets the balls velo as well as detection for when the ball as at op of canvas. 

```js
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    plate1.render();
    plate2.render();
    meatball.render();
    meatball.x += meatball.vx;
    meatball.y += meatball.vy;

   detectHit(meatball, plate1);
   detectHit2(meatball, plate2);
   meatballReset(meatball);
   moveCPUPlate()
        
    if (meatball.y + meatball.vy > game.height - meatball.radius ||
        meatball.y + meatball.vy < meatball.radius) {
            meatball.vy = -meatball.vy;
```

Once either player scores 6, it will run the winner function, clear the game interval and once you click start again will reset ball at center of screen with starting velo listed in the reset function.

```js
    if (score === 6 || score2 === 6){
        showWinner()
    clearInterval(runGame);
    gameReset()
    }
}
}
```
# Unsolved Problems
- Setting delayed/Start timer for game as it transitions into the canvas
- Potential improvements in AI for the computer-controlled player. (Maybe create a hardmode with faster computer controlled plate)
- Adding sound effects and better visuals.


# ADD ONS
- Find a way to get ball to rotate based on direction it is moving
- Animated winning Screen
- Adding sound effects and better visuals
# Getting Started
--------INSTALLATION----------
1. Fork and Clone this Repo,
2. Git Clone onto your computer,
3. Open Index.html file!
4. Have fun playing Fancy Pong

--------WEB GAME--------
Click link below:
[Fancy Pong] - (https://davmeza98.github.io/upscale-pong/)
