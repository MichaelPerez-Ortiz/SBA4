import { createNewDeck, drawCards } from "./deck.js";
import { handValue, winner } from "./script.js";



const yourCards = document.getElementById('yourCards');
const cpuCards = document.getElementById('cpuCards');
const playerScore = document.getElementById('playerScore');
const dealerScore = document.getElementById('dealerScore');
const message = document.getElementById('message');
const hitButton = document.getElementById('deck');
const standButton = document.getElementById('stand');
const newGameButton = document.getElementById('newGame');


let deck = null;
let playerCards = [];
let dealerCards = [];
let gameActive = false;
let dealerDraw = false;


async function startNewGame() {
    if (dealerDraw)
        return;

    playerCards = [];
    dealerCards = [];
    gameActive = true;
    message.textContent = "";
    message.classList.remove("show");
    message.classList.remove("settle");

    deck = await createNewDeck();

    let startingHand = await drawCards(deck , 4);
    playerCards = [startingHand[0] , startingHand[1]];
    dealerCards = [startingHand[2] , startingHand[3]];

gameDisplay();
enableActionButtons();

let playerScore = handValue(playerCards);
    if (playerScore === 21) {
        gameActive = false;
        gameDisplay();
        await new Promise(resolve => setTimeout(resolve,500));
        await stand();
    }


}


function gameDisplay() {

    yourCards.innerHTML = "";
    cpuCards.innerHTML = "";


        playerCards.forEach(card => {
            let cards = createCard(card);
            yourCards.appendChild(cards);
        });

        dealerCards.forEach((card , index) => {
            let cards = createCard(card, gameActive && index === 1 );
            cpuCards.appendChild(cards);
        });

    playerScore.textContent = handValue(playerCards);
    dealerScore.textContent = gameActive ? "?" : handValue(dealerCards);

    
}

function createCard(card , hidden = false) {
    let create = document.createElement("div");
    create.className = "card";

        if (hidden) {
            let imgs = document.createElement("img");
            imgs.src = "https://deckofcardsapi.com/static/img/back.png";
            imgs.alt = "Hidden Card";
            create.appendChild(imgs);

        } else {
            
            let imgs = document.createElement("img");
            imgs.src = card.image;
            imgs.alt = `${card.value} of ${card.suit}`;
            create.appendChild(imgs);
    }

        return create;

}

async function hit() {
    if (!gameActive)
        return;

    let [newCard] = await drawCards(deck , 1);
    playerCards.push(newCard);

    let playerScore = handValue(playerCards);
    
    gameDisplay();

    if (playerScore >= 21) {
        gameActive = false;
        gameDisplay();
        await new Promise(resolve => setTimeout(resolve,500));
        await stand();

    }

}


async function stand() {
    gameActive = false;
    dealerDraw = true;
    disableActionButtons();

    gameDisplay();
    await new Promise(resolve => setTimeout(resolve,500));

    let dealerScore = handValue(dealerCards);

        while (dealerScore < 17) {
            await new Promise(resolve => setTimeout(resolve , 500));
            let [newCard] = await drawCards(deck , 1);
            dealerCards.push(newCard);
            dealerScore = handValue(dealerCards);

            gameDisplay();
    }

    await new Promise(resolve => setTimeout(resolve,500));

        let playerScore = handValue(playerCards);
        let result = winner(playerScore , dealerScore);
        message.textContent = result;
        message.classList.add("show");
        

        setTimeout(() => {

            message.classList.remove("show");
            message.classList.add("settle");
        } ,2000);

        dealerDraw = false;
    
}


function enableActionButtons() {
    hitButton.disabled = false;
    standButton.disabled = false;
}


function disableActionButtons() {
    hitButton.disabled = true;
    standButton.disabled = true;
}


newGameButton.addEventListener("click" , startNewGame);

hitButton.addEventListener("click" , () => {
    if(gameActive) {
        hit();
    }
});

standButton.addEventListener("click" , stand);


disableActionButtons();