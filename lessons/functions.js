"use strict";

function cards(cardsArr, options) {
    let statment = false;
    try {
        for (let i = 0; i < cardsArr.length; i++) {
            if (cardsArr[i] === options) {
                statment = true;
                break;
            }
        }
        statment ? console.log("Finded") : console.log("Not found");
    }
    catch(err) {console.log(err)}
}

const cardsArr = ['Tuz', 'Valet', 6, 10, 'Dama'];
cards(cardsArr, 'Korol');

// ----------------------------------------------------------------


function isPositive(numer) {
    if (numer > 0) {
        return true;        
    }    
    else {
        return false;
    }
}

function sortPos(array) {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        isPositive(array[i]);
        if (isPositive()) {
            array2.push(isPositive());
        }
    }
    return array2;
}

const array = [0, 2, -3, 4, -52, 894];
console.log(sortPos(array));