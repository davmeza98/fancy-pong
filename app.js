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
        

        this.render = function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

plate1 = new Player(785, 150, 'silver', 10, 75);
plate1.render();

plate2 = new Player(5, 150, 'silver', 10, 75);
plate2.render();

function movementHandler(e) {
    if (e.key === 'ArrowUp' || e.key === 'w'){
        if (plate2.y - 10 >= 0){
            plate2.y -= 10;
        }
    } else if (e.key === 'ArrowDown' || e.key === 's'){
        if (plate2.y + 10 <= game.height  - plate2.height)
        plate2.y += 10;
    }
}
