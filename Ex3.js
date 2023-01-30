"use strict";
const number1 = Math.random() * 100;
const number2 = Math.random() * 100;
console.log("First num:",number1,"\nSecond num:",number2);
let average = (number1 + number2) / 2; // Среднее арефмитическое
let Frac =(number1 + number2) / 2 % 1; // Дробная часть

console.log("Fractional part of a number: " + Frac);
