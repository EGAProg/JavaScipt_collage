// Ex 2
"use strict";
const int = Math.floor(Math.random() * 89) + 10;
console.log("Num before:",int);
let SInt = int.toString(); // Переводим в строку
let firstNum = SInt[0]; // Присваиваем первый символ
let secondNum = SInt[1]; // Присваиваем второй символ
console.log("Num after:", secondNum+firstNum);

