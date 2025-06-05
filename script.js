export function handValue(cards) {
    let value = 0;
    let aces = 0;

    cards.forEach(card => {
        if (card.value === "ACE") {
            aces += 1;
            value += 11;

        } else if  (["KING" , "QUEEN" , "JACK"].includes(card.value)) {
            value += 10;

        } else {
            value += parseInt(card.value);
        }
    });


    while (value > 21 && aces > 0) {
        value -= 10;
        aces -= 1;
    }

        return value;
}

export function winner(playerScore , dealerScore) {

        if (playerScore > 21) return "Bust ! Dealer Wins!";
        if (dealerScore > 21) return "You Win! Dealer busts!";
        if (playerScore === 21) return "21! You Win!";
        if (dealerScore === 21) return "21! Dealer Wins!";
        if (playerScore > dealerScore) return "You Win!";
        if (dealerScore > playerScore) return "Dealer Wins!";
        
                    return "Push!";
}