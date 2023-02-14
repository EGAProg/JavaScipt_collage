"use strict";

let arr = [];

for (let i = 0; i <=15; i++) {
    arr.push(i);
    arr[i] % 2 ? console.log(`Odd num: ${arr[i]}`) : console.log(`Solid num: ${arr[i]}`);
}
console.log(arr);

