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

console.log(playerPlate1)
game.width = "900";
game.height = "600";

