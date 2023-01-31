"use strict";
////////////////////////////////////////////////////////////////////////
// First lab test
////////////////////////////////////////////////////////////////////////
function Coordinate() 
{
    const x1 = 4;
    const y1 = 1;
    const x2 = 6;
    const y2 = 10;

    const sideA = x2 - x1;
    const sideB = y2 - y1;

    const square = sideA * sideB;
    console.log("Square is :",square);
}

function Rounds()
{
    const number1 = Math.random() * 99;
    const number2 = Math.random() * 99;
    const n = Math.trunc(Math.random() * 5 + 1);
    /*
    const number1 = 13.123456789;
    const number2 = 2.123;
    const n = 5;
    */
    let fracticalFirst = number1 % 1 * Math.pow(10, n);
    let fracticalSecond = number2 % 1 * Math.pow(10, n);

    console.log("First number is :",number1);
    console.log("Second number is :",number2);
    console.log("N is :",n);
    console.log("Fractical of a first num:",Math.trunc(fracticalFirst));
    console.log("Fractical of a second num:",Math.trunc(fracticalSecond));
    console.log("Equal:",(fracticalFirst === fracticalSecond));
}

function OddNumbers()
{
    const oddRandom1 = Math.floor(Math.random() * 9999);
    let oddFinal = oddRandom1 / 2 + 3;
    console.log("Odd number is :", Math.round(oddFinal));
}

console.log("-----------------------------First EX--------------------------------");
Coordinate();
console.log("-----------------------------Second EX-------------------------------");
Rounds();
console.log("-----------------------------Third EX--------------------------------");
OddNumbers();