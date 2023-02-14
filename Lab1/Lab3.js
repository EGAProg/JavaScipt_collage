"use strict";
function oddNumeric() {
    const arr = [];

    for (let i = 0; i <=15; i++) {
        arr.push(i);
        arr[i] % 2 ? console.log(`Odd num: ${arr[i]}`) : console.log(`Solid num: ${arr[i]}`);
    }
    console.log(arr);
}

function cardFinder() {
    const cards = ['Туз', 'Валет', 'Дама', 'Король', '10', '9', '8', '7', '6'];

    //const lookingCards = cards.filter(card => card.includes('Туз'));
    const lookingCards = "пп";
    let i;

    for (i = 0; i < cards.length; i++) {
        if (lookingCards === cards[i]) {
            console.log(`Была вытянута искомая карта: ${cards[i]}`);
            break;
        }
        console.log(`Вытянута карта: ${cards[i]}`); 
    }
    if (i >= cards.length) console.log(`В колоде нет \"${lookingCards}\"`);
}

function cardPasses(){
    const cards = ['Туз', 'Валет', 'Дама', 'Король', '10', '9', '8', '7', '6'];
    const cardsHold = [];
    let i;
    for (i = 0; i < cards.length; i++) {
        if (cards[i] == "Туз" || cards[i] == "Король") {
            cardsHold.push(cards[i]);
        }
    }
    console.log(cardsHold);

}
console.log("______________________________№1__________________________________");
oddNumeric();
console.log("______________________________№2__________________________________");
cardFinder();
console.log("______________________________№3__________________________________");
cardPasses();