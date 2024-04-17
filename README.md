# upscale-pong
A FANCY PONG GAME
In this game you play against Harold (The computer), in an upscale pong game! (and by upscale, I mean fancy!)
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


Utilize an eventListener to initially hide the canvas, and render it in once the player has entered and submitted their name in the provided field. "INSERT CODE HERE"


Utilize classes for the plates and tomato rendering. "INSERT CODE HERE"

Set up movement functions one for player "INSERT CODE HERE"

One for computer, which is tracked by tracking the balls location on the canvas compared to the center of the CPU plate. "INSERT CODE HERE"


Collision detection is implemented to detect hits between the tomato and the plates while each hit will increase the velocity of the ball, making it more difficult to track. "INSERT CODE HERE"

Resetting the ball after each score by checking the location of the balls x location compared to the canvas width. "INSERT CODE HERE"

Generate a win message by using DOM manipulation to change the text housed within the index.html at specified ID. "INSERT CODE HERE"

Build a reset function that puts ball back into center of canvas and set velocity as start of game, but only to be triggered after the "button" is clicked again. "INSERT CODE HERE"

MASTER GAME LOOP:

The gameloop that calls on all functions, and sets the balls velo as well as detection for when the ball as at op of canvas. "INSERT CODE HERE"

Once either player scores 6, it will run the winner function, clear the game interval and once you click start again will reset ball at center of screen with starting velo listed in the reset function. "INSERT CODE HERE"

# Unsolved Problems
- Setting delayed/Start timer for game as it transitions into the canvas
- Potential improvements in AI for the computer-controlled player. (Maybe create a hardmode with faster computer controlled plate)
- Adding sound effects and better visuals.


# ADD ONS
- Find a way to get ball to rotate based on direction it is moving
- Animated winning Screen
- Adding sound effects and better visuals
# Getting Started


