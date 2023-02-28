"use strict";

function tenNums() {
    let arr = [3, 6, 2, 56, 32, 5, 89, 12, 51, 32];
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i] ) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

function evenOdd() {
    let arr = [];
    for (let i = 0; i <= 15; i++) {
        arr[i] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 2 === 0) {
                console.log(i +  " is even");
        }
        else {
                console.log(i + " is odd");
        }
    }
}

function studentsGrade() {
    /*
    0 - 60 - F
    61 - 70 - D
    71 - 80 - C
    81 - 90 - B
    91 - 100 - A
    */
    let someNames = ["Glenn", "Jim", "Mike", "Jason", "John"];
    let someGrades = [50, 61, 71, 81, 91];
    let FuckGrade;
    if (someNames.length == someGrades.length) {
        for (let i = 0; i < someNames.length; i++) {
            if (someGrades[i] < 60) FuckGrade = "F";
            else if (someGrades[i] < 70) FuckGrade = "D"
            else if (someGrades[i] < 80) FuckGrade = "C"
            else if (someGrades[i] < 90) FuckGrade = "B"
            else if (someGrades[i] <= 100) FuckGrade = "A"
            else FuckGrade = "N/A"
            console.log(someNames[i] + " have " + FuckGrade);
        }
    }
}

function bucks() {

}

function threeNumsSort() {

}

tenNums();
console.log("______________________________");
evenOdd();
console.log("______________________________");
studentsGrade();
console.log("______________________________");
bucks();
console.log("______________________________");
threeNumsSort();
/*
Write a program that accepts a line, inside which there are several entries of the form "$120", you need to output ALL the numbers after the dollar
Example: "There are several products for $120 and $20 and $70, they are all cool" - > 120 20 70

Write a conditional JavaScript operator for sorting numbers.
*/