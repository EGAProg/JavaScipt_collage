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
        if (cards[i] !== "Туз" && cards[i] !== "Король") {
            continue;
        } else cardsHold.push(cards[i]);
    }
    console.log(cardsHold);

}

function trashHolder() {
    let cup = 250;
    const glup = 30;
    let i = 1;
    while (cup > 0) {
        cup -= glup;
        console.log(`В кружке осталось ${cup} миллилитров`);
        if (glup > cup){ 
            cup = 0; 
            console.log(`В кружке осталось ${cup} миллилитров`);
        }
        i++;
    }
    console.log("Чай выпит");

    console.log(`Вы выпили чай за ${i} глотков`);
}

console.log("______________________________№1__________________________________");
oddNumeric();
console.log("______________________________№2__________________________________");
cardFinder();
console.log("______________________________№3__________________________________");
cardPasses();
console.log("______________________________№4__________________________________");
trashHolder();