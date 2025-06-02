const API_URL = "https://deckofcardsapi.com/api";

export async function createNewDeck() {
    let newDeck = await fetch(`${API_URL}/deck/new/shuffle/?deck_count=1`);
    let newDecks = await newDeck.json();
    return data.deck_id;
}

export async function drawCards(deck , count) {
    let drawCard = await fetch(`${API_URL}/deck/${deck}/draw/?count=${count}`);
    let draw = await drawCard.json();
    return data.cards;
}

