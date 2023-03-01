"use strict";

////////////////////////////////////////////////////////////////

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
let array = [83, 927, 1, 73, 15, 8, 27, 6, 0, 5];
console.log(filterNumbers(array));

////////////////////////////////////////////////////////////////

function age(num) {
    if (num <= 17) {
      return "ребенок";
    } else if (num <= 30) {
      return "молодой";
    } else if (num <= 55) {
      return "зрелый";
    } else {
      return "старый";
    }
}
  for (let i = 1; i <= 100; i++) {
    console.log(i + " – " + age(i));
}

////////////////////////////////////////////////////////////////

let bruhArray = [124, 0, "", "Hi Mark", 41, false, undefined, null, 863, 10987, NaN];
function cleanArray(array){
    return array.filter(Boolean);
}
console.log(cleanArray(bruhArray));

////////////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 3, 5, 15, 29, 1, 0, 4];
function removeDuplicates(arr) {
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}
console.log(removeDuplicates(arr));