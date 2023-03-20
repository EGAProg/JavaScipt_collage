"use strict";

function isNumberInRange(number) {
    return number > 0 && number < 10;
}
function filterNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNumberInRange(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function main() {
    let array = [83, 927, 1, 73, 15, 8, 27, 6, 0, 5];
    console.log(filterNumbers(array));
}

main();