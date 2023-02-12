"use strict";

// Leap year
function LeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) return true;
    else return false;
}
// Biggest num from array
function BiggestNumber() {
    const numbers = [5, 13, 37, 97, 82, 18, 0];
    let largest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
          largest = numbers[i];
        }
    }
    console.log("The largest number is: " + largest);
}

// Math functions
function MathOperator(operator) {
    let number1 = 10;
    let number2 = 5;
    let operation = "add";

    let result;

    switch (operator) {
        case "add":
            result = number1 + number2;
            console.log("The result is: " + result);
            break;
        case "sub":
            result = number1 - number2;
            console.log("The result is: " + result);
            break;
        case "mul":
            result = number1 * number2;
            console.log("The result is: " + result);
            break;
        case "div":
            result = number1 / number2;
            console.log("The result is: " + result);
            break;
        default: console.log("Incorrect operator: " + operator);
    }
    if (result !== undefined) console.log("Result: " + result);    
}

// Day in month
function DaysInMonth(monthNumber){
    if (monthNumber % 2 && monthNumber < 12 || (monthNumber === 11 || monthNumber === 9)) {
        console.log("30 days");
    }
    else if (monthNumber === 2) {
        console.log("28 or 29 days");
    }
    else if (!(monthNumber % 2)) {
        console.log("31 days");
    }
    else {
        console.log("Unexpected error");
    }

}

// Array sort
function ArraySort() {
    const arr = [13, 63, 17, 237]
    let newArray = {};

    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let bols = arr[i];
                arr[i] = arr[j];
                arr[j] = bols;
            } 
        }
    } 
    console.log(arr);
        
}

// 1 Ext
const lYear = LeapYear(2020);
console.log(lYear);

// 2 ext
BiggestNumber();

// 3 ext
const mathOper = MathOperator("add");
console.log(mathOper);

// 4 ext
DaysInMonth(5);

// 5 ext
ArraySort()