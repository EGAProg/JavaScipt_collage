"use strict";

function Ex1_FWay()
{
    const number = Math.floor(Math.random() * 899) + 100;
    let StrNum = number.toString(); // Переводим Int в String для того, чтобы разбить строку на массив
    console.log(number);
    let PowRez = 1; // = 1 для того, чтобы не было умножения на нуль
    let SumRez = 0;
    for (let i = 0; i < StrNum.length; i++) {
        PowRez = PowRez * Number(StrNum[i]); // Number() переводит String в Int
    }
    console.log("Power:",PowRez);

    for (let i = 0; i < StrNum.length; i++) {
        SumRez = SumRez + Number(StrNum[i]); // Number() переводит String в Int
    }
    console.log("Sum:",SumRez);
}

function Ex1_SWay()
{
    const number = Math.floor(Math.random() * 899) + 100;
    console.log(number);
    let num1 = number % 10; // Единицы
    let num2 = Math.floor((number % 100) / 10); // Десятки
    let num3 = Math.floor(number / 100); // Сотни
    let sum = num1 + num2 + num3;
    let mult = num1 * num2 * num3;

    console.log("SUM:",sum);
    console.log("POW:",mult);
}

function Ex2()
{
    const int = Math.floor(Math.random() * 89) + 10;
    console.log("Num before:",int);
    let SInt = int.toString(); // Переводим в строку
    let firstNum = SInt[0]; // Присваиваем первый символ
    let secondNum = SInt[1]; // Присваиваем второй символ
    console.log("Num after:", secondNum+firstNum);
}
function Ex3()
{
    const number1 = Math.random() * 100;
    const number2 = Math.random() * 100;
    console.log("First num:",number1,"\nSecond num:",number2);
    let average = (number1 + number2) / 2; // Среднее арефмитическое
    let Frac =(number1 + number2) / 2 % 1; // Дробная часть
    
    console.log("Fractional part of a number: " + Frac, "\nAverage number:", average);

}
function Ex4()
{
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
}



const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout}); 


/* 
    Я захотел ввод с клавиатуры, я его сделал. 
    ПОЧЕМУ НЕЛЬЗЯ СДЕЛАТЬ НОРМАЛЬНУЮ ФУНКЦИЮ ВВОДА С КЛАВИАТУРЫ, ЮЗЕР МОГ ВЫБРАТЬ ФУНКЦИЮ. 
    ВМЕСТО ИГРЫ НА ГИТАРЕ Я ДЕЛАЛ И ГУГЛИЛ ЭТО!
*/

let quest = "";
console.log("Press 1 to Ex1, 2 to Ex2, 3 to Ex3, 4 to Ex4");
rl.question("Enter your choice: ", (quest) => 
{
    switch(quest)
    {
        case 1:
            Ex1_FWay();
        case 2:
            Ex2();
        case 3:
            Ex3();
        case 4:
            Ex4();
    }
    rl.close();
})
    
    