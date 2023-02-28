"use strict";

function terOper() {
    let some = 109;
    some > 100 ? console.log("some is greater than 100") : console.log("some is not greater than 100");
}

function rewriteCode() {
    let array = [5, -3, 'Apple', 10];

    for(let element of array) {
        console.log(element);
    }
}

function ifElifStuff() {
    let number = 3;

    if (number === 0) console.log("Вы ввели 0");
    else if (number === 1) console.log("Вы ввели 1");
    else if (number === 3) console.log("Вы ввели 3");
    else {

    }

}

function twoNumbers() {
    let num1 = 39;
    let num2 = 51;
    console.log(num1, num2);
    if(num1 > num2) {
        num1 = num1 ** 2;
        num2 = num2 * 2;
    }
    else if (num1 < num2) {
        num2 = num2 ** 2;
        num1 = num1 * 2;
    }
    
    console.log(num1, num2);
}

function dayOfTheWeek() {
    let dayNum = 12;
    
    const dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    
    try {
        for (let i = 1; i <= dayNum; i++) {
            if (dayNum > dayNames.length) {
                dayNum -= 7;         
            }
            else if (dayNum > 0 || dayNum <= 7) {
                console.log(dayNames[dayNum - 1]);
            }
        }
    }
    catch (e) {console.log(e)}

}
console.log("______________________________");
terOper();
console.log("______________________________");
rewriteCode();
console.log("______________________________");
ifElifStuff();
console.log("______________________________");
twoNumbers();
console.log("______________________________");
dayOfTheWeek();
