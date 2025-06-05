# SBA4


Using Deck of Cards API

https://deckofcardsapi.com/

to create a BlackJack game


Click on the deck of cards to hit.

There is commented out code in the index.html (line 42) to create a hit button next to stand.
In case you don't like clicking on the deck. 
-Remember to:
- remove the hit id from line 50 of the html and comment out line 52
- change deck to hit on line 11 of the index.js

Your turn automatically ends when you bust or get 21.

**Make sure to let the dealers turn end before clicking new game.**
There is an issue where if you click new game while the dealer is drawing their cards the new game starts with the dealer having 3 cards and 
the winner message for the game you are leaving shows up.

*The original fix for this ended up disabling the stand button in certain situation so I am currently working through the problem.*