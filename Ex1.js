"use strict";
// Ex 1
const number = 628;
let StrNum = number.toString();

let PowRez = 1;
let SumRez = 0;

for (let i = 0; i < StrNum.length; i++) {
    PowRez = PowRez * Number(StrNum[i]);
}
console.log("Power: ",PowRez);

for (let i = 0; i < StrNum.length; i++) {
    SumRez = SumRez + Number(StrNum[i]);
}
console.log("Sum: ",SumRez);
