
const playersCards = document.getElementById('playersCards');
const dealersCards = document.getElementById('dealersCards');
const playerScore = document.getElementById('playerScore');
const dealerScore = document.getElementById('dealerScore');
const message = document.getElementById('message');
const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const newGameButton = document.getElementById('newGame');


let deck = null;
let playerCards = [];
let dealerCards = [];
let gameStarted = false;


