const game = document.getElementById('game')
const movement = document.getElementById('movement')
const scoreElement= document.getElementById('score')
const score2Element = document.getElementById('score2')
const player1Element = document.getElementById('playername')
const player2Element = document.getElementById('playername2')
const status = document.getElementById('status')
const ctx = game.getContext('2d');

let plate1;
let plate2;
let meatball;

const playerPlate1 = document.getElementById('plate1');
const playerPlate2 = document.getElementById('plate2');

game.width = "1000";
game.height = "600";

//set player classes

class Player {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}
