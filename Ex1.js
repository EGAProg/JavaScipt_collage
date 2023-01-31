"use strict";
// Ex 1
console.log("...First way...\n");
const number = Math.floor(Math.random() * 899) + 100;
let StrNum = number.toString(); // Переводим Int в String для того, чтобы разбить строку на массив
console.log(number);
let MultRez = 1; // = 1 для того, чтобы не было умножения на нуль
let SumRez = 0;
for (let i = 0; i < StrNum.length; i++) {
    PowRez = PowRez * Number(StrNum[i]); // Number() переводит String в Int
}
console.log("Multiply:",PowRez);

for (let i = 0; i < StrNum.length; i++) {
    SumRez = SumRez + Number(StrNum[i]); // Number() переводит String в Int
}
console.log("Sum:",SumRez);
// Второй способ
console.log("...Second way...\n");
let num1 = number % 10; // Единицы
let num2 = Math.floor((number % 100) / 10); // Десятки
let num3 = Math.floor(number / 100); // Сотни
let sum = num1 + num2 + num3;
let mult = num1 * num2 * num3;
console.log("SUM:",sum);
console.log("MULT:",pow);
