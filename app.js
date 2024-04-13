const game = document.getElementById('game')
const scoreElement= document.getElementById('score')
const score2Element = document.getElementById('score2')
const player1Element = document.getElementById('playername')
const player2Element = document.getElementById('playername2')
const status = document.getElementById('status')
const ctx = game.getContext('2d');


let plate1;
let plate2;
let meatball;

const playerPlateImg1 = document.getElementById('plate1');
const playerPlateImg2 = document.getElementById('plate2');
const meatballImg = document.getElementById('meatball');
//paint initial screen

window.addEventListener('DOMContentLoaded', function(){
    //plate1 = new Player(785, 150, playerPlateImg1, 10, 75); not working- Follow up
    //plate2 = new Player(5, 150, playerPlateImg2, 10, 75); not working - follow up
    plate1 = new Player(785, 150, 'silver', 10, 75)
    plate2 = new Player(5, 150, 'silver', 10, 75)
    meatball = new Meatball(400, 200, 'brown', 10, 10, 10);

    const runGame = this.setInterval(gameLoop, 60);
});

document.addEventListener('keydown', movementHandler);

//Canvas render
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

//set player classes

class Player {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        

       // this.render = function() {
          //ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        //}
        this.render = function(){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
class Meatball {
    constructor(x, y, color, radius, vx, vy){
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
    
    this.render = function(){
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations
        ctx.fill();
        }
    }
}


//render player on canvas
//plate1 = new Player(785, 150, 'silver', 10, 75);
//plate1.render();

//plate2 = new Player(5, 150, 'silver', 10, 75);
//plate2.render();
//keyboard function

function movementHandler(e) {
    console.log('movement :', e.key);
    if (e.key === 'ArrowUp' || e.key === 'w'){
        plate2.y - 10 >= 0 ? (plate2.y -= 10) : null;
        
    } else if (e.key === 'ArrowDown' || e.key === 's'){
        plate2.y + 10 <= game.height - plate2.height ? (plate2.y += 10) : null;
    }
}

//Game Process
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    plate1.render();
    plate2.render();
    meatball.render();
    meatball.x += meatball.vx;
    meatball.y += meatball.vy;

    if (meatball.y + meatball.vy > game.height - meatball.radius ||
        meatball.y + meatball.vy < meatball.radius) {
            meatball.vy = -meatball.vy;
    }

    if (meatball.x + meatball.vx > game.width - meatball.radius ||
        meatball.x + meatball.vx < meatball.radius) {
            meatball.vx = -meatball.vx;
    }
    

}