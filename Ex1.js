"use strict";
// Ex 1 1 способ
const number = Math.floor(Math.random() * 899) + 100;
let StrNum = number.toString();
console.log(number);
let PowRez = 1;
let SumRez = 0;
for (let i = 0; i < StrNum.length; i++) {
    PowRez = PowRez * Number(StrNum[i]);
}
console.log("Power:",PowRez);
for (let i = 0; i < StrNum.length; i++) {
    SumRez = SumRez + Number(StrNum[i]);
}
console.log("Sum:",SumRez);

// 2 способ (Плохой)

let num1 = number % 10; // Единицы
let num2 = Math.floor((number % 100) / 10); // Десятки
let num3 = Math.floor(number / 100); // Сотни
let sum = num1 + num2 + num3;
let pow = num1 * num2 * num3;
console.log("SUM:",sum);
console.log("POW:",pow);
