"use strict";
const number1 = Math.floor(Math.random() * -2998) + 1999;
const number2 = Math.floor(Math.random() * -2998) + 1999;
const number3 = Math.floor(Math.random() * -2998) + 1999;
console.log("First num:",number1,"\nSecond num:", number2, "\nThird num:", number3);

// Возводим числа в третью степень, после все это кидаем в модуль
let num1 = Math.abs(Math.pow(number1, 3));
let num2 = Math.abs(Math.pow(number2, 3));
let num3 = Math.abs(Math.pow(number3, 3));


let average = (num1 + num2 + num3) / 3; // Средне арифметическое
console.log("Averange: ",average);

let powAver = Math.pow(((number1 ** 2) * (number2 ** 2) * (number3 ** 2)), -3); // Средне геометрическое
console.log("Power averange: ",powAver);

