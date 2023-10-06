let cards = [];
let sum = 0;
let message = '';
let isAlive = false;
let hasBlackjack = false;

player = {
    name: 'BoJack',
    chips: 145
};

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1;

    if (card === 1){
        return 11;
    } else if (card > 10){
        return 10;
    } else {
        return card;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        hasBlackjack = true;
    }

    messageEl.textContent = message;
}

function newCard(){
    if (isAlive && !hasBlackjack){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
    
}