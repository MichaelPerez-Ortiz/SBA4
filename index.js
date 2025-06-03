import { createNewDeck, drawCards } from "./deck.js";
import { handValue, winner } from "./script.js";



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


async function startNewGame() {
    playerCards = [];
    dealerCards = [];
    gameStarted = true;
    message.textContent = ""

    deck = await createNewDeck

    let startingHand = await drawCards(deck , 4);
    playerCards = [startingHand[0] , startingHand[1]];
    dealerCards = [startingHand[2] , startingHand[3]];
}

